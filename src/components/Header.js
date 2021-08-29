import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from '~/components/Link';
import {
  Description,
  Map,
  Domain,
  SupervisorAccount,
  EmojiEvents,
  Subject,
} from "@material-ui/icons";
import logo from '../../public/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    logo: {
      height: "50px",
      width: "auto",
      marginRight: theme.spacing(3)
    },
  }));


export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <Link href="/">
            <Image src={logo} width="300" height="100" className="logo"/>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {/* ビーチボールジャパンカップ2022 IN 福岡(仮) */}
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit"
                aria-label="menu" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key="description">
              <ListItemIcon><Description /></ListItemIcon>
              <Link href="/tournamentGuidelines">
                <ListItemText primary="大会要項" className="default-color"/>
              </Link>
            </ListItem>
            <ListItem button key="accessMap">
              <ListItemIcon><Map /></ListItemIcon>
              <Link href="/underConstruction">
                <ListItemText primary="アクセスマップ" className="default-color"/>
              </Link>
            </ListItem>
            <ListItem button key="domain">
              <ListItemIcon><Domain /></ListItemIcon>
              <Link href="/underConstruction">
                <ListItemText primary="会場図" className="default-color"/>
              </Link>
            </ListItem>
        </List>
        {/* <Divider />
        <List>
          <ListItem button key="sponsor">
            <ListItemIcon><SupervisorAccount /></ListItemIcon>
            <Link href="/sponsor">
              <ListItemText primary="スポンサー" className="default-color"/>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="underConstruction1">
            <ListItemIcon><Subject /></ListItemIcon>
            <Link href="/underConstruction">
              <ListItemText primary="組み合わせ・進行表（女子）" className="default-color"/>
            </Link>
          </ListItem>
          <ListItem button key="underConstruction2">
            <ListItemIcon><Subject /></ListItemIcon>
            <Link href="/underConstruction">
              <ListItemText primary="組み合わせ・進行表（男子）" className="default-color"/>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="underConstruction3">
            <ListItemIcon><EmojiEvents /></ListItemIcon>
            <Link href="/underConstruction">
              <ListItemText primary="大会結果（女子）" className="default-color"/>
            </Link>
          </ListItem>
          <ListItem button key="underConstruction4">
            <ListItemIcon><EmojiEvents /></ListItemIcon>
            <Link href="/underConstruction">
              <ListItemText primary="大会結果（男子）" className="default-color"/>
            </Link>
          </ListItem>
        </List> */}
      </Drawer>
    </div>
  );
}