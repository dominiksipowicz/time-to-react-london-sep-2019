import React from 'react';
import Perf200 from './perf-200/memo'
import Perf300 from './perf-300/loading'


function App() {
  
  return (
    <div className="App">
      <h1>Code example: Performance 200</h1>
      <Perf200/>
      <hr />
      <h1>Code example: Performance 300</h1>
      <Perf300/>
    </div>
  );
}

export default App;
