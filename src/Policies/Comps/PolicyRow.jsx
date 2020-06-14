import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ActionButton from './ActionButton';

export default function PolicyRow({ entry, toggleSection }) {
    const fromDate = moment(entry.fromDate, 'YYYY-MM-DD').format('MMM D, YYYY');
    const toDate = moment(entry.toDate, 'YYYY-MM-DD').format('MMM D, YYYY');
    return (
        <tr key={`${entry.id}-policy`} className="if">
            <td className="if col-1--smlr icon-cell">
                <i className={`if icon product ${entry.type.icon} brown`} alt="Policy Icon" aria-hidden="true" />
            </td>
            <td className="if col-4--smlr info-cell">
                <div className="if font weight-126 type-text">{entry.type.text}</div>
                <div className="if font weight-70 details-text">{entry.details}</div>
            </td>
            <td className="if col-3--smlr date-cell">
                <div className="if font weight-70 date-text">{`${fromDate} - ${toDate}`}</div>
            </td>
            <td className="if col-2--smlr status-cell">
                <div className={`if font weight-126 status ${entry.status.key}`}>{entry.status.text}</div>
            </td>
            <td className="if col-2--smlr action-cell">
                <ActionButton
                    id={entry.id}
                    actions={entry.actions}
                    toggleSection={toggleSection}
                />
            </td>
        </tr>
    );
}

PolicyRow.propTypes = {
    entry: PropTypes.shape({
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
    toggleSection: PropTypes.func.isRequired,
};
