import React, { Component } from 'react';
import HeaderBlock from './compoent/Header'
import LeftMain from './compoent/LeftMain'
import RightMain from './compoent/RightMain'
import './App.css';

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
        console.log(this.state.resume);
      })
      .catch(console.log)
  }

  render() {
    if (Object.keys(this.state.resume).length === 0)
      return <div className="paper"></div>
    else
      return (
        <div className="paper">
          <HeaderBlock personName={this.state.resume.name} contact={this.state.resume.contact} />
          <div className='mainBlock'>
            <LeftMain experienceItems={this.state.resume.experienceItems} educationItem={this.state.resume.educationItems} />
            <RightMain educationItem={this.state.resume.educationItem} awardItems={this.state.resume.awardItems} skillItems={this.state.resume.skillItems} />
          </div>
        </div>
      );
  }
}

export default App;
