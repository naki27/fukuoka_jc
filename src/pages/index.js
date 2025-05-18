import React, { useEffect, useState } from "react";
import styles from "./styles/index.module.scss";
import { Box, Container, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from 'react-parallax';

import Link from "~/components/Link";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SnsBox from "~/components/SnsBox";
import H1 from "~/components/H1";
import H1Style from "~/components/styles/H1.module.scss";
import ResultMatchCards from "~/components/ResultMatchCards";
import Image from 'next/image';

import {
  Description,
  DescriptionOutlined,
  Map,
  Domain,
  ImportContacts
} from "@mui/icons-material";

import keyVisualTitle from '../../public/keyVisualTitle.png';
import hiragumi from '../../public/sponsor/hiragumi.gif';
import canadianCamp from '../../public/sponsor/canadian-camp.png';
import cafeCaprice from '../../public/sponsor/cafe-caprice.webp';
import mikiya from '../../public/sponsor/mikiya.svg';
import foodium from '../../public/sponsor/foodium.png';
import sumitoul from '../../public/sponsor/sumitoul.jpg';
import matchTable from '../../public/match-table.png';
import progressChart from '../../public/progress-chart.png';
import progressChartLeague from '../../public/progress-chart-league.jpg';
import progressChartTournament from '../../public/progress-chart-tournament.jpg';
import battleResultLeague from '../../public/battle-result-league.jpg';
import battleResultTournament from '../../public/battle-result-tournament.jpg';
import photoGallery from '../../public/photo-gallery.jpg';
import { style } from "framer-motion/client";

export default function Index() {
  const [showLogo, setShowLogo] = useState(true);
  const [showFirstAnime, setShowFirstAnime] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const boxPy = isMobile ? 2 : 16;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    checkMobile(); // 初回実行
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000); // 1秒表示 + 1秒待機
    setTimeout(() => {
      setShowFirstAnime(false);
    }, 3000); // さらに1秒後にフェードアウト
  }, []);

  // TODO pdfのキャッシュクリアとページングの相互作用をどうするか？60〜120秒縛りを入れて、画像のタイムスタンプの秒以下を切り捨てる。

  return (
    <Container className={styles.root} maxWidth={true}>
      <Header />

      {showFirstAnime && (
        <div className={`${styles.keyVisualContainer} ${styles.blackLayer}`}>
          <AnimatePresence>
            {showLogo && (
              <motion.div
                  className={`absolute text-white text-3xl font-bold ${styles.keyVisualTitle}`}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ opacity: { duration: 2 }, scale: { duration: 2 } }}
              >
                <Image src={keyVisualTitle} className={`${styles.keyVisualTitleImage} ${styles.invert}`} alt="第32回ジャパンカップビーチボール選手権"/>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}


      {!showFirstAnime && (
        <>
          <div className={styles.keyVisualContainer}>
            <AnimatePresence>
              <motion.div
                className="w-full h-full bg-white flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <div className={styles.keyVisualTitle}>
                  <Image src={keyVisualTitle} className={styles.keyVisualTitleImage} alt="第32回ジャパンカップビーチボール選手権"/>
                </div>
                <div className={styles.keyVisualFilter}>
                  <video src="/keyVisualMovie.mp4" className={styles.keyVisualMovie} autoPlay loop muted playsInline>
                  </video>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.mainContent}>
            <SnsBox />

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

            {/* <Parallax bgImage="assoc_flag.png" strength={500}> */}
              <Box py={boxPy}>
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

                    <Link href="/detailGuidelines" className={styles.inlineGrid}>
                      <div className={styles.iconCircle}>
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

                    <Link href="/variousGuides" className={styles.inlineGrid}>
                      <div className={styles.iconCircle}>
                        <ImportContacts fontSize="large" className={styles.innerCircle} />
                      </div>
                      <p>{"各種ご案内"}</p>
                    </Link>
                  </Grid2>
                </div>
              </Box>
            {/* </Parallax> */}

            <Box py={boxPy} className={styles.even_layer}>
              {isMobile ?
                <div className={`${styles.inline_container} ${styles.inline_container_left}`}>
                  <div className={styles.inline_container_2}>
                    <H1 title="組み合わせ" />
                    <Image src={matchTable} className={styles.inline_container_2} alt="組み合わせ"/>
                    <p className={styles.description}>{"対戦の組み合わせです。"}<br/>{"各カテゴリ別のご確認いただけます。"}</p>
                    <Grid2
                      container
                      direction="row"
                      className={`${styles.container} ${styles.container_column}`}
                    >
                      <Link href="/matchTableIndex?sex=female" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"女子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>

                      <Link href="/matchTableIndex?sex=male" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"男子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                    </Grid2>
                  </div>
                </div>
              :
              <div className={`${styles.inline_container} ${styles.inline_container_left}`}>
                  <div className={styles.inline_container_2}>
                    <H1 title="組み合わせ" type={H1Style.inlineLeft} />
                    <p className={styles.description}>{"対戦の組み合わせです。"}<br/>{"各カテゴリ別のご確認いただけます。"}</p>
                    <Grid2
                      container
                      direction="row"
                      className={`${styles.container} ${styles.container_column}`}
                    >
                      <Link href="/matchTableIndex?sex=female" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"女子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>

                      <Link href="/matchTableIndex?sex=male" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"男子はこちら"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                    </Grid2>
                  </div>
                  <Image src={matchTable} className={styles.inline_container_2} alt="組み合わせ"/>
                </div>
              }
            </Box>

            <Box py={boxPy}>
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
                      <Link href="/progressChart?bf=league" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"予選リーグ"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                      <p className={styles.description}>{"予選リーグの試合進行予定をご確認いただけます。"}<br/>{"各コートの試合スケジュールを時系列で掲載しています。"}</p>

                      <Link href="/progressChart?bf=tournament" className={styles.inlineGrid}>
                        <div className={styles.linkButton}>
                          <p>{"決勝トーナメント"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                      <p className={styles.description}>{"決勝トーナメントの試合進行予定をご確認いただけます。"}<br/>{"勝ち上がりチームの対戦カードを随時更新します。"}</p>
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

                    <Link href="/progressChart?bf=league" className={styles.inlineGrid}>
                      <div className={styles.linkButton}>
                        <p>{"予選リーグ"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link>
                    <p className={styles.description}>{"予選リーグの試合進行予定をご確認いただけます。"}<br/>{"各コートの試合スケジュールを時系列で掲載しています。"}</p>

                    <Link href="/progressChart?bf=tournament" className={styles.inlineGrid}>
                      <div className={styles.linkButton}>
                        <p>{"決勝トーナメント"}</p>
                        <NavigateNextIcon />
                      </div>
                    </Link>
                    <p className={styles.description}>{"決勝トーナメントの試合進行予定をご確認いただけます。"}<br/>{"勝ち上がりチームの対戦カードを随時更新します。"}</p>
                  </Grid2>
                </div>
              </div>
              }
            </Box>

            {/* <Parallax bgImage="battle_result.gif" strength={500}> */}
              <Box py={boxPy} className={styles.even_layer}>
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
                        {"決勝トーナメントの試合結果と順位をトーナメント形式でリアルタイムに掲載しています。"}
                      </p>
                    </div>

                    <div className={styles.inlineGrid}>
                      <Link href="/memoriesPhotoGallery">
                        <Image src={photoGallery} className={styles.buttonPhoto} alt="写真館"/>
                        <div className={styles.linkButton}>
                          <p>{"写真館"}</p>
                          <NavigateNextIcon />
                        </div>
                      </Link>
                      <p className={`${styles.description} ${styles.description2}`}>
                        {"大会当日の熱戦の様子や表彰式や観客席など写真で大会の感動を伝えます。大会終了後、掲載まで暫しお時間をいただきます。"}
                      </p>
                    </div>
                  </Grid2>
                </div>
              </Box>
            {/* </Parallax> */}

            <Box py={boxPy}>
              <div className={styles.inline_container}>
                <H1 title="スポンサー" />
                <Grid2
                  container
                  direction="row"
                  className={styles.sponsorContainer}
                >
                  <Grid2 className={styles.sponsor}>
                      <Link href="http://taira-gumi.com/" target="_blank">
                          <Image src={hiragumi} alt="株式会社平組"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://tsuku2.jp/sumitall/" target="_blank">
                          <Image src={sumitoul} alt="すみとーる"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://foodium.co.jp/" target="_blank">
                          <Image src={foodium} alt="foodium tokunaga"/>
                      </Link>
                  </Grid2>
                </Grid2>
                <Grid2
                  container
                  direction="row"
                  className={styles.sponsorContainer}
                >
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://miki-ya.co.jp/" target="_blank">
                          <Image src={mikiya} alt="株式会社ミキヤ"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="https://th-542gg.wixsite.com/mysite-1" target="_blank">
                          <Image src={cafeCaprice} alt="cafeCaprice"/>
                      </Link>
                  </Grid2>
                  <Grid2 className={styles.sponsor}>
                      <Link href="http://www.canacan.jp/" target="_blank">
                          <Image src={canadianCamp} alt="カナディアンキャンプ乗馬クラブ"/>
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
            </Box>
          </div>

          <Footer />
        </>
      )}
    </Container>
  );
}
