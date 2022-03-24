const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
  const { body } = req;
  if(!body.email) {
    res.status(400).json({ errorMessaage: "No E-mail provided"})
    return;
  }

  let userQuery;
  try{
    userQuery = await User.findOne({ email: body.email});
  }catch(err){
    res.status(400).json(err)
  }

  if(userQuery === null){
    res.status(400).json({ errorMessage: "Cannot find user with that E-mail"});
    return;
  }

  try{
    const compareBool = await bcrypt.compare(body.password, userQuery.password)
    if(!compareBool){
      res.status(401).json({ errorMessage: "Incorrect E-mail/Password combo" });
      return;
    }
  }catch(err){
    res.status(400).json(err);
    return;
  }

  const usertoken = await jwt.sign({ _id: userQuery._id }, process.env.SECRET_KEY);
  res.cookie("usertoken", usertoken, process.env.SECRET_KEY, {
    httpOnly: true,
    expires: new Date(Date.now() + 9000000000),
  })
  .json({ message: "Login Successful" });
}

const protected = async (req, res) => {
  const token = req.cookies.usertoken;
  if(!token){
    console.log('No Token');
    return;
  }
  let decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
  res.send(decodedToken._id);
}

const logout = async (req, res) => {
  res.clearCookie('usertoken', {}, { signed: true, httpOnly: true, path: '/' })
  res.json({ message: 'Log out successful'})
}

module.exports = {
  getUser,
  registerUser,
  login,
  protected,
  logout
}