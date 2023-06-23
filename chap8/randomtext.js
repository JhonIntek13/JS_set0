function displayRandomSentence() {
  const sentences = [
    "Hello, world!",
    "This is a random sentence.",
    "Today is a beautiful day.",
    "Coding is fun!",
    "This is an example.",
  ];

  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];
  console.log(randomSentence);
}

// Set the interval to execute the function every minute (60,000 milliseconds)
setInterval(displayRandomSentence, 60000);
