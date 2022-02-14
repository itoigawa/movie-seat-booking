const container = document.querySelector(".container");
const seats = container.querySelectorAll(".seat");

seats.forEach(seat => {
	seat.addEventListener("click", () => {
		if(seat.classList.contains("selected") === false) {
			seat.classList.add("selected");
		} else {
			seat.classList.remove("selected");
		}
	})
})