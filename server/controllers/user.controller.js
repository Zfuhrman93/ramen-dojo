const User = require('../models/user.model');

const getUser = async (req, res) => {
  try{
    user = await User.find({ _id: req.params.id });
    res.json(user);
  }catch(err){
    console.log(err);
  }
}

const registerUser = async (req, res) => {
  const { body } = req;
  try{
    query = await User.findOne({ email: body.email });
    if(query){
      res.status(400).json({ errorMesssage: "User already exists with the E-mail" });
      return;
    }
  }catch(err){
    res.status(400).json(err);
  }
  try{
    let newUser = new User(body);
    newUser = await newUser.save();
    res.json(newUser);
  }catch(err){
    res.status(400).json(err);
  }
}

module.exports = {
  getUser,
  registerUser,
}