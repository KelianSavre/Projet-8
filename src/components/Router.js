import React from "react"
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import PageNotFound from '../pages/page-not-found'
import logo from '../assets/Logo_orange.png'
import Homepage from "../pages/homepage"
import AccommodationDetails from "../pages/accommodation-details"
import About from "../pages/about"
import '../stylesheets/sass/components/router.css'


function NavRouter(){

    return(

        <Router>

            <header>

                <nav className="navbar">
                    <div className="navbar_logo">
                        <img src={logo} alt='Logo'></img>
                    </div>
                    <div>
                        <NavLink className='navbar_link' to='/'>Accueil</NavLink>
                        <NavLink className='navbar_link navbar_link-gap' to='/about'>A propos</NavLink>
                    </div>

                </nav>

            </header>

            <Routes>
                <Route path="/" Component={Homepage}/>
                
                <Route path="/about" Component={About} />
                <Route path="/accommodation-details/:id" Component={AccommodationDetails}  />
                <Route path="*" Component={PageNotFound}/>

            </Routes>



        </Router>






    )



}

export default NavRouter