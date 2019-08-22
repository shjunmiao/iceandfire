import React from 'react';

const InfoRow = ({label, children, nextLine = false}) => (
  <div className="mt-2">
    {nextLine ? <div className="h6">{label}: </div>: <span className="h6">{label}: </span>}
    {children}
  </div>
)

export default InfoRow;
