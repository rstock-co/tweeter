"use strict";

const Chance      = require("chance"),
      chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["https://i.imgur.com/gFg9yfI.png","https://i.imgur.com/3rEiZ6l.png","https://i.imgur.com/Zj5pgKT.png","https://i.imgur.com/1EXwmD0.png","https://i.imgur.com/AJ57oZI.png","https://i.imgur.com/wo5Vh5V.png","https://i.imgur.com/Uhcthjx.png","https://i.imgur.com/f1kpGE0.png"],
      Male: ["https://i.imgur.com/J0Kl9bE.png","https://i.imgur.com/qNNIcnS.png","https://i.imgur.com/mcuPQPu.png","https://i.imgur.com/V0vij1v.png","https://i.imgur.com/KtEGwaD.png","https://i.imgur.com/ttnWQXj.png","https://i.imgur.com/7pxGel2.png","https://i.imgur.com/OH424M8.png"]
    
    }
    
    const avatarArray = avatars[gender]
    const userAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)]
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};