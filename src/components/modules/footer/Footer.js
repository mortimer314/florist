import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <footer className={`container ${styles.footer}`}>
            <div className={styles.footer_description}>
                <Link href="/" className='title'>
                    گیاه لند
                </Link>
                <p>
                    گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان باعث راحتی
                    شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند میباشد.
                </p>
                <div className="">
                    <div className="contact_us">
                        <span>
                            تلفن پشتیبانی:  02100000000
                        </span>
                        <div className="">
                            <FaLinkedin />
                            <LiaTelegramPlane />
                            <FaInstagram />

                        </div>
                    </div>
                    <div className="licences">
                        <Link href="#">
                            <img src='/images/licences/enemad.png' alt='' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer_items">
                <div className="">
                    <link href=''></link>
                    <link href=''></link>
                    <link href=''></link>
                </div>

            </div>
        </footer>
    )
}

export default Footer
