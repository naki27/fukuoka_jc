import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import styles from "./styles/Header.module.scss";
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from '~/components/Link';
import {
  Description,
  DescriptionOutlined,
  Map,
  Domain,
  SupervisorAccount,
  ImportContacts,
  Subject,
  EmojiEvents,
  JoinInner,
} from "@mui/icons-material";
import logo from '../../public/logo.png';

export default function ButtonAppBar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={clsx(styles.appBar, {
          [styles.appBarShift]: open,
        })}>
        <Toolbar className={styles.toolbar}>
          <Link href="/">
            <Image src={logo} className={styles.logo} alt="第32回ジャパンカップビーチボール選手権福岡大会 公式サイト"/>
          </Link>
          <IconButton edge="end" className={`${clsx(open && styles.hide)}`} color="inherit"
                aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon className={styles.menuButton} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        styles={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem key="tournamentGuidelines">
              <ListItemIcon><Description /></ListItemIcon>
              <Link href="/tournamentGuidelines">
                <ListItemText primary="大会要項" className="default-color"/>
              </Link>
            </ListItem>
            <ListItem key="detailGuidelines">
              <ListItemIcon><DescriptionOutlined /></ListItemIcon>
              {/* <Link href="/detailGuidelines"> */}
              <Link href="/underConstruction">
                <ListItemText primary="細部要項" className="default-color"/>
              </Link>
            </ListItem>
            <ListItem key="accessMap">
              <ListItemIcon><Map /></ListItemIcon>
              <Link href="/accessMap">
                <ListItemText primary="アクセスマップ" className="default-color"/>
              </Link>
            </ListItem>
            <ListItem key="underConstruction">
              <ListItemIcon><Domain /></ListItemIcon>
              <Link href="/underConstruction">
                <ListItemText primary="会場図" className="default-color"/>
              </Link>
            </ListItem>
            <ListItem key="variousGuides">
              <ListItemIcon><ImportContacts /></ListItemIcon>
              {/* <Link href="/variousGuides"> */}
              <Link href="/underConstruction">
                <ListItemText primary="各種ご案内" className="default-color"/>
              </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="matchTableIndex1">
            <ListItemIcon><JoinInner /></ListItemIcon>
            {/* <Link href="/matchTableIndex?sex=female"> */}
            <Link href="/underConstruction">
              <ListItemText primary="組み合わせ（女子）" className="default-color"/>
            </Link>
          </ListItem>
          <ListItem key="matchTableIndex2">
            <ListItemIcon><JoinInner /></ListItemIcon>
            {/* <Link href="/matchTableIndex?sex=male"> */}
            <Link href="/underConstruction">
              <ListItemText primary="組み合わせ（男子）" className="default-color"/>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="progressChart1">
            <ListItemIcon><Subject /></ListItemIcon>
            {/* <Link href="/progressChart?bf=league"> */}
            <Link href="/underConstruction">
              <ListItemText primary="進行表（予選）" className="default-color"/>
            </Link>
          </ListItem>
          <ListItem key="progressChart2">
            <ListItemIcon><Subject /></ListItemIcon>
            {/* <Link href="/progressChart?bf=tournament"> */}
            <Link href="/underConstruction">
              <ListItemText primary="進行表（決勝）" className="default-color"/>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="resultMatchIndex1">
            <ListItemIcon><EmojiEvents /></ListItemIcon>
            {/* <Link href="/resultMatchIndex?bf=league"> */}
            <Link href="/underConstruction">
              <ListItemText primary="大会結果（予選）" className="default-color"/>
            </Link>
          </ListItem>
          <ListItem key="resultMatchIndex2">
            <ListItemIcon><EmojiEvents /></ListItemIcon>
            {/* <Link href="/resultMatchIndex?bf=tournament"> */}
            <Link href="/underConstruction">
              <ListItemText primary="大会結果（決勝）" className="default-color"/>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="sponsor">
            <ListItemIcon><SupervisorAccount /></ListItemIcon>
            <Link href="/sponsor">
              <ListItemText primary="スポンサー" className="default-color"/>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}