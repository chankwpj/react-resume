import React, { Fragment } from 'react';

class Education extends React.Component {

    render() {
        // console.log(this.props.educationItem);
        return (
            <div className="section">
                <h2>EDUCATION</h2>
                <p>{this.props.educationItem.degree} &emsp; ({this.props.educationItem.classification})</p>
                <p>{this.props.educationItem.university} &emsp;&emsp; {this.props.educationItem.from} to {this.props.educationItem.to}</p>
                {
                    this.props.educationItem.projects.map((project, index) => {
                        return (
                            <div key={index}>
                                <p>- {project.name}</p>
                                <p>{project.techStacks}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Education