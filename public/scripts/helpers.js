/**
 *  Renders all tweets in database
 */

const renderTweets = (tweetsDB) => {
  tweetsDB.forEach((tweet) => {
    const tweetHtml = createTweetElement(tweet);
    $(".display-tweets").prepend(tweetHtml);
  });
};

/**
 *  Sends a GET request to load tweets and calls renderTweets function
 */

const loadTweets = () => {
  $.get("/tweets")
    .then((data) => {
      renderTweets(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 *  Error checks the tweet text and returns an error object
 */

const errorCheck = (text) => {
  const tweet = text.slice(5);
  console.log(tweet.length)
  const error = {
    isError: true,
  };
  if (tweet.length > 140)
    error.message =
      "Your tweet is too long.  Please ensure your tweet is 140 characters or less.";
  else if (tweet.length === 0)
    error.message = "Your tweet is empty.  Please type at least one character.";
  else {
    error.isError = false;
  }

  return error;
};

/**
 *  Prevents XSS attacks
 */

const esc = (str) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

/**
 *  Generates and displays error HTML for new tweet form
 */

const displayErrorHtml = (error) => {
  const $errorMsg = $(".error-msg");
  $errorMsg.html("");
  $errorMsg.append(
    `<div class="err-wrap">
      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      <p>${error.message}</p>
    </div>`);
  $errorMsg.slideDown(500);
};
