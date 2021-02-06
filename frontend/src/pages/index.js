import React, { useEffect } from "react"
import NavbarSmall from "components/layout/navbar/navbarSmall"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import Footer from "components/layout/footer"
import Hero from "components/pages/home/hero"

function Home() {

  useEffect(() => document.title = 'Notenboom')

  return (
    <>
      {localStorage.getItem('currentUser') ? 
        (<NavbarLarge />) : (<NavbarSmall />)
      }
      <Hero />
      <Footer />
    </>
  )
}

export default Home