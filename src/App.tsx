import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Index from './pages';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
