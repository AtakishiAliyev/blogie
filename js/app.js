// * Navbar Active Link Class
const links = document.querySelectorAll(".nav-links li a");

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace("active", "");
        }
        this.className += "active";
    });
}


// * Custom Select Box
const btns = document.querySelectorAll(".custom-select-wrapper");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
        event.stopPropagation();
        dropdown = this.querySelector(".select-dropdown");
        svg = this.querySelector("svg");

        if(!svg) {
            dropdown.classList.toggle("d-block");
        } else {
            dropdown.classList.toggle("d-block");
            svg.classList.toggle("rotate-180");
        }

        options = this.querySelectorAll(".dropdown li");
        value = this.querySelector(".selected-option");

        for (let j = 0; j < options.length; j++) {
            options[j].addEventListener("click", function() {
                value.innerHTML = this.getAttribute("data-value");
            }
        )}
    });
}

const dropdownList = document.querySelectorAll(".select-dropdown");
const dropdownListSvg = document.querySelectorAll("svg");

window.onclick = function () {
    for(let i = 0; i < dropdownList.length; i++) {
        if(dropdownList[i].classList == 'select-dropdown d-block') {
            dropdownList[i].classList.remove("d-block");
            dropdownListSvg[i].classList.remove("rotate-180");
        }
    }
};

// * Mobile Menu Open and Close
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar-wrapper');
const overlay = document.querySelector('.menu-overlay');

openMenu.addEventListener("click", function() {
    body.classList.add("overflow-hidden");
    navbar.classList.add("menu-active");
    overlay.classList.add("menu-overlay-active");

})

closeMenu.addEventListener("click", function() {
    body.classList.remove("overflow-hidden");
    navbar.classList.remove("menu-active");
    overlay.classList.remove("menu-overlay-active");
})

// * Collaps
const btn = document.querySelectorAll(".arrow");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        this.classList.toggle("rotate-180");
        
        const content = this.parentNode.parentNode.querySelector(".collapsible-content");
    
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// * Tags
const keyword = document.querySelector('#keywords');

function search(e) {
    if(event.key === 'Enter') {
        const para = document.createElement("a");
        const block = document.querySelector('.keywords-block');
        para.href = 'javascript:void(0);';
        para.classList.add('keyword');
        para.innerHTML = `${e.value} <i class="far fa-times close"></i>`;
        keyword.value = '';
        block.appendChild(para);
    }
    const close = document.querySelectorAll(".close");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
            this.parentNode.remove();
        })
    }
}