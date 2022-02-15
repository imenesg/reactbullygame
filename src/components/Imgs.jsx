import React from "react";

import "../assets/css/imgs.css"

import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"

function Imgs(){
    return(
        <section className="imgs">
            <h2>Imagens</h2>
            <div className="allImgs">
                <div className="imgGame"><img src={img1} alt="imagem do game" /></div>
                <div className="imgGame"><img src={img2} alt="imagem do game" /></div>
                <div className="imgGame"><img src={img3} alt="imagem do game" /></div>
                <div className="imgGame"><img src={img4} alt="imagem do game" /></div>
            </div>
            
        </section>
    )
}
export default Imgs; 