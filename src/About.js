function About() {
  return (
    <div className="aboutBox">
      <h1 className="title">
        MEET THE <span id="yellowFont"> TEAM</span>
      </h1>
      <div id="aboutCardBox">
        <div className="topBox1"></div>
        <div className="bottomBox">
          <h2 id="aboutTitle">SCOTT</h2>
          <p id="aboutText">
            Scott is a Software Engineering fellow at General Assembly. With
            Gitness, he hopes to bring an app that makes viewing and creating
            workout routines easy!
          </p>
        </div>
      </div>
      <div id="aboutCardBox">
        <div className="topBox2"></div>
        <div className="bottomBox">
          <h2 id="aboutTitle">DERRICK</h2>
          <p id="aboutText">
            Derek is a record-setting weight lifter after just 6 months in the
            gym. They start each morning breezing through 60 single-finger
            handstand pushups. They bench 100kg and slam 180kg on the squat rack
            with ease. Derek built this app so that other chumps can learn from
            their expertise, and maybe they can learn a thing or two, too.
          </p>
        </div>
      </div>
      <div id="aboutCardBox">
        <div className="topBox3"></div>
        <div className="bottomBox">
          <h2 id="aboutTitle">STAR</h2>
          <p id="aboutText">
            Star loves to make things look great. This project gave her a chance
            to expand on her existing skills and push herself to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
