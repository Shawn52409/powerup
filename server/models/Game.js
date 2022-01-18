const { Schema, model } = require('mongoose');


const gameSchema = new Schema({
    gameName: {
        type: String,
        required: true,
        trim: true
    },
    cover:{
        type: String,
        required: false,
        trim: true
    },
    year: {
        type: String,
        required: false,
        trim: true
    },
    genre: [
        {
            type: String,
            required: false,
            trim: true
        },
    ],
    platform: [
        {
            type: String,
            required: false,
            trim: true,
        },
    ],      
    description: {
        type: String,
        required: false,
        trim: true
    },  
});

const Game = model('Game', gameSchema);

module.exports = Game;
