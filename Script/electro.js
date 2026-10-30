document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#toggle-button");
    const hiddenMessage = document.querySelector("#hidden-message");

    if (toggleButton && hiddenMessage) {
        toggleButton.addEventListener("click", () => {
            hiddenMessage.classList.toggle("hidden");
        });
    } else {
        console.error("No se encontraron los elementos #toggle-button o #hidden-message");
    }
});