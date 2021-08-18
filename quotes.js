const quoteSpace = document.querySelector("#quoteSpace");
const authorSpace = document.querySelector("#authorSpace");

const quotes = [
  {
    quote: "Time Waits for No One",
    author: "The Girl Who Leapt Through Time",
  },
  { quote: "bbb", author: "222" },
  { quote: "ccc", author: "333" },
  { quote: "ddd", author: "444" },
  { quote: "eee", author: "555" },
  { quote: "fff", author: "666" },
  { quote: "ggg", author: "777" },
  { quote: "hhh", author: "888" },
  { quote: "iii", author: "999" },
  { quote: "jjj", author: "000" },
];
// quotes 랜덤 출력
const randomNumberQuotes = Math.floor(Math.random() * quotes.length);
console.log(randomNumberQuotes);
console.log(quotes[randomNumberQuotes].quote);
console.log(quotes[randomNumberQuotes].author);
quoteSpace.innerHTML = quotes[randomNumberQuotes].quote;
authorSpace.innerHTML = quotes[randomNumberQuotes].author;
