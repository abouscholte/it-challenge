import React from "react"
import { Redirect } from "react-router-dom"

function Logout() {
  localStorage.clear()
  const alert = "U bent nu succesvol uitgelogd!"

  return (
    <Redirect to={{
      pathname: '/account/inloggen',
      state: { alert: alert }  
    }} />
  )
}

export default Logout