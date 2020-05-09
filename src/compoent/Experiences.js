import React from 'react';
import Experience from './Experience'

class Experiences extends React.Component {
    render() {
        return (
            <div className="section">
              <h2>EXPERIENCES</h2>
                {this.props.experienceItems.map((item, index) => {
                    return <Experience key={index} item={item}></Experience>;
                })} 
            </div>
        )
    }
}

export default Experiences