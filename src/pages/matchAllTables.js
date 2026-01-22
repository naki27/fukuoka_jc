import React, { useContext, useState } from "react";
import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./styles/detailGuidelines.module.scss";
import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import { MobileContext } from '~/contexts/MobileContext';
import { Document, Page, pdfjs } from "react-pdf";

const matchAllTables = () => {
    const isMobile = useContext(MobileContext);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [cacheBuster, setCacheBuster] = useState(Date.now());
    const [pdfLoaded, setPdfLoaded] = useState(false);

    const basePdfUrl = `https://ijtbgl77pfz64mxz.public.blob.vercel-storage.com/%E7%AC%AC32%E5%9B%9E%E3%82%B7%E3%82%99%E3%83%A3%E3%83%8F%E3%82%9A%E3%83%B3%E3%82%AB%E3%83%83%E3%83%95%E3%82%9A%E7%A6%8F%E5%B2%A1%E5%A4%A7%E4%BC%9A_%E5%A4%A7%E4%BC%9A%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B_260112.pdf`;
    const pdfFilePath = `${basePdfUrl}?t=${cacheBuster}`;

    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
        setPdfLoaded(true);
    }

    function changePage(offset) {
        setPageNumber(prev => prev + offset);
    }

    function previousPage() { changePage(-1); }
    function nextPage() { changePage(1); }

    const handleDownload = async () => {
        try {
            const pdf = await pdfjs.getDocument(pdfFilePath).promise;
            const data = await pdf.getData();
            const blob = new Blob([data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = `大会組み合わせ.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('ダウンロードに失敗しました', err);
            window.open(pdfFilePath, '_blank');
        }
    };

    const reloadPdf = () => setCacheBuster(Date.now());

    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">大会組み合わせ</Typography>
                </Breadcrumbs>

                <H1 title="大会組み合わせ" />

                <Box paddingY={3}>
                    <Box
                        display="flex"
                        flexDirection={isMobile ? 'column' : 'row'}
                        justifyContent={isMobile ? 'flex-start' : 'space-between'}
                        alignItems="center"
                        gap={isMobile ? 2 : 0}
                        className={`${styles.ButtonArea}`}
                    >
                        <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'stretch' : 'center'}>
                            {!isMobile && (
                                <Button
                                    className={`${styles.InfoButton}`}
                                    onClick={handleDownload}
                                    variant="contained"
                                    startIcon={<GetAppIcon />}
                                >
                                    PDFをダウンロード
                                </Button>
                            )}
                        </Box>

                        <Box display="flex" alignItems="center" className={`${styles.PageNav}`} sx={{ mt: isMobile ? 1 : 0, alignSelf: isMobile ? 'flex-end' : 'auto' }}>
                            <Button
                                disabled={pageNumber <= 1}
                                onClick={previousPage}
                                startIcon={<ArrowBackIosNewIcon />}
                                style={{ color: '#333' }}
                                size={isMobile ? 'small' : 'medium'}
                            >
                                {isMobile ? "前" : "前のページ"}
                            </Button>
                            <Button
                                disabled={pageNumber >= (numPages || 1)}
                                onClick={nextPage}
                                endIcon={<ArrowForwardIosIcon />}
                                style={{ color: '#333', marginLeft: isMobile ? 6 : 8 }}
                                size={isMobile ? 'small' : 'medium'}
                            >
                                {isMobile ? "次" : "次のページ"}
                            </Button>
                            <Typography style={{ marginLeft: 12, color: '#333', fontSize: isMobile ? '0.9rem' : '1rem' }}>{pageNumber} / {numPages || '--'}</Typography>
                        </Box>
                    </Box>

                    <Box paddingTop={3}>
                        <Document
                            file={pdfFilePath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={(error) => console.error('PDF読み込みエラー:', error)}
                        >
                            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </Box>
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default matchAllTables;
