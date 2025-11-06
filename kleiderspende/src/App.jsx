import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import RegisterDonation from './pages/RegisterDonation.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Impressum from './pages/Impressum.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-donation" element={<RegisterDonation />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
