import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Award from './Award';

it("renders name and description", () => {
    const awardItem = {"name":"some-award-name", "description": "some-description"};
    const expectedHtml = '<div class="award"><p>some-award-name</p><p>- some-description</p></div>'
    const wrapper = shallow(<Award awardItem={awardItem}/>);
    expect(wrapper.html()).to.equals(expectedHtml);
});

it("renders name but not description", () => {
    const awardItem = {"name":"some-award-name"};
    const expectedHtml = '<div class="award"><p>some-award-name</p></div>'
    const wrapper = shallow(<Award awardItem={awardItem}/>);
    expect(wrapper.html()).to.equals(expectedHtml);
});