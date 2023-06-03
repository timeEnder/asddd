var TelegramBot = require('node-telegram-bot-api');
var mathTest = require('./models/mathTest');
var mathAnswers = require('./models/mathAnswers');
var htmlTest = require('./models/htmlTest');

var token = '6268667059:AAExZrhMO3YfjEpj5Spx9TWBllPMA08EVFs';

var bot = new TelegramBot(token, {polling: true});

var questions = htmlTest;
var answers = mathAnswers;
var total = 0;
var que = shuffle(questions);
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
console.log(que);
let currenQuestion=0;
function newQuestion(msg){
        var arr = que[currenQuestion];

    var text = arr.title;
    var options = {
        reply_markup: JSON.stringify({
            inline_keyboard: arr.buttons,
            parse_mode: 'Markdown'
        })
    };
    chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    bot.sendMessage(chat, text, options);
}

bot.onText(/\/start_test/, function (msg, match) {
    newQuestion(msg);
});

bot.on('callback_query', function (msg) {
    if (total <= 10){
    var answer = msg.data.split('_');
    var index = answer[0];
    var button = answer[1];

    if (questions[index].right_answer === parseInt( button)) {
        bot.sendMessage(msg.from.id, 'Ответ верный ✅');
        total++;
        bot.sendMessage(msg.from.id, total)
    } else {
        bot.sendMessage(msg.from.id, 'Ответ неверный ❌'+ que[index].right_answer +' = ' + button + ' ' + total + ' ' + index);
    }
    currenQuestion++;
    if (currenQuestion >= que.length){
        currenQuestion = 0;
    }

    bot.answerCallbackQuery(msg.id, 'Вы выбрали: '+ msg.data, true);
    newQuestion(msg)
    }if (total >= 10){
        bot.sendMessage(msg.from.id, 'Congratulations🎉🎉🎉\n Тесты закончились\n' + `Your score: ${total}`);
    }
});