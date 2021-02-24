import React, { useEffect, useState } from "react"
import _ from "lodash"
import { useLocation, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { trackPromise } from "react-promise-tracker"

import AccountIndex from "components/pages/account/accountIndex"

function Account() {

  // set states and variables
  const history = useHistory()
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)
  const [alert, setAlert] = useState({ visible: (location.state ? true : false), alert: (location.state ? location.state.alert : null) })
  const [user, setUser] = useState({
    id: null,
    email: null,
    username: null,
    name: null,
    admin: null
  })
  const { register, handleSubmit, errors } = useForm()
  
  useEffect(() => {
    // set document title
    document.title = 'Uw account - Notenboom'

    // fetch token and set body for user fetch
    const userdata = localStorage.getItem('currentUser')
    const userid = JSON.parse(userdata).uid
    const token = localStorage.getItem('jwt-token')
    const fetchUserBody = JSON.stringify({ token: token, id: userid })
    
    // fetch user data
    async function fetchData() {
      trackPromise (
        fetch(`${process.env.REACT_APP_API_BASEURL}/user/fetch_one.php`, {
          method: 'POST', body: fetchUserBody
        })
          .then(async response => {
            const data = await response.json()
            setUser(data)
          })
          .catch((error) => console.error(error))
      )
    }

    fetchData()
  }, [])

  // update account form submit
  const onSubmit = data => {
    setAlert({ visible: false, alert: null  })
    
    _.assign(user, data)
    _.assign(user, { token: localStorage.getItem('jwt-token') })
    const body = JSON.stringify(user)
    console.log(body)

    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, {
        method: 'POST', body: body
      })
        .then(async response => {
          const fetchData = await response.json()
          // set error or success message
          setAlert({ visible: true, alert: fetchData.error ? fetchData.error : fetchData.success })
        })
        .catch((error) => console.error(error))
    )
  }

  function deleteUser() {
    _.assign(user, { token: localStorage.getItem('jwt-token') })
    const body = JSON.stringify(user)

    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/delete.php`, { method: 'POST', body: body })
        .then(async response => {
          const data = await response.json()
          setAlert({ visible: true, alert: data.error ? data.error : data.success })
          setTimeout(() => {
            history.push({
              pathname: '/account/uitloggen'
            })
          }, 3000)
        })
        .catch((error) => console.error(error))
    )
  }

  function modalVisible() {
    setShowModal(true)
  }

  function modalInvisible() {
    setShowModal(false)
  }
  
  return <AccountIndex
    alert={alert}
    user={user}
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

export default Account