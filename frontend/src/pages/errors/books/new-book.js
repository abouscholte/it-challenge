import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import _ from "lodash"

import Page from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import { Link, useHistory } from "react-router-dom"
import {
  FormPageForm,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  FormControlError,
  FormSubmit
} from "components/elements/forms"
import Alert from "components/elements/alert"
import { ArrowBackOutline } from "react-ionicons"

function NewBook() {
  
  // set up constants
  const [alert, setAlert] = useState({ visible: false, alert: null })
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  // set document title
  useEffect(() => document.title = 'Voeg een nieuw boek toe - Notenboom')
  
  // handle form submit
  const onSubmit = data => {
    _.assign(data, { token: localStorage.getItem('jwt-token') })
    _.assign(data, { user_id: JSON.parse(localStorage.getItem('currentUser')).uid })

    fetch(`${process.env.REACT_APP_API_BASEURL}/book/create.php`, {
      method: 'POST', body: JSON.stringify(data)
    })
      .then(async response => {
        const data = await response.json()

        // check if error or success
        if (data.error) {
          setAlert({ visible: true, alert: data.error })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          setAlert({
            visible: true, 
            alert: 'Het boek is succesvol toegevoegd, het zal nu eerst moeten worden goedgekeurd door een administrator voordat het boek te zien zal zijn voor iedereen. U wordt zo weer teruggestuurd naar de boekenplank.' 
          })
          setTimeout(() => history.push('/fouten'), 5000)
        }
      })
      .catch((error) => console.error(error))
  }
  
  return (
    <>
      <NavbarLarge />
      <Page title="Voeg een nieuw boek toe" small>
        <Link to='/fouten' className="button button-back" style={{ marginBottom: 20 }}>
          <ArrowBackOutline color={'#ffffff'} height="16px" />
          &nbsp;Ga terug
        </Link>
        <Alert visible={alert.visible} text={alert.alert} />

        <p className="large">Het nieuwe boek moet eerst goedgekeurd worden door onze administrator, daarna zal u het nieuwe boek terugvinden op de <Link to="/boeken">Notenbooom boekenplank</Link>.</p>
        <FormPageForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel htmlFor="title">Wat is de titel van het boek?</FormLabel>
            <FormControl type="text" id="title" name="title" className={errors.title && 'error'} ref={register({
              required: 'Dit veld is verplicht!'
            })} />
            {errors.title && <FormControlError>{errors.title.message}</FormControlError>}
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="author">Wat is de auteur van het boek?</FormLabel>
            <FormControl type="text" id="author" name="author" className={errors.author && 'error'} ref={register({
              required: 'Dit veld is verplicht!'
            })} />
            {errors.author && <FormControlError>{errors.author.message}</FormControlError>}
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="publisher">Wat is de uitgever van het boek?</FormLabel>
            <FormControl type="text" id="publisher" name="publisher" className={errors.publisher && 'error'} ref={register({
              required: 'Dit veld is verplicht!'
            })} />
            {errors.publisher && <FormControlError>{errors.publisher.message}</FormControlError>}
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="year_published">Wat is het jaar van uitgave van het boek?</FormLabel>
            <FormControl type="number" id="year_published" name="year_published" className={errors.year_published && 'error'} ref={register({
              required: 'Dit veld is verplicht!'
            })} />
            {errors.year_published && <FormControlError>{errors.year_published.message}</FormControlError>}
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="isbn">Wat is het ISBN nummer van het boek? (In de vorm *-*-*-*-*)</FormLabel>
            <FormControl type="text" id="isbn" name="isbn" className={errors.isbn && 'error'} ref={register({
              required: 'Dit veld is verplicht!'
            })} />
            {errors.isbn && <FormControlError>{errors.isbn.message}</FormControlError>}
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="type">Kies het type boek</FormLabel>
            <FormSelect id="type" name="type" className={errors.type && 'error'} ref={register({
              required: 'Dit veld is verplicht!'
            })}>
              <option value="papier">Papieren boek</option>
              <option value="ebook">E-book</option>
              <option value="audio">Audioboek</option>
            </FormSelect>
            {errors.type && <FormControlError>{errors.type.message}</FormControlError>}
          </FormGroup>
          <FormSubmit type="submit" value="Voeg boek toe" className="button" />
        </FormPageForm>
      </Page>
    </>
  )
}

export default NewBook