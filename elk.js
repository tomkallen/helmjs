function h(el) {
    return new DOM(el);
}

class DOM {
    constructor(el) {
        this.el = Array.from(document.querySelectorAll(el));
    }

    html(val) {
        if (val) {
            this.el.forEach(e => e.innerHTML = val)
            return this;
        } else {
            return this.el[this.el.length - 1].innerHTML;
        }
    }

    text(val) {
        if (val) {
            this.el.forEach(e => e.textContent = val)
            return this;
        } else {
            return this.el[this.el.length - 1].textContent;
        }
    }

    on(event, cb) {
        return this.el.forEach(el => el.addEventListener(event, () => cb(this))),
        this;
    }

    hasClass(cl) {
        return cl
            ? Boolean(this.el.filter(el => el.classList.contains(el)).length)
            : Boolean(this.el.filter(el => el.classList.length));
    }

    setClass(cl) {
        cl && this.el.forEach(el => el.className = cl);
        return this;
    }

    toggleClass(cl) {
        return this.el.forEach(el => el.classList.toggle(cl)),
        this;
    }

    wait(t, cb) {
        return setTimeout(() => cb(this), t),
        this;
    }

    hide(el) {
        const list = el
            ? Array.from(document.querySelectorAll(el))
            : this.el

        list.forEach(e => {
            if (!e.getAttribute("elk-oldVisibilty")) {
                const style = (
                    window.getComputedStyle
                    ? getComputedStyle(e, null)
                    : e.currentStyle).display;
                e.setAttribute("elk-oldVisibilty", style);
                e.style.display = 'none';
            }
        })
    }

    show(el) {
        const list = el
            ? Array.from(document.querySelectorAll(el))
            : this.el

        list.forEach(e => {
            e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
        })
    }

    toggle(el) {
        const list = el
            ? Array.from(document.querySelectorAll(el))
            : this.el

        list.forEach(e => {
            const style = (
                window.getComputedStyle
                ? getComputedStyle(e, null)
                : e.currentStyle).display;
            if (style == 'none') {
                e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
            } else {
                if (!e.getAttribute("elk-oldVisibilty")) {
                    const style = (
                        window.getComputedStyle
                        ? getComputedStyle(e, null)
                        : e.currentStyle).display;
                    e.setAttribute("elk-oldVisibilty", style);
                    e.style.display = 'none';
                }
            };
        })
    }

    addClass(cl) {
        this.el.forEach(el => el.classList.add(cl))
        return this;
    }

    removeClass(cl) {
        if (cl) {
            this.el.forEach(el => el.classList.remove(cl))
        } else {
            this.el.forEach(el => el.className = "")
        }
        return this;
    }

    kill(el = this.el) {
        if (!Array.isArray(el)) {
            el.remove();
        } else {
            this.el.forEach(el => el.remove())
        }
        return this
    }

    static _isNode(el) {
        return el && (el.nodeType === 1 || el.nodeType == 11);
    }
}
