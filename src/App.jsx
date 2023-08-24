import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import {Routes, Route, Link} from  "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
     
<Navbar />

<Routes>
<Route path="/" element={<HomePage/>}/>

<Route path="/:countryId" element={<CountryDetails/>}/>
</Routes>



    </div>
  );
}

export default App;
