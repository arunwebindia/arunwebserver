import express from 'express';
import {addStore,getStore,deleteStore} from '../controllers/storeData.js'
import path from 'path'
import multer from 'multer';

const storage = multer.diskStorage({
    destination:(req,file,cb )=>{
        cb(null,'public/files/')
    },
    filename:(req,file,cb )=>{
        cb(null,Date.now() + "_" + file.originalname)
    }
})
const upload = multer({
    storage,
})

const Router = express.Router();
Router.post('/store',upload.single("file"),addStore)
Router.get('/store',getStore)
Router.delete('/store/:id',deleteStore)

export default Router