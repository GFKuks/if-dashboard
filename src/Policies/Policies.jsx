import React, { useState } from 'react';

import policyData from './data/policyData';
import TableBody from './Comps/TableBody';

const TITLE = 'Insurance policies';

const Header = () => (
    <h2 className="if font weight-54 table-header">{TITLE}</h2>
);

export default function Policies() {
    const [data, setData] = useState(policyData);
    return (
        <div className="if panels">
            <Header />
            <table className="if table">
                <TableBody data={data} setData={setData} />
            </table>
        </div>
    );
}
