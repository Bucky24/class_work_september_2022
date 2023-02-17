const userInput = "You can contact me at myemail@domain.com or at my other email emailhere@domain.com";

const filteredUserInput = userInput.replace(/([a-zA-Z0-9_]+@[a-zA-Z0-9.]+)/g, "<redacted>");

console.log(filteredUserInput);