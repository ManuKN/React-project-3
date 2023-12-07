import React, { useState } from 'react';
import './Content8.css'

function Content8() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='list'>
      <div className='dropdown'>
        <button className='dropdown-trigger' onClick={handleToggleDropdown}>
          Jobs
        </button>
        <div className='dropdown-content' style={{ display: isOpen ? 'block' : 'none' }}>
          <p>Java devop</p>
          <p>Javascript devop</p>
          <p>Python devop</p>
          <p>React devop</p>
        </div>
      </div>
      <div className='contact'>Contact</div>
      <div className='feedback'>Feedback</div>
      <div className='setting'>Settings</div>
      <div className='account'>Account</div>
    </div>
  );
}

export default Content8;
