const User = require("../models/User");
const passport = require("passport");

exports.login=async(req,res,next)=>{
	const { user } = req;
  res.status(200).json({ user });
}


exports.signup=async(req,res,next)=>{
  const {nombre, email, numero, password} = req.body
  const newUser = {nombre,email,numero}
  User.register(newUser, password)
      .then((user) => res.status(201).json({ user }))
      .catch((err) => res.status(500).json({ err }))
}

exports.edit=async(req,res)=>{
  const {id, nombre,email,numero} = req.body
  const editUser = {nombre, email, numero}
  User.findByIdAndUpdate({_id: id}, editUser, {new: true})
  .then( user => res.status(200).json({user}))
  .catch( err => res.status(500).json({err}))
}

exports.logout=(req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
};

exports.loggedin=(req,res,next)=>{
  User.findById(req.user._id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }));
}