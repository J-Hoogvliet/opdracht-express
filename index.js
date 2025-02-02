import express from 'express';
import mongoose from 'mongoose';
import champions from "./Routes/Champions.js";
import router from "./Routes/Champions.js";

const app = express();

app.use( (req, res, next)=>{
    const acceptHeader = req.headers.accept
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method !== "OPTIONS" && acceptHeader !== 'application/json'){
        console.log('not included')
        return res.status(406).json({error: 'Only json is accepted'})
    }
    next()
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/F1Champions')
    .then(() => {
        console.log('Verbonden met MongoDB');
    })
    .catch(err => {
        console.error('Kan geen verbinding maken met MongoDB', err);
    });

app.use('/champions', champions)

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is listening on port ${process.env.EXPRESS_PORT}`);
});