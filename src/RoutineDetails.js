import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';

function RoutineDetails() {
  let { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const url = `https://gitness-ga-earth-api.herokuapp.com/routines/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setWorkout(json);
      })
      .catch(console.error);
  }, []);

  console.log(workout);
  if (!workout) {
    return <p>Loading workout stuff...</p>;
  } else {
    return (
      <div>
        <h1>
          ROUTINE <span id="yellowFont">DETAILS</span>
        </h1>
        <div className="routineDetailsBox">
          <Nav />

          <div className="gifBox"></div>
          <div className="details-container">
            <div className="details">
              <h2 className="routineName">{workout.routine_name}</h2>
              <h4>Workout Description</h4>
              <ol className="exercisesOL">
                {workout.exercises.map((exercise) => {
                  return (
                    <li className="exercisesLI">
                      {exercise.exercise_name} / Reps: min{' '}
                      {exercise.reps.minmax[0]}, max {exercise.reps.minmax[1]} /
                      Sets: {exercise.sets}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RoutineDetails;
