import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, TextField } from "@material-ui/core";
import LoginIcon from '@material-ui/icons/Save';

import H1 from '~/components/H1';
import H2 from '~/components/H2';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    width: "100vw",
    maxWidth: "1280px",
    margin: "0 auto",
    textAlign: "center"
  },
  init: {
      display: "none",
      width: "50vw",
      margin: "0 auto",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "40%!important",
  },
  photoLink: {
    fontSize: "2rem",
    textDecoration: "none"
  },
}));

const kasugaMemory = () => {
    const classes = useStyles();
    const PASSWORD = "r7K6z/gd";

    useEffect(_ => {
      const password = document.getElementById('password');
      const autoButton = document.getElementById('auth_button');
      const authContainer = document.getElementById('auth_container');
      const body = document.getElementById('body');
      autoButton.addEventListener('click', e => {
        if (password.value === PASSWORD) {
          body.style.display = "block";
          authContainer.style.display = "none";
        } else {
          alert("パスワードが間違っています");
        }
      });
    }, []);

    return (
        <>
            <H1 title="春日親善大会の思い出" />

            <Container className={classes.root} maxWidth={false}>
              <div id="auth_container">
                <TextField
                    id="password"
                    className={classes.formControl}
                    label="パスワードを入力してください。"
                    type="text"
                />
                <Button
                    id="auth_button"
                    type="button"
                    variant="contained"
                    color="primary"
                    startIcon={<LoginIcon />}>
                        認証する
                </Button>
              </div>

              <div id="body" className={classes.init}>
                <H2 title="男子" className={classes.photoLink}/>
                <a href="https://photos.app.goo.gl/st3j8SQLDvfP1Anz8" className={classes.photoLink}>
                  男子はこちら
                </a>

                <H2 title="女子" />
                <a href="https://photos.app.goo.gl/M9rJDKDxNpxL4frZA" className={classes.photoLink}>
                  女子はこちら
                </a>
              </div>
            </Container>
        </>
      );
}

export default kasugaMemory;