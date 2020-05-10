import React, { Component } from 'react';
import Loading from './compoent/Loading';
import ErrorPage from './compoent/ErrorPage';
import Resume from './compoent/Resume';
import './App.css';
import './Print.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://kaichan-resume-api.azurewebsites.net/resume/release')
      .then(res => res.json())
      .catch((err) => {
        this.setState({ error: err });
      })
      .then((data) => {
        this.setState({ resume: data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  render() {
    if (Object.keys(this.state).length == 0) {
      return <Loading />;  //TODO: add spinning loading
    }

    if (this.state.error !== undefined) {
      return <ErrorPage />;
    }

    return <Resume resume={this.state.resume} />;
  }
}

export default App;
