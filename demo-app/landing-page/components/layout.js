import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Bread from '../components/bread';

export default function Layout({ children, home }) {
  const router = useRouter();
    const { pathname } = router;
    const [clickedLink, setClickedLink] = useState('category');
    const [linkName, setLinkName] = useState('home');
    const handleClick = (link) => {
      setClickedLink(link);
  };
  const handleClickedName = (name) => {
    setLinkName(name);
};
  return (
    <div className={styles.container}>
      {pathname === '/' && <div className={styles.logo}>
      <Image
                priority
                src="/images/chimpanzee2.jpeg"
                height={110}
                width={120}
                alt=""
              />
      </div>}
      
      <div className={styles.topnav}>
      <a href="/" className={pathname === '/' ? styles.active : styles.link1} onClick={() => handleClickedName('home')}>Home</a>
        <a href="new" className={pathname === '/new' ? styles.active : styles.link1} onClick={() => handleClickedName('new')}>News</a>
        <a href="contact" className={pathname === '/contact' ? styles.active : styles.link1} onClick={() => handleClickedName('contact')}>Contact</a>
        <a href="about" className={pathname === '/about' ? styles.active : styles.link1} onClick={() => handleClickedName('about')}>About</a>
      </div>
      {pathname === '/' &&
        <div className={styles.topSecondNav}>
        <a className={clickedLink === 'category' ? styles.active : styles.link2} onClick={() => handleClick('category')}>CATEGORIES</a>
          <a className={clickedLink === 'collection' ? styles.active : styles.link2} onClick={() => handleClick('collection')}>COLLECTIONS</a>
          <a className={clickedLink === 'resource' ? styles.active : styles.link2} onClick={() => handleClick('resource')}>RESOURCES</a>
        </div>
      }
      <div className={styles.bread}>
        <Bread linkName={pathname} clickedLink={clickedLink} />
        </div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
