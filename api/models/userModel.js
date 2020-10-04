const { response } = require('express');
const { useCallback } = require('react');
const db = require('../database/databaseConnection.js');

exports.userRegister = async (userEmail, userPassword) => {
    //should check if email exists first
    return db.query('INSERT INTO users (email, userPassword) VALUES (\''+ userEmail + '\',\'' + userPassword + '\')');
}

exports.userLogin = async (email, userPassword, res) => {
    db.query('SELECT userPassword FROM users WHERE email = ' + '\'' + email + '\'', function (error, result, fields) {
        if(error)
            throw error;
        res.status(200).send(result[0])
    })
}