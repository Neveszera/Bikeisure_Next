"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import "../../styles/Cabecalho.css"

const Cabecalho = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav className={nav_header ${menuOpen ? 'active' : ''}}>
          <div className="logo">
            <h1>Bikeisure</h1>
            <button className={nav_toggle ${menuOpen ? 'active' : ''}} aria-expanded={menuOpen} aria-label="menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className={nav_menu ${menuOpen ? 'active' : ''}}>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/login">Entrar</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Cabecalho;