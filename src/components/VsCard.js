import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { DateTime } from 'luxon';

const useStyles = makeStyles({
  root: {
    width: 300,
    minWidth: 300,
    margin: "0 8px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
    borderColor: "#C6C6C6",
    border: 1,
    borderStyle: "solid",
    borderRadius: "5px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
  },
  vsTitle: {
    display: "flex",
    justifyContent: "space-around",
    margin: "12px 0",
  },
  cardFooter: {
    textAlign: "right",
    marginTop: "3px",
    fontSize: "0.8em",
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
      margin: "0 8px",
    },
  },
  vsResult: {
    fontSize: "1.2em",
    fontWeight: "bold",
    margin: "8px 0",
    textAlign: "center",
    "& > span": {
      margin: "0 8px",
    },
  },
  age18: {
    background: "#6EB7DB",
    borderColor: "#6EB7DB",
  },
  age30: {
    background: "#009250",
    borderColor: "#009250",
    color: "#fff",
  },
  age40: {
    background: "#EDAD0B",
    borderColor: "#EDAD0B",
  },
  age50: {
    background: "#A52175",
    borderColor: "#A52175",
    color: "#fff",
  },
  age60: {
    background: "#333",
    borderColor: "#333",
    color: "#fff",
  },
});

const VsCard = ({ resultMatch, showCreatedBy }) => {
    if (!resultMatch) return;
    const classes = useStyles();
    const defaultProps = {
        borderColor: "#C6C6C6",
        border: 1,
    };

    const battleFormat = resultMatch.RoundGame.battleFormat === "League" ? "予選" : "トーナメント"
    const firstSet = JSON.parse(resultMatch.firstSet);
    const secondSet = JSON.parse(resultMatch.secondSet);
    const thirdSet = JSON.parse(resultMatch.thirdSet);
    const summary = JSON.parse(resultMatch.summary);

    const team1WinOrLose = summary.team1 > summary.team2 ? classes.win : "";
    const team2WinOrLose = summary.team1 < summary.team2 ? classes.win : "";

    const team1WinOrLose1st = firstSet.team1 > firstSet.team2 ? classes.win : "";
    const team2WinOrLose1st = firstSet.team1 < firstSet.team2 ? classes.win : "";

    const team1WinOrLose2nd = secondSet.team1 > secondSet.team2 ? classes.win : "";
    const team2WinOrLose2nd = secondSet.team1 < secondSet.team2 ? classes.win : "";

    const team1WinOrLose3rd = thirdSet.team1 > thirdSet.team2 ? classes.win : "";
    const team2WinOrLose3rd = thirdSet.team1 < thirdSet.team2 ? classes.win : "";

    let sealColor;
    switch (resultMatch.Department.age) {
        case 18:
            sealColor = classes.age18;
            break;
        case 30:
            sealColor = classes.age30;
            break;
        case 40:
            sealColor = classes.age40;
            break;
        case 50:
            sealColor = classes.age50;
            break;
        case 60:
            sealColor = classes.age60;
            break;
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.cardHeader}>
                    <span className={classes.seal + " " + sealColor}>{resultMatch.Department.age}歳以上</span>
                    <span className={classes.seal}>{battleFormat}</span>
                </div>
                <div className={classes.vsTitle}>
                    <span className={team1WinOrLose}>{resultMatch.Team.name}</span>
                    vs
                    <span className={team2WinOrLose}>{resultMatch.teamByTeam2id.name}</span>
                </div>
                <Box borderRadius={6} {...defaultProps}>
                    <div className={classes.vsRow}>
                        <span className={team1WinOrLose1st}>{firstSet.team1}</span>
                        −
                        <span className={team2WinOrLose1st}>{firstSet.team2}</span>
                    </div>
                    <div className={classes.vsRow}>
                        <span className={team1WinOrLose2nd}>{secondSet.team1}</span>
                        −
                        <span className={team2WinOrLose2nd}>{secondSet.team2}</span>
                    </div>
                    {thirdSet.team1 ?
                    <div className={classes.vsRow}>
                        <span className={team1WinOrLose3rd}>{thirdSet.team1}</span>
                        −
                        <span className={team2WinOrLose3rd}>{thirdSet.team2}</span>
                    </div> : ""}
                    <div className={classes.vsResult}>
                        <span className={team1WinOrLose}>{summary.team1}</span>
                        −
                        <span className={team2WinOrLose}>{summary.team2}</span>
                    </div>
                </Box>
                <div className={classes.cardFooter}>
                    {DateTime.fromISO(resultMatch.createdAt).toFormat('yyyy/MM/dd HH:mm:ss')}
                    {(showCreatedBy === true) ? <p>by {resultMatch.createdBy}</p> : ""}
                </div>
            </CardContent>
        </Card>
    );
};

export default VsCard;
