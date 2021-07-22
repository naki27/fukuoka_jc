import React from 'react';

import { Container, Breadcrumbs, Typography, Button } from "@material-ui/core";

import H1 from '~/components/H1';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

import Image from 'next/image';
// import kasugaSportCenter from '../../public/favicon.ico';

const accessMap = () => {
    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">アクセスマップ</Typography>
                </Breadcrumbs>
                <H1 title="アクセスマップ" />

                <Image src={"/vercel.svg"} width="100" height="100"/>
            </Container>
            <Footer />
        </>
    );
};

export default accessMap;