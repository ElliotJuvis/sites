document.addEventListener("DOMContentLoaded", function() {
    // Criação dos elementos HTML
    const body = document.body;

    const title = document.createElement("h1");
    title.textContent = "Access Denied!";
    body.appendChild(title);

    const message1 = document.createElement("p");
    message1.textContent = "We're sorry, but you do not have the necessary permissions to view this page.";
    body.appendChild(message1);

    const message2 = document.createElement("p");
    message2.textContent = "If you believe this is a mistake, please contact the administrator or try again later.";
    body.appendChild(message2);

    const message3 = document.createElement("p");
    message3.textContent = "Thank you for your understanding.";
    body.appendChild(message3);

    // Criação dos textos ocultos
    const hiddenText1 = document.createElement("p");
    hiddenText1.textContent = "badgirl";
    hiddenText1.classList.add("hidden-text");
    body.appendChild(hiddenText1);

    const hiddenText2 = document.createElement("p");
    hiddenText2.textContent = "whenwillshebeback?";
    hiddenText2.classList.add("hidden-text2");
    body.appendChild(hiddenText2);

    // Adicionando o estilo diretamente no documento
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            font-family: "Times New Roman", serif;
            background-color: white;
            color: black;
            margin: 0;
            padding: 10px;
        }
        .hidden-text {
            position: fixed;
            right: 10px;
            bottom: 30px;
            color: white;
        }
        .hidden-text2 {
            position: fixed;
            right: 10px;
            bottom: 10px;
            color: white;
        }
    `;
    document.head.appendChild(style);
});
