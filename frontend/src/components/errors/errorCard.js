import React from "react"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardList,
  CardLink
} from "components/elements/cards"
import { Link } from "react-router-dom"

const ErrorCard = item => {
  const error = item.item

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
        <p>Toelichting: {error.explanation}</p>
        <li><b>Status: {error.status == 1 ? 'Goedgekeurd' : 'Nog niet goedgekeurd'}</b></li>
      </CardList>
      {error.status == 0 && <CardLink to="#" style={{ marginBottom: 5 }}>Keur fout goed</CardLink>}
      <CardLink to="#" className="danger">Verwijder fout</CardLink>
    </Card>
  )
}

export default ErrorCard