import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useMutation, useQuery } from '@apollo/client';
import { DateTime } from 'luxon';

import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

import { getLast5, addMatchResult } from '~/pages/api/resultMatchApi';
import DepartmentSelect from './DepartmentSelect';
import RoundGameSelect from './RoundGameSelect';
import TeamSelect from './TeamSelect';
import PointField from './PointField';
import SnackBar from './SnackBar';
import VsCard from './VsCard';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: '0 8px',
          width: '25ch',
        },
        '&.Tournament': {
            '& .h3': {
                background: "linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)"
            }
        },
    },
    buttonProgress: {
        position: 'absolute',
        top: '-200px',
        left: '50%',
    },
    h3style: {
        marginTop: "26px",
        padding: "8px",
        background: "#3261AB",
        color: "#fff",
    },
    buttonContainer: {
        textAlign: "right",
        margin: "30px 8%"
    },
    centering: {
        textAlign: "center",
    },
    histories: {
        'display': 'flex',
        'width': '133ch',
        'flexWrap': 'wrap',
        'margin': '0 auto',

        '& .MuiCard-root': {
            margin: '0 auto',
            marginBottom: '10px',
        },
    },
}));


const resultMatchForm = ({battleFormat}) => {
    const classes = useStyles();
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
    const histories = history.fukuokajc2022_MatchResult && history.fukuokajc2022_MatchResult.map((h, i) => {
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
        <form className={`${classes.root} ${battleFormat}`} onSubmit={handleSubmit(submit)}>
            <h3 className={classes.h3style + " h3"}>対戦内容</h3>
            <div className={classes.centering}>
                <DepartmentSelect name="department" onChange={handleChangeDepartment} register={register} errors={errors}/>
                <RoundGameSelect name="roundGame" battleFormat={battleFormat} register={register} errors={errors}/>
            </div>

            <div className={classes.centering}>
                <TeamSelect name="team1" departmentId={departmentId} register={register} errors={errors}/>
                <TeamSelect name="team2" departmentId={departmentId} register={register} errors={errors}/>
            </div>

            <h3 className={classes.h3style + " h3"}>1set</h3>
            <div className={classes.centering}>
                <PointField name="leftPoint1" max="20" register={register} errors={errors} />
                <PointField name="rightPoint1" max="20" register={register} errors={errors} />
            </div>

            <h3 className={classes.h3style + " h3"}>2set</h3>
            <div className={classes.centering}>
                <PointField name="leftPoint2" max="20" register={register} errors={errors} />
                <PointField name="rightPoint2" max="20" register={register} errors={errors} />
            </div>

            <h3 className={classes.h3style + " h3"}>3set</h3>
            <div className={classes.centering}>
                <PointField name="leftPoint3" max="20" required={false} register={register} errors={errors} />
                <PointField name="rightPoint3" max="20" required={false} register={register} errors={errors} />
            </div>

            <h3 className={classes.h3style + " h3"}>結果</h3>
            <div className={classes.centering}>
                <PointField name="leftSetCount" max="2" label="セット数" register={register} errors={errors} />
                <PointField name="rightSetCount" max="2" label="セット数" register={register} errors={errors} />
            </div>

            <div className={classes.buttonContainer}>
                <Button
                    type="submit"
                    disabled={pageLoading}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}>
                        登録する
                </Button>
                {pageLoading && <CircularProgress size={128} className={classes.buttonProgress} />}
            </div>

            {success && <SnackBar isOpen={true} message="登録が完了しました。"/>}

            <h3 className={classes.h3style}>登録の履歴（最新を6件ほど表示しています。）</h3>
            <div className={classes.histories}>
                {histories}
            </div>
        </form>
    );
};

export default resultMatchForm;