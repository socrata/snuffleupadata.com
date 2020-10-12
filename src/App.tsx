import React from 'react'
import logo from './logo.svg'
import 'lightbox2/dist/js/lightbox-plus-jquery'
import './js/snuffleupadata'
import HomePage from './pages/home'
import './App.css'
import './styles/index.scss'

function App () {
  return (
    <div id='app' className='App container-fluid content'>
      <header />
      <HomePage />
    </div>
  )
}

export default App
