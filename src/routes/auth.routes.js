import { Router } from "express";
import {login, logout, register, reserva, profile,} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middlewares.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router  = Router()

router.post('/register', validatorSchema(registerSchema), register);
router.post('/login', validatorSchema(loginSchema),login);
router.post('/reserva', reserva);
router.post('/logout', logout);
router.get('/profile', authRequired, profile); 

export default router