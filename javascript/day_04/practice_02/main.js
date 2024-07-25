const btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", () =>{
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("text").innerText = randomQuote;
})

// document.getElementById("btn-1").addEventListener("click", function() {
//     const quotes = [
//         "The only way to do great work is to love what you do. - Steve Jobs",
//         "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
//         "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
//     ];

//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     document.getElementById("text").innerText = randomQuote;
// });

// Function to change color when "Change color" button is clicked
document.getElementById("btn-2").addEventListener("click", function() {
    document.getElementById("text").style.color = "blue";
});

// Function to change background when "Change background" button is clicked
document.getElementById("btn-3").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgray";
});

