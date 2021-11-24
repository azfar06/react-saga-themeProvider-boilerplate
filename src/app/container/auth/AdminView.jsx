import React from "react";
import { Route, Switch } from "react-router-dom";

const AdminView = () => {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/about">
          <div>About</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AdminView;
