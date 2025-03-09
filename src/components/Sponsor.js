import React from 'react';
import styles from "./styles/Sponsor.module.scss";
import Link from "~/components/Link";
import H2 from '~/components/H2';
import Image from 'next/image';

const Sponsor = ({name, logo, url, description, height }) => {
    return (
        <div className={styles.sponsorContainer}>
            <div className={styles.sponsorLogo}>
                <Link href={url} target="_blank">
                    <Image src={logo} objectFit="contain" height={height}/>
                </Link>
            </div>
            <div className={styles.sponsorDetail}>
                <H2 title={name} />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Sponsor;