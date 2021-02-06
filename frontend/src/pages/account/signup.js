import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"
import { useForm } from "react-hook-form"
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

function Signup() {
  const [alert, setAlert] = useState(false, null)
  const history = useHistory()

  // set page title
  useEffect(() => document.title = 'Aanmelden - Notenboom')

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/create.php`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(async response => {
          const data = await response.json()
          if (data.error) setAlert({ visible: true, alert: data.error })
          if (data.success) history.push({ pathname: '/account/inloggen', state: {alert: data.success} })
        })
        .catch((error) => console.error(error))
    )
  }

  const password = React.useRef({})
  password.current = watch("password", "")

  return (
    <AuthPage
      title = "Vraag een account aan"
      subtitle = "Vraag een account aan bij Notenboom om te kunnen helpen fouten weg te werken uit lesboeken."
    >
      <Alert visible={alert.visible} text={alert.alert} />
      
      <FormPageForm onSubmit={handleSubmit(onSubmit)} method="POST">
        <FormGroup>
          <FormLabel htmlFor="email">Vul uw e-mailadres in</FormLabel>
          <FormControl type="email" id="email" name="email" tabIndex="1" className={errors.email && "error"} ref={register({
            required: "Dit veld is verplicht!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ongeldig e-mailadres, probeer een andere!"
            }
          })} />
          {errors.email && <FormControlError>{errors.email.message}</FormControlError>}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="username">Maak een gebruikersnaam aan</FormLabel>
          <FormControl type="username" id="username" name="username" tabIndex="2" className={errors.username && "error"} ref={register({
            required: "Dit veld is verplicht!",
            minLength: {
              value: 3,
              message: "Gebruikersnaam moet bestaan uit minimaal 3 tekens!"
            },
            maxLength: {
              value: 20,
              message: "Gebruikersnaam moet bestaan uit maximaal 20 tekens!"
            }
          })} />
          {errors.username && <FormControlError>{errors.username.message}</FormControlError>}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="name">Vul uw volledige naam in</FormLabel>
          <FormControl type="name" id="name" name="name" tabIndex="3" ref={register({ required: "Dit veld is verplicht!" })} className={errors.name && "error"} />
          {errors.name && <FormControlError>{errors.name.message}</FormControlError>}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Maak een wachtwoord aan</FormLabel>
          <FormControl type="password" id="password" name="password" tabIndex="4" className={errors.password && "error"} ref={register({
            required: "Dit veld is verplicht!",
            minLength: {
              value: 8,
              message: "Wachtwoord moet bestaan uit minimaal 8 tekens!"
            }
          })} />
          {errors.password && <FormControlError>{errors.password.message}</FormControlError>}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="passwordr">Herhaal uw wachtwoord</FormLabel>
          <FormControl type="password" id="passwordr" name="passwordr" tabIndex="5" className={errors.passwordr && "error"} ref={register({
            validate: value =>
              value === password.current || "Wachtwoorden zijn niet gelijk!"
          })} />
          {errors.passwordr && <FormControlError>{errors.passwordr.message}</FormControlError>}
        </FormGroup>
        <FormSubmit type="submit" value="Meld aan" tabIndex="6" className="button" />
      </FormPageForm>
    </AuthPage>
  )
}

export default Signup