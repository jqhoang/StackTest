
const userModel = require('../models/userModel');

exports.userRegister = async (req, res) => {
    await userModel.userRegister(req.body.email, req.body.userPassword);
    res.redirect('/', 301);
};

exports.userLogin = async (req, res) => {
    await userModel.userLogin(req.body.email, req.body.userPassword, res);
}


