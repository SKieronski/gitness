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

// =======
import { useState, useEffect } from 'react';
// import axios from 'axios';
// >>>>>>> main

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [ openModal, setOpenModal] = useState(false)
  useEffect(() => {
    fetch('https://gitness-ga-earth-api.herokuapp.com/')
      .then((res) => res.json())

      .then((json) => {
        setWorkouts(json);
      })

      .catch(console.error);
  }, []);
  console.log(workouts);
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

  //AXIOS CALLS

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
      {openModal && <Modal closeModal={ setOpenModal }/>}
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
          <RoutinesBanner workouts={workouts} setOpenModal={setOpenModal}/>
        </section>
        <Spacer />
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
