import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from "~/components/Link";
import H2 from '~/components/H2';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: "40%!important",
    },
    sponsorContainer: {
        display: "flex",
        minHeight: "120px",
        margin: "20px",
    },
    sponsorDetail: {
        marginLeft: "16px",
        width: "100%",
    },
    sponsorLogo: {
        flexBasis: "300px",
        minWidth: "300px",
    },
    "@media (max-width: 640px)": {
        sponsorContainer: {
            flexDirection: "column",
            marginBottom: "50px",
        },
        sponsorDetail: {
            marginLeft: "0",
            order: 1,
        },
        sponsorLogo: {
            maxHeight: "100px",
            order: 2,
        },
    },
}));

const Sponsor = ({name, logo, url, description, height }) => {
    const classes = useStyles();
    return (
        <div className={classes.sponsorContainer}>
            <div className={classes.sponsorLogo}>
                <Link href={url} target="_blank">
                    <Image src={logo} objectFit="contain" height={height}/>
                </Link>
            </div>
            <div className={classes.sponsorDetail}>
                <H2 title={name} />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Sponsor;