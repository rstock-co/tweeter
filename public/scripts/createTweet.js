/**
 *  Creates a tweet's HTML from the tweet's data object
 */

const createTweetElement = (data) => {
    const { name, avatars, handle } = data.user;
    const text = data.content.text;
    const created = data.created_at;
  
    const tweetHTML = `<article class="tweet-post">
          <header class="tweet-post-header">
            <div class="avatar-wrapper">
              <img class="avatar" src=${avatars}></img>
              <label class="user-name">${name}</label>
            </div>
            <div>
              <label class="user-handle">${handle}</label>
            </div>
          </header>
          <div class="tweet-post-body">
            <p>${esc(text)}</p>
          </div>
          <footer class="tweet-post-footer">
            <div class="date">
              <label>${timeago.format(created)}</label>
            </div>
            <div class="icon-wrapper">
              <i class="fa fa-flag"></i>
              <i class="fa fa-retweet"></i>
              <i class="fa fa-heart"></i>
            </div>
          </footer>
        </article>`;
    return tweetHTML;
  };