import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

class Header extends Component {
  render() {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact={true} activeClassName='is-active' to='/' className="nav-link">الرئيسية<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='is-active' to='/services' className="nav-link">الخدمات الطبية</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='is-active' to='/about' className="nav-link">نبذه عننا</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='is-active' to='/gallery' className="nav-link">معرض الصور</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='is-active' to='/video' className="nav-link">الفيديوهات</NavLink>
                    </li>
                    <li className="left-side mobile">
                        <a className="top" href="www.bshairsindi.com" target="_blank">www.bshairsindi.com</a>
                        <a className="down" href="tel:+966">050-123-123-123</a>
                    </li>
                </ul>
            </div>
            <div className="left-side">
                <a className="top" href="www.bshairsindi.com" target="_blank">www.bshairsindi.com</a>
                <a className="down" href="tel:+966">050-123-123-123</a>
            </div>
        </nav>
    );
  }
}

export default Header;
