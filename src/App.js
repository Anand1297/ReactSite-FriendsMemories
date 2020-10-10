import React ,{Component} from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FriendDescription from './components/FriendDescription';
import ProjectDescription from './components/ProjectDescription'
import Home from './components/Home';
import {project , friend} from './components/data';
import {  Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
 

class App extends Component {
  state = {  }

  render() { 
   
    return (
       <Switch>
      <Route path="/"   exact render={()=>(
      <Home  project={project} friend={friend} /> )}
      />
      <Route path="/friendDetails/:id"
            render={(props)=>{
              let friendId=props.location.pathname.replace('/friendDetails/','');
              let validId= friendId> friend.length-1 ? "0": friendId;
              console.log(validId);
              console.log(friend[validId]);
              return (<FriendDescription Fdescription={friend[validId]}/>)
            }
          }
      />


      <Route  path="/projectDetails/:id" 
       render={(props)=>{
        let projectId= props.location.pathname.replace('/projectDetails/' ,'');
        let validId= projectId> project.length-1 ? "0": projectId;
        console.log(project[validId]);
        return ( <ProjectDescription  Pdescription={project[validId]}/> )}
      } exact/>
        
      <Route  component={PageNotFound}/>
    </Switch>
   
        );
  }
}
 


export default App;
