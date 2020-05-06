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
      <HeaderBlock/>
      <LeftMain experienceItems = {resume.experienceItem} educationItem = {resume.educationItem} />
      <RightMain educationItem = {resume.educationItem} awardItem = {resume.awardItem}/>
    </div>
  );
}

export default App;
