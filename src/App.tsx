import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
