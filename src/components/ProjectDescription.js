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
                Description:"" ,
                achievement:{position:"",img:[],folder:""}
    }


    componentDidMount(){
        const   {id,year,name,img,team,Description,achievement} = this.props.Pdescription;
        this.setState(
            {   id:id,
                year:year,
                name:name,
                img:img,
                team:team,
                Description:Description,
                achievement:{position:achievement.position,img:achievement.img,folder:achievement.folder}
            }
            )

        
    }
   
    render() { 
      const   {id,year,name,img,team,Description,achievement} = this.state;
      const image = img ==="" ? "no_image":img;
        return (
        <div class="body">
            <Header /> 
            <div className="jumbotron">
               <p> {name}</p>
              <p>{year}</p>
              <p className="achievement"> <span style={{color:"maroon"}}>Achievement:</span> {achievement.position}</p>
                
            </div>
            <div className="row">
                <div className="col-lg-5 projectTitle" key={id} >
                
                <img src={require(`../assets/project/${image}.png`)} className="projectImg" alt="project Img"></img>
                </div>
                <div className="col-lg-7" >
                <p className="projectTitle">{Description}</p>
                </div>
            </div>
            <br/>
            <hr style={{background:"orangered",margin:"20px"}}/>
            <div class="row">
                {  
                    achievement.img.map(data=>{
                     //   const img =require(`../assets/project/${achievement.folder}/${data}.png`) ? 
                       return <div className="col-lg-6">     
                             <img src={require(`../assets/project/${achievement.folder}/${data}.png`)} className="projectImg1" alt={data}></img>
                              </div>
                                 })
                }
            </div>
             <Friends friendData={team}/>
            <Footer/>
        </div>
           
               
            );
    }
}
 
export default ProjectDescription;