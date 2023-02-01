import React from 'react'
import classes from './Join.module.css'

const Join = () => {
    return (
        <div className={classes.joinBlock}>
            <img className={classes.leftImg} alt='' src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674232986/SimplyBlogs/podcasthost_dqb2md.jpg'></img>
            <div className={classes.secondBlock}>
                <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674710229/SimplyBlogs/simplypods-removebg-preview_gc7ehg.png' alt='' />
                <h2>Join Us</h2>
                <p>Receive the latest episodes and blog posts directly in your inbox. Only high-quality content, no unwanted messages.</p>
                <form className={classes.formBlock}>
                    <div className={classes.formSection}>
                        <h3>Name</h3>
                        <input />
                    </div>
                    <div className={classes.formSection}>
                        <h3>Email</h3>
                        <input />
                    </div>
                    <button className={classes.submitBtn}>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Join