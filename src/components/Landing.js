import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Vent About Cancer</h1>
          <p className='lead'>
            "We must embrace pain and burn it as fuel for our journey" -Kenji
            Miyazawa
          </p>
          <p className='lead'>
            This is a place for cancer victims and/or their loved ones who just
            needs to let it out. Create a profile, customize your profile with
            vent sessions and aweseom stories, and freely post anything your
            desire on the public blog post. Sometimes it helps to let it all out
            and knowing that there are other people going through the same
            emotional toll.{' '}
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;