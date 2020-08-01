import React from 'react';

class Education extends React.Component {

    render() {
        const data = this.props.educationItem;
        return (
            <div className="section">
                <h2>EDUCATION</h2>
                <p>{data.degree} &emsp; ({data.classification})</p>
                <p>{data.university} &emsp;&emsp; {data.from} to {data.to}</p>
                <p>{data.description}</p>
            </div>
        )
    }
}

export default Education