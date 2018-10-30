const mongoose = require('mongoose');

const Team = new mongoose.Schema({
    location: {type:String, trim:true, default:''},
    teamName: {type:String, trim:true, default:''},
    division: {type:String, required:true, enum: ['North', 'South', 'East', 'West']},
    confrence: {type:String, required:true, enum:['AFC', 'NFC']},
})

Team
.virtual('fullName')
.get(function() {
        return ( location + ' ' + teamName);
});

module.exports = mongoose.model('Team', Team);