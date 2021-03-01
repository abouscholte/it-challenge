import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Page from "components/pages/account/forgottenPassword"

function ForgottenPassword() {

  // set constants
  const location = useLocation()
  const [alert, setAlert] = useState({ visible: false, alert: null })
  
  // logout user for security reasons
  localStorage.clear()

  useEffect(() => {
    // set page title
    document.title = 'Wachtwoord vergeten - Notenboom'
  }, [])

  return <Page 
    alert={alert}
  />
}

export default ForgottenPassword