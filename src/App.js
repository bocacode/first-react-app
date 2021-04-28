import React from 'react'
import Welcome from './components/Welcome'
import List from './components/List'
import Greeting from './components/Greeting'

function App() {
  return (
    <>
      <Welcome />
      <Greeting firstName="Ruu" />
      <Greeting firstName="Vitoria" />
      <Greeting firstName="Kevin" />
      <Greeting firstName="Jonah" />
      <Greeting firstName="Cesar" />
      <Greeting firstName="Nikki" />
      <Greeting firstName="Adrian" />
      <p>This is React!</p>
      <List />
    </>
  )
}

export default App
