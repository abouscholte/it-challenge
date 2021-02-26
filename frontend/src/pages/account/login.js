import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"
import { useForm } from "react-hook-form"
import jwt_decode from "jwt-decode"
import LoginForm from "components/pages/account/loginForm"

function Login() {

  // set constants and state
  const history = useHistory()
  const location = useLocation()
  const { register, handleSubmit, errors } = useForm()
  const [ alert, setAlert ] = useState({ visible: (location.state ? true : false), alert: (location.state ? location.state.alert : null) })
  
  // set page title
  useEffect(() => document.title = 'Inloggen - Notenboom')
  
  // login form submit function
  const onSubmit = data => {
    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/login.php`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(async response => {
          const data = await response.json()
          if (data.error) {
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
        .catch((error) => console.error(error))
    )
  }

  // return login page (in components folder)
  return <LoginForm 
    alert={alert}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    register={register}
    errors={errors}
  />
}

export default Login