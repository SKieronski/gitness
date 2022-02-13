import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Modal from './Modal';
import './Modal.css'

/* TODO ==========================================
1. Setup the modal so that it pops up when you click an edit button. DONE
2. Make sure the modal contains the right exercise info to be changed. DONE 
3. Add a delete button to the modal that deletes the whole exercise
4. The submit button should say "Submit Changes" and will do a patch/put request for that exercise in this routine. 
5. When edit OR delete is clicked, the modal closes and the page is updated accordingly.
==================================================*/

function RoutineDetails() {
  //Setup Modal props
  const [ openModal, setOpenModal ] = useState(false);
  const [ formOpen, setFormOpen ] = useState(false)
  const [ editOpen, setEditOpen ] = useState(false)

  let { id } = useParams();
  const [routine, setRoutine] = useState(null);
  const [myExercise, setMyExercise] = useState(null);
  const url = `https://gitness-ga-earth-api.herokuapp.com/routines/${id}`;

  const changeExercise = (exerciseID) => {
    routine.exercises.forEach((exercise) => {
      if (exercise._id === exerciseID) {
        setMyExercise(exercise);
        return;
      }
    });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRoutine(json);
      })
      .catch(console.error);
  }, []);

  

  console.log(routine);
  if (!routine) {
    return <p>Loading routine...</p>;
  } else {
    if(!myExercise){ //if the user hasn't clicked an exercise yet, info pane has "Click an exercise!"
      return (
        <div>
          <h1>
            <span id="yellowFont">{routine.routine_name}</span>
          </h1>
          {/* <h2>{routine.routine_description}</h2> */}
          <div className="routineDetailsBox">
            <Nav />
            
            <div className="gifBox"></div>
            <div className="details-container">
              <div className="details">
                {/* <h2 className="routineName">{routine.routine_name}</h2> */}
                <h4>{routine.routine_description}</h4>
                <ol className="exercisesOL">
                  {routine.exercises.map((exercise) => {
                    return (
                      <li className="exercisesLI" key={exercise._id}>
                        <button onClick={() => {
                          changeExercise(exercise._id);
                        }}>
                          {exercise.exercise_name} / Reps: min{' '}
                          {exercise.reps.minmax[0]}, max {exercise.reps.minmax[1]} /
                          Sets: {exercise.sets}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      );
    } else { //if the user has clicked an exercise, info pane has all the exercise details, including an edit button to pop up the modal
      return (
        <div>
          <h1>
            <span id="yellowFont">{routine.routine_name}</span>
          </h1>
          {/* <h2>{routine.routine_description}</h2> */}
          <div className="routineDetailsBox">
            <Nav />
            {openModal && (
              <Modal 
                openModal={openModal}
                setOpenModal={setOpenModal} 
                formOpen={ formOpen }
                setFormOpen={ setFormOpen }
                editOpen={ editOpen }
                setEditOpen={ setEditOpen }
                exerciseProp={myExercise}/>
            )}
            <div className="gifBox"></div>
            <div className="details-container">
              <div className="details">
                {/* <h2 className="routineName">{routine.routine_name}</h2> */}
                <h4>{routine.routine_description}</h4>
                <ol className="exercisesOL">
                  {routine.exercises.map((exercise) => {
                    return (
                      <li className="exercisesLI" key={exercise._id}>
                        <button onClick={() => {
                          changeExercise(exercise._id);
                        }}>
                          {exercise.exercise_name} / Reps: min{' '}
                          {exercise.reps.minmax[0]}, max {exercise.reps.minmax[1]} /
                          Sets: {exercise.sets}
                        </button>
                        <button id="choiceYellow" onClick={() => {
                          console.log("Clicked update button");
                          setOpenModal(true)
                          setEditOpen(true)
                        }}>
                          UPDATE
                        </button>
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
}
export default RoutineDetails;

