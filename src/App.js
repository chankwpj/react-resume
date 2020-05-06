import React from 'react';
import HeaderBlock from './compoent/Header'
import LeftMain from './compoent/LeftMain'
import RightMain from './compoent/RightMain'
import './App.css';
import getResume from './API'
// import resume from './model/Resume'

function App() {
  const resume = getResume();
  // console.log(resume);
  return (
    <div className="paper">
      <HeaderBlock personName = {resume.name} contact = {resume.contact}/>
      <LeftMain experienceItems = {resume.experienceItems} educationItem = {resume.educationItems} />
      <RightMain educationItem = {resume.educationItem} awardItems = {resume.awardItems} skillItems = {resume.skillItems}/>
    </div>
  );
}

export default App;
