import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  title: {
    flexGrow: 2,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box bgcolor="#ECACB5" p={2}>
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