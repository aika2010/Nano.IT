import React from 'react'


import Home from '../Home/Home'
import Advantages from '../Advantages/Advantages'
import Onlain from '../Onlain/Onlain'
import Study from '../Study/Study'
import WeHave from '../WeHave/WeHave'
import Directions from '../Directions/Directions'

import Question from '../Question/Question'

function Main() {
  return (
    <main className='Main'>
      <div className="container">
      <Home />
      <Advantages />
      <Onlain />
      <Study />
      <Question />
      <WeHave />
      <Directions />


      </div>
  





    </main>
  )
}

export default Main
