import MiInput from "../components/Inputs";
import {MiBoton} from "../components/Buttons";

function Login () {
    return (
        <>
            <div class="font-Barlow1 font-extrabold">
                <h1 class="text-xl">INICIAR SESIÓN</h1>
              <div class="relative my-3">
            <hr />
            </div>
            <label for="input-group-1" class="block mb-2">Usuario</label>
        <MiInput type="text" icono='user' id="input-group-1" placeholder="Escriba su nombre de usuario"></MiInput>
            <label for="input-group-1" class="block mb-2">Contraseña</label>
        <MiInput type="password" icono='pass' id="input-group-2" placeholder="Escriba su contraseña"></MiInput> 
        <div className="flex mt-6 flex-row justify-end">
        <MiBoton icono='check' text="Iniciar sesión"></MiBoton>
        <MiBoton icono='invite' color='alternative' text="Entrar como invitado"></MiBoton>
        </div>
            </div>
        </>
    )
}

export default Login;