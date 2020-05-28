/**
 *
 * https://github.com/aFarkas/lazysizes
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Alexander Farkas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
window.lazySizesConfig = window.lazySizesConfig || {};
// preload all lazy elements in a lazy loading queue after onload, if on desktop
//window.lazySizesConfig.preloadAfterLoad = !(/mobi/i.test(navigator.userAgent));
window.lazySizesConfig.preloadAfterLoad = false;
/*! lazysizes - v1.1.3 -  Licensed MIT */
!function (a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports ? module.exports = c : "function" == typeof define && define.amd && define(c)
}(window, function (a, b) {
    "use strict";
    if (b.getElementsByClassName) {
        var c, d = b.documentElement,
            e = a.addEventListener,
            f = a.setTimeout,
            g = a.requestAnimationFrame || f,
            h = /^picture$/i,
            i = ["load", "error", "lazyincluded", "_lazyloaded"],
            j = function (a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                return a.className.match(c) && c
            },
            k = function (a, b) {
                j(a, b) || (a.className += " " + b)
            },
            l = function (a, b) {
                var c;
                (c = j(a, b)) && (a.className = a.className.replace(c, " "))
            },
            m = function (a, b, c) {
                var d = c ? "addEventListener" : "removeEventListener";
                c && m(a, b), i.forEach(function (c) {
                    a[d](c, b)
                })
            },
            n = function (a, c, d, e, f) {
                var g = b.createEvent("CustomEvent");
                return g.initCustomEvent(c, !e, !f, d || {}), g.details = g.detail, a.dispatchEvent(g), g
            },
            o = function (b, d) {
                var e;
                a.HTMLPictureElement || ((e = a.picturefill || a.respimage || c.pf) ? e({
                    reevaluate: !0,
                    elements: [b]
                }) : d && d.src && (b.src = d.src))
            },
            p = function (a, b) {
                return getComputedStyle(a, null)[b]
            },
            q = function (a, b, d) {
                for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) d = b.offsetWidth, b = b.parentNode;
                return d
            },
            r = function (b) {
                var d, e = 0,
                    h = a.Date,
                    i = function () {
                        d = !1, e = h.now(), b()
                    },
                    j = function () {
                        f(i)
                    },
                    k = function () {
                        g(j)
                    };
                return function () {
                    if (!d) {
                        var a = c.throttle - (h.now() - e);
                        d = !0, 9 > a && (a = 9), f(k, a)
                    }
                }
            },
            s = function () {
                var i, q, s, u, v, w, x, y, z, A, B, C, D, E = /^img$/i,
                    F = /^iframe$/i,
                    G = "onscroll" in a && !/glebot/.test(navigator.userAgent),
                    H = 0,
                    I = 0,
                    J = 0,
                    K = 1,
                    L = function (a) {
                        J--, a && a.target && m(a.target, L), (!a || 0 > J || !a.target) && (J = 0)
                    },
                    M = function (a, b) {
                        var c, d = a,
                            e = "hidden" != p(a, "visibility");
                        for (y -= b, B += b, z -= b, A += b; e && (d = d.offsetParent);) e = (p(d, "opacity") || 1) > 0, e && "visible" != p(d, "overflow") && (c = d.getBoundingClientRect(), e = A > c.left && z < c.right && B > c.top - 1 && y < c.bottom + 1);
                        return e
                    },
                    N = function () {
                        var a, b, d, e, f, g, h, j, k;
                        if ((v = c.loadMode) && 8 > J && (a = i.length)) {
                            for (b = 0, K++, D > I && 1 > J && K > 3 && v > 2 ? (I = D, K = 0) : I = I != C && v > 1 && K > 2 && 6 > J ? C : H; a > b; b++) i[b] && !i[b]._lazyRace && (G ? ((j = i[b].getAttribute("data-expand")) && (g = 1 * j) || (g = I), k !== g && (w = innerWidth + g, x = innerHeight + g, h = -1 * g, k = g), d = i[b].getBoundingClientRect(), (B = d.bottom) >= h && (y = d.top) <= x && (A = d.right) >= h && (z = d.left) <= w && (B || A || z || y) && (s && 3 > J && !j && (3 > v || 4 > K) || M(i[b], g)) ? (S(i[b], d.width), f = !0) : !f && s && !e && 3 > J && 4 > K && v > 2 && (q[0] || c.preloadAfterLoad) && (q[0] || !j && (B || A || z || y || "auto" != i[b].getAttribute(c.sizesAttr))) && (e = q[0] || i[b])) : S(i[b]));
                            e && !f && S(e)
                        }
                    },
                    O = r(N),
                    P = function (a) {
                        k(a.target, c.loadedClass), l(a.target, c.loadingClass), m(a.target, P)
                    },
                    Q = function (a, b) {
                        try {
                            a.contentWindow.location.replace(b)
                        } catch (c) {
                            a.setAttribute("src", b)
                        }
                    },
                    R = function () {
                        var a, b = [],
                            c = function () {
                                for (; b.length;) b.shift()();
                                a = !1
                            };
                        return function (d) {
                            b.push(d), a || (a = !0, g(c))
                        }
                    }(),
                    S = function (a, b) {
                        var d, e, g, i, p, q, r, v, w, x, y, z = E.test(a.nodeName),
                            A = a.getAttribute(c.sizesAttr) || a.getAttribute("sizes"),
                            B = "auto" == A;
                        (!B && s || !z || !a.src && !a.srcset || a.complete || j(a, c.errorClass)) && (a._lazyRace = !0, J++, R(function () {
                            if (a._lazyRace && delete a._lazyRace, l(a, c.lazyClass), !(w = n(a, "lazybeforeunveil")).defaultPrevented) {
                                if (A && (B ? (t.updateElem(a, !0, b), k(a, c.autosizesClass)) : a.setAttribute("sizes", A)), q = a.getAttribute(c.srcsetAttr), p = a.getAttribute(c.srcAttr), z && (r = a.parentNode, v = r && h.test(r.nodeName || "")), x = w.detail.firesLoad || "src" in a && (q || p || v), w = {
                                        target: a
                                    }, x && (m(a, L, !0), clearTimeout(u), u = f(L, 2500), k(a, c.loadingClass), m(a, P, !0)), v)
                                    for (d = r.getElementsByTagName("source"), e = 0, g = d.length; g > e; e++) (y = c.customMedia[d[e].getAttribute("data-media") || d[e].getAttribute("media")]) && d[e].setAttribute("media", y), i = d[e].getAttribute(c.srcsetAttr), i && d[e].setAttribute("srcset", i);
                                q ? a.setAttribute("srcset", q) : p && (F.test(a.nodeName) ? Q(a, p) : a.setAttribute("src", p)), (q || v) && o(a, {
                                    src: p
                                })
                            }
                            (!x || a.complete) && (x ? L(w) : J--, P(w))
                        }))
                    },
                    T = function () {
                        var a, b = function () {
                            c.loadMode = 3, O()
                        };
                        s = !0, K += 8, c.loadMode = 3, e("scroll", function () {
                            3 == c.loadMode && (c.loadMode = 2), clearTimeout(a), a = f(b, 99)
                        }, !0)
                    };
                return {
                    _: function () {
                        i = b.getElementsByClassName(c.lazyClass), q = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), C = c.expand, D = Math.round(C * c.expFactor), e("scroll", O, !0), e("resize", O, !0), a.MutationObserver ? new MutationObserver(O).observe(d, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (d.addEventListener("DOMNodeInserted", O, !0), d.addEventListener("DOMAttrModified", O, !0), setInterval(O, 999)), e("hashchange", O, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
                            b.addEventListener(a, O, !0)
                        }), (s = /d$|^c/.test(b.readyState)) ? T() : (e("load", T), b.addEventListener("DOMContentLoaded", O)), O()
                    },
                    checkElems: O,
                    unveil: S
                }
            }(),
            t = function () {
                var a, d = function (a, b, c) {
                        var d, e, f, g, i = a.parentNode;
                        if (i && (c = q(a, i, c), g = n(a, "lazybeforesizes", {
                                width: c,
                                dataAttr: !!b
                            }), !g.defaultPrevented && (c = g.detail.width, c && c !== a._lazysizesWidth))) {
                            if (a._lazysizesWidth = c, c += "px", a.setAttribute("sizes", c), h.test(i.nodeName || ""))
                                for (d = i.getElementsByTagName("source"), e = 0, f = d.length; f > e; e++) d[e].setAttribute("sizes", c);
                            g.detail.dataAttr || o(a, g.detail)
                        }
                    },
                    f = function () {
                        var b, c = a.length;
                        if (c)
                            for (b = 0; c > b; b++) d(a[b])
                    },
                    g = r(f);
                return {
                    _: function () {
                        a = b.getElementsByClassName(c.autosizesClass), e("resize", g)
                    },
                    checkElems: g,
                    updateElem: d
                }
            }(),
            u = function () {
                u.i || (u.i = !0, t._(), s._())
            };
        return function () {
            var b, d = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 2,
                expand: 359,
                loadMode: 2,
                throttle: 125
            };
            c = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in d) b in c || (c[b] = d[b]);
            a.lazySizesConfig = c, f(function () {
                c.init && u()
            })
        }(), {
            cfg: c,
            autoSizer: t,
            loader: s,
            init: u,
            uP: o,
            aC: k,
            rC: l,
            hC: j,
            fire: n,
            gW: q
        }
    }
});
/* ls.bgset.min.js */
/*! lazysizes - v1.1.3 -  Licensed MIT */
!function () {
    "use strict";
    if (window.addEventListener) {
        var a = /\s*\|\s+|\s+\|\s*/g,
            b = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,
            c = function (a) {
                var b = lazySizes.gW(a, a.parentNode);
                return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth
            },
            d = function (c, d, e) {
                var f = document.createElement("picture"),
                    g = d.getAttribute(lazySizesConfig.sizesAttr),
                    h = d.getAttribute("data-optimumx");
                d._lazybgset && d._lazybgset.parentNode == d && d.removeChild(d._lazybgset), Object.defineProperty(e, "_lazybgset", {
                    value: d,
                    writable: !0
                }), Object.defineProperty(d, "_lazybgset", {
                    value: f,
                    writable: !0
                }), c = c.split(a), f.style.display = "none", e.className = lazySizesConfig.lazyClass, 1 != c.length || g || (g = "auto"), c.forEach(function (a) {
                    var c = document.createElement("source");
                    g && "auto" != g && c.setAttribute("sizes", g), a.match(b) && (c.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1), RegExp.$2 && c.setAttribute("media", lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2)), f.appendChild(c)
                }), g && (e.setAttribute(lazySizesConfig.sizesAttr, g), d.removeAttribute(lazySizesConfig.sizesAttr)), h && e.setAttribute("data-optimumx", h), f.appendChild(e), d.appendChild(f)
            },
            e = function (a) {
                if (a.target._lazybgset) {
                    var b = a.target,
                        c = b._lazybgset,
                        d = b.currentSrc || b.src;
                    d && (c.style.backgroundImage = "url(" + d + ")"), b._lazybgsetLoading && (lazySizes.fire(c, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading)
                }
            };
        addEventListener("lazybeforeunveil", function (a) {
            var b, c, f;
            !a.defaultPrevented && (b = a.target.getAttribute("data-bgset")) && (f = a.target, c = document.createElement("img"), c._lazybgsetLoading = !0, a.detail.firesLoad = !0, d(b, f, c), lazySizes.loader.unveil(c), lazySizes.fire(c, "_lazyloaded", {}, !0, !0), setTimeout(function () {
                c.complete && e({
                    target: c
                })
            }))
        }), document.addEventListener("load", e, !0), document.documentElement.addEventListener("lazybeforesizes", function (a) {
            !a.defaultPrevented && a.target._lazybgset && (a.detail.width = c(a.target._lazybgset))
        })
    }
}();
/* ls.include.min.js */
/*! lazysizes - v1.1.3 -  Licensed MIT */
!function (a, b) {
    "use strict";

    function c(a) {
        a.match(z) ? this.urls[RegExp.$1] = t.map[RegExp.$2] || RegExp.$2 : this.urls.include = t.map[a] || a
    }

    function d(a) {
        var b, d, e;
        return a = a.trim(), a = t.map[a] || a, d = a.match(A), d ? (e = RegExp.$1, b = {
            condition: s.include.conditions[RegExp.$3] || s.customMedia[RegExp.$3] || RegExp.$2 || null,
            name: RegExp.$3
        }) : (e = a, b = {
            condition: null,
            name: ""
        }), b.urls = {}, (t.map[e] || e).split(y).forEach(c, b), !b.urls.include && b.urls.amd && (this.saved = !0, b.initial = this), b
    }

    function e(a) {
        var b, c, e = a.getAttribute("data-include") || "",
            f = a.lazyInclude;
        return f && f.str == e || (c = {
            saved: !1,
            content: null
        }, f = {
            str: e,
            candidates: (t.map[e] || e).split(w).map(d, c)
        }, !(b = f.candidates.length) || f.candidates[b - 1].condition ? (c.saved = !0, f.candidates.push({
            urls: {},
            condition: null,
            name: "initial",
            content: c
        })) : c.saved && 1 == f.candidates.length && (c.saved = !1), f.initialContent = c, c.saved && (c.content = a.innerHTML), a.lazyInclude = f, f.candidates.length > 1 ? lazySizes.aC(a, "lazyconditionalinclude") : lazySizes.rC(a, "lazyconditionalinclude")), f
    }

    function f(b, c) {
        var d = !c.condition;
        return c.condition && (g(), v[c.name] ? d = !0 : a.matchMedia && "string" == typeof c.condition ? d = (matchMedia(c.condition) || {}).matches : "function" == typeof c.condition && (d = c.condition(b, c))), d
    }

    function g() {
        var a;
        v || (u || (u = b.querySelector(t.contentElement)), u ? (a = (getComputedStyle(u, ":after").getPropertyValue("content") || "none").replace(B, ""), v = {}, a && (v[a] = 1), a = (getComputedStyle(u, ":before").getPropertyValue("content") || "none").replace(B, ""), a && (v[a] = 1)) : v = {})
    }

    function h(a) {
        var b, c, d = a.lazyInclude;
        if (d && d.candidates)
            for (b = 0; b < d.candidates.length && (c = d.candidates[b], !f(a, c)); b++) ;
        return c && c != d.current || (c = null), c
    }

    function i(a, b) {
        var c = new XMLHttpRequest;
        c.addEventListener("readystatechange", function () {
            var a = this.DONE || 4;
            this.readyState === a && (b(c), c = null)
        }, !1), c.open.apply(c, a.openArgs), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.xhrModifier && a.xhrModifier(c, elem, candidate), c.send(a.sendData)
    }

    function j(a, b) {
        a = a.split("|,|"), require(a, b)
    }

    function k(a) {
        if (!x[a]) {
            var c = b.createElement("link"),
                d = b.getElementsByTagName("script")[0];
            c.rel = "stylesheet", c.href = a, d.parentNode.insertBefore(c, d), x[a] = !0, x[c.href] = !0
        }
    }

    function l(a) {
        a = a.split("|,|"), a.forEach(k)
    }

    function m(a) {
        a && "function" == typeof a.lazytransform && a.lazytransform(this)
    }

    function n(a) {
        a && "function" == typeof a.lazyunload && a.lazyunload(this)
    }

    function o(a) {
        a && "function" == typeof a.lazyload && a.lazyload(this)
    }

    function p(b, c) {
        var d, e, f, g = b.lazyInclude.current || null,
            h = {
                candidate: c,
                openArgs: ["GET", c.urls.include, !0],
                sendData: null,
                xhrModifier: null,
                content: c.content && c.content.content || c.content,
                oldCandidate: g
            },
            k = lazySizes.fire(b, "lazyincludeload", h);
        return k.defaultPrevented ? void E.d() : (d = function () {
            var d, h = e.status,
                i = e.content || e.responseText,
                j = !(null != i || !g || !g.urls.include),
                k = {
                    candidate: c,
                    content: i,
                    text: e.responseText || e.content,
                    response: e.response,
                    xml: e.responseXML,
                    isSuccess: "status" in e ? h >= 200 && 300 > h || 304 === h : !0,
                    oldCandidate: g,
                    insert: !0,
                    resetHTML: j
                },
                l = {
                    target: b,
                    details: k,
                    detail: k
                };
            c.modules = f, g && g.modules && (g.modules.forEach(n, l), g.modules = null, k.resetHTML && null == k.content && c.initial && c.initial.saved && (k.content = c.initial.content)), f.forEach(m, l), d = lazySizes.fire(b, "lazyincludeloaded", k), k.insert && k.isSuccess && !d.defaultPrevented && null != k.content && k.content != b.innerHTML && (a.jQuery ? jQuery(b).html(k.content) : b.innerHTML = k.content), E.d(), f.forEach(o, l), setTimeout(function () {
                lazySizes.fire(b, "lazyincluded", k)
            }), e = null, f = null
        }, b.lazyInclude.current = c, b.setAttribute("data-currentinclude", c.name), c.urls.css && l(c.urls.css), null == h.content && c.urls.include ? i(h, function (a) {
            e = a, f && d()
        }) : e = h, c.urls.amd || c.urls.module ? (loadRequireImportCB = function () {
            f = Array.prototype.slice.call(arguments), e && d()
        }, c.urls.module && a.System && System["import"] ? System["import"](c.urls.module).then(loadRequireImportCB) : a.require && j(c.urls.amd, loadRequireImportCB)) : f = [], void(e && f && d()))
    }

    function q(a) {
        var b, c = e(a);
        return c.candidates.length && C.contains(a) ? (b = h(a), b && p(a, b), !0) : void 0
    }

    function r(a) {
        !a.defaultPrevented && a.target.getAttribute("data-include") && (E.q(a.target), a.detail.firesLoad = !0)
    }

    if (b.getElementsByClassName) {
        var s, t, u, v, w = /\s*,+\s+/,
            x = {},
            y = /\s+/,
            z = /^(amd|css|module)\:(.+)/i,
            A = /(.+)\s+(\(\s*(.+)\s*\))/,
            B = /['"]/g,
            C = b.documentElement,
            D = b.getElementsByClassName("lazyconditionalinclude"),
            E = function () {
                var a = 2,
                    b = 3,
                    c = a,
                    d = 0,
                    e = 0,
                    f = [],
                    g = function () {
                        var a, b = function () {
                            f.length && (d = 0, f.d())
                        };
                        return function () {
                            clearTimeout(a), a = setTimeout(b, 999)
                        }
                    }();
                return {
                    q: function (a) {
                        var h = null == a.getAttribute("data-lazyqueue");
                        h && (e++, c = b), d > c ? f[h ? "unshift" : "push"](a) : q(a) && (d++, g())
                    },
                    d: function () {
                        if (d && d--, e > 0 && (e--, e || (c = a)), !(d > c)) {
                            for (; f.length;)
                                if (q(f.shift())) {
                                    d++;
                                    break
                                }
                            g()
                        }
                    }
                }
            }(),
            F = function () {
                var a, b = function () {
                    for (var a = 0, b = D.length; b > a; a++) !lazySizes.hC(D[a], s.lazyClass) && h(D[a]) && lazySizes.aC(D[a], s.lazyClass)
                };
                return function (c) {
                    clearTimeout(a), v = null, a = setTimeout(b, "resize" == c.type ? 31 : 0)
                }
            }();
        s = a.lazySizes && lazySizes.cfg || a.lazySizesConfig, s || (s = {}, a.lazySizesConfig = s), s.include || (s.include = {}), t = s.include, t.contentElement || (t.contentElement = "html"), t.conditions || (t.conditions = {}), t.map || (t.map = {}), addEventListener("lazybeforeunveil", r, !1), addEventListener("resize", F, !1), addEventListener("lazyrefreshincludes", F, !1)
    }
}(window, document);
/* ls.unveilhooks.min.js */
/*! lazysizes - v1.1.3 -  Licensed MIT */
!function (a, b) {
    "use strict";

    function c(a, c) {
        if (!e[a]) {
            var d = b.createElement(c ? "link" : "script"),
                f = b.getElementsByTagName("script")[0];
            c ? (d.rel = "stylesheet", d.href = a) : d.src = a, e[a] = !0, e[d.src || d.href] = !0, f.parentNode.insertBefore(d, f)
        }
    }

    var d, e = {};
    b.addEventListener && a.getComputedStyle && (d = function (a, c) {
        var d = b.createElement("img");
        d.onload = function () {
            d.onload = null, d.onerror = null, d = null, c()
        }, d.onerror = d.onload, d.src = a, d && d.complete && d.onload && d.onload()
    }, addEventListener("lazybeforeunveil", function (b) {
        var e, f, g, h;
        b.defaultPrevented || ("none" == b.target.preload && (b.target.preload = "auto"), e = b.target.getAttribute("data-link"), e && c(e, !0), e = b.target.getAttribute("data-script"), e && c(e), e = b.target.getAttribute("data-require"), e && a.require && require([e]), g = b.target.getAttribute("data-bg"), g && (b.detail.firesLoad = !0, f = function () {
            b.target.style.backgroundImage = "url(" + g + ")", b.detail.firesLoad = !1, lazySizes.fire(b.target, "_lazyloaded", {}, !0, !0)
        }, d(g, f)), h = b.target.getAttribute("data-poster"), h && (b.detail.firesLoad = !0, f = function () {
            b.target.poster = h, b.detail.firesLoad = !1, lazySizes.fire(b.target, "_lazyloaded", {}, !0, !0)
        }, d(h, f)))
    }, !1))
}(window, document);
/* ls.static-gecko-picture.min.js */
/*! lazysizes - v1.1.3 -  Licensed MIT */
!function () {
    var a = navigator.userAgent;
    window.HTMLPictureElement && /ecko/.test(a) && a.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function () {
        var a, b = document.createElement("source"),
            c = function (a) {
                var c = a.parentNode,
                    d = b.cloneNode();
                c.insertBefore(d, c.firstElementChild), setTimeout(function () {
                    c.removeChild(d)
                })
            },
            d = function () {
                var a, b = document.querySelectorAll("picture > img");
                for (a = 0; a < b.length; a++)
                    if (b[a].complete) b[a].currentSrc && c(b[a]);
                    else if (b[a].currentSrc) {
                        removeEventListener("resize", e);
                        break
                    }
            },
            e = function () {
                clearTimeout(a), a = setTimeout(d, 99)
            };
        return b.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", e
    }())
}();
/*! respimage - v1.4.0 - 2015-04-17 Licensed MIT */
!function (a, b, c) {
    "use strict";

    function d(a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
    }

    function e() {
        var b;
        R = !1, U = a.devicePixelRatio, S = {}, T = {}, b = (U || 1) * D.xQuant, D.uT || (D.maxX = Math.max(1.3, D.maxX), b = Math.min(b, D.maxX), v.DPR = b), V.width = Math.max(a.innerWidth || 0, B.clientWidth), V.height = Math.max(a.innerHeight || 0, B.clientHeight), V.vw = V.width / 100, V.vh = V.height / 100, V.em = v.getEmValue(), V.rem = V.em, o = D.lazyFactor / 2, o = o * b + o, q = .2 + .1 * b, l = .5 + .2 * b, m = .5 + .25 * b, p = b + 1.3, (n = V.width > V.height) || (o *= .9), I && (o *= .9), u = [V.width, V.height, b].join("-")
    }

    function f(a, b, c) {
        var d = b * Math.pow(a - .3, 1.9);
        return n || (d /= 1.3), a += d, a > c
    }

    function g(a) {
        var b, c = v.getSet(a),
            d = !1;
        "pending" != c && (d = u, c && (b = v.setRes(c), d = v.applySetCandidate(b, a))), a[v.ns].evaled = d
    }

    function h(a, b) {
        return a.res - b.res
    }

    function i(a, b, c) {
        var d;
        return !c && b && (c = a[v.ns].sets, c = c && c[c.length - 1]), d = j(b, c), d && (b = v.makeUrl(b), a[v.ns].curSrc = b, a[v.ns].curCan = d, d.res || _(d, d.set.sizes)), d
    }

    function j(a, b) {
        var c, d, e;
        if (a && b)
            for (e = v.parseSet(b), a = v.makeUrl(a), c = 0; c < e.length; c++)
                if (a == v.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }

    function k(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[v.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    b.createElement("picture");
    var l, m, n, o, p, q, r, s, t, u, v = {},
        w = function () {
        },
        x = b.createElement("img"),
        y = x.getAttribute,
        z = x.setAttribute,
        A = x.removeAttribute,
        B = b.documentElement,
        C = {},
        D = {
            xQuant: 1,
            lazyFactor: .4,
            maxX: 2
        },
        E = "data-risrc",
        F = E + "set",
        G = "webkitBackfaceVisibility" in B.style,
        H = navigator.userAgent,
        I = /rident/.test(H) || /ecko/.test(H) && H.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        J = "currentSrc",
        K = /\s+\+?\d+(e\d+)?w/,
        L = /((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,
        M = /^([\+eE\d\.]+)(w|x)$/,
        N = /\s*\d+h\s*/,
        O = a.respimgCFG,
        P = ("https:" == location.protocol, "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
        Q = "font-size:100%!important;",
        R = !0,
        S = {},
        T = {},
        U = a.devicePixelRatio,
        V = {
            px: 1,
            "in": 96
        },
        W = b.createElement("a"),
        X = !1,
        Y = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Z = function (a) {
            var b = {};
            return function (c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        $ = function () {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function () {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = Z(function (a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "")
                });
            return function (b, d) {
                var e;
                if (!(b in S))
                    if (S[b] = !1, d && (e = b.match(a))) S[b] = e[1] * V[e[2]];
                    else try {
                        S[b] = new Function("e", c(b))(V)
                    } catch (f) {
                    }
                return S[b]
            }
        }(),
        _ = function (a, b) {
            return a.w ? (a.cWidth = v.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.x, a
        },
        ab = function (c) {
            var d, e, f, g = c || {};
            if (g.elements && 1 == g.elements.nodeType && ("IMG" == g.elements.nodeName.toUpperCase() ? g.elements = [g.elements] : (g.context = g.elements, g.elements = null)), g.reparse && !g.reevaluate && (g.reevaluate = !0, a.console && console.warn && console.warn("reparse was renamed to reevaluate!")), d = g.elements || v.qsa(g.context || b, g.reevaluate || g.reselect ? v.sel : v.selShort), f = d.length) {
                for (v.setupRun(g), X = !0, e = 0; f > e; e++) v.fillImg(d[e], g);
                v.teardownRun(g)
            }
        },
        bb = Z(function (a) {
            var b = [1, "x"],
                c = d(a || "");
            return c && (c = c.replace(N, ""), b = c.match(M) ? [1 * RegExp.$1, RegExp.$2] : !1), b
        });
    J in x || (J = "src"), C["image/jpeg"] = !0, C["image/gif"] = !0, C["image/png"] = !0, C["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), v.ns = ("ri" + (new Date).getTime()).substr(0, 9), v.supSrcset = "srcset" in x, v.supSizes = "sizes" in x, v.selShort = "picture>img,img[srcset]", v.sel = v.selShort, v.cfg = D, v.supSrcset && (v.sel += ",img[" + F + "]"), v.DPR = U || 1, v.u = V, v.types = C, s = v.supSrcset && !v.supSizes, v.setSize = w, v.makeUrl = Z(function (a) {
        return W.href = a, W.href
    }), v.qsa = function (a, b) {
        return a.querySelectorAll(b)
    }, v.matchesMedia = function () {
        return v.matchesMedia = a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? function (a) {
            return !a || matchMedia(a).matches
        } : v.mMQ, v.matchesMedia.apply(this, arguments)
    }, v.mMQ = function (a) {
        return a ? $(a) : !0
    }, v.calcLength = function (a) {
        var b = $(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, v.supportsType = function (a) {
        return a ? C[a] : !0
    }, v.parseSize = Z(function (a) {
        var b = (a || "").match(L);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), v.parseSet = function (a) {
        if (!a.cands) {
            var b, c, d, e, f, g, h = a.srcset;
            for (a.cands = []; h;) h = h.replace(/^\s+/g, ""), b = h.search(/\s/g), d = null, -1 != b ? (c = h.slice(0, b), e = c.charAt(c.length - 1), "," != e && c || (c = c.replace(/,+$/, ""), d = ""), h = h.slice(b + 1), null == d && (f = h.indexOf(","), -1 != f ? (d = h.slice(0, f), h = h.slice(f + 1)) : (d = h, h = ""))) : (c = h, h = ""), c && (d = bb(d)) && (g = {
                url: c.replace(/^,+/, ""),
                set: a
            }, g[d[1]] = d[0], "x" == d[1] && 1 == d[0] && (a.has1x = !0), a.cands.push(g))
        }
        return a.cands
    }, v.getEmValue = function () {
        var a;
        if (!r && (a = b.body)) {
            var c = b.createElement("div"),
                d = B.style.cssText,
                e = a.style.cssText;
            c.style.cssText = P, B.style.cssText = Q, a.style.cssText = Q, a.appendChild(c), r = c.offsetWidth, a.removeChild(c), r = parseFloat(r, 10), B.style.cssText = d, a.style.cssText = e
        }
        return r || 16
    }, v.calcListLength = function (a) {
        if (!(a in T) || D.uT) {
            var b, c, e, f, g, h, i = d(a).split(/\s*,\s*/),
                j = !1;
            for (g = 0, h = i.length; h > g && (b = i[g], c = v.parseSize(b), e = c.length, f = c.media, !e || !v.matchesMedia(f) || (j = v.calcLength(e)) === !1); g++) ;
            T[a] = j ? j : V.width
        }
        return T[a]
    }, v.setRes = function (a) {
        var b;
        if (a) {
            b = v.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes)
        }
        return b
    }, v.setRes.res = _, v.applySetCandidate = function (a, b) {
        if (a.length) {
            var c, d, e, g, j, k, n, r, s, t, w, x, y, z = b[v.ns],
                A = u,
                B = o,
                C = q;
            if (r = z.curSrc || b[J], s = z.curCan || i(b, r, a[0].set), d = v.DPR, y = s && s.res, !n && r && (x = I && !b.complete && s && y > d, x || s && !(p > y) || (s && d > y && y > l && (m > y && (B *= .87, C += .04 * d), s.res += B * Math.pow(y - C, 2)), t = !z.pic || s && s.set == a[0].set, s && t && s.res >= d && (n = s))), !n)
                for (y && (s.res = s.res - (s.res - y) / 2), a.sort(h), k = a.length, n = a[k - 1], e = 0; k > e; e++)
                    if (c = a[e], c.res >= d) {
                        g = e - 1, n = a[g] && (j = c.res - d) && (x || r != v.makeUrl(c.url)) && f(a[g].res, j, d) ? a[g] : c;
                        break
                    }
            return y && (s.res = y), n && (w = v.makeUrl(n.url), z.curSrc = w, z.curCan = n, w != r && v.setSrc(b, n), v.setSize(b)), A
        }
    }, v.setSrc = function (a, b) {
        var c;
        a.src = b.url, G && (c = a.style.zoom, a.style.zoom = "0.999", a.style.zoom = c)
    }, v.getSet = function (a) {
        var b, c, d, e = !1,
            f = a[v.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && v.matchesMedia(c.media) && (d = v.supportsType(c.type))) {
                "pending" == d && (c = d), e = c;
                break
            }
        return e
    }, v.parseSets = function (a, b, d) {
        var e, f, g, h, i = "PICTURE" == b.nodeName.toUpperCase(),
            l = a[v.ns];
        (l.src === c || d.src) && (l.src = y.call(a, "src"), l.src ? z.call(a, E, l.src) : A.call(a, E)), (l.srcset === c || !v.supSrcset || a.srcset || d.srcset) && (e = y.call(a, "srcset"), l.srcset = e, h = !0), l.sets = [], i && (l.pic = !0, k(b, l.sets)), l.srcset ? (f = {
            srcset: l.srcset,
            sizes: y.call(a, "sizes")
        }, l.sets.push(f), g = (s || l.src) && K.test(l.srcset || ""), g || !l.src || j(l.src, f) || f.has1x || (f.srcset += ", " + l.src, f.cands.push({
            url: l.src,
            x: 1,
            set: f
        }))) : l.src && l.sets.push({
            srcset: l.src,
            sizes: null
        }), l.curCan = null, l.curSrc = c, l.supported = !(i || f && !v.supSrcset || g), h && v.supSrcset && !l.supported && (e ? (z.call(a, F, e), a.srcset = "") : A.call(a, F)), l.supported && !l.srcset && (!l.src && a.src || a.src != v.makeUrl(l.src)) && (null == l.src ? a.removeAttribute("src") : a.src = l.src), l.parsed = !0
    }, v.fillImg = function (a, b) {
        var c, d, e = b.reselect || b.reevaluate;
        if (a[v.ns] || (a[v.ns] = {}), d = a[v.ns], e || d.evaled != u) {
            if (!d.parsed || b.reevaluate) {
                if (c = a.parentNode, !c) return;
                v.parseSets(a, c, b)
            }
            d.supported ? d.evaled = u : g(a)
        }
    }, v.setupRun = function (b) {
        (!X || R || U != a.devicePixelRatio) && (e(), b.elements || b.context || clearTimeout(t))
    }, a.HTMLPictureElement ? (ab = w, v.fillImg = w) : !function () {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function () {
                var a = b.readyState || "";
                h = setTimeout(e, "loading" == a ? 200 : 999), b.body && (c = c || d.test(a), v.fillImgs(), c && clearTimeout(h))
            },
            f = function () {
                v.fillImgs()
            },
            g = function () {
                clearTimeout(t), R = !0, t = setTimeout(f, 99)
            },
            h = setTimeout(e, b.body ? 9 : 99);
        Y(a, "resize", g), Y(b, "readystatechange", e)
    }(), v.respimage = ab, v.fillImgs = ab, v.teardownRun = w, ab._ = v, a.respimage = ab, a.respimgCFG = {
        ri: v,
        push: function (a) {
            var b = a.shift();
            "function" == typeof v[b] ? v[b].apply(v, a) : (D[b] = a[0], X && v.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; O && O.length;) a.respimgCFG.push(O.shift())
}(window, document);
/* ri.intrinsic.min.js */
!function (a) {
    "use strict";
    var b, c = 0,
        d = function () {
            window.respimage && a(window.respimage), (window.respimage || c > 9999) && clearInterval(b), c++
        };
    b = setInterval(d, 8), d()
}(function (a, b) {
    "use strict";
    var c = window.document,
        d = a._,
        e = {},
        f = d.cfg,
        g = function (a, b, c) {
            var d = c.curCan;
            a && b.setAttribute("width", parseInt(a / d.res, 10))
        },
        h = function (a, b, d) {
            var f, h, i;
            a in e ? g(e[a], b, d) : (i = function () {
                d.pendingURLSize = null, f.onload = null, f.onerror = null, b = null, f = null
            }, d.pendingURLSize = a, h = d.curCan, h.w && g(h.w, b, d), f = c.createElement("img"), f.onload = function () {
                if (e[a] = f.naturalWidth || f.width, !e[a]) try {
                    c.body.appendChild(f), e[a] = f.offsetWidth || f.naturalWidth || f.width, c.body.removeChild(f)
                } catch (h) {
                }
                a == b.src && g(e[a], b, d), i()
            }, f.onerror = i, f.src = a, f && f.complete && f.onload())
        },
        i = function () {
            var a, b, e = function () {
                var e, f, g, h = c.getElementsByTagName("img"),
                    i = {
                        elements: []
                    };
                for (d.setupRun(i), a = !1, clearTimeout(b), e = 0, f = h.length; f > e; e++) g = h[e][d.ns], g && g.curCan && (d.setRes.res(g.curCan, g.curCan.set.sizes), d.setSize(h[e]));
                d.teardownRun(i)
            };
            return function () {
                !a && f.addSize && (a = !0, clearTimeout(b), b = setTimeout(e))
            }
        }();
    d.setSize = function (a) {
        var c, e = a[d.ns],
            g = e.curCan;
        e.dims === b && (e.dims = a.getAttribute("height") && a.getAttribute("width")), f.addSize && g && !e.dims && (c = d.makeUrl(g.url), c == a.src && c !== e.pendingURLSize && h(c, a, e))
    }, window.addEventListener && !window.HTMLPictureElement && addEventListener("resize", i, !1), f.addSize = "addSize" in f ? !!f.addSize : !0, i()
});
document.addEventListener('lazybeforeunveil', function (e) {
    var p = e.target;
    var k = 0;
    while (k < 5) {
        k++;
        c = p.className;
        //alert(c);
        p = p.parentNode;
        if (c) var rc = c.match(/fw-ratio-\d+(?:-\d+)?/gi);
        if (rc && e.target.getAttribute('data-src' + rc)) {
            e.target.setAttribute('data-srcset', e.target.getAttribute('data-src' + rc));
            return;
        }
        if (rc && e.target.getAttribute('data-bg' + rc)) {
            e.target.setAttribute('data-bgset', e.target.getAttribute('data-bg' + rc));
            return;
        }
    }
});