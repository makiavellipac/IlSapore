const {model , Schema}=require("mongoose");

const Pedidos = new Schema(
    {
        ordenes:{
                type:[{Schema.Types.ObjectId}],
                ref:"Pizza"
        },
        cliente:{
                type:Schema.Types.ObjectId,
                ref:"User"
        },
        

    },
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model("pedidos",Pedidos);