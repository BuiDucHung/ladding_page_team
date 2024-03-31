import React from 'react';
import styles from './Banner.module.scss';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="container">
      <div className={`${styles.tp_banner__bg}`}>
        <Image src={'/image/banner-bg.jpg'} 
          width={100} height={733} alt='banner'
          style={{width: '100%', height: 733, borderRadius: 30}}
        />
      <div className={styles.container_image}>
        <Image src={'/svg/envato.svg'} 
            width={120} height={24} alt='banner'
            className={styles.envato}
          />
          <div className={styles.next_ge}>
            <span>Next-Generation</span> 
          </div>
          <div className={styles.next_ge}>
            <span>Software & Technology</span> 
          </div>
          <div className={styles.next_ge}>
            <span>React Next js Template</span> 
          </div>
          <div className={styles.tp_banner__btn} data-wow-duration=".9s" data-wow-delay=".5s" >
            <a className={styles.tp_btn__white} href="#homeDemo">Check Demos</a>
            <a className={styles.tp_btn__border} href="#homeFeature">Explore Features</a>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Banner