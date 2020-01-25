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

const AddCountButton = React.memo((props) => {
  console.log('Render addCountButton component');
  const { addCount } = props;
  return (
    <button type="button" onClick={addCount}>
      點我加一
    </button>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const titleContent = useMemo(() => ({ name: '計數器' }), []);
  const addCount = useCallback(
    () => { setCount(count => count + 1); }, []
  );
  
  return (
    <div>
      <Title title={titleContent} />
      <span>{`目前計數：${count}`}</span>
      <AddCountButton addCount={addCount} />
    </div>
  );
};

ReactDom.render(<Counter />, document.getElementById('root'));
