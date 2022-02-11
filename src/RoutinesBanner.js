import { Link } from 'react-router-dom';
import Modal from './Modal'
import './Modal.css'
import { useState } from 'react';
function RoutinesBanner({ workouts, setOpenModal }) {
  const [myWorkout, setMyWorkout] = useState(null);
  

  console.log(workouts);
  const changeMyStuff = (workoutID) => {
    workouts.forEach((workout) => {
      if (workout._id === workoutID) {
        setMyWorkout(workout);
        return;
      }
    });
  };
  if (!myWorkout) {
    return (
      <div className="routineBox">
        <div className="routineCardBox">
          <div className="routineItem">
            <div className="bottomText">
              <h3 className="titleRoutineBanner">
                Select a workout on the right
              </h3>
              <div className="textBox">to see a preview</div>
            </div>
          </div>
          <div className="routineSelection">
            {workouts.map((workout) => {
              return (
                <button
                  id="choice"
                  onClick={() => {
                    console.log('In button onClick');
                    changeMyStuff(workout._id);
                  }}
                  key={workout._id}
                >
                  {workout.routine_name}
                </button>
              );
            })}
            <Link to="/routines" id="choiceYellow">
              ALL ROUTINES
            </Link>
            <button id="choiceYellow" onClick={() => {
              console.log("Clicked create button");
              setOpenModal(true)}
            }>
              <h3>CREATE A ROUTINE</h3>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="routineBox">
        <div className="routineCardBox">
          <div className="routineItem">
            <div className="bottomText">
              <h3 className="titleRoutineBanner">{myWorkout.routine_name}</h3>
              <div className="textBox">{myWorkout.routine_description}</div>
              <Link
                to={`/routinedetails/${myWorkout._id}`}
                className="detailsButton"
              >
                More Details
              </Link>
            </div>
          </div>
          <div className="routineSelection">
            {workouts.map((workout) => {
              return (
                <button
                  id="choice"
                  onClick={() => {
                    console.log('in second onClick');
                    changeMyStuff(workout._id);
                  }}
                  key={workout._id}
                >
                  {workout.routine_name}
                </button>
              );
            })}
            <Link to="/routines" id="choiceYellow">
              ALL ROUTINES
            </Link>
            <button id="choiceYellow" onClick={() => {
              console.log("Clicked create button");
              setOpenModal(true)
            }}>
              <h3>CREATE A ROUTINE</h3>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default RoutinesBanner;
