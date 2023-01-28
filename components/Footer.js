import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMediaContainer}>
        <Link href="https://www.linkedin.com/in/kareem-abbas-715868210/" target="_blank">Linkedin</Link>
        <Link href="https://github.com/KareemAbbas1" target="_blank">Github</Link>
        <Link href="https://www.behance.net/kareemabbas5-UX-UI" target="_blank">Behance</Link>
        <Link href="https://www.instagram.com/kareem_abbas1/" target="_blank">Instagram</Link>
      </div>

      <p>&#169; 2021 All rights reserved</p>
    </footer>
  )
}

export default Footer