import React from "react";

import "../assets/css/Especificacoes.css"

import imgidade from "../assets/img/14anos.png"

function Especificacoes (){
    return(
        <section className="especificacoes">
            <h2>Especificações</h2>

            <table>
  
  <tr>
    <td>Desenvolvedor</td>
    <td>Rockstar Vancouver</td>
    
  </tr>
  <tr>
    <td>Plataforma</td>
    <td>PS4, PC, PS3, Xbox 360, Wii, iOS, Android, PS2</td>
    
  </tr>

  <tr>
    <td>Data de Lançamento</td>
    <td>17 de outubro de 2006</td>
    
  </tr>

  <tr className="rating">
    <td>Rating</td>
    <td><img src={imgidade} alt="Não indicado para menosres de 14 anos" /></td>
    
  </tr>
  
</table>
        </section>
        
    )
}
export default Especificacoes ;