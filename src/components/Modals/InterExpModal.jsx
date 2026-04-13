import React from 'react';
import image1 from '../../logo/interpro.png';
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
          <img className='companyImg' src={image1} alt='/' />
          <div className="polaroidCaption">camera shy<br />2023</div>
        </div>
        <div className='modalRight'>
          <h1 className='title'>Software Engineer</h1>
          {/* Content Details */}
          <div className='content contentFont'>
            {/* <p>{'\u2022'} Implemented InterPro Solutions’ flagship application EZMaxMobile based on client’s requirements using <br/>Java, Spring Boot, JSON, Angular, Struts, Typescript, and IBM Maximo custom Business Object APIs.</p>
            <p>{'\u2022'} Used React JS to customize the layout of InterPro Solutions’ EZMaxRequest</p>
            <p>{'\u2022'} Used developer environment to test the UI of EZMaxMobile, confirming it is crossed-referenced with IBM Maximo</p>
            <p>{'\u2022'} Handle incoming tickets pertaining to client’s custom built EZMaxMobile with support team and team architect</p> */}
            <p>{'\u2022'}Developed flagship mobile applications (EZMaxMobile) using Java, Spring Boot, and TypeScript, integrating complex IBM Maximo Business Object APIs to meet custom client requirements</p>
            <p>{'\u2022'}Customized UI/UX layouts for the EZMaxRequest platform using React.js, improving user navigation and interface responsiveness</p>
            <p>{'\u2022'}Validated cross-platform compatibility between mobile interfaces and backend IBM Maximo databases throughrigorous environment testing</p>
            <p>{'\u2022'}Resolved high-priority technical tickets in collaboration with architects and support teams to maintain Client-Specific builds</p>
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