import React, { useContext } from 'react';
import Floor from '../Floor/Floor';
import s from './Elevator.module.scss';
import { LiftContext } from '../../context/LiftProvider';

function Elevator({ floorsCount }) {
  const { bottom, gap, currentFloor } = useContext(LiftContext);
  let arr = [...Array(Number(floorsCount))];
  return (
    <div className={s.container}>
      <div className={s.elevator_container}>
        <div className={s.floor_number}>
          <p>{currentFloor}</p>
        </div>
        <div className={s.floors}>
          {arr.map((item, fid) => (
            <Floor
              floor={floorsCount - fid}
              key={`${floorsCount - fid}Floor`}
            />
          ))}
          <div
            className={s.elevator}
            style={{
              bottom: `${bottom}px`,
              gap: `${gap}px`,
            }}
          >
            <div className={s.elev_door_container}></div>
            <div className={`${s.elev_door_container} ${s.door_right}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elevator;
