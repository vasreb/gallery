import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <ul className="header">
            <li className="header__link"><Link to="/gallery" >Gallery</Link></li>
            <li className="header__link"><Link to="/users" >Users</Link></li>
            <li className="header__link"><Link to=""></Link></li>
            <li className="header__link"><Link to=""></Link></li>
        </ul>
    )
}