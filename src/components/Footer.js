import logo2 from '../assets/Logo_b&w.png'
import '../stylesheets/sass/components/footer.css'

function Footer(){
    return(
        <div className='footer'>
            <img src={logo2} alt='Logo en blanc' className='footer_logo'></img>
            <h3 className='footer_copyright'>© 2020 Kasa. All<br/> rights reserved</h3>
        </div>
    )
}
export default Footer