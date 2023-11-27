import React, { useState } from 'react';
import './MemberShip.css';

function MemberShip() {
  const [selectedPlan, setSelectedPlan] = useState('free'); // Default to 'free'

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit selected plan, for example to a backend server
    console.log('Selected Plan:', selectedPlan);
  };

  return (
    <div className="pricing-plan-container">
      <h1>Choose the plan that’s right for you</h1>
      <div className="plans">
        <div 
          className={`plan ${selectedPlan === 'free' ? 'selected' : ''}`} 
          onClick={() => setSelectedPlan('free')}
        >
          Free
        </div>
        <div 
          className={`plan ${selectedPlan === 'premium' ? 'selected' : ''}`} 
          onClick={() => setSelectedPlan('premium')}
        >
          Premium
        </div>
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default MemberShip;
