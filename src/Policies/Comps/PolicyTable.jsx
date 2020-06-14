import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import PolicyRow from './PolicyRow';
import DetailRow from './DetailRow';

export default function PolicyTable({ data, setData }) {
    const [showSection, toggleSection] = useState(-1);
    return (
        <table className="if table">
            <tbody className="if">
                {/* Each entry has a hidden, expandable detail row */}
                {data.map((entry) => (
                    <Fragment key={`${entry.id}-frag`}>
                        <PolicyRow
                            entry={entry}
                            showSection={showSection}
                            toggleSection={toggleSection}
                        />
                        <DetailRow
                            entry={entry}
                            data={data}
                            setData={setData}
                            showSection={showSection}
                            toggleSection={toggleSection}
                        />
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
}


PolicyTable.propTypes = {
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
