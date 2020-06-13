import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PolicyRow from './PolicyRow';
import DetailRow from './DetailRow';

export default function TableBody({ data, setData }) {
    const dataAndDetails = [];
    const [showSection, toggleSection] = useState('');
    data.forEach((entry) => {
        dataAndDetails.push(
            <PolicyRow
                entry={entry}
                showSection={showSection}
                toggleSection={toggleSection}
            />,
        );
        dataAndDetails.push(
            <DetailRow
                entry={entry}
                data={data}
                setData={setData}
                showSection={showSection}
                toggleSection={toggleSection}
            />,
        );
    });
    return (
        <tbody className="if">
            {dataAndDetails}
        </tbody>
    );
}


TableBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.shape({
                icon: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            }).isRequired,
            details: PropTypes.string.isRequired,
            fromDate: PropTypes.string.isRequired,
            toDate: PropTypes.string.isRequired,
            status: PropTypes.shape({
                key: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            }).isRequired,
            actions: PropTypes.arrayOf(
                PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                }),
            ).isRequired,
        }).isRequired,
    ).isRequired,
    setData: PropTypes.func.isRequired,
};
