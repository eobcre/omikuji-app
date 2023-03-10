import { useState } from 'react';
// utils
import { data } from '../utils/data';
import { ButtonProps, Omikuji } from '../utils/type';

export const Button = (props: ButtonProps) => {
  const [omikuji, setOmikuji] = useState<Omikuji>({
    name: '',
    description: '',
  });

  // click
  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setOmikuji(data[randomIndex]);
  };
  return (
    // JSX
    <>
      <button onClick={clickHandler}>{props.name}</button>
      <div>
        {omikuji && (
          <div className='result'>
            <h1>{omikuji.name}</h1>
            <p>{omikuji.description}</p>
          </div>
        )}
      </div>
    </>
  );
};
