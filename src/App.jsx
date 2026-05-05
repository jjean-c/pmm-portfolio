import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}
