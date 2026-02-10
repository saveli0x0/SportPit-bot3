const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".product-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
