import React, { useState, useEffect } from 'react';

import { FormControl, Select, FormHelperText, InputLabel, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
}));

const DepartmentSelect = ({name, onChange, register, errors}) => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("api/departmentApi")
                                    .then(res => res.json())
                                    .catch((e) => console.log(e));
            setData(response.data.fukuokajc2022_Department);
        };
        fetchData();
    }, []);

    const menuItems = data.map((department) => {
        const key = `department${department.id}`;
        return (
            <MenuItem key={key} value={department.id}>
                {department.name}
            </MenuItem>
        );
    });

    return (
        <FormControl className={classes.formControl} error={errors[name] !== undefined}>
            <InputLabel htmlFor="department">部門</InputLabel>
            <Select
                defaultValue=""
                {...register(
                    name,
                    { required: true }
                )}
                onChange={onChange}
                >
                {menuItems}
            </Select>
            { errors[name]?.type === "required" ? <FormHelperText>部門を選択してください</FormHelperText> : ""}
        </FormControl>
    );
};

export default DepartmentSelect;