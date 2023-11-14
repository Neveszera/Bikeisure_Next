import Header from '@/components/Cabecalho/Cabecalho'

export const metadata = {
  title: 'Bikeisure',
  description: 'Projeto Challenge FIAP + Porto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Header/>
      <body>{children}
      
      
      
      </body>
    </html>
  )
}
