import React from "react"
import { Redirect } from "react-router-dom"

function Logout() {
  // clear local storage
  localStorage.clear()

  // return a redirect function and show alert
  return (
    <Redirect to={{
      pathname: '/account/inloggen',
      state: { alert: "U bent nu succesvol uitgelogd!" }  
    }} />
  )
}

export default Logout