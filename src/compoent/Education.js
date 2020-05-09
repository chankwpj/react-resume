import React, { Fragment } from 'react';

class Education extends React.Component {

    render() {
        // console.log(this.props.educationItem);
        return (
            <div className="section">
                <h2>EDUCATION</h2>
                <p>{this.props.educationItem.degree} ({this.props.educationItem.classification})</p>
                <p>{this.props.educationItem.university} &emsp;&emsp; {this.props.educationItem.from} to {this.props.educationItem.to}</p>
                {
                    this.props.educationItem.projects.map((project, index) => {
                        return (
                            <Fragment key={index}>
                                <p>- {project.name}</p>
                                <p>{project.techStacks}</p>
                            </Fragment>
                        )
                    })
                }
            </div>
        )
    }
}

export default Education