import React, { useState } from 'react';

const AddMoneyForm = () => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;

    // Validate if the input contains only digits
    if (!/^\d+$/.test(inputValue)) {
      setErrorMessage('Amount should contain digits only.');
    } else if (inputValue.includes('.')) {
      // Validate if the input contains a decimal point
      setErrorMessage('Amount should not have decimal values.');
    } else {
      setErrorMessage('');
      setAmount(inputValue);
    }
  };

  const handleAddMoneyClick = () => {
    // Handle the logic for adding money (e.g., sending a request to the server)
    // For demonstration purposes, we'll just log the amount to the console
    console.log(`Adding Rs. ${amount}`);
  };

  return (
    <div>
      <label>
        Enter amount:
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
      </label>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleAddMoneyClick} disabled={errorMessage !== ''}>
        Add Money {amount}
      </button>
    </div>
  );
};

export default AddMoneyForm;
