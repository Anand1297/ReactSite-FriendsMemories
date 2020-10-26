import React ,{Component} from 'react';
import Header from './Header'
import Project from './Project'
import Friends from './Friends'
import Footer from './Footer'
import LoginPage from './LoginPage';
//import {Redirect} from 'react-router-dom';
 

class Home extends Component {
  state = { islogin: false
  }

  islogin=()=>{
    this.setState({
      islogin:!this.state.islogin
     } )
  }
  render() { 
   const {project, friend}= this.props
    return (
    <div className="body">
      <Header />
    <p className="header"> Few Achievements </p> 
    <Project  projectData={project} />
    {/* <button onClick={this.islogin} >Login</button> */}
   {/* {this.state.islogin ? <Project  projectData={project} /> :<LoginPage/>}  */}
    <Friends friendData={friend} />
    <Footer/>
    </div>
        );
  }
}
 


export default Home;
