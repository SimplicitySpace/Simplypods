import React from 'react'
import classes from './ByTopic.module.css'
const Bytopic = () => {
    return (
        <div className={classes.topicBlock}>
            <h3>Discover podcast episodes based on theme
            </h3>
            <p>Easily find podcast episodes that align with your interests by browsing our extensive collection of topic-based content. Whether you're interested in business, technology, health, or entertainment, you can quickly search and discover episodes that match your preferences.</p>
            <div className={classes.topicBox}>
                <div className={classes.health}>
                    <span>Health</span>
                    <a>→</a>
                </div>
                <div className={classes.marketing}>
                    <span>Marketing</span>
                    <a>→</a>
                </div>
                <div className={classes.technology}>
                    <span>Technology</span>
                    <a>→</a>
                </div>
                <div className={classes.art}>
                    <span>Art</span>
                    <a>→</a>
                </div>

            </div>
        </div>
    )
}

export default Bytopic