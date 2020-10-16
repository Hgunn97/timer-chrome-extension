const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timerSchema = new Schema({
    time: { type: Number, required: false },
    title: { type: String, required: false},
    description: { type: String, required: false}
},{
    timestamps: true,
});

const Timer = mongoose.model('Timer', timerSchema)
module.exports = Timer;