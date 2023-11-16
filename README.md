<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bikeisure - README</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            color: #0366d6;
        }

        h2 {
            color: #1f6feb;
        }

        p {
            line-height: 1.6;
        }

        code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
        }
    </style>
</head>

<body>
    <h1>Bikeisure</h1>

    <p><strong>Descrição:</strong> Bikeisure é um aplicativo web desenvolvido para facilitar o processo de abertura de seguros relacionados a bicicletas. O aplicativo utiliza tecnologias como React, TensorFlow.js, Tesseract.js e outras para realizar uma vistoria virtual das bicicletas, garantindo a integridade das informações e acelerando o processo de análise de aberturas de seguros.</p>

    <h2>Funcionalidades Principais</h2>

    <ul>
        <li><strong>Vistoria Virtual:</strong> Captura de fotos da bicicleta em diferentes etapas do processo de vistoria. Utilização da biblioteca TensorFlow.js para detecção de objetos, identificando a presença da bicicleta nas imagens.</li>
        <li><strong>Validação Automática:</strong> Validação automática das imagens capturadas, garantindo que atendam aos critérios necessários para o processo de sinistro.</li>
        <li><strong>Extração de Texto:</strong> Utilização da biblioteca Tesseract.js para extrair texto das imagens, com foco na identificação do número de série da bicicleta. (Nota: A validação do número de série ainda está sendo aprimorada.)</li>
        <li><strong>Feedback Interativo:</strong> Feedback imediato ao usuário sobre a aprovação ou reprovação das fotos capturadas.</li>
        <li><strong>Conclusão da Vistoria:</strong> Após a conclusão das etapas de vistoria, o usuário recebe a confirmação da aprovação da vistoria.</li>
    </ul>

    <p><strong>Tecnologias Utilizadas:</strong> React, TensorFlow.js, Tesseract.js, react-webcam, react-modal</p>

    <p>Nota: A validação do número de série está em constante aprimoramento, assim como a detecção de fotos digitais, como aquelas capturadas de outras telas contendo uma bicicleta.</p>
</body>

</html>
