import React from 'react'

const ItemListContainer = () => {

    const greeting = "Hola, yo soy ItemListContainer"

    // **********************************************
    // Se va a usar para levantar los cursos a vender
    // const { listaDeCursos, setListaDeCursos } = useState();

    // // renderizarProductos();
    // getJSON();


    // //Get JSON de cursos.json
    // async function getJSON() {
    //     //Definimos la URL
    //     const URLJSON = "../json/cursos.json"
    //     //Hacemos un Fetch a la URL
    //     const resp = await fetch(URLJSON)
    //     //Pasamos el JSON a array de objetos
    //     const data = await resp.json()
    //     //Lo copiamos a nuestra variable
    //     setListaDeCursos(data);
    //     //Renderizamos nuestros productos, en este caso, cursos
    //     // renderizarProductos();
    // }
    // **********************************************

    return (
        <>
            <p>Mi propiedad greeting contiene el mensaje:</p>
            <p>{greeting}</p>
        </>
    )
}

export default ItemListContainer