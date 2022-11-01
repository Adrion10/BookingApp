import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
          <span className="logo">Lacebooking</span> 
          <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            </div> 
        </div>
    </div>
  )
}

export default Navbar