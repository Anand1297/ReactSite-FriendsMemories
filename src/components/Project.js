import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Project extends Component {
    state = { 
    }

    render() { 
    return (
    <div>
        <div className="row " >{
        this.props.projectData.map(data=>{ 

         const img= data.img===""?"default":data.img
            
        return  <div className="col-lg-4 projectTitle " key ={data.id} >

           <img src={require(`../assets/img/${img}.png`)} alt="sakar img" ></img>
                
        <Link to={`/projectDetails/${data.id-1}`}>
           <h5>{data.name}</h5>
           </Link>
        </div>
        })
    }
    </div>
    </div>
    );
 
    }
}
export default Project;