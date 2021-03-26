const mongoose = require('mongoose');

// Creating a Schema - modeling user input
const UserInfo = new mongoose.Schema({
    rank: String,
    percentile: String,
    avgHrs: String,
    winsPerMatches: String
});

const UserInfoModel = mongoose.model('gamers-info', UserInfo);

module.exports = UserInfoModel