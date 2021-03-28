import React, { useEffect, useState } from "react"
import _ from "lodash"
import Page from "components/layout/defaultPage"
import Navbar from "components/layout/navbar/navbarLarge"
import FetchBook from "components/books/fetchOne"
import NotFound from "pages/notFound"
import Alert from "components/elements/alert"
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import {
  FormPageForm,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  FormControlError,
  FormSubmit,
  FormLinks
} from "components/elements/forms"
import { ArrowBackOutline } from "react-ionicons"

export default function Book() {

  // set constants and state
  const fetchBook = FetchBook()
  const history = useHistory()
  const [alert, setAlert] = useState({ visible: false, alert: null })
  const [book, setBook] = useState({})
  const { register, handleSubmit, errors } = useForm()
  
  useEffect(() => {
    // set page title
    document.title = 'Wijzig boek - Notenboom'

    // set book and user
    setBook(fetchBook)
  }, [fetchBook, setBook])

  // change book status
  const onBookStatus = () => {
    setAlert({ visible: false, alert: null })
    const newStatus = (book.status == 0) ? 1 : 'zero'
    _.assign(book, { token: localStorage.getItem('jwt-token'), status: newStatus })

    // update book
    fetch(`${process.env.REACT_APP_API_BASEURL}/book/update.php`, {
      method: 'POST', body: JSON.stringify(book)
    })
      .then(async response => {
        const data = await response.json()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

        if (data.success) {
          setAlert({ visible: true, alert: data.success })
        } else {
          setAlert({ visible: true, alert: data.error })
        }
      })
      .catch((error) => console.error(error))
  }

  // onsubmit update form
  const onSubmit = data => {
    setAlert({ visible: false, alert: null })
    _.assign(book, { token: localStorage.getItem('jwt-token') })
    _.assign(book, data)

    console.log(book)

    // update book
    fetch(`${process.env.REACT_APP_API_BASEURL}/book/update.php`, {
      method: 'POST', body: JSON.stringify(book)
    })
      .then(async response => {
        const data = await response.json()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

        if (data.success) {
          setAlert({ visible: true, alert: data.success })
        } else {
          setAlert({ visible: true, alert: data.error })
        }
      })
      .catch((error) => console.error(error))
  }

  // onclick delete book
  const onDeleteBook = data => {
    setAlert({ visible: false, alert: null })
    const body = {
      id: book.id,
      token: localStorage.getItem('jwt-token')
    }

    // update book
    fetch(`${process.env.REACT_APP_API_BASEURL}/book/delete.php`, {
      method: 'POST', body: JSON.stringify(body)
    })
      .then(async response => {
        const data = await response.json()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

        if (data.success) {
          setAlert({ visible: true, alert: data.success })

          setTimeout(() => {
            history.push('/admin/boeken')
          }, 3000)
        } else {
          setAlert({ visible: true, alert: data.error })
        }
      })
      .catch((error) => console.error(error))
  }

  return (
    book ? (
      <React.Fragment>
        <Navbar />
        <Page title={`Wijzig boek ${book.id}`} small>
          {/* back button and top section */}
          <p><Link to={'/admin/boeken'} className="button button-back">
            <ArrowBackOutline color={'#ffffff'} height="16px" />
            &nbsp;Ga terug
          </Link></p>
          
          <h1>{book.title}</h1>
          <p className="subtitle">Geschreven door: {book.author}</p>

          {/* page alert */}
          <Alert visible={alert.visible} text={alert.alert} />

          {/* book status section */}
          <div id="status">
            {book.status == 0 ? (
              <p className="large">Dit boek is nog niet goedgekeurd door een administrator. Het boek zal dus niet zichtbaar zijn voor gebruikers en er kunnen nu ook geen fouten worden gerapporteerd over dit boek.</p>
            ) : (
              <p className="large">Dit boek is goedgekeurd door een administrator. Het boek is nu zichbaar voor gebruikers en er kunnen fouten worden gerapporteerd over dit boek.</p>
            )}
            {
              JSON.parse(localStorage.getItem('currentUser')).adm == 1 && (
                <Link type="button important" to="#" onClick={() => onBookStatus()} className="button" style={{ marginTop: '-10px', fontSize: 14 }}>{book.status == 0 ? 'Keur boek goed' : 'Keur boek niet meer goed'}</Link>
              )
            }
          </div>

          {/* book update form */}
          <h2 style={{ margin: '50px 0 20px 0' }}>Wijzig boek</h2>
          <FormPageForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormLabel htmlFor="title">Wijzig de titel van het boek</FormLabel>
              <FormControl type="text" id="title" name="title" className={errors.title && 'error'} defaultValue={book.title} ref={register({
                required: 'Dit veld is verplicht!'
              })} />
              {errors.title && <FormControlError>{errors.title.message}</FormControlError>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="author">Wijzig de auteur van dit boek</FormLabel>
              <FormControl type="text" id="author" name="author" defaultValue={book.author} className={errors.author && 'error'} ref={register({
                required: 'Dit veld is verplicht!'
              })} />
              {errors.author && <FormControlError>{errors.author.message}</FormControlError>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="publisher">Wijzig de uitgever van dit boek</FormLabel>
              <FormControl type="text" id="publisher" name="publisher" defaultValue={book.publisher} className={errors.publisher && 'error'} ref={register({
                required: 'Dit veld is verplicht!'
              })} />
              {errors.publisher && <FormControlError>{errors.publisher.message}</FormControlError>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="year_published">Wijzig het jaar van uitgave van dit boek</FormLabel>
              <FormControl type="number" id="year_published" name="year_published" defaultValue={book.year_published} className={errors.year_published && 'error'} ref={register({
                required: 'Dit veld is verplicht!'
              })} />
              {errors.year_published && <FormControlError>{errors.year_published.message}</FormControlError>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="isbn">Wijzig het ISBN nummer van dit boek</FormLabel>
              <FormControl type="text" id="isbn" name="isbn" defaultValue={book.isbn} className={errors.isbn && 'error'} ref={register({
                required: 'Dit veld is verplicht!'
              })} />
              {errors.isbn && <FormControlError>{errors.isbn.message}</FormControlError>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="type">Wijzig het type boek</FormLabel>
              <FormSelect id="type" name="type" defaultValue={book.type} className={errors.type && 'error'} ref={register({
                required: 'Dit veld is verplicht!'
              })}>
                <option value="papier">Papieren boek</option>
                <option value="ebook">E-book</option>
                <option value="audio">Audioboek</option>
              </FormSelect>
              {errors.type && <FormControlError>{errors.type.message}</FormControlError>}
            </FormGroup>
            <FormSubmit type="submit" value="Update boek" />

            {/* delete book button */}
            <FormLinks>
              <Link to="#" className="danger" onClick={() => onDeleteBook()}>Verwijder boek</Link>
            </FormLinks>
          </FormPageForm>
        </Page>
      </React.Fragment>
    ) : (
      <NotFound />
    )
  )
}