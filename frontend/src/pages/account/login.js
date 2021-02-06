import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"
import { useForm } from "react-hook-form"
import jwt_decode from "jwt-decode"
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

function Login() {

  const history = useHistory()
  const location = useLocation()
  const [alert, setAlert] = useState({ visible: (location.state ? true : false), alert: (location.state ? location.state.alert : null) })
  
  useEffect(() => document.title = 'Inloggen - Notenboom')
  
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/login.php`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(async response => {
          const data = await response.json()
          if (data.error) {
            console.log(data.error)
            // set error state
            setAlert({
              visible: true,
              alert: data.error
            })
          } else if (data.success) {
            // set local storage with jwt key
            // then redirect to logged in homepage
            let token = data.token
            let decoded_token = jwt_decode(token)
            localStorage.setItem('currentUser', JSON.stringify(decoded_token))
            localStorage.setItem('jwt-token', token)
            
            // redirect the user
            history.push({
              pathname: '/fouten',
              state: { alert: data.success }
            })
          }
        })
        .catch((error) => {
          console.error(error)
        })
    )
  }

  return (
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
}

export default Login