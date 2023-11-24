import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './PriveteRoute'
import { useDispatch } from 'react-redux'
import { fetchMenuData } from './store/slices/menuSlice'
import './index.css'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMenuData())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/DeliveryFood' element={<Home />} />
        <Route
          path='/DeliveryFood/restaurant'
          element={
            <PrivateRoute>
              <Restaurant />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
