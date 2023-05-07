import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <>
      <header>
        <ul>
          <CustomLink className={setActive} to="/">
            Home
          </CustomLink>
          <CustomLink className={setActive} to="/posts">
            Blog
          </CustomLink>
          <CustomLink className={setActive} to="/about">
            About
          </CustomLink>
        </ul>
      </header>

      <Outlet />

      <main className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          erat quis commodo bibendum. Curabitur ac convallis neque, eget
          fringilla neque. Integer id blandit odio. Sed accumsan, urna et rutrum
          molestie, sem lorem condimentum turpis, id elementum tortor quam eget
          augue. Nam facilisis, diam eget feugiat commodo, urna ipsum feugiat
          erat, sit amet cursus lorem mauris sit amet neque. Nunc ut nulla et
          magna consequat hendrerit. Suspendisse potenti. Pellentesque congue
          consequat rutrum. Sed ac nisi ac risus mollis maximus. Vestibulum
          molestie dignissim fermentum. Curabitur id lorem eu quam ultricies
          lobortis.
        </p>

        <p>
          Phasellus placerat enim at nisi faucibus mollis. In eleifend sodales
          lectus sed iaculis. Morbi sed euismod diam, ut accumsan est.
          Suspendisse elementum orci ut nisl tempus, eget efficitur arcu
          fermentum. Donec mauris arcu, facilisis vitae tortor ac, rhoncus
          elementum massa. Mauris eget eleifend leo. Interdum et malesuada fames
          ac ante ipsum primis in faucibus.
        </p>
      </main>

      <footer className="container">@ Все права в полном порядке</footer>
    </>
  );
};

export default Layout;
