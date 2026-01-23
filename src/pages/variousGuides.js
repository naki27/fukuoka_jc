import React, { useContext } from "react";
import styles from "./styles/variousGuides.module.scss";

import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import Image from 'next/image';
import { MobileContext } from '~/contexts/MobileContext';

const variousGuides = () => {
    const isMobile = useContext(MobileContext);

    const onBentoHotelInfoDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/1lb2OsyVyK4AdGCi5q9RPObl_rmCcZk-0/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=1lb2OsyVyK4AdGCi5q9RPObl_rmCcZk-0&export=download&format=pdf";
      link.click();
    };
    const onBentoHotelFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/13uVyU0cBCVxfwzIgEaWmvnldMQf4BHm1/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=13uVyU0cBCVxfwzIgEaWmvnldMQf4BHm1&export=download&format=pdf";
      link.click();
    };
    const onGoodsInfoDownload = _ => {
        const link = document.createElement("a");
        // https://drive.google.com/file/d/1uEfaZiyVC8dRzdzm0zSH4whaXD7fOMYh/view?usp=sharing
        link.href = "https://drive.google.com/uc?id=1uEfaZiyVC8dRzdzm0zSH4whaXD7fOMYh&export=download&format=pdf";
        link.click();
    };
    const onGoodsFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/1Y6sDrqJCj9yRjudYGLojBYm2eAySCQZu/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=1Y6sDrqJCj9yRjudYGLojBYm2eAySCQZu&export=download&format=pdf";
      link.click();
    };
    const onParkingFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/1OvoPXMZiy0da5HDgWEj3I3L-ZHH7FoUz/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=1OvoPXMZiy0da5HDgWEj3I3L-ZHH7FoUz&export=download&format=pdf";
      link.click();
    };
    const onHealthCheck319StaffFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/1ES61ivFudkHN1-iGLlu8lz5u0DYjk4-l/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=1ES61ivFudkHN1-iGLlu8lz5u0DYjk4-l&export=download&format=pdf";
      link.click();
    };
    const onHealthCheck319PlayerFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/1HjRGF2oco1hVfW0uV8eAD9aZl3IxiG_o/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=1HjRGF2oco1hVfW0uV8eAD9aZl3IxiG_o&export=download&format=pdf";
      link.click();
    };
    const onHealthCheck320StaffFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/18ECfObbdgx19Rwhdlws6XazqVnsfXN77/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=18ECfObbdgx19Rwhdlws6XazqVnsfXN77&export=download&format=pdf";
      link.click();
    };
    const onHealthCheck320PlayerFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/1K5uq2dQZH1jcTBnWGP-CxMZT0JnYD4Hg/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=1K5uq2dQZH1jcTBnWGP-CxMZT0JnYD4Hg&export=download&format=pdf";
      link.click();
    };
    const onPictureFormDownload = _ => {
      const link = document.createElement("a");
      // https://drive.google.com/file/d/13d8Dty_haU9hpRctawNSFZFPQkeXFrtQ/view?usp=sharing
      link.href = "https://drive.google.com/uc?id=13d8Dty_haU9hpRctawNSFZFPQkeXFrtQ&export=download&format=pdf";
      link.click();
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
                    <Typography color="textPrimary">各種ご案内</Typography>
                </Breadcrumbs>
                <H1 title="各種ご案内" />

                <H2 title="ヨコブリシ記念ウェア販売のご案内" />

                <Box className={styles.flyerWrapper}>
                  <Box
                    component="img"
                    src="/yokoburishi-flyer.jpg"
                    alt="ヨコブリシ記念ウェアフライヤー"
                    className={styles.flyer}
                  />
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default variousGuides;