import { useEffect, useState } from "react"
import { trackPromise } from "react-promise-tracker"

function FetchBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    async function fetchBooks() {
      const body = { token: token }
      trackPromise (
        fetch(`${process.env.REACT_APP_API_BASEURL}/book/fetch.php`, {
          method: 'POST', body: JSON.stringify(body)
        })
          .then(async response => {
            const data = await response.json()
            setBooks(data.books)
          })
          .catch((error) => console.error(error))
      )
    }

    fetchBooks()
  }, [setBooks])

  return books
}

export default FetchBooks