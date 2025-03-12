import React, {useEffect} from 'react';
import { Button, Breadcrumbs, Typography, Container, TextField } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import styles from "./styles/memoriesPhotoGallery.module.scss";

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

const memoriesPhotoGallery = () => {
    const PASSWORD = "r7K6z/gd";

    useEffect(_ => {
      const password = document.getElementById('password');
      const autoButton = document.getElementById('auth_button');
      const authContainer = document.getElementById('auth_container');
      const body = document.getElementById('body');
      autoButton.addEventListener('click', e => {
        if (password.value === PASSWORD) {
          body.style.display = "flex";
          authContainer.style.display = "none";
        } else {
          alert("パスワードが間違っています");
        }
      });
    }, []);

    return (
        <>
            <Header />
            <Gutter />
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">写真館</Typography>
                </Breadcrumbs>
                <H1 title="大会写真館" />
                <Container className={styles.root} maxWidth={false}>
                  <div id="auth_container" className={styles.authContainer}>
                    <TextField
                        id="password"
                        className={styles.formControl}
                        InputLabelProps={{
                          className: styles.inputColor
                        }}
                        label="パスワードを入力してください。"
                        type="text"
                    />
                    <Button
                        id="auth_button"
                        type="button"
                        variant="contained"
                        className={styles.authButton}
                        startIcon={<LockIcon />}>
                            認証する
                    </Button>
                  </div>

                  <div id="body" className={styles.init}>
                    <a href="https://photos.app.goo.gl/st3j8SQLDvfP1Anz8" className={styles.photoLink}>
                      男子はこちら
                    </a>

                    <a href="https://photos.app.goo.gl/M9rJDKDxNpxL4frZA" className={styles.photoLink}>
                      女子はこちら
                    </a>
                  </div>
                </Container>
            </Container>
        </>
      );
}

export default memoriesPhotoGallery;