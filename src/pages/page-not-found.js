import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/sass/pages/page-not-found.css'

function PageNotFound(){

    return(
        <div className="page-not-found">
            <h1>404</h1>
            <h2>Oups! La page que vous demander n'existe pas.</h2>
            <Link to='/' className="page-not-found_link">Retourner sur la page d'accueil</Link>
        </div>
    )


}

export default PageNotFound