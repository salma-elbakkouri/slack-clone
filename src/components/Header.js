import React from 'react';
import logo from '../resources/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Header = () => {
  return (
    <header className='flex flex-row items-center justify-between px-[115px] py-[20px]'>

      <div className='flex flex-row gap-[25px] justify-center items-center '>
        <img src={logo} alt='logo' className='w-[105px] h-[48px]'></img>
        <a href='#' className='font-medium tracking-wide text-dark-gray '>Features<FontAwesomeIcon icon={faChevronDown} className="h-[10px] ml-1 mb-[2px] icon-bold" /></a>
        <a href='#' className='font-medium tracking-wide text-dark-gray '>Solutions<FontAwesomeIcon icon={faChevronDown} className="h-[10px] ml-1 mb-[2px] icon-bold" /></a>
        <a href='#' className='font-medium tracking-wide text-dark-gray hover:underline hover:decoration-1'>Entreprise</a>
        <a href='#' className='font-medium tracking-wide text-dark-gray'>Resources<FontAwesomeIcon icon={faChevronDown} className="h-[10px] ml-1 mb-[2px] icon-bold" /></a>
        <a href='#' className='font-medium tracking-wide text-dark-gray hover:underline hover:decoration-1'>Pricing</a>
      </div>
      <div className='flex flex-row gap-6 items-center justify-between'>
        <a href='#' className='font-medium tracking-wide text-dark-gray'><FontAwesomeIcon icon={faSearch} className="h-[20px] ml-1 mt-[5px] icon-bold" /></a>
        <a href='#' className='font-medium tracking-wide text-dark-gray hover:underline hover:decoration-1'>Sign in</a>
        <button className='font-medium w-[150px] tracking-wide text-dark-gray bg-white text-dark-purple p-2 border-[1px] border-dark-purple rounded-[4px] hover:border-[2px]'>TALK TO SALES</button>
        <button className='font-medium w-[150px] tracking-wide text-dark-gray bg-dark-purple p-2 text-white border-[1.7px] border-dark-purple  rounded-[4px] hover:bg-very-dark-purple'>GET STARTED</button>

      </div>
    </header>


  );
};

export default Header;
