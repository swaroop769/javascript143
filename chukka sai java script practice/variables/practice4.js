// Create card element
const card = document.createElement("div");
card.classList.add("card");

// Create header
const header = document.createElement("div");
header.classList.add("header");

const title = document.createElement("span");
title.classList.add("title");
title.textContent = "Card Title";

const copyBtn = document.createElement("button");
copyBtn.classList.add("copy");
copyBtn.textContent = "📋";

// Append header elements
header.appendChild(title);
header.appendChild(copyBtn);

// Create footer
const footer = document.createElement("div");
footer.classList.add("footer");

const code = document.createElement("div");
code.classList.add("code");

const icon = document.createElement("span");
icon.classList.add("icon");
icon.textContent = "💻";

const text = document.createElement("span");
text.classList.add("text");
text.textContent = 'console.log("Hello");';

// Append footer elements
code.appendChild(icon);
code.appendChild(text);
footer.appendChild(code);

// Append header and footer to card
card.appendChild(header);
card.appendChild(footer);

// Add to the container
document.querySelector(".container").appendChild(card);