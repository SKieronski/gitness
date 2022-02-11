import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Nav from './Nav';
function RoutineDetails() {
  let { id } = useParams();
  const [workouts, setWorkouts] = useState([]);
  const url = `https://gitness-ga-earth-api.herokuapp.com/routines/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setWorkouts(json);
      })
      .catch(console.error);
  });
  if (!workouts) {
    return <p>Loading workout stuff...</p>;
  }
  return (
    <div className="routineDetailsBox">
      <Nav />
      <div className="details-container">
        <img src={workouts.image} alt={workouts.name} />
        <div className="details">
          <h2>{workouts.name}</h2>
          <h3>{workouts.genus}</h3>
          <h4>Workout Description</h4>
          <p>{workouts.description}</p>
          <a
            href="https://www.audubon.org/field-guide/bird/acadian-flycatcher"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
export default RoutineDetails;
