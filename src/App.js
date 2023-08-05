import React, { useState } from "react";
import Dashboard from "./Dashbaord";
import Itinerary from "./Itinerary";
import Weather from "./Weather";
import CurrencyExchange from "./CurrencyExchange";

const NewTrip = () => {
  const [trip, setTrip] = useState({
    destination: "",
    dates: "",
    activities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the trip to the database or state
    console.log("Trip created:", trip);
  };

  return (
    <div className="App">
      {/* Other components like Navbar, etc. */}
      <Dashboard />
      <Itinerary />
      <Weather />
      <CurrencyExchange />
      {/* Other components like Footer, etc. */}
    </div>
  );
};

export default NewTrip;
