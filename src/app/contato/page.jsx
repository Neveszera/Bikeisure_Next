import React from 'react';

export default function Contato() {
  return (
    <>
      <div>
        <div>
          <h2>Entre em Contato</h2>
          <p>Estamos aqui para ajudar. Envie-nos uma mensagem e entraremos em contato o mais rápido possível.</p>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
            <div>
              <label htmlFor="assunto">Assunto</label>
              <input type="text" id="assunto" name="assunto" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="4" ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}