import React from 'react';

class Education extends React.Component {

    render() {
        const data = this.props.educationItem;
        // console.log(data);

        const projects = [];
        data.projects.forEach((project, index) => {
            projects.push(
                <div key={index}>
                    <p>- {project.name}</p>
                    <p>{project.techStacks}</p>
                </div>
            );
        });

        return (
            <div className="section">
                <h2>EDUCATION</h2>
                <p>{data.degree} &emsp; ({data.classification})</p>
                <p>{data.university} &emsp;&emsp; {data.from} to {data.to}</p>
                {projects}
            </div>
        )
    }
}

export default Education