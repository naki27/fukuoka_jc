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
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    buttonProgress: {
        color: '#009250',
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    h3style: {
        marginTop: "26px",
        padding: "8px",
        background: "#009250",
        color: "#fff",
    },
    buttonContainer: {
        textAlign: "right",
        margin: "30px 51px"
    }
}));


const resultMatchForm = ({battleFormat}) => {
    const classes = useStyles();
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const [departmentId, setDepartmentId] = useState();
    const handleChangeDepartment = (event) => {
        const value = event.target.value;
        console.log("change department!!" + departmentId + " => " + value);
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
            // <div key={key} style={historyCard}>
            //     <div>{DateTime.fromISO(h.createdAt).toFormat('yyyy/MM/dd HH:mm:ss')} by {h.createdBy}</div>
            //     <div>{h.Department.name} - {h.RoundGame.battleFormat === "League" ? "予選" : "トーナメント"} - {h.RoundGame.name}</div>
            //     <div>{h.Team.name} vs {h.teamByTeam2id.name} - {summary.team1} : {summary.team2}</div>
            // </div>
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

console.log(`submit => ${JSON.stringify(values)}`);

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
            createdBy: "kyo",
            updatedAt: DateTime.local(),
            updatedBy: "kyo"
        }).then(() => {
            reset();
            setSuccess(true);
            setPageLoading(false);
        });
    }

console.log("displayed now");
    return (
        <form className={classes.root} onSubmit={handleSubmit(submit)}>
            <div>
                <h3 className={classes.h3style}>対戦内容</h3>
                <DepartmentSelect name="department" onChange={handleChangeDepartment} register={register} errors={errors}/>
                <RoundGameSelect name="roundGame" battleFormat={battleFormat} register={register} errors={errors}/>
            </div>

            <div>
                <TeamSelect name="team1" departmentId={departmentId} register={register} errors={errors}/>
                <TeamSelect name="team2" departmentId={departmentId} register={register} errors={errors}/>
            </div>

            <div>
                <h3 className={classes.h3style}>1set</h3>
                <PointField name="leftPoint1" max="9" register={register} errors={errors} />
                <PointField name="rightPoint1" max="9" register={register} errors={errors} />
            </div>

            <div>
                <h3 className={classes.h3style}>2set</h3>
                <PointField name="leftPoint2" max="9" register={register} errors={errors} />
                <PointField name="rightPoint2" max="9" register={register} errors={errors} />
            </div>

            <div>
                <h3 className={classes.h3style}>3set</h3>
                <PointField name="leftPoint3" max="15" required={false} register={register} errors={errors} />
                <PointField name="rightPoint3" max="15" required={false} register={register} errors={errors} />
            </div>

            <div>
                <h3 className={classes.h3style}>結果</h3>
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
            </div>

            {pageLoading && <CircularProgress size={128} className={classes.buttonProgress} />}
            {success && <SnackBar isOpen={true} message="登録が完了しました。"/>}

            <h3 className={classes.h3style}>登録の履歴（最新を10件ほど表示しています。）</h3>
            <div>
                {histories}
            </div>
        </form>
    );
};

export default resultMatchForm;