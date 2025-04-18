import React from 'react';
import { useQuery } from '@apollo/client';
import { CircularProgress } from '@mui/material';
import styles from "./styles/ResultMatchCards.module.scss";
import { getLast5 } from '~/pages/api/resultMatchApi';
import VsCard from './VsCard';

const ResultMatchCards = ({sex}) => {
    const { loading, error, data } = useQuery(getLast5, {
        variables: {
            sex: { _eq: sex }
        }
    });
    if (error) return `Error! ${error}`

    let vsCards = data && data.fukuokajc_MatchResult && data.fukuokajc_MatchResult.map((d, i) => {
        const key = `resultMatch${i}`;
        return (
            <VsCard key={key} resultMatch={d} />
        );
    });

    return (
        <>
            {loading && <CircularProgress size={32} className={styles.buttonProgress} />}
            {(!loading && (!vsCards || vsCards.length === 0)) && <p className="no_match_description">本日の対戦はまだありません</p>}
            {vsCards &&
                <div style={{display: "flex"}}>
                    {vsCards}
                </div>
            }
        </>
    );
};

export default ResultMatchCards;