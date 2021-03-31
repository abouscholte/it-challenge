import React, { useEffect, useState } from "react"
import _ from "lodash"
import { useLocation, useHistory } from "react-router-dom"
import FetchUser from "components/users/fetchOne"
import { useForm } from "react-hook-form"

import UserControlPage from "components/pages/admin/userControlPage"

function ControlUser() {

  const user = FetchUser()
  const history = useHistory()
  const location = useLocation()
  const back = location.state ? location.state.from : null

  const [showModal, setShowModal] = useState(false)
  const [alert, setAlert] = useState({ visible: false, alert: null })
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    setAlert({ visible: false, alert: null  })
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    
    _.assign(user, data)
    _.assign(user, { token: localStorage.getItem('jwt-token') })
    const body = JSON.stringify(user)

    fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, {
      method: 'POST', body: body
    })
      .then(async response => {
        const data = await response.json()
        // set alert
        setAlert({ visible: true, alert: data.error ? data.error : data.success })
      })
      .catch((error) => console.log(error))
  }

  function updateAdmin() {
    setAlert({ visible: false, alert: null  })
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    
    _.assign(user, { admin: (user.admin == 0) ? 1 : 0, token: localStorage.getItem('jwt-token') });
    const body = JSON.stringify(user)

    fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, { method: 'POST', body: body })
      .then(async response => {
        const data = await response.json()
        setAlert({ visible: true, alert: data.error ? data.error : (user.admin == 1) ? 'Dit account is nu een administrator' : 'Dit account is niet meer een administrator' })
      })
      .catch((error) => console.error(error))
  }

  function updateStatus() {
    setAlert({ visible: false, alert: null  })
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    
    _.assign(user, { status: (user.status == 0) ? 1 : 0, token: localStorage.getItem('jwt-token'), change_status: 'true' });
    const body = JSON.stringify(user)

    fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, { method: 'POST', body: body })
      .then(async response => {
        const data = await response.json()
        setAlert({ visible: true, alert: data.error ? data.error : (user.status == 1) ? 'Dit account is nu goedgekeurd' : 'Dit account is niet meer goedgekeurd' })
      })
      .catch((error) => console.error(error))
  }
  
  function deleteUser() {
    setAlert({ visible: false, alert: null })
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    _.assign(user, { token: localStorage.getItem('jwt-token') })
    const body = JSON.stringify(user)

    fetch(`${process.env.REACT_APP_API_BASEURL}/user/delete.php`, { method: 'POST', body: body })
      .then(async response => {
        const data = await response.json()
        setAlert({ visible: true, alert: data.error ? data.error : data.success })
        setTimeout(() => {
          history.push({
            pathname: back ? back : '/admin'
          })
        }, 3000)
      })
      .catch((error) => console.error(error))
  }

  function modalVisible() {
    setShowModal(true)
  }

  function modalInvisible() {
    setShowModal(false)
  }
  
  useEffect(() => {
    if (location.state && location.state.alert) {
      setAlert({
        visible: true,
        alert: location.state.alert
      })
    }
  }, [location.state])

  return <UserControlPage
    user={user}
    back={back}
    alert={alert}
    updateStatus={updateStatus}
    updateAdmin={updateAdmin}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    register={register}
    errors={errors}
    modalVisible={modalVisible}
    modalInvisible={modalInvisible}
    showModal={showModal}
    deleteUser={deleteUser}
  />

}

export default ControlUser