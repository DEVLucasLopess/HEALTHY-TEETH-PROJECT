import React from "react";
import { Link } from 'react-router-dom';

import './top.css';

const Top = () => {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-logo-box" to="/">
          <img className="topo-logo" src="assets/dente.png" alt="logo dentes-saudaveis" title="logo dentes saudáveis"/>
          <p className="topo-nome-empresa">Dentes Saudáveis</p>
        </Link>

        <nav className="topo-links">
          <Link className="topo-link" to="/">Home</Link>
          <Link className="topo-link" to="/contato">Contato</Link>
          <Link className="topo-link" to="/contato">Plano de saúde</Link>
        </nav>
      </div>
    </header>
  )
}

export default Top;