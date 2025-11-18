/* vamos a usar el router que nuestro framework express tiene incluido */
import {Router} from "express"; /*se importa asi ya que no es un default, de manera individual*/
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router(); /* creamos y asignamos funcionalidad al enrutador */

/*config respuesta desde server metodo http get */
/* primer argumento ENDPOINT, segundo ARROW FUCTION*/ /*res = respuest, req = request*/
router.get("/", categoriaController.getCategorias); 

/*Exportamos router para hacerlo disponible en toda la APP*/
export default router;