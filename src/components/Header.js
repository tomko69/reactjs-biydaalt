import React from 'react';
import Logo from '../assets/logo.png';


const Header = () => {
  return <header className='py-8'>
<div className='container mx-auto'>
  <div className='flex justify-between items-center'>
    <a href='#'>
     <h1 className='logo  lg:text-[50px]'>ТМР</h1>
    </a>

<button className='btn btn-sm '>Reactjs Portfolio</button>

  </div>
</div>
  </header>;
};

export default Header;
