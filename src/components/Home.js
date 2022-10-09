import React from 'react'
import { NavLink } from "react-router-dom"


function Home() {

    return (
        <>
            <div>Home</div>
            <p>Soy el home :) </p>
            <button><NavLink className="nav-link" to={`/catalogo`}>Ver Productos</NavLink></button>

        </>
    )
}

export default Home
