import "./Layout.css";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";

export default function Layout({ children }: any) {
  const [location, setLocation] = useLocation();
  const [tooltip, setTooltip] = useState(false);

  const handleTooltip = () => {
    setTooltip(!tooltip);
  };

  useEffect(() => {
    const contenedor: any = document.querySelector("#contenedor");
    const botonMenu: any = document.querySelector("#boton-menu");

    botonMenu?.addEventListener("click", () => {
      contenedor?.classList.toggle("active");
    });

    const comprobarAncho = () => {
      if (window.innerWidth <= 768) {
        contenedor.classList.remove("active");
      } else {
        contenedor.classList.add("active");
      }
    };

    comprobarAncho();

    window.addEventListener("resize", () => {
      comprobarAncho();
    });
  }, []);

  const logout = () => {
    window.localStorage.setItem("login", "false");
    setTooltip(false);
    setLocation("/login");
  };

  return (
    <div className="contenedor active" id="contenedor">
      <header className="header">
        <div className="contenedor-logo">
          <button id="boton-menu" className="boton-menu">
            <i className="fas fa-bars" />
          </button>
          <Link href="/">
            <a className="logo">
              <img src="/img/logo.png" alt="" width="156px" />
            </a>
          </Link>
        </div>
        <div className="barra-busqueda">
          <input type="text" placeholder="Buscar materias" />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="botones-header">
          <button>
            <i className="fas fa-bell" />
          </button>
          <a className="avatar" onClick={handleTooltip}>
            <img src="img/avatar.jpg" alt="" />
          </a>

          {tooltip ? (
            <div className="logout" onClick={logout}>
              <span>Cerrar sesión</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>

      <nav className="menu-lateral">
        <Link href="/">
          <a className="active">
            <i className="fas fa-home" /> Página Principal
          </a>
        </Link>

        <Link href="/record">
          <a>
            <i className="fas fa-fire" /> Record Academico
          </a>
        </Link>

        <Link href="/horario">
          <a>
            <i className="fas fa-star" /> Horario
          </a>
        </Link>
        <hr />
        <Link href="/pendientes">
          <a>
            <i className="fas fa-folder" /> Meterias Pendientes
          </a>
        </Link>
        <Link href="/nosotros">
          <a>
            <i className="fas fa-folder" /> Acerca de la Universidad
          </a>
        </Link>
      </nav>

      {children}
    </div>
  );
}
