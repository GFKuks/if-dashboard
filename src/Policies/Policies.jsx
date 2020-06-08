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
            date: 'Apr 20, 2019 - Apr 21, 2020',
            status: 'Active',
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
            <h2 className="sg if heading medium">Insurance policies</h2>
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
                        console.log('icon', icon);
                        return (
                            <tr className="if">
                                <td className="if">
                                    <div className="if">
                                    <i className="if icon product paw" />
                                    </div>
                                </td>
                                <td className="if">
                                    <div className="if">{entry.type}</div>
                                    <div className="if">{entry.details}</div>
                                </td>
                                <td className="if">{entry.date}</td>
                                <td className="if">{entry.status}</td>
                                <td className="if">
                                    <button type="button" className="if button primary small">
                                        Button
                                    </button>
                                    <button type="button" className="if button primary small">
                                        Caret
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button type="button" className="if button">
                <span className="if icon product paw" />
                Button with icon
            </button>
        </div>
    );
}
