const cards = document.querySelectorAll(".card");

const cardContainer = document.querySelector(".cards");
cardContainer.addEventListener("mousemove", (e) => {
	for (const card of cards) {
		// getting target dimension and position
		const rect = card.getBoundingClientRect();

		// position relative to card
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		// setting properties for dynamic mouse catching position
		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
});
