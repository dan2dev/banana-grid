// maybe your should remove the C and put b: 6gd and
var widthScreenSizes = [
    { width: 0, letter: "banana-grid" },
    { width: 576, letter: "x" },
    { width: 960, letter: "xx" },
    { width: (1152), letter: "xxx" },
];
var BananaGrid;
(function (BananaGrid) {
    var loaded = false;
    var timer;
    var currentLetters = [];
    function set(letter) {
        if (currentLetters.indexOf(letter) === -1) {
            currentLetters.push(letter);
        }
        document.body.classList.add(letter);
    }
    function unset(letter) {
        var index = currentLetters.indexOf(letter);
        if (index > -1) {
            currentLetters.splice(index, 1);
        }
        document.body.classList.remove(letter);
    }
    function render() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        widthScreenSizes.forEach(function (size) {
            if (size.width <= width) {
                set(size.letter);
            }
            else {
                unset(size.letter);
            }
            document.body.style.width = width + "px";
            document.body.style.minHeight = window.innerHeight + "px";
        });
    }
    function resizeChange(e) {
        clearTimeout(timer);
        timer = setTimeout(render, 150);
    }
    function init() {
        if (loaded === false && document.body !== undefined && document.body !== null) {
            loaded = true;
            window.addEventListener("resize", resizeChange);
            window.addEventListener("orientationchange", function () {
                document.body.style.width = "100vw";
            }, false);
            document.body.classList.add("banana-grid");
            render();
        }
        else {
            setTimeout(init, 50);
        }
    }
    init();
})(BananaGrid || (BananaGrid = {}));
//# sourceMappingURL=main.js.map