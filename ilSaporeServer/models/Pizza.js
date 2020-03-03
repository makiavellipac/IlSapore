const {model , Schema}=require("mongoose");

const Pizza = new Schema(
    {
        nombre:{
          type:String,
          unique:true,
        },
        ingredientes:[{type:String}],
        orrilla:{
        		type:Boolean,
        		default:false,
        		},
        descripcion:String,
        precio:{
            type:Number,
            required:true
        },
        image_URL:String
    },
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model("Pizza",Pizza);