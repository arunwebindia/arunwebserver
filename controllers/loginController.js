import {adminModel} from '../modal/index.js'
const setLogin = (req,res)=>{
    const doc = new adminModel({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
    })
    doc.save().then(()=>{});
    res.send('saved');
    res.end();
}
const postLogin = async (req,res)=>{
    let resp = await adminModel.find({});
    if(req.body.username == resp[0].username && req.body.password === resp[0].password){
        res.send(true)
    }
    else{
        res.send(false)
    }
    res.end();
}

const resetPass = async (req,res)=>{
    const doc = await adminModel.find({});
    const resp =await adminModel.findByIdAndUpdate({_id:doc[0]._id},{username:req.body.username,password:req.body.password});
    res.send('successfuly changed password.')
    res.end();
}

export {postLogin,resetPass,setLogin};