import React from 'react';

function ActionButton() {
    return (
        <div className="button-group">
            <button className="action-button" type="button" aria-label="Action Select">Fill a claim</button>
            <button className="dropdown-button" type="button" aria-label="Action Dropdown"><span className="caret-down" /></button>
        </div>
    );
}

export default function Function() {
    const data = [
        {
            id: 0,
            type: 'Travel',
            details: 'Europe, 1 person',
            date: 'Apr 20, 2019 - Apr 21, 2020',
            status: 'Active',
            action: 'Fill a claim',
        },
        {
            id: 1,
            type: 'Private property',
            details: 'Zigfrīda Annas Meireovica bulvāris 10-8, Rīga',
            date: 'Jan 6, 2019 - Jan 6, 2020',
            status: 'Unpaid',
            action: 'Fill a claim',
        },
        {
            id: 2,
            type: 'KASKO',
            details: 'Volvo XS60, FF-4224',
            date: 'Mai 12, 20118 - Mai 12, 2019',
            status: 'Ending soon',
            action: 'Renew',
        },
        {
            id: 3,
            type: 'PET',
            details: 'Muris',
            date: 'Mai 12, 2019 - Mai 12, 2019',
            status: 'Active',
            action: 'Fill a claim',
        },
    ];

    return (
        <div className="if">
            <h2 className="if font weight-54 table-header">Insurance policies</h2>
            <div className="if seperator" />
            <table className="if table">
                <tbody className="if">
                    { data.map((entry) => {
                        let icon;
                        if (entry.type === 'Travel') {
                            icon = 'plane';
                        } else if (entry.type === 'Private property') {
                            icon = 'home';
                        } else if (entry.type === 'KASKO') {
                            icon = 'car';
                        } else if (entry.type === 'PET') {
                            icon = 'paw';
                        }
                        return (
                            <tr key={entry.id} className="if">
                                <td className="if col-1--sm icon-cell">
                                    <i className={`if icon product ${icon} brown`} alt="Policy Icon" aria-hidden="true" />
                                </td>
                                <td className="if col-4--sm">
                                    <div className="if font weight-126 type-text">{entry.type}</div>
                                    <div className="if font weight-70 details-text">{entry.details}</div>
                                </td>
                                <td className="if col-3--sm">
                                    <div className="if font weight-70 date-text">{entry.date}</div>
                                </td>
                                <td className="if col-2--sm">
                                    <div className={`if font weight-126 status ${entry.status}`}>{entry.status}</div>
                                </td>
                                <td className="if col-2--sm action-cell">
                                    <ActionButton />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
