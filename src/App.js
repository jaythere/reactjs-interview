import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context/Context";
import { Employee, EmployeeList, ModifyEmployee } from "./pages";

const initialState = {
  employees: [],
};

function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="container">
      <Provider value={{ state, setState }}>
        <Router>
          <div className="col-md-12">
            <h1 className="text-center" style={style}></h1>
            <Switch>
              <Route path="/home" exact component={Employee} />
              <Route path="/list" component={EmployeeList} />
              <Route path="/edit" component={ModifyEmployee} />
              <Route path="/" component={Employee} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
