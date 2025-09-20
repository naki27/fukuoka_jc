import React, {useEffect, useState, useContext} from "react";
import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';
import styles from "./styles/matchTable.module.scss";
import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import Image from 'next/image';
import { MobileContext } from '~/contexts/MobileContext';

const matchTable = () => {
    const [params, setParams] = useState({ sex: "", age: "" });
    const isMobile = useContext(MobileContext);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const sex = searchParams.get("sex") || "female";
        const age = searchParams.get("age") || "18";
        setParams({
            sex: (sex != "male" &&  sex != "female") ? "female" : sex,
            age: (age != "18" &&  age != "30" &&  age != "40" &&  age != "50" &&  age != "60" &&  age != "70") ? "18" : age
        });
    }, []);

    const sexName = params.sex == "female" ? "女子" : "男子";

    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Link underline="hover" color="inherit" href={`/matchTableIndex?sex=${params.sex}`}>
                        {`組み合わせ・進行表（${sexName}）`}
                    </Link>
                    <Typography color="textPrimary">{`組み合わせ（${sexName}）`}</Typography>
                </Breadcrumbs>
                <H1 title={`組み合わせ（${sexName}）`} />

                <Box paddingBottom={3}>
                    <H2 title={`${params.age}歳以上の部`} />

                    <Image src={`/matchTableImages/matchTable-${params.sex}-${params.age}.jpg`}
                        className={styles.matchTableImage}
                        width={1240} height={1754} alt="組み合わせ"/>
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default matchTable;