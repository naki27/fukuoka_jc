import React from 'react';

import { Container, Breadcrumbs, Typography, Button } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';

import H1 from '~/components/H1';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

const tournamentGuidelines = () => {
    const onDownload = () => {
        const link = document.createElement("a");
        link.href = "https://docs.google.com/spreadsheets/d/1iyiolAqDPFq-2d0O1tJcRfKY76iSU_i6W3NGwUYqYQ0/export?format=xlsx";
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
                    <Typography color="textPrimary">大会要項</Typography>
                </Breadcrumbs>
                <H1 title="大会要項" />

                <table className="guidLineTable">
                    <tbody>
                        <tr>
                            <th>趣旨</th>
                            <td>
                                <p>「いつでも、どこでも、だれでも」が手軽にできるスポーツとして全国的に親しまれている</p>
                                <p>「ビーチボール競技」の普及・振興を図り、参加者相互の親睦と交流を図ることを目的とする</p>
                            </td>
                        </tr>
                        <tr>
                            <th>主催</th>
                            <td>日本ビーチボール協会</td>
                        </tr>
                        <tr>
                            <th>主管</th>
                            <td>第２８回ジャパンカップビーチボール選手権 福岡大会実行委員会</td>
                        </tr>
                        <tr>
                            <th>共催</th>
                            <td>福岡県ビーチボール協会、春日市ビーチボール協会</td>
                        </tr>
                        <tr>
                            <th>後援</th>
                            <td>福岡県、春日市、志免町ミニバレーボール協会、中間市ビーチボールバレー連盟、水巻町ビーチボールバレー愛好会、北九州ビーチボール協会、一般社団法人春日市体育協会</td>
                        </tr>
                        <tr>
                            <th>協賛</th>
                            <td>株式会社ゴールドウイン、ヨコブリシ、ケ​ーブルステーション福岡、読売新聞社 他</td>
                        </tr>
                        <tr>
                            <th>助成</th>
                            <td>ｘｘｘｘ</td>
                        </tr>
                        <tr>
                            <th>開催日時</th>
                            <td>令和４年３月１９日（土）・２０日（日）</td>
                        </tr>
                        <tr>
                            <th>会場</th>
                            <td>春日市総合スポーツセンター</td>
                        </tr>
                        <tr>
                            <th>競技区分</th>
                            <td>
                                <div style={{display: 'flex'}}>
                                    <div style={{margin: '8px'}}>
                                        <p style={{marginLeft: '22px'}}>男子</p>
                                        <ul>
                                            <li>１８歳以上の部</li>
                                            <li>３０歳以上の部</li>
                                            <li>４０歳以上の部</li>
                                            <li>５０歳以上の部</li>
                                            <li>６０歳以上の部</li>
                                        </ul>
                                    </div>
                                    <div style={{margin: '8px'}}>
                                        <p style={{marginLeft: '22px'}}>女子</p>
                                        <ul>
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
                                <ol>
                                    <li>協会並びに加盟団体より推薦を受けたチーム及び協会が特に出場を認めたチームとする</li>
                                    <li>選手は、令和３年４月１日現在の満年齢にて該当部門に参加できる</li>
                                    <li>チーム内には選手兼任審判員としてB級以上の審判員がいること。いない場合はB級以上の審判員を帯同すること</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th>チーム編成</th>
                            <td>
                                <ol>
                                    <li>監督１名、選手６名以内をもってチーム編成とする</li>
                                    <li>同一人物が監督及び選手として複数のチームで登録・参加はできない</li>
                                    <li>チームは、B級以上の審判員とC級以上の審判員を各１名帯同しなければならない（協会未加盟チームについては、別途対応する）</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th>競技方法</th>
                            <td>
                                <ol>
                                    <li>競技区分ごとの予選リーグ戦、その勝者による決勝トーナメント戦</li>
                                    <li>競技規則は日本ビーチボール協会認定「ビーチボールのルール」を適用</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th>表彰</th>
                            <td>各競技区分の優勝・準優勝・第三位を表彰する</td>
                        </tr>
                        <tr>
                            <th>参加料</th>
                            <td>
                                <p>１チーム　８，０００円</p>
                                <p>※ただし、日本ビーチボール協会未加盟チームは１０，０００円とする</p>
                            </td>
                        </tr>
                        <tr>
                            <th>申込方法</th>
                            <td>
                                <p>別紙参加申込様式に必要事項を記入の上、日本ビーチボール協会加盟都県は、都県協会でまとめて申し込みください。</p>
                                <p>未加盟チームも下記事務局までメールにて申し込みください</p>
                                <p>第２８回ジャパンカップビーチボール選手権　福岡大会</p>
                                <p>実行委員会事務局　ｘｘｘｘ　宛</p>
                                <p>電話　ｘｘｘｘ−ｘｘ−ｘｘｘｘ</p>
                                <p>携帯　０９０−ｘｘｘｘ−ｘｘｘｘ</p>
                                <p>Ｅメール　ｘｘｘｘ@ｘｘｘｘｘ</p>
                            </td>
                        </tr>
                        <tr>
                            <th>申込期限</th>
                            <td>
                                <p>令和３年１０月３１日（日）</p>
                                <p>※エントリー表提出期限となります</p>
                            </td>
                        </tr>
                        <tr>
                            <th>振込先</th>
                            <td>
                                <p>参加料は　都県協会ごとに取りまとめ協会名を記入のうえ、振り込みをお願いします</p>
                                <p>申し込み後の辞退・棄権の場合の参加料は返却致しませんのでご了承ください</p>
                                <p>口座名義　　　　　　ジャパンカップ福岡実行委員会</p>
                                <p>ゆうちょ銀行　　記号：ｘｘｘｘ　　番号：ｘｘｘｘｘ</p>
                                <p>ゆうちょ銀行以外から振込みの場合</p>
                                <p>店名：ｘｘｘ　店番：ｘｘｘ　普通預金　口座番号：ｘｘｘｘｘｘｘ</p>
                            </td>
                        </tr>
                        <tr className="guidLineTable-last">
                            <th>振込期限</th>
                            <td>
                                <p>令和３年１０月３１日（日）</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={{margin: '35px auto', textAlign: 'center' }}>
                    <Button
                        onClick={onDownload}
                        variant="contained"
                        color="primary"
                        startIcon={<GetAppIcon />}>
                            申込書をダウンロードする
                    </Button>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default tournamentGuidelines;