const {Schema,model}=require("mongoose");

const Ingredient = new Schema(
{
  ingrediente:{
        type:String,
        required: true,
        unique:true
    },
  tipo:{
    type:String,
    required: true,
    enum:["Salsa","Vegetal","Queso","Carnes","Fruta","Condimento","Extras"]
  },
  extraPrecio:{
    type:Number,
    default:0
  }
},  
{
    timestamps: true,
    versionKey: false
}
);

module.exports = model('Ingredient', Ingredient);
