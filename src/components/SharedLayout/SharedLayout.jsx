import React from 'react';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';
const SharedLayout = () => {
  return (
    <>
      <div className={css.div}>
        <nav className={css.nav}>
          <button className={css.box1}>
            <Link to="/" className={css.btn}>
              Home
            </Link>
          </button>
          <button className={css.box2}>
            <Link to="/movies" className={css.btn}>
              Movies
            </Link>
          </button>
        </nav>
      </div>
      <Suspense fallback={<div>funciona...</div>}>
      <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
