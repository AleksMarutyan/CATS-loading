import React, { useState } from 'react';
import Elevator from './components/Elevator/Elevator';
import SideMenu from './components/SideMenu/SideMenu';
import './assets/styles/app.scss';

function App() {
  const [floorsCount, setFloorsCount] = useState(5);
  return (
    <div className='app'>
      <SideMenu setFloorsCount={setFloorsCount} floorsCount={floorsCount} />
      <Elevator floorsCount={floorsCount} />
    </div>
  );
}

export default App;
