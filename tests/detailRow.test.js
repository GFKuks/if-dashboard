import React from 'react';
import { shallow } from 'enzyme';

import DetailRow from '../src/Policies/Comps/DetailRow';

// Switched to enzyme due to requiring input values

it('renders policy information edit form', () => {
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
    const wrapper = shallow(<DetailRow entry={entry} showSection={0} />);
    expect(wrapper.find('#details').props().value).toBe(entry.details);
    expect(wrapper.find('#fromDate').props().value).toBe(entry.fromDate);
    expect(wrapper.find('#toDate').props().value).toBe(entry.toDate);
});
