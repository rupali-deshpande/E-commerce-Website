
import '../sidenav/sidenav.css'
function sidenavbar() {
    return(
        <nav className="navbar">
     <div className="logo">Shopify</div>
     <ul className="nav-links">
      
       <div className="menu">
         <li><a href="Home">Home</a></li>
         <li><a href="About">About</a></li>
         <li className="services">
           <a href="Category">Category</a>

           <ul className="dropdown">
             <li><a href="Male">Male </a></li>
             <li><a href="Female">Female</a></li>
             <li><a href="Kids">Kids</a></li>
           </ul>
         </li>
         <li><a href="Pricing">Pricing</a></li>
         <li><a href="Contact">Contact</a></li>
       </div>
     </ul>
   </nav>
    );
}
export default sidenavbar;