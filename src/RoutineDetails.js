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
      <div className="routineDetailsBox">
        <Nav />
        <div className="details-container">
          <div className="details">
            <h2>{workout.routine_name}</h2>
            <h4>Workout Description</h4>
            <ul className="exercisesUL">
              {workout.exercises.map((exercise) => {
                return (
                  <li className="exercisesLI">
                    {exercise.exercise_name} / Reps: min{' '}
                    {exercise.reps.minmax[0]}, max {exercise.reps.minmax[1]} /
                    Sets: {exercise.sets}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default RoutineDetails;
