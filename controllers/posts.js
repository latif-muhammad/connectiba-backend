const db = require('../utilities/database');
const Room = require('../models/room');
const Post = require('../models/post');



// GETTING POSTS BY ROOM ID
exports.getPosts = (req, res) => {
    const roomId = req.params.roomId;
    Post.findAll({
        where: { 'room_id': roomId }
    }).then((result) => {
        return res.json(result);
    }).catch((error) => {
        return res.json({
            "err": error

        });
    });
}


// ADDING NEW POSTS
exports.createPost = (req, res) => {
    Post.create(req.body).then(result => {
        res.status(201).json({
            success: true,
            posted: result
        });
    }).catch((err) => {
        res.status(400).json(err);
    });
}
