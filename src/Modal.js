import React from 'react'
import './Modal.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Modal = ({setOpenModal, formOpen, editOpen, exerciseProp, setUpdate, update }) => {
    
    
  const [ added, setAdded ] = useState(false)

    useEffect(() => {}, [added])

    const url = 'https://gitness-ga-earth-api.herokuapp.com'
  
    const handleSubmit = (event) => {

      event.preventDefault()
      if(formOpen){
    
        let tempForm = formState
        let myMuscles = tempForm.exercises[0].muscle_groups

        if (myMuscles.includes(',')) {
          let arrayOfMuscles = myMuscles.split(', ')
          tempForm.exercises[0].muscle_groups = arrayOfMuscles
        }

        setFormState({ ...tempForm })
        
        axios
          .post(`${url}/routines`, formState)
          .then(() => {
            setUpdate(!update)
            setOpenModal(false)
          })
          .catch((error) => {
            console.error(error)
          })

      } else if( editOpen ) {
  
        const editURL = `${url}/exercises/${exerciseProp._id}`
        let tempForm = exerciseEditState
        let myMuscles = exerciseEditState.muscle_groups

        if ( myMuscles.includes(',') ) {
          let arrayOfMuscles = myMuscles.split(', ')
          exerciseEditState.muscle_groups = arrayOfMuscles
        }
        setExerciseEditState({ ...tempForm })
        
        axios.put( editURL, exerciseEditState )
          .then(() => {
            setUpdate( !update )
            setOpenModal( false )
          })
          .catch(error => console.error(error))
      }
    }
   
    const handleChange = (event, index) => {
       
        if(formOpen){
          if( event.target.id === "routine_name" ) {
            setFormState({ ...formState, [event.target.id]: event.target.value})
          } else if( event.target.id === "routine_description" ) {
              setFormState({ ...formState, [event.target.id]: event.target.value})
          } else if ( event.target.id === "reps.min" ) {
            let tempForm = formState
            tempForm.exercises[index].reps.minmax[0] = event.target.value
            setFormState({...tempForm})
          } else if (event.target.id ==="reps.max") {
            let tempForm = formState
            tempForm.exercises[index].reps.minmax[1] = event.target.value
            setFormState({...tempForm})
          } else {
            let tempForm = formState
            tempForm.exercises[index] = {...tempForm.exercises[index], [event.target.id]: event.target.value}
            setFormState({...tempForm})
          }

        } else if( editOpen ) {
          if ( event.target.id === "reps.min" ){
            let tempForm = exerciseEditState
            tempForm.reps.minmax[0] = event.target.value
            setExerciseEditState({ ...tempForm })
          } else if ( event.target.id ==="reps.max" ) {
            let tempForm = exerciseEditState
            tempForm.reps.minmax[1] = event.target.value
            setExerciseEditState({ ...tempForm })
          } else {
            let tempForm = exerciseEditState
            tempForm = { ...tempForm, [event.target.id]: event.target.value }
            setExerciseEditState({ ...tempForm })
          }
        }
    }

    const initFormState = {
      routine_name: '',
      routine_description: '',
      exercises: [
        {
          exercise_name: '',
          exercise_description: '',
          reps: {
            minmax: [0, 0]
          },
          sets: 0,
          muscle_groups: '',
          img_example: ''
        }
      ]
    }

    const [exerciseEditState, setExerciseEditState] = useState(exerciseProp)
    const [ formState, setFormState] = useState(initFormState)

    const addExercise = (e) => {
      e.preventDefault()

      let tempForm = formState

      tempForm.exercises.push({
        exercise_name: '',
        exercise_description: '',
        reps: {
          minmax: [0, 0]
        },
        sets: 0,
        muscle_groups: '',
        img_example: ''
        
      })

      setFormState( tempForm )
      setAdded( !added )
      }
    

    if (formOpen) {
     return(
        <div className='modalBackground'>
          <div className='modalContainer'>
            <form onSubmit={handleSubmit}>
              <div className='modaltitle'>
                <h2>Let's build a routine</h2>
                <button type='button' onClick={() => {setOpenModal(false)}}>X</button>
              </div>
                <div className='modalbody'>
                  <label> Routine Title:*
                      <input id = 'routine_name' type='text' onChange={handleChange} value={formState.routine_name}/>
                  </label>
                  <label> Description:* 
                    <input id = 'routine_description' type ='text' onChange={handleChange} value={formState.routine_description}/>
                  </label>
                  <br/>
                  <br/>
                  <br/>
                  <label> Exercises*:
                    <br/>
                    {formState.exercises.map((exercise, index) => {
                      return(

                        <div key={ index }>
                          <label> Name:* 
                            <input id='exercise_name' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].exercise_name}/>
                          </label> 
                          <label> Description:*
                            <input id='exercise_description' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].exercise_description}/>
                          </label> 
                          <label> Sets:* 
                            <input id='sets' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].sets}/>
                          </label> 
                          <label> Min Reps:* 
                            <input id='reps.min' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].reps.minmax[0]}/>
                          </label> 
                          <label> Max Reps:* 
                            <input id='reps.max' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].reps.minmax[1]}/>
                          </label> 
                          <label> Muscle (Groups)*: 
                            <input id='muscle_groups' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].muscle_groups}/>
                          </label> 
                          <label> Image, Video, or GIF: 
                            <input id='img_example' type='text' onChange={((e) => handleChange(e, index))} value={formState.exercises[index].img_example}/>
                          </label> 
                        </div>

                        )
                      }
                    )
                  }  
                  </label> 

                  <button 
                    type='button'
                    onClick={(e) => {addExercise(e)} }
                    > + 
                  </button>

                </div>

                <div className='modalfooter'>
                <button type='submit' value='submit'/>
                  <p> * = required field</p>        
                </div>

              </form>
            </div>
        </div>
      )
    } else if (editOpen) {
      return(
        <div className='modalBackground'>
          <div className='modalContainer'>
            <form onSubmit={handleSubmit}>
              <div className='modaltitle'>
                <h2>Edit the exercise!</h2>
                <button type='button' onClick={() => {setOpenModal(false)}}>X</button>
              </div>
              <div className='modalbody'>
                  <label> Exercises*:
                    <br/>
                    <label> Name:* 
                      <input id='exercise_name' type='text' onChange={handleChange} value={exerciseEditState.exercise_name}/>
                    </label> 
                    <label> Description:*
                      <input id='exercise_description' type='text' onChange={handleChange} value={exerciseEditState.exercise_description}/>
                    </label> 
                    <label> Sets:* 
                      <input id='sets' type='text' onChange={handleChange} value={exerciseEditState.sets}/>
                    </label> 
                    <label> Min Reps:* 
                      <input id='reps.min' type='text' onChange={handleChange} value={exerciseEditState.reps.minmax[0]}/>
                    </label> 
                    <label> Max Reps:* 
                      <input id='reps.max' type='text' onChange={handleChange} value={exerciseEditState.reps.minmax[1]}/>
                    </label> 
                    <label> Muscle (Groups)*: 
                      <input id='muscle_groups' type='text' onChange={handleChange} value={exerciseEditState.muscle_groups}/>
                    </label> 
                    <label> Image, Video, or GIF: 
                      <input id='img_example' type='text' onChange={handleChange} value={exerciseEditState.img_example}/>
                    </label> 
                  </label> 
                </div>
                <div className='modalfooter'>
                  <button type='submit' value='submit'> Submit Changes </button>
                  <p> * = required field</p>        
              </div>
            </form>
          </div>
        </div>
      )
}}


export default Modal