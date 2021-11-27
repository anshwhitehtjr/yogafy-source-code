import React from 'react';

const Classitem = (props) => {
    const { title, zoomid, desc, dateToJoin, state } = props.class_;

    return (
        <>
            {
                state === 'completed'
                && <div class="card" >
                    <h4 class="card-header">
                        { title }
                    </h4>
                    <div class="card-body">
                        <h6 class="card-title">
                            date: { dateToJoin }
                        </h6>
                        <p class="card-text">
                            { desc }
                        </p>
                        <a href={ `${zoomid}` } target='_blank' class="btn btn-outline-primary">Get Class Link Now</a>
                    </div>
                </div>
            }
        </>

    );
};

export default Classitem;
