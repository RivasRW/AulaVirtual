import { useLocation } from "wouter";
import CardClass from "../../components/card-class/CardClass";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [lessons, setLessons]: any = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (
      window.localStorage.getItem("login") === null ||
      window.localStorage.getItem("login") === "false"
    ) {
      console.log("No esta logueado");
      setLocation("/login");
    } else {
      axios
        .get("http://localhost:8080/materias")
        .then((response) => {
          let data = response.data;
          console.log(data);
          setLessons(data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <main className="main">
      <h3 className="titulo">Meterias</h3>
      {lessons ? (
        <div className="grid-videos">
          {lessons?.map((lesson: any) => {
            return <CardClass key={lesson.id} data={lesson} />;
          })}
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
