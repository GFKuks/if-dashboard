import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DetailRow({
    entry,
    data,
    setData,
    showSection,
    toggleSection,
}) {
    const [properties, setProperties] = useState({
        id: entry.id,
        details: entry.details,
        fromDate: entry.fromDate,
        toDate: entry.toDate,
    });
    const [oldProperties] = useState({
        id: entry.id,
        details: entry.details,
        fromDate: entry.fromDate,
        toDate: entry.toDate,
    });

    const {
        id,
        details,
        fromDate,
        toDate,
    } = properties;

    function handleCancel() {
        setProperties(oldProperties);
        toggleSection('');
    }

    function saveChanges() {
        const newData = data.map((ele) => {
            if (ele.id !== id) {
                return ele;
            }
            return {
                ...ele,
                details,
                fromDate,
                toDate,
            };
        });
        setData(newData);
        toggleSection('');
    }

    if (showSection !== id) {
        return null;
    }

    return (
        <tr key={`${id}-details`} className="if">
            <td colSpan="5" className="if detail-row">
                <i className={`if icon product ${entry.type.icon} brown`} alt="Policy Icon" aria-hidden="true" />
                <div>
                    <h3 className="if font weight-54 section-header">{entry.type.text}</h3>
                </div>
                <form autoComplete="off" className="if container">
                    <div className="if form-group">
                        <input
                            data-size="largest"
                            type="text"
                            className="if input-field"
                            id="details"
                            placeholder="Details"
                            value={details}
                            onChange={(event) => setProperties({
                                ...properties,
                                details: event.target.value,
                            })}
                        />
                        <label htmlFor="details">Details</label>
                    </div>
                    <div className="if row">
                        <div className="if form-group col-3--xs">
                            <input
                                id="FromDate"
                                data-size="large"
                                type="date"
                                className="if input-field"
                                placeholder="From"
                                value={fromDate}
                                onChange={(event) => setProperties({
                                    ...properties,
                                    fromDate: event.target.value,
                                })}
                            />
                            <label htmlFor="FromDate">From</label>
                        </div>
                        <div className="if form-group col-3--xs">
                            <input
                                id="ToDate"
                                data-size="large"
                                type="date"
                                className="if input-field"
                                placeholder="To"
                                value={toDate}
                                onChange={(event) => setProperties({
                                    ...properties,
                                    toDate: event.target.value,
                                })}
                            />
                            <label htmlFor="ToDate">To</label>
                        </div>
                    </div>
                    <div className="if row">
                        <div className="if col-3--xs">
                            <button
                                aria-hidden="true"
                                type="button"
                                className="if button primary"
                                onClick={() => saveChanges()}
                            >
                                Save changes
                            </button>
                        </div>
                        <div className="if col-3--xs">
                            <button
                                aria-hidden="true"
                                type="button"
                                className="if button secondary"
                                onClick={() => handleCancel()}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </td>
        </tr>
    );
}

DetailRow.propTypes = {
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
    showSection: PropTypes.string.isRequired,
    toggleSection: PropTypes.func.isRequired,
};
