import React from "react";
import Photo from "../img/logo (1).png"


import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <div className="container Header__container">
                <Link to="/">
                <img className="Header__img" src={Photo} alt="logo" />
                </Link>
               
                <nav className="Header__nav">
                    <ul className="Header__ul" >
                        <li className="Header_nav_ul-li"> <a className='Header_nav_ul-link' href="#">Наши Курсы</a> </li>
                        <li className="Header_nav_ul-li"> <a className='Header_nav_ul-link' href="#">+ 996 771 830 438</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

