import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv();
let url = process.env.MONGODB_URL
async function fn(url) {
    let x = await mongoose.connect(url, { dbName: 'arunwebdb' })
    console.log('database connected...')
}
fn(url)
const adminObject = {
    username: {
        type: String,
        default: 'arunweb'
    },
    password: {
        type: String,
        default: 'arun@0000'
    },
    name: {
        type: String,
        default: 'Arun Singh'
    }
}
const contactObject = [
        {
            name: String,
            email: String,
            message: String,
            time: {type:Date,default: Date.now(),require:true}
        }
    ]

const programmingObject = [
    {
        question: String,
        example: String,
        answer: String,
        reply: [
            { name: String, message: String }
        ]
    }
];
const storeObject =
    [
        {
            type: {
                type: String,
                default: 'Text'
            },
            data: String,
            file:String,
        }
    ];

let contactSchema = new mongoose.Schema(contactObject)
let adminSchema = new mongoose.Schema(adminObject)
let programmingSchema = new mongoose.Schema(programmingObject)
let storeSchema = new mongoose.Schema(storeObject)
let contactModel = mongoose.model('contact',contactSchema);
let adminModel = mongoose.model('admin',adminSchema);
let programmingModel = mongoose.model('programming',programmingSchema);
let storeModel = mongoose.model('store',storeSchema);
export {contactModel,adminModel,programmingModel,storeModel}
