const toName = document.getElementById("toName");
const fromName = document.getElementById("fromName");
const message = document.getElementById("message");
const dateInput = document.getElementById("date");
const theme = document.getElementById("theme");

const toText = document.getElementById("toText");
const fromText = document.getElementById("fromText");
const msgText = document.getElementById("msgText");
const dateText = document.getElementById("dateText");
const card = document.getElementById("card");
const bgEmoji = document.getElementById("bgEmoji");

const emojiMap = {
  "theme-love": "❤️",
  "theme-birthday": "🎂",
  "theme-anniversary": "💍",
  "theme-festival": "🎉"
};

function updateCard(){
  toText.textContent = "Dear " + (toName.value || "❤️");
  fromText.textContent = "— " + (fromName.value || "From");
  msgText.textContent = message.value || "Your message will appear here";
  dateText.textContent = dateInput.value;

  card.className = "card " + theme.value;
  bgEmoji.textContent = emojiMap[theme.value] || "❤️";

  updateURL();
}

[toName, fromName, message, dateInput, theme].forEach(el=>{
  el.addEventListener("input", updateCard);
});

/* Download card as image */
function downloadCard(){
  html2canvas(card).then(canvas=>{
    const link = document.createElement("a");
    link.download = "greeting-card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

/* Shareable link */
function updateURL(){
  const params = new URLSearchParams({
    to: toName.value,
    from: fromName.value,
    msg: message.value,
    date: dateInput.value,
    theme: theme.value
  });
  history.replaceState(null,"","?"+params.toString());
}

function loadFromURL(){
  const p = new URLSearchParams(location.search);
  toName.value = p.get("to") || "";
  fromName.value = p.get("from") || "";
  message.value = p.get("msg") || "";
  dateInput.value = p.get("date") || "";
  theme.value = p.get("theme") || "theme-love";
  updateCard();
}

function copyLink(){
  navigator.clipboard.writeText(location.href);
  alert("Shareable link copied!");
}

loadFromURL();
