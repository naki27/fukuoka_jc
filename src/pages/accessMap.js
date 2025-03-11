import React from 'react';
import { Container, Breadcrumbs, Typography, Button } from "@mui/material";
import styles from "./styles/accessMap.module.scss";
import LinkIcon from '@mui/icons-material/Link';
import H1 from '~/components/H1';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import Image from 'next/image';
import kasugaSportCenter from '../../public/maps/kasugaSportCenter.jpg';
import parkingMap from '../../public/maps/map_fk.jpg';


const accessMap = () => {
    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">アクセスマップ</Typography>
                </Breadcrumbs>
                <H1 title="アクセスマップ" />

                <div className="fixed2column">
                    <Image src={kasugaSportCenter} width="384" height="256"/>
                    <table className={styles.institution}>
                        <tbody>
                            <tr>
                                <th>施設名称</th>
                                <td>
                                    春日市総合スポーツセンター
                                    <div style={{verticalAlign: "middle", display: "inline"}}>
                                        <Link href="https://information.konamisportsclub.jp/trust/kasuga/" target="_blank" className={styles.link}>
                                            <LinkIcon />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>住所</th>
                                <td>
                                    <p>〒816-0831</p>
                                    <p>福岡県春日市大谷6-28</p>
                                </td>
                            </tr>
                            <tr>
                                <th>TEL</th>
                                <td>092-571-3234</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.googleMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.029864665791!2d130.45322791526152!3d33.526609152693226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354190b716f33819%3A0x84cee7fe7581dfd7!2z5pil5pel5biC57eP5ZCI44K544Od44O844OE44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1626922065727!5m2!1sja!2sjp"
                    style={{border:0}} loading="lazy"></iframe>
                </div>

                <H1 title="駐車場周辺" />
                <Image src={parkingMap} className={styles.parkingMap}/>
            </Container>
            <Footer />
        </>
    );
};

export default accessMap;