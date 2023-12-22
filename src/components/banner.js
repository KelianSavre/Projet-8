import React from "react"
import '../stylesheets/sass/components/banner.css'

function Banner({imageBanner,textBanner}){
    return(
        <div className="banner">
            <img src={imageBanner} alt='Banniere'></img>
            <h1>{textBanner}</h1>
            <div className="banner_darken"></div>
        </div>
    )
}

export default Banner