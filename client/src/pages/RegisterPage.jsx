import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {RegisterErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="username"
        />
        {errors.username && (
          <p className="text-red-500">*Username is Required </p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md md-2"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">*Email is Required </p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500">*Password is Required </p>
        )}
        <input
          type="text"
          {...register("rolUSM", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="rolUSM"
        />
        {errors.rolUSM && <p className="text-red-500">*rolUSM is Required </p>}
        <input
          type="radio"
          name="tipoUsuario"
          value="Alumno"
          {...register("tipoUsuario", { required: true })}
        />
        <label htmlFor="Alumno">Alumnno</label>

        <input
          type="radio"
          name="tipoUsuario"
          value="Seguridad"
          {...register("tipoUsuario", { required: true })}
        />
        <label htmlFor="Seguridad">Seguridad</label>
        {errors.tipoUsuario && (
          <p className="text-red-500">*Tipo de usuario is Required </p>
        )}
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
      <p className="flex gap-x-2 justify-between">
        Si ya tienes cuenta, conectate
        <Link to="/login" className=" text-sky-500">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
