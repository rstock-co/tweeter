/**
 *  Counts the number of remaining characters in a tweet
 *  Expands `textarea` box height if tweet is more than one line
 *  Turns the counter text red if user exceeds 140 character limit
 */

  $(() => {
    const $textArea = $("textarea");
     
    $textArea.on("input", function () {
      const input = $(this).val();
      const numChars = input.length;
      let remainingChars = 140 - numChars;
      const counter = $(this).parent().find('output[name="counter"]');
      counter.html(remainingChars);

      const scrollHeight = $textArea.prop("scrollHeight");
      $("#tweet-text").css("height", `${scrollHeight + 5}px`);

      if (remainingChars < 0) {
        counter.addClass("red");
      } else {
        counter.removeClass("red");
      }
    });
  });