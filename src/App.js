import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/DeliveryFood' element={<Home />} />
        <Route
          path='/DeliveryFood/restaurant'
          element={<Restaurant />}
          caseSensitive={true}
        />
      </Routes>
    </Router>
  )
}

export default App
