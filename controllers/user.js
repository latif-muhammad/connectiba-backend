const sequelize = require('../utilities/database');
const RoomMember = require('../models/room_member');
const Comment = require('../models/comment');
const Like = require('../models/like');
const Job = require('../models/job');

exports.getTest = (req, res) => {
    console.log(RoomMember);
    res.status(200).json({ name: "this" });

}


exports.getProfile = (req, res) => {

}

// DELETE PROFILE


// UPDATE PROFILE


