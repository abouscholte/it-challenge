import React, { lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { PrivateRoute, GuestRoute, AdminRoute } from "components/users/routes"

const UsersTable = lazy(() => import('./pages/admin/usersTable'))

function App() {
  return (
    <Switch>
      {/* open routes */}
      <Route exact path="/" component={lazy(() => import('./pages'))} />

      {/* guest routes */}
      <GuestRoute exact path="/account/inloggen" component={lazy(() => import('./pages/account/login'))} />
      <GuestRoute exact path="/account/aanmelden" component={lazy(() => import('./pages/account/signup'))} />

      {/* fouten & boeken routes */}
      <PrivateRoute exact path="/fouten" component={lazy(() => import('./pages/fouten'))} />

      <PrivateRoute exact path="/boeken" component={lazy(() => import('./pages/books'))} />
      <PrivateRoute exact path="/boeken/nieuw-boek" component={lazy(() => import('./pages/books/new-book'))} />

      {/* account routes */}
      <PrivateRoute exact path="/account/" component={lazy(() => import('./pages/account'))} />
      <PrivateRoute exact path="/account/aanpassingen" component={lazy(() => import('./pages/account/changes'))} />
      <PrivateRoute exact path="/account/boeken" component={lazy(() => import('./pages/account/books'))} />
      
      <PrivateRoute exact path="/account/wijzig-wachtwoord" component={lazy(() => import('./pages/account/changePassword'))} />
      <Route exact path="/account/wachtwoord-vergeten" component={lazy(() => import('./pages/account/forgottenPassword'))} />
      <Route exact path="/account/uitloggen" component={lazy(() => import('./pages/account/logout'))} />
      <Route exact path="/account/account-niet-goedgekeurd" component={lazy(() => import('./pages/account/notPermitted'))} />

      {/* admin routes */}
      <AdminRoute exact path="/admin" component={lazy(() => import('./pages/admin'))} />
      <AdminRoute exact path="/admin/gebruikers/alle-gebruikers"><UsersTable /></AdminRoute>
      <AdminRoute exact path="/admin/gebruikers/nieuwe-gebruikers"><UsersTable new_users /></AdminRoute>
      <AdminRoute exact path="/admin/gebruikers/gebruiker-:id" component={lazy(() => import('./pages/admin/controlUser'))} />

      {/* 404 */}
      <Route component={lazy(() => import('./pages/notFound'))} />
    </Switch>
  )
}

export default App