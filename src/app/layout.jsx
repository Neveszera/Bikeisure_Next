import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'

export const metadata = {
  title: 'Bikeisure',
  description: 'Projeto Challenge FIAP + Porto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body>{children}</body>
    </html>
  )
}
