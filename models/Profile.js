const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Profile = new mongoose.Schema({
    firstName: {type:String, trim:true, default:''},
    lastName: {type:String, trim:true, default:''},
    age: {type:Number, default:0},
    team: {type:String, trim:true, default:''},
    //team: [{type: Schema.Types.ObjectId, ref: 'Team'}],
    position: {type:String, trim:true, default:''}
})

module.exports = mongoose.model('Profile', Profile)