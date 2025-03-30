//MissionCard will:
//Show mission details (name, status, crew)
//Be reusable for each mission

//STEP : Write MissionCard Component

const  MissionCard = ({ mission }) => { //component recieves a mission as a prop 
    return (
        <div>
            {/* Displays mission name */}
            <h2>{mission.name}</h2> 
            {/* Displays mission status */}
            <p>Status: {mission.status}</p>
            {/* Displays crew names using join to seperate w commas */}
            <p>Crew: {mission.crew.join(", ")}</p>
        </div>
    );
};

export default MissionCard;
