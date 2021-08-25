
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'test ?(.*)', fromMe: false}, (async (message, match) => {

    await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *I am running the lie detector test of user ..* ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 4000));

    var r_text = new Array ();
r_text[0] = " *I am Looking at Old Messages From You..* ";
r_text[1] = " *I am Trying to Understand The Messages You Wrote..* ";
r_text[2] = " *I am Searching Your Daily Messages..* ";
r_text[3] = " *I am Trying to Understand The Messages You Sent..* ";
r_text[4] = " *I am Trying to Understand Your Nature..* ";

var i = Math.floor(5*Math.random())

    await message.sendMessage(`${r_text[i]}`);

    await new Promise(r => setTimeout(r, 3700));

    var r_text = new Array ();
r_text[0] = " *Woaw, I Found Somethings phishy* 🙀 ";
r_text[1] = " *Whoa, Look at Your Old Messages* 😯 ";
r_text[2] = " *Let’s See What We Got* 😳 ";
r_text[3] = " *I See Different Things* 😳";
r_text[4] = " *My Eyes!, Bleeding* 😱";
r_text[5] = " *What are These Messages?* 🤯";
r_text[6] = " *Interesting* 🤔";

var i = Math.floor(7*Math.random())

    await message.sendMessage(`${r_text[i]}`);

    await new Promise(r => setTimeout(r, 2000));

    var r_text = new Array ();
r_text[0] = " *I Gathered İnformation About You.* ✅";
r_text[1] = " *I Got The Necessary İnformation. It is time to see the result..* ";
r_text[2] = " *I am Using My Metaphysical Powers* 😎";
r_text[3] = " *I Can Now Guess The Result* ";
r_text[4] = " *Bip Bop. I Gat-her-ed Informant.* 🤖";
r_text[5] = " *Boss, I am Done. Calculating..* ";
r_text[6] = " *Finally, I Got an İdea About You* ";

var i = Math.floor(7*Math.random())

    await message.sendMessage(`${r_text[i]}`);

    await new Promise(r => setTimeout(r, 2100));

    var r_text = new Array ();
r_text[0] = "😇 *You are a honest person, you have many responsibilities* 😇";
r_text[1] = "👿 *you are a lier, go to hell* 😠";
var i = Math.floor(2*Math.random())

await message.sendMessage(`According To My Calculations🧐\nYou Are Now ${r_text[i]}`);


}));

Asena.addCommand({pattern: 'infomood', fromMe: true}, (async (message, match) => {
    
    await message.sendMessage('*Codded by kaddu *\n💻Usage: *.mood <reply>*\nℹ️Desc: Finds what your responding one‘s lie detector test\n🆕 _Support Filters!_');

}));
