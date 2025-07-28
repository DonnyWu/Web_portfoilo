import React from 'react';
import image from '../../logo/Allscripts-Platform-team.jpg';
import '../../Modal.css';

const AllscriptModal = ({ open, onClose }) => {
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
        <img className='companyImg' src={image} alt='/' />
        <div className='modalRight'>
          <h1 className='title'>Details</h1>
          {/* Content Details */}
          <div className='content contentFont'>
            <p>{'\u2022'} Used C# in Visual Studio and ASP .NET to implement test cases that can be called by Allscripts’ test server</p>
            <p>{'\u2022'} Used Microsoft Azure web service to automate regression test cases in the business layer of Allscripts’ AccessManager Software</p>
            <p>{'\u2022'} Created audit test cases that ensures authorization information are crossed checked within Access Manager Database</p>
            <p>{'\u2022'} Reported bugs found within Access Manager on Team Foundation Server and worked with QAs, Developers, and the Principal Architect to resolve the issue</p>
            <p>{'\u2022'} Participated in code review with my mentors to ensure test files followed good coding practices</p>
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

export default AllscriptModal;