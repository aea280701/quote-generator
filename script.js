const quote = document.getElementById("quote");
const author = document.getElementById("author");
const twitterBtn = document.querySelector(".b1"); 
const newQuoteBtn = document.querySelector(".b2"); 
let data = [];

//random quote 
function getRandQuote() {
    const randQoute = data[Math.floor(Math.random() * data.length)]
    //checking whether there is an author or not
    if(!randQoute.author) {
        author.textContent = "Anonymous";
    } else {
        author.textContent = randQoute.author;
    }
    //checking the quote length to change the font size
    if(randQoute.text.length > 100) {   
        quote.classList.add("long-quote")
    } else {
        quote.classList.remove("long-quote")
    }
    quote.textContent = randQoute.text;
}
//tweeting
function tweet() {
    url = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
    window.open(url, "_blank")
}

// getting the quote from the api
async function getQuote() {
    const url = "https://jacintodesign.github.io/quotes-api/data/quotes.json"
    try{
        const res = await fetch(url)
        data = await res.json()
        getRandQuote()
    } catch (error) {
        //error
    }
}


newQuoteBtn.addEventListener("click", getRandQuote)
twitterBtn.addEventListener("click", tweet)
getQuote()

