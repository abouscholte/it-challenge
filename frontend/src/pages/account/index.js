import React, { useEffect, useState } from "react"
import _ from "lodash"
import { useLocation, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import DefaultPage from "components/layout/defaultPage"
import { GridColOneThird, GridColTwoThirds } from "components/elements/containers"
import {
  FormGroup,
  FormControl,
  FormControlError,
  FormLabel,
  FormSubmit,
  FormLinks
} from "components/elements/forms"
import Alert from "components/elements/alert"

function Account() {

  // set states and variables
  const history = useHistory()
  const location = useLocation()
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
  
  return (
    <>
      <NavbarLarge />
      <DefaultPage grid title="Uw account">
        <GridColTwoThirds>
          <Alert visible={alert.visible} text={alert.alert} />
          <h1>Wijzig account gegevens</h1>
          {user && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel htmlFor="email">Wijzig uw e-mailadres</FormLabel>
                <FormControl name="email" type="email" id="email" defaultValue={user.email} className={errors.email && "error"} ref={register({
                  required: "Dit veld is verplicht!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ongeldig e-mailadres, probeer een andere!"
                  }
                })} />
                {errors.email && <FormControlError>{errors.email.message}</FormControlError>}
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="username">Wijzig uw gebruikersnaam</FormLabel>
                <FormControl name="username" type="username" id="username" defaultValue={user.username} className={errors.username && "error"} ref={register({
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
                <FormLabel htmlFor="name">Wijzig uw naam</FormLabel>
                <FormControl name="name" type="name" id="name" defaultValue={user.name} ref={register({ required: "Dit veld is verplicht!" })} className={errors.name && "error"} />
                {errors.name && <FormControlError>{errors.name.message}</FormControlError>}
              </FormGroup>
              <FormSubmit type="submit" value="Wijzig account" tabIndex="4" className="button" />
              <FormLinks>
                <Link className="danger" to="#" onClick={() => deleteUser()}>Verwijder account</Link>
              </FormLinks>
            </form>
          )}
        </GridColTwoThirds>
        <GridColOneThird>
          {user.admin === '1' && (
            <div id="admin">
              <h1>Administrator</h1>
              <p>U bent een administrator. Hierdoor heeft u bevoegdheid om gebruikers te bekijken en beheren en suggesties voor aanpassingen in lesboeken te accepteren. Gebruik de knop hieronder om naar het administrator paneel te gaan.</p>
              <Link className="button" to="/admin" style={{ marginBottom: '30px' }}>Administrator paneel</Link>
            </div>
          )}
          <h1>Uw aanpassingen</h1>
          <p>U heeft nog geen aanpassingen aan lesboeken gemaakt.</p>
        </GridColOneThird>
      </DefaultPage>
    </>
  )
}

export default Account