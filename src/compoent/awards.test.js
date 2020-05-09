import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DummyAward from './Award';
import Awards from './Awards';

jest.mock("./Award", () => {
    return function DummyAward(props) {
        return (
            <p key={props.key}>{props.awardItem}</p>
        );
    };
});

it("renders awards items", () => {
    const awardItems = ["dummy1", "dummy1"];
    const wrapper = shallow((<Awards awardItems={awardItems}/>));
    expect(wrapper.find(DummyAward)).to.have.lengthOf(2);
});
