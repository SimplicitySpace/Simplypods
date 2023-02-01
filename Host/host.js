import React from 'react'
import classes from './host.module.css'

const Host = () => {
    return (
        <div className={classes.host}>
            <div className={classes.header}>
                <h2>Meet the host</h2>
            </div>
            <div className={classes.hostBlock}>

                <div className={classes.firstBlock}>
                    <h4>Mary Carter</h4>
                    <span>Meet [Your Name], the host of the popular podcast [Podcast Name].
                        With a background in [relevant field or education],
                        [Your Name] brings a wealth of knowledge and expertise to the mic.
                        Each episode, [Your Name] delves into the latest trends and hot topics
                        in [Podcast's topic], engaging listeners with in-depth interviews, expert
                        insights and thought-provoking discussions. With a passion
                        for [Podcast's topic], [Your Name] is dedicated to delivering
                        high-quality content that informs and entertains. Tune in to [Podcast Name]
                        for your weekly dose of [Podcast's topic] knowledge and entertainment!</span>
                </div>
                <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674232986/SimplyBlogs/podcasthost_dqb2md.jpg' alt='' />
            </div>
        </div>
    )
}

export default Host