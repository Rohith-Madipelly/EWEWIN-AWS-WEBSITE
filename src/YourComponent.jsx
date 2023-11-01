import React, { useState, useEffect } from 'react';

function YourComponent() {
  const [winningData, setWinningData] = useState([]);
  const [winnerAmount,setWinnerAmount]=useState([]);
  const resTime = [
    {
      "_id": "6542358f400496950eee1715",
      "rank": "1",
      "amount": "15000",
      "createdAt": "2023-11-01T11:25:03.513Z",
      "updatedAt": "2023-11-01T11:25:03.513Z",
      "__v": 0
    },
    {
      "_id": "65423596400496950eee1721",
      "rank": "2",
      "amount": "10000",
      "createdAt": "2023-11-01T11:25:10.568Z",
      "updatedAt": "2023-11-01T11:25:10.568Z",
      "__v": 0
    },
    {
      "_id": "6542359d400496950eee172c",
      "rank": "3",
      "amount": "7000",
      "createdAt": "2023-11-01T11:25:17.633Z",
      "updatedAt": "2023-11-01T11:25:17.633Z",
      "__v": 0
    }
  ];

  useEffect(() => {
    // Update the winningData state with resTime
    setWinningData(resTime);
  }, []);

  useEffect(() => {
    // Log every amount in the winningData array
    winningData.forEach(item => {
      console.error(item.amount);
      setWinnerAmount[winnerAmount.push(item.amount)]
    });
  }, [winningData]);

  return (
    <div>
   {winnerAmount.map((amount, index) => (
        <div key={index}>{amount}</div>
      ))}
    </div>
  );
}

export default YourComponent;
