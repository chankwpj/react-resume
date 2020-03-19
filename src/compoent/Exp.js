import React from 'react';

class Exp extends React.Component {

    render() {
        console.log(this.props.item);
        const exp = this.props.item;
        return (
            <div>
                {exp.companyName.length != 0 &&
                    <p>{exp.companyName} - {exp.jobTitle}</p>
                }
                {exp.from.length != 0 && 
                    <p>{exp.from} - {exp.to} {exp.location}</p>
                }
                <p>{exp.team}</p>
                {exp.descriptions.map((desc) => {
                    return <p>- {desc}</p>;
                })}
                {exp.techStacks.map((stack) => {
                    return <p>{stack}</p>;
                })}
            </div>
        )
    }


}

export default Exp