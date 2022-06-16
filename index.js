const { Telegraf } = require('telegraf')

const bot = new Telegraf('2096293016:AAG0XoHJWKpAkabd1mhAX857GZNWF_3Fmn4')

	/// or other chat types...
	// if( ctx.chat.type !== 'channel' ) return next();
	
	/// need to cache this result ( variable or session or ....)
	/// because u don't need to call this method
	/// every message

bot.command('start', ctx => {
 // ctx.deleteMessage();
  lists(ctx);
})

'use strict';

const fs = require('fs');

// fs.readFile('data.json', (err, data) => {
//     if (err) throw err;
//     let datas = JSON.parse(data);
//      console.log(datas[2].answer);
// });
bot.command('test', ctx => {	
////////////////////////readfile/////////////////
fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let datas = JSON.parse(data);
    //  console.log(datas[2].answer);
////////////////readfile////////////////////////
//     let message = `
// Questions:
// /q1. ${datas[datas.length-1].question}
// /q2. ${datas.pop().answer}
//   `;
//   ctx.reply(message);
  ctx.reply("Questions:")

for (i = 0; i < datas.length; i++){
  // console.log((i+1) + ": " + datas[i].question + "  " + datas[i].answer);

    bot.telegram.sendMessage("/q"+(i+1)+ " For: "+ datas[i].question);

}

// datas.forEach((datas) => {
//     //  let qe = datas.question;
//     bot.telegram.sendMessage(ctx.chat.id,datas.question);

//     });

// for (const number of datas.reverse()){
//     console.log(number.question);
//     ctx.reply("Questions:" + number.question)
// }







});
})






bot.command('admin', function(ctx){
	console.log(ctx.from);
	if( ctx.chat.id == 447024337 ){
    adminStartMessage(ctx);
	} else {
		return ctx.reply('No, you are not an admin');
	}
});



function lists(ctx) {

    let message = `
Questions:
/q1. What is the current price of the $BUY token? 
/q2. Whare can I see the tokenomics?
/q3. Where can I see the roadmap?
  `;
  ctx.reply(message);

}


///////////////////


function adminStartMessage(ctx) {
  let startMessage = `Welcome Admin!, You can Modify,Delete The entire data Of this bot`;
  bot.telegram.sendMessage(ctx.chat.id, startMessage,
    {
      reply_markup: {
        inline_keyboard: [

          [
            { text: "Get Question And Answer Lists", callback_data:'lists'}
          ],
          [
            { text: "Modify The Data", callback_data: 'modify' }
          ],
          [
            { text: "Delete The Qutionary", callback_data: 'delete' }
          ]
        ]
      }
    })
}

bot.action('lists', ctx => {
    ctx.deleteMessage();
    let message = `
test list
  `;
  ctx.reply(message);

})


bot.action('modify', ctx => {
    ctx.deleteMessage();
    let message = `
test modify
  `;
  ctx.reply(message);

})


bot.action('delete', ctx => {
    ctx.deleteMessage();
    let message = `
test delete
  `;
  ctx.reply(message);

})



////....
bot.startPolling();
