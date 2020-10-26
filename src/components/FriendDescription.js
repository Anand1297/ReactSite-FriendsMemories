import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class FriendDescription extends Component {
    state = {
             name:"",
            Description:"",
            company:"",
            Technology:[],
            img:"",
            email:"",
            socialmedia:"",
            msg:""

}

componentDidMount(){
    const {name,Description,company,Technology,img,email,socialmedia,msg}=this.props.Fdescription;
   this.setState({
       name:name,
       Description:Description,
       company:company,
       Technology:Technology,
       img:img,
       email:email,
       socialmedia:socialmedia,
       msg:msg
   })
}

alertBox=()=>{
    alert("Hello");
}

    render() { 
        const {name,Description,company,Technology,img,email,socialmedia,msg} = this.state;
        const image = img ==="" ? "default":img;
        // console.log(img)
        return ( <div className="personalBg">
            <Header/>
            <div className="row" >
                <div className="col-lg-3 col-sm-3">
                     <img src={require(`../assets/friends/${image}.png`)} alt="personalImg" className="personalCardImg"/>
                </div>
                <div className="col-lg-6 col-sm-6">
                <section className="">
               <p className="personalName">I'm {name}</p>
               <section>
                  <p>Government College of Engineering, Aurangabad</p>
                  <p><b style={{color:"black"}}>Email: </b>   {email} </p>
                  <p><b style={{color:"black"}}>Company: </b> {company.name} Pvt Ltd.  <a href={company.link}>more about company</a></p>
                    </section>
                    </section>
                </div>
                <div className="col-lg-3 col-sm-3">
                <a href={socialmedia.github} ><i className="fa fa-github"></i></a>
                <a href="https://www.google.com/" className="fa fa-facebook"><i></i></a>
                <a href="https://www.google.com/" className="fa fa-linkedin"><i></i></a>
                <a href="https://www.google.com/" className="fa fa-instagram"><i></i></a>
                
                </div>

            </div>
        <div className="row">
            <div className="col-lg-6 ">
                <h4>Lets Know more about {name} </h4>
                <p className="personalDetails">{Description}</p>
            </div>
            <div className="col-lg-6 ">
               <h4>Technology Expertise</h4> 
               {Technology.map(data => (
                     <p className="personalDetails" onClick={()=>this.alertBox()}>{data}</p>
               ))}
              
            </div>

        </div>
            <div className="friendMsg">
               <p>{msg}</p>
               <h5 style={{
                   color:"red",
                   textAlign:"right",
                   paddingTop:"20px"
               }}>Message from a friend ...</h5>
            </div>
        <Footer/>
        </div>);
    }
}
 
export default FriendDescription;