const cards = document.querySelectorAll(".cards");

const handleMouseMove = (e) => {
	const target = e.target;

	// getting target dimension and position
	const rect = target.getBoundingClientRect();

	// position relative to card
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	// setting properties for dynamic mouse catching position
	target.style.setProperty("--mouse-x", `${x}px`);
	target.style.setProperty("--mouse-y", `${y}px`);
};

cards.forEach((card) => {
	card.addEventListener("mousemove", handleMouseMove);
});

const cardContainer = document.querySelector(".cards");
cardContainer.addEventListener("mousemove", (e) => {
	let index = 1;
	for (const card of document.querySelectorAll(".card")) {
		// getting target dimension and position
		const rect = card.getBoundingClientRect();

		// position relative to card
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		console.log("card " + index++);
		console.log(
			`clientX: ${e.clientX} --- clientY: ${e.clientY} --- x: ${x} --- y: ${y}`
		);

		// setting properties for dynamic mouse catching position
		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
});
