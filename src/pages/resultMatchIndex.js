import React, { useEffect, useState, useContext } from "react";
import { Container, Breadcrumbs, Typography, Button, Box } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';
import styles from "./styles/matchTableIndex.module.scss";
import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import { MobileContext } from '~/contexts/MobileContext';

const resultTableIndex = () => {
    const [params, setParams] = useState({ battleFormat: "" });
    const isMobile = useContext(MobileContext);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const battleFormat = searchParams.get("bf") || "league";
        setParams({
            battleFormat: (battleFormat != "league" &&  battleFormat != "tournament") ? "league" : battleFormat
        });
    }, []);

    const battleFormatName = params.battleFormat == "league" ? "予選" : "決勝";

    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">大会結果（{battleFormatName}）</Typography>
                </Breadcrumbs>
                <H1 title={`大会結果（${battleFormatName}）`} />

                <Box paddingBottom={8}>
                    <H2 title={"女子"} />
                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=female&age=18`} className={styles.link}>
                            <p>{"⚫︎18歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=female&age=30`} className={styles.link}>
                            <p>{"⚫︎30歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=female&age=40`} className={styles.link}>
                            <p>{"⚫︎40歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=female&age=50`} className={styles.link}>
                            <p>{"⚫︎50歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=female&age=60`} className={styles.link}>
                            <p>{"⚫︎60歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=female&age=70`} className={styles.link}>
                            <p>{"⚫︎70歳以上の部"}</p>
                        </Link>
                    </div>
                </Box>

                <Box paddingBottom={8}>
                    <H2 title={"男子"} />
                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=male&age=18`} className={styles.link}>
                            <p>{"⚫︎18歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=male&age=30`} className={styles.link}>
                            <p>{"⚫︎30歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=male&age=40`} className={styles.link}>
                            <p>{"⚫︎40歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=male&age=50`} className={styles.link}>
                            <p>{"⚫︎50歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=male&age=60`} className={styles.link}>
                            <p>{"⚫︎60歳以上の部"}</p>
                        </Link>
                    </div>

                    <div className={styles.linkOutline}>
                        <Link href={`/resultMatch?bf=${params.battleFormat}&sex=male&age=70`} className={styles.link}>
                            <p>{"⚫︎70歳以上の部"}</p>
                        </Link>
                    </div>
                </Box>
            </Container>
            <Footer isMobile={isMobile}/>
        </>
    );
}

export default resultTableIndex;