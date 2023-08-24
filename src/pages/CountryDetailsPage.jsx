import Navbar from "../components/Navbar";
import HomePage from "./HomePage";

import {Routes, Route, Link} from  "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function CountryDetails() {
    const [ details, setDetails ] = useState(null)
    const params = useParams()

    useEffect(() => {
        getData()
      }, [params.countryId])

      const getData = async () => {
        try { console.log(params)
          const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`)
          console.log(response)
          setDetails(response.data)
          
        } catch (error) {
          console.log(error)
        }
      }
    
      if (details === null) {
        return <h3>Loading</h3>
      }

return(
<div>


<h3 style={{ fontSize: "20px", alignItems:"center",}}>Detalles del pais</h3>
<h5>{details.alpha3Code}</h5>
<h5>{details.name}</h5>
<h5>Capital:{details.capital}</h5>
<h5>Superficie:{details.area}</h5>
<h5>frontera:<li><Link to={`/${details.border}`}></Link>{details.border}</li></h5>

</div>


    )
}

export default CountryDetails;
