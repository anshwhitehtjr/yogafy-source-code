import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classContext from './Context/classes/classContext';

const Classes = () => {
   const context = useContext(classContext);
   const { classes, setClasses } = context;

   return (
      <>
         <div className="container-fluid my-2">
            <div className="card text-center">
               <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text fw-bolder" style={ { fontSize: '2rem' } }>Please Book a Class to start of with yogafy</p>
                  <Link to="/classes/scheduleclass" className="btn btn-outline-primary">Schedule A Class Now</Link>
               </div>
            </div>
         </div>
         <div className="container my-3">
            <nav>
               <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-completedclasses-tab" data-bs-toggle="tab" data-bs-target="#nav-completedclasses" type="button" role="tab" aria-controls="nav-completedclasses" aria-selected="true">Completed Classes</button>
                  <button className="nav-link" id="nav-remainingclasses-tab" data-bs-toggle="tab" data-bs-target="#nav-remainingclasses" type="button" role="tab" aria-controls="nav-remainingclasses" aria-selected="false">Remaining Classes</button>
                  <button className="nav-link" id="nav-upcomginclasses-tab" data-bs-toggle="tab" data-bs-target="#nav-upcomginclasses" type="button" role="tab" aria-controls="nav-upcomginclasses" aria-selected="false">Upcoming Classes</button>
               </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
               <div className="tab-pane fade show active" id="nav-completedclasses" role="tabpanel" aria-labelledby="nav-completedclasses-tab">
                  <div className="container my-3">
                     <div class="card">
                        <h5 class="card-header">
                           Your Latest upcoming Classe
                        </h5>
                        <div class="card-body">
                           <h5 class="card-title">
                              {
                                 classes.map(e => {
                                    return e.title;
                                 })
                              }
                           </h5>
                           <p class="card-text">
                              {
                                 classes.map(e => {

                                    return e.dateToJoin;
                                 })
                              }
                           </p>
                           <a href={ `${classes.map(e => { return e.zoomid; })}` } target='_blank' class="btn btn-primary">Go somewhere</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tab-pane fade" id="nav-remainingclasses" role="tabpanel" aria-labelledby="nav-remainingclasses-tab">
                  These Are InComplete Classes
               </div>
               <div className="tab-pane fade" id="nav-upcomginclasses" role="tabpanel" aria-labelledby="nav-upcomginclasses-tab">
                  These Are Upcoming Classes
               </div>
            </div>
         </div>
      </>
   );
};

export default Classes;
