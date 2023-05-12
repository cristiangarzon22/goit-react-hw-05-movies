import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';
const SharedLayout = () => {
  return (
    <>
    <div className={css.div}>
      <nav className={css.nav}>

 <Link to="/" className={css.box}>Home</Link>
  <Link to="/movies" className={css.box}>movies</Link>
 
      </nav>
      

    </div>
    <Outlet />
    </>
  );
}

export default SharedLayout;
