const { Router } = require('express')
const router = Router()

const webpush = require('../webpush');
let pushSuscription;

router.post('/subscription', async (req, res) => {
    pushSuscription = req.body;
    res.status(200).json();

    const payload = JSON.stringify({
        tittle: 'My Custom Notificacion',
        message: 'Hello world'
    })

    try {
        webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
        console.log(error)
    }
})



module.exports = router; 