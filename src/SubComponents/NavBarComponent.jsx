import React from 'react';
import img from '../assets/animations/logo.gif';
import LanguageToggle from './LanguageToggle';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function NavBarComponent(props) {
    const favedMovies = useSelector((state) => state.fav.favedMovies);
    const favCount = favedMovies.length;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-secondary py-0 fixed-top">
            <div className="container-fluid bg-dark">
                <Link className="navbar-brand fw-bold" to="/">
                    <img src={img} alt="logo" />
                    {props.siteName}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-end" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item position-relative">
                            <Link className="nav-link" to={props.navLinkPath1}>
                                <i className="bi bi-heart-fill fs-5"></i>
                                {favCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {favCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <LanguageToggle />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={props.navLinkPath2}>{props.navLink2}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={props.navLinkPath3}>{props.navLink3}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;