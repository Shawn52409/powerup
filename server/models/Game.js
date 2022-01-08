const mongoose = require('mongoose');

const { Schema } = mongoose;

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
    publisher: {
        type: String,
        required: false,
        trim: true
    },
    releaseDate: {
        type: String,
        required: false,
        trim: true
    },
    esrbRating:{
        type: String,
        required: false,
        trim: true
    },  
    likes:{
        type: String,
        required: false,
        trim: true
    },  
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
