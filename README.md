🚀 Space Mission Control Dashboard

📌 Project Overview

This project is a React-based Space Mission Control Dashboard that displays and manages space missions. Users can:

View a list of missions.
Filter missions based on their status.
Update the status of missions dynamically.

🛠️ Technologies & Tools Used

React.js: Built the interactive UI with components and state management.
Vite: Fast development server for the React app.
JavaScript (ES6+): Used modern features like array methods (map, filter), state management (useState), and functional components.
CSS: Basic styling for a clean user interface.

📖 Key Concepts Showcased

React Functional Components: Created modular and reusable components (MissionCard, MissionAction, MissionFilter, MissionControl).
State Management (useState): Managed mission data and UI filters dynamically.
Props & Component Communication: Passed mission data and update functions between components.
Event Handling: Handled user interactions like filtering and updating mission statuses.

⚡ How to Run This Project

1️⃣ Clone the Repository
git clone https://github.com/YOUR_GITHUB_USERNAME/space-mission-control.git
cd space-mission-control
2️⃣ Install Dependencies
npm install
3️⃣ Start the Development Server
npm run dev
The app will be available at http://localhost:5173 (or another port if occupied).

📂 Folder Structure

space-mission-control/
├── src/
│   ├── components/
│   │   ├── MissionControl.jsx  // Main component managing missions
│   │   ├── MissionCard.jsx      // Displays individual mission details
│   │   ├── MissionAction.jsx    // Buttons to update mission status
│   │   ├── MissionFilter.jsx    // Filter UI for missions
│   ├── App.jsx                  // Root component importing MissionControl
│   ├── main.jsx                  // ReactDOM render setup
│   ├── index.css                 // Global styles
├── package.json                  // Project dependencies & scripts
├── README.md                      // Project documentation

🚀 STEPS

Create Components: Break down the UI into MissionControl, MissionCard, MissionAction, and MissionFilter.
Manage State with useState: Store mission data and filtering options.
Render Mission Data: Use .map() to display missions dynamically.
Implement Filtering: Use .filter() to show missions based on status.
Update Mission Status: Pass update functions via props and modify state.
Test & Debug: Check for console errors, fix issues (like filter being undefined), and restart the server if needed.
Finalize & Push to GitHub:

