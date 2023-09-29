import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MainPage/>}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
