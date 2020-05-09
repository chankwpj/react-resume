import React from 'react';

class HeaderBlock extends React.Component {
    render() {
        const contact = this.props.contact;
        // console.log(contact);
        return (
            <div className="headerBlock">
                <div className="leftBlock" >
                    <h1>{this.props.personName}</h1>
                </div>
                <div className="contact rightBlock">
                    <div>{contact.email}</div>
                    <div>{contact.linkedIn}</div>
                    <div>{contact.location}</div>
                </div>
            </div>
        )
    }
}

export default HeaderBlock