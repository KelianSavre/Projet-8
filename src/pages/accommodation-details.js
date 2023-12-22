import '../stylesheets/sass/pages/accommodation-details.css'
import accomodationsArray from '../assets/logements.json'
import Slider from '../components/slider'
import {useParams} from 'react-router-dom'
import PageNotFound from './page-not-found'


function AccommodationDetails(){

    const {id} = useParams()
    const currentAccomodation = accomodationsArray.find((accommodation)=> accommodation.id === id)
    

    

    if(currentAccomodation === undefined){
        return <PageNotFound/>

    }
    else{
        return(
        
            <div className='accomodation-details_container'>
                
                    
                <Slider slidesAccomodation={currentAccomodation.pictures} />
                   
            </div>
    
    
    
    
        )
    }
    

}

export default AccommodationDetails