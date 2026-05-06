const express = require('express');

const app = express();

app.use(express.json());

const VERIFY_TOKEN = 'facebook123';

app.get('/webhook', (req, res) => {

    console.log('GET WEBHOOK CALLED');

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {

        console.log('WEBHOOK VERIFIED');

        return res.status(200).send(challenge);
    }

    return res.sendStatus(403);
});

app.post('/webhook', (req, res) => {

    console.log('==============================');
    console.log('NEW FACEBOOK LEAD RECEIVED');
    console.log(JSON.stringify(req.body, null, 2));
    console.log('==============================');

    return res.status(200).send('EVENT_RECEIVED');
});

app.get('/', (req, res) => {
    res.send('Server Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});
