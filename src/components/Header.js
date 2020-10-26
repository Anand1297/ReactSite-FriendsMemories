import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return ( 
        
         <div>
         <nav class="navbar navbar-expand-md navbar-dark bg-dark">
         <h1 class="navbar-brand">Friends Forever</h1>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
               
                <Link to="/" class="nav-item nav-link active">Home</Link>
                <a href="/AboutUs" class="nav-item nav-link">About</a>
                <a href="/ComingSoon" class="nav-item nav-link">Memories</a>
                <a href="/ComingSoon" class="nav-item nav-link">Friends</a>
            </div>
            </div>
    </nav>
      </div>
     );
}
 
export default Header;