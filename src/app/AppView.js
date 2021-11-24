import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminView from './container/auth/AdminView'
import { LoginView } from './container/frontend/login'
import GetToken from './GetToken'


const AppView = () => {
  const isAuthenticated = GetToken()

  if (isAuthenticated) {
    return (
      <AdminView />
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <LoginView />
        </Route>
      </Switch>
    </div>
  )
}

export default AppView;