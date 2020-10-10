import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Friends extends Component {
    state = { 
    }


    // componentDidMount(){
    //     this.setState({
    //         friendData:
    //     })
    // }
    render() { 
        const  {friendData} = this.state;
        
        return ( 
         <div>
             <p className="header">Let's meet the hard working personalities</p>
            
             <div className="row">
             {this.props.friendData.map(data=>{
                 const image= data.img === "" ? "default" : data.img
          return    <div className="col-sm-3">
              <Link to={`/friendDetails/${data.id-1}`}>
              <img src={require(`../assets/img/${image}.png`)} className="friendimg" alt="PersonalImg"></img>
                <p className="friendName">{data.name} </p>
                </Link>
          </div> 
        })
        }
             </div>
            
             </div>
         );
    
    }
}
 
export default Friends;