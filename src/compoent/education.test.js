import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Education from './Education';

it("renders Education section", () => {
    const projects = [{ "name": "p1", "techStacks": "ts1" }, { "name": "p2", "techStacks": "ts2" }];
    const educationItem = {
        "degree": "degree",
        "classification": "first",
        "university": "some-uni",
        "from": "2018", "to": "2019",
        "projects": projects
    };
    // const expectedHtml = '<div class="award"><p>some-award-name</p><p>- some-description</p></div>'
    const wrapper = shallow(<Education educationItem={educationItem} />);
    expect(wrapper.find("h2").text()).to.equals('EDUCATION');
    expect(wrapper.find("p")).to.have.lengthOf(6);
    expect(wrapper.find("p").at(0).text()).to.equal(`${educationItem.degree}   (${educationItem.classification})`);
    expect(wrapper.find("p").at(1).text()).to.equal(`${educationItem.university}    ${educationItem.from} to ${educationItem.to}`);
    expect(wrapper.find("p").at(2).text()).to.equal(`- ${projects[0].name}`);
    expect(wrapper.find("p").at(3).text()).to.equal(`${projects[0].techStacks}`);
    expect(wrapper.find("p").at(4).text()).to.equal(`- ${projects[1].name}`);
    expect(wrapper.find("p").at(5).text()).to.equal(`${projects[1].techStacks}`);
});
