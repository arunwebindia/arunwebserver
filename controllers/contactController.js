import {contactModel} from '../modal/index.js'
const postContact = (req,res)=>{
    let doc = new contactModel({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
    })
    doc.save().then((res)=>{})
    res.end()
}
const getContact =async (req,res)=>{
    let data = await contactModel.find({})
    res.send(data)
    res.end()
}
const deleteContact = (req,res)=>{
    contactModel.findByIdAndDelete({_id:req.params.id}).then((res)=>{})
    res.end()
}
export {postContact,getContact,deleteContact}