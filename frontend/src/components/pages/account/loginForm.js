import React from "react"
import AuthPage from "components/pages/account/authPage"
import {
  FormPageForm,
  FormGroup,
  FormLabel,
  FormControl,
  FormControlError,
  FormSubmit
} from "components/elements/forms"
import Alert from "components/elements/alert"

const LoginForm = ({ alert, onSubmit, handleSubmit, register, errors }) => (
  <AuthPage
    title="Log in bij Notenboom"
    subtitle="Log in met je account om fouten in lesboeken te kunnen rapporteren binnen het Notenboom systeem."
    formInfo="signup"
  >

    <Alert visible={alert.visible} text={alert.alert} />

    <FormPageForm onSubmit={handleSubmit(onSubmit)} method="POST">
      <FormGroup>
        <FormLabel htmlFor="useremail">Vul uw e-mailadres of gebruikersnaam in</FormLabel>
        <FormControl type="text" id="useremail" name="useremail" tabIndex="1" ref={register({ required: "Dit veld is verplicht!" })} className={errors.useremail && "error"} />
        {errors.useremail && <FormControlError>{errors.useremail.message}</FormControlError>}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password">Vul uw wachtwoord in</FormLabel>
        <FormControl type="password" id="password" name="password" tabIndex="2" ref={register({ required: "Dit veld is verplicht!" })} className={errors.password && "error"} />
        {errors.password && <FormControlError>{errors.password.message}</FormControlError>}
      </FormGroup>
      <FormSubmit type="submit" value="Log in" tabIndex="3" />
    </FormPageForm>
  </AuthPage>
)

export default LoginForm