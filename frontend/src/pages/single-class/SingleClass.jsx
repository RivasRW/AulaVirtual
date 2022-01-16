import "./SingleClass.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleClass({ params }) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/materias/" + params.id)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <div className="container">
      <img className="bannerImg" src={data.bannerImg} alt="" />

      <h1 className="mt-4">{data ? data.title : ""}</h1>

      <p>Descripción</p>

      <p>{data ? data.description : ""}</p>

      <br />

      <p>Asignaciones:</p>

      {data.todos
        ? data.todos.map((todo) => {
            return (
              <div className="todo">
                <div className="status-box">
                  <span>Status:</span>
                  <div
                    className={data.status ? "status " + data.status : "status"}
                  ></div>
                </div>
                <div className="content">
                  <span>{todo.title}</span>
                </div>
                <div className="note-box">
                  <span>Valor:</span>
                  <i>{todo.value}</i>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
