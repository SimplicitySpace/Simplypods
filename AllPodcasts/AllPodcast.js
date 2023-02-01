import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from '../Navigation/Navigation'
import './AllPodcast.css'
import classes from './Allpodcast.module.css'


const AllPodcast = ({ bloglist }) => {

    const [selectedId, setSelectedId] = useState({ bloglist });
    const idColors = {
        Health: '#68C021',
        Marketing: '#E17A94',
        Art: '#3F612D',
        Environmental: '#ff0009',
        Technology: '#283845',
    };





    return (

        <div>
            <NavigationBar />

            <div>
                <div className='delve'>
                    <h2>Delve Into Podcasts</h2>
                    <p>Specifically read your choice</p>
                </div>
                <div className={classes.btns}>
                    {[...new Set(bloglist.map(item => item.topic))].map(id => (
                        <button className={classes.btn}
                            key={id}
                            onClick={() => setSelectedId(id)}
                            style={{ border: ` 2px solid ${idColors[id]}`, backgroundColor: '#f4f4f4' }}
                        >
                            <span>{id}</span>
                        </button>
                    ))}
                </div>

                {selectedId && (
                    <div>
                        {bloglist.filter(item => item.topic === selectedId).map(item => (
                            <Link className={classes.link} to={`/blog/${item.topic}`}>
                                <div key={item.title}>
                                    <div className={classes.episodeBlock}>
                                        <div className={classes.episodesFlex}>
                                            {/* <div className={classes.epsiodeWidth}> */}
                                            <div className={classes.spanDate}>
                                                <span className={classes.episodeNum}> EP.{item.ep}</span>
                                                <span className={classes.episodeDate} >{item.date}</span>
                                            </div>

                                            <div>.</div>

                                            <img className={classes.mappedimgs} src={item.img} />



                                            <div className={classes.lastBlock}>
                                                <span className={classes.episodeTopic} >
                                                    {item.topic}
                                                </span>
                                                <p className={classes.episodeTitle}>{item.title}</p>
                                                <span className={classes.episodeAuthor}
                                                >{item.author}</span>
                                            </div>
                                            {/* </div> */}


                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

        </div>

    )
}

export default AllPodcast