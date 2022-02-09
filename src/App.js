// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Routines from './Routines';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div class="scrolling-box">
        <section id="home">
          <Header />
        </section>
        <section id="routines">
          <Routines />
        </section>
        <section id="about">
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
