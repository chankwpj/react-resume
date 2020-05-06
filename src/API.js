import ExperienceItem from './model/ExperienceItem'
import EducationItem from './model/EducationItem'
import AwardItem from './model/AwardItem'
import Resume from './model/Resume'
import Contact from './model/Contact'

export default function () {
    return new Resume("Kai Chan", getContact(), getExperienceItems(), getEducation(),
        getAwards(), getSkills());
};

function getExperienceItems() {
    return [
        new ExperienceItem(
            "Goldman Sachs", "Software Engineer", "Nov 2017", "Prsent",
            "London, United Kingdom", "Client Onboarding (Transaction Banking)",
            [
                "Automated manual prcoess from 120 days to 10 seconds",
                "Designed and built event driven micro services and utilities",
                "Established behavioral testing practice in team",
                "Developed restful API in proprietary cloud environment"
            ],
            ["Spring Boot - Kafka - Swagger/OpenApi - Cucumber - MongoDB",
                "Gitlab CI/CD - Infastructure as code - Terraform - AWS"]
        ),
        new ExperienceItem(
            "The Hut Group", "Software Engineer", "Aug 2017", "Sept 2019",
            "Manchester, United Kingdom", "Payments Platform (E-commerce)",
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
            "", "Hong Kong", "", [], ["Android - Java - xml"])
    ]
}

function getEducation() {
    return new EducationItem("Cardif University", "BSc in Computer Science", "2015", "2017", "First Class");
}

function getAwards() {
    return [
        new AwardItem("Pro-Vice Chancellor's Excellence Scholarship 2015"),
        new AwardItem("Alistair Harvey Foundation Scholarship 2015", "Fully funded scholarship for undergraduate study"),
        new AwardItem("IET Present Around the World Competition 2015 (Asia Pacific Final)", "Representative of Hong Kong"),
        new AwardItem("IET Young Professionals Exhibition & Competition 2015", "Regional Champion"),
        new AwardItem("Dr Ng Tat-lun Memorial Outstanding Students Award 2015"),
        new AwardItem("Hong Kong Special Administrative Region Government Scholarship 2014"),
        new AwardItem("China College Students Entrepreneurship Competition 2014", "Silver Award")
    ];
}

function getSkills() {
    return [
        "Full-stack development",
        "QA",
        "System administration",
        "DevOps"
    ];
}

function getContact() {
    return new Contact("www.linkedin.com/in/chankwjh/", "chankw.jh@gmail.com", "London, United Kingdom");
}