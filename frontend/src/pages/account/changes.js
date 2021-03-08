import React, { useEffect } from "react"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"

function Changes() {

  useEffect(() => {
    // set document title
    document.title = 'Uw aanpassingen - Notenboom'
  }, [])
  
  return (
    <React.Fragment>
      <Navbar />
      <Page title="Uw account" sidebarTitle="Beheer uw aanpassingen" sidebarType="account">
        <p className="large">U heeft nog geen aanpassingen</p>
      </Page>
    </React.Fragment>
  )
}

export default Changes