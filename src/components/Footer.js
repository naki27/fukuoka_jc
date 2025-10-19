import React from 'react';
import styles from "./styles/Footer.module.scss";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import logo from '../../public/FBA_logo_red.jpg';
import Divider from "@mui/material/Divider";

export default function ButtonAppBar({isMobile}) {
  return (
    <Box className={styles.footer} p={2} display="flex" justifyContent="space-evenly">
      {isMobile ?
        <Box display="flex" flexDirection="column" alignItems="center" sx={{textAlign: 'center'}}>
          <p>第32回ジャパンカップ<br />ビーチボール選手権福岡大会<br />公式サイト</p>
          <Image src={logo} className={styles.logo} alt="第32回ジャパンカップビーチボール選手権福岡大会 公式サイト"/>
          <p>
            {'Copyright © '}
            <MuiLink href="https://fukuoka-beachball.jimdofree.com/">
                福岡県ビーチボール協会
            </MuiLink>
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </p>
        </Box>
      :
        <>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <p>
              第32回  ジャパンカップビーチボール選手権福岡大会  公式サイト
            </p>
            <Image src={logo} className={styles.logo} alt="第32回ジャパンカップビーチボール選手権福岡大会 公式サイト"/>
            <p>
              {'Copyright © '}
              <MuiLink href="https://fukuoka-beachball.jimdofree.com/">
                  福岡県ビーチボール協会
              </MuiLink>
              {' '}
              {new Date().getFullYear()}
              {'.'}
            </p>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" mx={3}>
              <MuiLink href="/tournamentGuidelines">
                <p>{"大会要項"}</p>
              </MuiLink>
              {/* <MuiLink href="/detailGuidelines"> */}
              <MuiLink href="/underConstruction">
                <p>{"細部要項"}</p>
              </MuiLink>
              <MuiLink href="/accessMap">
                <p>{"アクセスマップ"}</p>
              </MuiLink>
              <MuiLink href="/underConstruction">
                <p>{"会場図"}</p>
              </MuiLink>
              {/* <MuiLink href="/variousGuides"> */}
              <MuiLink href="/underConstruction">
                <p>{"各種ご案内"}</p>
              </MuiLink>
            </Box>
            <Box display="flex" flexDirection="column" mx={3}>
              <Box display="flex" flexDirection="column">
                {/* <MuiLink href="/matchTableIndex?sex=female"> */}
                <MuiLink href="/underConstruction">
                  <p>{"組み合わせ（女子）"}</p>
                </MuiLink>
                {/* <MuiLink href="/matchTableIndex?sex=male"> */}
                <MuiLink href="/underConstruction">
                  <p>{"組み合わせ（男子）"}</p>
                </MuiLink>
              </Box>
              <Divider sx={{ borderColor: 'white', margin: '16px 0'}}/>
              <Box display="flex" flexDirection="column">
                {/* <MuiLink href="/progressChart?bf=league"> */}
                <MuiLink href="/underConstruction">
                  <p>{"進行表（予選）"}</p>
                </MuiLink>
                {/* <MuiLink href="/progressChart?bf=tournament"> */}
                <MuiLink href="/underConstruction">
                  <p>{"進行表（決勝）"}</p>
                </MuiLink>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" mx={3}>
              <Box display="flex" flexDirection="column">
                {/* <MuiLink href="/progressChart?bf=league"> */}
                <MuiLink href="/underConstruction">
                  <p>{"大会結果（予選）"}</p>
                </MuiLink>
                {/* <MuiLink href="/progressChart?bf=tournament"> */}
                <MuiLink href="/underConstruction">
                  <p>{"大会結果（決勝）"}</p>
                </MuiLink>
              </Box>
              <Divider sx={{ borderColor: 'white', margin: '16px 0'}}/>
              <Box display="flex" flexDirection="column">
                {/* <MuiLink href="/sponsor"> */}
                <MuiLink href="/underConstruction">
                  <p>{"スポンサー"}</p>
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </>
      }
    </Box>
  );
}