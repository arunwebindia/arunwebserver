import express from 'express';

import { deleteContact, getContact, postContact } from '../controllers/contactController.js';
const Router =express.Router();
Router.post('/contact',postContact);
Router.get('/contact',getContact);
Router.delete('/contact/:id',deleteContact);


export default Router;