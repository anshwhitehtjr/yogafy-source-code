import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classContext from './classContext';

const ClassState = (props) => {
   let initialClass = [];
   const [classes, setClasses] = useState(initialClass);
   let history = useHistory()

   // Get all Notes
   const getClasses = async () => {
      if(!localStorage.getItem('token')){
         return alert('Please Login')
      }

      // API Call
      const response = await fetch(`http://localhost:5000/api/classes/fetchallclasses`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
         }
      });
      const json = await response.json();
      setClasses(json)
      // setNotes(json);
   };

   return (
      <classContext.Provider value={ { classes, getClasses } } >
         { props.children }
      </classContext.Provider>
   );
};

export default ClassState;
