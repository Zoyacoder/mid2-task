const registrationModel = require('../models/registration')

const getUsers = async(req, res) => {
    const users = await registrationModel.find();
    res.render("usersList", { users });
}

const register = async(req,res) => {
    const user = new registrationModel({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        zip: req.body.zip
    });
    
    try {
        
        const u = await user.save();
        console.log(t);
        res.redirect("/userList")
        
    }
    catch(err) {
        console.log("Error");
        res.redirect("/register")
    }
}


const updateUser = async(req,res) => {
    const user = new registrationModel({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        zip: req.body.zip
    });
    
    try {
        
        const u = await user.updateOne();
        console.log(t);
        res.redirect("/userList")
        
    }
    catch(err) {
        console.log("Error");
        res.redirect("/userList")
    }
}

module.exports = {getUsers, register, updateUser}