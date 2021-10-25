
import './App.css';
import React from 'react';
import Info from './Component/Info';
import Qual from './Component/Qualification';
import Skills from './Component/Skills';
import Proj from './Component/Projects';


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      "name":"likitha s",
      "addr":"#103, HAL, Bangalore-560017",
      "phno":9035209167,
      "email":"likithas434@gmail.com",
      "qual":[
        {
          "college":"RVCE",
          "university":"VTU",
          "percent":8.81,
          "yoj":2020
        },
        {
          "college":"mount carmel college",
          "university":"bangalore university",
          "percent":80.04,
          "yoj":2017
        },
        {
          "college":"army public school",
          "university":"CBSE",
          "percent":78.4,
          "yoj":2016
        },
        {
          "college":"army public school",
          "university":"CBSE",
          "percent":85.5,
          "yoj":2015
        }

      ],
      "lang":"C, C++, Python, Javascript",
      "os":"Windows, Linux",
      "database":"MySQL, MongoDB",
      "tech":"MS Office, Jira, GIT, Google Collabs",
      "proj":[
        {
          "pname":"Prison management system",
          "ptech":"Java, MySQl",
          "desc":"this is a prison management software to administrate prisoners"
        },
        {
          "pname":"Fake news prediction",
          "ptech":"Machine learning",
          "desc":"this is a fake news prediction system"
        }
      ]
    }
  }
  render(){
    return(
      <React.Fragment>
        <Info
            name={this.state.name}
            addr={this.state.addr}
            phno={this.state.phno}
            email={this.state.email}
        />
        <Qual
            qual={this.state.qual}
        />
        <Skills
            lang={this.state.lang}
            os={this.state.os}
            database={this.state.database}
            tech={this.state.tech}
        />
        <Proj
          proj={this.state.proj}
        />

      </React.Fragment>
    );
  }

}

export default App;
