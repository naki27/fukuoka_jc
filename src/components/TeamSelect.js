import React, { useState, useEffect } from 'react';

import { FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: "40%",
    },
}));

const teamSelect = ({name, departmentId, register, errors}) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const query = departmentId ? `?departmentId=${departmentId}` : "";

    useEffect(() => {
        if (!departmentId) return;
        const fetchData = async () => {
            const response = await fetch("api/teamApi" + query)
                                    .then(res => res.json())
                                    .catch((e) => console.log(e));
            setData(response.data.fukuokajc2022_Team);
        };
        fetchData();
    }, [departmentId]);

    const menuItems = data.map((team) => {
        return (
            <MenuItem key={team.id} value={team.id}>
                {team.name}
            </MenuItem>
        );
    });

    return (
        <FormControl className={classes.formControl} error={errors[name] !== undefined}>
            <InputLabel htmlFor={name}>チーム</InputLabel>
            <Select
                defaultValue=""
                {...register(
                    name,
                    { required: true }
                )}
                >
                {menuItems}
            </Select>
            { errors[name]?.type === "required" ? <FormHelperText>対戦したチームを選択してください</FormHelperText> : ""}
        </FormControl>
    );
};

export default teamSelect;