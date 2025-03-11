import React from "react";
import styles from "./styles/index.module.scss";
import { Box, Container, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Link from "~/components/Link";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Parallax from "~/components/Parallax";
import SnsBox from "~/components/SnsBox";
import H1 from "~/components/H1";
import ResultMatchCards from "~/components/ResultMatchCards";
import Image from 'next/image';
import { Picture } from 'react-responsive-picture';

import {
  Description,
  DescriptionOutlined,
  Map,
  Domain,
  ImportContacts
} from "@mui/icons-material";

import takumi from '../../public/sponsor/takumi.png';
import hiragumi from '../../public/sponsor/hiragumi.gif';
import canadianCamp from '../../public/sponsor/canadian-camp.png';
import cafeCaprice from '../../public/sponsor/cafe-caprice.webp';
import mikiya from '../../public/sponsor/mikiya.svg';
import foodium from '../../public/sponsor/foodium.png';
import sumitoul from '../../public/sponsor/sumitoul.jpg';
import matchTableMan from '../../public/match-table-man.jpg';
import matchTableWoman from '../../public/match-table-woman.jpg';
import battleResultLeague from '../../public/battle-result-league.jpg';
import battleResultTournament from '../../public/battle-result-tournament.jpg';

export default function Index() {

  return (
    <Container className={styles.root} maxWidth={true}>
      <Header />

      <div className={styles.keyVisualContainer}>
        <p className={`${styles.keyVisualTitle} ${styles.keyVisualMessage1}`}>第32回</p>
        <p className={`${styles.keyVisualTitle} ${styles.keyVisualMessage2}`}>ジャパンカップ</p>
        <p className={`${styles.keyVisualTitle} ${styles.keyVisualMessage3}`}>ビーチボール選手権</p>
        <p className={`${styles.keyVisualTitle} ${styles.keyVisualSub}`}>福岡大会</p>
        <p className={`${styles.keyVisualTitle} ${styles.keyVisualDate}`}>2/21(土)、2/22(日)</p>
        <div className={styles.keyVisualFilter}>
          <video src="/keyVisualMovie.mp4" className={styles.keyVisualMovie} autoPlay loop muted playsInline>
          </video>
        </div>
      </div>

      <div className={styles.mainContent}>
        <SnsBox />

        <Box my={4} py={5}>
          <H1 title="大会速報結果" />

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
        </Box>

        <Box my={4} py={5} bgcolor="#fff">
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
        </Box>

        <Box my={4} py={5}>
          <H1 title="組み合わせ・進行表" />

          <Grid2
            container
            direction="row"
            className={styles.container}
          >
            <Link href="/underConstruction" className={styles.inlineGrid}>
              <Image src={matchTableWoman} className={styles.buttonPhoto} alt="組み合わせ女子"/>
              <p>{"女子"}</p>
            </Link>

            <Link href="/underConstruction" className={styles.inlineGrid}>
            <Image src={matchTableMan} className={styles.buttonPhoto} alt="組み合わせ男子"/>
              <p>{"男子"}</p>
            </Link>
          </Grid2>
        </Box>

        <Box my={4} py={5}>
          <H1 title="大会結果" />

          <Grid2
            container
            direction="row"
            className={styles.container}
          >
            <Link href="/underConstruction" className={styles.inlineGrid}>
              <Image src={battleResultLeague} className={styles.buttonPhoto} alt="予選"/>
              <p>{"予選"}</p>
            </Link>

            <Link href="/underConstruction" className={styles.inlineGrid}>
              <Image src={battleResultTournament} className={styles.buttonPhoto} alt="トーナメント"/>
              <p>{"トーナメント"}</p>
            </Link>
          </Grid2>
        </Box>

        <Box my={4} py={5}>
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

          <Typography>
            <Link href="/sponsor" color="secondary">
                <span className="see-more">
                    もっとみる
                    <NavigateNextIcon />
                </span>
            </Link>
          </Typography>
        </Box>
      </div>

      <Footer />
    </Container>
  );
}
