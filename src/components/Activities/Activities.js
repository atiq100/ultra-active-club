import React from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
const Activities = ({activities,cart,setCart}) => {
    //console.log(activities);
    return (
        <div>
            <div className="activity-container">
                {
                    activities.map((p => <Activity 
                        activity={p} 
                        key={p?.id} 
                       >

                        </Activity>))
                }
            </div>
        </div>
    );
};

export default Activities;