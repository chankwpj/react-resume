import React from 'react';
import Exp from './Exp'

class Experience extends React.Component {
    render() {
        // const items = this.props.experienceItems;

        return (
            <div>
              <p className="sectionTitle">EXPERIENCE</p>
                {/* <Exp item={this.props.experienceItems[0]}/> */}
                {this.props.experienceItems.map((item, index) => {
                    return <Exp key={index} item={item}></Exp>;
                })} 
            </div>
        )
        // return (
        //     <div>
        //         <p className="sectionTitle">EXPERIENCE</p>
        //         items.array.forEach(experience => {
        //             <p>
        //                 experience.companyName
        //             </p>
        //         });

        //         <p>
        //             The Hut Group — Software Engineer
        //             Aug 2017 - PRESENT Manchester, United Kingdom
        //             Payments Platform (e-commerce)
        //             - Led end to end Java predicate based rule engine development
        //             - Integrated a payment provider and card payment 3DS 1.0 solution
        //             - Broke down a monolith toward microservices architecture
        //             - Spring booted core payment components, load testing
        //         </p>

        //         <p>
        //             Checkouts Service
        //             - Led payment messaging unification solution
        //             - Migrated 4 payment methods to new internal payment interface
        //             - Brought in modern technologies to automate and parallelise testing
        //             Spring Boot - Java - RDBMS - ActiveMq - Couchbase - Gatling - Javascript
        //             TDD - JUnit - Mockito - WireMock
        //             Maven - Jenkins - Docker - Nagios Alert - Grafana
        //         </p>

        //         <p>
        //             Cardif University — Research Assistant Intern
        //             June to July 2016 Cardiff, United Kingdom
        //             MATLAB Signal/Image Processing Toolbox
        //         </p>

        //         <p>
        //             Electone Music Limited — Freelance Web Programmer
        //             June to December, 2015 Hong Kong, China
        //             JavaScript - JQuery - Bootstrap
        //         </p>

        //         <p>
        //             FlexSystem Limited — Software Engineer Intern
        //             June 2014 Hong Kong, China
        //             Android - Java - xml
        //         </p>

        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //         <p>block</p>
        //     </div>
        // )
    }
}

export default Experience