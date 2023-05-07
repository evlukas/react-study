import { Link, NavLink, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <li>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
};

export default CustomLink;
