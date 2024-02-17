import Header from "../../../components/Header";
import styles from "./Habilidades.module.css";
import {motion} from "framer-motion";
import Img1 from "./Images/html-icon.png"
import Img2 from "./Images/css-icon.png"
import Img3 from "./Images/js-icon.png"
import Img4 from "./Images/jquery.png"
import Img5 from "./Images/mate.png"
import Img6 from "./Images/react.png"

function Habilidades() {

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.habilidades}>
        <div className={styles.textoChave}>
        <motion.h1 
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{duration: 0.9}}>
          <h2>Habilidades</h2>
        </motion.h1>
        </div>
      </div>

      <div className={styles.TextoPai}>
        <div className={styles.textoBox}>
          <h2>Desenvolvimento Front-end</h2>
          <h5>Transformo conceitos em interfaces intuitivas e visualmente atraentes, utilizando HTML, CSS e JavaScript para 
            criar experiências digitais memoráveis.</h5>
        </div>
        <div className={styles.textoBox}>
        <h2>Design Responsivo</h2>
          <h5>Capacidade de criar interfaces que se adaptam a diferentes dispositivos e tamanhos de tela, proporcionando 
          uma experiência consistente e acessível.</h5>
        </div>
        <div className={styles.textoBox}>
          <h2>Conhecimento em Frameworks </h2>
          <h5>Capacidade de utilizar frameworks como React, Materialize e JQuery para desenvolver 
              aplicações web escaláveis e eficientes.</h5>
        </div>
      </div>

      <div className={styles.linha}></div>
      <div className={styles.lenguages}>
        <h1>Linguagens e Frameworks</h1>
      </div>

      <motion.h1 
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{duration: 0.9}}>
      <div className={styles.Body}>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.Borda}>
              <img src={Img1} alt="imagem 1" />
            </div>
          </div>
          <div className={styles.box}>
          <div className={styles.Borda}>
            <img src={Img2} alt="imagem 1" />
          </div>
          </div>
          <div className={styles.box}>
          <div className={styles.Borda}>
            <img src={Img3} alt="imagem 1" />
            </div>
          </div>
          <div className={styles.box}>
          <div className={styles.Borda}>
            <img src={Img4} alt="imagem 1" />
            </div>
          </div>
          <div className={styles.box}>
          <div className={styles.Borda}>
            <img src={Img5} alt="imagem 1" className={styles.materialize} />
            </div>
          </div>
          <div className={styles.box}>
          <div className={styles.Borda}>
            <img src={Img6} alt="imagem 1" />
            </div>
          </div>
        </div>
      </div>
      </motion.h1>
    </div>
  );
}

export default Habilidades;