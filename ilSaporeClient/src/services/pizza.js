import axios from "axios";

const baseURL ="http://localhost:3000"

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials:true
})

const PIZZA_SERVICE={
      crearPizza: async (pizza,data) => {
        return await MY_SERVICE.post("pizza/crear_pizza", pizza);
      },
      borrarPizza: async (pizza) => {
        return await MY_SERVICE.delete("pizza/borrar_pizza", pizza);
      },
      editarPizza: async (pizza) => {
        return await MY_SERVICE.post("pizza/editar_pizza", pizza);
      },
      crearIngrediente: async (pizza) => {
        console.log(pizza)
        return await MY_SERVICE.post("pizza/crear_ingrediente",pizza);
      },
      borrarIngrediente: async (pizza) => {
        return await MY_SERVICE.post("pizza/borrar_ingrediente",pizza);
      },
      editarIngrediente: async (pizza) => {
        return await MY_SERVICE.post("pizza/editar_ingrediente",pizza);
      },
      allIngredientes: async () => {
        return await MY_SERVICE.get("pizza/get_ingredientes");
      }

    
}

export default PIZZA_SERVICE