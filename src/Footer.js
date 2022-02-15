function Footer() {
  return (
    <div className="footerBox">
      <div className="titleFooterBox">
        <h1 className="titleFooter">
          ABOUT <span id="yellowFont"> US</span>
        </h1>
      </div>
      <div className="aboutTextBox">
        <p className="aboutText">
          Gitness is an app created for anyone who works out - from novice to
          expert. Peruse the routines of other people or post your own. Let’s
          share our knowledge so we can Git Fit together with Gitness.
        </p>
      </div>
      <div className="footerLinkBox">
        <div className="logo"></div>
        <div className="row1">
          <a href="#home" id="link">
            Home
          </a>
          <a href="#routines" id="link">
            Routines
          </a>
          <a href="#about" id="link">
            Dev Team
          </a>
          <a href="#footer" id="link">
            About Us
          </a>
        </div>
        <div className="row2">
          <a href="https://github.com/SKieronski/gitness" id="link">
            Github
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
