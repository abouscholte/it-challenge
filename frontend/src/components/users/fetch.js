import { useEffect, useState } from "react"
import { trackPromise } from "react-promise-tracker"

function FetchUsers() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    async function fetchUsers() {
      let body = { token: token }
      body = JSON.stringify(body)
      trackPromise (
        fetch(`${process.env.REACT_APP_API_BASEURL}/user/fetch.php`, {
          method: 'POST',
          body: body
        })
          .then(async response => {
            const data = await response.json()
            setUsers(data.users)
          })
          .catch((error) => {
            console.error(error)
          })
      )
    }

    fetchUsers()
  }, [])

  return users
}

export default FetchUsers