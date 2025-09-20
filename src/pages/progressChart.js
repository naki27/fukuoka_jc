import React, {useEffect, useState, useCallback} from "react";
import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";
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

const progressChart = () => {
    const [params, setParams] = useState({ battleFormat: "" });
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const battleFormat = searchParams.get("bf") || "league";
        setParams({
            battleFormat: (battleFormat != "league" &&  battleFormat != "tournament") ? "league" : battleFormat
        });
    }, []);

    const battleFormatName = params.battleFormat == "league" ? "予選" : "決勝";
    const pdfFilePath = `/progressCharts/progress-chart-${params.battleFormat}.pdf`;
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
        const pdf = await pdfjs.getDocument(pdfFilePath).promise;
        const data = await pdf.getData();
        const blob = new Blob([data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `進行表（${battleFormatName}）.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
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
                    <Typography color="textPrimary">{`進行表（${battleFormatName}）`}</Typography>
                </Breadcrumbs>
                <H1 title={`進行表（${battleFormatName}）`} />

                <Box paddingBottom={3}>
                    <div className={`${styles.ButtonArea}`}>
                        <Button
                            className={`${styles.InfoButton}`}
                            onClick={handleDownload}
                            variant="contained"
                            startIcon={<GetAppIcon />}>
                                PDFをダウンロード
                        </Button>

                        <div className={`${styles.PageButtonArea}`}>
                            <div>
                                <Button className={`${styles.PageButton}`} disabled={pageNumber <= 1} onClick={previousPage} startIcon={<ArrowBackIosNewIcon />}></Button>
                                <Button className={`${styles.PageButton}`} disabled={pageNumber >= numPages} onClick={nextPage} startIcon={<ArrowForwardIosIcon />}></Button>
                            </div>
                            <p className={`${styles.PageText}`}>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</p>
                        </div>
                    </div>

                    <Document
                        file={pdfFilePath} // PDFファイルのパスを指定
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={(error) => console.error("PDF読み込みエラー:", error)}
                    >
                        <Page key={pageNumber} pageNumber={pageNumber}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}/>
                    </Document>
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default progressChart;