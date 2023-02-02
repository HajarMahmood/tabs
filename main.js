let tabsArray = Array.from(document.querySelectorAll(".tabs li"));
let contentArray = Array.from(document.querySelectorAll(".content > div"));
tabsArray.forEach((el) => {
    el.addEventListener("click", function (e) {
        
        tabsArray.forEach((el) => el.classList.remove("active"))
        e.currentTarget.classList.add("active");
        contentArray.forEach((div) => div.style.display = "none");
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    })
})