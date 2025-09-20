import React, {useEffect, useState} from "react";
import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';
import styles from "./styles/matchTableIndex.module.scss";
import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

const matchTableIndex = () => {
    const [params, setParams] = useState({ sex: "" });

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const sex = searchParams.get("sex") || "female";
        setParams({
            sex: (sex != "male" &&  sex != "female") ? "female" : sex
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
                    <Typography color="textPrimary">組み合わせ（{sexName}）</Typography>
                </Breadcrumbs>
                <H1 title={`組み合わせ（${sexName}）`} />

                <Box paddingBottom={8}>
                    <div className={styles.linkOutline}>
                        <Link href={`/matchTable?sex=${params.sex}&age=18`} className={styles.link}>
                            <p>{"⚫︎18歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/matchTable?sex=${params.sex}&age=30`} className={styles.link}>
                            <p>{"⚫︎30歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/matchTable?sex=${params.sex}&age=40`} className={styles.link}>
                            <p>{"⚫︎40歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/matchTable?sex=${params.sex}&age=50`} className={styles.link}>
                            <p>{"⚫︎50歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/matchTable?sex=${params.sex}&age=60`} className={styles.link}>
                            <p>{"⚫︎60歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/matchTable?sex=${params.sex}&age=70`} className={styles.link}>
                            <p>{"⚫︎70歳以上の部"}</p>
                        </Link>
                    </div>
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default matchTableIndex;