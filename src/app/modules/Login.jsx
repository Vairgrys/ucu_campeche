import MiInput from "../components/Inputs";
import MiBoton from "../components/Buttons";


function Login () {
    return (
        <>
            <div>
                <h1>Iniciar Sesion</h1>
                <hr />
                <label htmlFor="">usuario</label>
                <MiInput placeholder="escribe tu usuario"></MiInput>
                <hr />
                <label htmlFor="">contraseña</label>
                <MiInput placeholder="escribe tu contraseña"></MiInput>
                <br />
                <MiBoton text="iniciar sesion"></MiBoton>
            </div>
        </>
    )
}

export default Login;