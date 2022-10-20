import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'


import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";


const ItemListContainer = ({ products, greeting }) => {

    // const greeting = "Hola, yo soy ItemListContainer"
    const { id } = useParams();
    const { categoria } = useParams();
    const [state, setState] = useState([]);
    const [title, setTitle] = useState();

    // useEffect(() => {
    //     const db = getFirestore();

    //     const items = collection(db, "items");
    //     // console.log(items)

    //     getDocs(items)
    //         .then((value) => {
    //             console.log(value.docs[0].data().categoryid)
    //             // console.log(value.docs.map((value)=>{
    //             return value;
    //             // }));
    //         })

    // }, []);

    // useEffect(() => {

    //     const res = fetch("https://dummyjson.com/products")
    //     res.then((res) => {
    //         return res.json()
    //     }).then((value) => {
    //         setState(value.products);

    //     })
    // }, [])

    // useEffect(() => {
    //     console.log("aca se imprime el" + categoria)
    //     const res = fetch("https://dummyjson.com/products")
    //     res.then((res) => {
    //         return res.json()
    //     }).then((value) => {
    //         if (categoria === undefined) {
    //             setState(value.products);
    //             setTitle('productos')
    //         } else {
    //             setState((value.products).filter(product => product.category === categoria));
    //             setTitle(categoria);
    //         }// console.log(state.filter(product => product.category == categoria))
    //     })
    // }, [categoria])

    useEffect(() => {
        // const res = fetch("https://dummyjson.com/products")
        // res.then((res) => {
        // return res.json()
        // }).then((value) => {
        console.log(products[0])
        if (categoria === undefined) {
            setState(products);
            setTitle('productos')
        } else {
            setState(products.filter(product => product.categoryid === categoria));
            setTitle(categoria);
        }// console.log(state.filter(product => product.category == categoria))
        // })
    }, [categoria])



    return (
        <>
            {greeting}
            <h2 >Soy la lista de {title}</h2>
            <div className='producto__lista'>
                {state.map((product) => {
                    return (
                        <div className='producto__listado'>
                            <img src={product.image} key={product.categoryid}></img>
                            <p><NavLink to={`/producto/${product.title}`}>{product.title}</NavLink></p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ItemListContainer