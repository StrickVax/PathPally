import React, { useState } from 'react';

const NewTrip = () => {
  const [trip, setTrip] = useState({ destination: '', dates: '', activities: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the trip to the database or state
    console.log('Trip created:', trip);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="destination" placeholder="Destination" onChange={handleChange} />
      <input type="text" name="dates" placeholder="Dates" onChange={handleChange} />
      <input type="text" name="activities" placeholder="Activities" onChange={handleChange} />
      <button type="submit">Create Trip</button>
    </form>
  );
};

export default NewTrip;
