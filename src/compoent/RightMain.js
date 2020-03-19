import React from 'react';
import Skills from './Skills';
import Awards from './Awards';

class RightMain extends React.Component {
    render() {
        return (
            <div className="right">
                <Skills/>
                <Awards/>
            </div>
        )
    }
}

export default RightMain