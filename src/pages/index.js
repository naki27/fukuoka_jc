import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Box, Container, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Link from '~/components/Link';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Parallax from "~/components/Parallax";
import SnsBox from '~/components/SnsBox';
import H1 from '~/components/H1';

import {Description, Map, Domain} from '@material-ui/icons';

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};
const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  iconCircle: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    background: "#fff",
    border: "1px solid #C6C6C6",
    display: "inline-block",
    position: "relative",
    margin: "0 auto"
  },
  innerCircle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto"
  },
  inlineGrid: {
    display: "inline-grid",
    textAlign: "center",
    color: "#333",
  }
};
const useStyles = makeStyles(componentsStyle);

export default function Index() {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <Parallax image={"https://dummyimage.com/1920x1080/000/fff"} />
      <SnsBox />

      <Box my={4} py={5}>
        <H1 title="大会速報結果" />
      </Box>

      <Box my={4} py={5} bgcolor="#E3E3E3">
        <H1 title="大会について" />

        <Grid container direction="row" justify="space-around" alignItems="center">
          <Link href="." className={classes.inlineGrid}>
            <div className={classes.iconCircle} >
              <Description fontSize="large" className={classes.innerCircle}/>
            </div>
            <p>{"大会要項"}</p>
          </Link>

          <Link href="." className={classes.inlineGrid}>
            <div className={classes.iconCircle} >
              <Map fontSize="large" className={classes.innerCircle}/>
            </div>
            <p>{"アクセスマップ"}</p>
          </Link>

          <Link href="." className={classes.inlineGrid}>
            <div className={classes.iconCircle} >
              <Domain fontSize="large" className={classes.innerCircle}/>
            </div>
            <p>{"会場図"}</p>
          </Link>
        </Grid>
      </Box>

      <Box my={4} py={5}>
        <H1 title="スポンサー" />

        <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xl={4} style={{textAlign: 'center'}}>
              <img src="https://dummyimage.com/250x100/000/fff"/>
            </Grid>
            <Grid item xl={4} style={{textAlign: 'center'}}>
              <img src="https://dummyimage.com/250x100/000/fff"/>
            </Grid>
            <Grid item xl={4} style={{textAlign: 'center'}}>
              <img src="https://dummyimage.com/250x100/000/fff"/>
            </Grid>
        </Grid>
        <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xl={4} style={{textAlign: 'center'}}>
              <img src="https://dummyimage.com/250x100/000/fff"/>
            </Grid>
            <Grid item xl={4} style={{textAlign: 'center'}}>
              <img src="https://dummyimage.com/250x100/000/fff"/>
            </Grid>
            <Grid item xl={4} style={{textAlign: 'center'}}>
              <img src="https://dummyimage.com/250x100/000/fff"/>
            </Grid>
        </Grid>
      </Box>

      <Box my={4} py={5} bgcolor="#E3E3E3">
        <H1 title="組み合わせ・進行表" />
      </Box>

      <Box my={4} py={5}>
        <H1 title="大会結果（リアルタイム）" />
      </Box>

      <Footer />
    </Container>
  );
}
