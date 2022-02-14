import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Modal from './Modal';
import './Modal.css'
import axios from 'axios';


function RoutineDetails() {
  //Setup Modal props
  const [ openModal, setOpenModal ] = useState(false);
  const [ formOpen, setFormOpen ] = useState(false)
  const [ editOpen, setEditOpen ] = useState(false)
  const [update, setUpdate] = useState(false)
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

  const handleDelete = (event) => {
    console.log(myExercise._id)
    axios
      .delete(`https://gitness-ga-earth-api.herokuapp.com/exercises/${myExercise._id}`, myExercise)
      .then(() => setUpdate(!update))

  }


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRoutine(json);
      })
      .catch(console.error);
  }, [update]);
  console.log(routine);
  if (!routine) {
    return <p>Loading routine...</p>;
  } else {
    if (!myExercise) {
      //if the user hasn't clicked an exercise yet, info pane has "Click an exercise!"
      return (
        <div>
          <Nav />
          <h1>
            <span id="yellowFont">{routine.routine_name}</span>
          </h1>
          <p>{routine.routine_description}</p>
          {/* <h2>{routine.routine_description}</h2> */}
          <div className="routineDetailsBox">
            <div className="leftBox">
              <div className="gifBox"></div>
            </div>
            <div className="details-container">
              <div className="details">
                {/* <h2 className="routineName">{routine.routine_name}</h2> */}

                <ol className="exercisesOL">
                  {routine.exercises.map((exercise) => {
                    return (
                      <li className="exercisesLI" key={exercise._id}>
                        <button onClick={() => {
                          changeExercise(exercise._id);
                        }}>
                          {exercise.exercise_name}
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
    } else {
      //if the user has clicked an exercise, info pane has all the exercise details, including an edit button to pop up the modal
      return (
        <div>
          <h1>
            <span id="yellowFont">{routine.routine_name}</span>
          </h1>
          <p>{routine.routine_description}</p>
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
                exerciseProp={myExercise}
                setUpdate={setUpdate}
                update={update}/>
            )}

            <div className="leftBox">
              <div className="gifBox"></div>
            </div>
            <div className="details-container">
              <div className="details">
                {/* <h2 className="routineName">{routine.routine_name}</h2> */}

                <ol className="exercisesOL">
                  {routine.exercises.map((exercise) => {
                    return (
                      <li className="exercisesLI" key={exercise._id}>
                        <button onClick={() => {
                          changeExercise(exercise._id);
                        }}>
                          {exercise.exercise_name}
                        </button>
                        {exercise._id === myExercise._id &&
                        <>
                          <button id="choiceYellow" onClick={() => {
                              console.log("Clicked update button");
                              changeExercise(exercise._id);
                              setOpenModal(true)
                              setEditOpen(true)
                            }}>
                              UPDATE
                            </button>
                            <button id='choiceYellow' onClick={() => {
                              console.log('clicked delete button')
                              changeExercise(exercise._id)
                              handleDelete()
                            }}>
                              DELETE
                            </button>
                        </>
                          
                          
                        }
                          
                        
                      
                        
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
