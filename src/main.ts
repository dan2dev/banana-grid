interface IWidthScreenSize {
  width: number;
  letter: string;
}
// maybe your should remove the C and put b: 6gd and
const widthScreenSizes: IWidthScreenSize[] = [
  { width: 0, letter: "s" }, // 0
  { width: 576, letter: "x" }, // 6gd						x
  { width: 960, letter: "xx" }, // 10gd					xx
  { width: (1152), letter: "xxx" }, // 1152 / 12gd		xxx
];
namespace BananaGrid {
  let loaded: boolean = false;
  let timer: number | any;
  function set(letter: string): void {
    document.body.classList.add(letter);
  }
  function unset(letter: string): void {
    document.body.classList.remove(letter);
  }
  function render(): void {
    // isAndroid
    const xxSize = widthScreenSizes.find((item) => {
      return item.letter === "xx";
    });
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    // mobile or desktop
    unset("d");
    unset("m");
    if (android() || ios() || (xxSize && width < xxSize.width)) {
      set("m");
    } else {
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
    let justToBeSet: string | undefined;
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
      } else {
        unset(`no-${size.letter}`);
      }
      // xxx
      if (size.width <= width) {
        set(size.letter);
      } else {
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
  function resizeChange(e: UIEvent): void {
    clearTimeout(timer);
    timer = setTimeout(render, 100);
  }
  let isIos: boolean | undefined;
  function ios(): boolean {
    if (isIos !== undefined) {
      return isIos;
    } else {
      isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent);
      return isIos;
    }
  }
  let isAndroid: boolean | undefined;
  function android(): boolean {
    if (isAndroid !== undefined) {
      return isAndroid;
    } else {
      isAndroid = /(android)/i.test(navigator.userAgent);
      return isAndroid;
    }
  }
  function init(): void {
    if (loaded === false && document.body !== undefined && document.body !== null) {
      loaded = true;
      window.addEventListener("resize", resizeChange);
      window.addEventListener("orientationchange", () => {
        document.body.style.width = "100vw";
      }, false);
      document.body.classList.add("banana-grid");
      render();
    } else {
      setTimeout(init, 50);
    }
  }
  init();
}
