import React from 'react';
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
import SoldOut from '../../public/soldout.jpeg';

const variousGuides = () => {

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

                <H2 title="1. 宿泊・弁当お申込の案内" />
                <div className={styles.content}>
                    <Image src={SoldOut} objectFit="contain" height={100}/>
                    <p>予約は終了しました。ご協力ありがとうございました。</p>
                    {/* <p>締切は、<span className={styles.Important}>１月２１日（金）</span>とさせていただきます。</p> */}
                </div>

                <div id="buttonArea" className={styles.buttonArea}>
                    <Button
                        className={`${styles.soldOut} ${styles.InfoButton}`}
                        onClick={onBentoHotelInfoDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            宿泊・弁当の案内(pdf)をダウンロード
                    </Button>
                    <Button
                        className={`${styles.soldOut} ${styles.FormButton}`}
                        onClick={onBentoHotelFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            宿泊・弁当の申込書(pdf)をダウンロード
                    </Button>
                </div>

                <H2 title="2. 記念グッズ予約販売の案内" />
                <div className={styles.content}>
                    <Image src={SoldOut} objectFit="contain" height={100}/>
                    <p>販売は締め切りました。ご協力ありがとうございました。</p>
                    {/* <p>締切は、<span className={styles.Important}>２月１４日（月）到着分</span>までとさせていただきます。</p>
                    <p>当日販売はしておりませんのでご注意ください。</p>
                    <p className={styles.Important}>※予約販売の商品代金等のお振込についてですが、振込手数料はご購入者様のご負担とさせていただいております。ご了承ください。</p>
                    <p className={styles.Important}>ジャパンカップ福岡大会に参加されないチーム様ももちろん購入可能でございます。その場合、大会初日に直接の受け渡しができないため、郵送対応となりますので、
                    お振込みの際は、商品代金に送料1000円を合わせた金額でお願い致します。</p>
                    <p className={styles.Important}>申込書のお名前の右横に【郵送希望】と記入して頂けると助かります。</p> */}
                </div>

                <div id="buttonArea" className={styles.buttonArea}>
                    <Button
                        className={`${styles.soldOut} ${styles.InfoButton}`}
                        onClick={onGoodsInfoDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            記念グッズ案内(pdf)をダウンロード
                    </Button>
                    <Button
                        className={`${styles.soldOut} ${styles.FormButton}`}
                        onClick={onGoodsFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            記念グッズ申込書(pdf)をダウンロード
                    </Button>
                </div>

                <H2 title="3. 駐車券申込書について" />
                <div className={styles.content}>
                    <p>駐車券締切は、<span className={styles.Important}>２月２８日（月）まで</span>とさせていただきます。</p>
                </div>

                <div id="buttonArea" className={styles.buttonArea}>
                    <Button
                        className={styles.FormButton}
                        onClick={onParkingFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            駐車券申込書(pdf)をダウンロード
                    </Button>
                </div>

                <H2 title="4. 健康チェックシート兼誓約書について" />
                <div className={styles.content}>
                    <p><span className={styles.Important}>当日の朝に受付に提出</span>ください。</p>
                    <p>2日目の応援の場合は、会場入口の回収ボックスに入れてください</p>
                </div>
                <div id="buttonArea" className={styles.buttonArea}>
                    <Button
                        className={styles.FormButton}
                        onClick={onHealthCheck319StaffFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            健康チェックシートシート兼誓約書 3/19 スタッフ用(pdf)をダウンロード
                    </Button>
                    <Button
                        className={styles.FormButton}
                        onClick={onHealthCheck319PlayerFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            健康チェックシートシート兼誓約書 3/19 選手用(pdf)をダウンロード
                    </Button>
                    <Button
                        className={styles.FormButton}
                        onClick={onHealthCheck320StaffFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            健康チェックシートシート兼誓約書 3/20 スタッフ用(pdf)をダウンロード
                    </Button>
                    <Button
                        className={styles.FormButton}
                        onClick={onHealthCheck320PlayerFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            健康チェックシートシート兼誓約書 3/20 選手用(pdf)をダウンロード
                    </Button>
                </div>

                <H2 title="5. 大会写真撮影および写真ダウンロードについて" />
                <div className={styles.content}>
                    <p>辞退届は、<span className={styles.Important}>２月２８日（月）まで</span>とさせていただきます。</p>
                </div>
                <div id="buttonArea" className={styles.buttonArea}>
                    <Button
                        className={styles.FormButton}
                        onClick={onPictureFormDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            写真撮影辞退届け(pdf)をダウンロード
                    </Button>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default variousGuides;