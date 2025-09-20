import React, {useEffect, useState, useRef, useContext} from 'react';
import styles from "./styles/resultMatchList.module.scss";
import { Container } from "@mui/material";
import { useQuery } from '@apollo/client';
import { getAll } from '~/pages/api/resultMatchApi';

import H1 from '~/components/H1';
import VsCard from '~/components/VsCard';
import { MobileContext } from '~/contexts/MobileContext';

const registMatchList = () => {
    const [history, setHistory] = useState([]);
    const isMobile = useContext(MobileContext);

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
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.histories}>
              {generateVsCard(histories)}
          </div>
        </>
      );
    }

    const male18Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 18;
    });
    const male30Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 30;
    });
    const male40Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 40;
    });
    const male50Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 50;
    });
    const male60Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 60;
    });
    const male99Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Male" && h.Department.age === 99;
    });

    const feMale18Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 18;
    });
    const feMale30Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 30;
    });
    const feMale40Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 40;
    });
    const feMale50Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 50;
    });
    const feMale60Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 60;
    });
    const feMale99Results = history.fukuokajc_MatchResult && history.fukuokajc_MatchResult.filter((h, i) => {
      return h.Department.sex === "Female" && h.Department.age === 99;
    });

    return (
        <>
            <H1 title="対戦結果一覧をズラーっと" />

            <Container className={styles.root} maxWidth={false}>
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