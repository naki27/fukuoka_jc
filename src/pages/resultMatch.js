import React, {useEffect, useState, useContext} from "react";
import { Container, Breadcrumbs, Typography, Button, Box, CircularProgress } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./styles/progressChart.module.scss";
import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import Image from 'next/image';
import { Document, Page, pdfjs } from "react-pdf";
import { MobileContext } from '~/contexts/MobileContext';

const resultMatch = () => {
    const [params, setParams] = useState({
        battleFormat: "",
        sex: "",
        age: "",
    });
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [fileExists, setFileExists] = useState(null); // null: unknown, true/false
    const [cacheBuster, setCacheBuster] = useState(Date.now());
    const [checkingFile, setCheckingFile] = useState(false);
    const isMobile = useContext(MobileContext);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const battleFormat = searchParams.get("bf") || "league";
        const sex = searchParams.get("sex") || "female";
        const age = searchParams.get("age") || "18";

        setParams({
            battleFormat: (battleFormat != "league" &&  battleFormat != "tournament") ? "league" : battleFormat,
            sex: (sex != "male" &&  sex != "female" &&  sex != "mix") ? "female" : sex,
            age: (age != "18" &&  age != "30" &&  age != "40" &&  age != "50" &&  age != "60" &&  age != "70") ? "18" : age
        });
    }, []);

    const sexMap = {
        female: "女子",
        male: "男子",
        mix: "混合"
    };
    const sexName = sexMap[params.sex];
    const battleFormatName = params.battleFormat == "league" ? "予選" : "決勝";

    // cors対策のため、vercel blobを利用（https://vercel.com/fukuokajcs-projects/~/stores/blob/store_IjTBgl77PFZ64Mxz/browser）
    const basePdfUrl = `https://ijtbgl77pfz64mxz.public.blob.vercel-storage.com/result-match-${params.sex}-${params.age}-${params.battleFormat}.pdf`;
    // キャッシュを回避するため、毎回異なるクエリを付与する
    const pdfFilePath = `${basePdfUrl}?timestamp=${cacheBuster}`;
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    // PDF の存在チェック（HEAD リクエスト）。params 初期化後と cacheBuster 変更時に実行
    useEffect(() => {
        if (!params.battleFormat) return; // params が初期化されるまで待つ
        let mounted = true;
        const check = async () => {
            setCheckingFile(true);
            try {
                const res = await fetch(basePdfUrl, { method: 'HEAD', cache: 'no-store' });
                if (!mounted) return;
                setFileExists(res.ok);
            } catch (err) {
                console.error('PDF existence check failed:', err);
                if (!mounted) return;
                setFileExists(false);
            } finally {
                if (mounted) setCheckingFile(false);
            }
        };

        check();

        return () => { mounted = false; };
    }, [params, cacheBuster]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const handleDownload = async () => {
        if (!fileExists) return;
        // ダウンロードでもキャッシュを避ける
        const pdf = await pdfjs.getDocument(pdfFilePath).promise;
        const data = await pdf.getData();
        const blob = new Blob([data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `大会結果-${sexName}（${battleFormatName}）.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    const reloadPdf = () => {
        setCacheBuster(Date.now());
    };

    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Link underline="hover" color="inherit" href={`/resultMatchIndex?bf=${params.battleFormat}`}>
                        大会結果（{battleFormatName}）
                    </Link>
                    <Typography color="textPrimary">{`大会結果-${sexName}（${battleFormatName}）`}</Typography>
                </Breadcrumbs>
                <H1 title={`大会結果-${sexName}（${battleFormatName}）`} />

                <Box paddingBottom={3}>
                    <H2 title={params.age === "18" ? "フリーの部" : `${params.age}歳以上の部`} />

                    <div className={`${styles.ButtonArea}`}>
                        <Button
                            className={`${styles.InfoButton}`}
                            onClick={handleDownload}
                            variant="contained"
                            startIcon={<GetAppIcon />}
                            disabled={checkingFile || fileExists === false}>
                                PDFをダウンロード
                        </Button>

                        <Button
                            className={`${styles.InfoButton}`}
                            onClick={reloadPdf}
                            variant="outlined"
                            style={{ marginLeft: 8 }}>
                                再読み込み
                        </Button>

                        <div className={`${styles.PageButtonArea}`}>
                            <div>
                                <Button className={`${styles.PageButton}`} disabled={pageNumber <= 1} onClick={previousPage} startIcon={<ArrowBackIosNewIcon />}></Button>
                                <Button className={`${styles.PageButton}`} disabled={pageNumber >= numPages} onClick={nextPage} startIcon={<ArrowForwardIosIcon />}></Button>
                            </div>
                            <p className={`${styles.PageText}`}>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</p>
                        </div>
                    </div>

                    {checkingFile ? (
                        <Box display="flex" justifyContent="center" padding={4}>
                            <CircularProgress />
                        </Box>
                    ) : fileExists === false ? (
                        <Box padding={4} textAlign="center">
                            <Typography>大会結果はまだ公開されていません。公開されるまでしばらくお待ちください。</Typography>
                        </Box>
                    ) : (
                        <Document
                            file={pdfFilePath} // PDFファイルのパスを指定
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={(error) => console.error("PDF読み込みエラー:", error)}
                        >
                            <Page key={pageNumber} pageNumber={pageNumber}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}/>
                        </Document>
                    )}
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default resultMatch;