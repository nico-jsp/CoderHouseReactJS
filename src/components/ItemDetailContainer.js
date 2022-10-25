import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import style from '../components/css/style.css'
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";


const ItemDetailContainer = () => {

    const { title } = useParams();
    const [item, setItem] = useState();

    // console.log(title)
    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, "items");
        const q = query(items, where("title", "==", title));

        getDocs(q)
            .then((value) => {
                // const q = query(value, where("title", "==", title));
                // const q = value.docs.where("title", "==", title);
                // console.log(value.docs)
                // setItem(value.docs[0].data())
                console.log(value.docs[0].data())

            })
    }, [])

    return (
        <div>
            {/* <p>Soy el detalle del item </p> */}
            <div className='producto'>
                {/* <h2 className='producto__titulo'>{productos[(id - 1)].data().title}</h2> */}
                <h2 className='producto__titulo'>{item.title}</h2>
                <div className='producto__cat_brand'>
                    {/* <NavLink className="nav-link" to={`/catalogo/${productos[(id - 1)].data().categoryId}`}>{(productos[(id - 1)].data().categoryId)} </NavLink><p></p> */}
                    <NavLink className="nav-link" to={`/catalogo/${item.categoryId}`}>{(item.categoryId)} </NavLink><p></p>
                </div>
                <div className='producto__imagenes'>
                    {/* <img className='producto__imagenes__imagen' src={productos[(id - 1)].data().image}></img> */}
                    <img className='producto__imagenes__imagen' src={item.image}></img>
                </div>
                <div className='producto__description'>
                    {/* Descripcion: {productos[(id - 1)].data().description} */}
                    Descripcion: {item.description}
                </div>
                <div className='producto__precio'>
                    {/* U$D {productos[(id - 1)].data().price} */}
                    U$D {item.price}
                </div>
                <div className='producto__stock'>
                    {/* Stock: {productos[(id - 1)].data().stock} */}
                    Stock: {item.stock}
                </div>
                <button>
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default ItemDetailContainer