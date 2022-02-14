import { Link } from 'react-router-dom';
import Modal from './Modal'
import './Modal.css'
import { useState } from 'react';
import axios from 'axios';

function RoutinesBanner({ update, setUpdate, workouts, setOpenModal, formOpen, setFormOpen }) {
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

  const handleDelete = (event) => {
    // console.log(myExercise._id)
    console.log(myWorkout)
    axios
      .delete(`https://gitness-ga-earth-api.herokuapp.com/routines/${myWorkout._id}`, myWorkout)
      .then(res => console.log(res))
      .then(() => setUpdate(!update))
      .catch(error => console.log(error))
    setMyWorkout(null)
  }


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
            <button 
              id="choiceYellow" 
              onClick={() => {
                setOpenModal(true)
                setFormOpen(true)
                }}>
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
              <button onClick={handleDelete}>
                Delete this Routine
              </button>
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
