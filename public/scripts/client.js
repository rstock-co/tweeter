$(() => {
  
  const $errorMsg = $(".error-msg");
  const $composeButton = $(".fa-angles-down");
  const $toggleButton = $(".fa-circle-chevron-up");
  const $form = $(".tweet-entry");
  $errorMsg.hide();
  $toggleButton.hide();

  /**
   * Loads tweets from DB via GET: /tweets
   */

  loadTweets();

  /**
   * Initializes event handler for POST: /tweets
   */

  $(".tweet-form").on("submit", function (event) {
    event.preventDefault();
    const $text = $(this).serialize();
    const errorObject = errorCheck($text);

    if (!errorObject.isError) {
      $errorMsg.slideUp(500);
      $.post("/tweets", $text).then(() => {
        $(".display-tweets").empty();
        loadTweets();
      });
      return;
    }
    displayErrorHtml(errorObject);
  });

  /**
   * (STRETCH): Toggle Form Show/Hide via Compose button
   * Makes the form toggle between show/hide when the botton is clicked (animated)
   */

   $composeButton.on("click", () => {
    $form.slideToggle();
    $("#tweet-text").focus();
  });

  /**
   * (STRETCH): Add 2nd Toggle Button
   * Allows user to jump back to the top of page and auto enables textarea
   * Referenced: https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
   */
  
  let lastScrollTop = 0;
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      $toggleButton.show().fadeIn("slow");
    } else {
      $toggleButton.hide().fadeOut("slow");
    }
    lastScrollTop = scrollTop;
  });

  $toggleButton.on("click", () => {
    $('html, body').animate({scrollTop: '0px'}, 0);
  });
});
