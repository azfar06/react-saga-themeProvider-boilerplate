import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginView } from './container/frontend/login'
import GetToken from './GetToken'


const AppView = () => {
  const isAuthenticated = GetToken()

  if (isAuthenticated) {
    return (
      <p>Admin View</p>
      // <AdminView />
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginView />
        </Route>
      </Switch>
    </div>
  )
}

export default AppView;