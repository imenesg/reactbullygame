import React from 'react'
import ReactDOM from 'react-dom'

import "../src/assets/css/reset.css"

import "../src/assets/css/body.css"

import App from './App'


import Header from "../src/components/header"
import Sobre from "../src/components/sobre"
import Trailer from "../src/components/trailer"
import Imgs from "../src/components/Imgs"
import Especificacoes from "../src/components/Especificacoes"
import Footer from "../src/components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Sobre />
    <Trailer />
    <Imgs />
    <Especificacoes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
