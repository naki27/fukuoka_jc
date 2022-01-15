import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Breadcrumbs, Typography, Button, Box } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

const useStyles = makeStyles(() => ({
    buttonArea: {
        margin: "35px auto",
        textAlign: "center",
        display: "flow-root",
    },
    PdfButton: {
        margin: "32px",
        background: "#C7243A",
        color:"#fff"
    },
    Important: {
        textDecoration: "double underline",
        fontWeight: "900"
    },
    content: {
        fontSize: "1.1rem",
        marginBottom: "64px"
    },
    teamPlate: {
        border: "1px solid #333",
        padding: "24px",
        width: "350px"
    },
    teamTitle: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.8em",
        marginBottom: "16px"
    },
    teamName: {
        textAlign: "center",
        fontSize: "1.1em"
    },
    Red: {
        color: "#C7243A"
    }
}));

const detailGuidelines = () => {
    const classes = useStyles();
    const theme = {
        spacing: 8,
    }
    const onGuidelineDownload = _ => {
        const link = document.createElement("a");
        // https://drive.google.com/file/d/1zhjoZ7Y7sCLUq3iXiS2QYVIsOJomyu-U/view?usp=sharing
        link.href = "https://drive.google.com/uc?id=1zhjoZ7Y7sCLUq3iXiS2QYVIsOJomyu-U&export=download&format=pdf";
        link.click();
    };

    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">細部要項</Typography>
                </Breadcrumbs>
                <H1 title="細部要項" />

                <Container maxWidth="lg">
                    <H2 title="1. 受付" />
                    <div className={classes.content}>
                        <p>① 3月19日(土)午前7時45分~8時15分</p>
                        <p>② 3月20日(日)午前7時45分~8時15分</p>
                        <p>【区分】</p>
                        <p>春日市総合スポーツセンター(男子 18 歳以上の部・男子 30 歳以上の部以外の区分)と、春日市立春日小学校体育館(男子 18 歳以上の部・男子 30 歳以上の部)にそれぞれの会場に分かれ受付を行います。</p>
                        <p>【春日市総合スポーツセンター】</p>
                        <p>監督は、1階より入場し、メンイアリーナ内で受付を行います。監督以外選手は、外階段より2階観客席へ入場し、決まった待機場所へ移動ください。</p>
                        <p>【春日市立春日小学校体育館】</p>
                        <p>体育館入口にて受付を行います。監督以外の選手は、体育館入口より入場し、観客席または3階多目的広場の待機場所へ移動ください。</p>
                        <p>【役員・審判員】</p>
                        <p>担当の会場で、受付を行ってください。春日市総合スポーツセンターは、外階段より2階観客席へ入場し、2 階卓球室で受付を行ってください。</p>
                        <p>春日市立春日小学校体育館は、体育館入口にて受付を行います。</p>
                        <p className={classes.Important}>※受付を済ませないチームは棄権とみなします。必ず両日とも時間内に受付を行ってください。</p>
                    </div>

                    <H2 title="2. 監督会議" />
                    <div className={classes.content}>
                        <p>3月19日(土)午前8時20分に各会場アリーナ内で行います。</p>
                        <p>(各チームより、必ず監督・主将の 2 名出席してください。)</p>
                        <p>※細部要項記載どおりに進めますので、各.チーム全メンバー熟読して頂き、ご理解お願い致します。</p>
                        <p>ご不明な所がありましたら、予め Mail 等でご確認お願い致します。時短にご協力よろしくお願い致します。(2 会場統一)</p>
                        <p>※問い合わせは各.協会事務局より、日本ビーチボール協会 競技部長舩木 修(Address:<a href="mailto:okuni@fsinet.or.jp">okuni@fsinet.or.jp</a>) へお願い致します。</p>
                    </div>

                    <H2 title="3. 開会式" />
                    <div className={classes.content}>
                        <p>3月19日(土)午前8時30分より各2会場でそれぞれにメインアリーナ・体育館にて行います。</p>
                        <p>監督・主将は、8時20分までにメインアリーナ・体育館内所定の位置に集合してください。</p>
                        <p>8時30分以降は入場禁止とします。</p>
                        <p className={classes.Important}>開会式には監督・主将のみとします。その他の選手は、各待機場所にて待機ください</p>
                        <p>【正当な理由なく開会式を欠席したチームは大会出場を認めない場合があります。】</p>
                    </div>

                    <H2 title="4. 試合開始" />
                    <div className={classes.content}>
                        <p>3月19日(土)開会式終了後、準備ができ次第開始します。</p>
                        <p>3月20日(日)は、午前8時30分より試合を開始します。</p>
                    </div>

                    <H2 title="5. 試合方法" />
                    <div className={classes.content}>
                        <p>3月19日(土)予選リーグ戦</p>
                        <p>3月20日(日)決勝トーナメント戦</p>
                        <p className={classes.Important}>*予選リーグ戦および決勝トーナメント戦の<span className={classes.Red}>準々決勝</span>までは、3 セットすべてラリーポイントの15点先取とし、3セット目のチェンジコートは行いません。(ジュースはありません。)</p>
                        <p>*準決勝より、すべてサイドアウト制とし、8 対 8 の同点時は 2 点勝ち越したチームを勝者とします。</p>
                        <p>*予選リーグ戦は、3・4 チームによる変則リーグ戦とし、上位 2 チームが決勝トーナメント戦に出場します。</p>
                        <p>*前日および当日受付時に棄権チームが生じた場合は、4 チームリーグは残り 3 チームによるリーグ戦とし、3チームリーグは残り2チームによる1試合のみとします。</p>
                        <p>*予選リーグ戦の順位は、勝敗・得失セット差・得失点率の順により決定し、それでも決しない場合は抽選で決定します。</p>
                        <p>*決勝トーナメントの出場権を得たチームは、春日市総合スポーツセンター2階卓球場 2 の掲示板および、ジャパンカップ福岡大会のホームページにて翌日の試合順序を確認してください。</p>
                    </div>

                    <H2 title="6. 審判" />
                    <div className={classes.content}>
                        <p>3月19日(土)は、各チームとも<span className={classes.Important}>大会冊子にてコート別試合進行表</span>を確認の上、副審・得点掲示員、線審 2 名をお願いします。第 2 試合以降につきましても、コート別試合進行表をご確認ください。</p>
                        <p>前の試合終了後、直ちに次の試合を開始します。<span className={classes.Important}>試合の進行がスムーズに行えるよう、帯同審判員、選手の皆さんのご協力をお願いします。</span></p>
                        <p>3月20日(日)は、各コートとも第 1 試合は第 3 試合の両チームより線審 2 名、得点掲示員 2 名をお願いします。第 2 試合以降は前の試合の敗者チームより線審 2 名、得点掲示員 2 名をお願いします。準決勝以降の試合は審判団で行います。</p>
                        <p>予選リーグ戦で棄権等があり試合が成立しない場合でも、必ず、チームは当該試合まで待機し主審に確認(整列および勝者コール)を受けてください。</p>
                        <p>副審は日本ビーチボール協会指定審判服を着用し、ワッペンを中央につけ、審判服の裾は長ズボン(紺または黒の無地)に入れてください。また、ハーフパンツ・スウェットパンツの着用は禁止します。半袖審判服を着用の場合には、アンダーシャツの袖は出さないでください。線審は指定審判服の着用を推奨致します。</p>
                        <p>ホイッスルは、笛または電子ホイッスルを使用とし、笛は個人にて用意してください。電子ホイッスルは各コート準備致します。笛を使用する際は、笛カバーまたはマスクを着用してください。電子ホイッスルを使用する際は、マスクのみ着用とします。</p>
                        <p>試合開始前、審判員及びチーム全員手指の消毒をしてください。</p>
                        <p className={classes.Important}>プロトコルは、サービスラインにて行い試合開始前にトスを行います。</p>
                        <p>原則、プレー中はマスク着用が望ましい。ただし、強制はしません。</p>
                        <p>競技中のハイタッチはエアタッチにとどめてください。</p>
                        <p>大声を出す行為は禁止します。主審は注意・指導を行い、原則ペナルティは課さないが、主審の再三にわたる注意・指導に従わないチームは、会場責任審判長の判断により失格となる場合があります。</p>
                    </div>

                    <H2 title="7. 競技上の注意" />
                    <div className={classes.content}>
                        <p>競技は、日本ビーチボール協会認定の「ビーチボールのルール」に基づいて実施します。</p>
                        <p>大会本部では、<span className={classes.Important}>参加選手年齢が参加資格に違反していたことが判明した時点で、当該チームは失格とし、判明した時点以降の試合は棄権とします。</span>なお、全試合終了後に判明した場合には、入賞記録を抹消し改めて順位を決定するものとします。</p>
                        <p>練習は整列・コートイン後、主審の指示のもと 1 分間とします。(試合開始前、コート内での練習を禁止します。)</p>
                        <p>前試合終了後 3 分を経過しても集合しないチームは、試合を棄権したものとみなします。なお、コートの変更時のみ場内放送を行います。(原則として場内放送はしません。)</p>
                        <p>競技中のコートにボールまたは選手が入り、プレーに支障または危険があると審判員が判断した場合は、プレーを中断しノーカウントとします。</p>
                        <p>隣接のラインのあるコートにボールまたは選手が入った場合は、ボールデッドとします。ボールに触れた後に、壁に接触した場合はインプレーとします。但し、壁を利用するプレーは反則とします。(例)壁を蹴り反動でコートに戻る。</p>
                        <p>ユニフォームはユニフォーム規定により、チームで統一しなければなりません。</p>
                        <p>&lt;ユニフォーム規定&gt;</p>
                        <ul>
                            <li>監督および選手のユニフォームは色とデザインを統一しなければなりません。</li>
                            <li>異なるユニフォームを着用した監督および選手の出場は認めません。</li>
                            <li>ゼッケン番号 1 は監督、2 は主将、他の選手は 3~7 とします。</li>
                            <li>ゼッケン番号は前後とも中央につけ、大きさは前 12~14cm、後 14~16cmとします。</li>
                            <li>ビブスを使用する場合は同一の色とデザインのウエアーを着用してください。</li>
                            <li>同一の色とデザインのユニフォームであれば、半袖もしくは長袖のいずれも着用を認めます。</li>
                            <li>半袖のユニフォームの下に長袖のアンダーウエアーを着用するときは、同色で無地に、統一してください。</li>
                            <li className={classes.Important}>ユニフォーム規定に違反していたことが判明した時点(本部に記録表が提出される前まで)で、当該チームは失格とし、判明した時点以降の試合は棄権とします。</li>
                        </ul>
                        <p>応援は必ず観覧席で行い、アリーナ内には当該試合の選手・監督、審判員以外は入場できません。</p>
                        <p>競技中、審判員や相手チームプレーヤーに対する不法な行為には、インターフェアの反則を適用します。</p>
                        <p>チームプレートは、両日とも試合開始前に担当審判員に提出してください。試合終了後に返却してもらい、大会中はチームにて保管してください。</p>
                    </div>

                    <H2 title="8. オーダー表および選手変更" />
                    <div className={classes.content}>
                        <p>オーダー表は、受付時に冊子とともにお渡しします。オーダー表は、試合開始前に担当審判員に提出してください。</p>
                        <p>当日の選手変更は、規定の選手変更届用紙に必要事項を記入し、選手変更受付へ提出してください。新規の追加およびゼッケン番号の変更は認めますが、チーム間の移動は認めません。</p>
                    </div>


                    <H2 title="9. チームプレート" />
                    <div className={classes.content}>
                        <p>試合で使用するチームプレートは、各チームで作成し、持参してください。</p>
                        <p>白色地の厚紙用紙に、黒文字で統一してください。</p>
                        <p>大きさは A4 サイズの 1/2 とします。(およそ横 30cm×縦 10cm)</p>
                        <p>【作成例】 左上に競技部門、右上に都県・市町村名、中央にチーム名</p>
                        <div className={classes.teamPlate}>
                            <div className={classes.teamTitle}><span>男子１８歳以上の部</span><span>福岡県春日市</span></div>
                            <div className={classes.teamName}>福岡県ビーチボール協会</div>
                        </div>
                    </div>

                    <H2 title="10. 表彰式および閉会式" />
                    <div className={classes.content}>
                        <p>3 月 20 日(日)全試合終了後、春日市総合スポーツセンター1階メインアリーナにて行います。</p>
                        <p>試合を終えた入賞チームは、速やかに表彰式および閉会式場にお集まりください。</p>
                    </div>

                    <H2 title="11. 傷害保険等" />
                    <div className={classes.content}>
                        <p>大会本部(日本ビーチボール協会)でスポーツイベント保険に加入しますが見舞金レベルであり、参加者各自で保険加入してください。</p>
                        <p>大会当日はケガのみ応急処置をします。</p>
                        <p>なお、大会期間中に負傷された場合は、スポーツセンター1階本部に「負傷者報告書」が置いてありますので、必要事項を記入され、日本ビーチボール協会事務局に提出してください。</p>
                    </div>

                    <H2 title="12. 注意事項" />
                    <div className={classes.content}>
                        <p>開会式および閉会式中の携帯電話での通話はご遠慮ください。携帯電話はマナーモードにしてください。</p>
                        <p>準備体操は行いませんので、各自十分に行いケガの無いように注意してください。</p>
                        <p>競技中のケガや事故について応急処置は行いますが、その後の責任は一切負いません。</p>
                        <p>救急車を必要とする場合は必ず大会本部を通してください。</p>
                        <p>貴重品は参加者各々の責任で管理してください。</p>
                        <p>各会場にゴミ箱は設置しておりませんので弁当箱や空き缶、ペットボトル(施設内販売機で購入も含む)等のゴミは、各自でお持ち帰りください。</p>
                        <p>喫煙は指定の場所でお願いします。小学校敷地内は禁煙となっております。</p>
                        <p>屋外に出るときは必ず外履きに替えてください。</p>
                        <p>カメラのフラッシュ撮影は、競技の妨げになりますので禁止します。</p>
                        <p>撮影機器は、アリーナ内へ設置しないでください。</p>
                        <p><span className={classes.Important}>コンセントは使用禁止</span>です。</p>
                        <p>公共施設をお借りしておりますので使用上の注意を必ずお守りください。</p>
                    </div>

                    <H2 title="13. 新型コロナウイルス感染症対策" />
                    <div className={classes.content}>
                        <p>プレー中以外は、必ずマスク着用をお願いします。<span className={classes.Important}>マスクは参加賞のマスクを着用してください。大会関係者の目印として有効活用致します。</span></p>
                        <p>受付時に、監督、役員、審判、スタッフ等は<span className={classes.Important}>「健康チェックシート兼誓約書」</span>を提出してください。大会運営関係者の健康状態の把握、来場可否の判断及び必要な連絡の為にのみ利用します。</p>
                        <p>試合中、1 セット毎にボール、ネット等をコート係が消毒します。</p>
                        <p>試合間は、審判台、得点板、フラッグ、ネット、ボール等をコート係が消毒します。</p>
                        <p>館内を定期式に消毒に回ります。</p>
                        <p className={classes.Important}>飲食の際は、間隔をとり、黙食に心掛けてください。</p>
                        <p className={classes.Important}>各自、定期的な手洗い、消毒を行い、感染予防の徹底をお願いします。</p>
                        <p className={classes.Important}>大会後 2 週間以内に、感染した際は、すみやかに大会本部への連絡を行ってください。</p>
                    </div>

                    <div id="buttonArea" className={classes.buttonArea}>
                        <Button
                            className={classes.PdfButton}
                            onClick={onGuidelineDownload}
                            variant="contained"
                            startIcon={<GetAppIcon />}>
                                細部要項(pdf)をダウンロード
                        </Button>
                    </div>
                </Container>

            </Container>
            <Footer />
        </>
    );
}

export default detailGuidelines;