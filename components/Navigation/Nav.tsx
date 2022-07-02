import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.scss';
import { useRouter } from 'next/router';

const navLinks = [
  {
    link: "Home",
    to: "/"
  },
  {
    link: "Features",
    to: "#Fea                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 nbvcxztures"
  },
  {
    link: "Book a Trip",
    to: "/Book"
  },
  {
    link: "Blog",
    to: "/Blog"
  },
]


export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Image
        src={require('../../assets/HeaderLogo.png')}
        alt="Header Logo"
        width={140}
      />

      <ul className={styles.nav__linkContainer}>
        {
          navLinks.map((link) => (
            <Link key={link.link} href={link.to} >
              <a className={`${styles.nav__link} ${router.pathname === link.to && styles.active}`}>{link.link}</a>
            </Link>
          )
          )
        }
      </ul>
    </nav>
  )
}
