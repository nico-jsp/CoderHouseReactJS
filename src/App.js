
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'


function App() {

  let hello = "Hello CoderGuy, yo soy el ListContainer";
  const [state, setState] = useState([]);
  let id;
  // const [productos, setProductos] = useState();

  useEffect(() => {

    const res = fetch("https://dummyjson.com/products")
    res.then((res) => {
      return res.json()
    }).then((value) => {
      setState(value.products);

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
          <Route exact path="/producto/:id" element={<ItemDetailContainer productos={state} id={id} />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
