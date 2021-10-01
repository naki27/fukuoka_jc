import React from 'react';

import { Container, Breadcrumbs, Typography, Button } from "@material-ui/core";

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

import Image from 'next/image';
import outdoorMap from '../../public/maps/outdoorMap.png';
import secondFloorMap from '../../public/maps/2ndFloorMap.png';

const venueMap = () => {
    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">会場図</Typography>
                </Breadcrumbs>
                <H1 title="会場図" />

                <H2 title="屋内２階" />
                <Image src={secondFloorMap} width="800" height="555"/>

                <H2 title="屋外" />
                <Image src={outdoorMap} width="800" height="555"/>

                <H1 title="ショップ協賛" />
                <H2 title="飲食" />
                <table className="normalTable">
                    <tbody>
                        <tr>
                            <td>アイウエオ</td>
                            <td>かきくけこ</td>
                            <td>さしすせそ</td>
                        </tr>
                        <tr>
                            <td>アイウエオ</td>
                            <td>かきくけこ</td>
                            <td>さしすせそ</td>
                        </tr>
                    </tbody>
                </table>

                <H2 title="整体" />
                <table className="normalTable">
                    <tbody>
                        <tr>
                            <td>アイウエオ</td>
                            <td>かきくけこ</td>
                            <td>さしすせそ</td>
                        </tr>
                        <tr>
                            <td>アイウエオ</td>
                            <td>かきくけこ</td>
                            <td>さしすせそ</td>
                        </tr>
                    </tbody>
                </table>

                <H2 title="売店" />
                <table className="normalTable">
                    <tbody>
                        <tr>
                            <td>アイウエオ</td>
                            <td>かきくけこ</td>
                            <td>さしすせそ</td>
                        </tr>
                        <tr>
                            <td>アイウエオ</td>
                            <td>かきくけこ</td>
                            <td>さしすせそ</td>
                        </tr>
                    </tbody>
                </table>

            </Container>
            <Footer />
        </>
    );
};

export default venueMap;