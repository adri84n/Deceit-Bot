const Discord = require("discord.js");
let test = `@adri84n` ;
const bot = new Discord.Client({disableEveryone: true});
let prefix = '!';
let Twitter = '@SenseeFN'

bot.on('ready', () => {
	bot.user.setActivity("¿Eres Infectado o Inocente? 🤔 ");
	console.log(`[Starting Deceit Bot]`)
})


bot.on('message', (message) => {
	let msg = message.content.toUpperCase();

	let member = bot.guilds.get();

	if(msg == prefix + 'BUSCAR') {

		message.channel.send({embed: {
			title: "",
			color: 3447003,
			description: `Error. Pon !buscar(1,2,3,4,5).`,
			"footer": {
				"text": ""
			}
		}});
	}
	if(msg == prefix + 'BUSCAR1') {

		message.channel.send({embed: {
			title: "",
			color: 3447003,
			description: `Buscamos 1 más para Deceit.`,
			"footer": {
				"text": ""
			}
		}});
	}
	if(msg == prefix + 'BUSCAR2') {

		message.channel.send({embed: {
			title: "",
			color: 3447003,
			description: `Buscamos 2 más para Deceit.`,
			"footer": {
				"text": ""
			}
		}});
	}
	if(msg == prefix + 'BUSCAR3') {

		message.channel.send({embed: {
			title: "",
			color: 3447003,
			description: `Buscamos 3 más para Deceit.`,
			"footer": {
				"text": ""
			}
		}});
	}
	if(msg == prefix + 'BUSCAR4') {

		message.channel.send({embed: {
			title: "",
			color: 3447003,
			description: `Buscamos 4 más para Deceit.`,
			"footer": {
				"text": ""
			}
		}});
	}
	if(msg == prefix + 'BUSCAR5') {

		message.channel.send({embed: {
			title: "",
			color: 3447003,
			description: `Buscamos 5 más para Deceit.`,
			"footer": {
				"text": ""
			}
		}});
	}

})
bot.login('NjYwNjIxNTk4OTU2NzE2MDMz.Xgfh2Q.SL5AMiXnmoP3QrRbOA02dcLoTHo');
