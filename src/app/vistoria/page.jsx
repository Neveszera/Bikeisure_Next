"use client"

import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import dynamic from 'next/dynamic';
import Modal from 'react-modal';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import Tesseract from 'tesseract.js';
import styles from '../../styles/vistoria.module.css';
import '../globals.css';


const Vistoria = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);
  const webcamRef = useRef(null);
  const [validatedImages, setValidatedImages] = useState([]);
  const [validationFailed, setValidationFailed] = useState(false);
  const [bicycleDetected, setBicycleDetected] = useState(false);
  const [isVistoriaApproved, setIsVistoriaApproved] = useState(false);
  const [extractedText, setExtractedText] = useState('');

  const stepMessages = [
    'Tire uma foto da bicicleta completa',
    'Tire uma foto da roda dianteira',
    'Tire uma foto da roda traseira',
    'Tire uma foto do quadro',
    'Tire uma foto do número de série na bicicleta',
  ];

  const InstructionsModal = () => (
    <Modal
      isOpen={showInstructionsModal}
      onRequestClose={() => setShowInstructionsModal(false)}
      contentLabel="Instruções"
      className={styles['modal']}
    >
      <h2>Instruções para a Foto {currentStep}</h2>
      <p>{stepMessages[currentStep - 1]}</p>
      <button onClick={() => setShowInstructionsModal(false)}>Fechar</button>
    </Modal>
  );

  const captureImage = async () => {
    setIsCapturing(true);

    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    if (currentStep === 5) {
      const serialNumber = await extractSerialNumber(imageSrc);

      if (serialNumber && isValidSerialNumber(serialNumber)) {
        setModalMessage('Número de série aprovado: ' + serialNumber);
        setExtractedText(serialNumber);
        setValidationFailed(false);
      } else {
        setModalMessage('Número de série inválido, tente novamente');
        setValidationFailed(true);
      }
    } else {
      const model = await cocossd.load();
      const imgElement = document.createElement('img');
      imgElement.src = imageSrc;
      await imgElement.decode();
      const predictions = await model.detect(imgElement);

      let isValid = false;

      if (currentStep === 1) {
        const bicyclePredictions = predictions.filter(
          (prediction) => prediction.class === 'bicycle'
        );

        if (bicyclePredictions.length > 0) {
          setBicycleDetected(true);
          isValid = true;
        }
      } else if (currentStep >= 2 && currentStep <= 4) {
        isValid = predictions.some(
          (prediction) =>
            prediction.class === 'bicycle' && prediction.score >= 0.5
        );
      }

      if (isValid) {
        setModalMessage('Foto aprovada! ' + stepMessages[currentStep - 1]);
        setValidatedImages((prevImages) => [...prevImages, imageSrc]);
        setValidationFailed(false);
      } else {
        setModalMessage(
          'Foto Reprovada! ' + stepMessages[currentStep - 1] + '. Tire outra foto.'
        );
        setValidationFailed(true);
      }
    }

    setIsCapturing(false);
    setIsModalOpen(true);
  };

  const handleNextStep = () => {
    setIsModalOpen(false);
    setCapturedImage(null);

    if (validationFailed) {
      setShowInstructionsModal(true);
    } else if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      setShowInstructionsModal(true);
      setBicycleDetected(false);
    } else {
      console.log('Imagens validadas:', validatedImages);
      setIsVistoriaApproved(true);
    }
  };

  useEffect(() => {
    tf.setBackend('webgl');
  }, []);

  const mobileWebcamOptions = {
    facingMode: 'environment',
  };

  const extractSerialNumber = async (imageSrc) => {
    const { data: { text } } = await Tesseract.recognize(imageSrc, 'eng');
    return text;
  };

  const isValidSerialNumber = (serialNumber) => {
    return true; 
  };

  return (
    <div className={styles['vistoria-container']}>
      <InstructionsModal />
      <div className={styles['vistoria-header']}>
        <h1>Bikeisure</h1>
        <h3>Etapa 3 - 3</h3>
        <p>
          Nessa etapa faça a captura de fotos da sua bicicleta para a validação e continuação do processo de abertura
        </p>
        <h3>Foto {currentStep} - 5</h3>
      </div>

      <div className={styles['vistoria-content']}>
        {capturedImage ? (
          <div>
            <img src={capturedImage} alt="Imagem Capturada" className={styles['captured-image']} />
          </div>
        ) : (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className={styles['webcam']}
              videoConstraints={mobileWebcamOptions}
            />
            <button onClick={captureImage} className={styles['capture-button']} disabled={isCapturing}>
              {isCapturing ? 'Capturando...' : 'Capturar Imagem'}
            </button>
          </div>
        )}
      </div>

      <div className={styles['vistoria-button']}>
        {currentStep === 5 ? (
          <button onClick={handleNextStep}>
            {isVistoriaApproved ? 'Vistoria Aprovada' : 'Concluir Vistoria'}
          </button>
        ) : (
          <button onClick={handleNextStep} disabled={!capturedImage || isCapturing || !bicycleDetected}>
            {isCapturing ? 'Aguarde...' : 'Próxima Etapa'}
          </button>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Foto Aprovada"
        className={styles['modal']}
      >
        <h2>Validação</h2>
        <p>{modalMessage}</p>
        {extractedText && (
          <div>
            <p>Número de série extraído: {extractedText}</p>
          </div>
        )}
        <button onClick={handleNextStep}>Ok</button>
      </Modal>

      {isVistoriaApproved && (
        <Modal
          isOpen={isVistoriaApproved}
          onRequestClose={() => setIsVistoriaApproved(false)}
          contentLabel="Imagens Validadas"
          className={styles['modal']}
        >
          <h2>Vistoria Aprovada</h2>
          <p>As imagens validadas estão abaixo:</p>
          <div className={styles['validated-images']}>
            {validatedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagem Validada ${index + 1}`}
                className={styles['validated-image']}
              />
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Vistoria;
