import { NavLink } from "react-router-dom";

const Menu = () => {
  const isActive = ({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "activeLink" : "";
  return (
    <nav>
      <NavLink className={isActive} to=".">Home</NavLink>
      <NavLink className={isActive} to="about">About</NavLink>
      <NavLink className={isActive} to="contacts">Contacts</NavLink>
      <NavLink className={isActive} to="courses" end>Courses</NavLink>
    </nav>
  );
};

export default Menu;
