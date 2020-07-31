import React from 'react';

import Questao01 from './components/questao01/arena';
import Questao03 from './components/questao03/index';
import Questao04 from './components/questao04/index';

function App() {
  return (
    <>
      <Questao01 />
      <h1> Questao03 </h1>
      <Questao03 />
      <h1> Questao04 </h1>
      <Questao04 />
    </>
  );
}

export default App;
