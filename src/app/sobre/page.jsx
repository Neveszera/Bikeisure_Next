import React from 'react';
import Neves from '../../../public/img/Neves.png'
import Renata from '../../../public/img/Renata.jpeg'
import Daniel from '../../../public/img/Daniel.png'
import Sampaio from '../../../public/img/Sampaio.png'
import Rafael from '../../../public/img/Rafael.jpg'


const membrosDaEquipe = [
    {
        id: 1,
        nome: "Renata Belila",
        rm: "RM552315",
        turma: "1TDSPG",
        funcao: "Database Developer",
        linkedin: 'https://www.linkedin.com/in/renata-belila-b99110260/',
        cor: "#479f57",
        instagram: 'https://www.instagram.com/renata_belila/',
        github: '',
        imagem: Renata,
    },
    {
        id: 2,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: 'https://www.linkedin.com/in/-gabriel-neves/',
        instagram: 'https://instagram.com/neveeszera?igshid=NGVhN2U2NjQ0Yg==',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
    {
        id: 3,
        nome: "Rafael Henrique",
        rm: "RM552422",
        turma: "1TDSPM",
        cor: "black",
        funcao: "Automation with Python",
        linkedin: 'https://www.linkedin.com/in/rafael-henrique-de-mendon%C3%A7a-51263326b/',
        instagram: 'https://www.instagram.com/rafaelhm015/',
        github: 'https://github.com/rhmendonca',
        imagem: Rafael,
    },
    {
        id: 4,
        nome: "Daniel Stuart",
        rm: "RM550897",
        turma: "1TDSPI",
        funcao: "Java Developer",
        cor: "red",
        linkedin: 'https://www.linkedin.com/in/daniel-monteiro-731267275/',
        instagram: 'https://instagram.com/_daniel_stuart?igshid=NGVhN2U2NjQ0Yg==',
        github: 'https://github.com/DanielStuart2',
        imagem: Daniel,
    },
    {
        id: 5,
        nome: "Gabriel Sampaio",
        rm: "RM",
        turma: "1TDSPI",
        funcao: "Automation with Python",
        cor: "yellow",
        linkedin: 'https://www.linkedin.com/in/gabrielsampaiogianini/',
        instagram: '#',
        github: '#',
        imagem: Sampaio,
    },
];

export default function Sobre() {

    return (
        <>
            <section>
                <div>
                    <div>
                        <h1>Sobre a Bikeisure</h1>
                        <p>
                            A Bikeisure oferece proteção confiável e personalizada para ciclistas em todo o país. Nosso compromisso com a excelência, integridade e inovação nos torna a escolha ideal para quem busca segurança durante suas pedaladas.
                        </p>
                        <p>
                            Nossa visão é ser líder no setor, fornecendo soluções adaptadas às necessidades individuais dos ciclistas. Entre em contato conosco e desfrute de uma proteção completa para suas pedaladas, com o atendimento personalizado que você merece.
                        </p>
                        <br />
                        <h1>Nossa Equipe:</h1>
                    </div>
                </div>
            </section>

            <section>
                {membrosDaEquipe.map((membro) => (
                    <div style={{ backgroundColor: membro.cor }} key={membro.id}>
                        <img src={membro.imagem} alt={`Foto de ${membro.nome}`} />
                        <h3>{membro.nome}</h3>
                        <p>{membro.rm}</p>
                        <p>{membro.turma}</p>
                        <p>{membro.funcao}</p>
                        <div>
                            <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                                <i ></i>
                            </a>
                            <a href={membro.instagram} target="_blank" rel="noopener noreferrer">
                                <i ></i>
                            </a>
                            <a href={membro.github} target="_blank" rel="noopener noreferrer">
                                <i></i>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </>

    );
}