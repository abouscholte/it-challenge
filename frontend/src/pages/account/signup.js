import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"
import { useForm } from "react-hook-form"
import SignupForm from "components/pages/account/signupForm"

function Signup() {
  // set constants and state from hooks
  const history = useHistory()
  const password = React.useRef({})
  const [alert, setAlert] = useState(false, null)
  const { register, handleSubmit, watch, errors } = useForm()

  // watch password
  password.current = watch("password", "")
  
  // set page title
  useEffect(() => document.title = 'Aanmelden - Notenboom')

  // form submit function
  const onSubmit = data => {
    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/create.php`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(async response => {
          const data = await response.json()
          
          if (data.error) {
            // signup error, set alert
            setAlert({ visible: true, alert: data.error })
          }
          if (data.success) {
            // signup success, redirect to login page and show alert
            history.push({ 
              pathname: '/account/inloggen', 
              state: {alert: data.success} 
            })
          }
        })
        .catch((error) => console.error(error))
    )
  }

  return (
    <SignupForm 
      alert={alert}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      password={password}
    />
  )
}

export default Signup