import React from 'react';

const Header = () => {
  return (
    <>
     <div className='header-name '>
                    <h1 className='family'>
                            Family Wellness
                    </h1>
                    <p className='massage'>
                        MASSAGE THEREPY
                    </p>
                </div>
    <header className="bg-gray-400 p-4">
      <nav className="flex items-center justify-between">
        {/* <div className="text-white font-bold text-lg">My Website</div> */}
        {/* Add your navigation links here */}
        <div className='navbar'><a href="#contact">Home</a></div>
                    <div className='navbar'>About</div>
                    <div className='navbar'>Career</div>
                    <div className='navbar'>FQA</div>
                    <div className='navbar'>Contact</div>
                
      </nav>
    </header>
    </>
  );
};

export default Header;