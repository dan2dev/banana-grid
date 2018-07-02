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
    function set(letter) {
        document.body.classList.add(letter);
    }
    function unset(letter) {
        document.body.classList.remove(letter);
    }
    function render() {
        // isAndroid
        const xxSize = widthScreenSizes.find((item) => {
            return item.letter === "xx";
        });
        const width = window.innerWidth;
        const height = window.innerHeight;
        // mobile or desktop
        unset("d");
        unset("m");
        if (android() || ios() || (xxSize && width < xxSize.width)) {
            set("m");
        }
        else {
            set("d");
        }
        if (android()) {
            set("android");
        }
        if (ios()) {
            set("ios");
        }
        // remove
        unset("s-just");
        unset("x-just");
        unset("xx-just");
        unset("xxx-just");
        // unset all justs
        let justToBeSet;
        for (const size of widthScreenSizes) {
            if (size.width <= width) {
                justToBeSet = `${size.letter}-just`;
            }
        }
        if (justToBeSet) {
            set(justToBeSet);
        }
        widthScreenSizes.forEach((size) => {
            // no-xxx
            if (size.width > width) {
                set(`no-${size.letter}`);
            }
            else {
                unset(`no-${size.letter}`);
            }
            // xxx
            if (size.width <= width) {
                set(size.letter);
            }
            else {
                unset(size.letter);
            }
            document.body.style.visibility = "hidden";
            requestAnimationFrame(() => {
                document.body.style.width = width + "px";
                document.body.style.minHeight = height + "px";
                document.body.style.visibility = "";
            });
        });
    }
    function resizeChange(e) {
        clearTimeout(timer);
        timer = setTimeout(render, 100);
    }
    let isIos;
    function ios() {
        if (isIos !== undefined) {
            return isIos;
        }
        else {
            isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent);
            return isIos;
        }
    }
    let isAndroid;
    function android() {
        if (isAndroid !== undefined) {
            return isAndroid;
        }
        else {
            isAndroid = /(android)/i.test(navigator.userAgent);
            return isAndroid;
        }
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