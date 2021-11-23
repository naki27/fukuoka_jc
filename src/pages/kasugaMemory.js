import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, TextField } from "@material-ui/core";
import LoginIcon from '@material-ui/icons/Save';

import H1 from '~/components/H1';
import H2 from '~/components/H2';

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0",
    width: "100vw",
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center"
  },
  init: {
      display: "none",
      margin: "0 auto",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "30vh"
  },
  formControl: {
    width: "90vw"
  },
  photoLink: {
    fontSize: "2rem",
    textDecoration: "none"
  },
  authContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  authButton: {
    marginTop: "20px",
    background: "#23AC0E",
  },
  inputColor:{
    color:'#333!important'
  },
  subTitle:{
    fontSize: "1.5rem",
    marginBottom: "32px",
    color: "#B61972",
    display: "flex",
    justifyContent: "center",
  }
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
            <span className={classes.subTitle}>
              春日親善大会2021
            </span>

            <Container className={classes.root} maxWidth={false}>
              <div id="auth_container" className={classes.authContainer}>
                <TextField
                    id="password"
                    className={classes.formControl}
                    InputLabelProps={{
                      className: classes.inputColor
                    }}
                    label="パスワードを入力してください。"
                    type="text"
                />
                <Button
                    id="auth_button"
                    type="button"
                    variant="contained"
                    className={classes.authButton}
                    startIcon={<LoginIcon />}>
                        認証する
                </Button>
              </div>

              <div id="body" className={classes.init}>
                <a href="https://photos.app.goo.gl/st3j8SQLDvfP1Anz8" className={classes.photoLink}>
                  男子はこちら
                </a>

                <a href="https://photos.app.goo.gl/M9rJDKDxNpxL4frZA" className={classes.photoLink}>
                  女子はこちら
                </a>
              </div>
            </Container>
        </>
      );
}

export default kasugaMemory;