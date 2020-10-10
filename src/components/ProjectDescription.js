import React, { Component } from 'react';
import Friends from './Friends';
import Header from './Header';
import Footer from './Footer';

class ProjectDescription extends Component {
    state = {   id:"",
                year:"",
                name:"",
                img:"",
                team:[],
                Description:"" 
    }


    componentDidMount(){
        const   {id,year,name,img,team,Description} = this.props.Pdescription;
        this.setState(
            {   id:id,
                year:year,
                name:name,
                img:img,
                team:team,
                Description:Description
            }
            )

        
    }
   
    render() { 
      const   {id,year,name,img,team,Description} = this.state;
      const image = img ==="" ? "default":img
        return (
        <div class="body">
            <Header/> 
            <div className="jumbotron">
                {name}
        <p>{year}</p>
                
            </div>
            <div className="row">
                <div className="col-lg-3 projectTitle" key={id} >
                
                <img src={require(`../assets/img/${image}.png`)} className="projectImg" alt="projectImg"></img>
                </div>
                <div className="col-lg-9 projectTitle" >
                <p>{Description}</p>
                </div>
            </div>
             <Friends friendData={team}/>
            <Footer/>
        </div>
           
               
            );
    }
}
 
export default ProjectDescription;