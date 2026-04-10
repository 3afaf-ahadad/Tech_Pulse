import { useState } from "react";
import EventCard from "./components/EventCard";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-luxury-com-dark text-gray-300 font-sans flex">
      <h1>Tech Pulse</h1>
      <EventCard />
    </div>
  );
}

export default App;
