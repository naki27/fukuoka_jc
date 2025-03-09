import React, { useState, useEffect } from 'react';
import { FormControl, Select, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import styles from "./styles/DepartmentSelect.module.scss";

const DepartmentSelect = ({name, onChange, register, errors}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("api/departmentApi")
                                    .then(res => res.json())
                                    .catch((e) => console.log(e));
            setData(response.data.fukuokajc_Department);
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
        <FormControl className={styles.formControl} error={errors[name] !== undefined}>
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