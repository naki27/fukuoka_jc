import React, { useContext } from "react";
import { Container, Breadcrumbs, Typography, Box } from "@mui/material";
import styles from "./styles/sponsor.module.scss";
import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import Sponsor from "~/components/Sponsor";
import { MobileContext } from '~/contexts/MobileContext';
import Image from 'next/image';

import mizumaki from '../../public/sponsor/mizumaki.jpg';
import calico from '../../public/sponsor/calico.jpg';
import sue from '../../public/sponsor/sue.jpg';
import sumitoul from '../../public/sponsor/sumitoul.jpg';
import shirakiudon from '../../public/sponsor/shirakiudon.jpg';
import hakkouunnyu from '../../public/sponsor/hakkouunnyu.jpg';
import pos from '../../public/sponsor/pos.jpg';
import bijurie from '../../public/sponsor/bijurie.jpg';
import shiikichaya from '../../public/sponsor/shiikichaya.jpg';
import venusgallery from '../../public/sponsor/venusgallery.jpg';
import hakataichibandaiko from '../../public/sponsor/hakataichibandaiko.jpg';
import looks from '../../public/sponsor/looks.jpg';
import meijiyasuda from '../../public/sponsor/meijiyasuda.jpg';
import tmfort from '../../public/sponsor/tmfort.jpg';
import yurikoubou from '../../public/sponsor/yurikoubou.jpg';
import budouno from '../../public/sponsor/budouno.jpg';
import noside from '../../public/sponsor/noside.jpg';
import liverty from '../../public/sponsor/liverty.jpg';
import ebisu from '../../public/sponsor/ebisu.jpg';
import hiroeudon from '../../public/sponsor/hiroeudon.jpg';
import oogapharmacy from '../../public/sponsor/oogapharmacy.png';
import union from '../../public/sponsor/union.jpg';
import ones from '../../public/sponsor/ones.png';
import maruru from '../../public/sponsor/maruru.jpg';
import faceact from '../../public/sponsor/faceact.png';
import saga from '../../public/sponsor/saga.png';
import dummy from '../../public/sponsor/dummy.png';

const sponsor = () => {
    const isMobile = useContext(MobileContext);
    return (
        <>
            <Header />
            <Gutter />
            <Container className={styles.root} maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">スポンサー</Typography>
                </Breadcrumbs>

                <H1 title="スポンサー" />

                <Sponsor name="水巻町ビーチボールバレー連盟" logo={mizumaki} url="https://www.instagram.com/mizumakibeach/"
                    description="水巻ビーチボールバレー連盟では月例会、大会、ジャパンルールの練習を行っています。子供からシニアまで誰もが一緒に楽しめるのが私たちの魅力。大会を通じて全国の皆さんと交流できるのを楽しみにしています。" />
                <Sponsor name="CALICO" logo={calico} url="https://calicohd.jp/sub01.html"
                    description="皆様のご健闘をお祈りします！※特にCALICO" />
                <Sponsor name="須恵町ビーチボールバレー同好会" logo={sue} url=""
                    description="ビーチボールバレーが仲間とできる喜びを大切に！全力プレイとチームワークで必勝＆必笑" />
                <Sponsor name="SuMiと〜る" logo={sumitoul} url="https://tsuku2.jp/sumitall/"
                    description="昭和レトロ漂うカフェ。珈琲・ナポリタン・キーマカレーなど、懐かしさ漂う空間に包まれませんか。" />
                <Sponsor name="うどん白木商店" logo={shirakiudon} url="https://udonshiraki.com/"
                    description="生地は2日間かけて熟成。しっかりと熟成した麺は黄色味を帯びているのが特徴。注文が入ってから麺を切り出して茹でます。やや太めでコシを強く仕上げています。出汁に使う材料はそのままに、その「取り方」に一工夫を加え、より旨みを引き出せるように仕上げています。" />
                <Sponsor name="博光運輸株式会社" logo={hakkouunnyu} url="https://hakkou3058.wixsite.com/0922913180"
                    description="博光運輸は、JC福岡大会を応援しています！" />
                <Sponsor name="株式会社POS" logo={pos} url="https://www.pos-japan.com/"
                    description="オリジナルプリント承ります！Tシャツ・ポロシャツ・・ウインドブレーカー等、短納期で安価にご対応させていただきます。" />
                <Sponsor name="飯倉＆ビジュリエ" logo={bijurie} url="https://www.instagram.com/bijourie.befu/"
                    description="ビーチはいいくら、ケーキはビジュリエ。季節のフルーツを楽しめる手作りのお菓子をご用意しています！飯倉所属のみゆきがいつでもいますので、ぜひ遊びに来てください♡イートインできるのでおしゃべりしましょう～♡" />
                <Sponsor name="椎木茶屋" logo={shiikichaya} url="https://shiikichaya.com/"
                    description="創業から70年以上、伝統を守り続ける香ばしくも優しい甘さの梅ヶ枝餅餅と餡の絶妙な味わいにこだわっています。" />
                <Sponsor name="ヴィーナスギャラリー" logo={venusgallery} url="https://www.p-world.co.jp/fukuoka/vg-nishijin.htm"
                    description="忙しい毎日の生活の中で、たくさんの人にワクワクドキドキを届けたい。最高のおもてなしで皆さまのご来店をお待ちしております。" />
                <Sponsor name="博多一番太鼓" logo={hakataichibandaiko} url="https://www.instagram.com/hakatawarabi/"
                    description="創業７８年、店舗（南区長住）・リヤカーにて販売しています。子どもと地球の未来を守る活動として、月に一度子ども食堂も開催しています。インスタグラムにて情報を発信していますので、ご覧ください。インスタグラム（＠hakatawarabi）で出店情報等お知らせしています" />
                <Sponsor name="Look's 株式会社" logo={looks} url="https://looks.co.jp/"
                    description="北海道から沖縄まで全国納車可能！車検・点検・修理・板金・タイヤ交換からコーティング、カスタムまで幅広く対応！理想の一台をLook'sがカタチにします！お気軽にご相談ください。" />
                <Sponsor name="明治安田生命保険相互会社 福岡支社" logo={meijiyasuda} url="https://www.meijiyasuda.co.jp/"
                    description="私たちは、スポーツ協賛をはじめとしたさまざまな取組みを通じて、「みんなの健活プロジェクト」と「地元の元気プロジェクト」の2「大」プロジェクトを、より豊かに、当社らしくお届けしてまいります。" />
                <Sponsor name="ティエムフォート（有）" logo={tmfort} url=""
                    description="" />
                <Sponsor name="ゆり工房" logo={yurikoubou} url="https://saifu-fukushikai.com/yurikobo.html"
                    description="就労を希望する障がいのある人に、生産活動を中心に、就労にあたっての知識・技術の向上、職場体験や、その他の活動の場と機会を提供するとともに、地域において自立した生活がおくれることを目指しています。" />
                <Sponsor name="ぶどうの庭" logo={budouno} url="https://budounoniwa.com/"
                    description="春日まちづくり支援センター・ぶどうの庭はおとなもこどもも楽しく過ごせる市の施設です。公益的な活動を行う個人や団体に、会議室などを貸して活動支援をしたりしています。カフェもありますので是非一度遊びに来てください。" />
                <Sponsor name="BME株式会社 NOSIDE" logo={noside} url="https://bme-noside.com/"
                    description="オリジナル商品制作のご相談・商品の在庫確認など、まずはお気軽にご連絡ください。" />
                <Sponsor name="リバティ" logo={liverty} url=""
                    description="『笑顔』と『感謝』を胸にこれからも全力でプレーします！" />
                <Sponsor name="縁結寿" logo={ebisu} url=""
                    description="60s～ It's a Wonderful Life !" />
                <Sponsor name="裕英うどん" logo={hiroeudon} url="https://www.instagram.com/hiroe_udon/"
                    description="🍜麺のかたさが選べる☝️茹で上げうどんの店🥢平打ち麺✨が特徴‼️🍜麺のかたさが選べる☝️茹で上げうどんの店🥢平打ち麺✨が特徴‼️" />
                <Sponsor name="春日市ビーチボール協会" logo={dummy} url=""
                    description="" />
                <Sponsor name="大賀薬局" logo={oogapharmacy} url="https://www.ohga-ph.com/"
                    description="" />
                <Sponsor name="UNION" logo={union} url=""
                    description="大原小学校にて毎週土曜日19:30～21:30に和気あいあいと練習しております♪ぜひぜひ遊びに来てください！" />
<               Sponsor name="ones" logo={ones} url="" height="150"
                    description="この度、ジャパンカップ福岡大会の公式ページを担当させていただきました。Webだけではなく、インフラ構築（IaC）やプロジェクト管理等も可能です。なにかITでお困りであれば、まずはご一報ください！" />
                <Sponsor name="Maruru Laser Printing" logo={maruru} url="https://www.instagram.com/maruru_laser_printing?igsh=bHd2bXJmYzN6Ymhn&utm_source=qr"
                    description="世界に一つだけのオリジナルキー彫るダーを作成しております。ご依頼がございましたらInstagramの DMからお待ちしております。" />
                <Sponsor name="株式会社フェイス・アクト" logo={faceact} url=""
                    description="精一杯楽しんで怪我のないように頑張ってください！" />
                <Sponsor name="佐賀県ミニバレー協会" logo={saga} url=""
                    description="出場される選手の皆様のご健闘をお祈りいたします。" />

            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
};

export default sponsor;