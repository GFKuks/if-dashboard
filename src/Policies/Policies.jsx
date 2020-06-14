import React, { useState } from 'react';

import policyData from './data/policyData';
import PolicyHeader from './Comps/PolicyHeader';
import PolicyTable from './Comps/PolicyTable';

export default function Policies() {
    const [data, setData] = useState(policyData);
    return (
        <div className="if panels">
            <PolicyHeader />
            <PolicyTable data={data} setData={setData} />
        </div>
    );
}
