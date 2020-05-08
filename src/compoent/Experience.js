import React from 'react';

class Experience extends React.Component {

    render() {
        // console.log(this.props.item);
        const exp = this.props.item;
        return (
            <div className='expItem'>
                {exp.companyName.length !== 0 &&
                    <p className='employer'>{exp.companyName} - {exp.jobTitle}</p>
                }
                {exp.from.length !== 0 && 
                    <p>{exp.from} - {exp.to} &emsp;&emsp;&emsp;&emsp; {exp.location}</p>
                }
                <p className='team'>{exp.team}</p>
                {exp.descriptions.map((desc, index) => {
                    return <p key={index}>- {desc}</p>;
                })}
                {exp.techStacks.map((stack, index) => {
                    return <p key={index}>{stack}</p>;
                })}
            </div>
        )
    }
}

export default Experience