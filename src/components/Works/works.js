import React, { useEffect } from "react";
import WorkComponent from "./Categories/workComponent";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const workTypes = ["reactprojects", "templates", "fullprojects"];
function Works() {
  const { url, path } = useRouteMatch();
  return (
    <div id="works">
      <div className="worksMenu">
        <ul>
          {workTypes.map((item) => {
            return (
              <li>
                <Link to={`${url}/${item}`} key={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Switch>
          {workTypes.map((item) => {
            return (
              <Route
                path={`${path}/${item}`}
                render={() => <WorkComponent item={item} />}
                key={item}
              ></Route>
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Works;
