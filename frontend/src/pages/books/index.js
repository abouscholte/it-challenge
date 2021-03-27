import React, { useEffect, useState } from "react"
import FetchBooks from "components/books/fetch"
import Page from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import {
  CardsSection,
  Card,
  CardTitle,
  CardSubtitle,
  CardList,
  CardLink
} from "components/elements/cards"
import { Link } from "react-router-dom"

function Boeken() {
  
  // set constants and such
  const fetchBooks = FetchBooks()
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    // set document title
    document.title = 'Bekijk boeken - Notenboom'

    // fetch books
    setBooks(fetchBooks.filter((item) => item.status == 1))
  }, [fetchBooks, setBooks])
  
  return (
    <>
      <NavbarLarge />
      <Page title="Notenboom Boekenplank">
        <p className="large">Kunt u niet vinden wat u zoekt?&nbsp;
          <Link to="/boeken/nieuw-boek">Voeg dan een nieuw boek toe</Link>.
        </p>
        <p className="large" style={{ margin: '-10px 0 30px 0' }}>
          Alleen boeken die zijn goedgekeurd door een administrator worden hier weergegeven. 
          {JSON.parse(localStorage.getItem('currentUser')).adm == 1 && (
            <span> Als administrator kunt u alle boeken <Link to="/admin/boeken">hier</Link> beheren.</span>
          )}
        </p>

        <CardsSection>
          {books.map(item => (
            <Card key={item.id}>
              <div>
                <CardTitle dangerouslySetInnerHTML={{ __html: item.title }} />
                <CardSubtitle dangerouslySetInnerHTML={{ __html: item.author }} />
              </div>
              <CardList>
                <li dangerouslySetInnerHTML={{ __html: `Uitgever: ${item.publisher}` }} />
                <li>Uitgegeven: {item.year_published}</li>
                <li>ISBN: {item.isbn}</li>
                <li>Type: {item.type == 'papier' ? 'Papieren boek' : item.type == 'audio' ? 'Audioboek' : 'E-book'}</li>
              </CardList>

              <div className="card-links">
                <CardLink to={`/fouten/boek-${item.id}`}>Rapporteer fout</CardLink>
                {(JSON.parse(localStorage.getItem('currentUser')).adm == 1) &&
                  <React.Fragment>
                    <br />
                    <CardLink to={`/boeken/boek-${item.id}`}>Wijzig boek</CardLink>
                  </React.Fragment>
                }
              </div>
            </Card>
          ))}
        </CardsSection>
      </Page>
    </>
  )
}

export default Boeken