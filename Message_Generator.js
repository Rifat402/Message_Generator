// ARRAY OF QUOTES

const QUOTES = [
{
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance you must keep moving."
},
{
    author: "Isaac Newton",
    text: "If I have seen further it is by standing on the shoulders of Giants."
},
{
    author: "Yoda",
    text: "Do, or do not. There is no try."
},
{
    author: "Mahatma Gandhi",
    text: "Be the change that you wish to see in the world."
},
{
    author: "Friedrich Nietzsche",
    text: "He who has a why to live can bear almost any how."
},
{
    author: "Mark Twain",
    text: "The two most important days in your life are the day you are born and the day you find out why."
},
{
    author: "Oscar Wilde",
    text: "To live is the rarest thing in the world. Most people exist, that is all."
},
{
    author: "Steve Jobs",
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
},
{
    author: "Winston Churchill",
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts."
},
{
    author: "Maya Angelou",
    text: "You will face many defeats in life, but never let yourself be defeated."
}
]
;

// MAIN PROGRAM

const gen_quote = (q) => {
    quote = Math.floor(Math.random() * q.length);
    return q[quote]["text"] + "\n\t" + q[quote]["author"];
}

console.log(gen_quote(QUOTES))