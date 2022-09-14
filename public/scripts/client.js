/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: "Johnny Ramos",
      avatars: "https://i.imgur.com/qNNIcnS.png",
      handle: "@JonRa",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1662996206087,
  },
  {
    user: {
      name: "Suzanne Shier",
      avatars: "https://i.imgur.com/Zj5pgKT.png",
      handle: "@Suzy",
    },
    content: {
      text: "Lol what a day, can't believe I backed into a police station :(",
    },
    created_at: 1663082606087,
  },
  {
    user: {
      name: "DJ Zz",
      avatars: "https://i.imgur.com/J0Kl9bE.png",
      handle: "@DJZahoriX1",
    },
    content: {
      text: "Listen to this track I just dropped: https://tcrn.ch/3yJH0vv",
    },
    created_at: 1663082606087,
  },
  {
    user: {
      name: "Rebekah Jacobs",
      avatars: "https://i.imgur.com/3rEiZ6l.png",
      handle: "@RebeJay",
    },
    content: {
      text: "I just finished the first 3 episodes of Rings of Power!! Must see!!",
    },
    created_at: 1663082606087,
  },
  {
    user: {
      name: "Jen Rathmussen",
      avatars: "https://i.imgur.com/gFg9yfI.png",
      handle: "@Jenner",
    },
    content: {
      text: "Feeling amazing, just got back from Austria last night!",
    },
    created_at: 1663082606087,
  },
];

const createTweetElement = (data) => {
  const { name, avatars, handle } = data.user;
  const text = data.content.text;
  const created = data.created_at;

  const tweetHTML = `<article class="tweet-post">
      <header class="tweet-post-header">
        <div class="avatar-wrapper">
          <img class="avatar" src=${avatars}></img>
          <label class="user-name">${name}</label>
        </div>
        <div>
          <label class="user-handle">${handle}</label>
        </div>
      </header>
      <div class="tweet-post-body">
        <p>${text}</p>
      </div>
      <footer class="tweet-post-footer">
        <div class="date">
          <label>${created}</label>
        </div>
        <div class="icon-wrapper">
          <i class="fa fa-flag"></i>
          <i class="fa fa-retweet"></i>
          <i class="fa fa-heart"></i>
        </div>
      </footer>
    </article>`;
  return tweetHTML;
};

const renderTweets = (tweetsDB) => {
  tweetsDB.forEach((tweet) => {
    const tweetHtml = createTweetElement(tweet);
    $(".display-tweets").prepend(tweetHtml);
  });
};

$(() => {
  renderTweets(data);
});
