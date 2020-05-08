import React from 'react';

class HeaderBlock extends React.Component {
    render() {
        const contact = this.props.contact;
        // console.log(contact);
        return (
            <div className="headerBlock">
                <div className="name left" >
                    {this.props.personName}
                </div>
                <div className="contact right">
                    <div>{contact.email}</div>
                    <div>{contact.linkedIn}</div>
                    <div>{contact.location}</div>
                </div>
            </div>
        )
    }
}

export default HeaderBlock