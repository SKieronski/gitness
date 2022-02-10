import AboutCard from './AboutCard';

function About() {
  return (
    <div className="aboutBox">
      <h1 className="title">
        MEET THE <span id="yellowFont"> TEAM</span>
      </h1>
      <AboutCard />
      <AboutCard />
      <AboutCard />
    </div>
  );
}
export default About;
