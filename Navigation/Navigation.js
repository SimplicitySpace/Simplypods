import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'


const NavigationBar = () => {
    const [navToggle, setnavToggle] = useState(false)


    const navChange = () => {
        setnavToggle(!navToggle)
    }
    return (
        <nav>
            <Link className={classes.linkImg} to='/' >
                <img className={classes.navimg} alt='' src='https://res.cloudinary.com/dt9f36crx/image/upload/v1674710229/SimplyBlogs/simplypods-removebg-preview_gc7ehg.png' />
            </Link>


            <div className={classes.navDrop} onClick={navChange}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                {navToggle && <div className={classes.navdropDown}>
                    <Link className={classes.link} to='/blog'>
                        <button>Podcast</button></Link>
                    <Link className={classes.link} to='/merch'>
                        <button>Merch</button></Link>
                    <Link className={classes.link} to='/people'>
                        <button>People</button></Link>
                </div>}
            </div>

            <div className={classes.navitems}>
                <Link className={classes.link} to='/blog'>
                    <span>
                        Podcast
                    </span>
                </Link>


                <Link className={classes.link} to='/merch'>
                    <span>
                        Merch
                    </span>
                </Link>

                <Link className={classes.link} to='/people'>
                    <span>
                        People
                    </span>
                </Link>



            </div>
            <div className={classes.rightNav}>
                {/* <span className={classes.search}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>Search</span> */}
                <span className={classes.cart}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </span>
                <Link className={classes.join} to='/joinus' >
                    <button>Join</button>
                </Link>

            </div>
        </nav>
    )
}

export default NavigationBar