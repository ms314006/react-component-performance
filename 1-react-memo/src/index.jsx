import React, { useState } from 'react';
import ReactDom from 'react-dom';

const Title = React.memo(() => {
  console.log('Render title component');
  return (
    <div>
      <h1>計數器</h1>
    </div>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Title />
      <span>{`目前計數：${count}`}</span>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加一
      </button>
    </div>
  );
};

ReactDom.render(<Counter />, document.getElementById('root'));
