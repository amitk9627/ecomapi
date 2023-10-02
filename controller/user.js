const Users = require('../model/users.js');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const secretKey=process.env.secretKey;

const register = async (req, res) => {
    const { name, email, password } = req.body;
    // input data not present
    if (!name || !email || !password) {
        return res.json({
            status: "fail",
            message: "Please provide correct Input"
        })
    }

    // user already exist
    const alreadyUser = await Users.findOne({ email: email });
    if (alreadyUser) {
        return res.json({
            status: "fail",
            message: "User Already Exist"
        })
    }
    // bcrypt password
    const salt = await bcrypt.genSalt(10);  //salt
    const passwordHash = await bcrypt.hash(password, salt); //new Password
    const userDetials = {
        name: name,
        email: email,
        password: passwordHash
    }
    const user = new Users(userDetials);
    const result = await user.save();

    res.json({
        status: true,
        result,
        passwordHash
    })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    // Input Data
    if (!email || !password) {
        return res.json({
            status: "fail",
            message: "Please provide correct Input"
        })
    }
    try {
        const user = await Users.findOne({ email: email })
        // user found or not
        if (!user) {
            return res.json({
                status: "fail",
                message: "User not Founf"
            })
        }
        const checkPassword = await bcrypt.compare(password,user.password);
        // when password is wrong
        if (!checkPassword) {
            return res.json({
                status: "false",
                message:'Incorrect password'
            })
        }
        const payload={
            userId:user._id,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
        }
        const token=jwt.sign(payload,secretKey);
        await Users.findByIdAndUpdate(user._id,{token:token})
        res.json({
            status :true,
            message :"User Login successfully",
            token
        })
    } catch (err) {
        res.json({
            status : false,
            message:"sonething went worng "+err
        })
    }
}

const logout =async (req, res) => {
    const token=req.headers.authorization;
    const decodedToken=await jwt.decode(token,secretKey)
    const result=await Users.findByIdAndUpdate(decodedToken.userId,{token:""});
    res.json({
        status: true,
        message:"user logout successfully"
    })
}
module.exports = { login, register, logout };