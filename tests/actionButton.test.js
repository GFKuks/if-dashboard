import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ActionButton from '../src/Policies/Comps/ActionButton';

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

it('renders with passed button text', () => {
    const actions = [
        { key: 'edit', text: 'Edit details' },
    ];
    act(() => {
        render(<ActionButton actions={actions} />, container);
    });
    expect(container.querySelector('span.action-text').textContent).toBe(actions[0].text);
});
