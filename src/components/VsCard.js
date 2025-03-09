import React from "react";
import styles from "./styles/VsCard.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { DateTime } from 'luxon';
import ConfirmDialog from './ConfirmDialog';
import { inValidMatchResult } from '~/pages/api/resultMatchApi';

const VsCard = ({ resultMatch, showFooter }) => {
    if (!resultMatch) return;
    const defaultProps = {
        borderColor: "#C6C6C6",
        border: 1,
    };

    const battleFormat = resultMatch.RoundGame.battleFormat === "League" ? "予選" : "トーナメント"
    const firstSet = JSON.parse(resultMatch.firstSet);
    const secondSet = JSON.parse(resultMatch.secondSet);
    const thirdSet = JSON.parse(resultMatch.thirdSet);
    const summary = JSON.parse(resultMatch.summary);

    const team1WinOrLose = parseInt(summary.team1) > parseInt(summary.team2) ? styles.win : "";
    const team2WinOrLose = parseInt(summary.team1) < parseInt(summary.team2) ? styles.win : "";

    const team1WinOrLose1st = parseInt(firstSet.team1) > parseInt(firstSet.team2) ? styles.win : "";
    const team2WinOrLose1st = parseInt(firstSet.team1) < parseInt(firstSet.team2) ? styles.win : "";

    const team1WinOrLose2nd = parseInt(secondSet.team1) > parseInt(secondSet.team2) ? styles.win : "";
    const team2WinOrLose2nd = parseInt(secondSet.team1) < parseInt(secondSet.team2) ? styles.win : "";

    const team1WinOrLose3rd = parseInt(thirdSet.team1) > parseInt(thirdSet.team2) ? styles.win : "";
    const team2WinOrLose3rd = parseInt(thirdSet.team1) < parseInt(thirdSet.team2) ? styles.win : "";

    let sealColor;
    switch (resultMatch.Department.age) {
        case 18:
            sealColor = styles.age18;
            break;
        case 30:
            sealColor = styles.age30;
            break;
        case 40:
            sealColor = styles.age40;
            break;
        case 50:
            sealColor = styles.age50;
            break;
        case 60:
            sealColor = styles.age60;
            break;
    }

    const [invalid] = useMutation(inValidMatchResult, {
      onCompleted: () => console.log("invalid match result completed.")
    })

    const [dialog, setDialog] = React.useState(false);
    const deleteCard = (id) => {
      if (!confirm(`${id} 番の対戦を削除します。よろしいですか？`)) {
        return;
      }
      invalid({
        variables: {
            id: id
        }
      }).then(_ => {
        const card = document.getElementById(`card-${resultMatch.id}`);
        card.style.display = "none";
      });
    }

    return (
        <Card id={`card-${resultMatch.id}`} className={styles.root}>
            <CardContent>
                <div className={styles.cardHeader}>
                    <span className={styles.seal + " " + sealColor}>{resultMatch.Department.age}歳以上</span>
                    <span className={`${styles.seal} ${resultMatch.RoundGame.battleFormat}`}>{battleFormat}</span>
                </div>
                <div className={styles.vsTitle}>
                    <div className={styles.teamName}>
                      <span className={team1WinOrLose}>{resultMatch.Team.name}</span>
                      <span className={styles.prefName}>({resultMatch.Team.prefectures})</span>
                    </div>
                    vs
                    <div className={styles.teamName}>
                      <span className={team2WinOrLose}>{resultMatch.teamByTeam2id.name}</span>
                      <span className={styles.prefName}>({resultMatch.teamByTeam2id.prefectures})</span>
                    </div>
                </div>
                <Box borderRadius={6} {...defaultProps}>
                    <div className={styles.vsRow}>
                        <span className={team1WinOrLose1st}>{firstSet.team1}</span>
                        −
                        <span className={team2WinOrLose1st}>{firstSet.team2}</span>
                    </div>
                    <div className={styles.vsRow}>
                        <span className={team1WinOrLose2nd}>{secondSet.team1}</span>
                        −
                        <span className={team2WinOrLose2nd}>{secondSet.team2}</span>
                    </div>
                    {thirdSet.team1 ?
                    <div className={styles.vsRow}>
                        <span className={team1WinOrLose3rd}>{thirdSet.team1}</span>
                        −
                        <span className={team2WinOrLose3rd}>{thirdSet.team2}</span>
                    </div> : ""}
                    <div className={styles.vsResult}>
                        <span className={team1WinOrLose}>{summary.team1}</span>
                        −
                        <span className={team2WinOrLose}>{summary.team2}</span>
                    </div>
                </Box>
                <div className={styles.cardFooter}>
                    {DateTime.fromISO(resultMatch.createdAt).toFormat('yyyy/MM/dd HH:mm:ss')}
                    <div className={styles.managementFooter}>
                      {(showFooter) ? <p>{resultMatch.RoundGame.name}</p> : ""}
                      {(showFooter) ? <p>id : {resultMatch.id}</p> : ""}
                      {(showFooter) ?
                        <button className={styles.deleteButton} onClick={_ => deleteCard(resultMatch.id)}>
                          <DeleteIcon />
                        </button>
                      : ""}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default VsCard;
