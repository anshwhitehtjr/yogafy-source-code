import React from 'react';

const Scheduleclass = () => {
   return (
      <>
         <div className="container">
            <form class="form-floating">
               <input hidden type="text" className="form-control" id="title" placeholder="This is the title" value="This is a title" />
               <label htmlFor="floatingInputValue">Input with value</label>
            </form>
         </div>
      </>
   );
};

export default Scheduleclass;
