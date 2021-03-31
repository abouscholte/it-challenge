import React, { useState, useEffect } from "react"
import _ from "lodash"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"

import ChangePasswordPage from "components/pages/account/changePassword"

const ChangePassword = () => {

  // set contants and state
  const [alert, setAlert] = useState({ visible: false, alert: null })
  const [formVisible, setFormVisible] = useState(0)
  const [user, setUser] = useState({
    id: null,
    email: null,
    username: null,
    password: null,
    name: null,
    admin: null
  })
  const { handleSubmit, register, errors } = useForm()
  const { handleSubmit: handleSubmit2, register: register2, errors: errors2 } = useForm()
  const history = useHistory()

  useEffect(() => {
    // set page title
    document.title = 'Wijzig wachtwoord - Notenboom'

    // fetch token and set body for user fetch
    const userdata = localStorage.getItem('currentUser')
    const userid = JSON.parse(userdata).uid
    const token = localStorage.getItem('jwt-token')
    const fetchUserBody = JSON.stringify({ token: token, id: userid })
    
    // fetch user data
    async function fetchData() {
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/fetch_one.php`, {
        method: 'POST', body: fetchUserBody
      })
        .then(async response => {
          const data = await response.json()
          setUser(data)
        })
        .catch((error) => console.error(error))
    }

    fetchData()
  }, [])

  // submit for old password form
  const submitOldPass = data => {
    setAlert({ visible: false, alert: null })
    const body = {
      id: JSON.parse(localStorage.getItem('currentUser')).uid,
      password: data.oldPassword,
      token: localStorage.getItem('jwt-token')
    }
    fetch(`${process.env.REACT_APP_API_BASEURL}/user/check_pass.php`, {
      method: 'POST', body: JSON.stringify(body)
    })
      .then(async response => {
        const data = await response.json()

        // check if error was returned or not
        if (data.error) {
          // set error alert
          setAlert({
            visible: true, alert: data.error
          })
        } else if (data.success) {
          // continue to the next form
          setFormVisible(1)
          setTimeout(() => setFormVisible(2), 300)
        }
      })
  }

  // submit for new password form
  const submitNewPass = data => {
    // remove alert
    setAlert({ visible: false, alert: null })

    // set body constant
    _.assign(user, { 
      password: data.newPassword,
      token: localStorage.getItem('jwt-token') 
    })
    const body = JSON.stringify(user)

    // do update
    fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, {
      method: 'POST', body: body
    })
      .then(async response => {
        const data = await response.json()
        
        if (data.error) setAlert({ visible: true, alert: data.error })
        else if (data.success) {
          // set alert when password is correct
          setAlert({
            visible: true,
            alert: "Uw wachtwoord is nu aangepast, u wordt zo teruggestuurd naar uw account."
          })
          setTimeout(() => {
            history.push('/account')
          }, 3000)
        }
      })
      .catch((error) => console.error(error))
  }

  return <ChangePasswordPage
    alert={alert}
    handleSubmit={handleSubmit}
    register={register}
    errors={errors}
    submitOldPass={submitOldPass}
    handleSubmit2={handleSubmit2}
    register2={register2}
    errors2={errors2}
    submitNewPass={submitNewPass}
    formVisible={formVisible}
  />
}

export default ChangePassword