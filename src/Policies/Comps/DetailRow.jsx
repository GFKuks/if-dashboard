import React, { useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import moment from 'moment';

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
    const [errors, setErrors] = useState({
        detailsError: '',
        toDateError: '',
        fromDateError: '',
    });

    const {
        id,
        details,
        fromDate,
        toDate,
    } = properties;

    function handleCancel() {
        setProperties(oldProperties);
        toggleSection(-1);
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
        toggleSection(-1);
    }

    function validateChanges(event) {
        event.preventDefault();
        let hasError = false;
        $('.form-control').removeClass('is-invalid');
        if (details.length < 3) {
            document.getElementById('details').classList.add('is-invalid');
            setErrors({
                ...errors,
                detailsError: 'Details must be at least 3 characters long!',
            });
            hasError = true;
        }
        if (!fromDate) {
            document.getElementById('fromDate').classList.add('is-invalid');
            setErrors({
                ...errors,
                fromDateError: 'Please input valid start date!',
            });
            hasError = true;
        }
        if (!toDate) {
            document.getElementById('toDate').classList.add('is-invalid');
            setErrors({
                ...errors,
                toDateError: 'Please input valid end date!',
            });
            hasError = true;
        }
        if (fromDate && toDate && moment(fromDate, 'YYYY-MM-DD').isSameOrAfter(moment(toDate, 'YYYY-MM-DD'))) {
            document.getElementById('toDate').classList.add('is-invalid');
            setErrors({
                ...errors,
                toDateError: 'Policy end date must be greater than start date',
            });
            hasError = true;
        }
        if (hasError) {
            return false;
        }
        saveChanges();
        return true;
    }

    if (showSection !== id) {
        return null;
    }

    const { detailsError, fromDateError, toDateError } = errors;

    return (
        <tr key={`${id}-details`} className="if">
            <td colSpan="5" className="if detail-row">
                <div className="if detail-section">
                    <div className="if detail-section-header">
                        <i className={`if icon product ${entry.type.icon} brown`} alt="Policy Icon" aria-hidden="true" />
                        <h3 className="if font weight-54">{entry.type.text}</h3>
                    </div>
                    <form autoComplete="off" className="if" onSubmit={(event) => validateChanges(event)}>
                        <div className="if form-group col-6--lg">
                            <textarea
                                data-size="large"
                                type="text"
                                className="if textarea form-control"
                                id="details"
                                placeholder="Details"
                                value={details}
                                onChange={(event) => setProperties({
                                    ...properties,
                                    details: event.target.value,
                                })}
                            />
                            <label htmlFor="details">Details *</label>
                            <span className="if input-error">{detailsError}</span>
                        </div>
                        <div className="if row">
                            <div className="if form-group col-4--lg col-5--sm col-6--smlr">
                                <input
                                    id="fromDate"
                                    data-size="large"
                                    type="date"
                                    className="if input-field form-control"
                                    placeholder="From"
                                    value={fromDate}
                                    onChange={(event) => setProperties({
                                        ...properties,
                                        fromDate: event.target.value,
                                    })}
                                />
                                <label htmlFor="FromDate">From *</label>
                                <span className="if input-error">{fromDateError}</span>
                            </div>
                            <div className="if form-group col-4--lg col-5--sm col-6--smlr">
                                <input
                                    id="toDate"
                                    data-size="large"
                                    type="date"
                                    className="if input-field form-control"
                                    placeholder="To"
                                    value={toDate}
                                    onChange={(event) => setProperties({
                                        ...properties,
                                        toDate: event.target.value,
                                    })}
                                />
                                <label htmlFor="ToDate">To *</label>
                                <span className="if input-error">{toDateError}</span>
                            </div>
                        </div>
                        <div className="if row detail-section-footer">
                            <div className="if form-group col-4--lg col-5--sm col-6--smlr">
                                <button
                                    aria-hidden="true"
                                    type="submit"
                                    className="if button primary"
                                >
                                    Save changes
                                </button>
                            </div>
                            <div className="if form-group col-4--lg col-5--sm col-6--smlr">
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
                </div>
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
    showSection: PropTypes.number.isRequired,
    toggleSection: PropTypes.func.isRequired,
};
