let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let button = document.querySelector("#new-quote");


const quotes = [{
    quote: `"The best way to find yourself is to lose ypurself in  the service of others."`,
    person: `Mahatma Gandhi`
},{
    quote:`"If you can dream it, you can achieve it"`,
    person: `Zig Ziglar`
},{
    quote: `“Success means having a lot of friends who care about your success.”`,
    person: `Oscar Wilde`
},{
    quote: `"We cannot solve problems with the kind of thinking we employed when we came up with them,"`,
    person: `Albert Einsten`
},{
    quote: `"Learn as if you will live forever, live like you will die tomorrow ."`,
    person: `Mahatma Gandhi`
},{
    quote: `"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."`,
    person: `Mark Twain`
},{
    quote: `"When you change your thoughts, remember to also change your world."`,
    person: `Noman Vincent Peale`
},{
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston S. Churchill`
},{
    quote: `"Either you run the day or the day runs you."`,
    person: `Jim Rohn`
},{
    quote: `"I’m a greater believer in luck, and I find the harder I work the more I have of it."`,
    person: `Thomas Jefferson`
}]


button.addEventListener("click",function(){
    let randomNumber = Math.floor(Math.random()*11);
    quote.innerHTML = `${quotes[randomNumber].quote}`
    
     person.innerHTML = `${quotes[randomNumber].person}`
})