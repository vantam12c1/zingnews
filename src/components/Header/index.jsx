import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import './style.scss';

function Header() {
    return (
        <header className="header">
            <div className="container">
               <div className="topbar">
                    <div className="nav">
                        <div className="nav__brand">
                            <Link to="/">
                                <img src={logo} />
                            </Link>
                        </div>
                        <ol>
                            <li>
                            <NavLink to="/" exact="true">Tin tức</NavLink>
                            </li>  
                            <li>
                                <NavLink to="/book">Sách</NavLink>
                            </li>                            
                            <li>
                                <a href="javascript:void(0)">Xã hội</a>
                            </li>  
                            <li>
                                <a href="javascript:void(0)">Thế giới</a>
                            </li>  
                            <li>
                                <a href="javascript:void(0)">Kinh doanh</a>
                            </li>  
                            <li>
                                <a href="javascript:void(0)">Công nghệ</a>
                            </li>  
                            <li>
                            <NavLink to="/sport">Thế thao</NavLink>
                            </li>  
                            <li>
                                <a href="javascript:void(0)">Giải trí</a>
                            </li>  
                            <li>
                                <a href="javascript:void(0)">Đời sống</a>
                            </li>  
                        </ol>
                    </div>
               </div>
            </div>
        </header>
    );
};

Header.propTypes = {

};

export default Header;
