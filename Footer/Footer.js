import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerLeft}>
                <figure>
                    <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674922029/SimplyBlogs/simplypodswhite-removebg-preview_xfkbnw.png' alt='' />

                </figure>
                <figcaption>
                    <h4>Built With React</h4></figcaption>
            </div>
            <div className={classes.footerRight}>
                <div >
                    <h6>
                        Socials
                    </h6>
                    <span>Youtube</span>
                    <span>Twitter</span>
                    <span>GitHub</span>
                    <span>Twitch</span>
                    <span>Facebook</span>


                </div>
                <div >
                    <h6>
                        Socials
                    </h6>
                    <span>Youtube</span>
                    <span>Twitter</span>
                    <span>GitHub</span>
                    <span>Twitch</span>
                    <span>Facebook</span>


                </div>
                <div >
                    <h6>
                        Socials
                    </h6>
                    <span>Youtube</span>
                    <span>Twitter</span>
                    <span>GitHub</span>
                    <span>Twitch</span>
                    <span>Facebook</span>


                </div>


            </div>
        </div>
    )
}

export default Footer