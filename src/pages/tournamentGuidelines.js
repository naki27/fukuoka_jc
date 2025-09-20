import React from 'react';
import styles from "./styles/tournamentGuidelines.module.scss";

import { Container, Breadcrumbs, Typography, Button } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';

import H1 from '~/components/H1';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

import 'scroll-behavior-polyfill'
import { Padding } from '@mui/icons-material';

const tournamentGuidelines = () => {
    const onGuidelineDownload = _ => {
        const link = document.createElement("a");
        // https://drive.google.com/file/d/1FV8yx_1oaS6oxvH7ZS51yWEsnMOZjI7x/view?usp=drive_link
        link.href = "https://drive.google.com/uc?id=1FV8yx_1oaS6oxvH7ZS51yWEsnMOZjI7x&export=download&format=pdf";
        link.click();
    };
    const onGuideline2ndDownload = _ => {
        const link = document.createElement("a");
        // https://drive.google.com/file/d/1Thj3x1bNgXySC_xYMANIpGD4wmz9tCWQ/view?usp=drive_link
        link.href = "https://drive.google.com/uc?id=1Thj3x1bNgXySC_xYMANIpGD4wmz9tCWQ&export=download&format=pdf";
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
                    <Typography color="textPrimary">大会要項</Typography>
                </Breadcrumbs>
                <H1 title="大会要項" />

                <table className="guidLineTable">
                    <tbody>
                        <tr>
                            <th>趣旨</th>
                            <td>
                                <p>「いつでも、どこでも、だれでも」が手軽にできるスポーツとして全国的に親しまれている。</p>
                                <p>「ビーチボール競技」の普及・振興を図り、参加者相互の親睦と交流を図ることを目的とする。</p>
                            </td>
                        </tr>
                        <tr>
                            <th>主催</th>
                            <td>日本ビーチボール協会</td>
                        </tr>
                        <tr>
                            <th>主管</th>
                            <td>第３２回ジャパンカップビーチボール選手権 福岡大会実行委員会</td>
                        </tr>
                        <tr>
                            <th>共催</th>
                            <td>福岡県ビーチボール協会、春日市ビーチボール協会</td>
                        </tr>
                        <tr>
                            <th>後援</th>
                            <td>
                                <p>福岡県、春日市、一般社団法人春日市スポーツ協会</p>
                                <p>ケーブルステーション福岡、西日本新聞社、毎日新聞社、読売新聞社</p>
                                <p>福岡市早良区ビーチボール協会、中間市ビーチボールバレー連盟</p>
                                <p>水巻町ビーチボールバレー連盟 志免町ミニバレーボール協会 （予定）</p>
                            </td>
                        </tr>
                        <tr>
                            <th>協賛</th>
                            <td>（一財）朝日町文化・体育振興公社、㈱POS、㈱ヨコブリシ、㈱アルペン（予定）</td>
                        </tr>
                        <tr>
                            <th>開催日時</th>
                            <td>２０２６年（令和８年）２月２１日（土）・２２日（日）</td>
                        </tr>
                        <tr>
                            <th>会場</th>
                            <td>
                                <p>
                                    春日市総合スポーツセンター
                                    {/* <a href="./accessMap">春日市総合スポーツセンター</a> */}
                                </p>
                                <p>住所：福岡県春日市大谷６丁目２８</p>
                                <p>
                                    春日市立大谷小学校
                                </p>
                                <p>住所：福岡県春日市大谷４-１</p>
                            </td>
                        </tr>
                        <tr>
                            <th>競技区分</th>
                            <td>
                                <div style={{display: 'flex'}}>
                                    <div style={{margin: '8px 8px 8px 0'}}>
                                        <p>男子</p>
                                        <ul style={{paddingLeft: '22px'}}>
                                            <li>１８歳以上の部</li>
                                            <li>３０歳以上の部</li>
                                            <li>４０歳以上の部</li>
                                            <li>５０歳以上の部</li>
                                            <li>６０歳以上の部</li>
                                        </ul>
                                    </div>
                                    <div style={{margin: '8px'}}>
                                        <p>女子</p>
                                        <ul style={{paddingLeft: '22px'}}>
                                            <li>１８歳以上の部</li>
                                            <li>３０歳以上の部</li>
                                            <li>４０歳以上の部</li>
                                            <li>５０歳以上の部</li>
                                            <li>６０歳以上の部</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>参加資格</th>
                            <td>
                                <ol className={styles.bulletPoint}>
                                    <li>協会並びに加盟団体より推薦を受けたチーム及び協会が特に出場を認めたチームとする。</li>
                                    <li>選手は、２０２５年（令和７年）４月１日現在の満年齢にて該当部門に参加できる。</li>
                                    <li>審判は、兼任審判制とし、今大会に限りチーム内には選手兼任または帯同する<span className={styles.strong}>B 級以上１名を含む有資格者２名以上</span>がいること。いないチームは、<span className={styles.downloadSpan} onClick={onGuideline2ndDownload}>▶︎別途定める金額</span>を参加料と一緒に納めること。</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th>チーム編成</th>
                            <td>
                                <ol className={styles.bulletPoint}>
                                    <li>監督１名、選手６名以内をもってチーム編成とする。</li>
                                    <li>同一人物が監督及び選手として複数のチームで登録・参加はできない。</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th>競技方法</th>
                            <td>
                                <ol className={styles.bulletPoint}>
                                    <li>競技区分ごとの予選リーグ戦、その勝者による決勝トーナメント戦をおこなう。</li>
                                    <li>競技規則は日本ビーチボール協会認定「ビーチボールのルール」を適用する。</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th>表彰</th>
                            <td>各競技区分の優勝・準優勝・第三位を表彰する。</td>
                        </tr>
                        <tr>
                            <th>参加料</th>
                            <td>
                                <p>１チーム　8,000円</p>
                                <p>※ただし、日本ビーチボール協会未加盟チームは10,000円とする。</p>
                            </td>
                        </tr>
                        <tr>
                            <th>申込方法</th>
                            <td>
                                <p>パソコンもしくはスマートフォンにて、専用申込フォームに申し込む。</p>
                                <p>チーム毎に入力願います。各協会へは登録状況をフィードバック致します。</p>
                                <p>
                                    <a href="https://forms.gle/CwNrqdspGUE5buHB8">専用申込フォームはこちら</a>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>申込期限</th>
                            <td>
                                <p>２０２５年（令和７年）１０ 月１５日（水）</p>
                                <p>※エントリー表提出期限となります。</p>
                            </td>
                        </tr>
                        <tr>
                            <th>振込先</th>
                            <td>
                                <p>参加料は、<span className={styles.strong}>都県協会ごとに取りまとめのうえ</span>、振り込みをお願いします。</p>
                                <p>振込の際は、必ず ・振込協会名・チーム数 の記載をお願い致します。</p>
                                <p>申し込み後の辞退・棄権の場合の参加料は返却致しませんのでご了承ください。</p>
                                <p>口座名義: ジャパンカップ福岡実行委員会</p>
                                <p>ゆうちょ銀行の場合</p>
                                <p>　記号：１７４７０</p>
                                <p>　番号：７７２３１８８１</p>
                                <p>ゆうちょ銀行以外から振込みの場合</p>
                                <p>　店名：七四八</p>
                                <p>　店番：７４８</p>
                                <p>　普通預金　口座番号：７７２３１８８</p>
                            </td>
                        </tr>
                        <tr>
                            <th>振込期限</th>
                            <td>
                                <p>２０２５年（令和７年）１０ 月１５日（水）</p>
                            </td>
                        </tr>
                        <tr className="guidLineTable-last">
                            <th>問合せ先</th>
                            <td>
                                <p>第３２回ジャパンカップビーチボール選手権 福岡大会実行委員会 総務部 宛</p>
                                <p>
                                    メールアドレス：
                                    <a href="mailto:fukuoka.beachball.assoc@gmail.com">fukuoka.beachball.assoc@gmail.com</a>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id="buttonArea" className={styles.buttonArea}>
                    <Button
                        className={styles.PdfButton}
                        onClick={onGuidelineDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            大会要項(pdf)をダウンロード
                    </Button>
                    <Button
                        className={styles.ExcelButton}
                        onClick={onGuideline2ndDownload}
                        variant="contained"
                        startIcon={<GetAppIcon />}>
                            大会要項 別紙(pdf)をダウンロード
                    </Button>
                </div>

            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default tournamentGuidelines;