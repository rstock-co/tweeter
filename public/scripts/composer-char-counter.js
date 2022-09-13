$(() => {
  /**
   *  Character Counter
   *  Counts the number of remaining characters in tweet
   *  Expands `textarea` box height if tweet is more than one line
   */

  $("textarea").on("input", function () {
    const input = $(this).val();
    const numChars = input.length;
    let remainingChars = 140 - numChars;
    const counter = $(this).parent().find('output[name="counter"]');
    counter.html(remainingChars);

    const scrollHeight = $("textarea").prop("scrollHeight");
    if (scrollHeight === 35) {
      $("#tweet-text").css("height", "40px");
    } else {
      $("#tweet-text").css("height", `${scrollHeight + 5}px`);
    }
  });
});
