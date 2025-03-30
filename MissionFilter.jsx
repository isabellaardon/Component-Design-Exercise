// Step 5: Implement MissionFilter.jsx
// We need a way to filter missions by status.\

import React from "react";

const MissionFilter = ({ setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter("All")}>🌍 All</button>
            <button onClick={() => setFilter("Planned")}>📅 Planned</button>
            <button onClick={() => setFilter("Active")}>🚀 Active</button>
            <button onClick={() => setFilter("Completed")}>✅ Completed</button>
        </div>
    );
};

export default MissionFilter;


// Explanation
// Each button updates the filter state in MissionControl.
// Clicking "Active" filters only active missions, etc.
// Now, we can filter missions based on status!

