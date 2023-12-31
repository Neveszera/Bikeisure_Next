"use client"

import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import "../../styles/CadastroBike.css"


const CadastroBike = () => {
    const schema = Yup.object().shape({
        modelo: Yup.string().required('Campo obrigatório'),
        anoFabricacao: Yup.number()
            .required('Campo obrigatório')
            .positive('Deve ser um número positivo')
            .integer('Deve ser um número inteiro'),
        fabricante: Yup.string().required('Campo obrigatório'),
        numeroSerie: Yup.string().required('Campo obrigatório')
            .test('fileSize', 'A nota fiscal é muito grande. O tamanho máximo permitido é 5MB.', (value) => {
                if (!value) return true; // Permite que seja vazio
                return value.size <= 5000000;
            })
            .test('fileType', 'Formato de arquivo não suportado', (value) => {
                if (!value) return true; // Permite que seja vazio
                return ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(value.type);
            }),
        outrasNotasFiscais: Yup.mixed()
            .test('fileSize', 'O tamanho das notas fiscais é muito grande. O tamanho máximo permitido é 5MB.', (value) => {
                if (!value) return true; // Permite que seja vazio
                return value.size <= 5000000;
            })
            .test('fileType', 'Formato de arquivo não suportado', (value) => {
                if (!value) return true; // Permite que seja vazio
                return ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(value.type);
            }),
    });

    const formik = useFormik({
        initialValues: {
            modelo: '',
            anoFabricacao: '',
            fabricante: '',
            numeroSerie: '',
            notaFiscal: null,
            outrasNotasFiscais: null,
        },
        validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:8080/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Erro ao enviar dados para a API');
        }

        const responseData = await response.json();
        console.log('Resposta da API:', responseData);
      } catch (error) {
        console.error('Erro na requisição para a API:', error);
      }
    },
  });

    return (
        <div className="cadastro-container">
            <div className="left-column">
                <div className="d-shape">
                    <div className="text-content">
                        <h1>Bikeisure</h1>
                        <h3>Etapa 2 - 3</h3>
                        <p>Preencha o formulário ao lado com as informações da bike assegurada para prosseguimento da abertura do seguro.</p>
                    </div>
                </div>
            </div>

            <div className="right-column">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="modelo">Modelo</label>
                        <input
                            type="text"
                            id="modelo"
                            name="modelo"
                            value={formik.values.modelo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.modelo && formik.errors.modelo ? (
                            <div className="error-message">{formik.errors.modelo}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="anoFabricacao">Ano de Fabricação</label>
                        <input
                            type="text"
                            id="anoFabricacao"
                            name="anoFabricacao"
                            value={formik.values.anoFabricacao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.anoFabricacao && formik.errors.anoFabricacao ? (
                            <div className="error-message">{formik.errors.anoFabricacao}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="fabricante">Fabricante</label>
                        <input
                            type="text"
                            id="fabricante"
                            name="fabricante"
                            value={formik.values.fabricante}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.fabricante && formik.errors.fabricante ? (
                            <div className="error-message">{formik.errors.fabricante}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="numeroSerie">N° de Série</label>
                        <input
                            type="text"
                            id="numeroSerie"
                            name="numeroSerie"
                            value={formik.values.numeroSerie}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.numeroSerie && formik.errors.numeroSerie ? (
                            <div className="error-message">{formik.errors.numeroSerie}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="notaFiscal">Nota Fiscal</label>
                        <input
                            type="file"
                            id="notaFiscal"
                            name="notaFiscal"
                            onChange={(event) => {
                                formik.setFieldValue('notaFiscal', event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                            accept="image/jpeg, image/jpg, image/png, application/pdf"
                        />
                        {formik.touched.notaFiscal && formik.errors.notaFiscal ? (
                            <div className="error-message">{formik.errors.notaFiscal}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="outrasNotasFiscais">Outras Notas Fiscais</label>
                        <input
                            type="file"
                            id="outrasNotasFiscais"
                            name="outrasNotasFiscais"
                            onChange={(event) => {
                                formik.setFieldValue('outrasNotasFiscais', event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                            accept="image/jpeg, image/jpg, image/png, application/pdf"
                        />
                        {formik.touched.outrasNotasFiscais && formik.errors.outrasNotasFiscais ? (
                            <div className="error-message">{formik.errors.outrasNotasFiscais}</div>
                        ) : null}
                    </div>
                    <Link href="/vistoria">
                        <button type="submit">Próxima Etapa</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default CadastroBike;