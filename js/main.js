window.onload = function () {
    var resMenu = document.querySelector("#responsive-menu")
    var resBtn = document.querySelector("#res-button")
    var resBtnpressed = false

    resBtn.addEventListener('click', function () {
        if (resBtnpressed) {
            resMenu.style.left = "-780px"
            resBtnpressed = false
            resBtn.innerHTML = `<div class="line-1">&nbsp;</div>
            <div class="line-2">&nbsp;</div>
            <div class="line-3">&nbsp;</div>`
        } else {
            resMenu.style.left = "0"
            resBtnpressed = true
            resBtn.innerHTML = `<div class="cross">+</div>`
        }

    })


}