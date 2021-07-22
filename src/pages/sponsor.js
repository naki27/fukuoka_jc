import React from 'react';

import { Container, Breadcrumbs, Typography, Button } from "@material-ui/core";

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

import Image from 'next/image';

const sponsor = () => {
    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">スポンサー</Typography>
                </Breadcrumbs>
                <H1 title="スポンサー" />

                <div className="fixed2column sponsor-container">
                    {/* <Image src={xxx} width="800" height="555"/> */}
                    <img src="https://dummyimage.com/300x100/000/fff" />
                    <div className="sponsor-detail">
                        <H2 title="スポンサー名" />
                        <p>企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介</p>
                    </div>
                </div>

                <div className="fixed2column sponsor-container">
                    {/* <Image src={xxx} width="800" height="555"/> */}
                    <img src="https://dummyimage.com/300x100/000/fff" />
                    <div className="sponsor-detail">
                        <H2 title="スポンサー名" />
                        <p>企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介</p>
                    </div>
                </div>

                <div className="fixed2column sponsor-container">
                    {/* <Image src={xxx} width="800" height="555"/> */}
                    <img src="https://dummyimage.com/300x100/000/fff" />
                    <div className="sponsor-detail">
                        <H2 title="スポンサー名" />
                        <p>企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介企業紹介</p>
                    </div>
                </div>

            </Container>
            <Footer />
        </>
    );
};

export default sponsor;