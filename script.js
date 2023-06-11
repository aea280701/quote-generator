let data = []

//random quote 
function getRandQuote() {
    const randQoute = data[Math.floor(Math.random() * data.length)]
    console.log(randQoute)
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

getQuote()

