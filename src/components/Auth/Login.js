import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [dataForm, setForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = dataForm;

  const onChange = data =>
    setForm({ ...dataForm, [data.target.name]: data.target.value });

  const onSubmit = async data => {
    data.preventDefault();
    console.log('Success');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'>Login to Your Account</p>
      <form className='form' onSubmit={data => onSubmit(data)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={data => onChange(data)}
            required
          />
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
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
