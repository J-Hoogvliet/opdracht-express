import mongoose from "mongoose";

const ChampionSchema = new mongoose.Schema({
    year: {type: Number, required: true},
    name: {type: String, required: true},
    age: {type: Number},
    chassis: {type: String},
    motor: {type: String, required: true},
    constructor: {type: String, required: true},
    tyres: {type: String},
    poles: {type: Number},
    wins: {type: Number},
    podiums: {type: Number},
    points: {type: Number},
    pointsClear: {type: Number},
    fastestLaps: {type: Number},
    number: {type: Number},

})

const Champion = mongoose.model('Champion', ChampionSchema);

export default Champion