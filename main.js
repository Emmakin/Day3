const btnE1 = document.getElementById('btn');
const quoteBox = document.getElementById('quoteBox');
const nameBox = document.getElementById('nameBox');

const quotes = [
    {quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
    name:"Mother Teresa"},
    {quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    name:"Robert Louis Stevenson"},
    {quote:"The future belongs to those who believe in the beauty of their dreams",
    name:"Eleanor Roosevelt"},
    {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name:"Nelson Mandela"},
    {quote:"The way to get started is to quit talking and begin doing.",
    name:"Walt Disney"},
    {quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    name:"Oprah Winfrey"},
    {quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    name:"James Cameron"},
    {quote:"Life is what happens when you're busy making other plans.",
    name:"John Lennon"},
    {quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    name:"Benjamin Franklin"},
    {quote:"It is during our darkest moments that we must focus to see the light.",
    name:"Aristotle"},
    {quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    name:"Ralph Waldo Emerson"},
    {quote:"You will face many defeats in life, but never let yourself be defeated.",
    name:"Maya Angelou"},
    {quote:"Never let the fear of striking out keep you from playing the game.",
    name:"Babe Ruth"},
    {quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    name:"Oscar Wilde"},
    {quote:"The only impossible journey is the one you never begin.",
    name:"Tony Robbins"},
    {quote:"In this life we cannot do great things. We can only do small things with great love.",
    name:"Mother Teresa"},
    {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    name:"Steve Jobs"},
    {quote:"Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you",
    name:"Zig Ziglar"},
    {quote:"Success usually comes to those who are too busy to be looking for it.",
    name:"Henry David Thoreau"},
    {quote:"An expert is a person who has made all the mistakes that can be made in a very narrow field.",
    name:"Neils Bohr"},
    {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name:" Albert Einstein"},
    {quote:"A man who dares to waste one hour of time has not discovered the value of life.",
    name:"Charles Darwin"},
    {quote:"If I have seen further it is by standing on the shoulders of Giants.",
    name:"Isaac Newton"},
    {quote:"If you wish to make an apple pie from scratch, you must first invent the universe.",
    name:"Carl Sagan, Cosmos"}
]

btnE1.addEventListener('click', function createQuote(){
    const eachQuote = quotes[Math.floor(Math.random() * quotes.length)]
        let a = eachQuote.quote
        let b = eachQuote.name
        quoteBox.innerText = a
        nameBox.innerText = b
});
