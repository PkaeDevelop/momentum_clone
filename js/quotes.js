const quotes = [
    {
        quote: "Stay hungry, stay foolish.", // 항상 배고프고, 항상 어리석게.
        autor: "Steve Jobs",                 // 스티븐 잡스
    },
    {
        quote: "Life is what happens when you're busy making other plans.", // 인생이란 다른 계획을 세우느라 바쁠 때 벌어지는 일이다.
        autor: "John Lennon",                                           // 존 레논
    },
    {
        quote: "Be yourself; everyone else is already taken.", // 자신답게 살아라; 다른 사람은 이미 다 존재한다.
        autor: "Oscar Wilde",                                 // 오스카 와일드
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", // 두 가지는 무한하다: 우주와 인간의 어리석음; 그리고 우주에 대해서는 확실치 않다.
        autor: "Albert Einstein", // 알베르트 아인슈타인
    },
    {
        quote: "You miss 100% of the shots you don't take.", // 시도하지 않으면 100% 놓친다.
        autor: "Wayne Gretzky", // 웨인 그레츠키
    },
    {
        quote: "That which does not kill us makes us stronger.", // 우리를 죽이지 않는 것은 우리를 더 강하게 만든다.
        autor: "Friedrich Nietzsche", // 프리드리히 니체
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.", // 진실을 말하면 아무것도 기억할 필요가 없다.
        autor: "Mark Twain", // 마크 트웨인
    },
    {
        quote: "The best way to predict the future is to invent it.", // 미래를 예측하는 가장 좋은 방법은 그것을 발명하는 것이다.
        autor: "Alan Kay", // 앨런 케이
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", // 결국 우리는 적의 말이 아니라 친구들의 침묵을 기억할 것이다.
        autor: "Martin Luther King Jr.", // 마틴 루터 킹 주니어
    },
    {
        quote: "Where there is love there is life.", // 사랑이 있는 곳에 삶이 있다.
        autor: "Mahatma Gandhi", // 마하트마 간디
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.autor;
