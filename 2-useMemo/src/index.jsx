import React, { useState, useMemo, useCallback } from 'react';
import ReactDom from 'react-dom';

const Title = React.memo((props) => {
  console.log('Render title component');
  const { title: { name } } = props;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const titleContent = useMemo(() => ({ name: '計數器' }), []);

  return (
    <div>
      <Title title={titleContent} />
      <span>{`目前計數：${count}`}</span>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加一
      </button>
    </div>
  );
};

ReactDom.render(<Counter />, document.getElementById('root'));
