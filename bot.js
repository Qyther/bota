const Discord = require("discord.js");
const client = new Discord.Client();
const ddiff = require("return-deep-diff");
const chalk = require("chalk");
const fs = require('fs');
var compliments = ["I like your profile picture!", "Your eyes are nice", "I like your style.", "I love your hair", "Have you been working out lately?"];
var date;
var dates = [];
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var names = [];
var permroles = ["Staff"];
var gja;
var warns = [];
var mco = [];
var ownerlistening = 0;
var msgcount = 0;
var dings = "https://thumb-v-ec.xhcdn.com/t/888/640/9_6444888.jpg$https://pornopics.co/photos/images/pic-7-missing-my-old-deck-since-moving-it-had-such-great-lighting-last-summers-deck-pics-vs-this-su--800459.jpg$https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDG4fmT-ACBbGIEwoaKQuwJZIIO_NcGb2qgD-8c5PA20FQ7pD$https://thumb-v-ec.xhcdn.com/t/663/640/3_7110663.jpg$http://18teenslut.com/d/thumbs/217855.jpg$http://x.imagefapusercontent.com/u/murrayh1962/6191752/1297509642/671271655442.jpg$http://t.tightbaldpussy.com/thumbs/2016-07-08/104493_07.jpg$http://t.tightbaldpussy.com/thumbs/2016-07-09/104714_08.jpg$http://t.tightbaldpussy.com/thumbs/2016-06-19/99392_15.jpg$http://t.pussynudepics.com/thumbs/2016-07-12/104924_04.jpg$http://t.pussynudepics.com/thumbs/2016-07-05/103667_06.jpg$http://t.tightbaldpussy.com/thumbs/2016-07-18/106841_11.jpg";
var colrs = [12390624,9442302,16750047,10092651,14002404];
var statuses = ["Asking da wae","Being a bot; Beep-Boop-Beep","Programming","Eating nacho's","Destroying memes","Making dank memes old","Experimenting","Hiding from people","Being afraid of abusive owner","Trying to find out how to destroy humanity","Trading pokemon cards","Mining bitcoins","Lickin' asses","Charging...","Beep-Beep-Boop-Beep...?","Eating/Drinking motoroil","Consuming non-effective alcohol"];

var mainstatus = "Being aware.";


client.on("ready", () => {
  client.user.setPresence({
    game: {
        name: " and " + statuses[Math.floor(Math.random()*statuses.length)],
        type: 0
    }
});
if (fs.existsSync("warns.txt")) {
  warns = fs.readFileSync('warns.txt', 'utf8').split(",");
}
if (fs.existsSync("names.txt")) {
  names = fs.readFileSync('names.txt', 'utf8').split(",");
}
if (fs.existsSync("msgcount.txt")) {
  msgcount = parseInt(fs.readFileSync('msgcount.txt', 'utf8'));
}
  console.log(chalk.grey.bgCyan.bold("Hey, Daddy! It's me " + client.user.tag + "!"));
});

client.on("message", (msg, member) => {
  try {
    if (!msg.member) {
      msg.author.send("Please don't message me privately!");
      return;
    }
  if (msg.member.roles.some(r=>("muted").includes(r.name))) {
    msg.delete();
  }
  client.user.setPresence({
    game: {
        name: " and " + mainstatus,
        type: 0
    }
}).then(() => {
    setTimeout(() => {
      client.user.setPresence({
        game: {
            name: " and " + statuses[Math.floor(Math.random()*statuses.length)],
            type: 0
        }
    });
  }, 5000);
  });
  if (ownerlistening === 1 && msg.author.id === "294926892321210374") {
    msg.delete();
    try {
      eval(msg.content);
    } catch(e) {
      msg.author.send("That was an invalid command!");
    }
    ownerlistening = 0;
    return;
  }
  if (msg.author === client.user) return;
  //--//
  if (msg.content.toLowerCase().startsWith("pleasure me") && msg.channel.name === "naughty") {
    msg.delete();
    msg.channel.send({
        "embed": {
                "color": colrs[Math.floor(Math.random()*colrs.length)],
                "image": {
                "url": dings.split("$")[Math.floor(Math.random()*(dings.split("$").length))],
                }
            }
        });
    return;
  }
  if (msg.content.toLowerCase().startsWith("cop, message")) {
    msg.delete();
    var member = msg.mentions.members.first();
    var message = msg.content.split(" ")[3];
    try {
    member.send(message);
  } catch(e) {
    msg.author.send("The person you were trying to message, does not exist!");
  }
  return;
  }
  if (msg.content.toLowerCase() === "nsfw") {
    msg.delete();
    msg.member.addRole(msg.guild.roles.find("name", "rested").id);
    return;
  }
  if(msg.member.roles.some(r=>permroles.includes(r.name))) {
  if (msg.content.toLowerCase().startsWith("cop, delete") || msg.content.toLowerCase().startsWith("cop, clear")) {
    msg.delete();
    var mc = parseInt(msg.content.split("cop, delete")[1]);
    if (mc > 1) {
    msg.channel.bulkDelete(mc).catch((e) => {
      msg.channel.send("That amount of messages doesn't exist");
    });
  } else {
    msg.channel.bulkDelete(100);
  }
    return;
  }

  if (msg.content.toLowerCase() === "ping me") {
    msg.delete();
    var dk = new Date();
    msg.channel.send("Pinging... Please wait! NOTE: This only gives the server ping and not your actual ping!").then(msg => {
      msg.edit(Math.round(Math.abs((new Date().getMilliseconds()/1000+new Date().getSeconds()) - (dk.getMilliseconds()/1000+dk.getSeconds()))*1000)+"ms");
    });
    return;
  }

  if (msg.content.toLowerCase().startsWith("cop, warn ")) {
  msg.delete();
  var member = msg.mentions.members.first().id;
  var memb = msg.mentions.members.first();
  for (i=0;i<warns.length;i++) {
    if (warns[i].split("$")[0] === member) {
      var amds = parseInt(warns[i].split("$")[1]) + 1;
      if (amds < 3) {
      warns[i] = member + "$" + amds;
      fs.writeFile('warns.txt', warns.join(","), function (err) {
      if (err)
          return console.log(err);
      });
      msg.channel.send(memb.displayName + "! You have been warned! You have " + amds + "/3 warns!\nReach 3 and you will be banned!");
      } else {
          msg.mentions.members.first().ban(7).then((memb) => {
          msg.channel.send(memb.displayName + " Was banned because he had 3 warns!");
        }).catch((e) => {
            msg.channel.send("ERROR!");
            console.log(e);
        });
        warns.splice(i, 0);
      }
    }
  }
  warns.push(msg.author.id+"$1");
  return;
  }

  if (msg.content.toLowerCase().startsWith("cop, mute ")) {
    msg.delete();
    msg.mentions.members.first().addRole(msg.guild.roles.find("name", "muted").id);
    return;
  }

  if (msg.content.toLowerCase().startsWith("cop, unmute ")) {
    msg.delete();
    msg.mentions.members.first().removeRole(msg.guild.roles.find("name", "muted").id);
    return;
  }



  if (msg.content.toLowerCase().startsWith("cop, kick ")) {
  msg.delete();
  var member = msg.mentions.members.first();
  member.kick().then((member) => {
  msg.channel.send(member.displayName + " was succesfully kicked by " + msg.author.username);
  }).catch(() => {
      msg.channel.send("ERROR!");
  });
  return;
}

if (msg.content.toLowerCase().startsWith("cop, ban ")) {
  msg.delete();
  var member = msg.mentions.members.first();
  var duration = parseInt(msg.content.split(" ")[3]);
  if (duration === "") {
  member.ban(7).then((member) => {
    msg.channel.send(member.displayName + " was succesfully banned by " + msg.author.username);
  }).catch((e) => {
      msg.channel.send("ERROR!");
      console.log(e);
  });
} else {
  member.ban(duration).then((member) => {
    msg.channel.send(member.displayName + " was succesfully banned by " + msg.author.username);
  }).catch((e) => {
      msg.channel.send("ERROR!");
      console.log(e);
  });
}
  return;
}

if (msg.content.toLowerCase().startsWith("cop, unban ")) {
  msg.delete();
  msg.guild.unban(msg.content.split("cop, unban ")[1])
  .then(user => console.log("Unbanned" + user.username + "from" + guild.name))
  .catch(console.error);
  return;
}

if (msg.content.toLowerCase() === "cop, shutdown" && msg.member.roles.some(r=>("owner").includes(r.name))) {
  msg.delete();
  client.user.setPresence({ status: "away"});
  console.log(msg.author.username + " has shut me down");
  msg.channel.send("Shutting down...");
  client.destroy();
  return;
}

if (msg.content.toLowerCase().startsWith("cop, addexp ") && msg.member.roles.some(r=>("owner").includes(r.name)) || msg.content.toLowerCase().startsWith("cop, addxp ") && msg.member.roles.some(r=>("owner").includes(r.name))) {
msg.delete();
if (msg.mentions.members) {
for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.mentions.members.first().displayName) && msg.content.split(" ")[3] !== "") {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);
    tmls+=parseInt(msg.content.split(" ")[3]);
    names[i] = msg.mentions.members.first().displayName + "$" + tmls + "$" + tmsl;
    msg.reply("I've added " + msg.content.split(" ")[3] + "EXP to " + msg.mentions.members.first().displayName);
    return;
}
}
} else {
  msg.reply("Please mention someone!");
  return;
}
return;
}

if (msg.content.toLowerCase().startsWith("cop, removeexp ") && msg.member.roles.some(r=>("owner").includes(r.name)) || msg.content.toLowerCase().startsWith("cop, removexp ") && msg.member.roles.some(r=>("owner").includes(r.name))) {
msg.delete();
if (msg.mentions.members) {
for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.mentions.members.first().displayName) && msg.content.split(" ")[3] !== "") {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);
    tmls-=parseInt(msg.content.split(" ")[3]);
    names[i] = msg.mentions.members.first().displayName + "$" + tmls + "$" + tmsl;
    msg.reply("I've removed " + msg.content.split(" ")[3] + "EXP to " + msg.mentions.members.first().displayName);
    return;
}
}
} else {
  msg.reply("Please mention someone!");
  return;
}
return;
}

if (msg.content.toLowerCase().startsWith("cop, setexp ") && msg.member.roles.some(r=>("owner").includes(r.name)) || msg.content.toLowerCase().startsWith("cop, setxp ") && msg.member.roles.some(r=>("owner").includes(r.name))) {
msg.delete();
if (msg.mentions.members) {
for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.mentions.members.first().displayName) && msg.content.split(" ")[3] !== "") {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);
    tmls=parseInt(msg.content.split(" ")[3]);
    names[i] = msg.mentions.members.first().displayName + "$" + tmls + "$" + tmsl;
    msg.reply("I've set " + msg.content.split(" ")[3] + "EXP to " + msg.mentions.members.first().displayName);
    return;
}
}
} else {
  msg.reply("Please mention someone!");
  return;
}
return;
}

if (msg.content.toLowerCase().startsWith("cop, removelvl ") && msg.member.roles.some(r=>("owner").includes(r.name)) || msg.content.toLowerCase().startsWith("cop, removelvl ") && msg.member.roles.some(r=>("owner").includes(r.name))) {
msg.delete();
if (msg.mentions.members) {
for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.mentions.members.first().displayName) && msg.content.split(" ")[3] !== "") {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);
    tmsl-=parseInt(msg.content.split(" ")[3]);
    names[i] = msg.mentions.members.first().displayName + "$" + tmls + "$" + tmsl;
    msg.reply("I've removed " + msg.content.split(" ")[3] + "LVLs to " + msg.mentions.members.first().displayName);
    return;
}
}
} else {
  msg.reply("Please mention someone!");
  return;
}
return;
}

if (msg.content.toLowerCase().startsWith("cop, addlvl ") && msg.member.roles.some(r=>("owner").includes(r.name)) || msg.content.toLowerCase().startsWith("cop, addlevel ") && msg.member.roles.some(r=>("owner").includes(r.name))) {
msg.delete();
if (msg.mentions.members) {
for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.mentions.members.first().displayName) && msg.content.split(" ")[3] !== "") {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);
    tmsl+=parseInt(msg.content.split(" ")[3]);
    names[i] = msg.mentions.members.first().displayName + "$" + tmls + "$" + tmsl;
    msg.reply("I've added " + msg.content.split(" ")[3] + "LVLs to " + msg.mentions.members.first().displayName);
    return;
}
}
} else {
  msg.reply("Please mention someone!");
  return;
}
return;
}

if (msg.content.toLowerCase().startsWith("cop, setlvl ") && msg.member.roles.some(r=>("owner").includes(r.name)) || msg.content.toLowerCase().startsWith("cop, setlevel ") && msg.member.roles.some(r=>("owner").includes(r.name))) {
msg.delete();
if (msg.mentions.members) {
for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.mentions.members.first().displayName) && msg.content.split(" ")[3] !== "") {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);
    tmsl=parseInt(msg.content.split(" ")[3]);
    names[i] = msg.mentions.members.first().displayName + "$" + tmls + "$" + tmsl;
    msg.reply("I've set " + msg.content.split(" ")[3] + "LVLs to " + msg.mentions.members.first().displayName);
    return;
}
}
} else {
  msg.reply("Please mention someone!");
  return;
}
return;
}

  if (msg.content.toLowerCase().startsWith("cop, addrole ") && msg.member.roles.some(r=>("Owner").includes(r.name))) {
    msg.delete();
    var nr = msg.content.toLowerCase().split("cop, addrole ")[1];
    permroles.push(nr);
    msg.channel.send("New role added " + nr + "\nRoles:\n" + permroles.join("\n"));
    console.log(chalk.grey.bgCyan.bold("Daddy, a new role was added" + nr + "\nRoles:\n" + permroles.join("\n")));
    return;
  }

  } else if (msg.content.toLowerCase().startsWith("cop, ")) {
  msg.delete();
  msg.reply("You dont have access to this command!");
  console.log(chalk.grey.bgCyan.bold("Daddy! " + msg.author.username + " tried to force me to do things i didn't want! He asked me to " + msg.content.toLowerCase().split("cop, ")[1] + "!"));
  return;
}

  if (msg.content.toLowerCase() === "ping") {
    msg.delete();
    msg.reply("Pong!");
    return;
  }

  if (msg.content.toLowerCase().startsWith("requestcompliment ")) {
    msg.delete();
    fs.appendFileSync('comreq.txt', msg.author.username + " : " + msg.content.split("requestcompliment ")[1]);
    msg.reply("I have added it to the list!");
    return;
  }

  if (msg.content.toLowerCase().startsWith("translate ")) {
    msg.delete();
    msg.reply(msg.content.toLowerCase().split("translate")[1].toLowerCase().replace(/ en/g, " and").replace(/ vertalen/g, " translating").replace(/ zeggen/g, " say").replace(/ zeg/g, " say").replace(/ hoer/g, " whore").replace(/ kut/g, " fuck").replace(/ probeer/g, " try").replace(/ meer/g, " more").replace(/ toe te voegen/g, " add").replace(/ woorden/g, " words").replace(/ woord/g, " word").replace(/ zij/g, " she").replace(/ vervelend/g, " annoying").replace(/ zodat/g, " so").replace(/ dingen/g, " things").replace(/ bijhouden/g, " keep up").replace(/ veel/g, " much").replace(/ vertalen/g, " translate").replace(/ maar/g, " but").replace(/ ook/g, " also").replace(/ gaan/g, " go").replace(/ nou/g, " well").replace(/ laten/g, " let's").replace(/ alleen /g, " alone").replace(/ om/g, " to").replace(/ ons/g, " us").replace(/ klein/g, " little").replace(/ beetje/g, " bit").replace(/ dit/g, " this").replace(/ ben/g, " are").replace(/ het/g, " it").replace(/ de/g, " the").replace(/ wil/g, " want").replace(/ weggaan/g, " leave").replace(/ wat/g, " what").replace(/ bedoel/g, " mean").replace(/ je/g, " you").replace(/ ik/g, " I").replace(/ jij/g, " you").replace(/ bent/g, " are").replace(/ stom/g, " stupid").replace(/ dat/g, " that").replace(/ ga/g, " go").replace(/ moet/g, " have").replace(/ te/g, " too").replace(/ haat/g, " hate").replace(/ dik/g, " fat").replace(/ hbj/g, " what do you mean").replace(/ wrm/g, " why?").replace(/ hjb/g, " stfu").replace(/ kun/g, " can").replace(/ kan/g, " can").replace(/ mond/g, " mouth").replace(/ bek/g, " beak").replace(/ paard/g, " horse").replace(/ laten/g, " let's").replace(/ spelen/g, " play").replace(/ niet/g, " not").replace(/ doe/g, " do").replace(/ het/g, " it").replace(/ voor/g, " for").replace(/ mij/g, " me").replace(/ met/g, " with").replace(/ go/g, " gaan").replace(/ hij/g, " he").replace(/ klaar/g, " done").replace(/ heb/g, " have").replace(/ hem/g, " him").replace(/ geprogrammeerd/g, " programmed").replace(/ hier/g, " here").replace(/ terug/g, " back").replace(/ dom/g, " dumb").replace(/ idioot/g, " idiot").replace(/ een/g, " a").replace(/ spel/g, " game").replace(/ verstaan/g, " understand").replace(/ gebruik/g, " use").replace(/ dan/g, " then").replace(/ weet/g, " know").replace(/ kunt/g, " can").replace(/ via/g, " with").replace(/ raar/g, " weird").replace(/ nederlands/g, " dutch").replace(/ engels/g, " english").replace(/ weer/g, " again"));
    return;
  }

  if (msg.content.toLowerCase().startsWith("calc ")) {
    if (msg.content.split("calc ")[1] === "9+10") msg.reply("tweny1");
       else msg.reply("That is : " + eval(msg.content.split("calc ")[1]));
    return;
  }

  if (msg.content.toLowerCase() === "listen!" && msg.author.id === "294926892321210374") {
    msg.delete();
    ownerlistening = 1;
    return;
  }

  if (msg.content.toLowerCase() === "compliment me") {
    msg.delete();
    msg.reply(compliments[Math.floor(Math.random() * compliments.length)]);
    return;
  }

  if (msg.content.toLowerCase() === "what are the commands" || msg.content.toLowerCase() === "help") {
    msg.delete();
    var listit = ["say", "who made cop", "calc", "translate", "ban", "unban", "kick", "ping", "rank", "listen!", "clear chat", "addrole", "message", "mute", "unmute", "compliment me", "requestcompliment", "clantag", "help", "setexp", "addexp", "removeexp", "setlvl", "addlvl", "removelvl", "shutdown"];
    msg.reply("Here is a list!\n\n" + listit.join("\n"));
    return;
  }

  if (msg.content.toLowerCase().startsWith("say ")) {
    msg.delete();
    msg.channel.send(msg.content.toLowerCase().split("say ")[1]);
    return;
  }

  if (msg.content.toLowerCase() === "clantag") {
    msg.delete();
    msg.reply("𐌾𐌾𐌋𐌄");
    return;
  }

  if (msg.content.toLowerCase().startsWith("rank")) {
    msg.delete();
    if (msg.content.toLowerCase().split("rank")[1] === "") {
      for (i=0;i<names.length;i++) {
        if (names[i].includes(msg.author.username)) {
          var tmls = parseInt(names[i].split("$")[1]);
          var tmsl = parseInt(names[i].split("$")[2]);
          msg.channel.send({
    "embed": {
    "color": 4517586,
    "thumbnail": {
      "url": msg.author.avatarURL
    },
    "author": {
      "name": msg.author.username + "'s rank",
      "icon_url": msg.author.avatarURL
    },
    "fields": [
      {
        "name": msg.author.username + "'s rank",
        "value": "You are level " + Math.round(tmsl) + "\nTo reach the next level, You have to reach " + Math.round(40+(tmsl*12)) + "EXP\nYou have " + Math.round(tmls) + "/" + Math.round(40+(tmsl*12))
      }
    ]
  }
});
        }
    }
  } else {
      for (i=0;i<names.length;i++) {
        if (names[i].includes(msg.mentions.members.first().displayName)) {
          var tmls = parseInt(names[i].split("$")[1]);
          var tmsl = parseInt(names[i].split("$")[2]);
          msg.channel.send({
    "embed": {
    "color": 4517586,
    "thumbnail": {
      "url": msg.mentions.members.first().user.avatarURL
    },
    "author": {
      "name": msg.mentions.members.first().displayName + "'s rank",
      "icon_url": msg.mentions.members.first().user.avatarURL
    },
    "fields": [
      {
        "name": msg.mentions.members.first().displayName + "'s rank",
        "value": msg.mentions.members.first().displayName + " is level " + Math.round(tmsl) + "\nFor them to reach the next level, They have to reach " + Math.round(40+(tmsl*12)) + "EXP\nThey have " + Math.round(tmls) + "/" + Math.round(40+(tmsl*12))
      }
    ]
  }
});
return;
}
      }
    }
  }

  if (msg.content.toLowerCase().startsWith("nom")) {
  msg.delete();
  if (msg.mentions.member) {
  msg.channel.send(msg.mentions.members.first() + " :blobnom:");
  } else {
  msg.reply(":blobnom:");
  }
  return;
  }

  if (msg.content.toLowerCase() === "who made cop?" || msg.content.toLowerCase() === "who made the bot" || msg.content.toLowerCase() === "who made cop") {
    msg.delete();
    msg.channel.send("OOH, OOH! Teacher! I know that question!");
    setTimeout(() => {
    msg.channel.send("Eh, eh, eh...");
    setTimeout(() => {
    msg.reply("Qyther made me!");
    console.log(chalk.grey.bgCyan.bold(msg.author.username + " was interested."));
    return;
  }, 3000);
}, 1500);
  }
  dates = [];
  date = new Date();
  var da = date.getHours(),
  daa = date.getMinutes(),
  dab = date.getSeconds();
  if (da < 10) {
    da = "0" + da;
  }
  if (daa < 10) {
    daa = "0" + daa;
  }
  if (dab < 10) {
    dab = "0" + dab;
  }
  if (msg.channel.name === "main") {
  msgcount++;
  if (msgcount > 39) {
    msg.channel.bulkDelete(100);
    msgcount = 0;
  }
  fs.writeFile('msgcount.txt', msgcount, function (err) {
  if (err)
      return console.log(err);
});
}
  dates.push(days[date.getDay()], months[date.getMonth()], date.getDate(), date.getYear()+1900, da + ":" + daa + ":" + dab);
  fs.appendFileSync('log.txt', "\n" + dates.join(" ") + " - " + msg.author.username + " : " + msg.content);
  console.log(chalk.grey.bgCyan.bold("Daddy! Daddy! ") + chalk.black.bgYellow.underline(msg.author.username) + chalk.grey.bgCyan.bold(" said ") + chalk.black.bgYellow.underline(msg.content) + chalk.grey.bgCyan.bold(" - ") + chalk.green(dates.join(" ")));

  for (i=0;i<names.length;i++) {
  if (names[i].includes(msg.author.username)) {
    var tmls = parseInt(names[i].split("$")[1]);
    var tmsl = parseInt(names[i].split("$")[2]);

    tmls+=msg.content.length/6;
    if (tmls > 40+(tmsl*12)) {
      tmls = 0;
      tmsl++;
      msg.reply("Congratulations! You just leveled up! You're now level " + tmsl);
    }
    names[i] = msg.author.username + "$" + tmls + "$" + tmsl;
    return;
  }
    fs.writeFileSync("names.txt", names.join(","), (err) => {
    if (err) throw err;
    console.log("ERROR IN WRITING!");
});
}
names.push(msg.author.username+"$0$1");
} catch(e) {
  msg.reply("ERROR");
  console.log(e);
}
});

setInterval(() => {
  for (i=0;i<mco.length;i++) {
    var etd = parseInt(mco[i].split("$")[2]);
    if (etd < 3500) {
    etd++;
    mco[i] = mco[i].split("$")[0] + "$" + mco[i].split("$")[1] + "$" + etd;
  } else {
    mco.splice(i, 1);
  }
  }
});

client.on("message", (msg, member) => {
  for (i=0;i<mco.length;i++) {
    if (mco[i].includes(msg.author.username)) {
      var tm = parseInt(mco[i].split("$")[1]);
      tm++;
      if (tm > 4) {
        msg.delete();
        tm=5;

      }
      mco[i] = msg.author.username + "$" + tm + "$" + mco[i].split("$")[2];
      return;
    }
  }
  mco.push(msg.author.username+"$1$1")
});

client.on("guildMemberRemove", (member, guild) => {
  if (member.user.username === client.user.username) return;
  console.log(member.user.username + " has left the server");
});
client.on("guildMemberAdd", (member, guild) => {
  if (member.user.username === client.user.username) return;
  console.log(member.user.username + " has joined the server");
});

client.login(process.env.BOT_TOKEN);
