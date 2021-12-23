import { useEffect } from "react";


export default function Layout({children}:any) {
    
    useEffect(() => {
        const contenedor:any = document.querySelector("#contenedor");
        const botonMenu:any = document.querySelector("#boton-menu");
    
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

    return (
        <div className="contenedor active" id="contenedor">
      <header className="header">
        <div className="contenedor-logo">
          <button id="boton-menu" className="boton-menu">
            <i className="fas fa-bars" />
          </button>
          <a href="#" className="logo">
            <i className="fas fa-play" /> <span>JcTube</span>
          </a>
        </div>
        <div className="barra-busqueda">
          <input type="text" placeholder="Buscar" />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="botones-header">
          <button>
            <i className="fas fa-upload" />
          </button>
          <button>
            <i className="fas fa-th" />
          </button>
          <button>
            <i className="fas fa-bell" />
          </button>
          <a href="#" className="avatar">
            <img src="img/avatar.jpg" alt="" />
          </a>
        </div>
      </header>
      <nav className="menu-lateral">
        <a href="#" className="active">
          <i className="fas fa-home" /> Página Principal
        </a>
        <a href="#">
          <i className="fas fa-fire" /> Record Academico
        </a>
        <a href="#">
          <i className="fas fa-star" /> Horario
        </a>
        <hr />
        <a href="#">
          <i className="fas fa-folder" /> Meterias Pendientes
        </a>
        <a href="#">
          <i className="fas fa-folder" /> Acerca de la Universidad
        </a>
      </nav>

        {children}
            
        </div>
    )
}
