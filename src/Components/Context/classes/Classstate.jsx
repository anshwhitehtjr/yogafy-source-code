import React, { useState } from 'react';
import classContext from './classContext';

const ClassState = (props) => {
   const initialClass = [
      {
         "_id": "61a1eb638a6cdbbfc5bdb44d",
         "user": "619a101b5162a617766b2852",
         "zoomid": "/",
         "title": "this is a title",
         "desc": "this is a desc",
         "dateToJoin": "27-11-2021",
         "state": "completed",
         "timestamp": "2021-11-27T08:25:07.238Z",
         "__v": 0
      },
      {
         "_id": "61a1eb858a6cdbbfc5bdb44f",
         "user": "619a101b5162a617766b2852",
         "zoomid": "/",
         "title": "this is a title 2",
         "desc": "this is a desc 2",
         "dateToJoin": "25-11-2008",
         "state": "remaining",
         "timestamp": "2021-11-27T08:25:41.354Z",
         "__v": 0
      },
      {
         "_id": "61a1ebd78a6cdbbfc5bdb451",
         "user": "619a101b5162a617766b2852",
         "zoomid": "/",
         "title": "this is a title 3",
         "desc": "this is a desc 3",
         "dateToJoin": "25-11-2022",
         "state": "upcoming",
         "timestamp": "2021-11-27T08:27:03.960Z",
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
