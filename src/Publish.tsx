import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CartList } from "./publish/CartList"; // Cart 컴포넌트 임포트

import "./App.css";

// function Publish() {
//   return (
//     <div>
//       <h1>sdfsdfsdfsdfsdf</h1>
//       {/* Publish 페이지에 대한 추가 내용 */}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="flex justify-between w-full h-full">
        <nav>
          <ul>
            <li>
              <Link to="/publish/CartList">CartList</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1">
          <Switch>
            <Route path="/publish/CartList" component={CartList} />{" "}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
