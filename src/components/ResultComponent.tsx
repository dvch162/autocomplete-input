import React from 'react';

interface ResultComponentProps {
  amount: number;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ amount }) => {
  return (
    <div className="result_container">
      <div className="result_value">{!isNaN(amount) && amount}</div>
    </div>
  );
};

export default ResultComponent;
