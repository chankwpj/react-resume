import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Award from './Award';
import Awards from './Awards';

jest.mock("./Award", () => {
    return function DummyAward(props) {
        return (<div></div>);
    };
});

it("renders 2 award items", () => {
    const awardItems = ["dummy1", "dummy1"];
    const wrapper = shallow((<Awards awardItems={awardItems}/>));
    expect(wrapper.find(Award)).to.have.lengthOf(2);
    expect(wrapper.find(Award).at(0).props()).to.eql({"awardItem": awardItems[0]});
    expect(wrapper.find(Award).at(1).props()).to.eql({"awardItem": awardItems[1]});
});
