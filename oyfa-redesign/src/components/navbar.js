import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
    render() {

    // const { user } = this.props;

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src="logo.jpeg" width="25%" alt="Oyfa Logo"/>
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/">
                    Home
                </Link>
                </li>
            </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/events">
                    Events
                </Link>
                </li>
            </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/boardAndCouncil">
                    BnC
                </Link>
                </li>
            </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/archives">
                    Archives
                </Link>
                </li>
            </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/donate">
                    Donate
                </Link>
                </li>
            </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/studentResources">
                    Student Resources
                </Link>
                </li>
            </ul>
            </div>

        </div>
        </nav>
    );
    }
}