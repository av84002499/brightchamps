import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz'
import "./App.css"
import AddQuiz from './components/AddQuiz';
import Home from './components/Home';
function App() {
  return (
    <Router>
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/addQuiz" element={<AddQuiz />} />
        <Route path="/start" element={<Quiz />} />
  
    </Routes>
  </Router>
  )
}

export default App