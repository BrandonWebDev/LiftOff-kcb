import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Button from "react-bootstrap/Button";

export const NavBarBusinessOwner = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <div className='navDiv'>
        <Stack
          id='navBarSearcher'
          direction='horizontal'
          className='m-4'>
          <NavLink className={({ isActive }) =>
            isActive ? 'navLinkAct' : 'navLink'
          } to='/businessowner/home'>Home</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? 'navLinkAct' : 'navLink'
          } to="/businessowner/search" >Search</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? 'navLinkAct' : 'navLink'
          } to="/businessowner/liked" >Liked</NavLink>
        </Stack>
      </div>
    )
  } else {
    return (
      <Button variant='secondary' align='start'>
              <NavDropdown title="Menu" id="collasible-nav-dropdown" class="dropdownLink" menuVariant='dark'>
                <NavDropdown.Item href="/businessowner/home" >Home</NavDropdown.Item>
                <NavDropdown.Item href="/businessowner/search">Search</NavDropdown.Item>
                <NavDropdown.Item href="/businessowner/liked">Liked</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
              </Button>
    )
  }
}