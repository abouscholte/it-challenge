import React, { lazy } from "react"
import pMinDelay from "p-min-delay"
import { Switch, Route } from "react-router-dom"
import { PrivateRoute, GuestRoute } from "components/users/routes"

const Home = lazy(() => pMinDelay(import('./pages'), 200))
const Login = lazy(() => pMinDelay(import('./pages/account/login'), 200))
const Signup = lazy(() => pMinDelay(import('./pages/account/signup'), 200))
const Fouten = lazy(() => pMinDelay(import('./pages/fouten'), 200))
const Account = lazy(() => pMinDelay(import('./pages/account'), 200))
const Logout = lazy(() => pMinDelay(import('./pages/account/logout'), 600))
const Admin = lazy(() => pMinDelay(import('./pages/admin'), 200))

function App() {
  return (
    <Switch>
      {/* open routes */}
      <Route exact path="/" component={Home} />

      {/* guest routes */}
      <GuestRoute exact path="/account/inloggen" component={Login} />
      <GuestRoute exact path="/account/aanmelden" component={Signup} />

      {/* private routes */}
      <PrivateRoute exact path="/fouten" component={Fouten} />
      <PrivateRoute exact path="/account" component={Account} />
      <PrivateRoute exact path="/account/uitloggen" component={Logout} />
      <PrivateRoute exact path="/admin" component={Admin} />
    </Switch>
  )
}

export default App