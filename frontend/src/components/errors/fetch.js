import { useEffect, useState } from "react"

export default function FetchErrors() {
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    async function fetchErrors() {
      const body = { token: token }
      fetch(`${process.env.REACT_APP_API_BASEURL}/errors/fetch.php`, {
        method: 'POST', body: JSON.stringify(body)
      })
        .then(async response => {
          const data = await response.json()
          setErrors(data.errors)
        })
        .catch((error) => console.error(error))
    }

    fetchErrors()
  }, [setErrors])

  return errors
}