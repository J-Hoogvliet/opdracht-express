import mongoose from "mongoose";

const ChampionSchema = new mongoose.Schema({
        year: {type: String , required: true},
        name: {type: String, required: true},
        age: {type: String, required: true},
        chassis: {type: String, required: true},
        motor: {type: String, required: true},
        team: {type: String, required: true},
        tyres: {type: String, required: true},
        poles: {type: String, required: true},
        wins: {type: String, required: true},
        podiums: {type: String, required: true},
        points: {type: String, required: true},
        pointsClear: {type: String, required: true},
        fastestLaps: {type: String, required: true},
        number: {type: String, required: true},

    },
    {
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                ret._links = {
                    self: {
                        href: process.env.BASE_URL + `/champions/${ret._id}`
                    },
                    collection: {
                        href: process.env.BASE_URL + `/champions`
                    }
                }

                delete ret._id
            }
        }
    }
)

const Champion = mongoose.model('Champion', ChampionSchema);

export default Champion