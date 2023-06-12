import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";


function RegisterPage() {
    const {register, handleSubmit} = useForm()
    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit(async (values)=> {
                console.log(values);
                const res = await registerRequest(values)
                console.log(res)
            })}>

                <input type="text" {...register("username", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="username"
                />
                <input type="email" {...register("email", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md md-2"
                placeholder="email"
                />
                <input type="password" {...register("password", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="password"
                />
                <input type="text" {...register("rolUSM", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="rolUSM"
                />
                <input type="radio" name="tipoUsuario" value="Alumno" {...register("tipoUsuario",{required:true })}
                />
                <label htmlFor="Alumno">Alumnno</label>

                <input type="radio" name="tipoUsuario" value="Seguridad" {...register("tipoUsuario",{required:true })}
                />
                <label htmlFor="Seguridad">Seguridad</label>
                
                <div>
                    <button type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage