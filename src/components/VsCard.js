import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    minWidth: 300,
    margin: "0 8px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  seal: {
    padding: "7px 14px",
    borderRadius: "6px",
    borderColor: '#C6C6C6',
    border: 1,
    borderStyle: "solid",
    borderRadius: "5px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0"
  },
  vsTitle: {
    display: "flex",
    justifyContent: "space-around",
    margin: "12px 0"
  },
  cardFooter: {
    textAlign: "right",
    marginTop: "3px",
    fontSize: "0.8em"
  },
  win: {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: "#C7243A",
  },
  vsRow: {
      textAlign: "center",
      fontWeight: "bold",
      margin: "4px 0",
      "& > span": {
          margin: "0 8px"
      }
  },
  vsResult: {
    fontSize: "1.2em",
    fontWeight: "bold",
    margin: "8px 0",
    textAlign: "center",
    "& > span": {
        margin: "0 8px"
    }
},
  age18: {
    background: "#6EB7DB",
    borderColor: '#6EB7DB',
  }
});

export default function VsCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const defaultProps = {
    borderColor: '#C6C6C6',
    border: 1,
  };
  
  return (
    <Card className={classes.root}>
        <CardContent>
            <div className={classes.cardHeader}>
                <span className={classes.seal + ' ' + classes.age18}>18歳以上</span>
                <span className={classes.seal}>予選</span>
            </div>
            <div className={classes.vsTitle}>
                <span className={classes.win}>原北A</span> vs <span>原北B</span>
            </div>
            <Box borderRadius={6}  {...defaultProps} >
                <div className={classes.vsRow}>
                    <span className={classes.win}>9</span>−<span>8</span>
                </div>
                <div className={classes.vsRow}>
                    <span>8</span>−<span className={classes.win}>9</span>
                </div>
                <div className={classes.vsRow}>
                    <span className={classes.win}>15</span>−<span>13</span>
                </div>
                <div className={classes.vsResult}>
                    <span className={classes.win}>2</span>−<span>1</span>
                </div>
            </Box>
            <div className={classes.cardFooter}>
                2022/3/19 10:22:24
            </div>
        </CardContent>
    </Card>
  );
}
