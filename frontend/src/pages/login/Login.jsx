import "./Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useLocation } from "wouter";

export default function Login() {
  const [userEmail, setUserEmail] = useState(false);
  const [userPassword, setUserPassword] = useState(false);
  const [user, setUser] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (user) {
      // Validar si el correo existe
      if (user.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El correo no se encuentra registrado!",
          footer: '<a href="/register">¡Regístrate ahora!</a>',
        });
      }

      // Validar password
      else if (user[0].password !== userPassword) {
        console.log(user[0]);
        console.log(userPassword);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contraseña incorrecta!",
          footer: '<a href="/register">Recuperar contraseña</a>',
        });
      }

      // Contraseña correcta
      else if (user[0].password === userPassword) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logueado exitosamente!",
          showConfirmButton: false,
          timer: 1500,
        });

        cleanForm();
      }
    }
  }, [user, userPassword]);

  const cleanForm = () => {
    const email = window.document.getElementById("email");
    const password = window.document.getElementById("password");

    email.value = "";
    password.value = "";

    window.localStorage.setItem("login", true);

    setTimeout(() => {
      setLocation("/");
    }, 1000);
  };

  const getUser = async () => {
    axios
      .get("http://localhost:8080/users?email=" + userEmail)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  const changeEmail = (data) => {
    //console.log(data.value);

    setUserEmail(data.value);
  };

  const changePassword = (data) => {
    //console.log(data.value);

    setUserPassword(data.value);
  };

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
                onKeyUp={(e) => changeEmail(e.target)}
                id="email"
              />

              <br />

              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
                onKeyUp={(e) => changePassword(e.target)}
                id="password"
              />

              <br />
              <br />

              <div class="d-grid gap-2">
                <button className="btn btn-primary" onClick={getUser}>
                  Enviar
                </button>
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
