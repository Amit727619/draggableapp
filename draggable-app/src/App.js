import React from 'react';
import Draggable from './Draggable';

const App = () => {
  return (
    <div className="App">
      <Draggable title="Drag this">
        <p>This is a draggable component</p>
      </Draggable>
    </div>
  );
};

export default App;
