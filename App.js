import React, { useState } from 'react';

const TrainSchedulingForm = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary logic or API calls here with the form data
    console.log('Submitted:', trainNumber, departureTime, arrivalTime);
    // Reset form fields
    setTrainNumber('');
    setDepartureTime('');
    setArrivalTime('');
  };

  return (
    <div>
      <h1>Train Scheduling Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="trainNumber">Train Number:</label>
          <input
            type="text"
            id="trainNumber"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="departureTime">Departure Time:</label>
          <input
            type="time"
            id="departureTime"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="arrivalTime">Arrival Time:</label>
          <input
            type="time"
            id="arrivalTime"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TrainSchedulingForm;
