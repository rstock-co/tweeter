$(() => {
  
  const $errorMsg = $(".error-msg");
  const $composeButton = $(".fa-angles-down");
  const $toggleButton = $(".fa-circle-chevron-up");
  const $counter = $(".counter");
  const $textBox = $("#tweet-text");

  $errorMsg.hide();
  $toggleButton.hide();

  /**
   * Loads tweets from DB via GET: /tweets
   */

  loadTweets();

  /**
   * Initializes event handler for POST: /tweets
   * Checks for errors
   */
   
  $(".tweet-form").on("submit", function (event) {
    event.preventDefault();

    const error = errorCheck($counter.val());

    if (error === '') {
      $errorMsg.slideUp(500);
      const $text = $(this).serialize();
      $.post("/tweets", $text).then(() => {
        $textBox.val('').css("height","40px");
        $counter.val(140);
        $(".display-tweets").empty();
        loadTweets();
      });
      return;
    }
    displayErrorHtml(error);
  });

  /**
   * (STRETCH): Toggle Form Show/Hide via Compose button
   * Makes the form toggle between show/hide when the botton is clicked (animated)
   */

   $composeButton.on("click", () => {
    $(".tweet-entry").slideToggle();
    $textBox.focus();
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
