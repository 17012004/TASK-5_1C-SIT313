import React, { useState } from 'react';
import './Options.css';

const OPTIONS = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('FIRSTOPTION');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className='OptionsSelector'>
      <p>Select an option: 
        <span className='Options'>
          <span
            className={`Option  ${selectedOption === 'FIRSTOPTION' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('FIRSTOPTION')}
          >
            {selectedOption === 'FIRSTOPTION' && <span className='SelectedIndicator'>&#9679;</span>}
            Question
          </span>
          <span
            className={`Option ${selectedOption === 'SECONDOPTION' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('SECONDOPTION')}
          >
            {selectedOption === 'SECONDOPTION' && <span className='SelectedIndicator'>&#9679;</span>}
            Article
          </span>
        </span>
      </p>
    </div>
  );
};

export default OPTIONS;
