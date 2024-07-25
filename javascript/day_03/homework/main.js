document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.querySelector("p");
    const words = paragraph.textContent.split(" ");
    const wordCount = words.length;

    // Display word count
    const wordCountDiv = document.createElement("div");
    wordCountDiv.textContent = `Số từ trong đoạn văn: ${wordCount}`;
    document.body.appendChild(wordCountDiv);

    // Highlight words with length >= 5 characters
    words.forEach(word => {
        if (word.replace(/[,.-]/g, "").length >= 5) {
            paragraph.innerHTML = paragraph.innerHTML.replace(new RegExp(`\\b${word}\\b`, "g"), `<span class="highlight">${word.replace(/[,.-]/g, "🤔")}</span>`);
        }
    });

    // Replace symbols
    paragraph.innerHTML = paragraph.innerHTML.replace(/,/g, "🤔").replace(/[.-]/g, "😲");

    // Add link to Facebook
    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com";
    facebookLink.textContent = "facebook";
    paragraph.insertAdjacentElement("afterend", facebookLink);
});