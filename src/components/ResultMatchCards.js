import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getLast5 } from '~/pages/api/resultMatchApi';
import VsCard from './VsCard';

const useStyles = makeStyles((theme) => ({
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: "9999",
    },
}));

const ResultMatchCards = ({sex}) => {
    const classes = useStyles();

    const { loading, error, data } = useQuery(getLast5, {
        variables: {
            sex: { _eq: sex }
        }
    });
    if (error) return `Error! ${error}`

    let vsCards = data && data.fukuokajc2022_MatchResult && data.fukuokajc2022_MatchResult.map((d, i) => {
        const key = `resultMatch${i}`;
        return (
            <VsCard key={key} resultMatch={d} />
        );
    });
    if (!vsCards || vsCards.length === 0) {
        return (
            <p className="no_match_description">本日の対戦はまだありません</p>
        );
    }

    return (
        <>
            {loading && <CircularProgress size={32} className={classes.buttonProgress} />}
            {vsCards}
        </>
    );
};

export default ResultMatchCards;