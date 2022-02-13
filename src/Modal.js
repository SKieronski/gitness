import React from 'react'
import './Modal.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Modal = ({closeModal, formState, setFormState, handleSubmit}) => {
    
    
    const url = 'https://gitness-ga-earth-api.herokuapp.com/routines'
    //May need to have two states, one for routines and one for exercises. Then combine the states before making 
    //a post request.
    //2. We change the database to have different field names and then use those field names in our inputs.
   
    const handleChange = (event) => {
        event.preventDefault()
        //if the ID is minmax, make the value an array and pass that to setFormState
        // if(event.target.id === "reps.min"){
        //     let temp = formState.reps.minmax;
        //     temp[0] = event.target.value;
        //     setFormState({...formState, "reps.minmax": temp})
        // } else if(event.target.id === "reps.max") {
        //     let temp = formState.reps.minmax;
        //     temp[1] = event.target.value;
        //     setFormState({...formState, "reps.minmax": temp})
        // } else {
        //     setFormState({ ...formState, [event.target.id]: event.target.value});
        // }
        // setFormState({ ...formState, [event.target.id]: event.target.value});

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
        
        //how to go about muscle groups and reps minmax
        // console.log(formState);
    }

    // const initFormState = {
    //   routine_name: "",
    //   routine_description: "",
    //   exercises: [
    //       {
    //           exercise_name: "",
    //           exercise_description: "",
    //           reps: {
    //               minmax: [0,0]
    //           },
    //           sets: 0,
    //           muscle_groups: "",
    //           img_example: ''
    //       }
    //   ]
    // }
  
    // const [formState, setFormState] = useState(initFormState);
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Clicked submit");
    //     console.log(formState);    
        
      
    //     let tempForm = formState
        
    //     let myMuscles = tempForm.exercises[0].muscle_groups;
    //     if(myMuscles.includes(",")){
    //       let arrayOfMuscles = myMuscles.split(", ");
    //       tempForm.exercises[0].muscle_groups = arrayOfMuscles;
    //     }
       
    //     // console.log(myMuscles)
    //     // console.log(arrayOfMuscles);
    //     setFormState({...tempForm})
    //     console.log(formState);
      
    //     //   const newItem = {
    //     //   name: 'hello',
    //     //   description: 'hello',
    //     //   exercises: [{ name: 'hello' }]
    //     // };
    //     console.log("Attempting to post");
    //     axios.post('https://gitness-ga-earth-api.herokuapp.com/routines', formState)
    //     .then(res => console.log(res))
    //     .catch(error => {
    //       console.error(error);
    //     });
    //   }

    return(
        <div className='modalBackground'>
          <div className='modalContainer'>
            <form onSubmit={handleSubmit}>
            <div className='modaltitle'>
              <h2>Let's build a routine</h2>
              <button type='button' onClick={() => {handleSubmit()}}>X</button>
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
                    <label> Name:* 
                     <input id='exercise_name' type='text' onChange={handleChange} value={formState.exercises[0].exercise_name}/>
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
                  </label> 
              </div>
              <div className='modalfooter'>
               <button type='submit' value='submit'/>
                <p> * = required field</p>        
              </div>
              </form>
          </div>
        </div>
        
    )
}


export default Modal