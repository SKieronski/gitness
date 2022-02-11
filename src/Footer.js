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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
