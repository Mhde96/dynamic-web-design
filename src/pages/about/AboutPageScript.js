function appendElement() {
    if (window.jQuery && window.bootstrap && window.Popper) {

        $(document).ready(function () {
            $('#header-placeholder').load('../../components/header/Header.html')
        })
        $(document).ready(function () {
            $('#footer-placeholder').load('../../components/footer/Footer.html')
        })
    } else {
        setTimeout(() => {
            appendElement()
        }, 100)
    }
}

appendElement()