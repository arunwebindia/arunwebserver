import express from 'express';
import {addStore,getStore,deleteStore} from '../controllers/storeData.js'
const Router = express.Router();
Router.post('/store',addStore)
Router.get('/store',getStore)
Router.delete('/store/:id',deleteStore)

export default Router