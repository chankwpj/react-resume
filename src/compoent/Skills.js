import React from 'react';

class Skills extends React.Component {
    render() {
        const skillItems = this.props.skillItems;
        return (
            <div className="section">
                <h2>SKILLS</h2>
                {
                    skillItems.map((skillItem, index) => {
                        return (
                            <div className="skillItem">
                                <p key={index + "t"}>{skillItem.itemTitle}</p>
                                {skillItem.items.map((item, idx) => { 
                                    return <p key={index + idx + "d"}>{item}</p>
                                })}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Skills