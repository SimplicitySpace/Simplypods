import React, { useState, useEffect } from 'react'
import classes from './Episode.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
const Episode = ({ bloglist }) => {
    // const [selectedId, setselectedId] = useState(null)

    // const handleClick = (id) => { }

    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <div>
            <h3 className={classes.episodehead}>Check Out Our Recent Episodes</h3>
            <div className={classes.episodeBlock}>
                {bloglist.map((items) =>

                    <Link className={classes.link} to={`/blog/${items.topic}`}>

                        <div data-aos="fade-up" data-aos-delay="100" className={classes.episodesFlex}>
                            {/* <div className={classes.epsiodeWidth}> */}
                            <div className={classes.spanDate}>
                                <span className={classes.episodeNum}> EP.{items.ep}</span>
                                <span className={classes.episodeDate} >{items.date}</span>
                            </div>


                            <div></div>

                            <img className={classes.mappedimgs} src={items.img} />





                            <div className={classes.lastBlock}>
                                <span className={classes.episodeTopic} >
                                    {items.topic}
                                </span>
                                <p className={classes.episodeTitle}>{items.title}</p>
                                <span className={classes.episodeAuthor}
                                >{items.author}</span>
                            </div>
                            {/* </div> */}



                        </div>


                    </Link>

                )}
            </div>
        </div>
    )
}

export default Episode