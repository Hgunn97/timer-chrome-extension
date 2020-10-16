const express = require('express')
const router = express.Router()

let Timer = require('../models/timer.model')

router.route('/').get((req, res) => {
    Timer.find()
        .then(times => res.json(times))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/add').post((req, res) => {
    const time = Number(req.body.time)
    const title = req.body.title
    const description = req.body.description

    const newData = new Timer({
        time,
        title,
        description
    });

    newData.save()
        .then(() => res.json('Time added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router