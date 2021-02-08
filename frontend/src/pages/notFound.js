import React from "react"
import { Link, useLocation } from "react-router-dom"

import NavbarSmall from "components/layout/navbar/navbarSmall"
import DefaultPage from 'components/layout/defaultPage'

function NotFound() {
  let location = useLocation()
  
  return (
    <>
      <NavbarSmall />
      <DefaultPage title="404 - Pagina niet gevonden">
        <p className="large">De pagina {location.pathname} kon niet gevonden worden op deze server. Controleer op typfouten en probeer het opnieuw of <Link to="/">ga terug naar de homepagina</Link>.</p>
      </DefaultPage>
    </>
  )
}

export default NotFound