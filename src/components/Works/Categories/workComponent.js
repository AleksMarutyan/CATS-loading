import React from "react";
import { useSelector } from "react-redux";

function WorkComponent({ item }) {
  console.log(item);
  const works = useSelector(({ allData }) => allData.workData?.[item]);
  console.log(works);
  return (
    <div className="workComponent">
      {works ? (
        <div className="workWrapper">
          {works.map((item) => {
            return (
              <div key={item.name} className="workItem">
                <div className="imageGround"></div>
                <div>
                  <p className="workName">{item.name}</p>
                  <p className="workPopularity">{item.popularity}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default WorkComponent;
