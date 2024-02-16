import consumer from "channels/consumer"

consumer.subscriptions.create("MessageChannel", {
    connected() {
        console.log("Message Channel Connected")
    },

    disconnected() {
        // Called when the subscription has been terminated by the server
    },

    received(data) {
        const emailParagraph = document.createElement("p");
        const emailText = document.createTextNode(data.message.user_email || "");
        const emailBold = document.createElement("b");
        emailBold.appendChild(emailText);
        emailParagraph.appendChild(emailBold);

        const contextParagraph = document.createElement("p");
        const contextText = document.createTextNode(data.message.context || "");
        contextParagraph.appendChild(contextText);

        const messageContainer = document.getElementById("messageContainer");

        messageContainer.appendChild(emailParagraph);
        messageContainer.appendChild(contextParagraph);
        messageContainer.appendChild('...........................');
    }
});
