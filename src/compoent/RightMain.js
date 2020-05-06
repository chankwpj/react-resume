import React from 'react';
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';

class RightMain extends React.Component {
    render() {
        return (
            <div className="right">
                <Skills skillItems = {this.props.skillItems}/>
                <Awards awardItems = {this.props.awardItems}/>
                <Education educationItem = {this.props.educationItem}/>
            </div>
        )
    }
}

export default RightMain