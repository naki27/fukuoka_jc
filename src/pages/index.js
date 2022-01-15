import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
  Map,
  Domain,
} from "@material-ui/icons";

const containerFluid = {
  padding: "0",
  margin: "0",
  width: "100vw",
};
const container = {
  ...containerFluid,
  // "@media (min-width: 576px)": {
  //   maxWidth: "540px"
  // },
  // "@media (min-width: 768px)": {
  //   maxWidth: "720px"
  // },
  // "@media (min-width: 992px)": {
  //   maxWidth: "960px"
  // },
  // "@media (min-width: 1200px)": {
  //   maxWidth: "1140px"
  // }
};
const componentsStyle = {
  // container,
  root: {
    padding: "0",
    margin: "0",
    width: "100vw",
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  iconCircle: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    background: "#fff",
    border: "1px solid #C6C6C6",
    display: "inline-block",
    position: "relative",
    margin: "0 15px",
    "&[disabled]": {
      background: "#C6C6C6",
      cursor: "not-allowed"
    }
  },
  innerCircle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
  },
  inlineGrid: {
    display: "inline-grid",
    textAlign: "center",
    color: "#333",
  },
  quickResult: {
    display: "flex",
    borderColor: "#C6C6C6",
    border: 1,
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "12px",
    position: "relative"
  },
  sexPanel: {
    margin: "auto",
    padding: "0 16px",
  },
  sexPanelContainer: {
    display: "flex",
  },
  maleTitle: {
    margin: "auto",
    color: "#3261AB",
    fontSize: "x-large",
  },
  femaleTitle: {
    margin: "auto",
    color: "#C7243A",
    fontSize: "x-large",
  },
  keyVisualContainer: {
    position: "relative",
    textAlign: "center"
  },
  keyVisual: {
    top: "80px!important",
    width: "100vw",
  },
  mainContent: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  sponsorContainer: {
    marginBottom: "32px",
  },
  sponsor: {
    maxWidth: "300px",
    maxHeight: "100px",
    textAlign: "center",
  },
  "@media (max-width: 1280px)": {
    keyVisualContainer: {
      marginTop: "38px"
    }
  },
  "@media (max-width: 768px)": {
    keyVisualComment: {
      fontSize: "1rem",
    },
    keyVisual: {
      top: "70px!important"
    },
  },
  "@media (max-width: 540px)": {
    keyVisualComment: {
      fontSize: "0.8rem",
    },
    keyVisual: {
      top: "58px!important"
    },
    sponsorContainer: {
      flexDirection: "column",
    },
    sponsor: {
      marginBottom: "16px",
    },
  },
  "@media (max-width: 575px)": {
    sexPanelContainer: {
      display: "block",
    },
    sexPanel: {
      margin: "16px 0",
    },
    quickResult: {
      width: "100%",
    },
  },
  "@media (max-width: 399px)": {
    sexPanelContainer: {
      display: "block",
    },
    sexPanel: {
      margin: "16px 0",
    },
    quickResult: {
      width: "100%",
    },
  },
  "@media (min-width: 576px)": {
    quickResult: {
      width: "400px",
    },
  },
  "@media (min-width: 768px)": {
    quickResult: {
      width: "400px",
    },
  },
  "@media (min-width: 992px)": {
    quickResult: {
      width: "500px",
    },
  },
  "@media (min-width: 1200px)": {
    quickResult: {
      width: "600px",
    },
  },
};
const useStyles = makeStyles(componentsStyle);

import takumi from '../../public/sponsor/takumi.png';
import hiragumi from '../../public/sponsor/hiragumi.gif';
import canadianCamp from '../../public/sponsor/canadian-camp.png';
import cafeCaprice from '../../public/sponsor/cafe-caprice.webp';
import mikiya from '../../public/sponsor/mikiya.svg';
import foodium from '../../public/sponsor/foodium.png';
import sumitoul from '../../public/sponsor/sumitoul.jpg';

export default function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <div className={classes.keyVisualContainer}>
        <Picture className={classes.keyVisual}
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

      <div className={classes.mainContent}>
        <SnsBox />

        <Box my={4} py={5}>
          <H1 title="大会速報結果" />

          <Box className={classes.sexPanelContainer}>
            <div className={classes.sexPanel}>
              <h3 className={classes.femaleTitle}>女子</h3>
              <Box overflow="scroll" className={classes.quickResult}>
                  <ResultMatchCards sex="Female" />
              </Box>
            </div>
            <div className={classes.sexPanel}>
              <h3 className={classes.maleTitle}>男子</h3>
              <Box overflow="scroll" className={classes.quickResult}>
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
            <Link href="/tournamentGuidelines" className={classes.inlineGrid}>
              <div className={classes.iconCircle}>
                <Description fontSize="large" className={classes.innerCircle} />
              </div>
              <p>{"大会要項"}</p>
            </Link>

            <Link href="/detailGuidelines" className={classes.inlineGrid}>
              <div className={classes.iconCircle}>
                <Description fontSize="large" className={classes.innerCircle} />
              </div>
              <p>{"細部要項"}</p>
            </Link>

            <Link href="/accessMap" className={classes.inlineGrid}>
              <div className={classes.iconCircle}>
                <Map fontSize="large" className={classes.innerCircle} />
              </div>
              <p>{"アクセスマップ"}</p>
            </Link>

            <Link href="/underConstruction" className={classes.inlineGrid}>
              <div className={classes.iconCircle} disabled>
                <Domain fontSize="large" className={classes.innerCircle} />
              </div>
              <p>{"会場図"}</p>
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
            className={classes.sponsorContainer}
          >
            <Grid item xl={4} className={classes.sponsor}>
                <Link href="http://taira-gumi.com/" target="_blank">
                    <Image src={hiragumi} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={classes.sponsor}>
                <Link href="https://tsuku2.jp/sumitall/" target="_blank">
                    <Image src={sumitoul} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={classes.sponsor}>
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
            className={classes.sponsorContainer}
          >
            <Grid item xl={4} className={classes.sponsor}>
                <Link href="https://miki-ya.co.jp/" target="_blank">
                    <Image src={mikiya} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={classes.sponsor}>
                <Link href="https://th-542gg.wixsite.com/mysite-1" target="_blank">
                    <Image src={cafeCaprice} objectFit="contain"/>
                </Link>
            </Grid>
            <Grid item xl={4} className={classes.sponsor}>
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
            <Link href="/underConstruction" className={classes.inlineGrid}>
              <img src="https://dummyimage.com/300x300/000/fff" />
              <p>{"女子"}</p>
            </Link>

            <Link href="/underConstruction" className={classes.inlineGrid}>
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
            <Link href="/underConstruction" className={classes.inlineGrid}>
              <img src="https://dummyimage.com/300x300/000/fff" />
              <p>{"予選"}</p>
            </Link>

            <Link href="/underConstruction" className={classes.inlineGrid}>
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
