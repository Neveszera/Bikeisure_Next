"use client"

import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'

import React from 'react';
import Link from 'next/link';
import PlanosCarousel from '../components/PlanosCarousel/PlanosCarousel'
import Faq from '../components/Faq/Faq'
import Image from 'next/image';
import "../styles/Home.css";
import "./globals.css"

export default function Home() {
  return (
    <>
    <Cabecalho/>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <Image
              src="/img/ciclista.png"
              alt="Desenho Ciclista"
              width={500}
              height={500}
            />
          </div>
          <div className="hero-text">
            <h1>Pedale com confiança, proteção em cada trajeto.</h1>
            <p>Na Bikeisure, oferecemos seguros abrangentes para proteger suas pedaladas e o que você mais ama.</p>
            <Link href="/cadastroPessoa">
              <button>Contratar Agora</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='planos'>
        <PlanosCarousel />
      </section>

      <Faq />
      <Rodape/>
    </>
  );
}