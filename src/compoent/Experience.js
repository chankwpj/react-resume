import React from 'react';
import Exp from './Exp'

class Experience extends React.Component {
    render() {
        return (
            <div>
              <p className="sectionTitle">EXPERIENCE</p>
                {/* <Exp item={this.props.experienceItems[0]}/> */}
                {this.props.experienceItems.map((item, index) => {
                    return <Exp key={index} item={item}></Exp>;
                })} 
            </div>
        )
    }
}

export default Experience