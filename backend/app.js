const express = require('express');
const db = require('./database/connect')
const app = express();

const start = async () => {
    try {
        await db();
        app.listen(3000, () => console.log('Server started'));
    }
    catch(err){
        console.error(`Server Not Running Because of : ${err}`)
    }
}
start();