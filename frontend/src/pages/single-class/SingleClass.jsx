import "./SingleClass.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function SingleClass({ params }) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/materias/" + params.id)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        window.localStorage.setItem("subject", response.data.title);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  const handleTodo = () => {
    console.log(window.localStorage.getItem("subject"));
  };

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
              <Link to={"/todo/" + todo.id}>
                <div
                  className="todo"
                  key={todo.id}
                  onClick={(e) => handleTodo(e.target)}
                  data-id={todo.id}
                >
                  <div className="status-box">
                    <span>Status:</span>
                    <div
                      className={
                        data.status ? "status " + data.status : "status"
                      }
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
              </Link>
            );
          })
        : ""}
    </div>
  );
}
