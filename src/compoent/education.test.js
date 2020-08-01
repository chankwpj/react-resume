import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Education from './Education';

it("renders Education section", () => {
    const educationItem = {
        "degree": "degree",
        "classification": "first",
        "university": "some-uni",
        "from": "2018", "to": "2019",
        "description": "some-desc"
    };
    // const expectedHtml = '<div class="award"><p>some-award-name</p><p>- some-description</p></div>'
    const wrapper = shallow(<Education educationItem={educationItem} />);
    expect(wrapper.find("h2").text()).to.equals('EDUCATION');
    expect(wrapper.find("p")).to.have.lengthOf(3);
    expect(wrapper.find("p").at(0).text()).to.equal(`${educationItem.degree}   (${educationItem.classification})`);
    expect(wrapper.find("p").at(1).text()).to.equal(`${educationItem.university}    ${educationItem.from} to ${educationItem.to}`);
    expect(wrapper.find("p").at(2).text()).to.equal(`${educationItem.description}`);
});
