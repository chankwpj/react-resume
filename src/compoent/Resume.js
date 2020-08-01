import React, { Component } from 'react';
import HeaderBlock from './Header'
import Experiences from './Experiences'
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';

class Resume extends Component {

    render() {
        const data = this.props.resume;
        return (
            //TODO: migrate this to ContextProvider
            <div className="paper shadow-drop-center">
                <HeaderBlock personName={data.name} contact={data.contact} />
                <div className='mainBlock'>
                    <div className="flex-colum leftBlock">
                        <Experiences experienceItems={data.experienceItems} />
                    </div>
                    <div className="flex-colum rightBlock">
                        <Skills skillItems={data.skillItems} />
                        <Education educationItem={data.educationItem} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Resume; 