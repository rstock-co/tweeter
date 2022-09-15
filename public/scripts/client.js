$(() => {
  /**
   * Loads tweets from DB via GET: /tweets
   */

  loadTweets();
  $(".error-msg").hide();

  /**
   * Initializes event handler for POST: /tweets
   */

  $(".tweet-form").on("submit", function (event) {
    event.preventDefault();
    const $text = $(this).serialize();
    const errorObject = errorCheck($text);

    if (!errorObject.isError) {
      $(".error-msg").slideUp(500);
      $.post("/tweets", $text).then(() => {
        $(".display-tweets").empty();
        loadTweets();
      });
      return; 
    }
    errorHtml(errorObject);
  });
});
