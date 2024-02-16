import consumer from "channels/consumer"

consumer.subscriptions.create("MessageChannel", {
    connected() {
        console.log("Message Channel Connected")
    },

    disconnected() {
        // Called when the subscription has been terminated by the server
    },

    received(data) {
        const mainContainer = document.getElementsByClassName("msger-chat")[0];
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("msg", "left-msg");
        const msgImgDiv = document.createElement("div");
        msgImgDiv.classList.add("msg-img");
        msgImgDiv.style.backgroundImage = "url(https://image.flaticon.com/icons/svg/327/327779.svg)";
        const msgBubbleDiv = document.createElement("div");
        msgBubbleDiv.classList.add("msg-bubble");
        const msgInfoDiv = document.createElement("div");
        msgInfoDiv.classList.add("msg-info");
        const msgInfoNameDiv = document.createElement("div");
        msgInfoNameDiv.classList.add("msg-info-name");
        msgInfoNameDiv.textContent = data.message.user_email || "";
        const msgInfoTimeDiv = document.createElement("div");
        msgInfoTimeDiv.classList.add("msg-info-time");
        msgInfoTimeDiv.textContent = data.message.created_at || "";
        msgInfoDiv.appendChild(msgInfoNameDiv);
        msgInfoDiv.appendChild(msgInfoTimeDiv);
        const msgTextDiv = document.createElement("div");
        msgTextDiv.classList.add("msg-text");
        msgTextDiv.textContent = data.message.context || "";
        msgBubbleDiv.appendChild(msgInfoDiv);
        msgBubbleDiv.appendChild(msgTextDiv);
        messageContainer.appendChild(msgImgDiv);
        messageContainer.appendChild(msgBubbleDiv);
        mainContainer.appendChild(messageContainer);
    }
});
