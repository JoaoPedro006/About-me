import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import github from "../../components/Container/imagens/github.png"
import linkedin from "../../components/Container/imagens/linkedin.png"
import gmail from "../../components/Container/imagens/gma.png"
import HeaderResponsivo from "../HeaderResponsivo";

function Header() {
  return (
    <>
      <HeaderResponsivo />
    <div className={styles.header}>
      <div className={styles.links}>
      <Link to="/Home">Home</Link>
      <Link to="/Certificacoes">Sobre</Link>
      <Link to="/Projetos">Projetos</Link>
      <Link to="/Habilidades">Habilidades</Link>
      </div>{/* links */}

      <div className={styles.linkGit}>
                    <div>
                    <Link to="https://www.linkedin.com/in/jo%C3%A3o-pedro-maia-pinheiro-23532a269/">
                    <img id="link-linkedin" src={linkedin} className={styles.img} alt="img1"/>
                    </Link>
                    </div>

                    <div>
                    <Link to="https://github.com/JoaoPedro006?tab=repositories">
                    <img id="link-github" src={github} className={styles.img} alt="img1"/>
                    </Link>
                    </div>

                    <div>
                        <img id="link-gmail" src={gmail} className={styles.img} alt="img1"/>
                    </div>
                </div>
    </div>
    </>
  );
}

export default Header;
