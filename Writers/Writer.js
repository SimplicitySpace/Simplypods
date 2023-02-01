import React from 'react'
import classes from './Writer.module.css'

const Writer = ({ list }) => {
    return (
        <div className={classes.grid}>
            {list.map(item => {
                const { name, penGame, img } = item;
                return (
                    <div className={classes.writerBlock}>
                        <img className={classes.img} src={img} />
                        <h5> {name}</h5>
                        <figcaption> {penGame}</figcaption>

                    </div>
                )
            })}
        </div>
    )
}

export default Writer