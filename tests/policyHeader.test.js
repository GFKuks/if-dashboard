import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import PolicyHeader from '../src/Policies/Comps/PolicyHeader';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with correct title', () => {
    act(() => {
        render(<PolicyHeader />, container);
    });
    expect(container.textContent).toBe('Insurance policies');
});
