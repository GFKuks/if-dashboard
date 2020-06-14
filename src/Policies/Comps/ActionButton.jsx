import React from 'react';
import PropTypes from 'prop-types';

export default function ActionButton({ id, actions, toggleSection }) {
    const primaryAction = actions[0];
    return (
        <div className={`if expandable button-group active-${primaryAction.key}`}>
            <button
                className="if action-button"
                type="button"
                aria-label="Action Select"
                onClick={() => toggleSection(id)}
            >
                <span className="action-text">{primaryAction.text}</span>
            </button>
            {/* Other action dropdown to be added later */}
            <button
                className="if dropdown-button"
                type="button"
                aria-label="Action Dropdown"
                aria-expanded="false"
                aria-controls={`exp-${id}`}
            >
                <span className="caret-down" />
            </button>
        </div>
    );
}

ActionButton.propTypes = {
    id: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
    toggleSection: PropTypes.func.isRequired,
};
