import '../stylesheets/sass/pages/about.css'
import React from 'react'
import Collapse from '../components/collapse'
import Banner from '../components/banner'
import BannerAbout from '../assets/Banner_about.png'



const ContentArray = [
    {
        "id":"1",
        "title": "Fiabilité",
        "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
    },
    {
        "id":"2",
        "title": "Respect",
        "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

    },
    {
        "id":"3",
        "title": "Service",
        "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        "id":"4",
        "title": "Sécurité",
        "content":"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }

]


function aPropos(){
    return(
        <div className='about-container'>
            <Banner imageBanner={BannerAbout} textBanner=''></Banner>

            <div className='collapse'>
                <div className='collapse-active'>
                    {ContentArray.map((collapseContent)=>{
                      
                      return(
                        <div key={collapseContent.id}>
                            <Collapse content={collapseContent.content} title={collapseContent.title}></Collapse>
                        </div>    
                      )

                    })}
                </div>
            </div>



        </div>
    )


}

export default aPropos