import mongoose from "mongoose";
import questionsModel from "../models/questions.module.js";


export const askQuestion = async(req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new questionsModel({...postQuestionData, userId: req.userId});

  try{
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
  }catch(err){
    console.log(err);
    res.status(409).json("Couldn't post a new question");
  }
}

export const getQuestion = async(req, res) => {

  try{
    const questionData = await questionsModel.find();
    res.status(200).json(questionData);
  }catch(err){
    console.log(err);
    res.status(409).json({"message": err});
  }
}

export const getQuestionById = async(req, res) => {

  const {id: _id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send('question unavailable...');
  }

  try{
    const questionData = await questionsModel.findById(_id);
    res.status(200).json(questionData);
  }catch(err){
    console.log(err);
    res.status(409).json({"message": err});
  }
}

export const deleteQuestion = async(req, res)=>{
  const {id: _id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send('question unavailable...');
  }

  try{
    await questionsModel.findByIdAndRemove(_id);
    res.status(200).json({message: "successfully deleted..."});
  }catch(err){
    res.status(404).json({message: err.message});
  }
}