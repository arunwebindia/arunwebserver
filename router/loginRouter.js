import express from 'express';
import {postLogin,resetPass,setLogin} from '../controllers/loginController.js'
const Router = express.Router();
Router.post('/login',postLogin)
Router.post('/resetlogin',resetPass)
Router.post('/setlogin',setLogin)

export default Router;