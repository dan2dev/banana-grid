(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
require("utility-collection");
console.log("ok 12");

//# sourceMappingURL=data:application/json;charset=utf8;base64,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bEI7SUFDSCxDQUFDO0lBQ0Q7UUFDRSxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDN0UsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtnQkFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUN0QyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0MsTUFBTSxFQUFFLENBQUM7U0FDVjthQUFNO1lBQ0wsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsRUF0R1MsVUFBVSxLQUFWLFVBQVUsUUFzR25CO0FBRUQsOEJBQTRCO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJV2lkdGhTY3JlZW5TaXplIHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGxldHRlcjogc3RyaW5nO1xyXG59XHJcbi8vIG1heWJlIHlvdXIgc2hvdWxkIHJlbW92ZSB0aGUgQyBhbmQgcHV0IGI6IDZnZCBhbmRcclxuY29uc3Qgd2lkdGhTY3JlZW5TaXplczogSVdpZHRoU2NyZWVuU2l6ZVtdID0gW1xyXG4gIHsgd2lkdGg6IDAsIGxldHRlcjogXCJzXCIgfSwgLy8gMFxyXG4gIHsgd2lkdGg6IDU3NiwgbGV0dGVyOiBcInhcIiB9LCAvLyA2Z2RcdFx0XHRcdFx0XHR4XHJcbiAgeyB3aWR0aDogOTYwLCBsZXR0ZXI6IFwieHhcIiB9LCAvLyAxMGdkXHRcdFx0XHRcdHh4XHJcbiAgeyB3aWR0aDogKDExNTIpLCBsZXR0ZXI6IFwieHh4XCIgfSwgLy8gMTE1MiAvIDEyZ2RcdFx0eHh4XHJcbl07XHJcbm5hbWVzcGFjZSBCYW5hbmFHcmlkIHtcclxuICBsZXQgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGV0IHRpbWVyOiBudW1iZXIgfCBhbnk7XHJcbiAgZnVuY3Rpb24gc2V0KGxldHRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobGV0dGVyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdW5zZXQobGV0dGVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShsZXR0ZXIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAvLyBpc0FuZHJvaWRcclxuICAgIGNvbnN0IHh4U2l6ZSA9IHdpZHRoU2NyZWVuU2l6ZXMuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbS5sZXR0ZXIgPT09IFwieHhcIjtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAvLyBtb2JpbGUgb3IgZGVza3RvcFxyXG4gICAgdW5zZXQoXCJkXCIpO1xyXG4gICAgdW5zZXQoXCJtXCIpO1xyXG4gICAgaWYgKGFuZHJvaWQoKSB8fCBpb3MoKSB8fCAoeHhTaXplICYmIHdpZHRoIDwgeHhTaXplLndpZHRoKSkge1xyXG4gICAgICBzZXQoXCJtXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0KFwiZFwiKTtcclxuICAgIH1cclxuICAgIGlmIChhbmRyb2lkKCkpIHtcclxuICAgICAgc2V0KFwiYW5kcm9pZFwiKTtcclxuICAgIH1cclxuICAgIGlmIChpb3MoKSkge1xyXG4gICAgICBzZXQoXCJpb3NcIik7XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmVcclxuICAgIHVuc2V0KFwicy1qdXN0XCIpO1xyXG4gICAgdW5zZXQoXCJ4LWp1c3RcIik7XHJcbiAgICB1bnNldChcInh4LWp1c3RcIik7XHJcbiAgICB1bnNldChcInh4eC1qdXN0XCIpO1xyXG4gICAgLy8gdW5zZXQgYWxsIGp1c3RzXHJcbiAgICBsZXQganVzdFRvQmVTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGZvciAoY29uc3Qgc2l6ZSBvZiB3aWR0aFNjcmVlblNpemVzKSB7XHJcbiAgICAgIGlmIChzaXplLndpZHRoIDw9IHdpZHRoKSB7XHJcbiAgICAgICAganVzdFRvQmVTZXQgPSBgJHtzaXplLmxldHRlcn0tanVzdGA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChqdXN0VG9CZVNldCkge1xyXG4gICAgICBzZXQoanVzdFRvQmVTZXQpO1xyXG4gICAgfVxyXG4gICAgd2lkdGhTY3JlZW5TaXplcy5mb3JFYWNoKChzaXplKSA9PiB7XHJcbiAgICAgIC8vIG5vLXh4eFxyXG4gICAgICBpZiAoc2l6ZS53aWR0aCA+IHdpZHRoKSB7XHJcbiAgICAgICAgc2V0KGBuby0ke3NpemUubGV0dGVyfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVuc2V0KGBuby0ke3NpemUubGV0dGVyfWApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHh4eFxyXG4gICAgICBpZiAoc2l6ZS53aWR0aCA8PSB3aWR0aCkge1xyXG4gICAgICAgIHNldChzaXplLmxldHRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5zZXQoc2l6ZS5sZXR0ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNoYW5nZShlOiBVSUV2ZW50KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KHJlbmRlciwgMTAwKTtcclxuICB9XHJcbiAgbGV0IGlzSW9zOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIGZ1bmN0aW9uIGlvcygpOiBib29sZWFuIHtcclxuICAgIGlmIChpc0lvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBpc0lvcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzSW9zID0gL2lQYWR8aVBob25lfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICByZXR1cm4gaXNJb3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBpc0FuZHJvaWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgZnVuY3Rpb24gYW5kcm9pZCgpOiBib29sZWFuIHtcclxuICAgIGlmIChpc0FuZHJvaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gaXNBbmRyb2lkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgIHJldHVybiBpc0FuZHJvaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAobG9hZGVkID09PSBmYWxzZSAmJiBkb2N1bWVudC5ib2R5ICE9PSB1bmRlZmluZWQgJiYgZG9jdW1lbnQuYm9keSAhPT0gbnVsbCkge1xyXG4gICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDaGFuZ2UpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJhbmFuYS1ncmlkXCIpO1xyXG4gICAgICByZW5kZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoaW5pdCwgNTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbml0KCk7XHJcbn1cclxuXHJcbmltcG9ydCBcInV0aWxpdHktY29sbGVjdGlvblwiO1xyXG5jb25zb2xlLmxvZyhcIm9rIDEyXCIpO1xyXG4iXX0=

},{"utility-collection":6}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Dom;
(function (Dom) {
    function insertBefore(element, targetElement) {
        targetElement.parentElement.insertBefore(element, targetElement);
    }
    Dom.insertBefore = insertBefore;
    function insertAfter(element, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild === targetElement) {
            parent.appendChild(element);
        }
        else {
            parent.insertBefore(element, targetElement.nextSibling);
        }
    }
    Dom.insertAfter = insertAfter;
    function remove(element) {
        if (element.parentElement !== null) {
            element.parentElement.removeChild(element);
        }
    }
    Dom.remove = remove;
    function htmlToNode(html) {
        if (html instanceof Node) {
            return html;
        }
        else {
            var node = document.createElement("div");
            node.innerHTML = html;
            return node.firstElementChild;
        }
    }
    Dom.htmlToNode = htmlToNode;
    function htmlToElement(html) {
        return htmlToNode(html);
    }
    Dom.htmlToElement = htmlToElement;
    // atributes  ---------------------------------------------
    function getAttributes(element) {
        var attrs = element.attributes;
        var newAttr = {};
        for (var i = 0; i < attrs.length; i++) {
            newAttr[attrs[i].name] = attrs[i].value;
        }
        return newAttr;
    }
    Dom.getAttributes = getAttributes;
    // Loops e giros pelo dom --------------------------------------------
    function childElement(node, each) {
        var child = node.firstChild;
        while (child) {
            if (child.nodeType === 1) {
                each(child);
            }
            child = child.nextSibling;
        }
    }
    Dom.childElement = childElement;
    // element down --------------------------
    function nodeDown(node, each) {
        if (each(node, undefined) !== false) {
            this.childNodeDown(node, each);
        }
    }
    Dom.nodeDown = nodeDown;
    function childNodeDown(node, each) {
        var parent = node;
        var child = node.firstChild;
        while (child) {
            var eachReturn = each(child, parent);
            if (eachReturn !== false) {
                this.childNodeDown(child, each);
            }
            child = child.nextSibling;
        }
    }
    Dom.childNodeDown = childNodeDown;
    function elementDown(node, each) {
        if (each(node, undefined) !== false) {
            this.childElementDown(node, each);
        }
    }
    Dom.elementDown = elementDown;
    function childElementDown(node, each) {
        var parent = node;
        var child = node.firstChild;
        while (child) {
            if (child.nodeType === 1) {
                var eachReturn = each(child, parent);
                if (eachReturn !== false) {
                    this.childElementDown(child, each);
                }
            }
            child = child.nextSibling;
        }
    }
    Dom.childElementDown = childElementDown;
    // element up --------------------------
    function elementUp(node, each) {
        if (each(node) !== false) {
            parentElementUp(node, each);
        }
    }
    Dom.elementUp = elementUp;
    function parentElementUp(node, each) {
        var retorno = true;
        var current = node.parentNode;
        do {
            retorno = each(current);
            current = current.parentNode;
        } while (retorno !== false && current !== null && current !== undefined && node.nodeName !== "BODY");
    }
    Dom.parentElementUp = parentElementUp;
    // dom --------------------------
    function attribute(element, each) {
        // TODO: this still need to be tested
        var attributes = element.attributes;
        for (var i = 0; i < attributes.length; i++) {
            each(attributes[i].name, attributes[i].value);
        }
    }
    Dom.attribute = attribute;
    function findNextSibling(target, validation) {
        var current = target.nextSibling;
        while (current !== null) {
            if (validation(current) === true) {
                return current;
            }
            else {
                current = current.nextSibling;
            }
        }
        return null;
    }
    Dom.findNextSibling = findNextSibling;
    function findPrevSibling(target, validation) {
        var current = target.previousSibling;
        while (current !== null) {
            if (validation(current) === true) {
                return current;
            }
            else {
                current = current.previousSibling;
            }
        }
        return null;
    }
    Dom.findPrevSibling = findPrevSibling;
    function findAllSiblings(target) {
        var siblings = [];
        findPrevSibling(target, function (node) {
            siblings.push(node);
            return false;
        });
        findNextSibling(target, function (node) {
            siblings.push(node);
            return false;
        });
        return siblings;
    }
    Dom.findAllSiblings = findAllSiblings;
    function prependChild(parent, child) {
        var firstChild = parent.firstChild;
        if (firstChild === undefined) {
            parent.appendChild(child);
        }
        else {
            parent.insertBefore(child, firstChild);
        }
    }
    Dom.prependChild = prependChild;
    function appendChild(parent, child) {
        parent.appendChild(child);
    }
    Dom.appendChild = appendChild;
    function replaceElement(oldElement, newElement) {
        oldElement.parentElement.replaceChild(newElement, oldElement);
    }
    Dom.replaceElement = replaceElement;
    function swapNodes(n1, n2) {
        var i1;
        var i2;
        var p1 = n1.parentNode;
        var p2 = n2.parentNode;
        if (p1 === undefined || p1 === null) {
            p1 = document.createElement("div");
            p1.appendChild(n1);
        }
        if (p2 === undefined || p2 === null) {
            p2 = document.createElement("div");
            p2.appendChild(n2);
        }
        if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) {
            return;
        }
        for (var i = 0; i < p1.children.length; i++) {
            if (p1.children[i].isEqualNode(n1)) {
                i1 = i;
            }
        }
        for (var i = 0; i < p2.children.length; i++) {
            if (p2.children[i].isEqualNode(n2)) {
                i2 = i;
            }
        }
        if (p1.isEqualNode(p2) && i1 < i2) {
            i2++;
        }
        p1.insertBefore(n2, p1.children[i1]);
        p2.insertBefore(n1, p2.children[i2]);
    }
    Dom.swapNodes = swapNodes;
})(Dom = exports.Dom || (exports.Dom = {}));
exports["default"] = Dom;
//# sourceMappingURL=dom.js.map
},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Event;
(function (Event) {
    function once(target, type, listener) {
        var fn = function (ev) {
            target.removeEventListener(type, fn);
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.once = once;
    function onceOutside(target, type, listener) {
        var fn = function (ev) {
            var inside = target.contains(ev.target);
            if (!inside) {
                listener(ev);
                document.removeEventListener(type, fn);
            }
        };
        document.addEventListener(type, fn);
    }
    Event.onceOutside = onceOutside;
    function bindOutside(target, type, listener) {
        var fn = function (ev) {
            var inside = target.contains(ev.target);
            if (!inside) {
                listener(ev);
            }
        };
        document.addEventListener(type, fn);
    }
    Event.bindOutside = bindOutside;
    function bind(target, type, listener) {
        var fn = function (ev) {
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.bind = bind;
    // passive supported
    var passiveSupported = false;
    function passive() {
        return (passiveSupported ? { passive: true } : false);
    }
    Event.passive = passive;
    (function Initialize() {
        var _this = this;
        // detect if suport passive event
        try {
            var options = Object.defineProperty({}, "passive", {
                get: function () {
                    _this.passiveSupported = true;
                }
            });
            window.addEventListener("test", function () {
                return null;
            }, options);
        }
        catch (err) {
            //
        }
    })();
})(Event = exports.Event || (exports.Event = {}));
exports["default"] = Event;
//# sourceMappingURL=event.js.map
},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
// import moment from "moment";
var text_1 = require("./text");
// console.log("--> ok");
var Is;
(function (Is) {
    function mobile() {
        if (window.innerWidth < 900) {
            return true;
        }
        else {
            return false;
        }
    }
    Is.mobile = mobile;
    // is null or undefined
    function nullOrUndefined(value) {
        if (value === undefined || value === null) {
            return true;
        }
        else {
            return false;
        }
    }
    Is.nullOrUndefined = nullOrUndefined;
    // id empty
    function empty(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        }
        else {
            return false;
        }
    }
    Is.empty = empty;
    // is Number
    var numberRegex = /\D/;
    function number(value) {
        return !numberRegex.test(value);
    }
    Is.number = number;
    // is Letter
    var letterRegex = /[a-zA-Z]/;
    function letter(value) {
        return letterRegex.test(value);
    }
    Is.letter = letter;
    // --------------------------------
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m;
    function email(value) {
        return emailRegex.test(value);
    }
    Is.email = email;
    // brazilian validations ----------------------------------------
    // phone
    var brazilianPhoneRegex = /^(?:(?:\+)[0-9]{2}\s?){0,1}(?:\()[0-9]{2}(?:\))\s?[0-9]{0,1}\s?[0-9]{4,}(?:-)[0-9]{4}$/m;
    function brazilianPhone(phone) {
        return brazilianPhoneRegex.test(phone);
    }
    Is.brazilianPhone = brazilianPhone;
    function ddmmyyyy(date) {
        throw new Error("Not implemented.");
        // return moment(date, "DD/MM/YYYY", true).isValid();
    }
    Is.ddmmyyyy = ddmmyyyy;
    function mmddyyyy(date) {
        throw new Error("Not implemented.");
        // return moment(date, "MM/DD/YYYY", true).isValid();
    }
    Is.mmddyyyy = mmddyyyy;
    // CPF
    function cpf(value) {
        value = text_1.Text.stripNonNumber(value);
        var numeros;
        var digitos;
        var soma;
        var i;
        var resultado;
        var digitos_iguais;
        digitos_iguais = 1;
        if (value.length < 11) {
            return false;
        }
        for (i = 0; i < value.length - 1; i++) {
            if (value.charAt(i) !== value.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        }
        if (!digitos_iguais) {
            numeros = value.substring(0, 9);
            digitos = value.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--) {
                soma += +(numeros.charAt(10 - i)) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== +(digitos.charAt(0))) {
                return false;
            }
            numeros = value.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--) {
                soma += +(numeros.charAt(11 - i)) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== +(digitos.charAt(1))) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    Is.cpf = cpf;
    // CNPJ
    function cnpj(value) {
        value = text_1.Text.stripNonNumber(value);
        var tamanho;
        var numeros;
        var digitos;
        var soma;
        var pos;
        value = value.replace(/[^\d]+/g, "");
        if (value === "") {
            return false;
        }
        if (value.length !== 14) {
            return false;
        }
        // Elimina CNPJs invalidos conhecidos
        if (value === "00000000000000" ||
            value === "11111111111111" ||
            value === "22222222222222" ||
            value === "33333333333333" ||
            value === "44444444444444" ||
            value === "55555555555555" ||
            value === "66666666666666" ||
            value === "77777777777777" ||
            value === "88888888888888" ||
            value === "99999999999999") {
            return false;
        }
        // Valida DVs
        tamanho = value.length - 2;
        numeros = value.substring(0, tamanho);
        digitos = value.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += +(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +(digitos.charAt(0))) {
            return false;
        }
        tamanho = tamanho + 1;
        numeros = value.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += +(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +(digitos.charAt(1))) {
            return false;
        }
        return true;
    }
})(Is = exports.Is || (exports.Is = {}));
exports["default"] = Is;
//# sourceMappingURL=is.js.map
},{"./text":9}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var List;
(function (List) {
    // remove item from list if exist
    function removeFromIndex(list, index) {
        list.splice(index, 1);
        return list;
    }
    List.removeFromIndex = removeFromIndex;
    function removeItem(list, item) {
        var index = list.indexOf(item);
        var newList;
        if (index > -1) {
            newList = removeFromIndex(list, index);
        }
        else {
            newList = list;
        }
        return newList;
    }
    List.removeItem = removeItem;
    function setItem(list, item) {
        var index = list.indexOf(item);
        if (index < 0) {
            list.push(item);
        }
        return list;
    }
    List.setItem = setItem;
    function replaceItemWith(baseList, searchItem, newItems) {
        var newItemsToInsert;
        if (Array.isArray(newItems)) {
            newItemsToInsert = newItems.slice(0);
        }
        else {
            newItemsToInsert = [newItems];
        }
        var output = baseList.slice(0);
        var args;
        var replaceIndex = output.indexOf(searchItem);
        if (replaceIndex > -1) {
            args = [replaceIndex, 1];
            args = args.concat(newItemsToInsert);
        }
        else {
            args = [output.length, 0];
            args = args.concat(newItemsToInsert);
        }
        output.splice.apply(output, args);
        return output;
    }
    List.replaceItemWith = replaceItemWith;
})(List = exports.List || (exports.List = {}));
exports["default"] = List;
//# sourceMappingURL=list.js.map
},{}],6:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./dom"));
__export(require("./is"));
__export(require("./text"));
__export(require("./reflection"));
__export(require("./url"));
__export(require("./list"));
__export(require("./scroll-switch"));
__export(require("./event"));
var UtilityCollection;
(function (UtilityCollection) {
    var name = "UtilityCollection";
})(UtilityCollection = exports.UtilityCollection || (exports.UtilityCollection = {}));
exports["default"] = UtilityCollection;
console.log("util 654321");
//# sourceMappingURL=main.js.map
},{"./dom":2,"./event":3,"./is":4,"./list":5,"./reflection":7,"./scroll-switch":8,"./text":9,"./url":10}],7:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Reflection;
(function (Reflection) {
    function merge(base, source) {
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                base[i] = source[i];
            }
        }
    }
    Reflection.merge = merge;
    function fill(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var element = source[key];
                target[key] = element;
            }
        }
        return target;
    }
    Reflection.fill = fill;
})(Reflection = exports.Reflection || (exports.Reflection = {}));
exports["default"] = Reflection;
//# sourceMappingURL=reflection.js.map
},{}],8:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var event_1 = require("./event");
exports.DATA_SCROLLABLE = "data-scrollable";
exports.CLASS_FOCUS = "scroll--active";
var ScrollSwitch;
(function (ScrollSwitch) {
    var unfreezeDelay;
    var Scrollable = /** @class */ (function () {
        function Scrollable(element) {
            var _this = this;
            this.element = null;
            this.y = 0;
            this.frozen = false;
            this.unfreezing = false;
            this.element = element;
            if (this.element.getAttribute(exports.DATA_SCROLLABLE) === undefined) {
                this.id = newScrollableId();
                this.element.setAttribute(exports.DATA_SCROLLABLE, this.id);
            }
            else {
                this.id = this.element.getAttribute(exports.DATA_SCROLLABLE);
            }
            // register event
            var unfreezeEvent = function (e) {
                window.scrollTo(0, window.scrollY);
                _this.unfreeze();
            };
            var freezeAllEvent = function (e) {
                freezeAllButId(null);
            };
            element.addEventListener("touchstart", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("mouseenter", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("pointermove", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("mouseleave", freezeAllEvent, event_1.Event.passive());
        }
        Scrollable.prototype.getId = function () {
            return this.id;
        };
        Scrollable.prototype.unfreeze = function () {
            if (this.frozen && !this.unfreezing) {
                this.unfreezing = true;
                freezeAllButId(this.id);
                document.body.style.height = this.element.scrollHeight + "px";
                window.scroll(0, this.y);
                this.element.setAttribute("style", "position: absolute; top: 0; z-index: " + this.element.style.zIndex + "; ");
                this.element.classList.add(exports.CLASS_FOCUS);
                document.body.style.height = "";
                this.y = 0;
                this.frozen = false;
                this.unfreezing = false;
                unfreezeDelay = undefined;
            }
        };
        Scrollable.prototype.freeze = function () {
            if (!this.frozen) {
                this.y = window.scrollY + 0;
                this.element.setAttribute("style", "position: fixed; top: -" + this.y + "px; z-index: " + this.element.style.zIndex + "; ");
                this.element.classList.remove(exports.CLASS_FOCUS);
                this.frozen = true;
            }
        };
        return Scrollable;
    }());
    ScrollSwitch.Scrollable = Scrollable;
    var store = {};
    var lastId = 1;
    function newScrollableId() {
        lastId = lastId + 1;
        return lastId.toString();
    }
    function identifyElement(element) {
        if (element.parentElement !== document.body) {
            return null;
        }
        var id = element.getAttribute(exports.DATA_SCROLLABLE);
        if (id === null) {
            return null;
        }
        var stored = (id !== undefined) ? (store[id] !== undefined) : false;
        if (stored) {
            return store[id];
        }
        else {
            var s = new Scrollable(element);
            id = s.getId();
            store[id] = s;
            return store[id];
        }
    }
    function freezeElement(element) {
        var scroll = identifyElement(element);
        if (scroll !== null) {
            scroll.freeze();
        }
    }
    ScrollSwitch.freezeElement = freezeElement;
    function freezeAllButId(id) {
        if (id === void 0) { id = null; }
        for (var i in store) {
            if (i !== id) {
                store[i].freeze();
            }
        }
    }
    ScrollSwitch.freezeAllButId = freezeAllButId;
    function freezeAllButElement(element) {
        var scroll = identifyElement(element);
        if (scroll !== null) {
            freezeAllButId(scroll.getId());
        }
    }
    ScrollSwitch.freezeAllButElement = freezeAllButElement;
    function unfreezeElement(element) {
        var scroll = identifyElement(element);
        if (scroll !== null) {
            scroll.unfreeze();
        }
    }
    ScrollSwitch.unfreezeElement = unfreezeElement;
})(ScrollSwitch = exports.ScrollSwitch || (exports.ScrollSwitch = {}));
exports["default"] = ScrollSwitch;
//# sourceMappingURL=scroll-switch.js.map
},{"./event":3}],9:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var is_1 = require("./is");
var Text;
(function (Text) {
    function replaceAll(value, search, replacement) {
        return value.split(search).join(replacement);
    }
    Text.replaceAll = replaceAll;
    function pathArray(path) {
        return path.split(".");
    }
    Text.pathArray = pathArray;
    function stripNonNumber(value) {
        return value.replace(/[^0-9]/g, "");
    }
    Text.stripNonNumber = stripNonNumber;
    // -----------------
    var accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    function removeAccents(value) {
        if (is_1.Is.empty(value)) {
            return value;
        }
        var strAccents = value.split("");
        var strAccentsOut = new Array();
        var strAccentsLen = strAccents.length;
        for (var y = 0; y < strAccentsLen; y++) {
            if (accents.indexOf(strAccents[y]) !== -1) {
                strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
            }
            else {
                strAccentsOut[y] = strAccents[y];
            }
        }
        return strAccentsOut.join("");
    }
    Text.removeAccents = removeAccents;
})(Text = exports.Text || (exports.Text = {}));
exports["default"] = Text;
//# sourceMappingURL=text.js.map
},{"./is":4}],10:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var text_1 = require("./text");
var Url = /** @class */ (function () {
    // -------------------
    function Url(url) {
        var _this = this;
        this.QueryList = {};
        this.originPath = "/";
        this.staticPath = url.split("#")[0].split("?")[0];
        var splited = Url.splitOriginPath(this.staticPath);
        this.staticPath = splited.path;
        this.origin = splited.origin;
        this.staticQuery = url.indexOf("?") > -1 ? url.split("?")[1].split("#")[0] : null;
        this.staticHash = url.split("#")[1] || null;
        // queryList
        if (this.staticQuery != null) {
            var queryKeyValueList = this.staticQuery.split("&");
            queryKeyValueList.forEach(function (queryKeyValue) {
                var keyValue = queryKeyValue.split("=");
                var key = keyValue[0];
                var value = keyValue[1];
                _this.QueryList[key] = value;
            });
        }
        // origin
    }
    Url.prototype.setQuery = function (key, value) {
        this.QueryList[key] = value;
        return this;
    };
    Url.prototype.setQueries = function (values) {
        for (var key in values) {
            if (typeof values[key] !== "function" && values[key] !== undefined) {
                this.QueryList[key] = values[key].toString();
            }
        }
        return this;
    };
    Url.prototype.deleteQuery = function (key) {
        if (this.QueryList !== undefined) {
            this.QueryList[key] = undefined;
            delete this.QueryList[key];
        }
        return this;
    };
    Url.prototype.getQuery = function (key) {
        if (this.QueryList !== undefined) {
            return this.QueryList[key];
        }
    };
    Url.prototype.toString = function () {
        var queryLength = Object.keys(this.QueryList).length;
        var query = (Object.keys(this.QueryList).length > 0 ? "?" : "");
        for (var key in this.QueryList) {
            if (this.QueryList.hasOwnProperty(key)) {
                queryLength--;
                var value = this.QueryList[key];
                query = query + key + "=" + value;
                if (queryLength > 0) {
                    query = query + "&";
                }
            }
        }
        var newPath = this.staticPath + query + (this.staticHash ? "#" + this.staticHash : "");
        newPath = Url.absolute(newPath, newPath[0] === "." ? this.originPath : "/");
        if (this.origin !== undefined && this.origin !== null) {
            var newUrl = this.origin + newPath; // Url.absolute(newPath, this.origin);
            return newUrl;
        }
        else {
            return newPath;
        }
    };
    Url.prototype.setOrigin = function (origin, justLocal) {
        if (justLocal === void 0) { justLocal = true; }
        var splited = Url.splitOriginPath(origin || window.location.origin + "/" + window.location.pathname);
        if (this.origin === undefined) {
            this.origin = splited.origin;
            this.originPath = splited.path || "/";
        }
        else if (this.origin === null || this.origin === undefined || justLocal === false) {
            this.origin = splited.origin;
            this.originPath = splited.path || "/";
        }
        else if (justLocal) {
            if (window.location.origin.replace("https", "http").toLowerCase() === this.origin.replace("https", "http").toLowerCase()) {
                this.origin = splited.origin;
            }
            this.originPath = splited.path || "/";
        }
        else {
            this.origin = splited.origin;
            this.originPath = splited.path || "/";
        }
    };
    return Url;
}());
exports.Url = Url;
(function (Url) {
    function splitOriginPath(value) {
        var split = /(https?:\/\/[a-zA-Z0-9-\.]+(?::[0-9]*)?)(\/.*)?/g.exec(value);
        if (split !== null) {
            return {
                origin: split[1],
                path: split[2] || "/"
            };
        }
        else {
            return {
                origin: null,
                path: value || "/"
            };
        }
    }
    Url.splitOriginPath = splitOriginPath;
    function absolute(relative, base) {
        if (base === null) {
            base = "";
        }
        var stack = base.split("/");
        var parts = relative.split("/");
        stack.pop(); // remove current file name (or empty string)
        // (omit if "base" is the current folder without trailing slash)
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] === ".") {
                continue;
            }
            if (parts[i] === "..") {
                stack.pop();
            }
            else {
                stack.push(parts[i]);
            }
        }
        return text_1.Text.replaceAll(stack.join("/"), "//", "/");
    }
    Url.absolute = absolute;
})(Url = exports.Url || (exports.Url = {}));
exports.Url = Url;
exports["default"] = Url;
//# sourceMappingURL=url.js.map
},{"./text":9}]},{},[1])