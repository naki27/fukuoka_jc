import React from 'react';

import { Container, Breadcrumbs, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import Sponsor from "~/components/Sponsor";

import Image from 'next/image';

import dummy from '../../public/sponsor/dummy.png';
import takumi from '../../public/sponsor/takumi.png';
import hiragumi from '../../public/sponsor/hiragumi.gif';
import canadianCamp from '../../public/sponsor/canadian-camp.png';
import cafeCaprice from '../../public/sponsor/cafe-caprice.webp';
import mikiya from '../../public/sponsor/mikiya.svg';
import foodium from '../../public/sponsor/foodium.png';
import sumitoul from '../../public/sponsor/sumitoul.jpg';

const componentsStyle = {
    // container,
    root: {
      padding: "0",
      width: "100vw",
      maxWidth: "1280px",
      margin: "0 auto",
    },
}
const useStyles = makeStyles(componentsStyle);

const sponsor = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Gutter />
            <Container className={classes.root} maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">スポンサー</Typography>
                </Breadcrumbs>

                <H1 title="スポンサー" />

                <Sponsor name="(株)匠" logo={takumi} url="http://www.gift-takumi.com/"
                    description="ギフトのタクミが素敵な商品お探しします！プレゼントから記念品等、まずはお気軽にお電話ください！ TEL:092-435-3420" />

                <Sponsor name="SuMiと〜る" logo={sumitoul} url="https://ja-jp.facebook.com/sumitall/"
                    description="SuMiと〜るは、懐かしさ漂う昭和レトロなカフェです。カフェの２階は時間貸しのフリースペース！隣には、イベント等にも利用できるギャラリーを開設。カフェ営業日以外は、カフェごとレンタルできる「間借りカフェ」も受けております。昭和レトロな空間に包まれ、ゆっくりな時間をお過ごしに来ませんか。" />

                <Sponsor name="(有)フーディアムトクナガ" logo={foodium} url="https://foodium.co.jp/"
                    description="" />

                <Sponsor name="(株)ミキヤ" logo={mikiya} url="https://miki-ya.co.jp/"
                    description="フードビジネスの「イノベーション」をカタチに。キッチンスタジオレンタル ,料理番組 ,デジタルサイネージ ,ポスター ,パンフレット ,DM ,ロゴ ,パッケージデザインはもちろん ,地域振興事業まで ,御社のフードビジネス売上げアップをサポート" />

                <Sponsor name="阿部歯科医院" logo={dummy} url=""
                    description="コロナに負けるな！皆様のご活躍を祈念いたします。" />

                <Sponsor name="(株)平組" logo={hiragumi} url="http://taira-gumi.com/"
                    description="創業95年 解体業の老舗 従業員募集！未経験者大歓迎・年齢不問" />

                <Sponsor name="カナディアンキャンプ乗馬クラブ" logo={canadianCamp} url="http://www.canacan.jp/"
                    description="ビーチ乗馬体験。馬場の中で３０分のレッスン＋１時間外乗＋ランチ付き" />

                <Sponsor name="Cafe caprice" logo={cafeCaprice} url="https://th-542gg.wixsite.com/mysite-1"
                    description="「caprice=気まぐれ」いろいろな方がいつでも気軽に立ち寄って頂けるようなお店を目指して・・・。" />

                <Sponsor name="須恵町ビーチボールバレー同好会" logo={dummy} url=""
                    description="福岡県糟屋郡須恵町のビーチボール同好会です。健康第一に仲間と楽しく練習しています！須恵町で一緒に楽しむ方、募集してます！" />

                <Sponsor name="わた整骨院" logo={dummy} url=""
                    description="わた整骨院は、ビーチボール競技を応援しています!第28回ジャパンカップビーチボール選手権福岡大会 選手皆様のご健闘をお祈りいたします。" />

            </Container>
            <Footer />
        </>
    );
};

export default sponsor;