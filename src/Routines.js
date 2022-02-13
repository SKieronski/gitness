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
  if (!workouts) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <Nav />
          <h1 id="workoutRoutineTitle">
            WORKOUT <span id="yellowFont"> ROUTINES</span>
          </h1>
          <div className="routinesCardBox">
            {workouts.map((workout) => {
              return (
                <div className="card">
                  <div className="cardTitle">
                    <h2>{workout.routine_name}</h2>
                  </div>
                  <div className="cardDescription">
                    {workout.routine_description}
                  </div>
                  <div className="detailsBackground">
                    <Link
                      to={`/routinedetails/${workout._id}`}
                      key={workout._id}
                      id="routine"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Routines;
