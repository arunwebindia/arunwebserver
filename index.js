import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import contactRouter from './router/contactRouter.js'
import storeRouter from './router/storeData.js'
import loginRouter from './router/loginRouter.js'
import programingRouter from './router/programingRouter.js'
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send('helo from serveer side');
    res.end()
})

app.use('/',contactRouter);
app.use('/',storeRouter);
app.use('/',loginRouter);
app.use('/',programingRouter);

app.listen(8080,()=>{console.log("server is running")})
