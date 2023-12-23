import '../stylesheets/sass/pages/accommodation-details.css'
import accomodationsArray from '../assets/logements.json'
import Slider from '../components/slider'
import {useParams} from 'react-router-dom'
import PageNotFound from './page-not-found'
import Tags from '../components/tags'
import Collapse from '../components/collapse'

function AccommodationDetails(){

    const {id} = useParams()
    const currentAccomodation = accomodationsArray.find((accommodation)=> accommodation.id === id)
    
   function Rating (rating){
    if (rating === '1'){
        return(
            <>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            </>
        )
    }else if(rating === '2'){
        return(
            <>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            </>
        )
    }else if(rating === '3'){
        return(
            <>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            </>
        )
    }else if(rating === '4'){
        return(
            <>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            </>
        )
    }else if(rating === '5'){
        return(
            <>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            <i className='fa-solid fa-star rating-positive'></i>
            </>
        )
    }else{
        return(
            <>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            <i className='fa-solid fa-star rating-negative'></i>
            </>
        )
    }
   }
    
    

    if(currentAccomodation === undefined){
        return <PageNotFound/>

    }
    else{
        return(
        
            <div className='accomodation-details'>
                
                    
                <Slider slidesAccomodation={currentAccomodation.pictures} />
                   
                <div className='accomodation-details_container'>
                    <div className='accomodation-details_container-titles-tags'>
                        <div className='accomodation-details_titles'>
                            <h2>{currentAccomodation.title}</h2>
                            <h3>{currentAccomodation.location}</h3>

                        </div>
                        <div className='accomodation-details_tags'>
                            {currentAccomodation.tags.map((tags, index) => {
                                return <Tags key={index} content={tags}/>
                            })}
                        </div>
                    </div>
                    
                    <div className='accomodation-details_container-rating-host'>
                        <div className='accomodation-details_rating'>
                            {Rating(currentAccomodation.rating)}
                        </div>
                        <div className='accomodation-details_host'>
                            <p className='accomodation-details_host-name'>{currentAccomodation.host.name}</p>
                            <img className='accomodation-details_host-picture' src={currentAccomodation.host.picture} alt='Hote'></img>
                        </div>
                    </div>

                </div>
                <div className='accomodation-details_collapse'>
                    <div className='accomodation-details_collapse-description'>
                        <Collapse title='Description' content={currentAccomodation.description}/>
                    </div>
                    <div className='accomodation-details_collapse-equipments'>
                        <Collapse title='Equipements' content={currentAccomodation.equipments.map((equipment, index)=>{
                            return(
                                
                                <li key={index}>{equipment}</li>
                               
                            )
                        })}/>
                    </div>
                </div>

            </div>
    
    
    
    
        )
    }
    

}

export default AccommodationDetails