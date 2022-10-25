
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";


function App() {

  let hello = "Hello CoderGuy, yo soy el ListContainer";
  const [state, setState] = useState([]);
  let id;
  let title;
  // const [productos, setProductos] = useState();

  useEffect(() => {

    // const res = fetch("https://dummyjson.com/products")
    // res.then((res) => {
    //   return res.json()
    // }).then((value) => {
    //   setState(value.products);
    //   console.log(value.products)

    // })

    const db = getFirestore();
    const items = collection(db, "items");
    getDocs(items)
      .then((value) => {
        setState(value.docs);

        // console.log(value.docs[0].data().categoryid)
        // console.log(value.docs.map((value)=>{
        // return value;
        // }));
      })
  }, [])


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer products={state} greeting={hello} />} />
          <Route exact path="/catalogo/:categoria" element={<ItemListContainer products={state} />} />
          <Route exact path="/producto/:title" element={<ItemDetailContainer productos={state} title={title} />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
