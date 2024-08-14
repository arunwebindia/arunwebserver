import express from 'express';
import {postProgramming,getProgramming,updateProgramming,deleteProgramming,postReply,deleteReply} from '../controllers/programingController.js'
const Router = express.Router();
Router.post('/programming',postProgramming);
Router.get('/programming',getProgramming);
Router.put('/programming',updateProgramming);
Router.delete('/programming/:id',deleteProgramming);
Router.post('/programming/reply/:id',postReply);
Router.delete('/programming/reply/:id/:replyid',deleteReply);

export default Router