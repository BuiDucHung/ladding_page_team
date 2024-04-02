import React from 'react';
import styles from '../sass/Banner.module.scss'

const Banner: React.FC = () => {

    return (
        <section className={styles.tf__banner}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8">
                        <div className="tf__banner_text wow fadeInUp">
                            {/* <h5>Welcome to Eduor!</h5>
                            <h1>Where Learning <span>Becomes</span> Adventure!</h1>
                            <p>Eduor is more than just a platform; it's a nurturing space where education transforms into an exciting adventure. With a passion for igniting curiosity and inspiring young minds.</p> */}
                            {/* <ul className="d-flex flex-wrap align-items-center">
                                <li><a className="common_btn" href="/about">Read More</a></li>
                                <li><a className="venobox play_btn" role="button"><i className="fas fa-play"></i></a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
