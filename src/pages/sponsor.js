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

import ones from '../../public/sponsor/ones.png';
import dummy from '../../public/sponsor/dummy.png';
import takumi from '../../public/sponsor/takumi.png';
import hiragumi from '../../public/sponsor/hiragumi.gif';
import canadianCamp from '../../public/sponsor/canadian-camp.png';
import cafeCaprice from '../../public/sponsor/cafe-caprice.webp';
import mikiya from '../../public/sponsor/mikiya.svg';
import foodium from '../../public/sponsor/foodium.png';
import sumitoul from '../../public/sponsor/sumitoul.jpg';
import goldwin from '../../public/sponsor/GOLDWIN.png';
import jcc from '../../public/sponsor/JCC.png';
import anyhome from '../../public/sponsor/アニィホーム.jpg';
import yokoburishi from '../../public/sponsor/ヨコブリシ.png';
import nagaeAuto from '../../public/sponsor/永江自動車.png';
import mpro from '../../public/sponsor/株式会社Mpro.png';
import fujimori from '../../public/sponsor/株式会社フジモリ.png';
import kanmiya from '../../public/sponsor/甘味屋.png';
import kokuraFudousan from '../../public/sponsor/小倉不動産.png';
import salonUchida from '../../public/sponsor/足圧サロンうちだ.png';
import ooga from '../../public/sponsor/大賀薬局.png';

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

                <Sponsor name="SuMiと〜る" logo={sumitoul} url="https://tsuku2.jp/sumitall/"
                    description="SuMiと〜るは、懐かしさ漂う昭和レトロなカフェです。カフェの２階は時間貸しのフリースペース！隣には、イベント等にも利用できるギャラリーを開設。カフェ営業日以外は、カフェごとレンタルできる「間借りカフェ」も受けております。昭和レトロな空間に包まれ、ゆっくりな時間をお過ごしに来ませんか。" />

                <Sponsor name="(有)フーディアムトクナガ" logo={foodium} url="https://foodium.co.jp/"
                    description="" />

                <Sponsor name="(株)ミキヤ" logo={mikiya} url="https://miki-ya.co.jp/"
                    description="フードビジネスの「イノベーション」をカタチに。キッチンスタジオレンタル ,料理番組 ,デジタルサイネージ ,ポスター ,パンフレット ,DM ,ロゴ ,パッケージデザインはもちろん ,地域振興事業まで ,御社のフードビジネス売上げアップをサポート" />

                <Sponsor name="(株)平組" logo={hiragumi} url="http://taira-gumi.com/"
                    description="創業95年 解体業の老舗 従業員募集！未経験者大歓迎・年齢不問" />

                <Sponsor name="カナディアンキャンプ乗馬クラブ" logo={canadianCamp} url="http://www.canacan.jp/"
                    description="ビーチ乗馬体験。馬場の中で３０分のレッスン＋１時間外乗＋ランチ付き" />

                <Sponsor name="Cafe caprice" logo={cafeCaprice} url="https://th-542gg.wixsite.com/mysite-1"
                    description="「caprice=気まぐれ」いろいろな方がいつでも気軽に立ち寄って頂けるようなお店を目指して・・・。" />

                <Sponsor name="(株)小倉不動産" logo={kokuraFudousan} url="http://kokura-e.com/"
                    description="(株)小倉不動産は、ビーチボール競技を応援しています!第28回ジャパンカップビーチボール選手権福岡大会 選手皆様のご健闘をお祈りいたします。" />

                <Sponsor name="アニィホーム株式会社" logo={anyhome} url="https://ishiyama-reform.com/"
                    description="アニィホームは、みんなの味方です！" />

                <Sponsor name="足圧サロンうちだ" logo={salonUchida} url="https://home.tsuku2.jp/storeDetail.php?scd=0000158256"
                    description="足で踏みほぐしてリンパの流れを改善していく療法です" />

                <Sponsor name="株式会社フジモリ" logo={fujimori} url="https://fujimori-r.com/"
                    description="" />

                <Sponsor name="株式会社M'pro" logo={mpro} url=""
                    description="ジャパンカップ福岡大会参加選手のご健闘をお祈りいたします。" />

                <Sponsor name="有限会社永江自動車" logo={nagaeAuto} url=""
                    description="有限会社永江自動車は60（ロクマル）を応援します！！" />

                <Sponsor name="ones" logo={ones} url="" height="150"
                    description="この度、ジャパンカップ福岡大会の公式ページを担当させていただきました。webだけではなく、インフラやプロジェクト管理等も可能です。なにかITでお困りであれば、まずはご一報ください！" />

                <Sponsor name="ゴールドウィン" logo={goldwin} url="https://corp.goldwin.co.jp/"
                    description="" />

                <Sponsor name="ヨコブリシ" logo={yokoburishi} url="https://www.yokoburishi-o.com/"
                    description="" />

                <Sponsor name="大賀薬局" logo={ooga} url="https://www.ohga-ph.com/"
                    description="" />

                <Sponsor name="とろけるわらびもちと和紅茶の店 甘美屋" logo={kanmiya} url="https://www.instagram.com/kanmi_ya/"
                    description="" />

                <Sponsor name="（株）JCC" logo={jcc} url="http://jcc-jp.jp/"
                    description="" />

                <Sponsor name="Total Beauty IORI" logo={dummy} url=""
                    description="婚礼前撮りのみも承っております。美容・衣装何でもご相談下さい。ビーチ関係者特別割引致します。" />

                <Sponsor name="阿部歯科医院" logo={dummy} url=""
                    description="コロナに負けるな！皆様のご活躍を祈念いたします。" />

                <Sponsor name="わた整骨院" logo={dummy} url=""
                    description="わた整骨院は、ビーチボール競技を応援しています!第28回ジャパンカップビーチボール選手権福岡大会 選手皆様のご健闘をお祈りいたします。" />

                <Sponsor name="大石工業株式会社" logo={dummy} url=""
                    description="大石工業株式会社は、ビーチボール競技を応援しています!第28回ジャパンカップビーチボール選手権福岡大会 選手皆様のご健闘をお祈りいたします。" />

                <Sponsor name="都茶屋" logo={dummy} url=""
                    description="各種イベント(子供会、茶人会、スポーツイベント、企業イベント等)へ梅枝餅の出張販売承っております。" />

                <Sponsor name="ビームス" logo={dummy} url=""
                    description="1998年5月にチーム設立し、23年目になります。2002年の第8回ジャパンカップ選手権大会滋賀大会に福岡県より全国大会に出場し、今までにジャパンカップ選手権大会に12大会、全国大会に3大会出場しました。優勝2回、3位2回、ベスト８が4回の成績を残しました。メンバー仲良く、志を高く練習に励んでいます。" />

                <Sponsor name="のんべぇ〜" logo={dummy} url=""
                    description="永江さん！ぞのさん！！ジャパンの大舞台で一花咲かせてください！勝利の暁にはジャパン（日本酒）で乾杯！！(笑)" />

                <Sponsor name="春日市男子チーム一同" logo={dummy} url=""
                    description="春日市男子チームは、第28回ジャパンカップ福岡大会とエニシス・IZUMIを応援しています！頑張れ！！" />

                <Sponsor name="LACHIC" logo={dummy} url=""
                    description="" />

                <Sponsor name="春日市ビーチボール協会" logo={dummy} url=""
                    description="" />

                <Sponsor name="須恵町ビーチボールバレー同好会" logo={dummy} url=""
                    description="福岡県糟屋郡須恵町のビーチボール同好会です。健康第一に仲間と楽しく練習しています！須恵町で一緒に楽しむ方、募集してます！" />

                <Sponsor name="佐賀県ミニバレー協会" logo={dummy} url=""
                    description="佐賀県ミニバレー協会は、ビーチボール競技を応援しています!第28回ジャパンカップビーチボール選手権福岡大会 選手皆様のご健闘をお祈りいたします。" />

                <Sponsor name="吉野ヶ里ミニバレー協会" logo={dummy} url=""
                    description="吉野ヶ里ミニバレー協会は、ビーチボール競技を応援しています!第28回ジャパンカップビーチボール選手権福岡大会 選手皆様のご健闘をお祈りいたします。" />

            </Container>
            <Footer />
        </>
    );
};

export default sponsor;