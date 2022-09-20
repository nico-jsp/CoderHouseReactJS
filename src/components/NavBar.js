import React, { useEffect, useState } from "react";
import CarWidget from "./CarWidget";
// import Header from ""

const NavBar = () => {
    return (
        <>

            <header className="header  bg-black" >

                <nav className="navbar navbar-expand-lg navbar-dark navbar__custom">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand">
                        index
                    </a> */}
                        This is the header
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " >
                            <li className="nav-item"><a className="nav-link text-light" href="../index.html">HOME</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="./app.html">APP</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="./workshops.html">WORKSHOPS</a>
                            </li>
                            <li className="nav-item"><a className="nav-link text-light" href="./blog.html">BLOG</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="./contact.html">CONTACT</a></li>
                        </ul>
                    </div>
                    <CarWidget />
                </nav>

            </header >

        </>
    );
};

export default NavBar;