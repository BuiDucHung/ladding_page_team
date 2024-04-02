"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from '../sass/HeaderEcommerce.module.scss'
import { Col, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Header: React.FC = () => {

  const [ scrollHeader, setScrollHeader ] = useState<string>('');


  const listenScrollEvent = () => {
    if (window.scrollY < 200) {
      return setScrollHeader('');
    } else {
      return setScrollHeader(styles.menu_fix);
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  },[])

  return (
    <header className={`${styles.header_sticky} ${scrollHeader}`}>
      <div className={`container_ecommerce`}>
        <Row>
          <Col xl={4} lg={4}>
            <a className="navbar-brand" href="/">
              <Image property='true'
                className={styles.logo}
                src="image/logo.png"
                alt="con"
                width={180}
                height={55}
              />
            </a>
          </Col>
          <Col xl={20} lg={20}>
            <div className={`${styles.header_bottom__main_menu}`} id="navbarNav">
              <nav>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link">Home <DownOutlined /></a>
                    {/* <ul className="tf__droap_menu">
                      <li><a className="active" href="/">home 1</a></li>
                      <li><a className="" href="/home-2">home 2</a></li>
                      <li><a className="" href="/home-3">home 3</a></li>
                    </ul> */}
                  </li>
                  <li className="nav-item"><a className="nav-link " href="/about">about us</a></li>
                  <li className="nav-item"><a className="nav-link">courses <DownOutlined /></a>
                    {/* <ul className="tf__droap_menu">
                      <li><a className="" href="/courses">courses</a></li>
                      <li><a className="" href="/courses/modern-frontend-frameworks">courses details</a></li>
                    </ul> */}
                  </li>
                  <li className="nav-item"><a className="nav-link">blogs <DownOutlined /></a>
                    {/* <ul className="tf__droap_menu">
                      <li><a className="" href="/blog">blog</a></li>
                      <li><a className="" href="/blog/culinary-adventures-exploring-world-cuisines">blog details</a></li>
                    </ul> */}
                  </li>
                  <li className="nav-item"><a className="nav-link">pages <DownOutlined /></a>
                    {/* <ul className="tf__droap_menu">
                      <li><a className="" href="/events">event</a></li>
                      <li><a className="" href="/events/science-fair">event details</a></li>
                      <li><a className="" href="/team">team</a></li><li><a className="" href="/team/john-smith">team details </a></li>
                      <li><a className="" href="/faq">FAQs</a></li><li><a className="" href="/sign-in">sign in</a></li>
                      <li><a className="" href="/sign-up">sign up</a></li>
                      <li><a className="" href="/terms-condition">terms and condition</a></li>
                      <li><a className="" href="/privacy-policy">privacy policy</a></li>
                    </ul> */}
                  </li>
                  <li className="nav-item"><a className="nav-link " href="/contact">contact</a></li>
                  <li className="nav-item"><a className={`${styles.common_btn}`} href="#">LEARN MORE</a></li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header
