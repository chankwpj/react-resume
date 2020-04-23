import React from 'react';

class Education extends React.Component {

    render() {
        console.log(this.props.educationItem);
        return (
            <div>
                <p className="sectionTitle">EDUCATION</p>
                <p>{this.props.educationItem.university} - {this.props.educationItem.degree}</p>
                <p>{this.props.educationItem.to} to {this.props.educationItem.from} {this.props.educationItem.classification}</p>
            </div>
        )
    }
}

export default Education