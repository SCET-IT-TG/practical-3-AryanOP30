import React, { useState } from "react";

function TweetInput() {
  const [tweet, setTweet] = useState("");
  const maxLength = 50;

  const isOverLimit = tweet.length > maxLength;
  const isDisabled = tweet.length === 0 || isOverLimit;

  return (
    <div>
      <h2>Tweet Input Component</h2>

      <textarea
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />

      <p style={{ color: isOverLimit ? "red" : "black" }}>
        {tweet.length}/{maxLength}
      </p>

      <button disabled={isDisabled}>Tweet</button>
    </div>
  );
}

export default TweetInput;
