import React, {useEffect} from 'react';
import { Button, Container, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Save';
import styles from "./styles/MemoriesPhotoGallery.module.scss";

import H1 from '~/components/H1';
import H2 from '~/components/H2';

const MemoriesPhotoGallery = () => {
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
            <H1 title="大会写真館" />
            <span className={styles.subTitle}>
              春日親善大会2021
            </span>

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
                    startIcon={<LoginIcon />}>
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
        </>
      );
}

export default MemoriesPhotoGallery;