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
        <div className="polaroidWrap">
          <img className='companyImg' src={image} alt='/' />
          <div className="polaroidCaption">meet the team!</div>
        </div>
        <div className='modalRight'>
          <h1 className='title'>Details</h1>
          {/* Content Details */}
          <div className='content contentFont'>
            {/* <p>{'\u2022'} Used C# in Visual Studio and ASP .NET to implement test cases that can be called by Allscripts’ test server</p>
            <p>{'\u2022'} Used Microsoft Azure web service to automate regression test cases in the business layer of Allscripts’ AccessManager Software</p>
            <p>{'\u2022'} Created audit test cases that ensures authorization information are crossed checked within Access Manager Database</p>
            <p>{'\u2022'} Reported bugs found within Access Manager on Team Foundation Server and worked with QAs, Developers, and the Principal Architect to resolve the issue</p>
            <p>{'\u2022'} Participated in code review with my mentors to ensure test files followed good coding practices</p> */}
            <p>{'\u2022'}Developed automated test cases using the ASP.NET framework to interface with the Allscripts test server, improving testing efficiency and reliability</p>
            <p>{'\u2022'}Automated business-layer regression tests for AccessManager software using Microsoft Azure web services, reducing manual testing overhead.</p>
            <p>{'\u2022'}Designed audit test cases to validate and cross-check authorization data within the AccessManager SQL Database,data integrity and security compliance.</p>
            <p>{'\u2022'}Managed the end-to-end defect lifecycle by identifying and reporting bugs via the Team Foundation Server, collaborating with developers and the Principal Architect to resolve issues.</p>
            <p>{'\u2022'}Upheld high code quality standards through active participation in peer code reviews, ensuring all test scripts adhere to industry standards and maintainable design patterns</p>

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