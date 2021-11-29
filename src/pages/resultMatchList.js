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
  title: {
    margin: "50px 0",
    fontSize: "2rem"
  }
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

    let counter = 0;
    const generateVsCard = (histories) => {
      return histories && histories.map((h) => {
        counter++;
        const key = "historyCard" + counter;
        return (
          <VsCard key={key} resultMatch={h} showFooter={true}/>
        );
      });
    }
    const generateHistories = (histories, title) => {
      if (histories && histories.length === 0) return(<></>);
      return (
        <>
          <h3 className={classes.title}>{title}</h3>
          <div className={classes.histories}>
              {generateVsCard(histories)}
          </div>
        </>
      );
    }

    const male18Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 18;
    });
    const male30Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 30;
    });
    const male40Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 40;
    });
    const male50Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 50;
    });
    const male60Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 60;
    });
    const male99Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 99;
    });

    const feMale18Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 18;
    });
    const feMale30Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 30;
    });
    const feMale40Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 40;
    });
    const feMale50Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 50;
    });
    const feMale60Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 60;
    });
    const feMale99Results = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 99;
    });

    return (
        <>
            <H1 title="対戦結果一覧をズラーっと" />

            <Container className={classes.root} maxWidth={false}>
              {generateHistories(feMale18Results, "女子 １８歳以上")}
              {generateHistories(feMale30Results, "女子 ３０歳以上")}
              {generateHistories(feMale40Results, "女子 ４０歳以上")}
              {generateHistories(feMale50Results, "女子 ５０歳以上")}
              {generateHistories(feMale60Results, "女子 ６０歳以上")}
              {generateHistories(feMale99Results, "女子ALL")}
              {generateHistories(male18Results, "男子 １８歳以上")}
              {generateHistories(male30Results, "男子 ３０歳以上")}
              {generateHistories(male40Results, "男子 ４０歳以上")}
              {generateHistories(male50Results, "男子 ５０歳以上")}
              {generateHistories(male60Results, "男子 ６０歳以上")}
              {generateHistories(male99Results, "男子ALL")}
            </Container>
        </>
      );
}

export default registMatchList;