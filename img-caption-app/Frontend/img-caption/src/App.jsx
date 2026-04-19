import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Routes>
      <Route path='/create-post' element={<CreatePost/>}/>
      <Route path='/feed' element={<Feed/>}/>
    </Routes>
  )
}

export default App
