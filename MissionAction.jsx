// MissionACtion.jsx - Update Status
// WE need buttons to update the STATUS of each mission

import React from "react";
const MissionAction = ({ mission, updateStatus }) => {
    return (
        <div>
            <button onClick={() => updateStatus(mission.id, "Active")}>Activate</button>
            <button onClick={() => updateStatus(mission.id, "Completed")}>Completed</button>
        </div>
    );
};

export default MissionAction;

//missionAction ALLOWS USERS TO CHANGE MISSION STATUS


//EXPLANATION
//1. Props
// `mission` : The mission to update
// `updateStatus` : A function passed from MissionControl
//2. Two Buttons
//`Activate` : Changes status to "Active"
//`Complete` : Changes status to "Completed"
//3. onClick={() => updateStatus(mission.id, "Active")}
// calls `updateStatus` with mission ID and new status

