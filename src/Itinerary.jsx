import React, { useState } from 'react';

const Itinerary = () => {
    const [itinerary, setItinerary] = useState({
        destination: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItinerary({ ...itinerary, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO-- Save the itinerary
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="destination" placeholder="Destination" onChange={handleChange} />
            <input type="date" name="startDate" onChange={handleChange} />
            <input type="date" name="endDate" onChange={handleChange} />
            <button type="submit">Save Itinerary</button>
        </form>
    );
};

export default Itinerary;