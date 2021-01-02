const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});

app.post('http://localhost:3030/api/email', (req, res, next) => {
    sendGrid.setApiKey(process.env.API_KEY)        )
    const msg = {
        to: 'doug.rosenberg@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: 'req.body.message'
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
//200 means everything worked properly
            });
        })
        .catch(err => {
            console.log('errors: ', err);
            res.status(401).json({
                //401 means blah
                success: false
            });
        })
})

app.listen(3030, '0.0.0.0');