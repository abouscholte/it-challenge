import React from "react"
import Navbar from "components/layout/navbar/navbarSmall"
import Page from "components/layout/defaultPage"
import Alert from "components/elements/alert"
import {
  FormGroup,
  FormLabel,
  FormControl, 
  FormControlError,
  FormSubmit
} from "components/elements/forms"

const forgottenPassword = props => (
  <>
    {/* return navbar and default page container */}
    <Navbar />
    <Page title="Wachtwoord vergeten" small>
      {/* top section for alerts and such */}
      <Alert text={props.alert.alert} visible={props.alert.visible} />
      
      <h1>Vul uw e-mailadres in.</h1>
      <p className="large">Vul uw e-mailadres in om uw account te verifiëren. U zult daarna een bevestigingsmail ontvangen met een nieuw, tijdelijk wachtwoord.</p>

      <form id="forgottenpassword-form" onSubmit={props.handleSubmit(props.onSubmit)}>
        <FormGroup>
          <FormLabel htmlFor="email">Vul uw e-mailadres in</FormLabel>
          <FormControl id="email" type="email" name="email" className={props.errors.email && 'error'} ref={props.register({
            required: 'Dit veld is verplicht!'
          })} />
          { props.errors.email && <FormControlError>{props.errors.email.message}</FormControlError>}
        </FormGroup>
        <FormSubmit className="button" value="Vraag nieuw wachtwoord aan" type="submit" />
      </form>
    </Page>
  </>
)

export default forgottenPassword