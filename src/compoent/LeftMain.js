import React from 'react';
import Experience from './Experience.js'
import Education from './Education.js'

class LeftMain extends React.Component {
    render() {
        return (
            <div className="left leftMain">
                <Experience experienceItems = {this.props.experienceItems}/>
                <Education educationItem = {this.props.educationItem}/>
            </div>
        )
    }
}

export default LeftMain