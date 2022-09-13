$(() => {
  /**
   *  Character Counter
   *  - Counts the number of remaining characters in tweet
   *  - Expands `textarea` box height if tweet is more than one line
   *  - Turns the counter red if user exceeds 140 character limit
   */

  $("textarea").on("input", function () {
    const input = $(this).val();
    const numChars = input.length;
    let remainingChars = 140 - numChars;
    const counter = $(this).parent().find('output[name="counter"]');
    counter.html(remainingChars);

    const scrollHeight = $("textarea").prop("scrollHeight");
    $("#tweet-text").css("height", `${scrollHeight + 5}px`);

    if (remainingChars < 0) {
      counter.addClass("red");
    } else {
      counter.removeClass("red");
    }
  });
});
