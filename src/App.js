// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import RoutinesBanner from './RoutinesBanner';
import Footer from './Footer';
import Spacer from './Spacer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="scrolling-box">
        <section id="home">
          <Header />
        </section>
        <Spacer />
        <section id="routines">
          <RoutinesBanner />
        </section>
        <Spacer />
        <section id="about">
          <About />
        </section>
        <Spacer />
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
