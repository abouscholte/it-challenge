import React, { useState, useEffect } from "react"
import FetchErrors from "components/errors/fetch"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"
import {
  CardsSection,
  Card,
  CardTitle,
  CardSubtitle,
  CardList,
  CardLink
} from "components/elements/cards"
import { Link } from "react-router-dom"

export default function Errors() {
  // set constants and such
  const fetchErrors = FetchErrors()
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
    // set document title
    document.title = 'Beheer foutenrapportages - Notenboom'

    // fetch errors
    setErrors(fetchErrors)
  }, [setErrors, fetchErrors, errors])

  // create error card
  const ErrorCard = item => {
    const error = item.item

    return (
      <Card key={error.id} two>
        <div>
          <CardTitle>Fout in {error.book_title}</CardTitle>
          <CardSubtitle>Fout gerapporteerd door <Link to={`/admin/gebruiker-${error.user_id}`}>gebruiker {error.user_id}</Link></CardSubtitle>
        </div>
        <CardList>
          <li>Auteur van boek: {error.book_author}</li>
          <li>
            Type fout: {
              error.type == 'layout'
                ? 'fout in layout'
                : error.type == 'info'
                  ? 'fout in informatie'
                  : 'taalfout'
            }
          </li>
          <li>Hoofdstuk van fout: {error.chapter}</li>
          {error.page && <li>Paginanummer van fout: {error.page}</li>}
          {error.section && <li>Paragraaf van fout: {error.section}</li>}
          {error.paragraph && <li>Alinea van fout: {error.paragraph}</li>}
          <li><b>Status: {error.status == 1 ? 'Goedgekeurd' : 'Nog niet goedgekeurd'}</b></li>
        </CardList>
        <CardLink to="#">Keur fout goed</CardLink>
        <CardLink to="#" className="danger">Verwijder fout</CardLink>
      </Card>
    )
  }

  return (
    <React.Fragment>
      <Navbar />
      <Page title="Administrator paneel" sidebarTitle="Beheer alle foutenrapportages" sidebarType="admin">
        {/* top info */}
        <h1>Beheer alle foutenrapportages</h1>
        <p className="large">U ziet hieronder alle nieuwe, nog niet goedgekeurde foutenrapportages. Om alle goedgekeurde te zien, gebruik de filters hieronder.</p>

        {/* cards section */}
        <CardsSection>
          {errors.length > 0 ? (
            errors.map((item) => <ErrorCard key={item.id} item={item} />)
          ) : <p className="large">Er zijn geen foutenregistraties gevonden!</p>}
        </CardsSection>
      </Page>
    </React.Fragment>
  )
}