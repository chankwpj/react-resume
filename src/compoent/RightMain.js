import React from 'react';
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';

class RightMain extends React.Component {
    render() {
        return (
            <div className="right">
                <Skills/>
                <Awards awardItem = {this.props.awardItem}/>
                <Education educationItem = {this.props.educationItem}/>
            </div>
        )
    }
}

export default RightMain