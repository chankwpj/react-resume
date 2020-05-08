import React from 'react';
import Experiences from './Experiences.js'

class LeftMain extends React.Component {
    render() {
        return (
            <div className="left leftMain">
                <Experiences experienceItems = {this.props.experienceItems}/>
            </div>
        )
    }
}

export default LeftMain