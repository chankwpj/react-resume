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
      return <div></div>  //TODO: add spinning loading
    else {
      const data = this.state.resume;
      return (
        <div className="paper rotate-in-ver">
          <HeaderBlock personName={data.name} contact={data.contact} />
          <div className='mainBlock'>
            <div className="flex-colum leftBlock">
              <Experiences experienceItems={data.experienceItems} />
            </div>
            <div className="flex-colum rightBlock">
              <Skills skillItems={data.skillItems} />
              <Awards awardItems={data.awardItems} />
              <Education educationItem={data.educationItem} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
