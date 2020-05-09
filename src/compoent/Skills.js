import React from 'react';

class Skills extends React.Component {
    render() {
        const skillItems = this.props.skillItems;
        return (
            <div className="section">
                <h2>SKILLS</h2>
                {
                    skillItems.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
        )
    }
}

export default Skills