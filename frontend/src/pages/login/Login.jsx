import "./Login.css";
import React from "react";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-box container">
        <div className="row form-box">
          <div className="col-md-8 login-image"></div>
          <div className="col-md-4 form-login">
            <h4 className="text-center text-uppercase">Iniciar Sesión</h4>

            <br />
            <br />

            <div>
              <input
                type="text"
                placeholder="Correo eléctronico"
                className="form-control"
              />

              <br />

              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
              />

              <br />
              <br />

              <div class="d-grid gap-2">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div>
              <p className="text-center">
                ¿No tienes cuenta? <a href="/">¡Regístrate ahora!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
