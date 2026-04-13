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
          <div className="polaroidCaption">A visit to Mitsubishi Electric Headquarters Tokyo 7-11-24</div>
        </div>
        <div className='modalRight'>
          <h1 className='title'>Software Development Engineer</h1>
          {/* Content Details */}
          <div className='content contentFont'>
                      <p>{'\u2022'}Developed core features for the GENESIS64 recipe component, enabling real-time creation and management of industrial manufacturing recipes</p>
                      <p>{'\u2022'}Automated QA workflows by developing end-to-end test suites using Selenium and Appium, significantly reducing manual testing cycles</p>
                      <p>{'\u2022'}Collaborated on Migrating ScheduleWorX module code from C++ to C# , transitioning the architecture from 32-bit to 64-bit to enhance system performance and maintainability</p>
                      <p>{'\u2022'}Managed and configured QA environments, for both manual tests and automated testing, ensuring reliable test execution</p>
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