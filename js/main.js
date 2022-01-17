window.onload = function () {
    var resMenu = document.querySelector("#responsive-menu")
    var resBtn = document.querySelector("#res-button")
    var resBtnpressed = false

    resBtn.addEventListener('click', function () {
        if (resBtnpressed) {
            resMenu.style.left = "-780px"
            resBtnpressed = false
        } else {
            resMenu.style.left = "0"
            resBtnpressed = true
        }

    })


}