import React from "react";

const Section = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <div className='container'>{children}</div>
    </div>
  );
};

export default Section;
