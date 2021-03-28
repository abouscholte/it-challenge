import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Navbar from "components/layout/navbar/navbarLarge"
import Page from "components/layout/defaultPage"
import FetchBook from "components/books/fetchOne"
import Alert from "components/elements/alert"
import { Link } from "react-router-dom"
import { ArrowBackOutline as BackIcon } from "react-ionicons"
import { useForm } from "react-hook-form"
import { FormPageForm, FormGroup, FormLabel, FormControl, FormSelect, FormTextArea, FormSubmit, FormControlError } from "components/elements/forms"

export default function Rapport() {

  // set constants
  const fetchBook = FetchBook()
  const [book, setBook] = useState({})
  const [alert, setAlert] = useState({ visible: false, alert: null })
  const {register, handleSubmit, errors} = useForm()

  useEffect(() => {
    // set page title
    document.title = 'Rapporteer fout - Notenboom'

    // fetch book
    setBook(fetchBook)
    console.log(book)
  }, [setBook, fetchBook, book])

  // handle form submit
  const onSubmit = data => {
    setAlert({ visible: false, alert: null })
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setAlert({ visible: true, alert: 'U heeft het formulier ingevuld. Veel plezier met je leven vanaf nu!' })
    console.log(data)
  }
  
  return (
    <React.Fragment>
      <Navbar />
      <Page title="Rapporteer fout" small>
        {book && (
          <React.Fragment>
            {/* top section with title and back button and alert */}
            <Link to="/fouten" className="button button-back">
              <BackIcon color={'#ffffff'} height="16px" />
              &nbsp;Ga terug
            </Link>

            <Alert visible={alert.visible} text={alert.alert} style={{ marginTop: 30 }} />

            <SectionTitle>Rapporteer fout in boek: {book.title}.</SectionTitle>
            <p className="large">Vul nu de rest van de gegevens in om de fout te verwerken in het systeem. Deze fout wordt dan bekeken door een administrator en daarna doorgestuurd naar de uitgever.</p>

            {/* form */}
            <FormPageForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel htmlFor="type">Kies het type fout dat zich voordoet in het boek</FormLabel>
                <FormSelect id="type" name="type" ref={register()}>
                  <option value="taal">Taalfout</option>
                  <option value="layout">Fout in layout</option>
                  <option value="info">Fout in informatie</option>
                </FormSelect>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="chapter">Geef het hoofdstuk aan van het boek waarin de fout zich voordoet</FormLabel>
                <FormControl id="chapter" name="chapter" type="text" className={errors.chapter && 'error'} ref={register({
                  required: 'Dit veld is verplicht!'
                })} />
                {errors.chapter && <FormControlError>{errors.chapter.message}</FormControlError>}
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="section">Geef de paragraaf aan waarin de fout zich voordoet (niet verplicht als dit boek geen paragraven bevat)</FormLabel>
                <FormControl id="section" name="section" type="text" ref={register()} />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="type">Geef de alinea aan waarin de fout zich voordoet (niet verplicht als dit boek geen duidelijke alinea's bevat)</FormLabel>
                <FormControl id="paragraph" name="paragraph" type="text" ref={register()} />
              </FormGroup>
              {book.type == 'papier' && (
                <FormGroup>
                  <FormLabel htmlFor="page">Geef het paginanummer aan waar de fout zich voordoet</FormLabel>
                  <FormControl id="page" name="page" type="number" className={errors.page && 'error'} ref={register({
                    required: 'Dit veld is verplicht!'
                  })} />
                  {errors.page && <FormControlError>{errors.page.message}</FormControlError>}
                </FormGroup>
              )}
              <FormGroup>
                <FormLabel htmlFor="explanation">Voeg een toelichting van de fout toe (dit kan dingen als de locatie van de fout of de inhoud van de fout bevatten)</FormLabel>
                <FormTextArea rows="5" id="explanation" name="explanation" className={errors.explanation && 'error'} ref={register({
                  required: 'Dit veld is verplicht!'
                })} />
                {errors.explanation && <FormControlError>{errors.explanation.message}</FormControlError>}
              </FormGroup>
              <FormSubmit type="submit" value="Rapporteer fout" />
            </FormPageForm>

          </React.Fragment>
        )}
      </Page>
    </React.Fragment>
  )
}

const SectionTitle = styled.h2`
  font-size: 1.7rem;
  margin: 30px 0 10px;
`