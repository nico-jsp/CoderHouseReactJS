import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import CarWidget from "./CarWidget";
// import Header from ""

const NavBar = () => {
    return (
        <>

            <header className="header  bg-black" >

                <nav className="navbar navbar-expand-lg navbar-dark navbar__custom">
                    <div className="container-fluid">
                        This is the header
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " >
                            <Link className="nav-link text-light" to={`/`}>HOME</Link>
                            <NavLink className="nav-link text-light" to={`/catalogo/smartphones`}>CELULARES</NavLink>
                            <NavLink className="nav-link text-light" to={`/catalogo/laptops`}>LAPTOPS</NavLink>
                            <NavLink className="nav-link text-light" to={`/catalogo/accesories`}>ACCESORIOS</NavLink>
                            {/* <NavLink className="nav-link text-light" to={`/catalogo/skincare`}>CUIDADO DE LA PIEL</NavLink>
                            <NavLink className="nav-link text-light" to={`/catalogo/groceries`}>GROCERIES</NavLink>
                            <NavLink className="nav-link text-light" to={`/catalogo/home-decoration`}>DECORACION DEL HOGAR</NavLink> */}
                        </ul>
                    </div>
                    <CarWidget />
                </nav>

            </header >

        </>
    );
};

export default NavBar;