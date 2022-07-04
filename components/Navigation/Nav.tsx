import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import { useRouter } from 'next/router';
import { useMediaQuery, Icon, DrawerOverlay, Drawer, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, Flex } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi'

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
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [isLessThan896] = useMediaQuery('(max-width: 896px)');

  return (
    <nav className={styles.nav}>
      <div>
        <Image
          src={require('../../assets/HeaderLogo.png')}
          alt="Header Logo"
          width={140}
          height={40}
        />
      </div>
      {isLessThan896 ? <Icon as={FiMenu} color="#fff" fontSize={32} onClick={() => setDrawerIsOpen(true)} /> : <ul className={styles.nav__linkContainer}>
        {
          navLinks.map((link) => (
            <Link key={link.link} href={link.to} >
              <a className={`${styles.nav__link} ${router.pathname === link.to && styles.active}`}>{link.link}</a>
            </Link>
          )
          )
        }
      </ul>}
      <Drawer
        isOpen={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
        placement='left'
        onOverlayClick={() => setDrawerIsOpen(false)}
        className={'chakra-clide'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <div>
              <Image
                src={require('../../assets/HeaderLogo.png')}
                alt="Header Logo"
                width={140}
                height={40}
              />
            </div>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection={"column"} color={"#162F26"}>
              {
                navLinks.map((link) => (
                  <Link key={link.link} href={link.to} >
                    <a className={`${styles.nav__link} ${router.pathname === link.to && styles.active}`}>{link.link}</a>
                  </Link>
                )
                )
              }
            </Flex>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </nav>
  )
}
