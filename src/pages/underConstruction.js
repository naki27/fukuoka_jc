// import React, { useContext } from "react";
// import { GetServerSideProps } from 'next';
// import Head from 'next/head';
// import styles from "./styles/underConstruction.module.scss";
// import { Container, Breadcrumbs, Typography, Button } from "@mui/material";

// import H1 from '~/components/H1';
// import SnsBox from "~/components/SnsBox";
// import Header from "~/components/Header";
// import Gutter from "~/components/Gutter";
// import Footer from "~/components/Footer";
// import Link from "~/components/Link";
// import { MobileContext } from '~/contexts/MobileContext';

// import Image from 'next/image';
// import keyVisual from '../../public/underConstruction.jpeg';


export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: true, // true = 301, false = 302
    },
  };
};


const underConstruction = () => null; //{
    // const isMobile = useContext(MobileContext);
    // return (
    //     <>
    //         <Head>
    //             <meta name="robots" content="noindex" />
    //         </Head>
    //         <Header />
    //         <Gutter />
    //         <Container maxWidth={false}>
    //             <Breadcrumbs aria-label="breadcrumb">
    //                 <Link underline="hover" color="inherit" href="/">
    //                     トップ
    //                 </Link>
    //                 <Typography color="textPrimary">制作中</Typography>
    //             </Breadcrumbs>
    //             <H1 title="こちらは未公開ページです！！" />

    //             <div className={styles.root}>
    //                 <p>ただいま鋭意制作中です。</p>
    //                 <p>公開まで、今しばらくお待ちください。</p>
    //                 {isMobile ? "" :
    //                   <Image src={keyVisual} width="800" height="511"/>
    //                 }
    //                 <p>公開すると Twitter や Instagram、Facebook でお知らせするので、</p>
    //                 <p>フォローしておくといいですよ！</p>
    //                 <SnsBox />
    //             </div>
    //         </Container>
    //         <Footer isMobile={isMobile}/>
    //     </>
    // );
// };

export default underConstruction;