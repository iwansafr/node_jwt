import Users from "../models/User.js"
import bcrypt, { hash } from "bcrypt"

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body
    if(password !== confPassword) return res.status(400).json({
        msg: "Password and Confirm Password not match"
    })
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        })
        res.json({
            msg: "Register Successfully"
        })
    } catch (error) {
        console.log(error)
    }
}