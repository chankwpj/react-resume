import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Award from './Award';
import Awards from './Awards';

jest.mock("./Award", () => {
    return function DummyAward(props) {
        return (<dummy></dummy>);
    };
});

it("renders 2 award items", () => {
    const awardItems = ["dummy1", "dummy1"];
    
    const wrapper = shallow((<Awards awardItems={awardItems}/>));
    
    expect(wrapper.exists('.section.flex-colum')).to.be.true;
    const container = wrapper.find('.section.flex-colum')
    expect(container.find('h2').text()).to.equal('AWARDS');
    expect(container.find(Award)).to.have.lengthOf(2);
    expect(container.find(Award).at(0).props()).to.eql({"awardItem": awardItems[0]});
    expect(container.find(Award).at(1).props()).to.eql({"awardItem": awardItems[1]});
});
