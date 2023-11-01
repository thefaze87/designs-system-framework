const menuBtn = document.querySelector('.burger');
const workflowContainer = document.querySelector('.main--workflow');

let elements = [menuBtn, workflowContainer];

function toggleClass(items, className) {
	items.forEach((item) => {
		return item.classList.toggle(`${className}`);
	});
}

menuBtn.addEventListener('click', (e) => {
	toggleClass(elements, 'open');
});
