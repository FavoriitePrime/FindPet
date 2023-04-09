import React from 'react'
import { useState } from 'react';
import CatIcon from "./Images/CatIcon.png"
import DogIcon from "./Images/DogIcon.png"
import './Menu.css'
import LinkComponent from './Link/LinkComponent';

export default function Menu() {
    const [menuState, SetMenuState] = useState(false);
    const menu = () => {
        SetMenuState(!menuState);
    }
    return (
        <>
            <div className={menuState ? 'menu-background-active' : 'menu-background'}>
                <div onClick={menu} className='burger-button' />
                <div className={menuState ? 'menu-links-container-active' : 'menu-links-container'}>
                    <LinkComponent linkTo="/" menuState={menuState} title="Кошка" image={CatIcon} />
                    <LinkComponent linkTo="/Dog" menuState={menuState} title="Собака" image={DogIcon} />
                    <LinkComponent linkTo="/" menuState={menuState} title="Нечто" image="" />
                </div>
            </div >
            <div className={menuState ? 'menu-backgroundfilter-active' : 'menu-backgroundfilter'}>
            </div>
        </>
    )
}