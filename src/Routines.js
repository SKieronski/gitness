import Nav from './Nav';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Routines() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch('https://gitness-ga-earth-api.herokuapp.com/')
      .then((res) => res.json())

      .then((json) => {
        setWorkouts(json);
      })

      .catch(console.error);
  }, []);
  console.log(workouts);
  return (
    <div>
      <div>
        <Nav />
        <h1 className="workoutRoutineTitle">
          WORKOUT <span id="yellowFont"> ROUTINES</span>
        </h1>
        <div className="routinesCardBox">
          {workouts.map((workout) => {
            return (
              <Link to={`/routinedetails/${workout._id}`} key={workout._id}>
                <div className="card">
                  <div className="cardTitle">
                    <h2>{workout.name}</h2>
                  </div>
                  <div className="cardDescription">
                    <p>{workout.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Routines;
