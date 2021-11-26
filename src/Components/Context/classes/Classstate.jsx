import { useState } from "react";
import React from 'react';

const Classstate = () => {
   const host = "http://localhost:5000";
   const notesInitial = [];
   const [classes, setClasses] = useState(notesInitial);

   // Get all Notes
   const getClasses = async () => {
      // API Call 
      const response = await fetch(`${host}/api/classes/fetchallclasses`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
         }
      });
      const json = await response.json();
      setClasses(json);
   };

   return (
      <>

      </>
   );
};

export default Classstate;
