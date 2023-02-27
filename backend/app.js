const express = require('express');
const db = require('./database/connect')
const app = express();
const bodyParser = require('body-parser');
const user_route = require('./routes/User')
const formOptions = {
    extended: true
}

const start = async () => {
    try {
        await db();
        app.listen(3000, () => console.log('Server started'));
    }
    catch(err){
        console.error(`Server Not Running Because of : ${err}`)
    }
}
// app.use('/user', bodyParser.urlencoded(formOptions));
app.use('/user', bodyParser.urlencoded(formOptions), user_route);


start();