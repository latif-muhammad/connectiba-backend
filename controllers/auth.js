const User = require('../models/user');

exports.signup = (req, res) => {
    const userData = req.body;
    User.create({
        erp_id: userData.erp_id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        password: userData.password,
        email: userData.email,
        date_of_birth: userData.date_of_birth,
        gender: userData.gender,
        phone_number: userData.phone_number,
        cnic_number: userData.cnic_number,

    }).then((result) => {
        return res.status(201).json({
            success: true,
            data: result,
        });
    }).catch(err => {
        return res.json({
            success: false,
            err: {
                name: err.name,
                message: err.errors,
            }
        });

    });
}

// LOGIN user

exports.login = (req, res) => {
    const erp_id = req.body.erp_id;
    const password = req.body.password;

    User.findOne({
        where: {
            erp_id: erp_id,
        },
    }).then((userData) => {
        if (!userData || userData.password !== password) {
            return res.json({
                message: "User name or password is incorrect",
            });
        }
        return res.json({
            user: userData,
        });
    }).catch((err) => {
        return res.json({
            "error": err,
        });
    });
}



// LOGOUT 
exports.logout = (req, res) => {
    return res.json({});

}
