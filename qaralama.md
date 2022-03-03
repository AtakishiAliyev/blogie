// const customSelectBtn = document.querySelector(".custom-select");
// const selectArrow = document.querySelector(".custom-select svg");
// const selectDropdown = document.querySelector(".select-dropdown");
// const customSelectValue = document.querySelector(".selected-option");
// const customSelectElement = document.querySelectorAll(".dropdown li");

// for (let i = 0; i < customSelectElement.length; i++) {
//     customSelectElement[i].addEventListener("click", () => {
//         selectValue = customSelectElement[i].getAttribute("data-value");
//         customSelectValue.innerHTML = selectValue;
//     });
// }

// customSelectBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     selectDropdown.classList.toggle("d-block");
//     selectArrow.classList.toggle("rotate-180");
// });

// window.onclick = function () {
//     selectDropdown.classList.remove("d-block");
//     selectArrow.classList.remove("rotate-180");
// };


<!-- <style>
        body {
            background-color: #EDF1F7;
        }

        .test {
            width: 100%;
            margin: 89px 0 0;
            background-color: white;
            padding: 16px 20px;
            display: flex;
            overflow-y: scroll;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            line-height: 20px;
        }

        .test::-webkit-scrollbar {
            display: none;
        }

        .box {
            padding: 6px 16px;
            border: 1px solid #2E3A59;
            background-color: transparent;
            color: #2E3A59;
            cursor: pointer;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            white-space: nowrap;
        }

        .box.active {
            background-color: #2E3A59;
            color: white;
        }

        .test > .box + .box {
            margin-left: 8px;
        }
    </style>

    <div class="test">
        <div class="box active">My orders</div>
        <div class="box">Marketplace</div>
        <div class="box">Wishlist</div>
        <div class="box">Billing</div>
        <div class="box">Support</div>
        <div class="box">My profile</div>
        <div class="box">Settings</div>
        <div class="box">Log out</div>
    </div>

    <script>
        const element = document.querySelector('.test');
        element.addEventListener('wheel', (event) => {
            event.preventDefault();

            element.scrollBy({
                left: event.deltaY < 0 ? -30 : 30,
            });
            });
    </script> -->