import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
  NavLink
} from 'reactstrap';
function Nav() {
  return (
    <div className="navBarBox">
      <Navbar color="faded" light>
        <NavbarBrand className="me-auto" href="/">
          reactstrap
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Nav;
