import React ,{Component} from 'react';
import Header from './Header'
import Project from './Project'
import Friends from './Friends'
import Footer from './Footer'


 

class Home extends Component {
  state = {  }

  render() { 
   const {project, friend}= this.props
    return (
    <div className="body">
    <Header />
    <p className="header"> Friends Forever </p> 
    <Project  projectData={project} />
    <Friends friendData={friend} />
    <Footer/>
    </div>
        );
  }
}
 


export default Home;
