import { useState } from "react";
import EventCard from "./components/EventCard";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-luxury-com-dark text-gray-300 font-sans flex">
      <h1>Tech Pulse</h1>
      <EventCard 
            title="Introduction à la Conception de Bases de Données (MCD/MLD)"
            date="Session à venir"
            community="Only Girls"
            tags={["SQL", "Architecture", "Data"]}
          />
    </div>
  );
}

export default App;
