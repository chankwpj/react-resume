import React, { Component } from 'react';
import HeaderBlock from './compoent/Header'
import Experiences from './compoent/Experiences'
import Skills from './compoent/Skills';
import Awards from './compoent/Awards';
import Education from './compoent/Education';
import './App.css';
import './Print.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { resume: {} };
  }

  componentDidMount() {
    fetch('https://kaichan-resume-api.azurewebsites.net/resume/release')
      .then(res => res.json())
      .then((data) => {
        this.setState({ resume: data });
        // console.log(this.state.resume);
      })
      .catch(console.log)
  }

  render() {
    if (Object.keys(this.state.resume).length === 0)
      return <div></div>
    else
      return (
        <div className="paper rotate-in-ver">
          <HeaderBlock personName={this.state.resume.name} contact={this.state.resume.contact} />
          <div className='mainBlock'>
            <div className="flex-colum leftBlock">
                <Experiences experienceItems = {this.state.resume.experienceItems}/>
            </div>
            <div className="flex-colum rightBlock">
                <Skills skillItems = {this.state.resume.skillItems}/>
                <Awards awardItems = {this.state.resume.awardItems}/>
                <Education educationItem={this.state.resume.educationItem}/>
            </div>
          </div>
        </div>
      );
  }
}

export default App;
