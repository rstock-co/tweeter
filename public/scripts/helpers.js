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
 *  Error checks the tweet text and returns an error message
 */

  const errorCheck = (chars) => {
    if (Number(chars) < 0) {
      return "Your tweet is too long.  Please ensure your tweet is 140 characters or less.";
    }
    if (Number(chars)  === 140) {
      return "Your tweet is empty.  Please type at least one character.";
    }
    return '';
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
      <p>${error}</p>
    </div>`);
  $errorMsg.slideDown(500);
};
