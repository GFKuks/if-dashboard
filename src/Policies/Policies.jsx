import React from 'react';

export default function Function() {
    const data = [
        {
            type: 'Travel',
            details: 'Europe, 1 person',
            date: 'Apr 20, 2019 - Apr 21, 2020',
            status: 'Active',
            action: 'Fill a claim',
        },
        {
            type: 'Private property',
            details: 'Zigfrīda Annas Meireovica bulvāris 10-8, Rīga',
            date: 'Jan 6, 2019 - Jan 6, 2020',
            status: 'Unpaid',
            action: 'Fill a claim',
        },
        {
            type: 'KASKO',
            details: 'Volvo XS60, FF-4224',
            date: 'Mai 12, 20118 - Mai 12, 2019',
            status: 'Ending soon',
            action: 'Renew',
        },
        {
            type: 'PET',
            details: 'Muris',
            date: 'Mai 12, 2019 - Mai 12, 2019',
            status: 'Active',
            action: 'Fill a claim',
        },
    ];

    return (
        <div className="if">
            <h2 className="if mb-3">Insurance policies</h2>
            <div className="if seperator" />
            <table className="if table">
                <tbody className="if">
                    { data.map((entry) => {
                        let icon;
                        if (entry.type === 'Travel') {
                            console.log('travel');
                            icon = 'plane';
                        } else if (entry.type === 'Private property') {
                            icon = 'home';
                        } else if (entry.type === 'KASKO') {
                            icon = 'car';
                        } else if (entry.type === 'PET') {
                            icon = 'paw';
                        }
                        return (
                            <tr className="if">
                                <td className="if col-1--sm-">
                                    <div className="if">
                                        <img className="policy-icon" alt="Policy Icon" src={`/icons/${icon}.svg`} />
                                    </div>
                                </td>
                                <td className="if col-5--sm-">
                                    <div className="if type-text">{entry.type}</div>
                                    <div className="if details-text">{entry.details}</div>
                                </td>
                                <td className="if col-2--sm-">
                                    <p className="if date-text float-right">{entry.date}</p>
                                </td>
                                <td className="if col-2--sm-">
                                    <p className={`if status ${entry.status} float-right`}>{entry.status}</p>
                                </td>
                                <td className="if col-2--sm-">
                                    <button type="button" className="if button primary small">
                                        Button
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
