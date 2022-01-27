window.onload = function () {
    var resMenu = document.querySelector("#responsive-menu")
    var resBtn = document.querySelector("#res-button")
    var resBtnpressed = false
if (resBtn) {
    resBtn.addEventListener('click', function () {
        if (resBtnpressed) {
            resMenu.style.left = "-780px"
            resMenu.style.display = "flex"
            resBtnpressed = false
            resBtn.innerHTML = `<div class="line-1">&nbsp;</div>
            <div class="line-2">&nbsp;</div>
            <div class="line-3">&nbsp;</div>`
        } else {
            resMenu.style.left = "0"
            resMenu.style.display = "flex"
            resBtnpressed = true
            resBtn.innerHTML = `<div class="cross">+</div>`
        }

    })
}

function hideResNav(x) {
  if (x.matches) {
    resMenu.style.left = "-780px"
        resMenu.style.display = "none"
        resBtn.innerHTML = `<div class="line-1">&nbsp;</div>
            <div class="line-2">&nbsp;</div>
            <div class="line-3">&nbsp;</div>`
        resBtnpressed = false
  }

}

var x = window.matchMedia("(min-width: 768px)")
hideResNav(x)
x.addListener(hideResNav)

}