import styles from "./PagDiferentes.module.css";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import proj1f1 from "./proj1/proj-8-fot1.png";
import proj1f2 from "./proj1/proj-8-fot2.png";
import proj1f3 from "./proj1/proj-8-fot3.png";
import proj1f4 from "./proj1/proj-8-fot4.png";
import proj1f5 from "./proj1/proj-8-fot5.png";
import proj2f1 from "./proj2/proj-9-fot1.png";
import proj2f2 from "./proj2/proj-9-fot2.png";
import proj2f3 from "./proj2/proj-9-fot3.png";
import proj2f4 from "./proj2/proj-9-fot4.png";
import proj3f1 from "./proj3/proj-3-inicio.png";
import proj3f2 from "./proj3/proj-3-fot1.png";
import proj3f3 from "./proj3/proj-3-fot2.png";
import proj3f4 from "./proj3/proj-3-fot-3.png";
import fot4Proj3 from "./proj3/proj-3-fot-4.png"
import fot6Proj3 from "./proj3/proj-3-fot-5.png"

const projeto1 =[proj1f1, proj1f2, proj1f3, proj1f4, proj1f5]
const projeto2 =[proj2f1, proj2f2, proj2f3, proj2f4]
const projeto3 =[proj3f1, proj3f2, proj3f3, proj3f4, fot4Proj3, fot6Proj3]

function PagDiferentes() {

  const carousel1 = useRef();
  const carousel2 = useRef();
  const carousel3 = useRef();
  
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [width3, setWidth3] = useState(0);

  // Eu basicamente tô subtraindo a largura inicial = 0, menos a largura total = 3560px
  // Após isso eu vou no inner e dizer até aonde deve rolar pro lado

  useEffect(()=>{
    console.log(carousel1.current?.scrollWidth, carousel1.current?.offsetWidth)
    setWidth1(carousel1.current?.scrollWidth - carousel1.current?.offsetWidth)
  },[])

  useEffect(()=>{
    console.log(carousel2.current?.scrollWidth, carousel2.current?.offsetWidth)
    setWidth2(carousel2.current?.scrollWidth - carousel2.current?.offsetWidth)
  },[])

  useEffect(()=>{
    console.log(carousel3.current?.scrollWidth, carousel3.current?.offsetWidth)
    setWidth3 (carousel3.current?.scrollWidth - carousel3.current?.offsetWidth)
  },[])
  return (
    <div className={styles.home}>
      <div className={styles.textoChave}>
      <motion.h1 
      initial={{x: 200}}
      animate={{x: -20}}
      transition={{duration: 0.9}}>
        <h2>Projetos Pessoais</h2>
      </motion.h1>
      </div>

        <div className={styles.texto}>
          <div>
          <h2>Loja de Roupas - (Clouthing Store)</h2>
          <p>Fiz um Website de uma loja de roupas.  Utilizei poucas animações com JavaScript, basicamente fiz um site simples
            visando uma boa estética. O que utilizei basicamente foi HTML5 e CSS3.
          </p>
          <a href="https://github.com/JoaoPedro006/Clothing-store-website" className={styles.linkgitref}>Ver no github</a>
          </div>
        </div>
        <div className={styles.projetos}>
            <motion.div ref={carousel1} className={styles.carousel} whileTap={{cursor: 'grabbing'}}>
                <motion.div className={styles.inner}
                drag='x' 
                dragConstraints={{ right:0, left: -width1 }}
                initial={{x: 200}}
                animate={{x: -20}}
                transition={{duration: 0.9}}
                >

                  {projeto1.map(image => (
                    <motion.div key={image} className={styles.item}>
                      <img src={image} alt="texto alternativo" className={styles.persImage}/>
                    </motion.div>
                  ))}

                </motion.div>
            </motion.div>

        </div>{/* projetos */}

        <div className={styles.texto}>
          <div>
          <h2>Website de Relógios</h2>
          <p>Esse projeto foi um pouco mais desafiador, pois foi meu primeiro projeto
            utilizando o framework Materialize, mas também utilizei um pouco de Jquery
            e CSS para fazer. Porém o lado bom de usar um framework como materialize, que é
            o fato de ele ser interativo e principalmente ser responsivo.
          </p>
          <a href="https://github.com/JoaoPedro006/Stores-Clock" className={styles.linkgit}>Ver no github           <a href="https://portiflio-joaopedr0006-lojade-relogio.netlify.app" className={styles.deploy}>Ver Site</a></a>
          </div>
        </div>

        <div className={styles.projetos}>
            <motion.div ref={carousel2} className={styles.carousel2} whileTap={{cursor: 'grabbing'}}>
                <motion.div className={styles.inner}
                drag='x' 
                dragConstraints={{ right:0, left: -width2 }}
                initial={{x: 200}}
                animate={{x: -20}}
                transition={{duration: 0.9}}
                >

                  {projeto2.map(image => (
                    <motion.div key={image} className={styles.item}>
                      <img src={image} alt="texto alternativo" className={styles.persImage}/>
                    </motion.div>
                  ))}

                </motion.div>
            </motion.div>

        </div>{/* projetos */}

        <div className={styles.texto}>
          <div>
          <h2>Website de Cafeteria</h2>
          <p>Gostei muito de fazer esse projeto pois é uma particularidade minha gostar de
            fazer esses websites de cafeteria. Antes de faze-lo, vi diversos exemplos na internet,
             principalmente de grandes nomes de lojas como por exemplo Starbucks, Nescafé e outros.
          </p>
          <a href="https://github.com/JoaoPedro006/Clothing-store-website" className={styles.linkgit}>Ver no github <a href="https://portifolio-cafeteria-joaopedro006.netlify.app" className={styles.deploy}>Ver Site</a></a>         
          </div>
        </div>

        <div className={styles.projetos}>
            <motion.div ref={carousel3} className={styles.carousel3} whileTap={{cursor: 'grabbing'}}>
                <motion.div className={styles.inner}
                drag='x' 
                dragConstraints={{ right:0, left: -width3 }}
                initial={{x: 200}}
                animate={{x: 0}}
                transition={{duration: 0.9}}
                >

                  {projeto3.map(image => (
                    <motion.div key={image} className={styles.item}>
                      <img src={image} alt="texto alternativo" className={styles.persImage}/>
                    </motion.div>
                  ))}

                </motion.div>
            </motion.div>

        </div>{/* projetos */}


      </div>
  );
}

export default PagDiferentes;