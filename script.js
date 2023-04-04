const quotes = [
  {
    quote:
      "A sabedoria começa na reflexão. Reflete e serás sábio. Age e serás feliz.",
    author: "Buda",
  },
  {
    quote:
      "A sabedoria não nos é dada. É preciso descobri-la por nós mesmos, depois de uma viagem que ninguém nos pode poupar ou fazer por nós.",
    author: "Marcel Proust",
  },
  {
    quote: "Não é sábio aquele que sabe onde está o tesouro, mas sim aquele que trabalha e o faz render.",
    author: "Alexandre o Grande",
  },
  {
    quote:
      "A sabedoria é o antídoto contra as coisas tristes da vida.",
    author: "Pitágoras",
  },
  {
    quote:
      "A sabedoria é saber o que fazer, a habilidade é saber como fazer, a virtude é fazer.",
    author: "David Starr Jordan",
  },
  {
    quote: "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    author: "Sócrates",
  },
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

function newQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.innerHTML = randomQuote.quote;
  authorEl.innerHTML = `- ${randomQuote.author}`;
}

newQuote();

setInterval(newQuote, 12000);
