import { Link } from 'react-router-dom';
import { useState } from 'react';
function Routines({ workouts }) {
  const [myWorkout, setMyWorkout] = useState(null);
  console.log(workouts);
  const changeMyStuff = (workoutID) => {
    //Also we don't even need to do a axios call, we can just
    //use an array method to get the specific data we need
    workouts.forEach((workout) => {
      if (workout._id === workoutID) {
        setMyWorkout(workout);
        return;
      }
    });
    //Take that data and pass is to specific vars
    //Another way to do this would be to just set the below return to workout.name etc.
    //Then use a conditional that renders those elements when true
    //I.E. IF this data exists, render the elements
    //Use the vars in the return() below to display that data
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
                  {workout.name}
                </button>
              );
            })}
            <Link to="/routines" id="choiceYellow">
              ALL ROUTINES
            </Link>
            <button id="choiceYellow">
              <h3>CREATE ONE</h3>
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
              <h3 className="titleRoutineBanner">{myWorkout.name}</h3>
              <div className="textBox">{myWorkout.description}</div>
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
                  {workout.name}
                </button>
              );
            })}
            <Link to="/routines" id="choiceYellow">
              ALL ROUTINES
            </Link>
            <button id="choiceYellow">
              <h3>CREATE ONE</h3>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Routines;
