module.exports =  mathTest = [
    {
        title: 'Сколько сотен, десятков и единиц в числе 803?',
        buttons:[
            [{text: '8сот. 3 ед.', callback_data: '0_1'}],
            [{text: '80сот. 3ед.', callback_data: '0_2'}],
            [{text: '8сот. 10дес. 3ед.', callback_data: '0_3'}],
        ],
        right_answer: 1
    },
    {
        title: 'Укажи цифру, которая стоит в разряде сотен в числе 917 640',
        buttons:[
            [{text: '7', callback_data: '1_1'}],
            [{text: '1', callback_data: '1_2'}],
            [{text: '6', callback_data: '1_3'}],
        ],
        right_answer: 3
    },
    {
        title: 'Сумма чисел   87 503  и  689   равна:',
        buttons:[
            [{text: '88 192', callback_data: '2_1'}],
            [{text: '88 182', callback_data: '2_2'}],
            [{text: '87 192', callback_data: '2_3'}],
        ],
        right_answer: 1
    },
    {
        title: 'Разность чисел  10 123  и  9 654 равна:',
        buttons:[
            [{text: '1 469', callback_data: '3_1'}],
            [{text: '469', callback_data: '3_2'}],
            [{text: '19 531', callback_data: '3_3'}],
        ],
        right_answer: 2
    },
    {
        title: 'Укажи число, которое в 8 раз меньше, чем число 832:',
        buttons:[
            [{text: '105', callback_data: '4_1'}],
            [{text: '103', callback_data: '4_2'}],
            [{text: '104', callback_data: '4_3'}],
        ],
        right_answer: 3
    },
    {
        title: 'Найди частное чисел 8 010 100 и 100',
        buttons:[
            [{text: '8 010', callback_data: '5_1'}],
            [{text: '801 010 000', callback_data: '5_2'}],
            [{text: '80 101', callback_data: '5_3'}],
        ],
        right_answer: 3
    },
    {
        title: 'Найди произведение чисел 827 и 47',
        buttons:[
            [{text: '3 308', callback_data: '6_1'}],
            [{text: '3 288', callback_data: '6_2'}],
            [{text: '3 208', callback_data: '6_3'}],
        ],
        right_answer: 1
    },
];