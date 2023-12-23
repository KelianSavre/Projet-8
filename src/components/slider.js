import React, { useState } from "react";
import '../stylesheets/sass/components/slider.css'

function Slider({slidesAccomodation}){

    const [currentSlide,isCurrentSlide] = useState(0)

    /* Initialisation de l'etat a la slide 0*/

    const sliderLength = slidesAccomodation.length

    function nextSlide(){
        isCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }
    /*A tester operateur ternaire devrais ramener a la premiere slide quand on arrive a la derniere (sliderlength-1) et avancer le reste du temps */

    function previousSlide(){
        isCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1 )
    }
    /*Oppose de la fonction precedente donc si l'une marche l'autre est sensee fonctionner si pb reviser operateur ternaire */

    return (
        <div className="slider">
            {sliderLength > 1 && (<>
                <i className="left-arrow fa-solid fa-chevron-left" onClick={previousSlide}></i>
                <i className="right-arrow fa-solid fa-chevron-right" onClick={nextSlide}></i></>
            )/*on affiche les fleche de slider que si on a plus d'une slide */}
            

            {slidesAccomodation.map((pictures, id)=>{
                return (
                    <div key={id} className={'slider_slide'/*operateur ternaire a rajouter pour definir si slide active ou non pourrait etre implemente si on veut rajouter animation*/ }>
                        {id === currentSlide && (
                            <img src={pictures} alt="Visuels du logement" className="slider_slide-image"></img>
                        )}
                        {id === currentSlide && sliderLength > 1 && (
                            <p className="slider_slide-Number">{currentSlide + 1}/{sliderLength}</p>
                        )/*Tester doit afficher le chiffre de la slide si il y a plus d'une slide*/}

                    </div>
                )
            })}
        </div>
    )




}

export default Slider