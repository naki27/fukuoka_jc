import React, { useEffect, useState, useContext } from "react";
import styles from "./styles/index.module.scss";
import { Box, Container, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Link from "~/components/Link";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SnsBox from "~/components/SnsBox";
import H1 from "~/components/H1";
import H1Style from "~/components/styles/H1.module.scss";
import ResultMatchCards from "~/components/ResultMatchCards";
import Image from 'next/image';
import AnimatedSection from "~/components/AnimatedSection";
import { MobileContext } from '~/contexts/MobileContext';

import {
  Description,
  DescriptionOutlined,
  Map,
  Domain,
  ImportContacts
} from "@mui/icons-material";

import keyVisualTitle from '../../public/keyVisualTitle.png';
import calico from '../../public/sponsor/calico.jpg';
import shirakiudon from '../../public/sponsor/shirakiudon.jpg';
import hakkouunnyu from '../../public/sponsor/hakkouunnyu.jpg';
import pos from '../../public/sponsor/pos.jpg';
import bijurie from '../../public/sponsor/bijurie.jpg';
import shiikichaya from '../../public/sponsor/shiikichaya.jpg';
import matchTable from '../../public/match-table.png';
import progressChart from '../../public/progress-chart.png';
import progressChartLeague from '../../public/progress-chart-league.jpg';
import progressChartTournament from '../../public/progress-chart-tournament.jpg';
import battleResultLeague from '../../public/battle-result-league.jpg';
import battleResultTournament from '../../public/battle-result-tournament.jpg';
import photoGallery from '../../public/photo-gallery.jpg';
import catchCopy from '../../public/catchcopy.png';

export default function Index() {
  const [showLogo, setShowLogo] = useState(true);
  const isMobile = useContext(MobileContext);
  const keyVisualMovie = isMobile ? "/keyVisualMovie_Mobile.mp4" : "/keyVisualMovie.mp4";
  const boxPy = isMobile ? 2 : 16;

  return (
    <Container className={styles.root} maxWidth={true}>
      <Header />

      <>
        <div className={styles.keyVisualContainer}>
              <div className={styles.keyVisualTitle}>
                <Image src={keyVisualTitle} className={styles.keyVisualTitleImage} alt="第32回ジャパンカップビーチボール選手権"/>
              </div>
              <div className={styles.keyVisualFilter}>
                <video src={keyVisualMovie} className={styles.keyVisualMovie} autoPlay loop muted playsInline>
                </video>
              </div>

        </div>

        <div className={styles.mainContent}>

          <AnimatedSection animationType="slideRight">
            <SnsBox />
          </AnimatedSection>

          {/* <Box py={8}>
            <div className={styles.inline_container}>
              <H1 title="大会速報" />

              <Box className={styles.sexPanelContainer}>
                <div className={styles.sexPanel}>
                  <h3 className={styles.femaleTitle}>女子</h3>
                  <Box overflow="scroll" className={styles.quickResult}>
                      <ResultMatchCards sex="Female" />
                  </Box>
                </div>
                <div className={styles.sexPanel}>
                  <h3 className={styles.maleTitle}>男子</h3>
                  <Box overflow="scroll" className={styles.quickResult}>
                      <ResultMatchCards sex="Male" />
                  </Box>
                </div>
              </Box>
            </div>
          </Box> */}

          <Box py={boxPy}>
            <AnimatedSection animationType="fade">
              <div className={styles.inline_container}>
                <H1 title="大会について" />

                <Grid2
                  container
                  direction="row"
                  className={styles.container}
                >
                  <Link href="/tournamentGuidelines" className={styles.inlineGrid}>
                    <div className={styles.iconCircle}>
                      <Description fontSize="large" className={styles.innerCircle} />
                    </div>
                    <p>{"大会要項"}</p>
                  </Link>

                  {/* <Link href="/detailGuidelines" className={styles.inlineGrid}> */}
                  <Link href="/underConstruction" className={styles.inlineGrid}>
                    <div className={styles.iconCircle} disabled>
                      <DescriptionOutlined fontSize="large" className={styles.innerCircle} />
                    </div>
                    <p>{"細部要項"}</p>
                  </Link>

                  <Link href="/accessMap" className={styles.inlineGrid}>
                    <div className={styles.iconCircle}>
                      <Map fontSize="large" className={styles.innerCircle} />
                    </div>
                    <p>{"アクセスマップ"}</p>
                  </Link>

                  <Link href="/underConstruction" className={styles.inlineGrid}>
                    <div className={styles.iconCircle} disabled>
                      <Domain fontSize="large" className={styles.innerCircle} />
                    </div>
                    <p>{"会場図"}</p>
                  </Link>

                  {/* <Link href="/variousGuides" className={styles.inlineGrid}> */}
                  <Link href="/underConstruction" className={styles.inlineGrid}>
                    <div className={styles.iconCircle} disabled>
                      <ImportContacts fontSize="large" className={styles.innerCircle} />
                    </div>
                    <p>{"各種ご案内"}</p>
                  </Link>
                </Grid2>
              </div>
            </AnimatedSection>
          </Box>

          <Box py={boxPy} className={styles.even_layer}>
            <AnimatedSection animationType="slideLeft">
              {isMobile ?
                <div className={`${styles.inline_container} ${styles.inline_container_left}`}>
                  <div className={styles.inline_container_2}>
                    <H1 title="組み合わせ" />
                    <Image src={matchTable} className={styles.inline_container_2} alt="組み合わせ"/>
                    <p className={styles.description}>{"対戦の組み合わせです。"}<br/>{"各カテゴリ別のご確認いただける予定です。"}</p>
                    <Grid2
                      container
                      direction="row"
                      className={`${styles.container} ${styles.container_column}`}
                    >
                      {/* <Link href="/matchTableIndex?sex=female" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"女子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link> */}

                      {/* <Link href="/matchTableIndex?sex=male" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"男子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link> */}
                    </Grid2>
                  </div>
                </div>
              :
              <div className={`${styles.inline_container} ${styles.inline_container_left}`}>
                  <div className={styles.inline_container_2}>
                    <H1 title="組み合わせ" type={H1Style.inlineLeft} />
                    <p className={styles.description}>{"対戦の組み合わせです。"}<br/>{"各カテゴリ別のご確認いただける予定です。"}</p>
                    <Grid2
                      container
                      direction="row"
                      className={`${styles.container} ${styles.container_column}`}
                    >
                      {/* <Link href="/matchTableIndex?sex=female" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"女子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link> */}

                      {/* <Link href="/matchTableIndex?sex=male" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"男子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link> */}
                    </Grid2>
                  </div>
                  <Image src={matchTable} className={styles.inline_container_2} alt="組み合わせ"/>
                </div>
              }
            </AnimatedSection>
          </Box>

          <Box py={boxPy}>
            <AnimatedSection animationType="slideRight">
              {isMobile ?
                <div className={`${styles.inline_container} ${styles.inline_container_left}`}>
                  <div className={styles.inline_container_2}>
                    <H1 title="進行表" />
                    <Image src={progressChart} className={styles.inline_container_3} alt="進行表"/>

                    <Grid2
                      container
                      direction="row"
                      className={`${styles.container} ${styles.container_column}`}
                    >
                      {/* <Link href="/progressChart?bf=league" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"予選リーグ"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                       */}
                      <p className={styles.description}>{"予選リーグの試合進行予定や、決勝トーナメントの試合進行予定をご確認いただける予定です。"}</p>
                      {/* <p className={styles.description}>{"予選リーグの試合進行予定をご確認いただけます。"}<br/>{"各コートの試合スケジュールを時系列で掲載しています。"}</p> */}

                      {/* <Link href="/progressChart?bf=tournament" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"決勝トーナメント"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                      */}
                      {/* <p className={styles.description}>{"決勝トーナメントの試合進行予定をご確認いただけます。"}<br/>{"勝ち上がりチームの対戦カードを随時更新します。"}</p> */}
                    </Grid2>
                  </div>
                </div>
              :
              <div className={`${styles.inline_container} ${styles.inline_container_left}`}>
                <Image src={progressChart} className={styles.inline_container_2} alt="進行表"/>
                <div className={styles.inline_container_2}>
                  <Grid2
                    container
                    direction="row"
                    className={`${styles.container} ${styles.container_column}`}
                    ml={8}
                  >
                    <H1 title="進行表" type={H1Style.inlineLeft} />

                    {/* <Link href="/progressChart?bf=league" className={styles.inlineGrid}>
                      <div className={styles.linkButton}>
                        <p>{"予選リーグ"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link> */}
                    <p className={styles.description}>{"予選リーグの試合進行予定や、決勝トーナメントの試合進行予定をご確認いただける予定です。"}</p>
                    {/* <p className={styles.description}>{"予選リーグの試合進行予定をご確認いただけます。"}<br/>{"各コートの試合スケジュールを時系列で掲載しています。"}</p> */}

                    {/* <Link href="/progressChart?bf=tournament" className={styles.inlineGrid}>
                      <div className={styles.linkButton}>
                        <p>{"決勝トーナメント"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link> */}
                    {/* <p className={styles.description}>{"決勝トーナメントの試合進行予定をご確認いただけます。"}<br/>{"勝ち上がりチームの対戦カードを随時更新します。"}</p> */}
                  </Grid2>
                </div>
              </div>
              }
            </AnimatedSection>
          </Box>

          <Box py={boxPy} className={styles.even_layer}>
            <AnimatedSection animationType="slideUp">
              <div className={isMobile ? `${styles.inline_container} ${styles.inline_container_left}` : `${styles.inline_container}`}>
                <H1 title="大会結果" />
                <Grid2
                  container
                  direction="row"
                  className={styles.container}
                >
                  <div className={styles.inlineGrid}>
                    <Link href="/resultMatchIndex?bf=league">
                      <Image src={battleResultLeague} className={styles.buttonPhoto} alt="予選"/>
                      <div className={styles.linkButton}>
                        <p>{"予選リーグ結果"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link>
                    <p className={`${styles.description} ${styles.description2}`}>
                      {/* {"大会当日には予選リーグの試合結果と順位、勝敗数や得失点差をリアルタイムに掲載していく予定です。"} */}
                      {"予選リーグの試合結果と順位、勝敗数や得失点差をリアルタイムに掲載しています。"}
                    </p>
                  </div>

                  <div className={styles.inlineGrid}>
                    <Link href="/resultMatchIndex?bf=tournament">
                      <Image src={battleResultTournament} className={styles.buttonPhoto} alt="トーナメント"/>
                      <div className={styles.linkButton}>
                        <p>{"決勝トーナメント結果"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link>
                    <p className={`${styles.description} ${styles.description2}`}>
                      {"同じく大会当日には決勝トーナメントの試合結果と順位をトーナメント形式でリアルタイムに掲載していく予定です。"}
                      {"決勝トーナメントの試合結果と順位をトーナメント形式でリアルタイムに掲載しています。"}
                    </p>
                  </div>

                  <div className={styles.inlineGrid}>
                    {/* <Link href="/memoriesPhotoGallery">
                      <Image src={photoGallery} className={styles.buttonPhoto} alt="写真館"/>
                      <div className={styles.linkButton}>
                        <p>{"写真館"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link> */}
                    <div className={styles.inlineGrid}>
                      <Image src={photoGallery} className={styles.buttonPhoto} alt="予選"/>
                    </div>
                    <p className={`${styles.description} ${styles.description2}`}>
                      {"大会当日の熱戦の様子や表彰式や観客席など写真で大会の感動を伝えます。大会終了後、掲載まで暫しお時間をいただきます。"}
                    </p>
                  </div>
                </Grid2>
              </div>
            </AnimatedSection>
          </Box>

          <Box py={boxPy}>
            <AnimatedSection animationType="slideUp">
              <div className={styles.inline_container}>
                <H1 title="スポンサー" />
                <Grid2
                  container
                  direction="row"
                  className={styles.sponsorContainer}
                >
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://calicohd.jp/sub01.html" target="_blank">
                          <Image src={calico} alt="calico"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://udonshiraki.com/" target="_blank">
                          <Image src={shirakiudon} alt="うどん白木商店"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://hakkou3058.wixsite.com/0922913180" target="_blank">
                          <Image src={hakkouunnyu} alt="博光運輸株式会社"/>
                      </Link>
                  </Grid2>
                </Grid2>
                <Grid2
                  container
                  direction="row"
                  className={styles.sponsorContainer}
                >
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://www.pos-japan.com/" target="_blank">
                          <Image src={pos} alt="株式会社POS"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://shiikichaya.com/" target="_blank">
                          <Image src={shiikichaya} alt="椎木茶屋"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://www.instagram.com/bijourie.befu/" target="_blank">
                          <Image src={bijurie} alt="ビジュリエ"/>
                      </Link>
                  </Grid2>
                </Grid2>

                <Typography className={`${styles.sponsor_remarks} ${styles.description}`}>
                  {"※ホームページがあるスポンサー様はロゴをクリックするとリンクでご確認いただけます。"}

                  <Link href="/sponsor" color="secondary">
                      <span className="see-more">
                          もっとみる
                          <NavigateNextIcon />
                      </span>
                  </Link>
                </Typography>
              </div>
            </AnimatedSection>
          </Box>
        </div>

        <Footer isMobile={isMobile}/>
      </>
    </Container>
  );
}
