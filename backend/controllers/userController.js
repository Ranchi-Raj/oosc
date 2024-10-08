const mongoose = require('mongoose')
const User = require('../models/userModel');

exports.createUser = async (req, res) => {
try
{
    const { name, username, dob, password } = req.body;
    const nameArray = name.split(" ")[0];

    const data = await User.create({ name, username, dob, password, nameArray });
    res.json({
        status: 200,
        data: {
            data
        }
    });
    console.log("User resgistered");
}
catch(err){
    console.log("User not resgistered");
}
}

exports.getAllUsers = async (req, res) => {
    
    try{
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body)
    const data = await User.findOne({ username : username, password :password });
    
    res.json({
        status: 200,
        data: {
            data
        }
    });
    }
    catch(err){
        console.log(err)
        console.log("User not resgistered");
    }
}

exports.searchUser = async (req, res) => {

    try{
    const username = req.body.username;
        
    const data = await User.find({ nameArray : username  });
    
    res.json({
        status: 200,
        data: {
            data
        }
    });
    }
    catch(err){
        console.log(err)
        console.log("User not resgistered");
    }
}

exports.updateProfile = async (req, res) => {

    try{
        const data = req.body;

        const result = await User.updateOne({ _id : data._id }, data);
        res.json({
            status: 200,
            data: {
                result
            }
        });

    }
    catch(err){
        console.log(err)
    }
}