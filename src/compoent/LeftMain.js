import React from 'react';
import Experience from './Experience.js'

class LeftMain extends React.Component {
    render() {
        return (
            <div className="left leftMain">
                <Experience experienceItems = {this.props.experienceItems}/>
            </div>
        )
    }
}

export default LeftMain