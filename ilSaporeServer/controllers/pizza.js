const Pizza = require("../models/Pizza");
const Ingrediente = require("../models/Ingredients")

exports.crearPizza=async(req,res,next)=>{
  console.log('aqui');
  
  const { nombre,ingredientes,orilla,descripcion,precio} = req.body;
  //const {secure_url:image_URL}=req.file;
   await Pizza.create({
    nombre,
    ingredientes,
    orilla,
    descripcion,
    precio,
    //image_URL
  }).then((pizza)=>res.status(201).json({pizza}))
    .catch((err)=>res.status(400).json({err}))
}

exports.borrarPizza=async(req,res,next)=>{
  await Pizza.findByIdAndDelete({_id:req.params.id})
  .then((pizza)=>res.status(201).json({pizza}))
  .catch((err)=>res.status(400).json({err}))
}

exports.editarPizza=async(req,res,next)=>{
  const {id,nombre,ingredientes,orilla,descripcion,precio}=req.body;
  const {secure_url:image_URL}=req.file;
  const editPizza={nombre,ingredientes,orilla,descripcion,precio,image_URL}
  await Pizza.findByIdAndUpdate({_id:id},editPizza,{new:true})
  .then(pizza=>res.status(200).json({pizza}))
  .catch(err=>res.status(500).json({err}))
}

exports.crearIngrediente=async(req,res,next)=>{
  const{ingrediente,tipo,extraPrecio}=req.body;
  await Ingrediente.create({
    ingrediente,
    tipo,
    extraPrecio,
  }).then((ingrediente)=>res.status(201).json({ingrediente}))
    .catch((err)=>res.status(400).json({err}))
}

exports.borrarIngrediente=async(req,res,next)=>{
  await Ingrediente.findByIdAndDelete({_id:req.params.id})
  .then((ingrediente)=>res.status(201).json({ingrediente}))
  .catch((err)=>res.status(400).json({err}))
}

exports.editarIngrediente=async(req,res,next)=>{
  const {ingrediente,tipo,extraPrecio}=req.body
  const editIngrediente={ingrediente,tipo,precio,extraPrecio}
  await Pizza.findByIdAndUpdate({_id:id},editIngrediente,{new:true})
  .then(pizza=>res.status(200).json({pizza}))
  .catch(err=>res.status(500).json({err}))
}

exports.getIngredientes=async(req,res)=>{
  res.send(await Ingrediente.find())
}

exports.getPizza=async(req,res)=>{
  res.send(await Pizza.find())
}
