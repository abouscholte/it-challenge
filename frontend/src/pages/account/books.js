import React, { useEffect } from "react"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"

export default function Books() {

  useEffect(() => {
    // set document title
    document.title = 'Uw boeken - Notenboom'
  }, [])
  
  // set sidebar links
  const sidebarLinks = [
    {title: 'Uw account', to: '/account'},
    {title: 'Uw aanpassingen', to: '/account/aanpassingen'},
    {title: 'Uw boeken', to: '/account/boeken'}
  ]
  
  return (
    <React.Fragment>
      <Navbar />
      <Page title="Uw account" sidebarTitle="Beheer uw boeken" sidebarLinks={sidebarLinks}>
        <p className="large">U heeft nog geen boeken</p>
      </Page>
    </React.Fragment>
  )
}