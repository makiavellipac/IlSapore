const { Router } = require("express");
const uploadCloud = require("../config/cloudinary")
const {
  crearPizza,
  borrarPizza,
  editarPizza,
  crearIngrediente,
  borrarIngrediente,
  editarIngrediente,
  getIngredientes
} = require("../controllers/pizza");
const router = Router();

router
//.post("/crear_pizza",uploadCloud.single("img_pizza"),crearPizza)
.post("/crear_pizza",crearPizza)
.delete("/borrar_pizza",borrarPizza)
.post("/editar_pizza",editarPizza)
.post("/crear_ingrediente",crearIngrediente)
.delete("/borrar_ingrediente",borrarIngrediente)
.post("/editar_ingrediente",editarIngrediente)
.get("/get_ingredientes",getIngredientes)

module.exports = router;