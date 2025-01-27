import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Content />

    </main>
  )
}

export default App