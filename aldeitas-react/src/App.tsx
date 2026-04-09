import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ModalContacto } from '@/components/ModalContacto'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { ZoomManager } from '@/components/ZoomManager'

import Home from '@/pages/Home'
import Nosotros from '@/pages/Nosotros'
import Viandas from '@/pages/Viandas'
import Congelados from '@/pages/Congelados'
import Contacto from '@/pages/Contacto'
import Blog from '@/pages/Blog'
import Privacidad from '@/pages/Privacidad'

function App() {
  return (
    <Router>
      <ZoomManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/viandas-corporativas" element={<Viandas />} />
        <Route path="/congelados" element={<Congelados />} />
        <Route path="/distribucion" element={<Congelados />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
      <Footer />
      <ModalContacto />
      <WhatsAppFloat />
    </Router>
  )
}

export default App
