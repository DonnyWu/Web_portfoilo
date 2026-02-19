import React from 'react';
import image_mitsubishi from '../../logo/mitsubishi-board.jpeg';
import '../../Modal.css';

const InterModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        {/* Experince logo */}
        <div className="polaroidWrap">
          <img className='companyImg' src={image_mitsubishi} alt='/' />
          <div className="polaroidCaption">test</div>
        </div>
        <div className='modalRight'>
          <h1 className='title'>Details</h1>
          {/* Content Details */}
          <div className='content contentFont'>
                      <p>{'\u2022'}Developed and maintained features for GENESIS64 recipe component, which aims to allow real-me use, creation, and management of these recipes</p>
                      <p>{'\u2022'}Created Automated test using selenium and Appium to improve QA testing efforts efficiency</p>
                      <p>{'\u2022'}Worked with a team to migrate an exisng module: ScheduleWorX’s code from C++ to C# allowing for 64 bits architecture from 32 bit and easier code maintainability</p>
                      <p>{'\u2022'}Setup and maintained QA environments, for manual tests conducted by QA team as well as for automation tests</p>
          </div>
          <div className='btnContainer'>
            <button className='btnOutline' onClick={onClose}>
              <span className='bold'>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterModal;