import React from 'react';
import Experience from './Experience'

class Experiences extends React.Component {
    render() {
        return (
            <div>
              <p className="sectionTitle">EXPERIENCES</p>
                {this.props.experienceItems.map((item, index) => {
                    return <Experience key={index} item={item}></Experience>;
                })} 
            </div>
        )
    }
}

export default Experiences