import React, { useContext, useState } from "react";

import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import { MobileContext } from '~/contexts/MobileContext';

import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./styles/detailGuidelines.module.scss";

const venueMap = () => {
    const isMobile = useContext(MobileContext);

    // コート配置図
    const [numPagesA, setNumPagesA] = useState(null);
    const [pageNumberA, setPageNumberA] = useState(1);
    const [cacheBusterA, setCacheBusterA] = useState(Date.now());

    // 会場周辺見取り図
    const [numPagesB, setNumPagesB] = useState(null);
    const [pageNumberB, setPageNumberB] = useState(1);
    const [cacheBusterB, setCacheBusterB] = useState(Date.now());

    const pdfA = `https://ijtbgl77pfz64mxz.public.blob.vercel-storage.com/JC%E3%82%B3%E3%83%BC%E3%83%88%E9%85%8D%E7%BD%AE%E5%9B%B3_260123.pdf?t=${cacheBusterA}`;
    const pdfB = `https://ijtbgl77pfz64mxz.public.blob.vercel-storage.com/JC%E4%BC%9A%E5%A0%B4%E5%91%A8%E8%BE%BA%E8%A6%8B%E5%8F%96%E3%82%8A%E5%9B%B3_260123.pdf?t=${cacheBusterB}`;

    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    function onLoadSuccessA({ numPages }) {
        setNumPagesA(numPages);
        setPageNumberA(1);
    }
    function onLoadSuccessB({ numPages }) {
        setNumPagesB(numPages);
        setPageNumberB(1);
    }

    function changePageA(offset) { setPageNumberA(prev => prev + offset); }
    function changePageB(offset) { setPageNumberB(prev => prev + offset); }

    const downloadPdf = async (fileUrl, filename) => {
        try {
            const pdf = await pdfjs.getDocument(fileUrl).promise;
            const data = await pdf.getData();
            const blob = new Blob([data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('ダウンロードに失敗しました', err);
            window.open(fileUrl, '_blank');
        }
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
                    <Typography color="textPrimary">会場図</Typography>
                </Breadcrumbs>

                <H1 title="会場図" />

                {/* コート配置図 */}
                <Box paddingY={3}>
                    <H2 title="コート配置図" />

                    <Box
                        display="flex"
                        flexDirection={isMobile ? 'column' : 'row'}
                        justifyContent={isMobile ? 'flex-start' : 'space-between'}
                        alignItems="center"
                        gap={isMobile ? 2 : 0}
                        className={`${styles.ButtonArea}`}
                    >
                        {!isMobile && (
                            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'stretch' : 'center'}>
                                <Button
                                    className={`${styles.InfoButton}`}
                                    onClick={() => downloadPdf(pdfA, 'コート配置図.pdf')}
                                    variant="contained"
                                    startIcon={<GetAppIcon />}
                                    fullWidth={isMobile}
                                >
                                    PDFをダウンロード
                                </Button>
                            </Box>
                        )}

                        <Box display="flex" alignItems="center" className={`${styles.PageNav}`} sx={{ mt: isMobile ? 1 : 0, alignSelf: isMobile ? 'flex-end' : 'auto' }}>
                            <Button disabled={pageNumberA <= 1} onClick={() => changePageA(-1)} startIcon={<ArrowBackIosNewIcon />} style={{ color: '#333' }} size={isMobile ? 'small' : 'medium'}>
                                {isMobile ? '前' : '前のページ'}
                            </Button>
                            <Button disabled={pageNumberA >= (numPagesA || 1)} onClick={() => changePageA(1)} endIcon={<ArrowForwardIosIcon />} style={{ color: '#333', marginLeft: isMobile ? 6 : 8 }} size={isMobile ? 'small' : 'medium'}>
                                {isMobile ? '次' : '次のページ'}
                            </Button>
                            <Typography style={{ marginLeft: 12, color: '#333', fontSize: isMobile ? '0.9rem' : '1rem' }}>{pageNumberA} / {numPagesA || '--'}</Typography>
                        </Box>
                    </Box>

                    <Box paddingTop={3}>
                        <Document file={pdfA} onLoadSuccess={onLoadSuccessA} onLoadError={(e) => console.error('PDF読み込みエラー:', e)}>
                            <Page pageNumber={pageNumberA} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </Box>
                </Box>

                {/* 会場周辺見取り図 */}
                <Box paddingY={3}>
                    <H2 title="会場周辺見取り図" />

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
                                    onClick={() => downloadPdf(pdfB, '会場周辺見取り図.pdf')}
                                    variant="contained"
                                    startIcon={<GetAppIcon />}
                                    fullWidth={isMobile}
                                >
                                    PDFをダウンロード
                                </Button>
                            )}
                        </Box>

                        <Box display="flex" alignItems="center" className={`${styles.PageNav}`} sx={{ mt: isMobile ? 1 : 0, alignSelf: isMobile ? 'flex-end' : 'auto' }}>
                            <Button disabled={pageNumberB <= 1} onClick={() => changePageB(-1)} startIcon={<ArrowBackIosNewIcon />} style={{ color: '#333' }} size={isMobile ? 'small' : 'medium'}>
                                {isMobile ? '前' : '前のページ'}
                            </Button>
                            <Button disabled={pageNumberB >= (numPagesB || 1)} onClick={() => changePageB(1)} endIcon={<ArrowForwardIosIcon />} style={{ color: '#333', marginLeft: isMobile ? 6 : 8 }} size={isMobile ? 'small' : 'medium'}>
                                {isMobile ? '次' : '次のページ'}
                            </Button>
                            <Typography style={{ marginLeft: 12, color: '#333', fontSize: isMobile ? '0.9rem' : '1rem' }}>{pageNumberB} / {numPagesB || '--'}</Typography>
                        </Box>
                    </Box>

                    <Box paddingTop={3}>
                        <Document file={pdfB} onLoadSuccess={onLoadSuccessB} onLoadError={(e) => console.error('PDF読み込みエラー:', e)}>
                            <Page pageNumber={pageNumberB} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </Box>
                </Box>

            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
};

export default venueMap;