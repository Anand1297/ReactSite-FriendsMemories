import React, { Component } from 'react';


class FriendDescription extends Component {
    state = {
             name:"",
            Description:"",
            company:"",
            Technology:[],
            img:"",
            email:""

}

componentDidMount(){
    const {name,Description,company,Technology,img,email}=this.props.Fdescription;
   this.setState({
       name:name,
       Description:Description,
       company:company,
       Technology:Technology,
       img:img,
       email:email
   })
}

alertBox=()=>{
    alert("Hello");
}

    render() { 
        const {name,Description,company,Technology,img,email} = this.state;
        const image = img ==="" ? "default":img;
        // console.log(img)
        return ( <div className="personalBg">
            <div className="row" >
                <div className="col-sm-4">
                     <img src={require(`../assets/img/${image}.png`)} alt="personalImg" className="personalCardImg"/>
                </div>
                <div className="col-sm-8">
                <section className="">
               <p className="personalName">I'm {name}</p>
               <section>
               <p>Government College of Engineering, Aurangabad</p>
              <p> Email:  {email} </p>
    <p>Compant: {company}</p>
                    </section>
                    </section>
                </div>

            </div>
        <div className="row">
            <div className="col-lg-6 ">
                <h4>Lets Know more about {name} </h4>
                <p className="personalDetails">{Description}</p>
            </div>
            <div className="col-lg-6 ">
               <h4>Technology</h4> 
               {Technology.map(data => (
                     <p className="personalDetails" onClick={()=>this.alertBox()}>{data}</p>
               ))}
              
            </div>

        </div>
        </div>);
    }
}
 
export default FriendDescription;