const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it - Estee Lauder',
    },
    {
        quote: 'Do not try to be original, just try to be good. - Paul Rand',
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great - John D. Rockefeller',
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward. - Martin Luther King Jr',

    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas Edison',
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be - REid Hoffman',
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations - Tim O Reilly',
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen - Wayne Huizenga',
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something - SEth Godin'
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse. - Jim Rohn'
    }
];

const quote = document.querySelector("#quote div:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;