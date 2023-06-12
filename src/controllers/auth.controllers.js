
import User from '../models/user.models.js'
import Reserva from '../models/reserva.models.js'
import bcrypt from 'bcryptjs'
import { creatAccessToken } from "../libs/jwt.js";


export const register = async (req, res) => {
    const {username, email, password, rolUSM, tipoUsuario} = req.body

    try {
        const passwordhash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordhash,
            rolUSM,
            tipoUsuario,
        })
        
        const userSaved = await newUser.save();
        const token = await creatAccessToken({id: userSaved._id});

        res.cookie('token',token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            tipoUsuario: userSaved.tipoUsuario,
            createAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
 
        });
    } catch (error) {
        res.status(500).json({ message: error.message});
        
    }
};
export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({ message: "Usuario no encontrado"});


        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrecet password"});
        
        const token = await creatAccessToken({id: userFound._id});
        res.cookie('token',token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            tipoUsuario: userFound.tipoUsuario,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
 
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message});
        
    }
}; 
export const logout = (req, res) => {
    res.cookie('token',"", {
        expire: new Date(0)
    })
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({message:"Usuario no encontrado"});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        rolUSM: userFound.rolUSM,
        createAt: userFound.createAt,
        updateAt: userFound.updateAt,
        tipoUsuario: userFound.tipoUsuario,

    })
}
export const reserva = (req, res) => res.send("Reserva") 