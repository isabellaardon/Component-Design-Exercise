//Step: Write Basic React Component



//STEP 5: REndering Missions inside MissionControl
//Display all missions using MissionCard

//Import useState to create and manage state(store manage data) in React

//IMPORT ALL COMPONENTS HERE
import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
// Step 6: Add Filtering to MissionControl.jsx
// 📌 Modify MissionControl.jsx
import MissionFilter from "./MissionFilter";

//Functional component recieve missions as props
const MissionControl = ({ missions }) => {
     //State to store missions list. This allows React to track changes
    const [missionList, setMissionList] = useState(missions);
    const [filter, setFilter] = useState("All"); // ✅ Fix: Declare filter state


    //Function to update Mission Status
    const updateMissionStatus = (id, newStatus) => {
        const updatedMissions = missionList.map(mission => mission.id === id ? { ...mission, status: newStatus } : mission
        );
        setMissionList(updatedMissions);
    };
    // Step 6: Add Filtering to MissionControl.jsx
    const filteredMissions = missionList.filter(mission =>
        filter === "All" ? true : mission.status === filter
    );

    return (
        <div>
            <h1> Space Mission Control</h1>
            <MissionFilter setFilter={setFilter} />
            {/* Loops thru all missions and creates Missioncard for each one */}
            {filteredMissions.map((mission) => (
                <div key={mission.id}>
                {/* // Passes each mission as a prop to MissionCard */}
                <MissionCard mission={mission} />
                <MissionAction mission={mission} updateStatus={updateMissionStatus} />
                </div>
            ))}
        </div>
    );
};

export default MissionControl;

//STEP 4: update MissionControl.jsx to handle Status Updates

//Now we connect MissionAction to MissionControl

// What’s New?
// updateMissionStatus(id, newStatus)
// Updates the status of the mission with the matching id.
// Uses .map() to create a new mission list with the updated status.
// Calls setMissionList(updatedMissions) to update state.
// MissionAction now appears under each MissionCard
// This lets users update the status directly from the UI.
// ✅ Now, clicking buttons updates the mission status instantly!


// Step 6: Add Filtering to MissionControl.jsx
// 📌 Modify MissionControl.jsx
// clicking a filter button updates the displayed missions! 🎉