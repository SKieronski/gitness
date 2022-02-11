import { Link } from 'react-router-dom';

function Routines({ workouts }) {
  console.log(workouts);
  return (
    <div className="routineBox">
      <div className="routineCardBox">
        <div className="routineItem">
          <div className="bottomText">
            <h3 className="titleRoutineBanner">Exercise Name</h3>
            <div className="textBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <Link to={'/routines'} className="detailsButton">
              More Details
            </Link>
          </div>
        </div>
        <div className="routineSelection">
          {workouts.map((workout) => {
            return (
              <Link to={`/routinedetails/${workout._id}`} id="choice">
                {workout.name}
              </Link>
            );
          })}
          <button id="choiceYellow">
            <h3>CREATE ONE</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Routines;
