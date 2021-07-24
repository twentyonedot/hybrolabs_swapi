import { Switch, Route } from "react-router-dom";
import PeopleDetail from "./components/PeopleDetail";
import People from "./components/People";
import Home from "./components/Home";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen overflow-auto">
      <Switch>
        <Route path="/people/:id" exact>
          <PeopleDetail />
        </Route>

        <Route path="/people" exact>
          <People />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
