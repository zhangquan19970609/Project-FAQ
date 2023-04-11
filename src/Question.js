import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {

  const [isDisplay, setIsDisplay] = useState(false);

  const switchDisplay = () => {
    setIsDisplay(!isDisplay);
  }

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={switchDisplay}>
        {isDisplay ? <AiOutlineMinus/> : <AiOutlinePlus />}
      </button>
    </header>
    {isDisplay && <p>{info}</p>}
  </article>;
};

export default Question;
