import React from 'react';


const Header = () => {
    return ( 
         <div>
         <nav class="navbar navbar-expand-md navbar-dark bg-dark">
         <a href="google.com" class="navbar-brand">Brand</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
               
                <a href="google.com" class="nav-item nav-link active">Home</a>
                <a href="google.com" class="nav-item nav-link">About</a>
                <a href="google.com" class="nav-item nav-link">Memories</a>
                <a href="google.com" class="nav-item nav-link">Friends</a>
            </div>
            </div>
    </nav>
      </div>
     );
}
 
export default Header;