const { Client, Events, GatewayIntentBits } = require("discord.js");
const secret = require("./secret.json"); //file with your bot credentials/token/etc

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const reasQuotesArray = [
  "Fuck you Reas.",
  "https://www.op.gg/summoners/na/Distasteful",
  "He's dying soon, stop mentioning him! - Fuck you David",
  "Nooooooooooooooo Reas!",
  "Reas <:help:997925786243833866>",
  "Wtf Reas?  I sent you everything! WHERE GANK?",
  "Wasn't my fault, I played it perfectly. - Reas",
  "Lmao these guys are so dumb for killing me 15 times - Reas",
  "https://i.imgur.com/seamlkB.png",
  "https://i.imgur.com/x44U4dy.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045571021035552779/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/640717678100873226/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/568247902606983207/zplayable.png",
  "https://cdn.discordapp.com/attachments/851642783496142858/911926520765878303/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/927308951706533958/unknown.png",
  "https://cdn.discordapp.com/attachments/851642783496142858/1007019521128800286/unknown.png",
];

const davidQuotesArray = [
  "https://cdn.discordapp.com/attachments/367055984180592674/1045572192206848001/unknown.png",
  "https://cdn.discordapp.com/attachments/851642783496142858/1033017371406909520/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045572016226451557/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045571847057575976/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045571945787314217/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045573482349596672/image.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045573620174422128/unknown.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1045575047802257449/image.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/1046621686797185104/unknown.png",
  "https://www.youtube.com/watch?v=U8RV8UCXUJk&feature=youtu.be",
  "https://cdn.discordapp.com/attachments/851642783496142858/897925810646835220/Death_2021-10-13_15-08-32.png",
  "https://cdn.discordapp.com/attachments/367055984180592674/855276841040609310/unknown.png",
];

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async function (message) {
  const user = message.author;
  const msg = message.content;

  if (message.content === "get on <@960172164953284658>")
    message.channel.send(
      "<:reaf:428981511472283660> <:help:997925786243833866> :pleading_face:"
    );

  // if (s == "reas" || s *contains* "reas " || s.size >= 5 search for  , r, e, a, s )
  const badWords = ["pussanya", "clit", "hole", "pussy", "slit"];
  const containsBadWord = badWords.some((word) => {
    return message.content.includes(word);
  });
  if (containsBadWord) {
    message.react("<:braindead:890674113042055188>");
  }

  if (message.content.includes("plat")) {
    message.channel.send("Reas.");
    message.react("<:reafcannonbraindead:652986634073145356>");
  }

  if (message.content.includes("uwu")) {
    message.react("<:weebWow:440575490617638912>");
  }

  if (msg.includes("reas")) {
    let wordsArray = [];
    let word = "";
    for (let letters of msg) {
      if (letters === " ") {
        wordsArray.push(word);
        word = "";
      } else {
        word += letters;
      }
    }

    const containsReas = wordsArray.some((word) => {
      return word === "reas";
    });

    if (containsReas || msg.endsWith("reas")) {
      message.channel.send(randomReasMessage());
      message.react("🤡");
    }
  }

  if (message.content.includes("david")) {
    message.channel.send(randomDavidMessage());
  }

  // if (message.content.startsWith("$")) {
  //   console.log(message.content.slice(1));
  // }
});

function randomReasMessage() {
  const random = Math.floor(Math.random() * reasQuotesArray.length);
  console.log(reasQuotesArray[random]);
  console.log(random);
  return reasQuotesArray[random];
}

function randomDavidMessage() {
  const random = Math.floor(Math.random() * davidQuotesArray.length);
  console.log(davidQuotesArray[random]);
  console.log(random);
  return davidQuotesArray[random];
}

client.on("channelCreate", function (channel) {
  channel.send(`${user.username} ${channel}`);
});

client.login(secret.token);

// cd desktop/projecthtml/discordbot
// node streetsterbot.js

/* If reas types clown sleeping 
 if (message.author.id === "960172164953284658") {
   message.react("🤡");
   message.react("🛌🏻");
 } 
 */
