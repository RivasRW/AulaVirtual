import { useEffect, useState } from "react";
import axios from "axios";
import "./TodoPage.css";

export default function TodoPage({ params }) {
  const [todo, setTodo] = useState(false);

  useEffect(() => {
    let subject = window.localStorage.getItem("subject");
    axios
      .get("http://localhost:8080/materias?title=" + subject)
      .then((response) => {
        console.log(response.data);
        setTodo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h4 className="mt-4">
            {todo ? todo[0].todos[params.id - 1].title : ""}
          </h4>

          <p className="mt-4">
            <b>Descripción</b>
          </p>
          <p>
            {todo ? todo[0].todos[params.id - 1].description : ""}
            <br />
            <br />
            Fecha de entrega: 20/01/2022
          </p>

          <p>
            <b>Archivos Adjuntos:</b>
          </p>
          <div className="attached">
            <div className="file">
              <img src="/icons/image.svg" alt="" />
            </div>

            <div className="file">
              <img src="/icons/file.svg" alt="" />
            </div>

            <div className="file">
              <img src="/icons/folder.svg" alt="" />
            </div>
          </div>

          <div className="mt-5">
            <p>Comentariso públicos:</p>

            <div className="comments-box">
              <div className="comment">
                <div className="user">
                  <img src="/img/avatar.jpg" width={"100%"} alt="" />
                </div>

                <div className="content">
                  <b>Johan Castillo</b>
                  <p>¿En que formato se relizará la investigación?</p>
                </div>
              </div>

              <div className="comment">
                <div className="user">
                  <img src="/img/avatar2.png" width={"100%"} alt="" />
                </div>

                <div className="content">
                  <b>Andreina Garcia</b>
                  <p>Profe ¿El trabajo puede ser grupal?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <p className="mt-4">Cargar actividad:</p>
          <div className="upload">
            <img src="/icons/plus-circle.svg" width={"60px"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
