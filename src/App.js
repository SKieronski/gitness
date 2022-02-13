// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import RoutinesBanner from './RoutinesBanner';
import Footer from './Footer';
import Spacer from './Spacer';
import Modal from './Modal';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    fetch('https://gitness-ga-earth-api.herokuapp.com/')
      .then((res) => res.json())

      .then((json) => {
        setWorkouts(json);
      })

      .catch(console.error);
  }, []);
  console.log(workouts);

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

  const [formState, setFormState] = useState(initFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Clicked submit');
    console.log(formState);

    let tempForm = formState;

    let myMuscles = tempForm.exercises[0].muscle_groups;
    if (myMuscles.includes(',')) {
      let arrayOfMuscles = myMuscles.split(', ');
      tempForm.exercises[0].muscle_groups = arrayOfMuscles;
    }

    // console.log(myMuscles)
    // console.log(arrayOfMuscles);
    setFormState({ ...tempForm });
    console.log(formState);

    //   const newItem = {
    //   name: 'hello',
    //   description: 'hello',
    //   exercises: [{ name: 'hello' }]
    // };
    console.log('Attempting to post');
    axios
      .post('https://gitness-ga-earth-api.herokuapp.com/routines', formState)
      .then((res) => console.log(res))
      .catch((error) => {
        console.error(error);
      });
  };
  //   const [routinesData, setRoutinesData] = useState([]);
  // this is the collection of all routines from the db

  // const url = 'http://localhost:8000/routines';

  // const getRoutines = async () => {
  //   try {
  //     const res = await axios.get(url)
  //     const json = await res.json()
  //     setRoutines(res.data)
  //     // console.log(res.data)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // useEffect( () => {
  //   getRoutines(routines)
  //   console.log(routines)
  // }, [])

  // const getRoutines = async () => {
  //   try {
  //     const res = await axios.get(url);
  //     setRoutinesData(res);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getRoutines();
  // }, []);

  // const [newRoutine, setNewRoutine] = useState('');
  // // const [ routines, setRoutines ] = useState([])

  // const handleChange = (event) => {
  //   setNewRoutine(event.target.value);
  //   // console.log(newRoutine)
  // };

  //AXIOS CALLS=====================================================================

  //POST NEW
  // const handleSubmit = (routine) => {
  //   routine.preventDefault();
  //   const newItem = {
  //     name: newRoutine,
  //     description: 'hello',
  //     exercises: [{ name: 'hello', reps: 4 }]
  //   };
  //   axios.post(url, newItem);
  // };
  // console.log(routinesData)

  // DELETE BY ID
  // const handleClick = (routine) => {
  // const uniqueURL = `https://localhost:8000/routines/${routine._id}`
  // axios.delete(uniqueURL, routine._id)
  // }

  // UPDATE BY ID

  // const handleClick = (routine) => {
  //   const uniqueURL = `http://localhost:8000/routines/${routine._id}`
  //   const newItem = {
  //     name: newRoutine,
  //     description: 'hello',
  //     exercises: [{ name: "hello", reps: 4 }]
  //   }
  //   axios.put(uniqueURL, newItem)
  // }
  // axios.put(uniqueURL, { name: 'jojo', description: 'bing bong', exercises: [{ name: 'bing', reps: { minmax: [ 4, 8 ]}}]}

  return (
    <div>
      {/* <Modal /> */}
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          formState={formState}
          setFormState={setFormState}
          handleSubmit={handleSubmit}
        />
      )}
      <div className="scrolling-box">
        <section id="home">
          <Nav />
          <Header />
        </section>
        <Spacer />
        <section id="routines">
          {/* <form onSubmit={ handleSubmit }>
            <input type='text' value = { newRoutine } onChange = { handleChange }/>
            <input type='submit' />
          </form> */}
          <RoutinesBanner workouts={workouts} setOpenModal={setOpenModal} />
        </section>
        {/* <Spacer /> */}
        <section id="team">
          <About />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
