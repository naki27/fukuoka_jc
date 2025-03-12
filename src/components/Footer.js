import React from 'react';
import styles from "./styles/Footer.module.scss";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import logo from '../../public/FBA_logo_red.jpg';

export default function ButtonAppBar() {
  return (
    <Box className={styles.footer} p={2}>
      <Image src={logo} className={styles.logo} alt="第32回ジャパンカップビーチボール選手権福岡大会 公式サイト"/>
      <Typography className={styles.copyRight}>
        {'Copyright © '}
        <MuiLink href="https://fukuoka-beachball.jimdofree.com/">
            福岡県ビーチボール協会
        </MuiLink>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}