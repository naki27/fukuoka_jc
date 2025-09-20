import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '~/components/theme';
import "~/../public/theme.css";
import * as gtag from '~/libs/gtag'
import useIsMobile from '~/hooks/useIsMobile';
import { MobileContext } from '~/contexts/MobileContext';

// for apollo client
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (!gtag.existsGaId) {
      return
    }

    if (isMobile === null) {
      // サーバーとクライアントで値が一致するまで何も表示しない
      return null;
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  // for apollo client
  const httpLink = new HttpLink({
    uri: "https://fukuokajc.hasura.app/v1/graphql",
    headers: {
      'x-hasura-admin-secret': "EHtoYLe5QfSaoPd51YAcONiWwXagS3KVC9Iti2opsFR6YEbclLWEaCdkgm5u5uWp"
    }
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <MobileContext.Provider value={isMobile}>
      <ApolloProvider client={client}>
        <Head>
          <title>第32回ジャパンカップビーチボール選手権福岡大会 公式サイト</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </MobileContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
