import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: "40%!important",
    },
}));

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
    const classes = useStyles();
    label = label ?? "点数";
    required = required ?? true;
    return (
        <TextField
            className={classes.formControl}
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