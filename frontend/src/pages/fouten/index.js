import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FetchBooks from "components/books/fetch"
import DefaultPage from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import Alert from "components/elements/alert"
import { useLocation, useHistory, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { 
  FormPageForm,
  FormGroup,
  FormLabel,
  FormSelect,
  FormSubmit
} from "components/elements/forms"

export default function Fouten() {

  // set location, state and other variables
  const location = useLocation()
  const history = useHistory()
  const fetchBooks = FetchBooks()
  const [alert] = useState({ visible: (location.state ? true: false), alert: (location.state ? location.state.alert : null) })
  const [books, setBooks] = useState([])
  const { register, handleSubmit } = useForm()

  // submit form
  const onSubmit = data => history.push(`/fouten/boek-${data.book}`)
  
  useEffect(() => {
    // set page title
    document.title = 'Rapporteer fouten - Notenboom'

    // fetch books
    setBooks(fetchBooks.filter((item) => item.status == 1))
  }, [fetchBooks])
  
  return (
    <>
      {/* render navbar and page container */}
      <NavbarLarge />
      <DefaultPage title="Rapporteer fouten" small>

        {/* alert */}
        <Alert visible={alert.visible} text={alert.alert} />

        {/* top section with title and explanation */}
        <SectionTitle>Kies een boek</SectionTitle>
        <p className="large">Om een fout te rapporteren, moet u eerst een boek kiezen. Voor meer informatie over elk boek, bezoek de <Link to="/boeken">boekenplank</Link>.</p>

        {/* select book form */}
        <FormPageForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel htmlFor="book">Kies een boek</FormLabel>
            <FormSelect name="book" id="book" ref={register()}>
              {books.map((book) => (
                <option value={book.id} key={book.id}>{book.title} - {book.author} - {book.type}</option>
              ))}
            </FormSelect>
          </FormGroup>
          <FormSubmit type="submit" value="Ga door" />
        </FormPageForm>
      </DefaultPage>
    </>
  )
}

const SectionTitle = styled.h2`
  font-size: 1.7rem;
  margin: 0 0 10px;
  line-height: 1.05;
`