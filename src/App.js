import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <div className='container'>
    <h3>Questions And Answers About Login</h3>
    <section className='info'>
      {data.map(({id, title, info, isDisplay}) => {
        return <SingleQuestion 
          key={id}
          id={id}
          title={title}
          info={info}
          isDisplay={isDisplay}
        />
      })}
    </section>
  </div>;
  </main>
}

export default App;
