import React, { useState } from 'react';

const FirstComponent = () => {
 const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default FirstComponent;
