import Menu from "./Componentes/Menu";
import Footer from "./Componentes/Footer";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}