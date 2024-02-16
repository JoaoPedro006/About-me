import styles from "./ComponentCertificacoes.module.css"
import {motion} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import proj1f1 from "./img/img1ofc.png";
import proj1f2 from "./img/img2.png";
import proj1f3 from "./img/img3.png";
import Header from "../Header";
import foto from "./img/Design sem nome-Photoroom.png-Photoroom.png"
import { Link } from "react-router-dom";

const projeto1 =[proj1f1, proj1f2, proj1f3]

function ComponentCertificacoes(){

    const carousel1 = useRef();
    
    const [width1, setWidth1] = useState(0);

    useEffect(()=>{
        console.log(carousel1.current?.scrollWidth, carousel1.current?.offsetWidth)
        setWidth1(carousel1.current?.scrollWidth - carousel1.current?.offsetWidth)
      },[])

    return(
        <div className={styles.geral}>
            <Header />

            <div className={styles.body}>

            <div className={styles.frase}><h1>Sobre mim</h1></div>
            <div className={styles.foto}>
                <img src={foto} alt="hjasdsd" className={styles.fotojp}/>
            </div>

            <div className={styles.bio}>
                <h4>Olá! Sou João Pedro Maia Pinheiro, um estudante de 17 anos apaixonado
                por tecnologia e atualmente cursando Análise e 
                Desenvolvimento de Sistemas. Estou em busca de oportunidades de estágio 
                na área de Desenvolvimento Front-end, onde posso aplicar e aprimorar 
                meus conhecimentos teóricos e práticos. Tenho interesse em expandir minha
                 expertise para áreas como Análise de Dados e Segurança da Informação ao 
                 longo da minha trajetória profissional. Minha jornada acadêmica inclui 
                 certificações em Excel, Lógica de Programação, entre outras. Possuo 
                 habilidades em linguagens como HTML5, CSS3, JavaScript e frameworks como
                  React JS, além de experiência em design responsivo e manipulação DOM. 
                  Estou animado para contribuir e aprender em um ambiente profissionalmente 
                  desafiador. Você pode entrar em contato comigo pelo celular 55 85 999338238 ou 
                  pelo e-mail jpprofessionalit@gmail.com . </h4>
            </div>
                
            <div className={styles.contatos}>
            <div className={styles.ajusteContatos}>
                <div className={styles.childContatos}>
                    <Link to="https://www.linkedin.com/in/jo%C3%A3o-pedro-maia-pinheiro-23532a269/">Linkedin</Link>
                </div>
                <div className={styles.childContatos}>
                    <Link to="https://github.com/JoaoPedro006?tab=repositories">Github</Link>
                </div>
            </div>
            </div>
            {/* Texto de Título */}
                <div className={styles.titulo}>
                    <h2>Certificações</h2>
                </div>
                

            {/* Área dos Certificados */}
                <div className={styles.certificadosPai}>
                    <div className={styles.certificados}>
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
                        </div>
                    </div>{/* cetificados */}
                </div>{/* certificdosPai */}
            </div>{/* body */}
        </div>
    );
}

export default ComponentCertificacoes;