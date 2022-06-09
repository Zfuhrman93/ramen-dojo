const Ramen = require('../models/ramen.model');

const createRamen = async (req, res) => {
  const { body } = req
  try{
    let newRamen = new Ramen(body);
    newRamen = await newRamen.save()
    res.json(newRamen);
  }catch(err){
    res.status(400).json(err.response);
  }
}

const getOneRamen = async (req, res) => {
  try{
    const oneRamen = await Ramen.find({ _id: req.params.id });
    res.json(oneRamen)
  }catch(err){
    res.status(400).json(err);
  }
}

const deleteRamen = async (req, res) => {
  try{
    const deletedRamen = await Ramen.deleteOne({ _id: req.params.id });
    res.json(deletedRamen);
  }catch(err){
    res.status(400).json(err);
  }
}

const updateRamen = async (req, res) => {
  try{
    const updatedRamen = await Ramen.findOneAndUpdate({ _id: req.params.id },
      req.body,
      {new:true, runValidators:true });
    res.json(updatedRamen);
  }catch(err){
    res.status(400).json(err);
  }
}

const recentRamen = async (req, res) => {
  try{
    const recentRamen = await Ramen.find().sort({ _id: -1 }).limit(1)
    res.json(recentRamen);
  }catch(err){
    res.status(400).json(err);
  }
}

module.exports = {
  createRamen,
  getOneRamen,
  deleteRamen,
  updateRamen,
  recentRamen
}