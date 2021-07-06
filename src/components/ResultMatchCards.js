import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getLast5 } from '~/pages/api/resultMatchApi';
import VsCard from './VsCard';

const useStyles = makeStyles((theme) => ({
    buttonProgress: {
        color: '#009250',
        position: 'absolute',
        top: '50%',
        left: '50%',
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

    const vsCards = data && data.fukuokajc2022_MatchResult && data.fukuokajc2022_MatchResult.map((d, i) => {
        return (
            <VsCard resultMatch={d} />
        );
    });

    return (
        <>
            {loading && <CircularProgress size={32} className={classes.buttonProgress} />}
            {vsCards}
        </>
    );
};

export default ResultMatchCards;