import React from 'react'
import { Link } from "react-router-dom";

function LinkComponent(props) {
    return (
        <Link to={props.linkTo}>
            <div className='menu-links-content-container'>
                <div className='menu-links-text'>
                    {props.title}
                </div>
                <div className={props.menuState ? 'menu-links-image-container-active' : 'menu-links-image-container'}>
                    <img className="menu-links-image" alt='^w^' src={props.image} />
                </div>
            </div>
        </Link>
    )
}

export default LinkComponent