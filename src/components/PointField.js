import React, { useState } from 'react';

import { TextField } from '@mui/material';
import styles from "./styles/PointField.module.scss";

const errorMessage = (type, max) => {
    if (type === "required") {
        return "必ず入力してください。";
    }
    if (type === "pattern") {
        return `点数は正数で入力してください。`;
    }
    if (type === "max") {
        return `点数は 0 - ${max} の間で入力してください。`;
    }
    return "";
};

const pointField = ({name, max, label, register, errors, required }) => {
    label = label ?? "点数";
    required = required ?? true;
    return (
        <TextField
            className={styles.formControl}
            label={label}
            type="number"
            {...register(
                name,
                {
                    required: required,
                    max: max,
                    pattern: /^[0-9]+$/gi
                }
            )}
            error={errors[name] !== undefined}
            helperText={errorMessage(errors[name]?.type, max)}
        />
    );
};

export default pointField;