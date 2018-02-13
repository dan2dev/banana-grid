// import "./main.scss";
// maybe your should remove the C and put b: 6gd and
const widthScreenSizes = [
    { width: 0, letter: "s" },
    { width: 576, letter: "x" },
    { width: 960, letter: "xx" },
    { width: (1152), letter: "xxx" },
];
var BananaGrid;
(function (BananaGrid) {
    let loaded = false;
    let timer;
    const currentLetters = [];
    function set(letter) {
        if (currentLetters.indexOf(letter) === -1) {
            currentLetters.push(letter);
        }
        document.body.classList.add(letter);
    }
    function unset(letter) {
        const index = currentLetters.indexOf(letter);
        if (index > -1) {
            currentLetters.splice(index, 1);
        }
        document.body.classList.remove(letter);
    }
    function render() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        widthScreenSizes.forEach((size) => {
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
        timer = setTimeout(render, 200);
    }
    function init() {
        if (loaded === false && document.body !== undefined && document.body !== null) {
            loaded = true;
            window.addEventListener("resize", resizeChange);
            window.addEventListener("orientationchange", () => {
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