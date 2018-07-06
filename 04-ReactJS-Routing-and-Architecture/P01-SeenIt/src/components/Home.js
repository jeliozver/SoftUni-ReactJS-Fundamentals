import React from 'react';
import { Redirect } from 'react-router-dom';

import About from './About';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import authService from '../utilities/authService';

const Home = (props) => {
  let isAuth = authService.isAuth();
  
  if (isAuth) {
    return (
      <Redirect to="catalog/" />
    );
  }
  
  return (
    <section id="viewWelcome">
      <div className="welcome">
        <div className="signup">
          <LoginForm {...props}/>
          <RegisterForm {...props}/>
        </div>
        <About />
      </div>
    </section>
  );
};

export default Home;