AOS.init();
let realData = "";
let quotesdata ="";
let theAuthor ="";
const quotes =document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");

const tweetNow = ()=>{
    let tweetPost =`https://twitter.com/intent/tweet?text=${quotesdata.text}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let ranNum = Math.floor(Math.random() * 16);
    quotesdata = realData[ranNum];

    quotes.innerHTML =`${quotesdata.text}`;

    theAuthor = realData[ranNum].author;
    if(theAuthor == "Yogi Berra"){ 
        author.innerHTML = `${theAuthor}`;
    }
    else if(theAuthor == "type.fit"){ 
        author.innerHTML = `${"unknown"}`;
    }
     else {
    const n = 10
    const writer= theAuthor.slice(0 , -n);
    author.innerHTML = `${writer}`;
}
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData)
        getNewQuotes();
    } catch (error) { }
};

tweet.addEventListener("click" , tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();

