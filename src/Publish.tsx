import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CartList } from "./publish/CartList";
import { CartMain } from "./publish/CartMain";
import { CartInfo } from "./publish/CartInfo";
import { CartListDetail } from "./publish/CartListDetail";

function Publish() {
  return (
    <Router>
      <div className="flex justify-between w-full h-full">
        <nav>
          <ul>
            <li>
              <Link to="/publish/CartList">CartList</Link>
            </li>
            <li>
              <Link to="/publish/CartMain">CartMain</Link>
            </li>
            <li>
              <Link to="/publish/CartInfo">CartInfo</Link>
            </li>
            <li>
              <Link to="/publish/CartListDetail">CartListDetail</Link>
            </li>
          </ul>
        </nav>

        <div className="flex-1">
          <Switch>
            <Route path="/publish/CartList" component={CartList}></Route>
            <Route path="/publish/CartMain" component={CartMain}></Route>
            <Route path="/publish/CartInfo" component={CartInfo}></Route>
            <Route
              path="/publish/CartListDetail"
              component={CartListDetail}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Publish;
