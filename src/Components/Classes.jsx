import React from 'react'
import { Link } from 'react-router-dom'

const Classes = () => {
   return (
      <>
         <div className="container-fluid my-2">
            <div class="card text-center">
               <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text fw-bolder" style={ { fontSize: '2rem' } }>Please Book a Class to start of with yogafy</p>
                  <Link to="/classes/scheduleclass" class="btn btn-outline-primary">Schedule A Class Now</Link>
               </div>
            </div>
         </div>
         <div className="container">
            <nav>
               <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-completedclasses-tab" data-bs-toggle="tab" data-bs-target="#nav-completedclasses" type="button" role="tab" aria-controls="nav-completedclasses" aria-selected="true">Completed Classes</button>
                  <button class="nav-link" id="nav-remainingclasses-tab" data-bs-toggle="tab" data-bs-target="#nav-remainingclasses" type="button" role="tab" aria-controls="nav-remainingclasses" aria-selected="false">Remaining Classes</button>
               </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
               <div class="tab-pane fade show active" id="nav-completedclasses" role="tabpanel" aria-labelledby="nav-completedclasses-tab">
                  These Are Completed Classes
               </div>
               <div class="tab-pane fade" id="nav-remainingclasses" role="tabpanel" aria-labelledby="nav-remainingclasses-tab">
                  These Are InComplete Classes
               </div>
            </div>
         </div>
      </>
   )
}

export default Classes
