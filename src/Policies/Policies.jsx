import React, { useState } from 'react';

import policyData from './data/policyData';
import PolicyTable from './Comps/PolicyTable';

const TITLE = 'Insurance policies';

const Header = () => (
    <h2 className="if font weight-54 table-header">{TITLE}</h2>
);

export default function Policies() {
    const [data, setData] = useState(policyData);
    return (
        <div className="if panels">
            <Header />
            <PolicyTable data={data} setData={setData} />
        </div>
    );
}
