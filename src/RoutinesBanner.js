import { Link } from 'react-router-dom';

function Routines() {
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
            <Link to="/routines">
              <button classname="detailsButton">More Details</button>
            </Link>
          </div>
        </div>
        <div className="routineSelection">
          <button id="choice">
            <h3>WORKOUT 1</h3>
          </button>
          <button id="choice">
            <h3>WORKOUT 2</h3>
          </button>
          <button id="choice">
            <h3>WORKOUT 3</h3>
          </button>
          <button id="choice">
            <h3>WORKOUT 4</h3>
          </button>
          <button id="choiceYellow">
            <h3>CREATE ONE</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Routines;
