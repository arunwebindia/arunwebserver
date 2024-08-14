

import {programmingModel} from '../modal/index.js'

const postProgramming = (req,res)=>{
    const programmingDoc = new programmingModel({
        questiontion: req.body.questiontion,
        example: req.body.example,
        answer: req.body.answer,
    })
    programmingDoc.save();
    res.send('saved');
    res.end()
}

const getProgramming = async(req,res)=>{


    const resp = await programmingModel.find({});
    res.send(resp)
  res.end()
}

const updateProgramming = (req,res) =>{
    programmingModel.findOneAndUpdate({_id:req.body.id},{answer:req.body}).then((res)=>{});
    res.send('update data');
    res.end()
}
  
const deleteProgramming = (req,res) =>{
    programmingModel.findOneAndDelete({_id:req.params.id}).then((res)=>console.log("delete succesfully..."))
    res.end();
    res.end()
}

const postReply = (req,res) =>{
   
    programmingModel.findOneAndUpdate({_id:req.params.id},{$push:{reply:{name:req.body.name,message:req.body.message}}}).then((d)=>{});
    res.send('reply data');
    res.end()
}


const deleteReply = (req,res) =>{
    programmingModel.findOneAndUpdate({_id:req.params.id},{$pull:{reply:{_id:req.params.replyid}}}).then((ress)=>res.send('delete successfull'))
    res.end()
}


export {postProgramming, getProgramming, updateProgramming, deleteProgramming, postReply, deleteReply}

