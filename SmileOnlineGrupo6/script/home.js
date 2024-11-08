document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// Abrir y cerrar el chatbot
function openChatbot() {
    document.getElementById("chatbot").style.display = "block";
}

function closeChatbot() {
    document.getElementById("chatbot").style.display = "none";
}

function sendMessage(event) {
    if (event.key === "Enter") {
        const message = document.getElementById("chatInput").value;
        const chatbotMessages = document.getElementById("chatbotMessages");
        const userMessage = document.createElement("p");
        userMessage.textContent = message;
        chatbotMessages.appendChild(userMessage);
        document.getElementById("chatInput").value = "";
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
}