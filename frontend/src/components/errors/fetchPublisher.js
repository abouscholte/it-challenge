import { useEffect, useState } from "react"

export default function FetchErrors() {
  const [publishers, setPublishers] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    async function fetchErrors() {
      const body = { token: token }
      fetch(`${process.env.REACT_APP_API_BASEURL}/errors/fetch_publisher.php`, {
        method: 'POST', body: JSON.stringify(body)
      })
        .then(async response => {
          const data = await response.json()
          setPublishers(data.publishers)
        })
        .catch((error) => console.error(error))
    }

    fetchErrors()
  }, [setPublishers])

  return publishers
}