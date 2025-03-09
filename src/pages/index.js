import React from "react";
import styles from "./styles/index.module.scss";
import { Box, Container, Grid } from "@mui/material";
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

export default function Index() {

  return (
    <Container className={styles.root} maxWidth={false}>
      <Header />

      <div className={styles.keyVisualContainer}>
        <Picture className={styles.keyVisual}
            sizes="(min-width: 36em) 33.3vw, 100%"
            sources = {[
                {
                    srcSet: "/keyVisual400.png",
                    media: "(max-width: 400px)",
                },
                {   // 768px
                    srcSet: "/keyVisual768.png",
                    media: "(max-width: 768px)",
                },
                {   // 1280px
                    srcSet: "/keyVisual1280.png",
                    media: "(max-width: 1280px)",
                },
                {   // 1920px
                    srcSet: "/keyVisual1920.png",
                },
            ]}
        />
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

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
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
          </Grid>
        </Box>

        <Box my={4} py={5}>
          <H1 title="スポンサー" />

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className={styles.sponsorContainer}
          >
            <Grid item xl={4} className={styles.sponsor}>
                <Link href="http://taira-gumi.com/" target="_blank">
                    <Image src={hiragumi} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={styles.sponsor}>
                <Link href="https://tsuku2.jp/sumitall/" target="_blank">
                    <Image src={sumitoul} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={styles.sponsor}>
                <Link href="https://foodium.co.jp/" target="_blank">
                    <Image src={foodium} objectFit="contain"/>
                </Link>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className={styles.sponsorContainer}
          >
            <Grid item xl={4} className={styles.sponsor}>
                <Link href="https://miki-ya.co.jp/" target="_blank">
                    <Image src={mikiya} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={styles.sponsor}>
                <Link href="https://th-542gg.wixsite.com/mysite-1" target="_blank">
                    <Image src={cafeCaprice} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={styles.sponsor}>
                <Link href="http://www.canacan.jp/" target="_blank">
                    <Image src={canadianCamp} objectFit="contain"/>
                </Link>
            </Grid>
          </Grid>

          <Typography>
            <Link href="/sponsor" color="secondary">
                <span className="see-more">
                    もっとみる
                    <NavigateNextIcon />
                </span>
            </Link>
          </Typography>
        </Box>

        {/* <Box my={4} py={5} bgcolor="#E3E3E3">
          <H1 title="組み合わせ・進行表" />

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Link href="/underConstruction" className={styles.inlineGrid}>
              <img src="https://dummyimage.com/300x300/000/fff" />
              <p>{"女子"}</p>
            </Link>

            <Link href="/underConstruction" className={styles.inlineGrid}>
              <img src="https://dummyimage.com/300x300/000/fff" />
              <p>{"男子"}</p>
            </Link>
          </Grid>
        </Box> */}

        {/* <Box my={4} py={5}>
          <H1 title="大会結果" />

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Link href="/underConstruction" className={styles.inlineGrid}>
              <img src="https://dummyimage.com/300x300/000/fff" />
              <p>{"予選"}</p>
            </Link>

            <Link href="/underConstruction" className={styles.inlineGrid}>
              <img src="https://dummyimage.com/300x300/000/fff" />
              <p>{"トーナメント"}</p>
            </Link>
          </Grid>
        </Box> */}
      </div>

      <Footer />
    </Container>
  );
}
