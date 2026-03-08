import React, { useEffect, useContext } from 'react';
import { Button, Breadcrumbs, Typography, Container, TextField, List, ListItem, ListItemText } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styles from "./styles/memoriesPhotoGallery.module.scss";

import H1 from '~/components/H1';
import H2 from '~/components/H2';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";
import { MobileContext } from '~/contexts/MobileContext';

const memoriesPhotoGallery = () => {
    const isMobile = useContext(MobileContext);
    const PASSWORD = "u9TE6V2f";

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
                    <div className={styles.notice}>
                      <H2 title="写真利用規約" />
                      <div className={styles.noticeText} style={{ textAlign: 'left' }}>
                        <List dense component="ul" style={{ paddingLeft: 20, listStyleType: 'disc' }}>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="本写真は大会参加者および関係者による個人的利用を目的として公開しています。" />
                          </ListItem>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="写真の著作権は主催者に帰属します。無断転載、営利利用、二次配布、販売、素材サイトへの登録、AI学習への利用を禁止します。" />
                          </ListItem>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="本リンクおよびパスワードの第三者への共有は禁止します。" />
                          </ListItem>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="SNS等へ掲載する場合は、写っているすべての被写体の同意を得たうえで行ってください。未成年の場合は保護者の同意を必要とします。" />
                          </ListItem>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="写真の加工・改変は個人利用の範囲内に限ります。改変後の再配布は禁止します。" />
                          </ListItem>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="写真の削除・修正依頼は2026年3月31日までに、理由を明記のうえ大会連絡窓口（fukuoka.beachball.assoc@gmail.com）までご連絡ください。内容確認のうえ削除または非公開対応を行います。" />
                          </ListItem>
                          <ListItem component="li" style={{ display: 'list-item' }}>
                            <ListItemText primary="当リンクは2026年5月31日まで公開予定です。主催者の判断により予告なく変更または終了する場合があります。" />
                          </ListItem>
                        </List>
                      </div>
                    </div>
                    <a href="https://photos.app.goo.gl/9W7vTtYcmVD1KA6x6" className={styles.photoLink}>
                      <PlayArrowIcon className={styles.linkIcon} fontSize="small" />
                      予選(2026/02/21)はこちら
                    </a>

                    <a href="https://photos.app.goo.gl/eN6pvYNGt8NzAtJB6" className={styles.photoLink}>
                      <PlayArrowIcon className={styles.linkIcon} fontSize="small" />
                      決勝(2026/02/22)はこちら
                    </a>

                  </div>
                </Container>
            </Container>
        </>
      );
}

export default memoriesPhotoGallery;
