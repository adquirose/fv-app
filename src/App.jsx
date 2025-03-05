import { useEffect } from "react"
import axios from "axios"

function App() {
  const traerToken = async() => {
    const resp = await axios.post('https://fundovolcanes.cl/oauth/token',{   
            grant_type:"password",
            client_id:"9e4e7f4f-28c6-40b0-9277-ccfab26f369a",
            client_secret:"yw9Npj7x6sNbhnK5wbwYJXM3zG8TKifdY1XKEajf",
            username:"api@fundovolcanes.cl",
            password:"orMascHadMIn"
        },
        {
            headers:{
                'Content-Type':'application/json'
            }
        }
    )
    return resp
  }
  useEffect(() => {
      traerToken()
          .then(resp => console.log(resp))
          .catch(error => console.log(error))
  },[])
  return(
    <p>App</p>
  )
}

export default App
