import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
  <>
     <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
        <div className="sidebar-brand-icon">
          <img src="logo.png" />
        </div>
        {/* <div className="sidebar-brand-text mx-3">RuangAdmin</div> */}
      </NavLink>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>O2 Details</span></NavLink>
      </li>
      <hr className="sidebar-divider" />
     
    
 
    
      <li className="nav-item">
        <NavLink className="nav-link" to="/card-details">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Cards Details</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />
      <div className="version" id="version-ruangadmin"></div>
    </ul>
  </>
  )
}

export default Sidebar