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
          <div className="polaroidCaption">meet the team! <br /> Summer 2019</div>
        </div>
        <div className='modalRight'>
          <h1 className='title'>Software Engineer Intern</h1>
          {/* Content Details */}
          <div className='content contentFont'>
            {/* <p>{'\u2022'} Used C# in Visual Studio and ASP .NET to implement test cases that can be called by Allscripts’ test server</p>
            <p>{'\u2022'} Used Microsoft Azure web service to automate regression test cases in the business layer of Allscripts’ AccessManager Software</p>
            <p>{'\u2022'} Created audit test cases that ensures authorization information are crossed checked within Access Manager Database</p>
            <p>{'\u2022'} Reported bugs found within Access Manager on Team Foundation Server and worked with QAs, Developers, and the Principal Architect to resolve the issue</p>
            <p>{'\u2022'} Participated in code review with my mentors to ensure test files followed good coding practices</p> */}
            <p>{'\u2022'}Automated regression testing for the Access Manager business layer using C#, ASP.NET, and Microsoft Azure web services</p>
            <p>{'\u2022'}Developed audit test cases to verify authorization security protocols within the Access Manager database</p>
            <p>{'\u2022'}Designed audit test cases to validate and cross-check authorization data within the AccessManager SQL Database,data integrity and security compliance.</p>
            <p>{'\u2022'}Setup quality assurance testing environment in order to run test case manually within Access Manager</p>
            <p>{'\u2022'}Identified and documented critical bugs using Team Foundation Server (TFS), collaborating with Developers and the Principal Architect to implement fixes</p>

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