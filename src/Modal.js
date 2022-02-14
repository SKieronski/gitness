import React from 'react'
import './Modal.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Modal = ({openModal, setOpenModal, formOpen, setFormOpen, editOpen, setEditOpen, exerciseProp, setUpdate, update }) => {
    // console.log("Exercise we passed in");
    // console.log(exerciseProp);
    

    const url = 'https://gitness-ga-earth-api.herokuapp.com'
    
    // const handleDelete = (event) => {
    //   console.log(exerciseProp._id)
    //   console.log(event)
    //   // axios
    //   //   .delete(`${url}/exercises/${exerciseProp._id}`, )
    // }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(formOpen){
    
        let tempForm = formState;
    
        let myMuscles = tempForm.exercises[0].muscle_groups;
        if (myMuscles.includes(',')) {
          let arrayOfMuscles = myMuscles.split(', ');
          tempForm.exercises[0].muscle_groups = arrayOfMuscles;
        }
        setFormState({ ...tempForm });
        console.log(formState);
    
        console.log('Attempting to post');
        axios
          .post(`${url}/routines`, formState)
          .then((res) => console.log(res))
          .then(() => {
            setUpdate(!update)
            setOpenModal(false)
          })
          .catch((error) => {
            console.error(error);
          });
      } else if(editOpen){
        console.log("In editOpen in handleSubmit")
        const editURL = `${url}/exercises/${exerciseProp._id}`
        let tempForm = exerciseEditState;
    
        let myMuscles = exerciseEditState.muscle_groups;
        if (myMuscles.includes(',')) {
          let arrayOfMuscles = myMuscles.split(', ');
          exerciseEditState.muscle_groups = arrayOfMuscles;
        }
        setExerciseEditState({ ...tempForm });
        
        axios.put(editURL, exerciseEditState)
          .then(res =>  console.log(res))
          .then(() => {
            setUpdate(!update)
            setOpenModal(false)
          })
          .catch(error => console.error(error))
      }
      
    };
   
    const handleChange = (event, index) => {
        event.preventDefault()
        // const index = event.target.name
        if(formOpen){
          console.log(index)
          console.log(parseInt(event.target.id))
          // setExerciseFields(item => {
          //   const newExercises = item.slice()
          //   newExercises[index].value = item.target.value

          //   return newExercises
          // })
          if(event.target.id === "routine_name"){
            setFormState({ ...formState, [event.target.id]: event.target.value});
          } else if(event.target.id === "routine_description") {
              setFormState({ ...formState, [event.target.id]: event.target.value});
          } else if (event.target.id === "reps.min"){
              let tempForm = formState;
              // tempForm.exercises[0].reps.minmax[0] = {...tempForm.exercises[0].reps.minmax[0], "reps.minmax": event.target.value}
              tempForm.exercises[0].reps.minmax[0] = event.target.value;
              setFormState({...tempForm});
          } else if (event.target.id ==="reps.max") {
            let tempForm = formState;
            // tempForm.exercises[0].reps.minmax[0] = {...tempForm.exercises[0].reps.minmax[0], "reps.minmax": event.target.value}
            tempForm.exercises[0].reps.minmax[1] = event.target.value;
            setFormState({...tempForm});
          } else {
            let tempForm = formState;
            tempForm.exercises[0] = {...tempForm.exercises[0], [event.target.id]: event.target.value}
            // console.log(tempForm.exercises);
            setFormState({...tempForm});
          }
        } else if(editOpen){
          if (event.target.id === "reps.min"){
            let tempForm = exerciseEditState;
            // tempForm.exercises[0].reps.minmax[0] = {...tempForm.exercises[0].reps.minmax[0], "reps.minmax": event.target.value}
            tempForm.reps.minmax[0] = event.target.value;
            setExerciseEditState({...tempForm});
          } else if (event.target.id ==="reps.max") {
            let tempForm = exerciseEditState;
            // tempForm.exercises[0].reps.minmax[0] = {...tempForm.exercises[0].reps.minmax[0], "reps.minmax": event.target.value}
            tempForm.reps.minmax[1] = event.target.value;
            setExerciseEditState({...tempForm});
          } else {
            let tempForm = exerciseEditState;
            tempForm = {...tempForm, [event.target.id]: event.target.value}
            // console.log(tempForm.exercises);
            setExerciseEditState({...tempForm});
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
    };


    const [ formState, setFormState] = useState(initFormState)
    const [exerciseEditState, setExerciseEditState] = useState(exerciseProp)
    const [ exerciseFields, setExerciseFields ] = useState(initFormState.exercises)
    // console.log(exerciseFields)

    // const addExercise = (e) => {
    //   e.preventDefault()
    //   // this is a function that will add an object to the array that is exercises
    //   setExerciseFields(item => {
    //     return ([...formState.exercises, { exercise: {
    //       exercise_name: '',
    //       exercise_description: '',
    //       reps: {
    //         minmax: [0, 0]
    //       },
    //       sets: 0,
    //       muscle_groups: '',
    //       img_example: ''
    //       }
    //     }
    //     ])
    //     // setUpdate(true)
    //   })
    // }
    //as it is, the fields are loading. but now, whenever you type in the name field,
    //it starts typing in all the name fields. 
    //so i need to reference MERN lab and see how we specificied that.


    // const handleAdd = (event) => {
    //   event.preventDefault()
    //   const index = event.target.id
    //   setExerciseFields(event => {
    //     const newExercises = event.slice()
    //     newExercises[index].value = event.target.value

    //     return newExercises
    //   })
    // }


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
                  {exerciseFields.map((index) => {
                    
                    return(
                      <>
                        {console.log(index)}
                      <div key={ index }>
                        <label> Name:* 
                          <input type='text' onChange={() => {handleChange()}} value={formState.exercises[0].exercise_name.index}/>
                        </label> 
                        <label> Description:*
                          <input id='exercise_description' type='text' onChange={handleChange} value={formState.exercises[0].exercise_description}/>
                        </label> 
                        <label> Sets:* 
                          <input id='sets' type='text' onChange={handleChange} value={formState.exercises[0].sets}/>
                        </label> 
                        <label> Min Reps:* 
                          <input id='reps.min' type='text' onChange={handleChange} value={formState.exercises[0].reps.minmax[0]}/>
                        </label> 
                        <label> Max Reps:* 
                          <input id='reps.max' type='text' onChange={handleChange} value={formState.exercises[0].reps.minmax[1]}/>
                        </label> 
                        <label> Muscle (Groups)*: 
                          <input id='muscle_groups' type='text' onChange={handleChange} value={formState.exercises[0].muscle_groups}/>
                        </label> 
                        <label> Image, Video, or GIF: 
                         <input id='img_example' type='text' onChange={handleChange} value={formState.exercises[0].img_example}/>
                        </label> 
                      </div>
                      </>
                      
                    )
                   })
                  } 
                  </label> 

                  {/* <button 
                    type='button'
                    onClick={(e) => {addExercise(e)} }
                    > + </button> */}
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
                            {/* <button onClick={() => {handleDelete()}}>Delete</button> */}
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