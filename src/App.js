import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/Delivery_Food' element={<Home />} />
        <Route
          path='/Delivery_Food/restaurant'
          element={<Restaurant />}
          caseSensitive={true}
        />
      </Routes>
    </Router>
  )
}

export default App
