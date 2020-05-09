import React from 'react';

class Experience extends React.Component {

    render() {
        // console.log(this.props.item);
        const exp = this.props.item;
        
        let dateBlock;
        if (exp.from.length === 0) {
            dateBlock = '';
        } else {
            if (exp.to.length ===0) {
                dateBlock = exp.from;
            } else {
                dateBlock = exp.from + ' - ' + exp.to;
            }
        }

        return (
            <div className='expItem'>
                {exp.companyName.length !== 0 &&
                    <h4>{exp.companyName} - {exp.jobTitle}</h4>
                }
                {exp.from.length !== 0 && 
                    <p>{dateBlock} &emsp;&emsp;&emsp;&emsp; {exp.location}</p>
                }
                <h4>{exp.team}</h4>
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