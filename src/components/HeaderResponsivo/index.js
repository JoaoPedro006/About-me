import "./styles.css";
import img from "./menu.png";
import { useRef, useState } from "react";
import { useOutsideCLick } from "./UseOutsideClick";

function HeaderResponsivo() {
  const dropDownRef = useRef(null);
  const [isActive, setisActive] = useState(false);
  const onClick = () => setisActive(!isActive);

  console.log(isActive);

  return (
    <>
      <div className="container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-button" >
            <img 
            
            src={img} className="imagem" alt="menu" />
          </button>

          <div className="boxes">

          <nav
            ref={dropDownRef}
            className={`home ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li className="box">
                <a className="li-a" href="/Home">Home</a>
              </li>
              <li className="box">
                <a className="li-a" href="/Certificacoes">Sobre</a>
              </li>
              <li className="box">
                <a className="li-a" href="/Projetos">Projetos</a>
              </li>
              <li className="box">
                <a className="li-a" href="/Habilidades">Habilidades</a>
              </li>
              <li className="box">
                <a className="li-a" href="https://www.linkedin.com/in/jo%C3%A3o-pedro-maia-pinheiro-23532a269/">Perfil Linkedin</a>
              </li>
              <li className="box">
                <a className="li-a" href="https://github.com/JoaoPedro006?tab=repositories">Repositório Github</a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>

      {/* <div className="menuGeral">
        <div className="menu">
        <div className="box">
        <Link to="">Sobre</Link>
        </div>
        <div className="box">
        <Link to="">Projetos</Link>
        </div>
        <div className="box">
        <Link to="">Habilidades</Link>
        </div>
        <div className="box">

        <Link to="">Certificados</Link>
        </div>
        </div>
    </div> */}
    </>
  );
}

export default HeaderResponsivo;
