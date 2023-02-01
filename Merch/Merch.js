import React, { useState, } from 'react'
import classes from './Merch.module.css'
import 'animate.css';


const Merch = ({ list }) => {
    const [currentImage, setCurrentImage] = useState(false);








    return (
        <>
            <div className={classes.vidBox}>
                <h3>Our Merch</h3>
                <video controls className={classes.video} >
                    <source className={classes.source} src='./Images/video.mp4' type="video/mp4" />
                </video>
            </div>

            <div className={classes.grid}>

                {list.map((image) => <div className={classes.imgBlock}>
                    {currentImage !== image.id &&
                        <div className={classes.block}>
                            <img className={classes.img}
                                key={image.id}
                                onMouseOver={() => setCurrentImage(image.id)}
                                onMouseOut={() => setCurrentImage(true)}
                                src={image.src} />
                            <h2>{image.merchName}</h2>
                            <p>${image.price}</p>
                            <span>{image.description}</span>
                        </div>
                    }
                    {currentImage === image.id &&
                        <div className={classes.block} >
                            <img
                                onMouseOver={() => setCurrentImage(image.id)}
                                onMouseOut={() => setCurrentImage(true)}
                                className={classes.imgSub}
                                key={image.id}

                                src={image.subImage} />
                            <h2>{image.merchName}</h2>
                            <p>${image.price}</p>
                            <span>{image.description}</span>
                        </div>


                    }
                </div>
                )}
                {/* {list.map((image) =>
                    <div className={classes.imgBlock}>
                        <div onMouseEnter={() => setCurrentImage(image.id)}
                            onMouseLeave={() => setCurrentImage(null)}>
                            {currentImage !== image.id && <img className={classes.img} src={image.src} alt={image.alt} />}
                            {currentImage === image.id && <img className={classes.img} src={image.subImage} alt={`sub ${image.alt}`} />}
                        </div>
                    </div>
                )} */}
            </div>
        </>
    )
}

export default Merch


