import React from "react"
import {useNavigate} from 'react-router-dom'
import '../stylesheets/sass/components/card.css'




function CardDisplay({image, title, id}){

    const navigate = useNavigate()


    const goToLogement = (id) => {

        navigate(`/accommodation-details/${id}`)
    }

    return (


        <div className="card" onClick={() => goToLogement (id)}>
            <img src={image} alt={title} className="card_img"></img>
            <div className="card_gradient"></div>
            <h2 className="card_title">{title}</h2>




        </div>




    )


}

export default CardDisplay