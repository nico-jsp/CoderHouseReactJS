import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import style from '../components/css/style.css'


const ItemDetailContainer = ({ productos }) => {

    const { id } = useParams();

    return (
        <div>
            {/* <p>Soy el detalle del item </p> */}
            <div className='producto'>
                <h2 className='producto__titulo'>{productos[(id - 1)].title}</h2>
                <div className='producto__cat_brand'>
                    <NavLink className="nav-link" to={`/catalogo/${productos[(id - 1)].category}`}>{(productos[(id - 1)].category)} </NavLink><p>|{productos[(id - 1)].brand}</p>
                </div>
                <div className='producto__imagenes'>
                    {productos[(id - 1)].images.map((image) => {
                        return (
                            <>
                                <img className='producto__imagenes__imagen' src={image}></img>

                            </>
                        )
                    })}
                </div>
                <div className='producto__precio'>
                    U$D {productos[(id - 1)].price}
                </div>
                <div className='producto__rating'>
                    Rating: {productos[(id - 1)].rating}
                </div>
                <div className='producto__stock'>
                    Stock: {productos[(id - 1)].stock}
                </div>
                <button>
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default ItemDetailContainer