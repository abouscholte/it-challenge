import React, { useEffect, useState } from "react"
import styled from "styled-components"
import _ from "lodash"
import { Link, useLocation, useHistory } from "react-router-dom"
import { ArrowBackOutline } from "react-ionicons"
import FetchUser from "components/users/fetchOne"
import NotFound from "pages/notFound"
import DefaultPage from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import { trackPromise } from "react-promise-tracker"
import { GridColOneThird, GridColTwoThirds, GridColFull } from "components/elements/containers"
import { useForm } from "react-hook-form"
import {
  FormGroup,
  FormControl,
  FormControlError,
  FormLabel,
  FormSubmit,
  FormLinks
} from "components/elements/forms"
import Alert from "components/elements/alert"

function ControlUser() {

  const user = FetchUser()
  const history = useHistory()
  const location = useLocation()
  const back = location.state ? location.state.from : null

  const [alert, setAlert] = useState({ visible: false, alert: null })
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    _.assign(user, data)
    _.assign(user, { token: localStorage.getItem('jwt-token') })
    const body = JSON.stringify(user)

    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, {
        method: 'POST', body: body
      })
        .then(async response => {
          const data = await response.json()
          // set alert
          setAlert({ visible: true, alert: data.error ? data.error : data.success })
        })
        .catch((error) => console.log(error))
    )
  }

  function updateAdmin() {
    _.assign(user, { admin: (user.admin == 0) ? 1 : 0, token: localStorage.getItem('jwt-token') });
    const body = JSON.stringify(user)

    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, { method: 'POST', body: body })
        .then(async response => {
          const data = await response.json()
          setAlert({ visible: true, alert: data.error ? data.error : (user.admin == 1) ? 'Dit account is nu een administrator' : 'Dit account is niet meer een administrator' })
        })
        .catch((error) => console.error(error))
    )
  }

  function updateStatus() {
    _.assign(user, { admin: (user.status == 0) ? 1 : 0, token: localStorage.getItem('jwt-token') });
    const body = JSON.stringify(user)

    trackPromise (
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/update.php`, { method: 'POST', body: body })
        .then(async response => {
          const data = await response.json()
          setAlert({ visible: true, alert: data.error ? data.error : (user.status == 1) ? 'Dit account is nu goedgekeurd' : 'Dit account is niet meer goedgekeurd' })
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
              pathname: back ? back : '/admin'
            })
          }, 3000)
        })
        .catch((error) => console.error(error))
    )
  }

  useEffect(() => {
    if (location.state && location.state.alert) {
      setAlert({
        visible: true,
        alert: location.state.alert
      })
    }
  }, [location.state])

  return (
    <>
      {
        user ? (
          <>
            <NavbarLarge />
            <DefaultPage title={`Beheer het account van ${user.name}`} grid>
              <GridColFull>
                <Link to={back ? back : '/admin'} className="button button-back">
                  <ArrowBackOutline color={'#ffffff'} height="16px" />
                  &nbsp;Ga terug
                </Link>
                <Alert 
                  visible={alert.visible} 
                  text={alert.alert}
                  style={{ width: '100%', minWidth: '100%', margin: '30px 0' }}
                />
              </GridColFull>
              <GridColOneThird>
                <SectionTitle>Beheer gebruikerstoegang</SectionTitle>
                <p className="large">
                  Deze gebruiker is <u>{(user.status == 1) ? 'goedgekeurd' : 'nog niet goedgekeurd'}</u> en <u>{(user.admin == 1) ? 'een' : 'geen'} administratorgebruiker</u>. Pas dit hier aan.
                </p>

                <ButtonGroup>
                  <Link to="#" onClick={() => updateStatus()}>{(user.status == 1) ? 'Keur gebruiker niet meer goed' : 'Keur gebruiker goed'}</Link>
                  <Link to="#" onClick={() => updateAdmin()}>{(user.admin == 1) ? 'Maak niet meer administrator' : 'Maak administrator'}</Link>
                </ButtonGroup>

                <SmallText>
                  <h3>Belangrijke informatie over gebruikersstatus en administratorgebruikers</h3>
                  <p>
                    Een gebruiker die niet is goedgekeurd, heeft geen toegang tot het hele systeem. Deze gebruiker zal aleen een pagina zien waarop staat dat er nog geen goedkeuring is verleend. Administratorgebruikers hebben toegang tot alle functies van het systeem en kunnen boeken, foutrapportages en gebruikers beheren.
                  </p>
                </SmallText>
              </GridColOneThird>
              <GridColTwoThirds>
                <SectionTitle>Beheer gebruiker</SectionTitle>
                <p className="large">Beheer gebruikersinformatie in onderstaand formulier. Als dit wordt aangepast, ontvangt de gebruiker een e-mail notificatie.</p>
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
              </GridColTwoThirds>
            </DefaultPage>
          </>
        ) : (
          <NotFound />
        )
      }
    </>
  )

}

const SectionTitle = styled.h2`
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
  padding-bottom: 10px;
`

const ButtonGroup = styled.div`
  margin-top: -10px;
  a {
    display: block;
    margin-bottom: 5px;
  }
`

const SmallText = styled.div`
  color: #999999;
  font-size: 13px;
  margin-top: 30px;
  h3 {
    color: #777;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    padding-bottom: 5px;
    border-bottom: 1px solid ${props => props.theme.darker_grey};
  }
  p {
    line-height: 1.9;
  }
`

export default ControlUser