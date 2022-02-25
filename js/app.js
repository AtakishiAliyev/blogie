// * Custom Select Box
const customSelectBtn = document.querySelector(".custom-select");
const selectArrow = document.querySelector(".custom-select svg");
const selectDropdown = document.querySelector(".select-dropdown");
const customSelectValue = document.querySelector(".selected-option");
const customSelectElement = document.querySelectorAll(".dropdown li");

for (let i = 0; i < customSelectElement.length; i++) {
    customSelectElement[i].addEventListener("click", () => {
        selectValue = customSelectElement[i].getAttribute("data-value");
        customSelectValue.innerHTML = selectValue;
    });
}

customSelectBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    selectDropdown.classList.toggle("d-block");
    selectArrow.classList.toggle("rotate-180");
});

window.onclick = function () {
    selectDropdown.classList.remove("d-block");
    selectArrow.classList.remove("rotate-180");
};