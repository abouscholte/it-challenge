import React, { lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { PrivateRoute, GuestRoute, AdminRoute } from "components/users/routes"

const Home = lazy(() => import('./pages'))
const Login = lazy(() => import('./pages/account/login'))
const Signup = lazy(() => import('./pages/account/signup'))
const Fouten = lazy(() => import('./pages/fouten'))
const Books = lazy(() => import('./pages/books'))
const NewBook = lazy(() => import('./pages/books/new-book'))
const Account = lazy(() => import('./pages/account'))
const AccountChanges = lazy(() => import('./pages/account/changes'))
const ChangePassword = lazy(() => import('./pages/account/changePassword'))
const ForgottenPassword = lazy(() => import('./pages/account/forgottenPassword'))
const NotPermitted = lazy(() => import('./pages/account/notPermitted'))
const Logout = lazy(() => import('./pages/account/logout'), 600)
const Admin = lazy(() => import('./pages/admin'))
const UsersTable = lazy(() => import('./pages/admin/usersTable'))
const ControlUser = lazy(() => import('./pages/admin/controlUser'))
const NotFound = lazy(() => import('./pages/notFound'))

function App() {
  return (
    <Switch>
      {/* open routes */}
      <Route exact path="/" component={Home} />

      {/* guest routes */}
      <GuestRoute exact path="/account/inloggen" component={Login} />
      <GuestRoute exact path="/account/aanmelden" component={Signup} />

      {/* fouten & boeken routes */}
      <PrivateRoute exact path="/fouten" component={Fouten} />

      <PrivateRoute exact path="/boeken" component={Books} />
      <PrivateRoute exact path="/boeken/nieuw-boek" component={NewBook} />

      {/* account routes */}
      <PrivateRoute exact path="/account/" component={Account} />
      <PrivateRoute exact path="/account/aanpassingen" component={AccountChanges} />
      
      <PrivateRoute exact path="/account/wijzig-wachtwoord" component={ChangePassword} />
      <Route exact path="/account/wachtwoord-vergeten" component={ForgottenPassword} />
      <Route exact path="/account/uitloggen" component={Logout} />
      <Route exact path="/account/account-niet-goedgekeurd" component={NotPermitted} />

      {/* admin routes */}
      <AdminRoute exact path="/admin" component={Admin} />
      <AdminRoute exact path="/admin/gebruikers/alle-gebruikers" component={UsersTable} />
      <AdminRoute exact path="/admin/gebruikers/nieuwe-gebruikers"><UsersTable new_users /></AdminRoute>
      <AdminRoute exact path="/admin/gebruikers/gebruiker-:id" component={ControlUser} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  )
}

export default App