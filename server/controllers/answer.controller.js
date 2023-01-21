import mongoose from "mongoose"
import questionsModel from "../models/questions.module.js";

export const postAnswer = async(req, res) =>{
  const {id: _id} =req.params;
  const {noOfAnswers, answerBody, userAnswered} = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable...");
  }
  updateNoOfQuestions(_id, noOfAnswers);
  try{
    const updatedQuestion = await questionsModel.findByIdAndUpdate(_id,{$addToSet: {answer: [{answerBody, userAnswered, userId: req.userId}]}});
    res.status(200).json(updatedQuestion);
  }catch(err){
    res.status(400).json(err);
  }
}

const updateNoOfQuestions = async(_id, noOfAnswers) => {
  try{
    await questionsModel.findByIdAndUpdate(_id, {$set: {'noOfAnswers': noOfAnswers}})
  }catch(err){
    console.log(err);
  }
}