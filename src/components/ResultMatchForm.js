import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { DateTime } from 'luxon';
import { Button, CircularProgress } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import styles from "./styles/ResultMatchForm.module.scss";
import { getLast5, addMatchResult } from '~/pages/api/resultMatchApi';
import DepartmentSelect from './DepartmentSelect';
import RoundGameSelect from './RoundGameSelect';
import TeamSelect from './TeamSelect';
import PointField from './PointField';
import SnackBar from './SnackBar';
import VsCard from './VsCard';

const resultMatchForm = ({battleFormat}) => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const [departmentId, setDepartmentId] = useState();
    const handleChangeDepartment = (event) => {
        const value = event.target.value;
        setDepartmentId(value);
    }
    const [history, setHistory] = useState([]);
    const [pageLoading, setPageLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

    const { loading, error, data } = useQuery(getLast5);
    if (error) return `Error! ${error}`

    useEffect(() => {
        data && setHistory(data);
        clearTimeout(timer.current);
    }, [data]);

    const [add] = useMutation(addMatchResult, {
        onCompleted: () => console.log("add match result completed.")
    })

    const executeAddMatchResult = async (param) => {
        await add({
            variables: {
                object: param
            },
            refetchQueries: [{ query: getLast5}]
        })
    }
    const histories = history.fukuokajc_MatchResult && history.fukuokajcs_MatchResult.map((h, i) => {
        const key = "historyCard" + i;
        return (
            <VsCard key={key} resultMatch={h} showCreatedBy={true}/>
        );
    });

    const createSetJsonStringify = (leftValue, rightValue) => {
        let result = {};
        result["team1"] = leftValue;
        result["team2"] = rightValue;
        return JSON.stringify(result);
    };

    const submit = (values) => {
        if (pageLoading) {
            return;
        }
        setSuccess(false);
        setPageLoading(true);

        executeAddMatchResult({
            team1Id: values.team1,
            team2Id: values.team2,
            departmentId: values.department,
            roundGameId: values.roundGame,
            firstSet: createSetJsonStringify(values.leftPoint1, values.rightPoint1),
            secondSet: createSetJsonStringify(values.leftPoint2, values.rightPoint2),
            thirdSet: createSetJsonStringify(values.leftPoint3, values.rightPoint3),
            summary: createSetJsonStringify(values.leftSetCount, values.rightSetCount),
            createdAt: DateTime.local(),
            createdBy: "",
            updatedAt: DateTime.local(),
            updatedBy: ""
        }).then(() => {
            reset();
            setSuccess(true);
            setPageLoading(false);
        });
    }

    return (
        <form className={`${styles.root} ${battleFormat}`} onSubmit={handleSubmit(submit)}>
            <h3 className={styles.h3style + " h3"}>対戦内容</h3>
            <div className={styles.centering}>
                <DepartmentSelect name="department" onChange={handleChangeDepartment} register={register} errors={errors}/>
                <RoundGameSelect name="roundGame" battleFormat={battleFormat} register={register} errors={errors}/>
            </div>

            <div className={styles.centering}>
                <TeamSelect name="team1" departmentId={departmentId} register={register} errors={errors}/>
                <TeamSelect name="team2" departmentId={departmentId} register={register} errors={errors}/>
            </div>

            <h3 className={styles.h3style + " h3"}>1set</h3>
            <div className={styles.centering}>
                <PointField name="leftPoint1" max="20" register={register} errors={errors} />
                <PointField name="rightPoint1" max="20" register={register} errors={errors} />
            </div>

            <h3 className={styles.h3style + " h3"}>2set</h3>
            <div className={styles.centering}>
                <PointField name="leftPoint2" max="20" register={register} errors={errors} />
                <PointField name="rightPoint2" max="20" register={register} errors={errors} />
            </div>

            <h3 className={styles.h3style + " h3"}>3set</h3>
            <div className={styles.centering}>
                <PointField name="leftPoint3" max="20" required={false} register={register} errors={errors} />
                <PointField name="rightPoint3" max="20" required={false} register={register} errors={errors} />
            </div>

            <h3 className={styles.h3style + " h3"}>結果</h3>
            <div className={styles.centering}>
                <PointField name="leftSetCount" max="2" label="セット数" register={register} errors={errors} />
                <PointField name="rightSetCount" max="2" label="セット数" register={register} errors={errors} />
            </div>

            <div className={styles.buttonContainer}>
                <Button
                    type="submit"
                    disabled={pageLoading}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}>
                        登録する
                </Button>
                {pageLoading && <CircularProgress size={128} className={styles.buttonProgress} />}
            </div>

            {success && <SnackBar isOpen={true} message="登録が完了しました。"/>}

            <h3 className={styles.h3style}>登録の履歴（最新を6件ほど表示しています。）</h3>
            <div className={styles.histories}>
                {histories}
            </div>
        </form>
    );
};

export default resultMatchForm;