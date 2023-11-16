import React from "react";
import Link from 'next/link';
import "../styles/not-found.css";


export default function NotFound() {

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Erro 404</h1>
        <p className="error-message">Página não encontrada</p>
      </div>
      <div className="error-link">
        <Link href="/">Voltar para o início</Link>
      </div>
    </div>
  );
}