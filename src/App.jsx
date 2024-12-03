import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './components/store/storeContext'
import Recipe from './components/pages/backend/partials/recipe/Recipe'
import HomePage from './components/pages/frontend/homepage/HomePage'

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/admin/recipe' element={<Recipe/>}/>
        </Routes>
      </Router>
    </StoreProvider>
  )
}

export default App