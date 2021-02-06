import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DefaultPage from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import Alert from "components/elements/alert"

function Fouten() {

  const location = useLocation()
  const [alert] = useState({ visible: (location.state ? true: false), alert: (location.state ? location.state.alert : null) })
  
  useEffect(() => document.title = 'Rapporteer fouten - Notenboom')
  
  return (
    <>
      <NavbarLarge />
      <DefaultPage title="Rapporteer fouten">
        <Alert visible={alert.visible} text={alert.alert} />
      </DefaultPage>
    </>
  )
}

export default Fouten