import { useEffect } from "react"
import axios from "axios"

function App() {
  const traerToken = async() => {
    const resp = await axios.post('https://fundovolcanes.cl/oauth/token',{   
            grant_type:"",
            client_id:"",
            client_secret:"",
            username:"",
            password:""
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
