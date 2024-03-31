'use client';
import React from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../sass/Hearder.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header_sticky}>
      <div className={`container ${styles.mtTop}`}>
        <Row>
          <Col xl={5} lg={5}>
            <div className={styles.header_bottom__logo}>
              <Link href={'/'}>
                <Image property='true'
                  src={'/image/logo.png'}
                  width={133}
                  height={36}
                  style={{ width: 133, height: 36, objectFit: 'cover' }}
                  alt='logo'
                />
              </Link>
            </div>
          </Col>
          <Col xl={11} lg={11}>
            <div className={`${styles.header_bottom__main_menu}`}>
              <nav id='mobile_menu' className={styles.menu}>
                <ul>
                  <li className={styles.parend}><a href="/">Home</a>
                    <ul className={styles.submenu}>
                      <li><a href="/">Data analytics</a></li>
                      <li><a href="/home-2">Payment Gateway</a></li>
                      <li><a href="/home-3">CRM Software</a></li>
                      <li><a href="/home-4">Security Software</a></li>
                      <li><a href="/home-5">Saas</a></li>
                    </ul>
                  </li>
                  <li className={styles.parend}>
                    <a href="/about">Pages</a>
                    <ul className={styles.submenu}>
                      <li><a href="/">About</a></li>
                      <li><a href="/home-2">Service</a></li>
                      <li><a href="/home-3">Service Details</a></li>
                      <li><a href="/home-4">Team</a></li>
                      <li><a href="/home-5">Team Details</a></li>
                      <li><a href="/home-5">Career</a></li>
                      <li><a href="/home-5">Career Details</a></li>
                      <li><a href="/home-5">Integrations</a></li>
                      <li><a href="/home-5">Price</a></li>
                      <li><a href="/home-5">Register</a></li>
                      <li><a href="/home-5">Signin</a></li>
                      <li><a href="/home-5">404</a></li>
                    </ul>
                  </li>
                  <li className={styles.parend}>
                    <a href="/project">Blog</a>
                    <ul className={styles.submenu}>
                      <li><a href="/">Blog</a></li>
                      <li><a href="/home-2">Blog List</a></li>
                      <li><a href="/home-3">Blog Details</a></li>
                      <li><a href="/home-4">Blog Details 02</a></li>
                    </ul>
                  </li>
                  <li className={styles.parend}>
                    <a href="/blog">Pricing</a>
                  </li>
                  <li className={styles.parend}>
                    <a href="/contact">Projects</a>
                    <ul className={styles.submenu}>
                      <li><a href="/home-2">Project</a></li>
                      <li><a href="/home-3">Project Details</a></li>
                    </ul>
                  </li>
                  <li className={styles.parend}><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </Col>
          <Col xl={8} lg={8}>
            <div className={styles.flex_end}>
              <span className={styles.d_md_block}>Price: <i className={styles.number}>$29</i></span>
              <button className={`${styles.buttonfx} ${styles.slidebottomleft}`}>
                Sign up Now
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
