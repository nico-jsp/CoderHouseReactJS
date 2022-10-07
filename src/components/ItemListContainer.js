import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'


const ItemListContainer = ({ products }) => {

    // const greeting = "Hola, yo soy ItemListContainer"
    const { id } = useParams();
    const { categoria } = useParams();
    const [state, setState] = useState([]);


    useEffect(() => {
        // const res = fetch("../../json/cursos.json");
        const res = fetch("https://dummyjson.com/products")
        res.then((res) => {
            return res.json()
        }).then((value) => {
            setState(value.products);
            console.log(value.products)
        })
    }, [])


    return (
        <>
            <h2>Soy la lista de productos</h2>
            <div>
                {state.map((product) => {
                    return (
                        <>
                            <img src={product.thumbnail} key={product.id}></img>
                            <p><NavLink to={`/catalogo/${product.id}`}>{product.title}</NavLink></p>
                        </>
                    )
                })}
            </div>
            {/* <p>{greeting}</p>
            <h3>Mi parametro recibido contiene el mensaje:</h3>
            <p>{message}</p>
            console.log({state}) */}
        </>
    )
}

export default ItemListContainer