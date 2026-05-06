const express = require('express');

const app = express();

const VERIFY_TOKEN = 'facebook123';

app.get('/webhook', (req, res) => {

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
        return res.status(200).send(challenge);
    }

    res.sendStatus(403);
});

app.listen(3000, () => {
    console.log('Server Started');
});
