import React from "react"
import styled from "styled-components"
import Navbar from "components/layout/navbar/navbarSmall"
import Page from "components/layout/defaultPage"
import Alert from "components/elements/alert"

const forgottenPassword = props => (
  <>
    {/* return navbar and default page container */}
    <Navbar />
    <Page title="Wachtwoord vergeten" small>
      {/* top section for alerts and such */}
      <Alert alert={props.alert.alert} visible={props.alert.visible} />
      
      <h1>Hello!</h1>
    </Page>
  </>
)

export default forgottenPassword