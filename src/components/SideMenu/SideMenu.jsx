import React, { useState } from 'react';
import s from './SideMenu.module.scss';

function SideMenu({ setFloorsCount, floorsCounst }) {
  const [inputValue, setInputValue] = useState(floorsCounst);

  const onInputChage = (e) => {
    setInputValue(e.target.value);
  };

  const onButtonClick = () => {
    if (inputValue !== '') {
      setFloorsCount(inputValue);
    }
  };
  return (
    <div className={s.side_menu}>
      <div className={s.side_menu_input}>
        <p>Enter floors count</p>
        <input type='number' onChange={onInputChage} value={inputValue}></input>
        <button onClick={onButtonClick}>Submit</button>
      </div>
    </div>
  );
}

export default SideMenu;
