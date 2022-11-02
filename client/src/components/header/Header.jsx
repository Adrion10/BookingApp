import "./header.css"
import {faBed, faPlane,faCar,faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed } />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane } />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar } />
        <span>Car rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed } />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi } />
        <span>Airport taxis</span>
        </div>
      </div> 
      <h1 className="headerTitle">When it comes to booking a holiday, we know everyone likes something different </h1>
      <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or month with a free laceBooking account</p>
      <button className="headerBtn">Sign in / Register</button>
      <div className="headerSearched">
        
      </div>
    </div> 
  </div>
  )
}

export default Header