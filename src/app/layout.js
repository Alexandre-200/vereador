

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import VLibras from 'vlibras-nextjs';

export const metadata = {
  title: "Almeida 12345",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        


        {children}
        <Footer/>
      </body>
    </html>
  );
}
