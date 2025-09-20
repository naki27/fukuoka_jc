import React from 'react';
import styles from "./styles/SnsBox.module.scss";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SnsBox() {
  return (
    <Typography className={styles.root} color="textSecondary">
      <Link className={styles.iconBox} href="https://www.instagram.com/fukuoka.beach/">
          <InstagramIcon fontSize="large"/>
      </Link>
      <Link className={styles.iconBox} href="https://twitter.com/fukuokabeach/">
          <XIcon fontSize="large"/>
      </Link>
      <Link className={styles.iconBox} href="https://www.facebook.com/fukuoka.beach/">
          <FacebookIcon fontSize="large"/>
      </Link>
    </Typography>
  );
}
