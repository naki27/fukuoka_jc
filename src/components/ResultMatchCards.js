import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CircularProgress } from '@mui/material';
import styles from "./styles/ResultMatchCards.module.scss";
import { getLast5 } from '~/pages/api/resultMatchApi';
import VsCard from './VsCard';
import { motion } from "framer-motion";

const ResultMatchCards = ({sex}) => {
    const [isStopped, setIsStopped] = useState(false);
    // オブジェクトがタップされたときにアニメーションを停止
    const handleTap = () => {
        setIsStopped(true);  // 停止フラグをセット
    };

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
                <motion.div
                    onTap={handleTap}
                >
                    <motion.div
                        initial={{ x: '100%' }}  // 初期位置は右側
                        animate={{ x: isStopped ? 0 : '-450%' }}  // 停止した場合は動かないように
                        transition={{
                            repeat: isStopped ? 0 : Infinity, // 停止後は繰り返しなし
                            duration: isStopped ? 0 : 30, // スライドの時間
                            ease: 'linear', // スムーズな線形の動き
                        }}
                        style={{ display: "flex" }}
                    >
                        {vsCards}
                    </motion.div>
                </motion.div>
            }
        </>
    );
};

export default ResultMatchCards;