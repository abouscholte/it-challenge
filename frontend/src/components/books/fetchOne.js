import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function FetchBook() {

  const [book, setBooks] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function fetchBook() {
      const token = localStorage.getItem('jwt-token')
      const body = JSON.stringify({ token: token, id: params.id })

      fetch(`${process.env.REACT_APP_API_BASEURL}/book/fetch_one.php`, {
        method: 'POST',
        body: body
      })
        .then(async response => {
          const data = await response.json()
          if (data.id) {
            setBooks(data)
          }
        })
        .catch((error) => console.error(error))
    }

    fetchBook()

  }, [params])

  return book ? book : null

}

export default FetchBook