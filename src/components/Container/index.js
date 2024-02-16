import styles from "./Container.module.css";
import foto1 from "./foto-1.png";
import iconHtml from "../Container/imagens/html-icon.png";
import iconCss from "../Container/imagens/css-icon.png";
import iconJs from "../Container/imagens/js-icon.png";
import iconJquey from "../Container/imagens/jquery.png";
import iconReact from "../Container/imagens/react.png";
import iconMaterialize from "../Container/imagens/mate.png";
import { Link } from "react-router-dom";

function Container() {
  // LinksLinkedin();
  // LinksGithub();
  // function LinksLinkedin(){
  //     var linkedin = document.getElementById('link-linkedin');
  //     linkedin.addEventListener('click',function(){
  //         window.location.href = "https://www.linkedin.com/in/jo%C3%A3o-pedro-maia-pinheiro-23532a269/";
  //     })
  // }
  // function LinksGithub(){
  //     var git = document.getElementById('link-github');
  //     git.addEventListener('click',function(){
  //         window.location.href = "https://github.com/JoaoPedro006?tab=repositories";
  //     })
  // }
  return (
    <div className={styles.geral}>
      <div className={styles.container}>
        <div className={styles.parte1}>
          <img src={foto1} alt="fotoUm" />
        </div>

        <div className={styles.parte2}>
          <div className={styles.parte2Geral}>
            <div className={styles.curriculo}>
              <Link to="https://drive.google.com/file/d/1DR9oghSed4xGxZCfBbkICKHj_rpXBohR/view?usp=drive_link">
              <h3>Acessar Curriculo</h3>
              </Link>
            </div>
            <div className={styles.icones}>
              <img src={iconHtml} alt="html" className={styles.icon} />
              <img src={iconCss} alt="css" className={styles.icon} />
              <img src={iconJs} alt="js" className={styles.icon} />
              <img src={iconJquey} alt="jquey" className={styles.icon} />
              <img src={iconReact} alt="react" className={styles.icon} />
              <img
                src={iconMaterialize}
                alt="Materialize"
                className={styles.Materialize}
              />
            </div>
            <h2>Desenvolvedor Front-end</h2>
            <h3>
              Olá, me chamo João Pedro, sou um estudante de Desenvolvimento
              Front-end há 8 meses e estou focado em desenvolver-me nessa área.
              Espero que gostem do meu portfólio!
            </h3>
          </div>
        </div>

        <div className={styles.opcoes}>
          <div className={styles.child}>
            <a href="/Home">Home</a>
          </div>
          <div className={styles.child}>
            <a href="/Certificacoes">Sobre</a>
          </div>
          <div className={styles.child}>
            <a href="/Projetos">Projetos</a>
          </div>
          <div className={styles.child}>
            <a href="/Habilidades">Habilidades</a>
          </div>
          
        </div>
      </div>
      //container
    </div>
  );
}

export default Container;
