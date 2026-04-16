
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ModalContacto } from '@/components/ModalContacto'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { ZoomManager } from '@/components/ZoomManager'
import { PageWrapper } from '@/components/PageWrapper'
import { ScrollProgress } from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'

import Home from '@/pages/Home'
import Nosotros from '@/pages/Nosotros'
import Viandas from '@/pages/Viandas'
import Congelados from '@/pages/Congelados'
import Contacto from '@/pages/Contacto'
import Blog from '@/pages/Blog'
import Distribucion from '@/pages/Distribucion'
import Privacidad from '@/pages/Privacidad'
import AvisoLegal from '@/pages/AvisoLegal'
import Cookies from '@/pages/Cookies'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/nosotros" element={<PageWrapper><Nosotros /></PageWrapper>} />
        <Route path="/viandas-corporativas" element={<PageWrapper><Viandas /></PageWrapper>} />
        <Route path="/congelados" element={<PageWrapper><Congelados /></PageWrapper>} />
        <Route path="/distribucion" element={<PageWrapper><Distribucion /></PageWrapper>} />
        <Route path="/contacto" element={<PageWrapper><Contacto /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/privacidad" element={<PageWrapper><Privacidad /></PageWrapper>} />
        <Route path="/legal" element={<PageWrapper><AvisoLegal /></PageWrapper>} />
        <Route path="/cookies" element={<PageWrapper><Cookies /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router basename="/Aldeitas">
      <ScrollToTop />
      <ZoomManager />
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <ModalContacto />
      <WhatsAppFloat />
    </Router>
  )
}

export default App
