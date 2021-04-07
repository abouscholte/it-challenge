import React from "react"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardList,
  CardLink
} from "components/elements/cards"
import { Link, useHistory } from "react-router-dom"

const ErrorCard = ( item ) => {
  const error = item.item
  const history = useHistory()

  return (
    <Card two>
      <div>
        <CardTitle>Fout in {error.book_title}</CardTitle>
        <CardSubtitle>Fout gerapporteerd door <Link to={`/admin/gebruiker-${error.user_id}`}>gebruiker {error.user_id}</Link></CardSubtitle>
      </div>
      <CardList>
        <li>Auteur van boek: {error.book_author}</li>
        <li>Uitgever: {error.book_publisher}</li>
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
        <li>Toelichting: {error.explanation}</li>
        <li><b>Status: {error.status == 1 ? 'Goedgekeurd' : 'Nog niet goedgekeurd'}</b></li>
      </CardList>

      <div className="links" style={{ display: 'flex', flexDirection: 'column' }}>
        {error.status == 0 && <CardLink to="#" style={{ marginBottom: 5 }} onClick={() => history.push(`/admin/fouten/update/${error.status}-${error.id}`)}>Keur fout goed</CardLink>}
        <CardLink to="#" onClick={() => history.push(`/admin/fouten/delete/${error.id}`)} className="danger">Verwijder fout</CardLink>
      </div>
    </Card>
  )
}

export default ErrorCard