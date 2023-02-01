import React from 'react'
import { useParams } from 'react-router-dom';
import EpisodeList from '../Episodes/EpisodeList';
import classes from './EpisodeContent.module.css'

const EpisodeContent = () => {
    const { topic } = useParams();
    const blog = EpisodeList.find(blog => blog.topic === topic);



    return (
        <div className={classes.top}>
            <div className={classes.topblock}>
                <p>EP.{blog.ep}</p>
                <span className={classes.date}>{blog.date}</span>
                <span className={classes.author}>With {blog.author} </span>
            </div>
            <div className={classes.contentBox}>
                <h3>{blog.title}</h3>
                <p className={classes.content}>{blog.content}</p>
            </div>

        </div>
    )
}


export default EpisodeContent