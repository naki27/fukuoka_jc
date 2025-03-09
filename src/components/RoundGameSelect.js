import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@mui/material';
import styles from "./styles/RoundGameSelect.module.scss";

const RoundGameSelect = ({name, battleFormat, register, errors}) => {
    const [data, setData] = useState([]);
    const handleId = (event) => setRId(event.target.value);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("api/roundGameApi")
                                    .then(res => res.json())
                                    .catch((e) => console.log(e));
            setData(response.data.fukuokajc_RoundGame);
        };
        fetchData();
    }, []);

    const options = data.filter((r) => {
                        return r.battleFormat === battleFormat
                    })
                    .map((roundGame) => {
                        const key = `roundGame${roundGame.id}`;
                        return (
                            <MenuItem key={key} value={roundGame.id}>
                                {roundGame.name}
                            </MenuItem>
                        );
                    });

    return (
        <FormControl className={styles.formControl} error={errors[name] !== undefined}>
            <InputLabel htmlFor="roundGame">回戦</InputLabel>
            <Select
                defaultValue=""
                {...register(
                    name,
                    { required: true }
                )}
                >
                {options}
            </Select>
            { errors[name]?.type === "required" ? <FormHelperText>何回戦か選択してください</FormHelperText> : ""}
        </FormControl>
    );
};

export default RoundGameSelect;