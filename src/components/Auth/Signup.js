import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { users } from '../../actions/index';

const Signup = () => {
  const [dataForm, setForm] = useState({
    name: '',
    email: '',
    password: '',
    samePassword: ''
  });

  const { name, email, password, samePassword } = dataForm;

  const onChange = data =>
    setForm({ ...dataForm, [data.target.name]: data.target.value });

  const onSubmit = async data => {
    data.preventDefault();
    if (password !== samePassword) {
      alert('Password does not match');
    } else {
      const newUser = {
        name,
        email,
        password
      };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const body = JSON.stringify(newUser);
        console.log(newUser);

        const res = await axios.post('users', body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>Create Your Account</p>
      <form className='form' onSubmit={data => onSubmit(data)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={data => onChange(data)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='8'
            value={password}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='samePassword'
            minLength='8'
            value={samePassword}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Signup' />
      </form>
      <p className='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </Fragment>
  );
};

export default Signup;
