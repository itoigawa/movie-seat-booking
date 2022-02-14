const container = document.querySelector(".container");
const seats = container.querySelectorAll(".seat");
const select = document.querySelector("select");
let selectedNum = 0;
let movieFee = 10;
let totalPrice = 0;
const text = document.querySelector(".text");
const count = text.firstElementChild;
const total = text.lastElementChild;

select.onchange = () => {
	movieFee = select.value;
	count.textContent = selectedNum;
	total.textContent = selectedNum * movieFee;	
}

seats.forEach(seat => {
	seat.addEventListener("click", () => {

		if(!seat.classList.contains("selected") && !seat.classList.contains("occupied")) {
			seat.classList.add("selected");
			selectedNum = [...container.querySelectorAll(".seat.selected")].length;
			count.textContent = selectedNum;
			total.textContent = selectedNum * movieFee;
		} else if(seat.classList.contains("selected")) {
			seat.classList.remove("selected");
			selectedNum = [...container.querySelectorAll(".seat.selected")].length;
			count.textContent = selectedNum;
			total.textContent = selectedNum * movieFee;
		}

	})
})