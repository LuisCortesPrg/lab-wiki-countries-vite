import Navbar from "../components/Navbar";
import CountryDetails from "./CountryDetailsPage";
import {Routes, Route, Link} from  "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";


function HomePage() {
const[allCountries, setAllCountries]= useState(null)
console.log(allCountries)
useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response)=>{
        setAllCountries(response.data) 
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

if(allCountries===null){
    return <h4>loading</h4>
}

return(
<div>
    <h1 style={{ fontSize: "40px", alignItems:"center", }}>WikiCountries: tu guía del mundo</h1>

    {allCountries.map((eachCountry)=>{
        return(
          <li>  <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link></li>
        )
    })}
</div>








)

}





export default HomePage;
