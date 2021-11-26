import React, { useState } from 'react';
import classContext from './classContext';

const ClassState = (props) => {
   const initialClass = [
      {
         "user": "619a101b5162a617766b2852",
         "zoomid": "https://www.google.com",
         "title": "this is a title",
         "desc": "this is a desc",
         "dateToJoin": "26-11-2021",
         "_id": "61a0fd5c46d815d5e79b76ad",
         "timestamp": "2021-11-26T15:29:32.125Z",
         "__v": 0
      }
   ];
   const [classes, setClasses] = useState(initialClass);

   return (
      <classContext.Provider value={ { classes, setClasses } } >
         { props.children }
      </classContext.Provider>
   );
};

export default ClassState;
