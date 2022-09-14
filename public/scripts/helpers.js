/**
 *  Loops through all tweets in DB and renders each one
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
  const error = {
    isError: true,
  };
  if (tweet.length > 140)
    error.type =
      "Your tweet is too long.  Please use the counter to ensure your tweet is 140 characters or less.";
  else if (tweet.length === 0)
    error.type = "Your tweet is empty.  Please type at least one character.";
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
