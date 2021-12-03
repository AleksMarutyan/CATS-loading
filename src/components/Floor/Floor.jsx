import React, { useContext } from 'react';
import s from './Floor.module.scss';
import elevButtons from '../../assets/images/elevButtons.svg';
import { LiftContext } from '../../context/LiftProvider';

function Floor({ floor }) {
  const {
    currentFloor,
    activeUpFloors,
    activeDownFloors,
    setActiveUpFloors,
    setActiveDownFloors,
  } = useContext(LiftContext);

  const onUpClick = () => {
    if (floor >= currentFloor && !activeUpFloors.includes(floor)) {
      const arr = [floor, ...activeUpFloors].sort();
      setActiveUpFloors(arr);
    }
  };

  const onDownClick = () => {
    if (floor < currentFloor && !activeDownFloors.includes(floor)) {
      const arr = [floor, ...activeDownFloors].sort().reverse();
      setActiveDownFloors(arr);
    }
  };
  return (
    <div className={s.floor_container}>
      <div className={s.buttons_container}>
        <img
          src={elevButtons}
          className={s.elev_button_up}
          style={
            activeUpFloors.includes(floor)
              ? { backgroundColor: 'rgb(209, 40, 40)' }
              : {}
          }
          alt='buttons'
          onClick={onUpClick}
        />
        <img
          src={elevButtons}
          className={`${s.elev_button_down}`}
          alt='buttons'
          style={
            activeDownFloors.includes(floor)
              ? { backgroundColor: 'rgb(28, 28, 214)' }
              : {}
          }
          onClick={onDownClick}
        />
      </div>
    </div>
  );
}
export default Floor;
