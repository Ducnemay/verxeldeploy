import React, { Fragment } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import './Layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (

    <Fragment>

<div className="layout">
     <Header/>
      <div className="main-content">

         <Outlet/>
       
      </div>
      
      <Footer />
    </div>

    </Fragment>
  
  );
}

export default Layout;
