import React from 'react';
import "./Accordion.css"

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-wrapper">
        
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
          {isOpen ? <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 0.999999C7.49187 0.999998 1 7.49187 1 15.5C1 23.5081 7.49187 30 15.5 30C23.5081 30 30 23.5081 30 15.5C30 7.49187 23.5081 0.999999 15.5 0.999999Z" stroke="white" stroke-width="2"/>
<path d="M21.2998 17.675L15.4998 11.875L9.6998 17.675" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 30C23.5081 30 30 23.5081 30 15.5C30 7.49187 23.5081 1 15.5 1C7.49187 1 1 7.49187 1 15.5C1 23.5081 7.49187 30 15.5 30Z" stroke="white" stroke-width="2"/>
<path d="M9.69995 13.325L15.5 19.125L21.3 13.325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
export default Accordion