import React from "react"
import { Redirect, Route } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("currentUser") ? (
        JSON.parse(localStorage.getItem("currentUser")).sta == 1 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/account/account-niet-goedgekeurd" />
        )
      ) : (
        <Redirect 
          to={{
            pathname: "/account/inloggen",
            state: { alert: "U moet ingelogd zijn om deze pagina te kunnen bezoeken!" }
          }}
        />
      )
    }
  />
)

export const GuestRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props =>
      localStorage.getItem("currentUser") ? (
        <Redirect to={{
          pathname: "/fouten",
          state: { alert: "U bent al ingelogd!" }
        }} />
      ) : (
        <Component {...props} />
      )
    }
  />
)