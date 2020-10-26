import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return ( <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <Link  to="/" > FriendsForever.com</Link>
        </div>
      
      </footer>
        )
}
}
 
export default Footer;