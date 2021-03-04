import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Page from "components/pages/account/forgottenPassword"

function ForgottenPassword() {

  // set constants
  const [alert, setAlert] = useState({ visible: false, alert: null })
  const { register, handleSubmit, errors } = useForm()

  // form submit
  const onSubmit = data => {
    console.log(data)
  }

  useEffect(() => {
    // set page title
    document.title = 'Wachtwoord vergeten - Notenboom'

    // logout user for security reasons
    if (localStorage.getItem('currentUser') != undefined) {
      setAlert({ visible: true, alert: 'Vanwege veiligheidsredenen bent u nu uitgelogd!' })
    }
    
    localStorage.clear()
  }, [setAlert])

  return <Page 
    alert={alert}
    register={register}
    handleSubmit={handleSubmit}
    errors={errors}
    onSubmit={onSubmit}
  />
}

export default ForgottenPassword