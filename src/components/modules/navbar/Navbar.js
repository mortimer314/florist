import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { MdOutlineShoppingCart, MdLogin } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Container from '../container/Container';



function Navbar() {
    return (
        <nav >
            <main className={`container ${styles.navbar}`}>

                <div className={styles.navbar_menu}>
                    <div className={styles.navbar_logo}>
                        <Link href="/">
                            گیاه لند
                        </Link>
                    </div>

                    <ul className={styles.navbar_links}>
                        <li>
                            <Link href="/">
                                صفحه اصلی
                            </Link>
                        </li>
                        <li>
                            <Link href="/herbalist">
                                گیاه پزشک
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                وبلاگ
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us">
                                تماس با ما
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us">
                                درباره ما
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className={styles.navbar_icons}>
                    <div className={styles.navbar_icon}>
                        <IoMdSearch />
                    </div>
                    <div className={styles.navbar_icon}>
                        <Link href="/shopping-card">
                            <MdOutlineShoppingCart />
                        </Link>
                        {/* <span>2</span> */}
                    </div>
                    <div className={styles.navbar_icon}>
                        <Link href="/logein-register">
                            <MdLogin />
                            ورود/ثبت نام
                        </Link>
                    </div>
                </div>

            </main>

        </nav>
    )
}

export default Navbar
