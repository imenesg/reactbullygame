import React from "react";

import capaJogo from "../assets/img/bullycapa.jpg"

import "../assets/css/sobre.css"

function Sobre(){

   

    
    function verMais(){
         var textoEscondido = document.querySelector(".textoEscondido")
         var classedaDiv =  textoEscondido.classList.value

        textoEscondido.classList.toggle("escondido")
        textoEscondido.classList.toggle("aparecendo")


        console.log(classedaDiv);

        textodoBotao(classedaDiv)
    }


    function textodoBotao(classedaDiv){
        var textoBotao = document.querySelector(".textoBotao")
    
        console.log(typeof classedaDiv);

        if(classedaDiv == "textoEscondido escondido"){
            textoBotao.innerHTML= "ver menos"
        }
        else{
            textoBotao.innerHTML= "ver mais"
        }

    }
    return (
        <section className="sobre">
            <h1>Bully</h1>

            <div className="botaocompra"><a className="linkPadrao" href="https://store.rockstargames.com/pt-BR/game/buy-bully-scholarship-edition?_gl=1*vmgtna*_ga*MjExNjExMDQwLjE2NDQ3ODY1MjY.*_ga_PJQ2JYZDQC*MTY0NDc4NjUyNS4xLjEuMTY0NDc4NzU2MS4w">Compre agora</a> </div>
        
            <div className="containerImg">
                <img src={capaJogo} alt="capa jogo" />
            </div>
            
            <h2 className="descricao">Game Description</h2>

            <p>A tradição da Rockstar de oferecer inovação, jogabilidade original e narrativa irônica e bem-humorada invade um cenário totalmente diferente: o pátio da escola. No papel de um estudante endiabrado, você enfrentará valentões, será bode-expiatório de professores, irá pregar peças, ganhar ou perder a garota e finalmente aprender a superar os obstáculos da pior escola da área, a Bullworth Academy - uma escola preparatória corrupta e aos pedaços com falsa fama de ser ética.</p>
        

            <p className="textoEscondido escondido">A história acompanha Jimmy Hopkins, um adolescente que foi expulso de todas as escolas por que passou. Deixado à própria sorte após a mãe abandoná-lo em Bullworth para curtir a sua quinta lua de mel, Jimmy tem um ano escolar inteiro pela frente, enquanto trabalha para conseguir subir na escala social dessa instituição decadente onde supostamente o ensino é o foco, defendendo o que ele pensa ser correto e indo para cima dos mentirosos, trapaceiros e pretensiosos que são os membros mais populares do corpo estudantil. Se Jimmy conseguir sobreviver ao ano escolar e for mais esperto que os seus rivais, ele poderá controlar a escola.</p>
        

            <div className="linkPadrao vermais"><h3 onClick={verMais} className="textoBotao" >Ver mais</h3> </div>
        </section>
    )
}

export default Sobre; 