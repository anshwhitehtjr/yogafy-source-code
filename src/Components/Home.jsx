import React from 'react'
import Classesdisplay from './HomeComponents/Classesdisplay'
import Classnotdisplay from './HomeComponents/Classnotdisplay'
import Navtab from './HomeComponents/Navtab'

const Home = () => {
   let demoDesc = `In this class the student will learn the basics of yoga and Introduction to it.`

   return (
      <>
         {
            !localStorage.getItem('token')
               ? <Classnotdisplay />
               : <Classesdisplay classTitle='Introduction to Yoga' classDesc={ demoDesc } />
         }

         <div className="container">
            <h1>Assignments Record</h1>
            <Navtab />
         </div>
      </>
   )
}

export default Home
