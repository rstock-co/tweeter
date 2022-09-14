$(() => {
  /**
   * Load tweets from DB via GET: /tweets
   */

  loadTweets();

  /**
   * Initialize event handler for POST: /tweets
   */

  $(".tweet-form").on("submit", function (event) {
    event.preventDefault();
    const $text = $(this).serialize();
    const errorObject = errorCheck($text);
    const error = errorObject.isError;

    if (!error) {
      $.post("/tweets", $text).then(() => {
        $(".display-tweets").empty();
        loadTweets();
      });
      console.log("Success: exiting event handler");
      return;
    }

    alert(errorObject.type);
  });
});
