import Nav from './Nav';
function Header() {
  return (
    <div className="headerBox">
      <Nav />
      <section className="contentBox">
        <h1 className="headerTextBox">
          BE YOUR <span className="yellowFont">BEST</span>
        </h1>
      </section>
    </div>
  );
}
export default Header;
