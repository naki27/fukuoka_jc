import React from 'react';

import { Container, Breadcrumbs, Typography, Button } from "@material-ui/core";

import H1 from '~/components/H1';
import SnsBox from "~/components/SnsBox";
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

import Image from 'next/image';
import keyVisual from '../../public/underConstruction.jpeg';

const underConstruction = () => {
    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">制作中</Typography>
                </Breadcrumbs>
                <H1 title="こちらは、まだ未公開ページです！！" />

                <div>
                    <p>ただいま鋭意制作中です。</p>
                    <p>公開まで、今しばらくお待ちください。</p>
                    <Image src={keyVisual} width="800" height="511"/>
                    <p>公開すると Twitter や Instagram、Facebook でお知らせするので、</p>
                    <p>フォローしておくといいですよ！</p>
                    <SnsBox />
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default underConstruction;