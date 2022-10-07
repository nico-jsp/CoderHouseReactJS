
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'


function App() {

  let hello = "Hello CoderGuy";
  const [productos, setProductos] = useState();

  // //Get JSON de cursos.json
  async function getJSON() {
    //Definimos la URL 
    const URLJSON = "../json/cursos.json"
    //Hacemos un Fetch a la URL
    const resp = await fetch(URLJSON)
    //Pasamos el JSON a array de objetos
    const data = await resp.json()
    //Lo copiamos a nuestra variable
    // listaDeCursos = data;
    console.log("here is the data " + data);

    setProductos(data);
    //Renderizamos nuestros productos, en este caso, cursos
    // renderizarProductos();
  }


  // useEffect(() => {
  //   console.log("aca llega")

  //   getJSON();
  //   // console.log(productos);
  // }, [])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer message={hello} />} />
          <Route exact path="/catalogo/:categoria" element={<ItemListContainer message={hello} />} />
          <Route exact path="/catalogo/:id" element={<ItemListContainer message={hello} />} />
          {/* <Route exact path="/catalogo/:id" element={<ItemDetailContainer />} /> */}
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
