import React, { useState, useEffect } from 'react';

export const LiftContext = React.createContext({});

const LiftProvider = ({ children }) => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [activeUpFloors, setActiveUpFloors] = useState([]);
  const [activeDownFloors, setActiveDownFloors] = useState([]);
  const [bottom, setBottm] = useState(0);
  const [gap, setGap] = useState(0);

  const gapAnimation = (floors, setFloors) => {
    setGap(800);
    setTimeout(() => {
      setGap(0);
      floors.splice(0, 1);
      setFloors([...floors]);
    }, 1200);
  };
  useEffect(() => {
    let moveUp;
    if (activeUpFloors.length && !activeDownFloors.length) {
      moveUp = setInterval(() => {
        setCurrentFloor((prev) => prev + 1);
        setBottm((prev) => prev + 135);
      }, 1500);
    }
    return () => {
      clearInterval(moveUp);
    };
  }, [activeUpFloors]);

  useEffect(() => {
    let moveDown;
    if (!activeUpFloors.length && activeDownFloors.length) {
      moveDown = setInterval(() => {
        setCurrentFloor((prev) => prev - 1);
        setBottm((prev) => prev - 135);
      }, 2000);
    }
    return () => {
      clearInterval(moveDown);
    };
  }, [activeDownFloors]);

  useEffect(() => {
    if (activeUpFloors.includes(currentFloor)) {
      setActiveUpFloors([]);
      gapAnimation(activeUpFloors, setActiveUpFloors);
    }
    if (activeDownFloors.includes(currentFloor)) {
      setActiveDownFloors([]);
      gapAnimation(activeDownFloors, setActiveDownFloors);
    }
  }, [currentFloor, activeUpFloors, activeDownFloors]);

  const provider = {
    currentFloor: currentFloor,
    activeUpFloors: activeUpFloors,
    activeDownFloors: activeDownFloors,
    setActiveUpFloors: setActiveUpFloors,
    setActiveDownFloors: setActiveDownFloors,
    bottom: bottom,
    gap: gap,
  };

  return (
    <LiftContext.Provider value={provider}>{children}</LiftContext.Provider>
  );
};

export default LiftProvider;
