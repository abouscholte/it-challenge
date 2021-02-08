import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"

function FetchUser() {

  const [user, setUser] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem('jwt-token')
      const body = JSON.stringify({ token: token, id: params.id })

      trackPromise (
        fetch(`${process.env.REACT_APP_API_BASEURL}/user/fetch_one.php`, {
          method: 'POST',
          body: body
        })
          .then(async response => {
            const data = await response.json()
            if (data.id) {
              setUser(data)
            }
          })
          .catch((error) => console.error(error))
      )
    }

    fetchUser()

  }, [params])
  
  return user ? user : null

}

export default FetchUser