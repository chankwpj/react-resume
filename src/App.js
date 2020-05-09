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
    // fetch('https://kaichan-resume-api.azurewebsites.net/resume/release')
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({ resume: data });
    //     console.log(this.state.resume);
    //   })
    //   .catch(console.log)
    const data = JSON.parse('{"_id":"5eb484eac8521415b461f91d","id":"release","experienceItems":[{"companyName":"Goldman Sachs","jobTitle":"Software Engineer","from":"Nov 2017","to":"Prsent","location":"London, United Kingdom","team":"Client Onboarding (Transaction Banking)","descriptions":["Automated manual prcoess from 120 days to 10 seconds","Designed and built event driven micro services and utilities","Established behavioral testing practice in team","Developed restful API in proprietary cloud environment"],"techStacks":["Spring Boot - Kafka - Swagger/OpenApi - Cucumber - MongoDB","Gitlab CI/CD - Infastructure as code - Terraform - AWS"]},{"companyName":"The Hut Group","jobTitle":"Software Engineer","from":"Aug 2017","to":"Sept 2019","location":"Manchester, United Kingdom","team":"Payments Platform (E-commerce)","descriptions":["Led end to end Java predicate based rule engine development","Integrated a payment provider and card payment 3DS 1.0 solution","Broke down a monolith toward microservices architecture","Spring booted core payment components, load testing"],"techStacks":[]},{"companyName":"","jobTitle":"","from":"","to":"","location":"","team":"Checkouts Service","descriptions":["Led payment messaging unification solution","Migrated 4 payment methods to new internal payment interface","Brought in modern technologies to automate and parallelise testing"],"techStacks":["Spring Boot - Java - RDBMS - ActiveMq - Couchbase - Gatling - Javascript","TDD - JUnit - Mockito - WireMock","Maven - Jenkins - Docker - Nagios Alert - Grafana"]},{"companyName":"Cardif University","jobTitle":"Research Assistant Intern","from":"June","to":"July 2016","location":"Cardiff, United Kingdom","team":"","descriptions":[],"techStacks":["MATLAB Signal/Image Processing Toolbox"]},{"companyName":"FlexSystem Limited","jobTitle":"Software Engineer Intern","from":"June 2014","to":"","location":"Hong Kong","team":"","descriptions":[],"techStacks":["Android - Java - xml"]},{"companyName":"Self-taught Mini Project","jobTitle":"Resume Generator (MERN Stack)","from":"April 2020","to":"","location":"","team":"","descriptions":["Basic React Webapp and Express API in cloud environment","Demo: https://kaichan-resume-ui.azurewebsites.net/","Source: https://github.com/chankwpj/react-resume/"],"techStacks":["ExpressJS - Node.js - Native MongoDB Driver - JTest","ReactJS - ES6 - Promise - Micrsoft Azure"]}],"educationItem":{"university":"Cardif University","degree":"BSc in Computer Science","from":"2015","to":"2017","classification":"First Class","projects":[{"name":"Image Processing: Bruises","techStacks":"Python - OpenCV"},{"name":"Infrared Camera Person Detection","techStacks":"MATLAB"}]},"awardItems":[{"name":"Pro-Vice Chancellor\'s Excellence Scholarship 2015"},{"name":"Alistair Harvey Foundation Scholarship 2015","description":"Fully funded scholarship for undergraduate study"},{"name":"IET Present Around the World Competition 2015 (Asia Pacific Final)","description":"Representative of Hong Kong"},{"name":"IET Young Professionals Exhibition & Competition 2015","description":"Regional Champion"},{"name":"Dr Ng Tat-lun Memorial Outstanding Students Award 2015"},{"name":"Hong Kong Special Administrative Region Government Scholarship 2014"},{"name":"China College Students Entrepreneurship Competition 2014","description":"Silver Award"}],"skillItems":["Full-stack development","QA","System administration","DevOps","Collaboration"],"name":"Kai Chan","contact":{"linkedIn":"www.linkedin.com/in/chankwjh/","email":"chankw.jh@gmail.com","location":"London, United Kingdom"}}');
    this.setState({ resume: data });
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
