/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
          <label>${timeago.format(created)}</label>
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

const loadTweets = () => {
  $.get("/tweets")
    .then((data) => {
      renderTweets(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const errorCheck = (text) => {
  const tweet = text.slice(5);
  const error = {
    isError: true,
  };
  if (tweet.length > 140) error.type = "Your tweet is too long.  Please use the counter to ensure your tweet is 140 characters or less.";
  else if (tweet.length === 0) error.type = "Your tweet is empty.  Please type at least one character.";
  else {
    error.isError = false;
  }

  return error;
};

$(() => {
  /**
   * GET: /tweets
   */

  loadTweets();

  /**
   * POST: /tweets
   */

  $(".tweet-form").on("submit", function (event) {
    event.preventDefault();
    const $data = $(this).serialize();
    const errorObject = errorCheck($data);
    const error = errorObject.isError;

    if (!error) {
      $.post("/tweets", $data).then(() => {
        $(".display-tweets").empty();
        loadTweets();
      });
      console.log("Success: exiting event handler");
      return;
    }

    alert(errorObject.type);
  });
});
