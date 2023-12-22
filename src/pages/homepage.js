import React from "react";
import CardDisplay from "../components/card";
import logements from '../assets/logements.json'
import Banner from "../components/banner";
import bannerHome from '../assets/banner_homepage.png'

function Homepage(){

    
    return(
        <div className="Homepage">
            
            <Banner imageBanner={bannerHome} textBanner='Chez vous, partout et ailleurs' />
            

            <div className="card-container">
                {logements.map(logement => (
                    <CardDisplay key={logement.id} image={logement.cover}  title={logement.title} id={logement.id}/>
                ))}

            </div>


        </div>
        




    )


}

export default Homepage