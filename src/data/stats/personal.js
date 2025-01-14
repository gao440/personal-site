import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-09-14T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'sight',
    label: 'Current Vision',
    value: 'Bad',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 6,
  },
  {
    key: 'hands',
    label: 'Number of Hands',
    value: 2,
  },
  {
    key: 'armor',
    label: 'Armor',
    value: 'Light Fabric',
  },
  {
    key: 'type',
    label: 'Type',
    value: 'unsigned char',
  },
];

export default data;
