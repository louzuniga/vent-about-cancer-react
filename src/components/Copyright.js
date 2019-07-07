import React from 'react';

const Copyright = () => {
  let d = new Date();

  return (
    <div className='copyright footer-social-icons'>
      <ul className='social-icons'>
        <li className='footer-list'>
          <a className='social-icon'>
            Copyright {d.getFullYear()} Lourexel Zuniga
          </a>
        </li>
        <li className='footer-list'>
          <a
            href='mailto:lourexelzuniga@gmail.com?Subject=Personal-Portfolio'
            className='social-icon'
          >
            <i className='fas fa-envelope-open' />
          </a>
        </li>
        <li className='footer-list'>
          <a
            href='https://www.linkedin.com/in/lourexelzuniga/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-linkedin' />
          </a>
        </li>
        <li className='footer-list'>
          <a
            href='https://github.com/louzuniga'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-github-alt' />
          </a>
        </li>
        <li className='footer-list'>
          <a
            href='https://twitter.com/louzuniga'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-twitter' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Copyright;
