# Bikeisure

**Descrição:** Bikeisure é um aplicativo web desenvolvido para facilitar o processo de abertura de seguros relacionados a bicicletas. O aplicativo utiliza tecnologias como React, TensorFlow.js, Tesseract.js e outras para realizar uma vistoria virtual das bicicletas, garantindo a integridade das informações e acelerando o processo de análise de aberturas de seguros.

## Funcionalidades Principais

- **Vistoria Virtual:** Captura de fotos da bicicleta em diferentes etapas do processo de vistoria. Utilização da biblioteca TensorFlow.js para detecção de objetos, identificando a presença da bicicleta nas imagens.
- **Validação Automática:** Validação automática das imagens capturadas, garantindo que atendam aos critérios necessários para o processo de sinistro.
- **Extração de Texto:** Utilização da biblioteca Tesseract.js para extrair texto das imagens, com foco na identificação do número de série da bicicleta. (Nota: A validação do número de série ainda está sendo aprimorada.)
- **Feedback Interativo:** Feedback imediato ao usuário sobre a aprovação ou reprovação das fotos capturadas.
- **Conclusão da Vistoria:** Após a conclusão das etapas de vistoria, o usuário recebe a confirmação da aprovação da vistoria.

**Tecnologias Utilizadas:** React, TensorFlow.js, Tesseract.js, react-webcam, react-modal

Nota: A validação do número de série está em constante aprimoramento, assim como a detecção de fotos digitais, como aquelas capturadas de outras telas contendo uma bicicleta.
