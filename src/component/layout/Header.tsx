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
          <Col xl={4}>
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
          <Col xl={15}>
            <div className={`${styles.header_bottom__main_menu} ${styles.text_center}`}>
              <nav id='mobile_menu'>
                <ul>
                  <li><a href="/">Home</a>
                    {/* <ul className={styles.submenu}>
                      <li><a href="/">Data analytics</a></li>
                      <li><a href="/home-2">Payment Gateway</a></li>
                      <li><a href="/home-3">CRM Software</a></li>
                      <li><a href="/home-4">Security Software</a></li>
                      <li><a href="/home-5">Saas</a></li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/about">Pages</a>
                    {/* <ul className={styles.submenu}>
                      <li><a href="/about">About</a></li>
                      <li><a href="/service">Service</a></li>
                      <li><a href="/service-details">Service Details</a></li>
                      <li><a href="/team">Team</a></li>
                      <li><a href="/team-details">Team Details</a></li>
                      <li><a href="/career">Career</a></li>
                      <li><a href="/career-details">Career Details</a></li>
                      <li><a href="/integrations">Integrations</a></li>
                      <li><a href="/price">Price</a></li>
                      <li><a href="/register">Register</a></li>
                      <li><a href="/sign-in">Signin</a></li>
                      <li><a href="/404">404</a></li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/project">Projects</a>
                    {/* <ul className={styles.submenu}>
                      <li><a href="/project">Project</a></li>
                      <li><a href="/project-details">Project Details</a></li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                    {/* <ul className={styles.submenu}>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/blog-list">Blog List</a></li>
                      <li><a href="/blog-details">Blog Details</a></li>
                      <li><a href="/blog-details-2">Blog Details 02</a></li>
                    </ul> */}
                  </li>
                  <li><a href="/contact">Contact</a></li></ul>
              </nav>
            </div>
          </Col>
          <Col xl={5}>
            {/* <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
              <div className="header-bottom__btn d-flex align-items-center">
                <a className="tp-btn-yellow inner-color tp-btn-hover alt-color-black d-none d-md-inline-block" href="/register">
                  <span className="white-text">Sign up Now</span><b></b></a>
                <a className="header-bottom__bar tp-menu-bar d-lg-none">
                  <i className="fal fa-bars"></i>
                </a>
              </div>
            </div> */}
                <div>
          <button className={`${styles.buttonfx} ${styles.slidebottomleft}`}>Sign up Now</button>
        </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
