import getConnection from "./../db/database.js"

/*iniciamos creando la constante*/

/*funciones asincronas van a retornar promesas*/
const getCategorias = async (req, res)=>{ /*async presende a await para promesas de funciones asincronas*/
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");

        /*hacemos un json para respuesta del servidor*/
        res.json(result);
    } catch (error) {
        console.error("ERROR EN CONTROLADOR:", error);
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
    
}

/*Exportamos un objeto y dentro del objeto cada metodo HTTP*/
export const methodHTTP = {
    getCategorias
}