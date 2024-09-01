import { storeModel } from "../modal/index.js";


const addStore = (req,res)=>{
    if(req?.file?.filename != undefined){
        let doc = new storeModel({
            type:req.body.type,
            data:req.body.data,
            file:req.file.filename
        })
        doc.save();
    }
    else{
        let doc = new storeModel({
            type:req.body.type,
            data:req.body.data
            
        })
        doc.save(); 
    }
    
    res.end()
}
const getStore = async(req,res)=>{
    const  response = await storeModel.find({});
    res.send(response)
   res.end()
}
const deleteStore = (req,res)=>{
    storeModel.findOneAndDelete({_id:req.params.id}).then((res)=>console.log("delete succesfully..."))
    res.end();
 }
 export {addStore,getStore,deleteStore}