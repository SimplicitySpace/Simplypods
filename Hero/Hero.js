import React, { useEffect } from 'react'
import classes from './Hero.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <main>
      <div className={classes.hero}>
        <div className={classes.tunein}>
          <h1 data-aos="fade-right" data-aos-delay="500" >Tune In</h1>
          <img data-aos-delay="50" className={classes.heroimg1} src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674398715/SimplyBlogs/My_project_13_eerww3.png' />
          <h1 data-aos="fade-left" data-aos-delay="500">Turn On</h1>
        </div>

      </div>
      <div className={classes['available-podcast']}>
        <div>
          <p className={classes.podcastL}>Podcast Available On:</p>
        </div>
        {/* <div>HJJXHCGJVHKBJLN;JOK;LKJH</div> */}



        <a className={classes['streaming-box']}>

          <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1672773337/SimplyBlogs/5ece4ff9123d6d0004ce5f89_kxnw07.png' alt='' className={classes['streaming-logo']} />
          <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1672757222/SimplyBlogs/Tidal_logo_hzkwme.png' alt='' className={classes['streaming-logo']} />
          <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674767316/SimplyBlogs/16A63A9E-F9F1-4317-AEFB-23A40C36FCD1_1_201_a-removebg-preview_v5wuen.png' alt='' className={classes['streaming-logo']} />
          <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1672931778/SimplyBlogs/My_project_9_ttdorn.png' alt='' className={classes['streaming-logo']} />


        </a>

      </div>

    </main>

  )
}

export default Hero;