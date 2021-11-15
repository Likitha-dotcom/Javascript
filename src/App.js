import './App.css';
import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      "name":"",
      "age":"",
      "address":"",
      "email":"",
      "mobile":"",
      "result":""
    }
  }

  handleChangeName = (event)=>{
    this.setState(()=>({
      name:event.target.value
    }));
  }

  handleChangeAddres = (event)=>{
    this.setState(()=>({
      address:event.target.value
    }));
  }
  handleChangeAge = (event)=>{
    this.setState(()=>({
      age:event.target.value
    }));
  }
  handleChangeEmail = (event)=>{
    this.setState(()=>({
      email:event.target.value
    }));
  }

  handleChangeMobile = (event)=>{
    this.setState(()=>({
      mobile:event.target.value
    }));
  }

  handleButtonClick = ()=>{
    const results = {
      name:this.state.name,
      address:this.state.address,
      age:this.state.age,
      email:this.state.email,
      mobile:this.state.mobile
    }

    this.setState (()=>({
      result:results
    }));
    }

  render(){
    return(
      <React.Fragment>
        <div>
        <input type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handleChangeName}/>
        </div>

        <div>
        <input type="text" placeholder="Enter your age" value={this.state.age} onChange={this.handleChangeAge}/>
        </div>

        <div>
        <input type="text" placeholder="Enter your address" value={this.state.address} onChange={this.handleChangeAddres}/>
        </div>

        <div>
        <input type="text" placeholder="Enter your email" value={this.state.email} onChange={this.handleChangeEmail}/>
        </div>

        <div>
        <input type="text" placeholder="Enter your mobile" value={this.state.mobile} onChange={this.handleChangeMobile}/>
        </div>

        <div>
        <button id="btn" onClick={this.handleButtonClick}>Click</button>
        </div>

        {/* <div>
        Object.keys(this.state.result).length?
        JSON.stringify(this.state.result);
        </div> */}

        <div>
            Name:{this.state.result.name}
        </div>

        <div>
            Address:{this.state.result.address}
        </div>
        <div>
            Age:{this.state.result.age}
        </div>
        <div>
            Email:{this.state.result.email}
        </div>
         <div>
            Mobile:{this.state.result.mobile}
        </div>

        
      </React.Fragment>
    )
  }
}
export default App;
