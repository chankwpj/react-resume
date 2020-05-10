import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Loading from './compoent/Loading';
import ErrorPage from './compoent/ErrorPage';
import Resume from './compoent/Resume';

it("render loading page given fetch is loading", () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(wrapper.find(Loading)).to.have.lengthOf(1);
});

it("render error page given fetch returns error", (done) => {
    const mockErrorResponse = { "some": "response" };
    const mockFetchPromise = Promise.reject(mockErrorResponse);

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<App />);

    expect(global.fetch.mock.calls.length).to.equals(1);
    expect(global.fetch.mock.calls[0][0]).to.equals("https://kaichan-resume-api.azurewebsites.net/resume/release");
    global.fetch.mockClear();
    process.nextTick(() => {
        expect(wrapper.find(ErrorPage)).to.have.lengthOf(1);
        done();
    });
});

it("render resume given fetch returns data", (done) => {
    const mockSuccessResponse = { "some": "response" };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<App />);

    expect(global.fetch.mock.calls.length).to.equals(1);
    expect(global.fetch.mock.calls[0][0]).to.equals("https://kaichan-resume-api.azurewebsites.net/resume/release");
    global.fetch.mockClear();
    process.nextTick(() => {
        expect(wrapper.find(Resume)).to.have.lengthOf(1);
        expect(wrapper.find(Resume).at(0).props()).to.eql({'resume': mockSuccessResponse});
        done();
    });
});
