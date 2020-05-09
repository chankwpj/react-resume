import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Award from './Award';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders name and description", () => {
    const awardItem = {"name":"some-award-name", "description": "some-description"};
    const expectedHtml = '<div class="award"><p>some-award-name</p><p>- some-description</p></div>'
    act(() => {
        render(<Award awardItem={awardItem}/>, container);
    });
    expect(container.innerHTML).toBe(expectedHtml);
});

it("renders name but not description", () => {
    const awardItem = {"name":"some-award-name"};
    const expectedHtml = '<div class="award"><p>some-award-name</p></div>'
    act(() => {
        render(<Award awardItem={awardItem}/>, container);
    });
    expect(container.innerHTML).toBe(expectedHtml);
});