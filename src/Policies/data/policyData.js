const policyData = [
    {
        id: 0,
        type: { icon: 'plane', text: 'Travel' },
        details: 'Europe, 1 person',
        fromDate: '2019-04-20',
        toDate: '2020-04-21',
        status: { key: 'active', text: 'Active' },
        actions: [
            { key: 'edit', text: 'Edit details' },
            { key: 'claim', text: 'Fill a claim' },
        ],
    },
    {
        id: 1,
        type: { icon: 'home', text: 'Private property' },
        details: 'Zigfrīda Annas Meireovica bulvāris 10-8, Rīga',
        fromDate: '2019-01-06',
        toDate: '2020-01-06',
        status: { key: 'unpaid', text: 'Unpaid' },
        actions: [
            { key: 'edit', text: 'Edit details' },
            { key: 'pay', text: 'Pay 24.47€' },
        ],
    },
    {
        id: 2,
        type: { icon: 'car', text: 'KASKO' },
        details: 'Volvo XS60, FF-4224',
        fromDate: '2018-05-12',
        toDate: '2019-05-12',
        status: { key: 'ending', text: 'Ending soon' },
        actions: [
            { key: 'edit', text: 'Edit details' },
            { key: 'renew', text: 'Renew' },
        ],
    },
    {
        id: 3,
        type: { icon: 'paw', text: 'PET' },
        details: 'Muris',
        fromDate: '2019-05-12',
        toDate: '2019-05-12',
        status: { key: 'active', text: 'Active' },
        actions: [
            { key: 'edit', text: 'Edit details' },
            { key: 'claim', text: 'Fill a claim' },
        ],
    },
];

export default policyData;
