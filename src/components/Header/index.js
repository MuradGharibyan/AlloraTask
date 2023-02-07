import React from 'react';
import './style.scss';
import { Logo } from '../../assets/svgs/Logo';
import { Link } from 'react-router-dom';
import { LangIcon } from '../../assets/svgs/Icons';

const Header = () => {
  return (
    <header className="container">
      <LogoBlock />
      <HeaderRightSide/>
    </header>
  );
};

const LogoBlock = ()=> (
  <div className='logo_block'>
    <a href='/'>
      <Logo/>
    </a>
  </div>
)

const HeaderRightSide = () => {
  return (
    <nav className='navbarblock'>
      <ul>
        <li>
          <Link to='/work'>
            Work
          </Link>
        </li>
        <li>
          <Link to='/services'>
            Services
          </Link>
          </li>
      </ul>
      <ul>
        <li>
          <a href="tel:+112456126">
            +112456126
          </a>
        </li>
        <li>
          <a href="mailto:hellomedium.com">
            hellomedium.com
          </a>
        </li> <li>
          <a href="mailto:hellomedium.com">
            Let's Talk
          </a>
        </li>
      </ul>
      <ul className='language_block'>
        <li >
          Be
          <LangIcon/>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
