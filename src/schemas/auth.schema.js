import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Nombre de usuario requerido'
    }),
    email: z.string({
        required_error: "Requiere un email"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña es requerida"
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres"
    }),
    rolUSM: z.string({
        required_error: "Ingrese el rol USM"
    }).min(10,{
        message:" Inrese un rol uSM valido"
    }),
    tipoUsuario: z.string({
        required_error: "Ingrese su tipo de usuario"
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error:"Es requerido",
    }).email({
        message: "email invalido",}),
    password: z.string({
        required_error:"Password es requerida",
    }).min(6, {
        message:"La clave es incorrecta"
    }),
})