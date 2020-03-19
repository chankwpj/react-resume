import ExperienceItem from './model/ExperienceItem'
import Resume from './model/Resume'

export default function () {
    return new Resume(getExperienceItems());
};

function getExperienceItems() {
    return [
        new ExperienceItem(
            "The Hut Group", "Software Engineer", "Aug 2017", "Sept 2019",
            "Manchester, United Kingdom", "Payments Platform (e-commerce)",
            ["Led end to end Java predicate based rule engine development",
                "Integrated a payment provider and card payment 3DS 1.0 solution",
                "Broke down a monolith toward microservices architecture",
                "Spring booted core payment components, load testing"
            ],
            []
        ),
        new ExperienceItem(
            "", "", "", "",
            "", "Checkouts Service",
            ["Led payment messaging unification solution",
                "Migrated 4 payment methods to new internal payment interface",
                "Brought in modern technologies to automate and parallelise testing"],
            ["Spring Boot - Java - RDBMS - ActiveMq - Couchbase - Gatling - Javascript",
                "TDD - JUnit - Mockito - WireMock",
                "Maven - Jenkins - Docker - Nagios Alert - Grafana"]
        ),
        new ExperienceItem("Cardif University", "Research Assistant Intern", "June", "July 2016",
            "Cardiff, United Kingdom", "", [], ["MATLAB Signal/Image Processing Toolbox"]
        ),
        new ExperienceItem("FlexSystem Limited", "Software Engineer Intern", "June 2014",
        "", "Hong Kong", "", [], ["Android - Java - xml"] )
    ]
}