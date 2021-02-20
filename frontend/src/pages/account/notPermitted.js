import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import NavbarSmall from "components/layout/navbar/navbarSmall"
import DefaultPage from 'components/layout/defaultPage'

function NotPermitted() {

  useEffect(() => document.title = 'Account nog niet goedgekeurd - easyForm')
  
  return (
    <>
      <NavbarSmall />
      <DefaultPage title="Account nog niet goedgekeurd">
        <p className="large">Uw Notenboom account is nog niet goedgekeurd door onze administrator. Dit kan even duren. U ontvangt een e-mail als dit is gebeurd. U kunt nu weer uitloggen.</p>
        <Link className="button" to="/account/uitloggen">Log uit</Link>
      </DefaultPage>
    </>
  )
}

export default NotPermitted