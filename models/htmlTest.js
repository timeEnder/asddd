module.exports = htmlTest = [
    {
        title: 'О чем говорит тэг <p> align = "right" ... </p>',
        buttons:[
            [{text: 'Текст, заключенный в тэг, будет расположен по центру страницы', callback_data: '0_1'}],
            [{text: 'Текст, заключенный в тэг, будет расположен по левому краю страницы', callback_data: '0_2'}],
            [{text: 'Текст, заключенный в тэг, будет расположен по правому краю страницы', callback_data: '0_3'}],
        ],
        right_answer: 3
    },
    {
        title: 'Какие единицы измерения могут использоваться для атрибута ширины?',
        buttons:[
            [{text: 'Пиксели и %', callback_data: '1_1'}],
            [{text: 'Миллиметры и сантиметры', callback_data: '1_2'}],
            [{text: 'Пиксели и миллиметры', callback_data: '1_3'}],
        ],
        right_answer: 1
    },
    {
        title: 'Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца.',
        buttons:[
            [{text: '<line/>', callback_data: '2_1'}],
            [{text: '<br/>', callback_data: '2_2'}],
            [{text: '<td/>', callback_data: '2_3'}],
        ],
        right_answer: 2
    },
    {
        title: 'Напишите код HTML, который бы создавал кнопку отправки заполненной формы. Имя кнопки – ОК.',
        buttons:[
            [{text: '<input type="ОК" value="Submit"/>', callback_data: '3_1'}],
            [{text: '<p> input type="submit" value="OK"< /p>', callback_data: '3_2'}],
            [{text: '<input type="submit" value="ОК"/>', callback_data: '3_3'}],
        ],
        right_answer: 3
    },
    {
        title: 'Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
        buttons:[
            [{text: '<title> … </title>', callback_data: '4_1'}],
            [{text: '<header> … </header>', callback_data: '4_2'}],
            [{text: '<body> … </body>', callback_data: '4_3'}],
        ],
        right_answer: 1
    },
    {
        title: ' Заполните поля, чтобы отобразить картинку “flower.jpg” с высотой 300 пикселей и шириной 750 пикселей:',
        buttons:[
            [{text: '<img ref=”flower” format=.jpg high=300 px width=750 px/>', callback_data: '5_1'}],
            [{text: '<src img=”flower.jpg” height=”300%” width=”750%”/>', callback_data: '5_2'}],
            [{text: '<img src=”flower.jpg” height=”300 px” alt=”” width=”750 px”/>', callback_data: '5_3'}],
        ],
        right_answer: 3
    },
    {
        title: 'Что содержит в себе атрибут href?',
        buttons:[
            [{text: 'URL страницы, на которую произойдет перенаправление', callback_data: '6_1'}],
            [{text: 'Имя страницы, на которую произойдет перенаправление', callback_data: '6_2'}],
            [{text: 'Указание на то, где будет открываться новая страница: в том же или новом окне', callback_data: '6_3'}],
        ],
        right_answer: 1
    },
    {
        title: 'Какие из перечисленных тэгов относятся к созданию таблицы?',
        buttons:[
            [{text: '<header> <body> <footer>', callback_data: '7_1'}],
            [{text: '<table> <tr> <td>', callback_data: '7_2'}],
            [{text: '<ul> <li> <tr> <td>', callback_data: '7_3'}],
        ],
        right_answer: 2
    },
    {
        title: 'Укажите тэг, который соответствует элементу списка:',
        buttons:[
            [{text: '<li>', callback_data: '8_1'}],
            [{text: '<ul>', callback_data: '8_2'}],
            [{text: '<ol>', callback_data: '8_3'}],
        ],
        right_answer: 1
    },
    {
        title: ' О чем говорит следующая запись: <form action="url" method="POST">?',
        buttons:[
            [{text: 'Создается форма, при заполнении которой вводимые данные будут отображаться', callback_data: '9_1'}],
            [{text: 'Создается форма, при заполнении которой вводимые данные не будут отображаться', callback_data: '9_2'}],
            [{text: 'Создается форма, которая будет служить для внесения информации, представленной в виде ссылки (URL)', callback_data: '9_3'}],
        ],
        right_answer: 2
    },
    {
        title: 'Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?',
        buttons:[
            [{text: 'Submit', callback_data: '10_1'}],
            [{text: 'Checkbox', callback_data: '10_2'}],
            [{text: 'Radiobutton', callback_data: '10_3'}],
        ],
        right_answer: 1
    },
    {
        title: 'Для задания размеров тэгу <frameset> требуются следующие атрибуты:',
        buttons:[
            [{text: 'Высока и ширина', callback_data: '11_1'}],
            [{text: 'Площадь и толщина границ', callback_data: '11_2'}],
            [{text: 'Строки и столбцы', callback_data: '11_3'}],
        ],
        right_answer: 3
    },
]
