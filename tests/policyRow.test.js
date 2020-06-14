import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import PolicyRow from '../src/Policies/Comps/PolicyRow';

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

it('renders policy information', () => {
    const entry = {
        id: 0,
        type: { icon: 'plane', text: 'Travel' },
        details: 'Europe, 1 person',
        fromDate: '2019-04-20',
        toDate: '2020-04-21',
        status: { key: 'active', text: 'Active' },
        actions: [
            { key: 'edit', text: 'Edit details' },
            { key: 'claim', text: 'Fill a claim' },
        ],
    };
    act(() => {
        render(<PolicyRow entry={entry} />, container);
    });
    expect(container.querySelector('div.type-text').textContent).toBe(entry.type.text);
    expect(container.querySelector('div.details-text').textContent).toBe(entry.details);
    expect(container.querySelector('div.date-text').textContent).toBe('Apr 20, 2019 - Apr 21, 2020');
    expect(container.querySelector('div.status').textContent).toBe(entry.status.text);
});
