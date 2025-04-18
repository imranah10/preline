import React from 'react'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/Hero'
import { Success } from './components/Success'
import { Reviews } from './Reviews'
import { Approach } from './Approach'

function App() {


  return (
    <>
    <div>
    <div className='bg-gradient-to-b from-[#171717] via-[#242323] to-[#081231] w-full pb-14'>
     <Header/>
     <Hero/>
     <Success/>
    </div>
    <Reviews/>
    <Approach/>
    </div>
    </>
  )
}

export default App
