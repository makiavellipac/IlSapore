const {Schema,model}=require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
{
  nombre:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  numero:{
    type:String,
    required:true,
    unique:true
  },
},
{
  timestamps:true,
  versionKey: false
});

userSchema.plugin(PLM, { usernameField: 'email' });
module.exports = model('User', userSchema);
