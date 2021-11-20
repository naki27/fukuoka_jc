import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { useQuery } from '@apollo/client';
import { getAll } from '~/pages/api/resultMatchApi';

import H1 from '~/components/H1';
import VsCard from '~/components/VsCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    width: "100vw",
    maxWidth: "1280px",
    margin: "0 auto",
    textAlign: "center"
  },
  histories: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    '& .MuiCard-root': {
        margin: '0 auto',
        marginBottom: '10px',
    },
  },
}));

const registMatchList = () => {
    const classes = useStyles();
    const [history, setHistory] = useState([]);

    const { loading, error, data } = useQuery(getAll);
    if (error) return `Error! ${error}`
    const timer = useRef();

    useEffect(() => {
      data && setHistory(data);
      clearTimeout(timer.current);
    }, [data]);


    const histories = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.map((h, i) => {
      const summary = JSON.parse(h.summary);
      const historyCard = {
          border: "#333 1px solid",
          margin: "12px 8px",
          padding: "8px",
          borderRadius: "6px"
      };
      const key = "historyCard" + i;
      return (
          <VsCard key={key} resultMatch={h} showCreatedBy={true}/>
      );
    });

    return (
        <>
            <H1 title="対戦結果一覧をズラーっと" />

            <Container className={classes.root} maxWidth={false}>
              <div className={classes.histories}>
                  {histories}
              </div>
            </Container>
        </>
      );
}

export default registMatchList;