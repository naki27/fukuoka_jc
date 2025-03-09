import React from 'react';
import styles from "./styles/Footer.module.scss";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <div className={styles.root}>
      <Box bgcolor="#ECACB5" p={4}>
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <MuiLink color="inherit" href="https://fukuoka-beachball.jimdofree.com/">
              福岡県ビーチボール協会
          </MuiLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </div>
  );
}