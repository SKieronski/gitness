import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import Modal from './Modal'
import './Modal.css'
import axios from 'axios'

function RoutineDetails() {
  
  const [ openModal, setOpenModal ] = useState(false)
  const [ formOpen, setFormOpen ] = useState(false)
  const [ editOpen, setEditOpen ] = useState(false)
  const [update, setUpdate] = useState(false)
  let { id } = useParams()
  const [routine, setRoutine] = useState(null)
  const [myExercise, setMyExercise] = useState(null)
  const url = `https://gitness-ga-earth-api.herokuapp.com/routines/${id}`

  const changeExercise = (exerciseID) => {

    routine.exercises.forEach((exercise) => {
      if (exercise._id === exerciseID) {

        setMyExercise(exercise)
        return

      }
    })

  }

  const handleDelete = (event) => {
    
    axios
      .delete(
        `https://gitness-ga-earth-api.herokuapp.com/exercises/${myExercise._id}`,
        myExercise
      )
      .then(() => setUpdate(!update));
  };

  useEffect(() => {
    console.log("Use effect triggered in RoutineDetails")
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRoutine(json)
      })
      .catch(console.error)
  }, [update])



  if (!routine) {
    return <p>Loading routine...</p>
  } else {
    if (!myExercise) {
      return (
        <div id="pageBox">
          <Nav />
          <h1>
            <span id="yellowFont">{routine.routine_name}</span>
          </h1>
          <p id="routineDescriotion">{routine.routine_description}</p>
          <div id="routineDetailsBox">
            <div id="leftBox">
              <h2 id="exerciseName">Choose An Exercise</h2>
              <div id="gifBox"></div>
            </div>
            <div id="details-container">
              <div id="details">
                <ol id="exercisesOL">
                  {routine.exercises.map((exercise) => {
                    return (
                      <li id="exercisesLI" key={exercise._id}>
                        <button
                          id="choice"
                          onClick={() => {
                            changeExercise(exercise._id)
                          }}
                        >
                          {exercise.exercise_name}
                        </button>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    } else {

      return (
        <div id='modalBox'>
          {openModal && (
              <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                editOpen={editOpen}
                setEditOpen={setEditOpen}
                exerciseProp={myExercise}
                setUpdate={setUpdate}
                update={update}
              />
            )}
            <div id="pageBox">
            <Nav />
            <h1>
              <span id="yellowFont">{routine.routine_name}</span>
            </h1>
            <p id="routineDescription">{routine.routine_description}</p>
            <div id="routineDetailsBox">
              

              <div id="leftBox">
                <h2 id="exerciseName"> {myExercise.exercise_name}</h2>
                <h4 id="exerciseDetails">{myExercise.exercise_description}</h4>
                <h4 id="exerciseDetails">
                  Sets: {myExercise.sets} <br/> Min Reps: {myExercise.reps.minmax[0]} <br/> Max Reps: {myExercise.reps.minmax[1]} 
                </h4>
                <h4 id="exerciseDetails">
                  Targeted Muscle Groups:
                  {myExercise.muscle_groups.map((muscle)=> {
                    
                    return (
                      <span> {muscle} </span>
                    )
                  })}
                </h4>
                <div
                  id="gifBox"
                  style={{
                    backgroundImage: `url(${myExercise.img_example})`
                  }}
                ></div>
              </div>
              <div id="details-container">
                <div id="details">
                  <ol id="exercisesOL">
                    {routine.exercises.map((exercise) => {
                      return (
                        <li id="exercisesLI" key={exercise._id}>
                          <button
                            id="choice"
                            onClick={() => {
                              changeExercise(exercise._id);
                            }}
                          >
                            {exercise.exercise_name}
                          </button>
                          {exercise._id === myExercise._id && (
                            <>
                              <button
                                id="choiceYellow"
                                onClick={() => {
                                  console.log('Clicked update button')
                                  changeExercise(exercise._id)
                                  setOpenModal(true)
                                  setEditOpen(true)
                                }}
                              >
                                UPDATE
                              </button>
                              <button
                                id="choiceYellow"
                                onClick={() => {
                                  console.log('clicked delete button')
                                  changeExercise(exercise._id)
                                  handleDelete()
                                }}
                              >
                                DELETE
                              </button>
                            </>
                          )}
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default RoutineDetails
