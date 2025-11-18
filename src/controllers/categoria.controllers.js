/*iniciamos creando la constante*/
const getCategorias = (req, res)=>{
    res.json({"Categoria":"Electrodomesticos"}) /*hacemos un json para respuesta del servidor*/
}

/*Exportamos un objeto y dentro del objeto cada metodo HTTP*/
export const methodHTTP = {
    getCategorias
}