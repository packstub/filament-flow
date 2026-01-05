var Fr = Array.isArray, Pl = Array.prototype.indexOf, Kr = Array.from, Ml = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, bs = Object.getOwnPropertyDescriptors, xs = Object.prototype, Al = Array.prototype, Yr = Object.getPrototypeOf, bi = Object.isExtensible;
function Tn(e) {
  return typeof e == "function";
}
const Lt = () => {
};
function Tl(e) {
  return e();
}
function mo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Es() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ce(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function jn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ee = 2, Vo = 4, Zr = 8, Ss = 1 << 24, St = 16, kt = 32, Vt = 64, Xr = 128, et = 512, Se = 1024, Fe = 2048, ct = 4096, Be = 8192, _t = 16384, Bo = 32768, Rt = 65536, xi = 1 << 17, ks = 1 << 18, an = 1 << 19, Cs = 1 << 20, mt = 1 << 25, jt = 32768, yo = 1 << 21, Fo = 1 << 22, It = 1 << 23, at = /* @__PURE__ */ Symbol("$state"), Ns = /* @__PURE__ */ Symbol("legacy props"), Dl = /* @__PURE__ */ Symbol(""), hn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Ko(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Il() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ol() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ll(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Kl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Yl = 1, Zl = 2, Ps = 4, Xl = 8, Wl = 16, ql = 1, Gl = 2, Ul = 4, jl = 8, Jl = 16, Ms = 1, Ql = 2, xe = /* @__PURE__ */ Symbol(), $l = "http://www.w3.org/1999/xhtml", ec = "@attach";
function tc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function nc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function As(e) {
  return e === this.v;
}
function Ts(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ds(e) {
  return !Ts(e, this.v);
}
let Pn = !1;
function rc() {
  Pn = !0;
}
const oc = [];
function Is(e, t = !1, n = !1) {
  return wr(e, /* @__PURE__ */ new Map(), "", oc, null, n);
}
function wr(e, t, n, r, o = null, i = !1) {
  if (typeof e == "object" && e !== null) {
    var s = t.get(e);
    if (s !== void 0) return s;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (Fr(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = wr(c, t, n, r, null, i));
      }
      return a;
    }
    if (Yr(e) === xs) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = wr(
          // @ts-expect-error
          e[d],
          t,
          n,
          r,
          null,
          i
        );
      return a;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function" && !i)
      return wr(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
let he = null;
function wn(e) {
  he = e;
}
function Yo(e) {
  return (
    /** @type {T} */
    Xo().get(e)
  );
}
function Zo(e, t) {
  return Xo().set(e, t), t;
}
function ic(e) {
  return Xo().has(e);
}
function ee(e, t = !1, n) {
  he = {
    p: he,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Pn && !t ? { s: null, u: null, $: [] } : null
  };
}
function te(e) {
  var t = (
    /** @type {ComponentContext} */
    he
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Gs(r);
  }
  return t.i = !0, he = t.p, /** @type {T} */
  {};
}
function Jn() {
  return !Pn || he !== null && he.l === null;
}
function Xo(e) {
  return he === null && Ko(), he.c ??= new Map(sc(he) || void 0);
}
function sc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let gn = [];
function ac() {
  var e = gn;
  gn = [], mo(e);
}
function ln(e) {
  if (gn.length === 0) {
    var t = gn;
    queueMicrotask(() => {
      t === gn && ac();
    });
  }
  gn.push(e);
}
function zs(e) {
  var t = le;
  if (t === null)
    return ie.f |= It, e;
  if ((t.f & Bo) === 0) {
    if ((t.f & Xr) === 0)
      throw e;
    t.b.error(e);
  } else
    _n(e, t);
}
function _n(e, t) {
  for (; t !== null; ) {
    if ((t.f & Xr) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const ur = /* @__PURE__ */ new Set();
let ve = null, Xe = null, rt = [], Wo = null, wo = !1;
class Qe {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    rt = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (ve = null, Ei(n.render_effects), Ei(n.effects), this.#l?.resolve()), Xe = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= Se;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (kt | Vt)) !== 0, s = i && (o & Se) !== 0, a = s || (o & Be) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Xr) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Se : (o & Vo) !== 0 ? n.effects.push(r) : nr(r) && ((r.f & St) !== 0 && this.#i.add(r), Kn(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#a(n.effects), this.#a(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      (n.f & Fe) !== 0 ? this.#i.add(n) : (n.f & ct) !== 0 && this.#o.add(n), this.#c(n.deps), ke(n, Se);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Ee) === 0 || (n.f & jt) === 0 || (n.f ^= jt, this.#c(
          /** @type {Derived} */
          n.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & It) === 0 && (this.current.set(t, t.v), Xe?.set(t, t.v));
  }
  activate() {
    ve = this, this.apply();
  }
  deactivate() {
    ve === this && (ve = null, Xe = null);
  }
  flush() {
    if (this.activate(), rt.length > 0) {
      if (lc(), ve !== null && ve !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #u() {
    if (this.#r === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (ur.size > 1) {
      this.previous.clear();
      var t = Xe, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of ur) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, c] of this.current) {
          if (i.current.has(l))
            if (n && c !== i.current.get(l))
              i.current.set(l, c);
            else
              continue;
          s.push(l);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var o = rt;
          rt = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Os(d, a, l, c);
          if (rt.length > 0) {
            ve = i, i.apply();
            for (const d of rt)
              i.#s(d, r);
            i.deactivate();
          }
          rt = o;
        }
      }
      ve = null, Xe = t;
    }
    this.committed = !0, ur.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#n += 1, t && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#n -= 1, t && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const t of this.#i)
      this.#o.delete(t), ke(t, Fe), Jt(t);
    for (const t of this.#o)
      ke(t, ct), Jt(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#l ??= Es()).promise;
  }
  static ensure() {
    if (ve === null) {
      const t = ve = new Qe();
      ur.add(ve), Qe.enqueue(() => {
        ve === t && t.flush();
      });
    }
    return ve;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    ln(t);
  }
  apply() {
  }
}
function lc() {
  var e = qt;
  wo = !0;
  var t = null;
  try {
    var n = 0;
    for (Cr(!0); rt.length > 0; ) {
      var r = Qe.ensure();
      if (n++ > 1e3) {
        var o, i;
        cc();
      }
      r.process(rt), zt.clear();
    }
  } finally {
    wo = !1, Cr(e), Wo = null;
  }
}
function cc() {
  try {
    Hl();
  } catch (e) {
    _n(e, Wo);
  }
}
let vt = null;
function Ei(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (_t | Be)) === 0 && nr(r) && (vt = /* @__PURE__ */ new Set(), Kn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ta(r) : r.fn = null), vt?.size > 0)) {
        zt.clear();
        for (const o of vt) {
          if ((o.f & (_t | Be)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            vt.has(s) && (vt.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (_t | Be)) === 0 && Kn(l);
          }
        }
        vt.clear();
      }
    }
    vt = null;
  }
}
function Os(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Ee) !== 0 ? Os(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Fo | St)) !== 0 && (i & Fe) === 0 && Rs(o, t, r) && (ke(o, Fe), Jt(
        /** @type {Effect} */
        o
      ));
    }
}
function Rs(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Ee) !== 0 && Rs(
        /** @type {Derived} */
        o,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Jt(e) {
  for (var t = Wo = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (wo && t === le && (n & St) !== 0 && (n & ks) === 0)
      return;
    if ((n & (Vt | kt)) !== 0) {
      if ((n & Se) === 0) return;
      t.f ^= Se;
    }
  }
  rt.push(t);
}
function Hs(e) {
  let t = 0, n = Qt(0), r;
  return () => {
    Bn() && (u(n), Wr(() => (t === 0 && (r = Ve(() => e(() => Ln(n)))), t += 1, () => {
      ln(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ln(n));
      });
    })));
  };
}
var uc = Rt | an | Xr;
function dc(e, t, n) {
  new fc(e, t, n);
}
class fc {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #c = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #d = 0;
  #f = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #w = Hs(() => (this.#h = Qt(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    le.b, this.#e = !!this.#r.pending, this.#i = tr(() => {
      le.b = this;
      {
        var o = this.#m();
        try {
          this.#o = De(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, uc);
  }
  #_() {
    try {
      this.#o = De(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = De(() => t(this.#t)), Qe.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (Qe.ensure(), De(() => this.#l(n)))), this.#f > 0 ? this.#p() : (Wt(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#e = !1);
    }));
  }
  #m() {
    var t = this.#t;
    return this.#e && (this.#u = bt(), this.#t.before(this.#u), t = this.#u), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#e || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #v(t) {
    var n = le, r = ie, o = he;
    ut(this.#i), Ie(this.#i), wn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return zs(i), null;
    } finally {
      ut(n), Ie(r), wn(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), oa(this.#o, this.#c)), this.#s === null && (this.#s = De(() => t(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(t);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && Wt(this.#s, () => {
      this.#s = null;
    }), this.#c && (this.#t.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#h && bn(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#w(), u(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#g || !n && !r)
      throw t;
    this.#o && (_e(this.#o), this.#o = null), this.#s && (_e(this.#s), this.#s = null), this.#a && (_e(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        nc();
        return;
      }
      o = !0, i && Kl(), Qe.ensure(), this.#d = 0, this.#a !== null && Wt(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, De(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = ie;
    try {
      Ie(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      _n(l, this.#i && this.#i.parent);
    } finally {
      Ie(a);
    }
    r && ln(() => {
      this.#a = this.#v(() => {
        Qe.ensure(), this.#g = !0;
        try {
          return De(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return _n(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Ls(e, t, n, r) {
  const o = Jn() ? Qn : qo;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ve, s = (
    /** @type {Effect} */
    le
  ), a = hc();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ gc(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & _t) === 0 && _n(d, s);
      }
      i?.deactivate(), kr();
    }).catch((c) => {
      _n(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), kr();
    }
  }) : l();
}
function hc() {
  var e = le, t = ie, n = he, r = ve;
  return function(i = !0) {
    ut(e), Ie(t), wn(n), i && r?.activate();
  };
}
function kr() {
  ut(null), Ie(null), wn(null);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  var t = Ee | Fe, n = ie !== null && (ie.f & Ee) !== 0 ? (
    /** @type {Derived} */
    ie
  ) : null;
  return le !== null && (le.f |= an), {
    ctx: he,
    deps: null,
    effects: null,
    equals: As,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: n ?? le,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function gc(e, t) {
  let n = (
    /** @type {Effect | null} */
    le
  );
  n === null && Il();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Qt(
    /** @type {V} */
    xe
  ), s = !ie, a = /* @__PURE__ */ new Map();
  return Sc(() => {
    var l = Es();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === ve && c.committed && c.deactivate(), kr();
      });
    } catch (f) {
      l.reject(f), kr();
    }
    var c = (
      /** @type {Batch} */
      ve
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(hn), a.delete(c), a.set(c, l);
    }
    const h = (f, g = void 0) => {
      if (c.activate(), g)
        g !== hn && (i.f |= It, bn(i, g));
      else {
        (i.f & It) !== 0 && (i.f ^= It), bn(i, f);
        for (const [v, w] of a) {
          if (a.delete(v), v === c) break;
          w.reject(hn);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), jo(() => {
    for (const l of a.values())
      l.reject(hn);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === o ? l(i) : c(o);
      }
      d.then(h, h);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function y(e) {
  const t = /* @__PURE__ */ Qn(e);
  return ia(t), t;
}
// @__NO_SIDE_EFFECTS__
function qo(e) {
  const t = /* @__PURE__ */ Qn(e);
  return t.equals = Ds, t;
}
function Vs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _e(
        /** @type {Effect} */
        t[n]
      );
  }
}
function vc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ee) === 0)
      return (t.f & _t) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Go(e) {
  var t, n = le;
  ut(vc(e));
  try {
    e.f &= ~jt, Vs(e), t = ca(e);
  } finally {
    ut(n);
  }
  return t;
}
function Bs(e) {
  var t = Go(e);
  if (e.equals(t) || (ve?.is_fork || (e.v = t), e.wv = aa()), !cn)
    if (Xe !== null)
      (Bn() || ve?.is_fork) && Xe.set(e, t);
    else {
      var n = (e.f & et) === 0 ? ct : Se;
      ke(e, n);
    }
}
let _o = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let Fs = !1;
function Qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: As,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  const n = Qt(e);
  return ia(n), n;
}
// @__NO_SIDE_EFFECTS__
function pc(e, t = !1, n = !0) {
  const r = Qt(e);
  return t || (r.equals = Ds), Pn && n && he !== null && he.l !== null && (he.l.s ??= []).push(r), r;
}
function O(e, t, n = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!st || (ie.f & xi) !== 0) && Jn() && (ie.f & (Ee | St | Fo | xi)) !== 0 && !xt?.includes(e) && Fl();
  let r = n ? it(t) : t;
  return bn(e, r);
}
function bn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    cn ? zt.set(e, t) : zt.set(e, n), e.v = t;
    var r = Qe.ensure();
    r.capture(e, n), (e.f & Ee) !== 0 && ((e.f & Fe) !== 0 && Go(
      /** @type {Derived} */
      e
    ), ke(e, (e.f & et) !== 0 ? Se : ct)), e.wv = aa(), Ks(e, Fe), Jn() && le !== null && (le.f & Se) !== 0 && (le.f & (kt | Vt)) === 0 && (Ze === null ? Cc([e]) : Ze.push(e)), !r.is_fork && _o.size > 0 && !Fs && mc();
  }
  return t;
}
function mc() {
  Fs = !1;
  var e = qt;
  Cr(!0);
  const t = Array.from(_o);
  try {
    for (const n of t)
      (n.f & Se) !== 0 && ke(n, ct), nr(n) && Kn(n);
  } finally {
    Cr(e);
  }
  _o.clear();
}
function Ln(e) {
  O(e, e.v + 1);
}
function Ks(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Jn(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === le)) {
        var l = (a & Fe) === 0;
        if (l && ke(s, t), (a & Ee) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Xe?.delete(c), (a & jt) === 0 && (a & et && (s.f |= jt), Ks(c, ct));
        } else l && ((a & St) !== 0 && vt !== null && vt.add(
          /** @type {Effect} */
          s
        ), Jt(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function it(e) {
  if (typeof e != "object" || e === null || at in e)
    return e;
  const t = Yr(e);
  if (t !== xs && t !== Al)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Fr(e), o = /* @__PURE__ */ se(0), i = Gt, s = (a) => {
    if (Gt === i)
      return a();
    var l = ie, c = Gt;
    Ie(null), Ci(i);
    var d = a();
    return Ie(l), Ci(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Vl();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ se(c.value);
          return n.set(l, h), h;
        }) : O(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ se(xe));
            n.set(l, d), Ln(o);
          }
        } else
          O(c, xe), Ln(o);
        return !0;
      },
      get(a, l, c) {
        if (l === at)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Dt(a, l)?.writable) && (d = s(() => {
          var g = it(h ? a[l] : xe), v = /* @__PURE__ */ se(g);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === xe ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === at)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== xe || Reflect.has(a, l);
        if (c !== void 0 || le !== null && (!d || Dt(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? it(a[l]) : xe, g = /* @__PURE__ */ se(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === xe)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? O(v, xe) : g in a && (v = s(() => /* @__PURE__ */ se(xe)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Dt(a, l)?.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), O(h, it(c)), n.set(l, h));
        else {
          f = h.v !== xe;
          var w = s(() => it(c));
          O(h, w);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, l);
        if (p?.set && p.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= _.v && O(_, k + 1);
          }
          Ln(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== xe;
        });
        for (var [c, d] of n)
          d.v !== xe && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Bl();
      }
    }
  );
}
function Si(e) {
  try {
    if (e !== null && typeof e == "object" && at in e)
      return e[at];
  } catch {
  }
  return e;
}
function yc(e, t) {
  return Object.is(Si(e), Si(t));
}
var Te, Ys, Zs, Xs;
function wc() {
  if (Te === void 0) {
    Te = window, Ys = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Zs = Dt(t, "firstChild").get, Xs = Dt(t, "nextSibling").get, bi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), bi(n) && (n.__t = void 0);
  }
}
function bt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return (
    /** @type {TemplateNode | null} */
    Zs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  return (
    /** @type {TemplateNode | null} */
    Xs.call(e)
  );
}
function q(e, t) {
  return /* @__PURE__ */ Le(e);
}
function ae(e, t = !1) {
  {
    var n = /* @__PURE__ */ Le(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $n(n) : n;
  }
}
function $(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ $n(r);
  return r;
}
function _c(e) {
  e.textContent = "";
}
function Ws() {
  return !1;
}
function bc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ln(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Uo(e) {
  var t = ie, n = le;
  Ie(null), ut(null);
  try {
    return e();
  } finally {
    Ie(t), ut(n);
  }
}
function qs(e) {
  le === null && (ie === null && Rl(), Ol()), cn && zl();
}
function xc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ge(e, t, n) {
  var r = le;
  r !== null && (r.f & Be) !== 0 && (e |= Be);
  var o = {
    ctx: he,
    deps: null,
    nodes: null,
    f: e | Fe | et,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Kn(o), o.f |= Bo;
    } catch (a) {
      throw _e(o), a;
    }
  else t !== null && Jt(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & an) === 0 && (i = i.first, (e & St) !== 0 && (e & Rt) !== 0 && i !== null && (i.f |= Rt)), i !== null && (i.parent = r, r !== null && xc(i, r), ie !== null && (ie.f & Ee) !== 0 && (e & Vt) === 0)) {
    var s = (
      /** @type {Derived} */
      ie
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Bn() {
  return ie !== null && !st;
}
function jo(e) {
  const t = Ge(Zr, null, !1);
  return ke(t, Se), t.teardown = e, t;
}
function qe(e) {
  qs();
  var t = (
    /** @type {Effect} */
    le.f
  ), n = !ie && (t & kt) !== 0 && (t & Bo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      he
    );
    (r.e ??= []).push(e);
  } else
    return Gs(e);
}
function Gs(e) {
  return Ge(Vo | Cs, e, !1);
}
function Us(e) {
  return qs(), Ge(Zr | Cs, e, !0);
}
function js(e) {
  Qe.ensure();
  const t = Ge(Vt | an, e, !0);
  return () => {
    _e(t);
  };
}
function Ec(e) {
  Qe.ensure();
  const t = Ge(Vt | an, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Wt(t, () => {
      _e(t), r(void 0);
    }) : (_e(t), r(void 0));
  });
}
function er(e) {
  return Ge(Vo, e, !1);
}
function Sc(e) {
  return Ge(Fo | an, e, !0);
}
function Wr(e, t = 0) {
  return Ge(Zr | t, e, !0);
}
function ce(e, t = [], n = [], r = []) {
  Ls(r, t, n, (o) => {
    Ge(Zr, () => e(...o.map(u)), !0);
  });
}
function tr(e, t = 0) {
  var n = Ge(St | t, e, !0);
  return n;
}
function Js(e, t = 0) {
  var n = Ge(Ss | t, e, !0);
  return n;
}
function De(e) {
  return Ge(kt | an, e, !0);
}
function Qs(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = cn, r = ie;
    ki(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      ki(n), Ie(r);
    }
  }
}
function $s(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Uo(() => {
      o.abort(hn);
    });
    var r = n.next;
    (n.f & Vt) !== 0 ? n.parent = null : _e(n, t), n = r;
  }
}
function kc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & kt) === 0 && _e(t), t = n;
  }
}
function _e(e, t = !0) {
  var n = !1;
  (t || (e.f & ks) !== 0) && e.nodes !== null && e.nodes.end !== null && (ea(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), $s(e, t && !n), Nr(e, 0), ke(e, _t);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Qs(e);
  var o = e.parent;
  o !== null && o.first !== null && ta(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function ea(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ $n(e);
    e.remove(), e = n;
  }
}
function ta(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Wt(e, t, n = !0) {
  var r = [];
  na(e, r, !0);
  var o = () => {
    n && _e(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function na(e, t, n) {
  if ((e.f & Be) === 0) {
    e.f ^= Be;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Rt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & kt) !== 0 && (e.f & St) !== 0;
      na(o, t, s ? n : !1), o = i;
    }
  }
}
function Jo(e) {
  ra(e, !0);
}
function ra(e, t) {
  if ((e.f & Be) !== 0) {
    e.f ^= Be, (e.f & Se) === 0 && (ke(e, Fe), Jt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rt) !== 0 || (n.f & kt) !== 0;
      ra(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function oa(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ $n(n);
      t.append(n), n = o;
    }
}
let qt = !1;
function Cr(e) {
  qt = e;
}
let cn = !1;
function ki(e) {
  cn = e;
}
let ie = null, st = !1;
function Ie(e) {
  ie = e;
}
let le = null;
function ut(e) {
  le = e;
}
let xt = null;
function ia(e) {
  ie !== null && (xt === null ? xt = [e] : xt.push(e));
}
let Pe = null, He = 0, Ze = null;
function Cc(e) {
  Ze = e;
}
let sa = 1, Fn = 0, Gt = Fn;
function Ci(e) {
  Gt = e;
}
function aa() {
  return ++sa;
}
function nr(e) {
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if (t & Ee && (e.f &= ~jt), (t & ct) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (nr(
          /** @type {Derived} */
          i
        ) && Bs(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & et) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && ke(e, Se);
  }
  return !1;
}
function la(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !xt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ee) !== 0 ? la(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ke(i, Fe) : (i.f & Se) !== 0 && ke(i, ct), Jt(
        /** @type {Effect} */
        i
      ));
    }
}
function ca(e) {
  var t = Pe, n = He, r = Ze, o = ie, i = xt, s = he, a = st, l = Gt, c = e.f;
  Pe = /** @type {null | Value[]} */
  null, He = 0, Ze = null, ie = (c & (kt | Vt)) === 0 ? e : null, xt = null, wn(e.ctx), st = !1, Gt = ++Fn, e.ac !== null && (Uo(() => {
    e.ac.abort(hn);
  }), e.ac = null);
  try {
    e.f |= yo;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Pe !== null) {
      var g;
      if (Nr(e, He), f !== null && He > 0)
        for (f.length = He + Pe.length, g = 0; g < Pe.length; g++)
          f[He + g] = Pe[g];
      else
        e.deps = f = Pe;
      if (Bn() && (e.f & et) !== 0)
        for (g = He; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && He < f.length && (Nr(e, He), f.length = He);
    if (Jn() && Ze !== null && !st && f !== null && (e.f & (Ee | ct | Fe)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ze.length; g++)
        la(
          Ze[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Fn++, Ze !== null && (r === null ? r = Ze : r.push(.../** @type {Source[]} */
    Ze))), (e.f & It) !== 0 && (e.f ^= It), h;
  } catch (v) {
    return zs(v);
  } finally {
    e.f ^= yo, Pe = t, He = n, Ze = r, ie = o, xt = i, wn(s), st = a, Gt = l;
  }
}
function Nc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Pl.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ee) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pe === null || !Pe.includes(t)) && (ke(t, ct), (t.f & et) !== 0 && (t.f ^= et, t.f &= ~jt), Vs(
    /** @type {Derived} **/
    t
  ), Nr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Nr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Nc(e, n[r]);
}
function Kn(e) {
  var t = e.f;
  if ((t & _t) === 0) {
    ke(e, Se);
    var n = le, r = qt;
    le = e, qt = !0;
    try {
      (t & (St | Ss)) !== 0 ? kc(e) : $s(e), Qs(e);
      var o = ca(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = sa;
      var i;
    } finally {
      qt = r, le = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & Ee) !== 0;
  if (ie !== null && !st) {
    var r = le !== null && (le.f & _t) !== 0;
    if (!r && !xt?.includes(e)) {
      var o = ie.deps;
      if ((ie.f & yo) !== 0)
        e.rv < Fn && (e.rv = Fn, Pe === null && o !== null && o[He] === e ? He++ : Pe === null ? Pe = [e] : Pe.includes(e) || Pe.push(e));
      else {
        (ie.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ie] : i.includes(ie) || i.push(ie);
      }
    }
  }
  if (cn) {
    if (zt.has(e))
      return zt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Se) === 0 && s.reactions !== null || da(s)) && (a = Go(s)), zt.set(s, a), a;
    }
  } else n && (!Xe?.has(e) || ve?.is_fork && !Bn()) && (s = /** @type {Derived} */
  e, nr(s) && Bs(s), qt && Bn() && (s.f & et) === 0 && ua(s));
  if (Xe?.has(e))
    return Xe.get(e);
  if ((e.f & It) !== 0)
    throw e.v;
  return e.v;
}
function ua(e) {
  if (e.deps !== null) {
    e.f ^= et;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Ee) !== 0 && (t.f & et) === 0 && ua(
        /** @type {Derived} */
        t
      );
  }
}
function da(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & Ee) !== 0 && da(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ve(e) {
  var t = st;
  try {
    return st = !0, e();
  } finally {
    st = t;
  }
}
const Pc = -7169;
function ke(e, t) {
  e.f = e.f & Pc | t;
}
function Mc(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function fa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (at in e)
      bo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && at in n && bo(n);
      }
  }
}
function bo(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        bo(e[r], t);
      } catch {
      }
    const n = Yr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = bs(n);
      for (let o in r) {
        const i = r[o].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function Ac(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Tc = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Dc(e) {
  return Tc.includes(e);
}
const Ic = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function zc(e) {
  return e = e.toLowerCase(), Ic[e] ?? e;
}
const Oc = ["touchstart", "touchmove"];
function Rc(e) {
  return Oc.includes(e);
}
const ha = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set();
function Qo(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || zn.call(t, i), !i.cancelBubble)
      return Uo(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ln(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Eo(e, t, n, r = {}) {
  var o = Qo(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function $t(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Qo(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && jo(() => {
    t.removeEventListener(e, s, i);
  });
}
function $o(e) {
  for (var t = 0; t < e.length; t++)
    ha.add(e[t]);
  for (var n of xo)
    n(e);
}
let Ni = null;
function zn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Ni = e;
  var s = 0, a = Ni === e && e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Ml(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ie, h = le;
    Ie(null), ut(null);
    try {
      for (var f, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (p) {
          f ? g.push(p) : f = p;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let p of g)
          queueMicrotask(() => {
            throw p;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ie(d), ut(h);
    }
  }
}
function ei(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function en(e, t) {
  var n = (
    /** @type {Effect} */
    le
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Ms) !== 0, r = (t & Ql) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = ei(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Le(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ys ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      en(a, l);
    } else
      en(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Hc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ms) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ei(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Le(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Le(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Le(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Le(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      en(d, h);
    } else
      en(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ Hc(e, t, "svg");
}
function Lc(e = "") {
  {
    var t = bt(e + "");
    return en(t, t), t;
  }
}
function ye() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = bt();
  return e.append(t, n), en(t, n), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Me(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Vc(e, t) {
  return Bc(e, t);
}
const dn = /* @__PURE__ */ new Map();
function Bc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  wc();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = Rc(g);
        t.addEventListener(g, zn, { passive: v });
        var w = dn.get(g);
        w === void 0 ? (document.addEventListener(g, zn, { passive: v }), dn.set(g, 1)) : dn.set(g, w + 1);
      }
    }
  };
  l(Kr(ha)), xo.add(l);
  var c = void 0, d = Ec(() => {
    var h = n ?? t.appendChild(bt());
    return dc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ee({});
          var g = (
            /** @type {ComponentContext} */
            he
          );
          g.c = i;
        }
        o && (r.$$events = o), c = e(f, r) || {}, i && te();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, zn);
        var g = (
          /** @type {number} */
          dn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, zn), dn.delete(f)) : dn.set(f, g);
      }
      xo.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Fc.set(c, d), c;
}
let Fc = /* @__PURE__ */ new WeakMap();
class ti {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #l = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#l = n;
  }
  #i = () => {
    var t = (
      /** @type {Batch} */
      ve
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        Jo(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (_e(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var c = document.createDocumentFragment();
            oa(s, c), c.append(bt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            _e(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Wt(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#e.delete(t);
    const n = Array.from(this.#e.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (_e(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      ve
    ), o = Ws();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = bt();
        i.append(s), this.#n.set(t, {
          effect: De(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          De(() => n(this.anchor))
        );
    if (this.#e.set(r, t), o) {
      for (const [a, l] of this.#t)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#o);
    } else
      this.#i();
  }
}
function ue(e, t, n = !1) {
  var r = new ti(e), o = n ? Rt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  tr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Kc(e, t) {
  Wr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function So(e, t) {
  return t;
}
function Yc(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    Wt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ko(Kr(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      _c(d), d.append(c), e.items.clear();
    }
    ko(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function ko(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    _e(e[n], t);
}
var Pi;
function tn(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & Ps) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(bt());
  }
  var d = null, h = /* @__PURE__ */ qo(() => {
    var _ = n();
    return Fr(_) ? _ : _ == null ? [] : Kr(_);
  }), f, g = !0;
  function v() {
    p.fallback = d, Zc(p, f, s, t, r), d !== null && (f.length === 0 ? (d.f & mt) === 0 ? Jo(d) : (d.f ^= mt, On(d, null, s)) : Wt(d, () => {
      d = null;
    }));
  }
  var w = tr(() => {
    f = /** @type {V[]} */
    u(h);
    for (var _ = f.length, k = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      ve
    ), b = Ws(), A = 0; A < _; A += 1) {
      var T = f[A], I = r(T, A), M = g ? null : a.get(I);
      M ? (M.v && bn(M.v, T), M.i && bn(M.i, A), b && C.skipped_effects.delete(M.e)) : (M = Xc(
        a,
        g ? s : Pi ??= bt(),
        T,
        I,
        A,
        o,
        t,
        n
      ), g || (M.e.f |= mt), a.set(I, M)), k.add(I);
    }
    if (_ === 0 && i && !d && (g ? d = De(() => i(s)) : (d = De(() => i(Pi ??= bt())), d.f |= mt)), !g)
      if (b) {
        for (const [B, Y] of a)
          k.has(B) || C.skipped_effects.add(Y.e);
        C.oncommit(v), C.ondiscard(() => {
        });
      } else
        v();
    u(h);
  }), p = { effect: w, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function Zc(e, t, n, r, o) {
  var i = (r & Xl) !== 0, s = t.length, a = e.items, l = e.effect.first, c, d = null, h, f = [], g = [], v, w, p, _;
  if (i)
    for (_ = 0; _ < s; _ += 1)
      v = t[_], w = o(v, _), p = /** @type {EachItem} */
      a.get(w).e, (p.f & mt) === 0 && (p.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(p));
  for (_ = 0; _ < s; _ += 1) {
    if (v = t[_], w = o(v, _), p = /** @type {EachItem} */
    a.get(w).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(p), Y.done.delete(p);
    if ((p.f & mt) !== 0)
      if (p.f ^= mt, p === l)
        On(p, null, n);
      else {
        var k = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Pt(e, d, p), Pt(e, p, k), On(p, k, n), d = p, f = [], g = [], l = d.next;
        continue;
      }
    if ((p.f & Be) !== 0 && (Jo(p), i && (p.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (f.length < g.length) {
          var C = g[0], b;
          d = C.prev;
          var A = f[0], T = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            On(f[b], C, n);
          for (b = 0; b < g.length; b += 1)
            c.delete(g[b]);
          Pt(e, A.prev, T.next), Pt(e, d, A), Pt(e, T, C), l = C, d = T, _ -= 1, f = [], g = [];
        } else
          c.delete(p), On(p, l, n), Pt(e, p.prev, p.next), Pt(e, p, d === null ? e.effect.first : d.next), Pt(e, d, p), d = p;
        continue;
      }
      for (f = [], g = []; l !== null && l !== p; )
        (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (p.f & mt) === 0 && f.push(p), d = p, l = p.next;
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (ko(Kr(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var I = [];
    if (c !== void 0)
      for (p of c)
        (p.f & Be) === 0 && I.push(p);
    for (; l !== null; )
      (l.f & Be) === 0 && l !== e.fallback && I.push(l), l = l.next;
    var M = I.length;
    if (M > 0) {
      var B = (r & Ps) !== 0 && s === 0 ? n : null;
      if (i) {
        for (_ = 0; _ < M; _ += 1)
          I[_].nodes?.a?.measure();
        for (_ = 0; _ < M; _ += 1)
          I[_].nodes?.a?.fix();
      }
      Yc(e, I, B);
    }
  }
  i && ln(() => {
    if (h !== void 0)
      for (p of h)
        p.nodes?.a?.apply();
  });
}
function Xc(e, t, n, r, o, i, s, a) {
  var l = (s & Yl) !== 0 ? (s & Wl) === 0 ? /* @__PURE__ */ pc(n, !1, !1) : Qt(n) : null, c = (s & Zl) !== 0 ? Qt(o) : null;
  return {
    v: l,
    i: c,
    e: De(() => (i(t, l ?? n, c ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function On(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & mt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $n(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Pt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ga(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ce(() => {
    var a = (
      /** @type {Effect} */
      le
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (ea(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var l = s + "";
      n ? l = `<svg>${l}</svg>` : r && (l = `<math>${l}</math>`);
      var c = ei(l);
      if ((n || r) && (c = /** @type {Element} */
      /* @__PURE__ */ Le(c)), en(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Le(c); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Le(c)
          );
      else
        i.before(c);
    }
  });
}
function Re(e, t, ...n) {
  var r = new ti(e);
  tr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Rt);
}
function qr(e, t, n) {
  var r = new ti(e);
  tr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Rt);
}
function Ne(e, t, n) {
  er(() => {
    var r = Ve(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Wr(() => {
        var s = n();
        fa(s), o && Ts(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Wc(e, t) {
  var n = void 0, r;
  Js(() => {
    n !== (n = t()) && (r && (_e(r), r = null), n && (r = De(() => {
      er(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function va(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = va(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function qc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = va(e)) && (r && (r += " "), r += t);
  return r;
}
function Bt(e) {
  return typeof e == "object" ? qc(e) : e ?? "";
}
const Mi = [...` 	
\r\f \v\uFEFF`];
function Gc(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Mi.includes(r[s - 1])) && (a === r.length || Mi.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ai(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function oo(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Uc(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(oo)), o && l.push(...Object.keys(o).map(oo));
      var c = 0, d = -1;
      const w = e.length;
      for (var h = 0; h < w; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === w - 1) {
            if (d !== -1) {
              var g = oo(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var v = e.substring(c, h).trim();
                n += " " + v + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Ai(r)), o && (n += Ai(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function ze(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = Gc(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function io(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ke(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = Uc(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (io(e, n?.[0], r[0]), io(e, n?.[1], r[1], "important")) : io(e, n, r));
  return r;
}
function Co(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Fr(t))
      return tc();
    for (var r of e.options)
      r.selected = t.includes(Ti(r));
    return;
  }
  for (r of e.options) {
    var o = Ti(r);
    if (yc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function jc(e) {
  var t = new MutationObserver(() => {
    Co(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), jo(() => {
    t.disconnect();
  });
}
function Ti(e) {
  return "__value" in e ? e.__value : e.value;
}
const Mt = /* @__PURE__ */ Symbol("class"), pt = /* @__PURE__ */ Symbol("style"), pa = /* @__PURE__ */ Symbol("is custom element"), ma = /* @__PURE__ */ Symbol("is html");
function Jc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function j(e, t, n, r) {
  var o = ya(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Dl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && wa(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qc(e, t, n, r, o = !1, i = !1) {
  var s = ya(e), a = s[pa], l = !s[ma], c = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Bt(n.class) : (r || n[Mt]) && (n.class = null), n[pt] && (n.style ??= null);
  var f = wa(e);
  for (const b in n) {
    let A = n[b];
    if (d && b === "value" && A == null) {
      e.value = e.__value = "", c[b] = A;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      ze(e, g, A, r, t?.[Mt], n[Mt]), c[b] = A, c[Mt] = n[Mt];
      continue;
    }
    if (b === "style") {
      Ke(e, A, t?.[pt], n[pt]), c[b] = A, c[pt] = n[pt];
      continue;
    }
    var v = c[b];
    if (!(A === v && !(A === void 0 && e.hasAttribute(b)))) {
      c[b] = A;
      var w = b[0] + b[1];
      if (w !== "$$")
        if (w === "on") {
          const T = {}, I = "$$" + b;
          let M = b.slice(2);
          var p = Dc(M);
          if (Ac(M) && (M = M.slice(0, -7), T.capture = !0), !p && v) {
            if (A != null) continue;
            e.removeEventListener(M, c[I], T), c[I] = null;
          }
          if (A != null)
            if (p)
              e[`__${M}`] = A, $o([M]);
            else {
              let B = function(Y) {
                c[b].call(this, Y);
              };
              var C = B;
              c[I] = Qo(M, e, B, T);
            }
          else p && (e[`__${M}`] = void 0);
        } else if (b === "style")
          j(e, b, A);
        else if (b === "autofocus")
          bc(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!a && (b === "__value" || b === "value" && A != null))
          e.value = e.__value = A;
        else if (b === "selected" && d)
          Jc(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var _ = b;
          l || (_ = zc(_));
          var k = _ === "defaultValue" || _ === "defaultChecked";
          if (A == null && !a && !k)
            if (s[b] = null, _ === "value" || _ === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                e
              );
              const I = t === void 0;
              if (_ === "value") {
                let M = T.defaultValue;
                T.removeAttribute(_), T.defaultValue = M, T.value = T.__value = I ? M : null;
              } else {
                let M = T.defaultChecked;
                T.removeAttribute(_), T.defaultChecked = M, T.checked = I ? M : !1;
              }
            } else
              e.removeAttribute(b);
          else k || f.includes(_) && (a || typeof A != "string") ? (e[_] = A, _ in s && (s[_] = xe)) : typeof A != "function" && j(e, _, A);
        }
    }
  }
  return c;
}
function Ft(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Ls(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (Js(() => {
      var v = t(...l.map(u)), w = Qc(
        e,
        c,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Co(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let _ of Object.getOwnPropertySymbols(d))
        v[_] || _e(d[_]);
      for (let _ of Object.getOwnPropertySymbols(v)) {
        var p = v[_];
        _.description === ec && (!c || p !== c[_]) && (d[_] && _e(d[_]), d[_] = De(() => Wc(e, () => p))), w[_] = p;
      }
      c = w;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      er(() => {
        Co(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), jc(g);
      });
    }
    f = !0;
  });
}
function ya(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [pa]: e.nodeName.includes("-"),
      [ma]: e.namespaceURI === $l
    }
  );
}
var Di = /* @__PURE__ */ new Map();
function wa(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Di.get(t);
  if (n) return n;
  Di.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = bs(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Yr(o);
  }
  return n;
}
class ni {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#n = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#e.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#e.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#e.get(t);
      o.delete(n), o.size === 0 && (this.#e.delete(t), this.#t.unobserve(t));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          ni.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var $c = /* @__PURE__ */ new ni({
  box: "border-box"
});
function Ii(e, t, n) {
  var r = $c.observe(e, () => n(e[t]));
  er(() => (Ve(() => n(e[t])), r));
}
function zi(e, t) {
  return e === t || e?.[at] === t;
}
function rr(e = {}, t, n, r) {
  return er(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], Ve(() => {
        e !== n(...i) && (t(e, ...i), o && zi(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ln(() => {
        i && zi(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function eu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    he
  ), n = t.l.u;
  if (!n) return;
  let r = () => fa(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Qn(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Us(() => {
    Oi(t, r), mo(n.b);
  }), qe(() => {
    const o = Ve(() => n.m.map(Tl));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && qe(() => {
    Oi(t, r), mo(n.a);
  });
}
function Oi(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let dr = !1;
function tu(e) {
  var t = dr;
  try {
    return dr = !1, [e(), dr];
  } finally {
    dr = t;
  }
}
const nu = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Kt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    nu
  );
}
const ru = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Tn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Tn(o) && (o = o());
      const i = Dt(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Tn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === at || t === Ns) return !1;
    for (let n of e.props)
      if (Tn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Tn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function At(...e) {
  return new Proxy({ props: e }, ru);
}
function H(e, t, n, r) {
  var o = !Pn || (n & Gl) !== 0, i = (n & jl) !== 0, s = (n & Jl) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? Ve(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = at in e || Ns in e;
    d = Dt(e, t)?.set ?? (h && t in e ? (C) => e[t] = C : void 0);
  }
  var f, g = !1;
  i ? [f, g] = tu(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Ll(), d(f)));
  var v;
  if (o ? v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? c() : (l = !0, C);
  } : v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C !== void 0 && (a = /** @type {V} */
    void 0), C === void 0 ? a : C;
  }, o && (n & Ul) === 0)
    return v;
  if (d) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, b) {
        return arguments.length > 0 ? ((!o || !b || w || g) && d(b ? v() : C), C) : v();
      })
    );
  }
  var p = !1, _ = ((n & ql) !== 0 ? Qn : qo)(() => (p = !1, v()));
  i && u(_);
  var k = (
    /** @type {Effect} */
    le
  );
  return (
    /** @type {() => V} */
    (function(C, b) {
      if (arguments.length > 0) {
        const A = b ? u(_) : o && i ? it(C) : C;
        return O(_, A), p = !0, a !== void 0 && (a = A), C;
      }
      return cn && p || (k.f & _t) !== 0 ? _.v : u(_);
    })
  );
}
function ou(e) {
  he === null && Ko(), Pn && he.l !== null ? iu(he).m.push(e) : qe(() => {
    const t = Ve(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Gr(e) {
  he === null && Ko(), ou(() => () => Ve(e));
}
function iu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const su = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(su);
var au = { value: () => {
} };
function Ur() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new _r(n);
}
function _r(e) {
  this._ = e;
}
function lu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
_r.prototype = Ur.prototype = {
  constructor: _r,
  on: function(e, t) {
    var n = this._, r = lu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = cu(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ri(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ri(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new _r(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function cu(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ri(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = au, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var No = "http://www.w3.org/1999/xhtml";
const Hi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: No,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function jr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Hi.hasOwnProperty(t) ? { space: Hi[t], local: e } : e;
}
function uu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === No && t.documentElement.namespaceURI === No ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function du(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function _a(e) {
  var t = jr(e);
  return (t.local ? du : uu)(t);
}
function fu() {
}
function ri(e) {
  return e == null ? fu : function() {
    return this.querySelector(e);
  };
}
function hu(e) {
  typeof e != "function" && (e = ri(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Ye(r, this._parents);
}
function gu(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function vu() {
  return [];
}
function ba(e) {
  return e == null ? vu : function() {
    return this.querySelectorAll(e);
  };
}
function pu(e) {
  return function() {
    return gu(e.apply(this, arguments));
  };
}
function mu(e) {
  typeof e == "function" ? e = pu(e) : e = ba(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Ye(r, o);
}
function xa(e) {
  return function() {
    return this.matches(e);
  };
}
function Ea(e) {
  return function(t) {
    return t.matches(e);
  };
}
var yu = Array.prototype.find;
function wu(e) {
  return function() {
    return yu.call(this.children, e);
  };
}
function _u() {
  return this.firstElementChild;
}
function bu(e) {
  return this.select(e == null ? _u : wu(typeof e == "function" ? e : Ea(e)));
}
var xu = Array.prototype.filter;
function Eu() {
  return Array.from(this.children);
}
function Su(e) {
  return function() {
    return xu.call(this.children, e);
  };
}
function ku(e) {
  return this.selectAll(e == null ? Eu : Su(typeof e == "function" ? e : Ea(e)));
}
function Cu(e) {
  typeof e != "function" && (e = xa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Ye(r, this._parents);
}
function Sa(e) {
  return new Array(e.length);
}
function Nu() {
  return new Ye(this._enter || this._groups.map(Sa), this._parents);
}
function Pr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Pr.prototype = {
  constructor: Pr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Pu(e) {
  return function() {
    return e;
  };
}
function Mu(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Pr(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Au(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Pr(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Tu(e) {
  return e.__data__;
}
function Du(e, t) {
  if (!arguments.length) return Array.from(this, Tu);
  var n = t ? Au : Mu, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Pu(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = Iu(e.call(d, d && d.__data__, c, r)), v = g.length, w = a[c] = new Array(v), p = s[c] = new Array(v), _ = l[c] = new Array(f);
    n(d, h, w, p, _, g, t);
    for (var k = 0, C = 0, b, A; k < v; ++k)
      if (b = w[k]) {
        for (k >= C && (C = k + 1); !(A = p[C]) && ++C < v; ) ;
        b._next = A || null;
      }
  }
  return s = new Ye(s, r), s._enter = a, s._exit = l, s;
}
function Iu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function zu() {
  return new Ye(this._exit || this._groups.map(Sa), this._parents);
}
function Ou(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ru(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ye(a, this._parents);
}
function Hu() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Lu(e) {
  e || (e = Vu);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new Ye(o, this._parents).order();
}
function Vu(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Bu() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Fu() {
  return Array.from(this);
}
function Ku() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Yu() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Zu() {
  return !this.node();
}
function Xu(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Wu(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qu(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Gu(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Uu(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ju(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Ju(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Qu(e, t) {
  var n = jr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? qu : Wu : typeof t == "function" ? n.local ? Ju : ju : n.local ? Uu : Gu)(n, t));
}
function ka(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function $u(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ed(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function td(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function nd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? $u : typeof t == "function" ? td : ed)(e, t, n ?? "")) : xn(this.node(), e);
}
function xn(e, t) {
  return e.style.getPropertyValue(t) || ka(e).getComputedStyle(e, null).getPropertyValue(t);
}
function rd(e) {
  return function() {
    delete this[e];
  };
}
function od(e, t) {
  return function() {
    this[e] = t;
  };
}
function id(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? rd : typeof t == "function" ? id : od)(e, t)) : this.node()[e];
}
function Ca(e) {
  return e.trim().split(/^|\s+/);
}
function oi(e) {
  return e.classList || new Na(e);
}
function Na(e) {
  this._node = e, this._names = Ca(e.getAttribute("class") || "");
}
Na.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Pa(e, t) {
  for (var n = oi(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ma(e, t) {
  for (var n = oi(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function ad(e) {
  return function() {
    Pa(this, e);
  };
}
function ld(e) {
  return function() {
    Ma(this, e);
  };
}
function cd(e, t) {
  return function() {
    (t.apply(this, arguments) ? Pa : Ma)(this, e);
  };
}
function ud(e, t) {
  var n = Ca(e + "");
  if (arguments.length < 2) {
    for (var r = oi(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? cd : t ? ad : ld)(n, t));
}
function dd() {
  this.textContent = "";
}
function fd(e) {
  return function() {
    this.textContent = e;
  };
}
function hd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function gd(e) {
  return arguments.length ? this.each(e == null ? dd : (typeof e == "function" ? hd : fd)(e)) : this.node().textContent;
}
function vd() {
  this.innerHTML = "";
}
function pd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function md(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function yd(e) {
  return arguments.length ? this.each(e == null ? vd : (typeof e == "function" ? md : pd)(e)) : this.node().innerHTML;
}
function wd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _d() {
  return this.each(wd);
}
function bd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xd() {
  return this.each(bd);
}
function Ed(e) {
  var t = typeof e == "function" ? e : _a(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Sd() {
  return null;
}
function kd(e, t) {
  var n = typeof e == "function" ? e : _a(e), r = t == null ? Sd : typeof t == "function" ? t : ri(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Cd() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Nd() {
  return this.each(Cd);
}
function Pd() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Md() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ad(e) {
  return this.select(e ? Md : Pd);
}
function Td(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Dd(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Id(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function zd(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Od(e, t, n) {
  return function() {
    var r = this.__on, o, i = Dd(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Rd(e, t, n) {
  var r = Id(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, d; l < c; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Od : zd, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Aa(e, t, n) {
  var r = ka(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hd(e, t) {
  return function() {
    return Aa(this, e, t);
  };
}
function Ld(e, t) {
  return function() {
    return Aa(this, e, t.apply(this, arguments));
  };
}
function Vd(e, t) {
  return this.each((typeof t == "function" ? Ld : Hd)(e, t));
}
function* Bd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ta = [null];
function Ye(e, t) {
  this._groups = e, this._parents = t;
}
function or() {
  return new Ye([[document.documentElement]], Ta);
}
function Fd() {
  return this;
}
Ye.prototype = or.prototype = {
  constructor: Ye,
  select: hu,
  selectAll: mu,
  selectChild: bu,
  selectChildren: ku,
  filter: Cu,
  data: Du,
  enter: Nu,
  exit: zu,
  join: Ou,
  merge: Ru,
  selection: Fd,
  order: Hu,
  sort: Lu,
  call: Bu,
  nodes: Fu,
  node: Ku,
  size: Yu,
  empty: Zu,
  each: Xu,
  attr: Qu,
  style: nd,
  property: sd,
  classed: ud,
  text: gd,
  html: yd,
  raise: _d,
  lower: xd,
  append: Ed,
  insert: kd,
  remove: Nd,
  clone: Ad,
  datum: Td,
  on: Rd,
  dispatch: Vd,
  [Symbol.iterator]: Bd
};
function We(e) {
  return typeof e == "string" ? new Ye([[document.querySelector(e)]], [document.documentElement]) : new Ye([[e]], Ta);
}
function Kd(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function je(e, t) {
  if (e = Kd(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Yd = { passive: !1 }, Yn = { capture: !0, passive: !1 };
function so(e) {
  e.stopImmediatePropagation();
}
function pn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Da(e) {
  var t = e.document.documentElement, n = We(e).on("dragstart.drag", pn, Yn);
  "onselectstart" in t ? n.on("selectstart.drag", pn, Yn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ia(e, t) {
  var n = e.document.documentElement, r = We(e).on("dragstart.drag", null);
  t && (r.on("click.drag", pn, Yn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const fr = (e) => () => e;
function Po(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Po.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Zd(e) {
  return !e.ctrlKey && !e.button;
}
function Xd() {
  return this.parentNode;
}
function Wd(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function qd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Gd() {
  var e = Zd, t = Xd, n = Wd, r = qd, o = {}, i = Ur("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", p).on("touchmove.drag", _, Yd).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, A) {
    if (!(d || !e.call(this, b, A))) {
      var T = C(this, t.call(this, b, A), b, A, "mouse");
      T && (We(b.view).on("mousemove.drag", v, Yn).on("mouseup.drag", w, Yn), Da(b.view), so(b), c = !1, a = b.clientX, l = b.clientY, T("start", b));
    }
  }
  function v(b) {
    if (pn(b), !c) {
      var A = b.clientX - a, T = b.clientY - l;
      c = A * A + T * T > h;
    }
    o.mouse("drag", b);
  }
  function w(b) {
    We(b.view).on("mousemove.drag mouseup.drag", null), Ia(b.view, c), pn(b), o.mouse("end", b);
  }
  function p(b, A) {
    if (e.call(this, b, A)) {
      var T = b.changedTouches, I = t.call(this, b, A), M = T.length, B, Y;
      for (B = 0; B < M; ++B)
        (Y = C(this, I, b, A, T[B].identifier, T[B])) && (so(b), Y("start", b, T[B]));
    }
  }
  function _(b) {
    var A = b.changedTouches, T = A.length, I, M;
    for (I = 0; I < T; ++I)
      (M = o[A[I].identifier]) && (pn(b), M("drag", b, A[I]));
  }
  function k(b) {
    var A = b.changedTouches, T = A.length, I, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), I = 0; I < T; ++I)
      (M = o[A[I].identifier]) && (so(b), M("end", b, A[I]));
  }
  function C(b, A, T, I, M, B) {
    var Y = i.copy(), P = je(B || T, A), x, N, m;
    if ((m = n.call(b, new Po("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: M,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), I)) != null)
      return x = m.x - P[0] || 0, N = m.y - P[1] || 0, function S(E, D, R) {
        var z = P, L;
        switch (E) {
          case "start":
            o[M] = S, L = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            P = je(R || D, A), L = s;
            break;
        }
        Y.call(
          E,
          b,
          new Po(E, {
            sourceEvent: D,
            subject: m,
            target: f,
            identifier: M,
            active: L,
            x: P[0] + x,
            y: P[1] + N,
            dx: P[0] - z[0],
            dy: P[1] - z[1],
            dispatch: Y
          }),
          I
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : fr(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : fr(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : fr(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : fr(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function ii(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function za(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ir() {
}
var Zn = 0.7, Mr = 1 / Zn, mn = "\\s*([+-]?\\d+)\\s*", Xn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ud = /^#([0-9a-f]{3,8})$/, jd = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), Jd = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), Qd = new RegExp(`^rgba\\(${mn},${mn},${mn},${Xn}\\)$`), $d = new RegExp(`^rgba\\(${lt},${lt},${lt},${Xn}\\)$`), ef = new RegExp(`^hsl\\(${Xn},${lt},${lt}\\)$`), tf = new RegExp(`^hsla\\(${Xn},${lt},${lt},${Xn}\\)$`), Li = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ii(ir, nn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vi,
  // Deprecated! Use color.formatHex.
  formatHex: Vi,
  formatHex8: nf,
  formatHsl: rf,
  formatRgb: Bi,
  toString: Bi
});
function Vi() {
  return this.rgb().formatHex();
}
function nf() {
  return this.rgb().formatHex8();
}
function rf() {
  return Oa(this).formatHsl();
}
function Bi() {
  return this.rgb().formatRgb();
}
function nn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ud.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fi(t) : n === 3 ? new Oe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? hr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? hr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = jd.exec(e)) ? new Oe(t[1], t[2], t[3], 1) : (t = Jd.exec(e)) ? new Oe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qd.exec(e)) ? hr(t[1], t[2], t[3], t[4]) : (t = $d.exec(e)) ? hr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ef.exec(e)) ? Zi(t[1], t[2] / 100, t[3] / 100, 1) : (t = tf.exec(e)) ? Zi(t[1], t[2] / 100, t[3] / 100, t[4]) : Li.hasOwnProperty(e) ? Fi(Li[e]) : e === "transparent" ? new Oe(NaN, NaN, NaN, 0) : null;
}
function Fi(e) {
  return new Oe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Oe(e, t, n, r);
}
function of(e) {
  return e instanceof ir || (e = nn(e)), e ? (e = e.rgb(), new Oe(e.r, e.g, e.b, e.opacity)) : new Oe();
}
function Mo(e, t, n, r) {
  return arguments.length === 1 ? of(e) : new Oe(e, t, n, r ?? 1);
}
function Oe(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ii(Oe, Mo, za(ir, {
  brighter(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Zn : Math.pow(Zn, e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Oe(Ut(this.r), Ut(this.g), Ut(this.b), Ar(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ki,
  // Deprecated! Use color.formatHex.
  formatHex: Ki,
  formatHex8: sf,
  formatRgb: Yi,
  toString: Yi
}));
function Ki() {
  return `#${Xt(this.r)}${Xt(this.g)}${Xt(this.b)}`;
}
function sf() {
  return `#${Xt(this.r)}${Xt(this.g)}${Xt(this.b)}${Xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Yi() {
  const e = Ar(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ar(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ut(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Xt(e) {
  return e = Ut(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Zi(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Je(e, t, n, r);
}
function Oa(e) {
  if (e instanceof Je) return new Je(e.h, e.s, e.l, e.opacity);
  if (e instanceof ir || (e = nn(e)), !e) return new Je();
  if (e instanceof Je) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Je(s, a, l, e.opacity);
}
function af(e, t, n, r) {
  return arguments.length === 1 ? Oa(e) : new Je(e, t, n, r ?? 1);
}
function Je(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ii(Je, af, za(ir, {
  brighter(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Je(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Zn : Math.pow(Zn, e), new Je(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Oe(
      ao(e >= 240 ? e - 240 : e + 120, o, r),
      ao(e, o, r),
      ao(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Je(Xi(this.h), gr(this.s), gr(this.l), Ar(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ar(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Xi(this.h)}, ${gr(this.s) * 100}%, ${gr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Xi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ao(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const si = (e) => () => e;
function lf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function cf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function uf(e) {
  return (e = +e) == 1 ? Ra : function(t, n) {
    return n - t ? cf(t, n, e) : si(isNaN(t) ? n : t);
  };
}
function Ra(e, t) {
  var n = t - e;
  return n ? lf(e, n) : si(isNaN(e) ? t : e);
}
const Tr = (function e(t) {
  var n = uf(t);
  function r(o, i) {
    var s = n((o = Mo(o)).r, (i = Mo(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Ra(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function df(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function ff(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function hf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Vn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function gf(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function ot(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function vf(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Vn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ao = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, lo = new RegExp(Ao.source, "g");
function pf(e) {
  return function() {
    return e;
  };
}
function mf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ha(e, t) {
  var n = Ao.lastIndex = lo.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ao.exec(e)) && (o = lo.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: ot(r, o) })), n = lo.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? mf(l[0].x) : pf(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Vn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? si(t) : (n === "number" ? ot : n === "string" ? (r = nn(t)) ? (t = r, Tr) : Ha : t instanceof nn ? Tr : t instanceof Date ? gf : ff(t) ? df : Array.isArray(t) ? hf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? vf : ot)(e, t);
}
var Wi = 180 / Math.PI, To = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function La(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Wi,
    skewX: Math.atan(l) * Wi,
    scaleX: s,
    scaleY: a
  };
}
var vr;
function yf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? To : La(t.a, t.b, t.c, t.d, t.e, t.f);
}
function wf(e) {
  return e == null || (vr || (vr = document.createElementNS("http://www.w3.org/2000/svg", "g")), vr.setAttribute("transform", e), !(e = vr.transform.baseVal.consolidate())) ? To : (e = e.matrix, La(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Va(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var w = g.push("translate(", null, t, null, n);
      v.push({ i: w - 4, x: ot(c, h) }, { i: w - 2, x: ot(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: ot(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: ot(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var w = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: w - 4, x: ot(c, h) }, { i: w - 2, x: ot(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var v = -1, w = f.length, p; ++v < w; ) h[(p = f[v]).i] = p.x(g);
      return h.join("");
    };
  };
}
var _f = Va(yf, "px, ", "px)", "deg)"), bf = Va(wf, ", ", ")", ")"), xf = 1e-12;
function qi(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ef(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Sf(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const br = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, w = g * g + v * v, p, _;
    if (w < xf)
      _ = Math.log(f / c) / t, p = function(I) {
        return [
          a + I * g,
          l + I * v,
          c * Math.exp(t * I * _)
        ];
      };
    else {
      var k = Math.sqrt(w), C = (f * f - c * c + r * w) / (2 * c * n * k), b = (f * f - c * c - r * w) / (2 * f * n * k), A = Math.log(Math.sqrt(C * C + 1) - C), T = Math.log(Math.sqrt(b * b + 1) - b);
      _ = (T - A) / t, p = function(I) {
        var M = I * _, B = qi(A), Y = c / (n * k) * (B * Sf(t * M + A) - Ef(A));
        return [
          a + Y * g,
          l + Y * v,
          c * B / qi(t * M + A)
        ];
      };
    }
    return p.duration = _ * 1e3 * t / Math.SQRT2, p;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var En = 0, Rn = 0, Dn = 0, Ba = 1e3, Dr, Hn, Ir = 0, rn = 0, Jr = 0, Wn = typeof performance == "object" && performance.now ? performance : Date, Fa = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ai() {
  return rn || (Fa(kf), rn = Wn.now() + Jr);
}
function kf() {
  rn = 0;
}
function zr() {
  this._call = this._time = this._next = null;
}
zr.prototype = Ka.prototype = {
  constructor: zr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ai() : +n) + (t == null ? 0 : +t), !this._next && Hn !== this && (Hn ? Hn._next = this : Dr = this, Hn = this), this._call = e, this._time = n, Do();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Do());
  }
};
function Ka(e, t, n) {
  var r = new zr();
  return r.restart(e, t, n), r;
}
function Cf() {
  ai(), ++En;
  for (var e = Dr, t; e; )
    (t = rn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --En;
}
function Gi() {
  rn = (Ir = Wn.now()) + Jr, En = Rn = 0;
  try {
    Cf();
  } finally {
    En = 0, Pf(), rn = 0;
  }
}
function Nf() {
  var e = Wn.now(), t = e - Ir;
  t > Ba && (Jr -= t, Ir = e);
}
function Pf() {
  for (var e, t = Dr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Dr = n);
  Hn = e, Do(r);
}
function Do(e) {
  if (!En) {
    Rn && (Rn = clearTimeout(Rn));
    var t = e - rn;
    t > 24 ? (e < 1 / 0 && (Rn = setTimeout(Gi, e - Wn.now() - Jr)), Dn && (Dn = clearInterval(Dn))) : (Dn || (Ir = Wn.now(), Dn = setInterval(Nf, Ba)), En = 1, Fa(Gi));
  }
}
function Ui(e, t, n) {
  var r = new zr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Mf = Ur("start", "end", "cancel", "interrupt"), Af = [], Ya = 0, ji = 1, Io = 2, xr = 3, Ji = 4, zo = 5, Er = 6;
function Qr(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Tf(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Mf,
    tween: Af,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Ya
  });
}
function li(e, t) {
  var n = tt(e, t);
  if (n.state > Ya) throw new Error("too late; already scheduled");
  return n;
}
function ft(e, t) {
  var n = tt(e, t);
  if (n.state > xr) throw new Error("too late; already running");
  return n;
}
function tt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Tf(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ka(i, 0, n.time);
  function i(c) {
    n.state = ji, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== ji) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === xr) return Ui(s);
        g.state === Ji ? (g.state = Er, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Er, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ui(function() {
      n.state === xr && (n.state = Ji, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Io, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Io) {
      for (n.state = xr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = zo, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === zo && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Er, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Sr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Io && r.state < zo, r.state = Er, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Df(e) {
  return this.each(function() {
    Sr(this, e);
  });
}
function If(e, t) {
  var n, r;
  return function() {
    var o = ft(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function zf(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ft(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function Of(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = tt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? If : zf)(n, e, t));
}
function ci(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = ft(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return tt(o, r).value[t];
  };
}
function Za(e, t) {
  var n;
  return (typeof t == "number" ? ot : t instanceof nn ? Tr : (n = nn(t)) ? (t = n, Tr) : Ha)(e, t);
}
function Rf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Hf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Lf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Vf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Bf(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Ff(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Kf(e, t) {
  var n = jr(e), r = n === "transform" ? bf : Za;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ff : Bf)(n, r, ci(this, "attr." + e, t)) : t == null ? (n.local ? Hf : Rf)(n) : (n.local ? Vf : Lf)(n, r, t));
}
function Yf(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zf(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Xf(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Zf(e, i)), n;
  }
  return o._value = t, o;
}
function Wf(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Yf(e, i)), n;
  }
  return o._value = t, o;
}
function qf(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = jr(e);
  return this.tween(n, (r.local ? Xf : Wf)(r, t));
}
function Gf(e, t) {
  return function() {
    li(this, e).delay = +t.apply(this, arguments);
  };
}
function Uf(e, t) {
  return t = +t, function() {
    li(this, e).delay = t;
  };
}
function jf(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Gf : Uf)(t, e)) : tt(this.node(), t).delay;
}
function Jf(e, t) {
  return function() {
    ft(this, e).duration = +t.apply(this, arguments);
  };
}
function Qf(e, t) {
  return t = +t, function() {
    ft(this, e).duration = t;
  };
}
function $f(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Jf : Qf)(t, e)) : tt(this.node(), t).duration;
}
function eh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ft(this, e).ease = t;
  };
}
function th(e) {
  var t = this._id;
  return arguments.length ? this.each(eh(t, e)) : tt(this.node(), t).ease;
}
function nh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ft(this, e).ease = n;
  };
}
function rh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(nh(this._id, e));
}
function oh(e) {
  typeof e != "function" && (e = xa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Et(r, this._parents, this._name, this._id);
}
function ih(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Et(s, this._parents, this._name, this._id);
}
function sh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ah(e, t, n) {
  var r, o, i = sh(t) ? li : ft;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function lh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? tt(this.node(), n).on.on(e) : this.each(ah(n, e, t));
}
function ch(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function uh() {
  return this.on("end.remove", ch(this._id));
}
function dh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ri(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Qr(c[f], t, n, f, c, tt(d, n)));
  return new Et(i, this._parents, t, n);
}
function fh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ba(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = tt(d, n), w = 0, p = f.length; w < p; ++w)
          (g = f[w]) && Qr(g, t, n, w, f, v);
        i.push(f), s.push(d);
      }
  return new Et(i, s, t, n);
}
var hh = or.prototype.constructor;
function gh() {
  return new hh(this._groups, this._parents);
}
function vh(e, t) {
  var n, r, o;
  return function() {
    var i = xn(this, e), s = (this.style.removeProperty(e), xn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Xa(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ph(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = xn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function mh(e, t, n) {
  var r, o, i;
  return function() {
    var s = xn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), xn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function yh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = ft(this, e), c = l.on, d = l.value[i] == null ? a || (a = Xa(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function wh(e, t, n) {
  var r = (e += "") == "transform" ? _f : Za;
  return t == null ? this.styleTween(e, vh(e, r)).on("end.style." + e, Xa(e)) : typeof t == "function" ? this.styleTween(e, mh(e, r, ci(this, "style." + e, t))).each(yh(this._id, e)) : this.styleTween(e, ph(e, r, t), n).on("end.style." + e, null);
}
function _h(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function bh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && _h(e, s, n)), r;
  }
  return i._value = t, i;
}
function xh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, bh(e, t, n ?? ""));
}
function Eh(e) {
  return function() {
    this.textContent = e;
  };
}
function Sh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function kh(e) {
  return this.tween("text", typeof e == "function" ? Sh(ci(this, "text", e)) : Eh(e == null ? "" : e + ""));
}
function Ch(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Nh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ch(o)), t;
  }
  return r._value = e, r;
}
function Ph(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Nh(e));
}
function Mh() {
  for (var e = this._name, t = this._id, n = Wa(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = tt(l, t);
        Qr(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Et(r, this._parents, e, n);
}
function Ah() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = ft(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Th = 0;
function Et(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Wa() {
  return ++Th;
}
var gt = or.prototype;
Et.prototype = {
  constructor: Et,
  select: dh,
  selectAll: fh,
  selectChild: gt.selectChild,
  selectChildren: gt.selectChildren,
  filter: oh,
  merge: ih,
  selection: gh,
  transition: Mh,
  call: gt.call,
  nodes: gt.nodes,
  node: gt.node,
  size: gt.size,
  empty: gt.empty,
  each: gt.each,
  on: lh,
  attr: Kf,
  attrTween: qf,
  style: wh,
  styleTween: xh,
  text: kh,
  textTween: Ph,
  remove: uh,
  tween: Of,
  delay: jf,
  duration: $f,
  ease: th,
  easeVarying: rh,
  end: Ah,
  [Symbol.iterator]: gt[Symbol.iterator]
};
function Dh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ih = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Dh
};
function zh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Oh(e) {
  var t, n;
  e instanceof Et ? (t = e._id, e = e._name) : (t = Wa(), (n = Ih).time = ai(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Qr(l, e, t, c, s, n || zh(l, t));
  return new Et(r, this._parents, e, t);
}
or.prototype.interrupt = Df;
or.prototype.transition = Oh;
const pr = (e) => () => e;
function Rh(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function yt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
yt.prototype = {
  constructor: yt,
  scale: function(e) {
    return e === 1 ? this : new yt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new yt(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var $r = new yt(1, 0, 0);
qa.prototype = yt.prototype;
function qa(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return $r;
  return e.__zoom;
}
function co(e) {
  e.stopImmediatePropagation();
}
function In(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Lh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Qi() {
  return this.__zoom || $r;
}
function Vh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Bh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Ga() {
  var e = Hh, t = Lh, n = Fh, r = Vh, o = Bh, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = br, c = Ur("start", "zoom", "end"), d, h, f, g = 500, v = 150, w = 0, p = 10;
  function _(m) {
    m.property("__zoom", Qi).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", x).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(m, S, E, D) {
    var R = m.selection ? m.selection() : m;
    R.property("__zoom", Qi), m !== R ? A(m, S, E, D) : R.interrupt().each(function() {
      T(this, arguments).event(D).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, _.scaleBy = function(m, S, E, D) {
    _.scaleTo(m, function() {
      var R = this.__zoom.k, z = typeof S == "function" ? S.apply(this, arguments) : S;
      return R * z;
    }, E, D);
  }, _.scaleTo = function(m, S, E, D) {
    _.transform(m, function() {
      var R = t.apply(this, arguments), z = this.__zoom, L = E == null ? b(R) : typeof E == "function" ? E.apply(this, arguments) : E, F = z.invert(L), X = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(C(k(z, X), L, F), R, s);
    }, E, D);
  }, _.translateBy = function(m, S, E, D) {
    _.transform(m, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, D);
  }, _.translateTo = function(m, S, E, D, R) {
    _.transform(m, function() {
      var z = t.apply(this, arguments), L = this.__zoom, F = D == null ? b(z) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n($r.translate(F[0], F[1]).scale(L.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), z, s);
    }, D, R);
  };
  function k(m, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === m.k ? m : new yt(S, m.x, m.y);
  }
  function C(m, S, E) {
    var D = S[0] - E[0] * m.k, R = S[1] - E[1] * m.k;
    return D === m.x && R === m.y ? m : new yt(m.k, D, R);
  }
  function b(m) {
    return [(+m[0][0] + +m[1][0]) / 2, (+m[0][1] + +m[1][1]) / 2];
  }
  function A(m, S, E, D) {
    m.on("start.zoom", function() {
      T(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var R = this, z = arguments, L = T(R, z).event(D), F = t.apply(R, z), X = E == null ? b(F) : typeof E == "function" ? E.apply(R, z) : E, Z = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), K = R.__zoom, J = typeof S == "function" ? S.apply(R, z) : S, W = l(K.invert(X).concat(Z / K.k), J.invert(X).concat(Z / J.k));
      return function(G) {
        if (G === 1) G = J;
        else {
          var Q = W(G), fe = Z / Q[2];
          G = new yt(fe, X[0] - Q[0] * fe, X[1] - Q[1] * fe);
        }
        L.zoom(null, G);
      };
    });
  }
  function T(m, S, E) {
    return !E && m.__zooming || new I(m, S);
  }
  function I(m, S) {
    this.that = m, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(m, S), this.taps = 0;
  }
  I.prototype = {
    event: function(m) {
      return m && (this.sourceEvent = m), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(m, S) {
      return this.mouse && m !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && m !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && m !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(m) {
      var S = We(this.that).datum();
      c.call(
        m,
        this.that,
        new Rh(m, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: c
        }),
        S
      );
    }
  };
  function M(m, ...S) {
    if (!e.apply(this, arguments)) return;
    var E = T(this, S).event(m), D = this.__zoom, R = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), z = je(m);
    if (E.wheel)
      (E.mouse[0][0] !== z[0] || E.mouse[0][1] !== z[1]) && (E.mouse[1] = D.invert(E.mouse[0] = z)), clearTimeout(E.wheel);
    else {
      if (D.k === R) return;
      E.mouse = [z, D.invert(z)], Sr(this), E.start();
    }
    In(m), E.wheel = setTimeout(L, v), E.zoom("mouse", n(C(k(D, R), E.mouse[0], E.mouse[1]), E.extent, s));
    function L() {
      E.wheel = null, E.end();
    }
  }
  function B(m, ...S) {
    if (f || !e.apply(this, arguments)) return;
    var E = m.currentTarget, D = T(this, S, !0).event(m), R = We(m.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), z = je(m, E), L = m.clientX, F = m.clientY;
    Da(m.view), co(m), D.mouse = [z, this.__zoom.invert(z)], Sr(this), D.start();
    function X(K) {
      if (In(K), !D.moved) {
        var J = K.clientX - L, W = K.clientY - F;
        D.moved = J * J + W * W > w;
      }
      D.event(K).zoom("mouse", n(C(D.that.__zoom, D.mouse[0] = je(K, E), D.mouse[1]), D.extent, s));
    }
    function Z(K) {
      R.on("mousemove.zoom mouseup.zoom", null), Ia(K.view, D.moved), In(K), D.event(K).end();
    }
  }
  function Y(m, ...S) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, D = je(m.changedTouches ? m.changedTouches[0] : m, this), R = E.invert(D), z = E.k * (m.shiftKey ? 0.5 : 2), L = n(C(k(E, z), D, R), t.apply(this, S), s);
      In(m), a > 0 ? We(this).transition().duration(a).call(A, L, D, m) : We(this).call(_.transform, L, D, m);
    }
  }
  function P(m, ...S) {
    if (e.apply(this, arguments)) {
      var E = m.touches, D = E.length, R = T(this, S, m.changedTouches.length === D).event(m), z, L, F, X;
      for (co(m), L = 0; L < D; ++L)
        F = E[L], X = je(F, this), X = [X, this.__zoom.invert(X), F.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== X[2] && (R.touch1 = X, R.taps = 0) : (R.touch0 = X, z = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), z && (R.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Sr(this), R.start());
    }
  }
  function x(m, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(m), D = m.changedTouches, R = D.length, z, L, F, X;
      for (In(m), z = 0; z < R; ++z)
        L = D[z], F = je(L, this), E.touch0 && E.touch0[2] === L.identifier ? E.touch0[0] = F : E.touch1 && E.touch1[2] === L.identifier && (E.touch1[0] = F);
      if (L = E.that.__zoom, E.touch1) {
        var Z = E.touch0[0], K = E.touch0[1], J = E.touch1[0], W = E.touch1[1], G = (G = J[0] - Z[0]) * G + (G = J[1] - Z[1]) * G, Q = (Q = W[0] - K[0]) * Q + (Q = W[1] - K[1]) * Q;
        L = k(L, Math.sqrt(G / Q)), F = [(Z[0] + J[0]) / 2, (Z[1] + J[1]) / 2], X = [(K[0] + W[0]) / 2, (K[1] + W[1]) / 2];
      } else if (E.touch0) F = E.touch0[0], X = E.touch0[1];
      else return;
      E.zoom("touch", n(C(L, F, X), E.extent, s));
    }
  }
  function N(m, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(m), D = m.changedTouches, R = D.length, z, L;
      for (co(m), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), z = 0; z < R; ++z)
        L = D[z], E.touch0 && E.touch0[2] === L.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === L.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (L = je(L, this), Math.hypot(h[0] - L[0], h[1] - L[1]) < p)) {
        var F = We(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : pr(+m), _) : r;
  }, _.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : pr(!!m), _) : e;
  }, _.touchable = function(m) {
    return arguments.length ? (o = typeof m == "function" ? m : pr(!!m), _) : o;
  }, _.extent = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : pr([[+m[0][0], +m[0][1]], [+m[1][0], +m[1][1]]]), _) : t;
  }, _.scaleExtent = function(m) {
    return arguments.length ? (i[0] = +m[0], i[1] = +m[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(m) {
    return arguments.length ? (s[0][0] = +m[0][0], s[1][0] = +m[1][0], s[0][1] = +m[0][1], s[1][1] = +m[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(m) {
    return arguments.length ? (n = m, _) : n;
  }, _.duration = function(m) {
    return arguments.length ? (a = +m, _) : a;
  }, _.interpolate = function(m) {
    return arguments.length ? (l = m, _) : l;
  }, _.on = function() {
    var m = c.on.apply(c, arguments);
    return m === c ? _ : m;
  }, _.clickDistance = function(m) {
    return arguments.length ? (w = (m = +m) * m, _) : Math.sqrt(w);
  }, _.tapDistance = function(m) {
    return arguments.length ? (p = +m, _) : p;
  }, _;
}
const qn = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Oo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Ua = ["Enter", " ", "Escape"], Kh = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Sn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Sn || (Sn = {}));
var yn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(yn || (yn = {}));
var Or;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Or || (Or = {}));
const Ro = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var Tt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Tt || (Tt = {}));
var Rr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Rr || (Rr = {}));
var U;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(U || (U = {}));
const $i = {
  [U.Left]: U.Right,
  [U.Right]: U.Left,
  [U.Top]: U.Bottom,
  [U.Bottom]: U.Top
};
function Yh(e, t) {
  if (!e && !t)
    return !0;
  if (!e || !t || e.size !== t.size)
    return !1;
  if (!e.size && !t.size)
    return !0;
  for (const n of e.keys())
    if (!t.has(n))
      return !1;
  return !0;
}
function es(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Zh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const ja = (e) => "id" in e && "source" in e && "target" in e, Xh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ui = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), sr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Yt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Wh = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ui(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Hr(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return eo(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return to(n);
}, ar = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = eo(n, Hr(o)), r = !0);
  }), r ? to(n) : { x: 0, y: 0, width: 0, height: 0 };
}, di = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...cr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, w = Gn(a, Cn(c)), p = (g ?? 0) * (v ?? 0), _ = i && w > 0;
    (!c.internals.handleBounds || _ || w >= p || c.dragging) && l.push(c);
  }
  return l;
}, qh = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Gh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Uh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Gh(e, s), l = ar(a), c = fi(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Ja({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", qn.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, c],
        [l + g, c + v]
      ]);
    }
  else a && Nn(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = Nn(h) ? on(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", qn.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function jh({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((w) => w.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = qh(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((v) => v.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const h = await o({
    nodes: s,
    edges: d
  });
  return typeof h == "boolean" ? h ? { edges: d, nodes: s } : { edges: [], nodes: [] } : h;
}
const kn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), on = (e = { x: 0, y: 0 }, t, n) => ({
  x: kn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: kn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Qa(e, t, n) {
  const { width: r, height: o } = Yt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return on(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ts = (e, t, n) => e < t ? kn(Math.abs(e - t), 1, t) / t : e > n ? -kn(Math.abs(e - n), 1, t) / t : 0, $a = (e, t, n = 15, r = 40) => {
  const o = ts(e.x, r, t.width - r) * n, i = ts(e.y, r, t.height - r) * n;
  return [o, i];
}, eo = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ho = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), to = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Cn = (e, t = [0, 0]) => {
  const { x: n, y: r } = ui(e) ? e.internals.positionAbsolute : sr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Hr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ui(e) ? e.internals.positionAbsolute : sr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, el = (e, t) => to(eo(Ho(e), Ho(t))), Gn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ns = (e) => wt(e.width) && wt(e.height) && wt(e.x) && wt(e.y), wt = (e) => !isNaN(e) && isFinite(e), Jh = (e, t) => {
}, lr = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), cr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? lr(a, s) : a;
}, Lr = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function fn(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Qh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = fn(e, n), o = fn(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = fn(e.top ?? e.y ?? 0, n), o = fn(e.bottom ?? e.y ?? 0, n), i = fn(e.left ?? e.x ?? 0, t), s = fn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function $h(e, t, n, r, o, i) {
  const { x: s, y: a } = Lr(e, [t, n, r]), { x: l, y: c } = Lr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const fi = (e, t, n, r, o, i) => {
  const s = Qh(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = kn(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, w = $h(e, g, v, d, t, n), p = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: g - p.left + p.right,
    y: v - p.top + p.bottom,
    zoom: d
  };
}, Un = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Nn(e) {
  return e != null && e !== "parent";
}
function Yt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function tl(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function eg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function tg(e) {
  return { ...Kh, ...e || {} };
}
function uo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = $e(e), a = cr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? lr(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const nl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), rl = (e) => e?.getRootNode?.() || window?.document, ng = ["INPUT", "SELECT", "TEXTAREA"];
function ol(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : ng.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const il = (e) => "clientX" in e, $e = (e, t) => {
  const n = il(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, rs = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...nl(s)
    };
  });
};
function rg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function mr(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function os({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case U.Left:
      return [t - mr(t - r, i), n];
    case U.Right:
      return [t + mr(r - t, i), n];
    case U.Top:
      return [t, n - mr(n - o, i)];
    case U.Bottom:
      return [t, n + mr(o - n, i)];
  }
}
function sl({ sourceX: e, sourceY: t, sourcePosition: n = U.Bottom, targetX: r, targetY: o, targetPosition: i = U.Top, curvature: s = 0.25 }) {
  const [a, l] = os({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = os({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = rg({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${c},${d} ${r},${o}`,
    h,
    f,
    g,
    v
  ];
}
function al({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function og({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function ig({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = eo(Hr(e), Hr(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Gn(s, to(i)) > 0;
}
const sg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, ag = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), lg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || sg;
  let o;
  return ja(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, ag(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function ll({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = al({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const is = {
  [U.Left]: { x: -1, y: 0 },
  [U.Right]: { x: 1, y: 0 },
  [U.Top]: { x: 0, y: -1 },
  [U.Bottom]: { x: 0, y: 1 }
}, cg = ({ source: e, sourcePosition: t = U.Bottom, target: n }) => t === U.Left || t === U.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ss = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function ug({ source: e, sourcePosition: t = U.Bottom, target: n, targetPosition: r = U.Top, center: o, offset: i, stepPosition: s }) {
  const a = is[t], l = is[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = cg({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], w, p;
  const _ = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , C, b] = al({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (w = o.x ?? c.x + (d.x - c.x) * s, p = o.y ?? (c.y + d.y) / 2) : (w = o.x ?? (c.x + d.x) / 2, p = o.y ?? c.y + (d.y - c.y) * s);
    const T = [
      { x: w, y: c.y },
      { x: w, y: d.y }
    ], I = [
      { x: c.x, y: p },
      { x: d.x, y: p }
    ];
    a[f] === g ? v = f === "x" ? T : I : v = f === "x" ? I : T;
  } else {
    const T = [{ x: c.x, y: d.y }], I = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === g ? I : T : v = a.y === g ? T : I, t === r) {
      const x = Math.abs(e[f] - n[f]);
      if (x <= i) {
        const N = Math.min(i - 1, i - x);
        a[f] === g ? _[f] = (c[f] > e[f] ? -1 : 1) * N : k[f] = (d[f] > n[f] ? -1 : 1) * N;
      }
    }
    if (t !== r) {
      const x = f === "x" ? "y" : "x", N = a[f] === l[x], m = c[x] > d[x], S = c[x] < d[x];
      (a[f] === 1 && (!N && m || N && S) || a[f] !== 1 && (!N && S || N && m)) && (v = f === "x" ? T : I);
    }
    const M = { x: c.x + _.x, y: c.y + _.y }, B = { x: d.x + k.x, y: d.y + k.y }, Y = Math.max(Math.abs(M.x - v[0].x), Math.abs(B.x - v[0].x)), P = Math.max(Math.abs(M.y - v[0].y), Math.abs(B.y - v[0].y));
    Y >= P ? (w = (M.x + B.x) / 2, p = v[0].y) : (w = v[0].x, p = (M.y + B.y) / 2);
  }
  return [[
    e,
    { x: c.x + _.x, y: c.y + _.y },
    ...v,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], w, p, C, b];
}
function dg(e, t, n, r) {
  const o = Math.min(ss(e, t) / 2, ss(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function hi({ sourceX: e, sourceY: t, sourcePosition: n = U.Bottom, targetX: r, targetY: o, targetPosition: i = U.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, w] = ug({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((_, k, C) => {
    let b = "";
    return C > 0 && C < h.length - 1 ? b = dg(h[C - 1], k, h[C + 1], s) : b = `${C === 0 ? "M" : "L"}${k.x} ${k.y}`, _ += b, _;
  }, ""), f, g, v, w];
}
function as(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function fg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!as(t) || !as(n))
    return null;
  const r = t.internals.handleBounds || ls(t.handles), o = n.internals.handleBounds || ls(n.handles), i = cs(r?.source ?? [], e.sourceHandle), s = cs(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Sn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", qn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || U.Bottom, l = s?.position || U.Top, c = sn(t, i, a), d = sn(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function ls(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function sn(e, t, n = U.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Yt(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case U.Top:
      return { x: o + s / 2, y: i };
    case U.Right:
      return { x: o + s, y: i + a / 2 };
    case U.Bottom:
      return { x: o + s / 2, y: i + a };
    case U.Left:
      return { x: o, y: i + a / 2 };
  }
}
function cs(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Lo(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function hg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Lo(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const cl = 1e3, gg = 10, gi = {
  nodeOrigin: [0, 0],
  nodeExtent: Oo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, vg = {
  ...gi,
  checkEquality: !0
};
function vi(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function pg(e, t, n) {
  const r = vi(gi, n);
  for (const o of e.values())
    if (o.parentId)
      mi(o, e, t, r);
    else {
      const i = sr(o, r.nodeOrigin), s = Nn(o.extent) ? o.extent : r.nodeExtent, a = on(i, s, Yt(o));
      o.internals.positionAbsolute = a;
    }
}
function mg(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function pi(e) {
  return e === "manual";
}
function yg(e, t, n, r = {}) {
  const o = vi(vg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !pi(o.zIndexMode) ? cl : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = sr(c, o.nodeOrigin), f = Nn(c.extent) ? c.extent : o.nodeExtent, g = on(h, f, Yt(c));
      d = {
        ...o.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: mg(c, d),
          z: ul(c, a, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), c.parentId && mi(d, t, n, r, i);
  }
  return l;
}
function wg(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function mi(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = vi(gi, r), c = e.parentId, d = t.get(c);
  if (!d) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  wg(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && l === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * gg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !pi(l) ? cl : 0, { x: f, y: g, z: v } = _g(e, d, s, a, h, l), { positionAbsolute: w } = e.internals, p = f !== w.x || g !== w.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: f, y: g } : w,
      z: v
    }
  });
}
function ul(e, t, n) {
  const r = wt(e.zIndex) ? e.zIndex : 0;
  return pi(n) ? r : r + (e.selected ? t : 0);
}
function _g(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Yt(e), c = sr(e, n), d = Nn(e.extent) ? on(c, e.extent, l) : c;
  let h = on({ x: s + d.x, y: a + d.y }, r, l);
  e.extent === "parent" && (h = Qa(h, l, t));
  const f = ul(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function bg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Cn(a), c = el(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Yt(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), p = (v - d.width) * h[0], _ = (w - d.height) * h[1];
    (f > 0 || g > 0 || p || _) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + p,
        y: a.position.y - g + _
      }
    }), n.get(l)?.forEach((k) => {
      e.some((C) => C.id === k.id) || o.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + f,
          y: k.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - p : 0),
        height: w + (g ? h[1] * g - _ : 0)
      }
    });
  }), o;
}
function xg(e, t, n, r, o, i, s) {
  const a = r?.querySelector(".xyflow__viewport");
  let l = !1;
  if (!a)
    return { changes: [], updatedInternals: l };
  const c = [], d = window.getComputedStyle(a), { m22: h } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const g of e.values()) {
    const v = t.get(g.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), l = !0;
      continue;
    }
    const w = nl(g.nodeElement), p = v.measured.width !== w.width || v.measured.height !== w.height;
    if (!!(w.width && w.height && (p || !v.internals.handleBounds || g.force))) {
      const k = g.nodeElement.getBoundingClientRect(), C = Nn(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = Qa(b, w, t.get(v.parentId)) : C && (b = on(b, C, w));
      const A = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: rs("source", g.nodeElement, k, h, v.id),
            target: rs("target", g.nodeElement, k, h, v.id)
          }
        }
      };
      t.set(v.id, A), v.parentId && mi(A, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, p && (c.push({
        id: v.id,
        type: "dimensions",
        dimensions: w
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Cn(A, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = bg(f, t, n, o);
    c.push(...g);
  }
  return { changes: c, updatedInternals: l };
}
async function Eg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function us(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function Sg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    us("source", l, d, e, o, s), us("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function dl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : dl(n, t) : !1;
}
function ds(e, t, n) {
  let r = e;
  do {
    if (r?.matches?.(t))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function kg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !dl(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function fo({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Cg({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = lr(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Ng({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, w = null;
  function p({ noDragClassName: k, handleSelector: C, domNode: b, isSelectable: A, nodeId: T, nodeClickDistance: I = 0 }) {
    f = We(b);
    function M({ x, y: N }) {
      const { nodeLookup: m, nodeExtent: S, snapGrid: E, snapToGrid: D, nodeOrigin: R, onNodeDrag: z, onSelectionDrag: L, onError: F, updateNodePositions: X } = t();
      i = { x, y: N };
      let Z = !1;
      const K = a.size > 1, J = K && S ? Ho(ar(a)) : null, W = K && D ? Cg({
        dragItems: a,
        snapGrid: E,
        x,
        y: N
      }) : null;
      for (const [G, Q] of a) {
        if (!m.has(G))
          continue;
        let fe = { x: x - Q.distance.x, y: N - Q.distance.y };
        D && (fe = W ? {
          x: Math.round(fe.x + W.x),
          y: Math.round(fe.y + W.y)
        } : lr(fe, E));
        let be = null;
        if (K && S && !Q.extent && J) {
          const { positionAbsolute: oe } = Q.internals, Ae = oe.x - J.x + S[0][0], Ct = oe.x + Q.measured.width - J.x2 + S[1][0], Nt = oe.y - J.y + S[0][1], ht = oe.y + Q.measured.height - J.y2 + S[1][1];
          be = [
            [Ae, Nt],
            [Ct, ht]
          ];
        }
        const { position: ne, positionAbsolute: pe } = Ja({
          nodeId: G,
          nextPosition: fe,
          nodeLookup: m,
          nodeExtent: be || S,
          nodeOrigin: R,
          onError: F
        });
        Z = Z || Q.position.x !== ne.x || Q.position.y !== ne.y, Q.position = ne, Q.internals.positionAbsolute = pe;
      }
      if (v = v || Z, !!Z && (X(a, !0), w && (r || z || !T && L))) {
        const [G, Q] = fo({
          nodeId: T,
          dragItems: a,
          nodeLookup: m
        });
        r?.(w, a, G, Q), z?.(w, G, Q), T || L?.(w, Q);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: x, panBy: N, autoPanSpeed: m, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, D] = $a(c, d, m);
      (E !== 0 || D !== 0) && (i.x = (i.x ?? 0) - E / x[2], i.y = (i.y ?? 0) - D / x[2], await N({ x: E, y: D }) && M(i)), s = requestAnimationFrame(B);
    }
    function Y(x) {
      const { nodeLookup: N, multiSelectionActive: m, nodesDraggable: S, transform: E, snapGrid: D, snapToGrid: R, selectNodesOnDrag: z, onNodeDragStart: L, onSelectionDragStart: F, unselectNodesAndEdges: X } = t();
      h = !0, (!z || !A) && !m && T && (N.get(T)?.selected || X()), A && z && T && e?.(T);
      const Z = uo(x.sourceEvent, { transform: E, snapGrid: D, snapToGrid: R, containerBounds: d });
      if (i = Z, a = kg(N, S, Z, T), a.size > 0 && (n || L || !T && F)) {
        const [K, J] = fo({
          nodeId: T,
          dragItems: a,
          nodeLookup: N
        });
        n?.(x.sourceEvent, a, K, J), L?.(x.sourceEvent, K, J), T || F?.(x.sourceEvent, J);
      }
    }
    const P = Gd().clickDistance(I).on("start", (x) => {
      const { domNode: N, nodeDragThreshold: m, transform: S, snapGrid: E, snapToGrid: D } = t();
      d = N?.getBoundingClientRect() || null, g = !1, v = !1, w = x.sourceEvent, m === 0 && Y(x), i = uo(x.sourceEvent, { transform: S, snapGrid: E, snapToGrid: D, containerBounds: d }), c = $e(x.sourceEvent, d);
    }).on("drag", (x) => {
      const { autoPanOnNodeDrag: N, transform: m, snapGrid: S, snapToGrid: E, nodeDragThreshold: D, nodeLookup: R } = t(), z = uo(x.sourceEvent, { transform: m, snapGrid: S, snapToGrid: E, containerBounds: d });
      if (w = x.sourceEvent, (x.sourceEvent.type === "touchmove" && x.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !R.has(T)) && (g = !0), !g) {
        if (!l && N && h && (l = !0, B()), !h) {
          const L = $e(x.sourceEvent, d), F = L.x - c.x, X = L.y - c.y;
          Math.sqrt(F * F + X * X) > D && Y(x);
        }
        (i.x !== z.xSnapped || i.y !== z.ySnapped) && a && h && (c = $e(x.sourceEvent, d), M(z));
      }
    }).on("end", (x) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: m, onNodeDragStop: S, onSelectionDragStop: E } = t();
        if (v && (m(a, !1), v = !1), o || S || !T && E) {
          const [D, R] = fo({
            nodeId: T,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(x.sourceEvent, a, D, R), S?.(x.sourceEvent, D, R), T || E?.(x.sourceEvent, R);
        }
      }
    }).filter((x) => {
      const N = x.target;
      return !x.button && (!k || !ds(N, `.${k}`, b)) && (!C || ds(N, C, b));
    });
    f.call(P);
  }
  function _() {
    f?.on(".drag", null);
  }
  return {
    update: p,
    destroy: _
  };
}
function Pg(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Gn(o, Cn(i)) > 0 && r.push(i);
  return r;
}
const Mg = 250;
function Ag(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Pg(e, n, t + Mg);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: h } = sn(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: h }], i = f) : f === i && o.push({ ...c, x: d, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((l) => l.type === a) ?? o[0];
  }
  return o[0];
}
function fl(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...sn(s, l, l.position, !0) } : l;
}
function hl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Tg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const gl = () => !0;
function Dg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: w, onConnectEnd: p, isValidConnection: _ = gl, onReconnectEnd: k, updateConnection: C, getTransform: b, getFromHandle: A, autoPanSpeed: T, dragThreshold: I = 1, handleDomNode: M }) {
  const B = rl(e.target);
  let Y = 0, P;
  const { x, y: N } = $e(e), m = hl(i, M), S = a?.getBoundingClientRect();
  let E = !1;
  if (!S || !m)
    return;
  const D = fl(o, m, r, l, t);
  if (!D)
    return;
  let R = $e(e, S), z = !1, L = null, F = !1, X = null;
  function Z() {
    if (!d || !S)
      return;
    const [ne, pe] = $a(R, S, T);
    f({ x: ne, y: pe }), Y = requestAnimationFrame(Z);
  }
  const K = {
    ...D,
    nodeId: o,
    type: m,
    position: D.position
  }, J = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: sn(J, K, U.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: J,
    to: R,
    toHandle: null,
    toPosition: $i[K.position],
    toNode: null,
    pointer: R
  };
  function Q() {
    E = !0, C(G), v?.(e, { nodeId: o, handleId: r, handleType: m });
  }
  I === 0 && Q();
  function fe(ne) {
    if (!E) {
      const { x: ht, y: de } = $e(ne), we = ht - x, Ue = de - N;
      if (!(we * we + Ue * Ue > I * I))
        return;
      Q();
    }
    if (!A() || !K) {
      be(ne);
      return;
    }
    const pe = b();
    R = $e(ne, S), P = Ag(cr(R, pe, !1, [1, 1]), n, l, K), z || (Z(), z = !0);
    const oe = vl(ne, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: _,
      doc: B,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    X = oe.handleDomNode, L = oe.connection, F = Tg(!!P, oe.isValid);
    const Ae = l.get(o), Ct = Ae ? sn(Ae, K, U.Left, !0) : G.from, Nt = {
      ...G,
      from: Ct,
      isValid: F,
      to: oe.toHandle && F ? Lr({ x: oe.toHandle.x, y: oe.toHandle.y }, pe) : R,
      toHandle: oe.toHandle,
      toPosition: F && oe.toHandle ? oe.toHandle.position : $i[K.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: R
    };
    C(Nt), G = Nt;
  }
  function be(ne) {
    if (!("touches" in ne && ne.touches.length > 0)) {
      if (E) {
        (P || X) && L && F && w?.(L);
        const { inProgress: pe, ...oe } = G, Ae = {
          ...oe,
          toPosition: G.toHandle ? G.toPosition : null
        };
        p?.(ne, Ae), i && k?.(ne, Ae);
      }
      g(), cancelAnimationFrame(Y), z = !1, F = !1, L = null, X = null, B.removeEventListener("mousemove", fe), B.removeEventListener("mouseup", be), B.removeEventListener("touchmove", fe), B.removeEventListener("touchend", be);
    }
  }
  B.addEventListener("mousemove", fe), B.addEventListener("mouseup", be), B.addEventListener("touchmove", fe), B.addEventListener("touchend", be);
}
function vl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = gl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = $e(e), w = s.elementFromPoint(g, v), p = w?.classList.contains(`${a}-flow__handle`) ? w : f, _ = {
    handleDomNode: p,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (p) {
    const k = hl(void 0, p), C = p.getAttribute("data-nodeid"), b = p.getAttribute("data-handleid"), A = p.classList.contains("connectable"), T = p.classList.contains("connectableend");
    if (!C || !k)
      return _;
    const I = {
      source: h ? C : r,
      sourceHandle: h ? b : o,
      target: h ? r : C,
      targetHandle: h ? o : b
    };
    _.connection = I;
    const B = A && T && (n === Sn.Strict ? h && k === "source" || !h && k === "target" : C !== r || b !== o);
    _.isValid = B && c(I), _.toHandle = fl(C, k, b, d, n, !0);
  }
  return _;
}
const fs = {
  onPointerDown: Dg,
  isValid: vl
};
function Ig({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = We(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (C) => {
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), A = C.sourceEvent.ctrlKey && Un() ? 10 : 1, T = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * d, I = b[2] * Math.pow(2, T * A);
      t.scaleTo(I);
    };
    let w = [0, 0];
    const p = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (w = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const b = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const A = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], T = [A[0] - w[0], A[1] - w[1]];
      w = A;
      const I = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), M = {
        x: b[0] - T[0] * I,
        y: b[1] - T[1] * I
      }, B = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: b[2]
      }, B, a);
    }, k = Ga().on("start", p).on("zoom", h ? _ : null).on("zoom.wheel", f ? v : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: je
  };
}
const no = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ho = ({ x: e, y: t, zoom: n }) => $r.translate(e, t).scale(n), vn = (e, t) => e.target.closest(`.${t}`), pl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), zg = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, go = (e, t = 0, n = zg, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, ml = (e) => {
  const t = e.ctrlKey && Un() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Og({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (vn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const p = je(d), _ = ml(d), k = h * Math.pow(2, _);
      r.scaleTo(n, k, p, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === yn.Vertical ? 0 : d.deltaX * f, v = o === yn.Horizontal ? 0 : d.deltaY * f;
    !Un() && d.shiftKey && o !== yn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = no(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      c?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function Rg({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = vn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Hg({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = no(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Lg({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && pl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, no(i.transform));
  };
}
function Vg({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && pl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = no(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Bg({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (vn(h, `${c}-flow__node`) || vn(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || vn(h, a) && v || vn(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && w;
  };
}
function Fg({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = Ga().scaleExtent([t, n]).translateExtent(r), f = We(e).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: kn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(ml);
  function w(P, x) {
    return f ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Vn : br).transform(go(f, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function p({ noWheelClassName: P, noPanClassName: x, onPaneContextMenu: N, userSelectionActive: m, panOnScroll: S, panOnDrag: E, panOnScrollMode: D, panOnScrollSpeed: R, preventScrolling: z, zoomOnPinch: L, zoomOnScroll: F, zoomOnDoubleClick: X, zoomActivationKeyPressed: Z, lib: K, onTransformChange: J, connectionInProgress: W, paneClickDistance: G, selectionOnDrag: Q }) {
    m && !c.isZoomingOrPanning && _();
    const fe = S && !Z && !m;
    h.clickDistance(Q ? 1 / 0 : !wt(G) || G < 0 ? 0 : G);
    const be = fe ? Og({
      zoomPanValues: c,
      noWheelClassName: P,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: D,
      panOnScrollSpeed: R,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Rg({
      noWheelClassName: P,
      preventScrolling: z,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", be, { passive: !1 }), !m) {
      const pe = Hg({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const oe = Lg({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: J
      });
      h.on("zoom", oe);
      const Ae = Vg({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: S,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", Ae);
    }
    const ne = Bg({
      zoomActivationKeyPressed: Z,
      panOnDrag: E,
      zoomOnScroll: F,
      panOnScroll: S,
      zoomOnDoubleClick: X,
      zoomOnPinch: L,
      userSelectionActive: m,
      noPanClassName: x,
      noWheelClassName: P,
      lib: K,
      connectionInProgress: W
    });
    h.filter(ne), X ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function _() {
    h.on("zoom", null);
  }
  async function k(P, x, N) {
    const m = ho(P), S = h?.constrain()(m, x, N);
    return S && await w(S), new Promise((E) => E(S));
  }
  async function C(P, x) {
    const N = ho(P);
    return await w(N, x), new Promise((m) => m(N));
  }
  function b(P) {
    if (f) {
      const x = ho(P), N = f.property("__zoom");
      (N.k !== P.zoom || N.x !== P.x || N.y !== P.y) && h?.transform(f, x, null, { sync: !0 });
    }
  }
  function A() {
    const P = f ? qa(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function T(P, x) {
    return f ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Vn : br).scaleTo(go(f, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function I(P, x) {
    return f ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Vn : br).scaleBy(go(f, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function M(P) {
    h?.scaleExtent(P);
  }
  function B(P) {
    h?.translateExtent(P);
  }
  function Y(P) {
    const x = !wt(P) || P < 0 ? 0 : P;
    h?.clickDistance(x);
  }
  return {
    update: p,
    destroy: _,
    setViewport: C,
    setViewportConstrained: k,
    getViewport: A,
    scaleTo: T,
    scaleBy: I,
    setScaleExtent: M,
    setTranslateExtent: B,
    syncViewport: b,
    setClickDistance: Y
  };
}
var hs;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(hs || (hs = {}));
function yi() {
  const e = {};
  return [
    (t) => {
      if (t && !ic(e))
        throw new Error(t);
      return Yo(e);
    },
    (t) => Zo(e, t)
  ];
}
const [Kg, Yg] = yi(), [Zg, Xg] = yi(), [Wg, qg] = yi();
var Gg = /* @__PURE__ */ re("<div><!></div>");
function Ht(e, t) {
  ee(t, !0);
  let n = H(t, "id", 3, null), r = H(t, "type", 3, "source"), o = H(t, "position", 19, () => U.Top), i = H(t, "isConnectableStart", 3, !0), s = H(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "type",
    "position",
    "style",
    "class",
    "isConnectable",
    "isConnectableStart",
    "isConnectableEnd",
    "isValidConnection",
    "onconnect",
    "ondisconnect",
    "children"
  ]);
  const l = Kg("Handle must be used within a Custom Node component"), c = Zg("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ y(() => r() === "target"), h = /* @__PURE__ */ y(() => t.isConnectable !== void 0 ? t.isConnectable : c.value), f = Zt(), g = /* @__PURE__ */ y(() => f.ariaLabelConfig), v = null;
  Us(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let x = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !Yh(x, v)) {
        const N = x ?? /* @__PURE__ */ new Map();
        es(v, N, t.ondisconnect), es(N, v, t.onconnect);
      }
      v = new Map(x);
    }
  });
  let w = /* @__PURE__ */ y(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: x, toHandle: N, isValid: m } = f.connection, S = x && x.nodeId === l && x.type === r() && x.id === n(), E = N && N.nodeId === l && N.type === r() && N.id === n(), D = f.connectionMode === Sn.Strict ? x?.type !== r() : l !== x?.nodeId || n() !== x?.id;
    return [
      !0,
      S,
      E,
      D,
      E && m
    ];
  }), p = /* @__PURE__ */ y(() => jn(u(w), 5)), _ = /* @__PURE__ */ y(() => u(p)[0]), k = /* @__PURE__ */ y(() => u(p)[1]), C = /* @__PURE__ */ y(() => u(p)[2]), b = /* @__PURE__ */ y(() => u(p)[3]), A = /* @__PURE__ */ y(() => u(p)[4]);
  function T(x) {
    const N = f.onbeforeconnect ? f.onbeforeconnect(x) : x;
    N && (f.addEdge(N), f.onconnect?.(x));
  }
  function I(x) {
    const N = il(x);
    x.currentTarget && (N && x.button === 0 || !N) && fs.onPointerDown(x, {
      handleId: n(),
      nodeId: l,
      isTarget: u(d),
      connectionRadius: f.connectionRadius,
      domNode: f.domNode,
      nodeLookup: f.nodeLookup,
      connectionMode: f.connectionMode,
      lib: "svelte",
      autoPanOnConnect: f.autoPanOnConnect,
      autoPanSpeed: f.autoPanSpeed,
      flowId: f.flowId,
      isValidConnection: t.isValidConnection ?? f.isValidConnection,
      updateConnection: f.updateConnection,
      cancelConnection: f.cancelConnection,
      panBy: f.panBy,
      onConnect: T,
      onConnectStart: (m, S) => {
        f.onconnectstart?.(m, {
          nodeId: S.nodeId,
          handleId: S.handleId,
          handleType: S.handleType
        });
      },
      onConnectEnd: (m, S) => {
        f.onconnectend?.(m, S);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }
  function M(x) {
    if (!l || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(x, { nodeId: l, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: l, type: r(), id: n() };
      return;
    }
    const N = rl(x.target), m = t.isValidConnection ?? f.isValidConnection, { connectionMode: S, clickConnectStartHandle: E, flowId: D, nodeLookup: R } = f, { connection: z, isValid: L } = fs.isValid(x, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: S,
      fromNodeId: E.nodeId,
      fromHandleId: E.id ?? null,
      fromType: E.type,
      isValidConnection: m,
      flowId: D,
      doc: N,
      lib: "svelte",
      nodeLookup: R
    });
    L && z && T(z);
    const F = structuredClone(Is(f.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, f.onclickconnectend?.(x, F), f.clickConnectStartHandle = null;
  }
  var B = Gg(), Y = () => {
  };
  Ft(B, () => ({
    "data-handleid": n(),
    "data-nodeid": l,
    "data-handlepos": o(),
    "data-id": `${f.flowId ?? ""}-${l ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      f.noDragClass,
      f.noPanClass,
      o(),
      t.class
    ],
    onmousedown: I,
    ontouchstart: I,
    onclick: f.clickConnect ? M : void 0,
    onkeypress: Y,
    style: t.style,
    role: "button",
    "aria-label": u(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Mt]: {
      valid: u(A),
      connectingto: u(C),
      connectingfrom: u(k),
      source: !u(d),
      target: u(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: u(h),
      connectionindicator: u(h) && (!u(_) || u(b)) && (u(_) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var P = q(B);
  Re(P, () => t.children ?? Lt), V(e, B), te();
}
var Ug = /* @__PURE__ */ re("<!> <!>", 1);
function yl(e, t) {
  ee(t, !0);
  let n = H(t, "targetPosition", 19, () => U.Top), r = H(t, "sourcePosition", 19, () => U.Bottom);
  var o = Ug(), i = ae(o);
  Ht(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = $(i), a = $(s);
  Ht(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => Me(s, ` ${t.data?.label ?? ""} `)), V(e, o), te();
}
var jg = /* @__PURE__ */ re(" <!>", 1);
function Jg(e, t) {
  ee(t, !0);
  let n = H(t, "data", 19, () => ({ label: "Node" })), r = H(t, "sourcePosition", 19, () => U.Bottom);
  var o = jg(), i = ae(o), s = $(i);
  Ht(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => Me(i, `${n()?.label ?? ""} `)), V(e, o), te();
}
var Qg = /* @__PURE__ */ re(" <!>", 1);
function $g(e, t) {
  ee(t, !0);
  let n = H(t, "data", 19, () => ({ label: "Node" })), r = H(t, "targetPosition", 19, () => U.Top);
  var o = Qg(), i = ae(o), s = $(i);
  Ht(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ce(() => Me(i, `${n()?.label ?? ""} `)), V(e, o), te();
}
function ev(e, t) {
}
function vo(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function tv(e, t) {
  const n = /* @__PURE__ */ y(Zt), r = /* @__PURE__ */ y(() => u(n).domNode);
  let o;
  return u(r) ? vo(e, u(r), t) : o = js(() => {
    qe(() => {
      vo(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      vo(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function nv() {
  let e = /* @__PURE__ */ se(typeof window > "u");
  if (u(e)) {
    const t = js(() => {
      qe(() => {
        O(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const gs = (e) => Xh(e), rv = (e) => ja(e);
function dt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Vr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var ov = /* @__PURE__ */ re("<div><!></div>");
function iv(e, t) {
  ee(t, !0);
  let n = H(t, "x", 3, 0), r = H(t, "y", 3, 0), o = H(t, "selectEdgeOnClick", 3, !1), i = H(t, "transparent", 3, !1), s = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "x",
    "y",
    "width",
    "height",
    "selectEdgeOnClick",
    "transparent",
    "class",
    "children"
  ]);
  const a = Zt(), l = Wg("EdgeLabel must be used within a Custom Edge component");
  let c = /* @__PURE__ */ y(() => a.visible.edges.get(l)?.zIndex);
  var d = ov(), h = () => {
    o() && l && a.handleEdgeSelection(l);
  };
  Ft(
    d,
    (g) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: i() },
        t.class
      ],
      tabindex: "-1",
      onclick: h,
      ...s,
      [pt]: g
    }),
    [
      () => ({
        display: nv().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: dt(t.width),
        height: dt(t.height),
        "z-index": u(c)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = q(d);
  Re(f, () => t.children ?? Lt), Ne(d, (g, v) => tv?.(g, v), () => "edge-labels"), V(e, d), te();
}
var sv = /* @__PURE__ */ me("<path></path>"), av = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function ro(e, t) {
  let n = H(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "path",
    "label",
    "labelX",
    "labelY",
    "labelStyle",
    "markerStart",
    "markerEnd",
    "style",
    "interactionWidth",
    "class"
  ]);
  var o = av(), i = ae(o), s = $(i);
  {
    var a = (d) => {
      var h = sv();
      Ft(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), V(d, h);
    };
    ue(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var l = $(s);
  {
    var c = (d) => {
      iv(d, {
        get x() {
          return t.labelX;
        },
        get y() {
          return t.labelY;
        },
        get style() {
          return t.labelStyle;
        },
        selectEdgeOnClick: !0,
        children: (h, f) => {
          var g = Lc();
          ce(() => Me(g, t.label)), V(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    ue(l, (d) => {
      t.label && d(c);
    });
  }
  ce(() => {
    j(i, "id", t.id), j(i, "d", t.path), ze(i, 0, Bt(["svelte-flow__edge-path", t.class])), j(i, "marker-start", t.markerStart), j(i, "marker-end", t.markerEnd), Ke(i, t.style);
  }), V(e, o);
}
function wl(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => sl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ y(() => jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  ro(e, {
    get id() {
      return t.id;
    },
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), te();
}
function lv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => hi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ y(() => jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  ro(e, {
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), te();
}
function cv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => ll({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ y(() => jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  ro(e, {
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), te();
}
function uv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => hi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ y(() => jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  ro(e, {
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), te();
}
class dv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Hs(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const fv = /\(.+\)/, hv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class gv extends dv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = fv.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => hv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Eo(o, "change", i)
    );
  }
}
function vv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return di(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function vs(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: c } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: p, transform: _, width: k, height: C } = e;
      if (ig({
        sourceNode: f,
        targetNode: g,
        width: k,
        height: C,
        transform: _
      }))
        p.set(f.id, f), p.set(g.id, g);
      else
        continue;
    }
    const v = o.get(h.id);
    if (v && h === v.edge && f == v.sourceNode && g == v.targetNode) {
      d.set(h.id, v);
      continue;
    }
    const w = fg({
      id: h.id,
      sourceNode: f,
      targetNode: g,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    w && d.set(h.id, {
      ...n,
      ...h,
      ...w,
      zIndex: og({
        selected: h.selected,
        zIndex: h.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: g,
        elevateOnSelect: l,
        zIndexMode: c
      }),
      sourceNode: f,
      targetNode: g,
      edge: h
    });
  }
  return d;
}
const _l = {
  input: Jg,
  output: $g,
  default: yl,
  group: ev
}, bl = {
  straight: cv,
  smoothstep: lv,
  default: wl,
  step: uv
};
function pv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ar(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return fi(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function mv(e) {
  class t {
    #e = /* @__PURE__ */ y(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      O(this.#e, r);
    }
    #t = /* @__PURE__ */ se(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      O(this.#t, r);
    }
    #n = /* @__PURE__ */ se(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      O(this.#n, r);
    }
    #r = /* @__PURE__ */ se(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      O(this.#r, r);
    }
    #l = /* @__PURE__ */ se(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      O(this.#l, r);
    }
    #i = /* @__PURE__ */ se(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return u(this.#i);
    }
    set zIndexMode(r) {
      O(this.#i, r);
    }
    #o = /* @__PURE__ */ y(() => {
      const r = yg(e.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0,
        zIndexMode: this.zIndexMode
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return u(this.#o);
    }
    set nodesInitialized(r) {
      O(this.#o, r);
    }
    #s = /* @__PURE__ */ y(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      O(this.#s, r);
    }
    #a = /* @__PURE__ */ y(() => (Sg(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      O(this.#a, r);
    }
    get nodes() {
      return this.nodesInitialized, e.nodes;
    }
    set nodes(r) {
      e.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      e.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ y(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#c);
    }
    set selectedNodes(r) {
      O(this.#c, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ y(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#u);
    }
    set selectedEdges(r) {
      O(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ y(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: c,
        defaultEdgeOptions: d,
        zIndexMode: h
      } = this;
      let f, g;
      const v = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        zIndexMode: h,
        onerror: l
      };
      if (c) {
        const { viewport: w, width: p, height: _ } = this, k = [w.x, w.y, w.zoom];
        f = vv(s, k, p, _), g = vs({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: k,
          width: p,
          height: _
        });
      } else
        f = this.nodeLookup, g = vs(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return u(this.#d);
    }
    set visible(r) {
      O(this.#d, r);
    }
    #f = /* @__PURE__ */ y(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#f);
    }
    set nodesDraggable(r) {
      O(this.#f, r);
    }
    #g = /* @__PURE__ */ y(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#g);
    }
    set nodesConnectable(r) {
      O(this.#g, r);
    }
    #h = /* @__PURE__ */ y(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#h);
    }
    set elementsSelectable(r) {
      O(this.#h, r);
    }
    #w = /* @__PURE__ */ y(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#w);
    }
    set nodesFocusable(r) {
      O(this.#w, r);
    }
    #_ = /* @__PURE__ */ y(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#_);
    }
    set edgesFocusable(r) {
      O(this.#_, r);
    }
    #b = /* @__PURE__ */ y(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      O(this.#b, r);
    }
    #m = /* @__PURE__ */ y(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      O(this.#m, r);
    }
    #v = /* @__PURE__ */ y(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#v);
    }
    set maxZoom(r) {
      O(this.#v, r);
    }
    #p = /* @__PURE__ */ y(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      O(this.#p, r);
    }
    #y = /* @__PURE__ */ y(() => e.props.nodeExtent ?? Oo);
    get nodeExtent() {
      return u(this.#y);
    }
    set nodeExtent(r) {
      O(this.#y, r);
    }
    #x = /* @__PURE__ */ y(() => e.props.translateExtent ?? Oo);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      O(this.#x, r);
    }
    #E = /* @__PURE__ */ y(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#E);
    }
    set defaultEdgeOptions(r) {
      O(this.#E, r);
    }
    #S = /* @__PURE__ */ y(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#S);
    }
    set nodeDragThreshold(r) {
      O(this.#S, r);
    }
    #k = /* @__PURE__ */ y(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      O(this.#k, r);
    }
    #C = /* @__PURE__ */ y(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#C);
    }
    set autoPanOnConnect(r) {
      O(this.#C, r);
    }
    #N = /* @__PURE__ */ y(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      O(this.#N, r);
    }
    #P = /* @__PURE__ */ y(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#P);
    }
    set autoPanSpeed(r) {
      O(this.#P, r);
    }
    #M = /* @__PURE__ */ y(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#M);
    }
    set connectionDragThreshold(r) {
      O(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ y(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#A);
    }
    set snapGrid(r) {
      O(this.#A, r);
    }
    #T = /* @__PURE__ */ se(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      O(this.#T, r);
    }
    #D = /* @__PURE__ */ se(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      O(this.#D, r);
    }
    #I = /* @__PURE__ */ se(!1);
    get selectionKeyPressed() {
      return u(this.#I);
    }
    set selectionKeyPressed(r) {
      O(this.#I, r);
    }
    #z = /* @__PURE__ */ se(!1);
    get multiselectionKeyPressed() {
      return u(this.#z);
    }
    set multiselectionKeyPressed(r) {
      O(this.#z, r);
    }
    #O = /* @__PURE__ */ se(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      O(this.#O, r);
    }
    #R = /* @__PURE__ */ se(!1);
    get panActivationKeyPressed() {
      return u(this.#R);
    }
    set panActivationKeyPressed(r) {
      O(this.#R, r);
    }
    #H = /* @__PURE__ */ se(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      O(this.#H, r);
    }
    #L = /* @__PURE__ */ se(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      O(this.#L, r);
    }
    #V = /* @__PURE__ */ se("");
    get ariaLiveMessage() {
      return u(this.#V);
    }
    set ariaLiveMessage(r) {
      O(this.#V, r);
    }
    #B = /* @__PURE__ */ y(() => e.props.selectionMode ?? Or.Partial);
    get selectionMode() {
      return u(this.#B);
    }
    set selectionMode(r) {
      O(this.#B, r);
    }
    #F = /* @__PURE__ */ y(() => ({ ..._l, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      O(this.#F, r);
    }
    #K = /* @__PURE__ */ y(() => ({ ...bl, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#K);
    }
    set edgeTypes(r) {
      O(this.#K, r);
    }
    #Y = /* @__PURE__ */ y(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#Y);
    }
    set noPanClass(r) {
      O(this.#Y, r);
    }
    #Z = /* @__PURE__ */ y(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#Z);
    }
    set noDragClass(r) {
      O(this.#Z, r);
    }
    #X = /* @__PURE__ */ y(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#X);
    }
    set noWheelClass(r) {
      O(this.#X, r);
    }
    #W = /* @__PURE__ */ y(() => tg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      O(this.#W, r);
    }
    #q = /* @__PURE__ */ se(pv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#q);
    }
    set _viewport(r) {
      O(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ se(Ro)
    );
    get _connection() {
      return u(this.#G);
    }
    set _connection(r) {
      O(this.#G, r);
    }
    #U = /* @__PURE__ */ y(() => this._connection.inProgress ? {
      ...this._connection,
      to: cr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#U);
    }
    set connection(r) {
      O(this.#U, r);
    }
    #j = /* @__PURE__ */ y(() => e.props.connectionMode ?? Sn.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      O(this.#j, r);
    }
    #J = /* @__PURE__ */ y(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#J);
    }
    set connectionRadius(r) {
      O(this.#J, r);
    }
    #Q = /* @__PURE__ */ y(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#Q);
    }
    set isValidConnection(r) {
      O(this.#Q, r);
    }
    #$ = /* @__PURE__ */ y(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#$);
    }
    set selectNodesOnDrag(r) {
      O(this.#$, r);
    }
    #ee = /* @__PURE__ */ y(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#ee);
    }
    set defaultMarkerColor(r) {
      O(this.#ee, r);
    }
    #te = /* @__PURE__ */ y(() => hg(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#te);
    }
    set markers(r) {
      O(this.#te, r);
    }
    #ne = /* @__PURE__ */ y(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      O(this.#ne, r);
    }
    #re = /* @__PURE__ */ y(() => e.props.onflowerror ?? Jh);
    get onerror() {
      return u(this.#re);
    }
    set onerror(r) {
      O(this.#re, r);
    }
    #oe = /* @__PURE__ */ y(() => e.props.ondelete);
    get ondelete() {
      return u(this.#oe);
    }
    set ondelete(r) {
      O(this.#oe, r);
    }
    #ie = /* @__PURE__ */ y(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#ie);
    }
    set onbeforedelete(r) {
      O(this.#ie, r);
    }
    #se = /* @__PURE__ */ y(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#se);
    }
    set onbeforeconnect(r) {
      O(this.#se, r);
    }
    #ae = /* @__PURE__ */ y(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ae);
    }
    set onconnect(r) {
      O(this.#ae, r);
    }
    #le = /* @__PURE__ */ y(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#le);
    }
    set onconnectstart(r) {
      O(this.#le, r);
    }
    #ce = /* @__PURE__ */ y(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ce);
    }
    set onconnectend(r) {
      O(this.#ce, r);
    }
    #ue = /* @__PURE__ */ y(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ue);
    }
    set onbeforereconnect(r) {
      O(this.#ue, r);
    }
    #de = /* @__PURE__ */ y(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#de);
    }
    set onreconnect(r) {
      O(this.#de, r);
    }
    #fe = /* @__PURE__ */ y(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#fe);
    }
    set onreconnectstart(r) {
      O(this.#fe, r);
    }
    #he = /* @__PURE__ */ y(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#he);
    }
    set onreconnectend(r) {
      O(this.#he, r);
    }
    #ge = /* @__PURE__ */ y(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#ge);
    }
    set clickConnect(r) {
      O(this.#ge, r);
    }
    #ve = /* @__PURE__ */ y(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ve);
    }
    set onclickconnectstart(r) {
      O(this.#ve, r);
    }
    #pe = /* @__PURE__ */ y(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#pe);
    }
    set onclickconnectend(r) {
      O(this.#pe, r);
    }
    #me = /* @__PURE__ */ se(null);
    get clickConnectStartHandle() {
      return u(this.#me);
    }
    set clickConnectStartHandle(r) {
      O(this.#me, r);
    }
    #ye = /* @__PURE__ */ y(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ye);
    }
    set onselectiondrag(r) {
      O(this.#ye, r);
    }
    #we = /* @__PURE__ */ y(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#we);
    }
    set onselectiondragstart(r) {
      O(this.#we, r);
    }
    #_e = /* @__PURE__ */ y(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#_e);
    }
    set onselectiondragstop(r) {
      O(this.#_e, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Uh(
        {
          nodes: this.nodeLookup,
          width: this.width,
          height: this.height,
          panZoom: this.panZoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom
        },
        this.fitViewOptions
      ), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
    };
    _prefersDark = new gv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ y(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      O(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ro, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Zt() {
  const e = Yo(Br);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Br = /* @__PURE__ */ Symbol();
function xl(e) {
  const t = mv(e);
  function n(P) {
    t.nodeTypes = {
      ..._l,
      ...P
    };
  }
  function r(P) {
    t.edgeTypes = {
      ...bl,
      ...P
    };
  }
  function o(P) {
    t.edges = lg(P, t.edges);
  }
  const i = (P, x = !1) => {
    t.nodes = t.nodes.map((N) => {
      if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
        const S = t.nodeLookup.get(N.id);
        S && (t.connection = {
          ...t.connection,
          from: sn(S, t.connection.fromHandle, U.Left, !0)
        });
      }
      const m = P.get(N.id);
      return m ? { ...N, position: m.position, dragging: x } : N;
    });
  };
  function s(P) {
    const { changes: x, updatedInternals: N } = xg(P, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!N)
      return;
    pg(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const m = /* @__PURE__ */ new Map();
    for (const S of x) {
      const E = t.nodeLookup.get(S.id)?.internals.userNode;
      if (!E)
        continue;
      const D = { ...E };
      switch (S.type) {
        case "dimensions": {
          const R = { ...D.measured, ...S.dimensions };
          S.setAttributes && (D.width = S.dimensions?.width ?? D.width, D.height = S.dimensions?.height ?? D.height), D.measured = R;
          break;
        }
        case "position":
          D.position = S.position ?? D.position;
          break;
      }
      m.set(S.id, D);
    }
    t.nodes = t.nodes.map((S) => m.get(S.id) ?? S);
  }
  function a(P) {
    const x = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = P, t.fitViewResolver = x, t.nodes = [...t.nodes], x.promise;
  }
  async function l(P, x, N) {
    const m = typeof N?.zoom < "u" ? N.zoom : t.maxZoom, S = t.panZoom;
    return S ? (await S.setViewport({
      x: t.width / 2 - P * m,
      y: t.height / 2 - x * m,
      zoom: m
    }, { duration: N?.duration, ease: N?.ease, interpolate: N?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(P, x) {
    const N = t.panZoom;
    return N ? N.scaleBy(P, x) : Promise.resolve(!1);
  }
  function d(P) {
    return c(1.2, P);
  }
  function h(P) {
    return c(1 / 1.2, P);
  }
  function f(P) {
    const x = t.panZoom;
    x && (x.setScaleExtent([P, t.maxZoom]), t.minZoom = P);
  }
  function g(P) {
    const x = t.panZoom;
    x && (x.setScaleExtent([t.minZoom, P]), t.maxZoom = P);
  }
  function v(P) {
    const x = t.panZoom;
    x && (x.setTranslateExtent(P), t.translateExtent = P);
  }
  function w(P, x = null) {
    let N = !1;
    const m = P.map((S) => (x ? x.has(S.id) : !0) && S.selected ? (N = !0, { ...S, selected: !1 }) : S);
    return [N, m];
  }
  function p(P) {
    const x = P?.nodes ? new Set(P.nodes.map((R) => R.id)) : null, [N, m] = w(t.nodes, x);
    N && (t.nodes = m);
    const S = P?.edges ? new Set(P.edges.map((R) => R.id)) : null, [E, D] = w(t.edges, S);
    E && (t.edges = D);
  }
  function _(P) {
    const x = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((N) => {
      const m = P.includes(N.id), S = x && N.selected || m;
      return !!N.selected !== S ? { ...N, selected: S } : N;
    }), x || p({ nodes: [] });
  }
  function k(P) {
    const x = t.multiselectionKeyPressed;
    t.edges = t.edges.map((N) => {
      const m = P.includes(N.id), S = x && N.selected || m;
      return !!N.selected !== S ? { ...N, selected: S } : N;
    }), x || p({ edges: [] });
  }
  function C(P, x, N) {
    const m = t.nodeLookup.get(P);
    if (!m) {
      console.warn("012", qn.error012(P));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, m.selected ? (x || m.selected && t.multiselectionKeyPressed) && (p({ nodes: [m], edges: [] }), requestAnimationFrame(() => N?.blur())) : _([P]);
  }
  function b(P) {
    const x = t.edgeLookup.get(P);
    if (!x) {
      console.warn("012", qn.error012(P));
      return;
    }
    (x.selectable || t.elementsSelectable && typeof x.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, x.selected ? x.selected && t.multiselectionKeyPressed && p({ nodes: [], edges: [x] }) : k([P]));
  }
  function A(P, x) {
    const { nodeExtent: N, snapGrid: m, nodeOrigin: S, nodeLookup: E, nodesDraggable: D, onerror: R } = t, z = /* @__PURE__ */ new Map(), L = m?.[0] ?? 5, F = m?.[1] ?? 5, X = P.x * L * x, Z = P.y * F * x;
    for (const K of E.values()) {
      if (!(K.selected && (K.draggable || D && typeof K.draggable > "u")))
        continue;
      let W = {
        x: K.internals.positionAbsolute.x + X,
        y: K.internals.positionAbsolute.y + Z
      };
      m && (W = lr(W, m));
      const { position: G, positionAbsolute: Q } = Ja({
        nodeId: K.id,
        nextPosition: W,
        nodeLookup: E,
        nodeExtent: N,
        nodeOrigin: S,
        onError: R
      });
      K.position = G, K.internals.positionAbsolute = Q, z.set(K.id, K);
    }
    i(z);
  }
  function T(P) {
    return Eg({
      delta: P,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const I = (P) => {
    t._connection = { ...P };
  };
  function M() {
    t._connection = Ro;
  }
  function B() {
    t.resetStoreValues(), p();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: h,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: v,
    unselectNodesAndEdges: p,
    addSelectedNodes: _,
    addSelectedEdges: k,
    handleNodeSelection: C,
    handleEdgeSelection: b,
    moveSelectedNodes: A,
    panBy: T,
    updateConnection: I,
    cancelConnection: M,
    reset: B
  });
}
function yv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: h } = t, f = Fg({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), g = f.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), c(f), f.update(t), {
    update(v) {
      f.update(v);
    }
  };
}
var wv = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function _v(e, t) {
  ee(t, !0);
  let n = H(t, "store", 15), r = /* @__PURE__ */ y(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ y(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  qe(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = wv(), l = q(a);
  Re(l, () => t.children), Ne(a, (c, d) => yv?.(c, d), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: i,
    onDraggingChange: (c) => {
      n(n().dragging = c, !0);
    },
    setPanZoomInstance: (c) => {
      n(n().panZoom = c, !0);
    },
    onPanZoomStart: t.onmovestart,
    onPanZoom: t.onmove,
    onPanZoomEnd: t.onmoveend,
    zoomOnScroll: t.zoomOnScroll,
    zoomOnDoubleClick: t.zoomOnDoubleClick,
    zoomOnPinch: t.zoomOnPinch,
    panOnScroll: u(o),
    panOnDrag: u(r),
    panOnScrollSpeed: t.panOnScrollSpeed,
    panOnScrollMode: t.panOnScrollMode,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof t.preventScrolling == "boolean" ? t.preventScrolling : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: t.paneClickDistance,
    selectionOnDrag: t.selectionOnDrag,
    onTransformChange: (c) => {
      n(n().viewport = { x: c[0], y: c[1], zoom: c[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), V(e, a), te();
}
function ps(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function ms(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function ys(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var bv = /* @__PURE__ */ re("<div><!></div>");
function xv(e, t) {
  ee(t, !0);
  let n = H(t, "store", 15), r = H(t, "panOnDrag", 3, !0), o = H(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ y(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ y(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && u(c) !== !0), h = /* @__PURE__ */ y(() => n().elementsSelectable && (u(d) || n().selectionRectMode === "user")), f = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const B = M.target === i, Y = !B && !!M.target.closest(".nokey"), P = t.selectionOnDrag && B || n().selectionKeyPressed;
    if (Y || !u(d) || !P || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), f = !1;
    const { x, y: N } = $e(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: x, startY: N, x, y: N }, !0), B || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!u(d) || !s || !n().selectionRect)
      return;
    const B = $e(M, s), { startX: Y = 0, startY: P = 0 } = n().selectionRect;
    if (!f) {
      const E = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(B.x - Y, B.y - P) <= E)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    f = !0;
    const x = {
      ...n().selectionRect,
      x: B.x < Y ? B.x : Y,
      y: B.y < P ? B.y : P,
      width: Math.abs(B.x - Y),
      height: Math.abs(B.y - P)
    }, N = a, m = l;
    a = new Set(di(
      n().nodeLookup,
      x,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Or.Partial,
      !0
    ).map((E) => E.id));
    const S = n().defaultEdgeOptions.selectable ?? !0;
    l = /* @__PURE__ */ new Set();
    for (const E of a) {
      const D = n().connectionLookup.get(E);
      if (D)
        for (const { edgeId: R } of D.values()) {
          const z = n().edgeLookup.get(R);
          z && (z.selectable ?? S) && l.add(R);
        }
    }
    ys(N, a) || n(n().nodes = n().nodes.map(ms(a)), !0), ys(m, l) || n(n().edges = n().edges.map(ms(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = x, !0);
  }
  function w(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !f && M.target === i && k?.(M), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(M));
  }
  const p = (M) => {
    if (Array.isArray(u(c)) && u(c).includes(2)) {
      M.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: M });
  }, _ = (M) => {
    f && (M.stopPropagation(), f = !1);
  };
  function k(M) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: M }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var C = bv();
  let b;
  var A = /* @__PURE__ */ y(() => u(h) ? void 0 : ps(k, i));
  C.__click = function(...M) {
    u(A)?.apply(this, M);
  }, C.__pointermove = function(...M) {
    (u(h) ? v : void 0)?.apply(this, M);
  }, C.__pointerup = function(...M) {
    (u(h) ? w : void 0)?.apply(this, M);
  };
  var T = /* @__PURE__ */ y(() => ps(p, i));
  C.__contextmenu = function(...M) {
    u(T)?.apply(this, M);
  };
  var I = q(C);
  Re(I, () => t.children), rr(C, (M) => i = M, () => i), ce((M) => b = ze(C, 1, "svelte-flow__pane svelte-flow__container", null, b, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(d)
    })
  ]), $t(
    "pointerdown",
    C,
    function(...M) {
      (u(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), $t(
    "click",
    C,
    function(...M) {
      (u(h) ? _ : void 0)?.apply(this, M);
    },
    !0
  ), V(e, C), te();
}
$o(["click", "pointermove", "pointerup", "contextmenu"]);
var Ev = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Sv(e, t) {
  ee(t, !0);
  var n = Ev();
  let r;
  var o = q(n);
  Re(o, () => t.children), ce(() => r = Ke(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), V(e, n), te();
}
function El(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Ng({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: c, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: c || [0, 0],
        snapToGrid: !!c,
        nodeOrigin: n.nodeOrigin,
        multiSelectionActive: n.multiselectionKeyPressed,
        domNode: n.domNode,
        transform: [d.x, d.y, d.zoom],
        autoPanOnNodeDrag: n.autoPanOnNodeDrag,
        nodesDraggable: n.nodesDraggable,
        selectNodesOnDrag: n.selectNodesOnDrag,
        nodeDragThreshold: n.nodeDragThreshold,
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        onSelectionDrag: n.onselectiondrag,
        onSelectionDragStart: n.onselectiondragstart,
        onSelectionDragStop: n.onselectiondragstop,
        panBy: n.panBy
      };
    }
  });
  function l(c, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: c,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(e, t), {
    update(c) {
      l(e, c);
    },
    destroy() {
      a.destroy();
    }
  };
}
var kv = /* @__PURE__ */ re('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), Cv = /* @__PURE__ */ re('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function Nv(e, t) {
  ee(t, !0);
  var n = Cv(), r = ae(n), o = q(r), i = $(r, 2), s = q(i), a = $(i, 2);
  {
    var l = (c) => {
      var d = kv(), h = q(d);
      ce(() => {
        j(d, "id", `${Pv}-${t.store.flowId}`), Me(h, t.store.ariaLiveMessage);
      }), V(c, d);
    };
    ue(a, (c) => {
      t.store.disableKeyboardA11y || c(l);
    });
  }
  ce(() => {
    j(r, "id", `${Sl}-${t.store.flowId}`), Me(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), j(i, "id", `${kl}-${t.store.flowId}`), Me(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, n), te();
}
const Sl = "svelte-flow__node-desc", kl = "svelte-flow__edge-desc", Pv = "svelte-flow__aria-live";
var Mv = /* @__PURE__ */ re("<div><!></div>");
function Av(e, t) {
  ee(t, !0);
  let n = H(t, "store", 15), r = /* @__PURE__ */ y(() => Ce(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ y(() => Ce(t.node.selected, !1)), i = /* @__PURE__ */ y(() => t.node.draggable), s = /* @__PURE__ */ y(() => t.node.selectable), a = /* @__PURE__ */ y(() => Ce(t.node.deletable, !0)), l = /* @__PURE__ */ y(() => t.node.connectable), c = /* @__PURE__ */ y(() => t.node.focusable), d = /* @__PURE__ */ y(() => Ce(t.node.hidden, !1)), h = /* @__PURE__ */ y(() => Ce(t.node.dragging, !1)), f = /* @__PURE__ */ y(() => Ce(t.node.style, "")), g = /* @__PURE__ */ y(() => t.node.class), v = /* @__PURE__ */ y(() => Ce(t.node.type, "default")), w = /* @__PURE__ */ y(() => t.node.parentId), p = /* @__PURE__ */ y(() => t.node.sourcePosition), _ = /* @__PURE__ */ y(() => t.node.targetPosition), k = /* @__PURE__ */ y(() => Ce(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ y(() => Ce(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ y(() => t.node.initialWidth), A = /* @__PURE__ */ y(() => t.node.initialHeight), T = /* @__PURE__ */ y(() => t.node.width), I = /* @__PURE__ */ y(() => t.node.height), M = /* @__PURE__ */ y(() => t.node.dragHandle), B = /* @__PURE__ */ y(() => Ce(t.node.internals.z, 0)), Y = /* @__PURE__ */ y(() => t.node.internals.positionAbsolute.x), P = /* @__PURE__ */ y(() => t.node.internals.positionAbsolute.y), x = /* @__PURE__ */ y(() => t.node.internals.userNode), { id: N } = t.node, m = /* @__PURE__ */ y(() => u(i) ?? n().nodesDraggable), S = /* @__PURE__ */ y(() => u(s) ?? n().elementsSelectable), E = /* @__PURE__ */ y(() => u(l) ?? n().nodesConnectable), D = /* @__PURE__ */ y(() => tl(t.node)), R = /* @__PURE__ */ y(() => !!t.node.internals.handleBounds), z = /* @__PURE__ */ y(() => u(D) && u(R)), L = /* @__PURE__ */ y(() => u(c) ?? n().nodesFocusable);
  function F(de) {
    return n().parentLookup.has(de);
  }
  let X = /* @__PURE__ */ y(() => F(N)), Z = /* @__PURE__ */ se(null), K = null, J = u(v), W = u(p), G = u(_), Q = /* @__PURE__ */ y(() => n().nodeTypes[u(v)] ?? yl), fe = /* @__PURE__ */ y(() => n().ariaLabelConfig), be = {
    get value() {
      return u(E);
    }
  };
  Yg(N), Xg(be);
  let ne = /* @__PURE__ */ y(() => {
    const de = u(k) === void 0 ? u(T) ?? u(b) : u(T), we = u(C) === void 0 ? u(I) ?? u(A) : u(I);
    if (!(de === void 0 && we === void 0 && u(f) === void 0))
      return `${u(f)};${de ? `width:${dt(de)};` : ""}${we ? `height:${dt(we)};` : ""}`;
  });
  qe(() => {
    (u(v) !== J || u(p) !== W || u(_) !== G) && u(Z) !== null && requestAnimationFrame(() => {
      u(Z) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[N, { id: N, nodeElement: u(Z), force: !0 }]]));
    }), J = u(v), W = u(p), G = u(_);
  }), qe(() => {
    t.resizeObserver && (!u(z) || u(Z) !== K) && (K && t.resizeObserver.unobserve(K), u(Z) && t.resizeObserver.observe(u(Z)), K = u(Z));
  }), Gr(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function pe(de) {
    u(S) && (!n().selectNodesOnDrag || !u(m) || n().nodeDragThreshold > 0) && n().handleNodeSelection(N), t.onnodeclick?.({ node: u(x), event: de });
  }
  function oe(de) {
    if (!(ol(de) || n().disableKeyboardA11y))
      if (Ua.includes(de.key) && u(S)) {
        const we = de.key === "Escape";
        n().handleNodeSelection(N, we, u(Z));
      } else u(m) && t.node.selected && Object.prototype.hasOwnProperty.call(Vr, de.key) && (de.preventDefault(), n(
        n().ariaLiveMessage = u(fe)["node.a11yDescription.ariaLiveMessage"]({
          direction: de.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Vr[de.key], de.shiftKey ? 4 : 1));
  }
  const Ae = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(Z)?.matches(":focus-visible"))
      return;
    const { width: de, height: we, viewport: Ue } = n();
    di(/* @__PURE__ */ new Map([[N, t.node]]), { x: 0, y: 0, width: de, height: we }, [Ue.x, Ue.y, Ue.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: Ue.zoom });
  };
  var Ct = ye(), Nt = ae(Ct);
  {
    var ht = (de) => {
      var we = Mv();
      Ft(we, () => ({
        "data-id": N,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(v)}`,
          u(g)
        ],
        style: u(ne),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (ge) => t.onnodepointerenter({ node: u(x), event: ge }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ge) => t.onnodepointerleave({ node: u(x), event: ge }) : void 0,
        onpointermove: t.onnodepointermove ? (ge) => t.onnodepointermove({ node: u(x), event: ge }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ge) => t.onnodecontextmenu({ node: u(x), event: ge }) : void 0,
        onkeydown: u(L) ? oe : void 0,
        onfocus: u(L) ? Ae : void 0,
        tabIndex: u(L) ? 0 : void 0,
        role: t.node.ariaRole ?? (u(L) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Sl}-${n().flowId}`,
        ...t.node.domAttributes,
        [Mt]: {
          dragging: u(h),
          selected: u(o),
          draggable: u(m),
          connectable: u(E),
          selectable: u(S),
          nopan: u(m),
          parent: u(X)
        },
        [pt]: {
          "z-index": u(B),
          transform: `translate(${u(Y) ?? ""}px, ${u(P) ?? ""}px)`,
          visibility: u(D) ? "visible" : "hidden"
        }
      }));
      var Ue = q(we);
      qr(Ue, () => u(Q), (ge, un) => {
        un(ge, {
          get data() {
            return u(r);
          },
          get id() {
            return N;
          },
          get selected() {
            return u(o);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(a);
          },
          get sourcePosition() {
            return u(p);
          },
          get targetPosition() {
            return u(_);
          },
          get zIndex() {
            return u(B);
          },
          get dragging() {
            return u(h);
          },
          get draggable() {
            return u(m);
          },
          get dragHandle() {
            return u(M);
          },
          get parentId() {
            return u(w);
          },
          get type() {
            return u(v);
          },
          get isConnectable() {
            return u(E);
          },
          get positionAbsoluteX() {
            return u(Y);
          },
          get positionAbsoluteY() {
            return u(P);
          },
          get width() {
            return u(T);
          },
          get height() {
            return u(I);
          }
        });
      }), Ne(we, (ge, un) => El?.(ge, un), () => ({
        nodeId: N,
        isSelectable: u(S),
        disabled: !u(m),
        handleSelector: u(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ge, un, Mn, An) => {
          t.onnodedrag?.({ event: ge, targetNode: Mn, nodes: An });
        },
        onDragStart: (ge, un, Mn, An) => {
          t.onnodedragstart?.({ event: ge, targetNode: Mn, nodes: An });
        },
        onDragStop: (ge, un, Mn, An) => {
          t.onnodedragstop?.({ event: ge, targetNode: Mn, nodes: An });
        },
        store: n()
      })), rr(we, (ge) => O(Z, ge), () => u(Z)), V(de, we);
    };
    ue(Nt, (de) => {
      u(d) || de(ht);
    });
  }
  V(e, Ct), te();
}
var Tv = /* @__PURE__ */ re('<div class="svelte-flow__nodes"></div>');
function Dv(e, t) {
  ee(t, !0);
  let n = H(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  Gr(() => {
    r?.disconnect();
  });
  var o = Tv();
  tn(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    Av(i, {
      get node() {
        return u(s);
      },
      get resizeObserver() {
        return r;
      },
      get nodeClickDistance() {
        return t.nodeClickDistance;
      },
      get onnodeclick() {
        return t.onnodeclick;
      },
      get onnodepointerenter() {
        return t.onnodepointerenter;
      },
      get onnodepointermove() {
        return t.onnodepointermove;
      },
      get onnodepointerleave() {
        return t.onnodepointerleave;
      },
      get onnodedrag() {
        return t.onnodedrag;
      },
      get onnodedragstart() {
        return t.onnodedragstart;
      },
      get onnodedragstop() {
        return t.onnodedragstop;
      },
      get onnodecontextmenu() {
        return t.onnodecontextmenu;
      },
      get store() {
        return n();
      },
      set store(a) {
        n(a);
      }
    });
  }), V(e, o), te();
}
var Iv = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function zv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => t.edge.id), r = /* @__PURE__ */ y(() => t.edge.source), o = /* @__PURE__ */ y(() => t.edge.target), i = /* @__PURE__ */ y(() => t.edge.sourceX), s = /* @__PURE__ */ y(() => t.edge.sourceY), a = /* @__PURE__ */ y(() => t.edge.targetX), l = /* @__PURE__ */ y(() => t.edge.targetY), c = /* @__PURE__ */ y(() => t.edge.sourcePosition), d = /* @__PURE__ */ y(() => t.edge.targetPosition), h = /* @__PURE__ */ y(() => Ce(t.edge.animated, !1)), f = /* @__PURE__ */ y(() => Ce(t.edge.selected, !1)), g = /* @__PURE__ */ y(() => t.edge.label), v = /* @__PURE__ */ y(() => t.edge.labelStyle), w = /* @__PURE__ */ y(() => Ce(t.edge.data, () => ({}), !0)), p = /* @__PURE__ */ y(() => t.edge.style), _ = /* @__PURE__ */ y(() => t.edge.interactionWidth), k = /* @__PURE__ */ y(() => Ce(t.edge.type, "default")), C = /* @__PURE__ */ y(() => t.edge.sourceHandle), b = /* @__PURE__ */ y(() => t.edge.targetHandle), A = /* @__PURE__ */ y(() => t.edge.markerStart), T = /* @__PURE__ */ y(() => t.edge.markerEnd), I = /* @__PURE__ */ y(() => t.edge.selectable), M = /* @__PURE__ */ y(() => t.edge.focusable), B = /* @__PURE__ */ y(() => Ce(t.edge.deletable, !0)), Y = /* @__PURE__ */ y(() => t.edge.hidden), P = /* @__PURE__ */ y(() => t.edge.zIndex), x = /* @__PURE__ */ y(() => t.edge.class), N = /* @__PURE__ */ y(() => t.edge.ariaLabel);
  qg(u(n));
  let m = null, S = /* @__PURE__ */ y(() => u(I) ?? t.store.elementsSelectable), E = /* @__PURE__ */ y(() => u(M) ?? t.store.edgesFocusable), D = /* @__PURE__ */ y(() => t.store.edgeTypes[u(k)] ?? wl), R = /* @__PURE__ */ y(() => u(A) ? `url('#${Lo(u(A), t.store.flowId)}')` : void 0), z = /* @__PURE__ */ y(() => u(T) ? `url('#${Lo(u(T), t.store.flowId)}')` : void 0);
  function L(W) {
    const G = t.store.edgeLookup.get(u(n));
    G && (u(S) && t.store.handleEdgeSelection(u(n)), t.onedgeclick?.({ event: W, edge: G }));
  }
  function F(W, G) {
    const Q = t.store.edgeLookup.get(u(n));
    Q && G({ event: W, edge: Q });
  }
  function X(W) {
    if (!t.store.disableKeyboardA11y && Ua.includes(W.key) && u(S)) {
      const { unselectNodesAndEdges: G, addSelectedEdges: Q } = t.store;
      W.key === "Escape" ? (m?.blur(), G({ edges: [t.edge] })) : Q([u(n)]);
    }
  }
  var Z = ye(), K = ae(Z);
  {
    var J = (W) => {
      var G = Iv();
      let Q;
      var fe = q(G);
      Ft(fe, () => ({
        class: ["svelte-flow__edge", u(x)],
        "data-id": u(n),
        onclick: L,
        oncontextmenu: t.onedgecontextmenu ? (ne) => {
          F(ne, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (ne) => {
          F(ne, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (ne) => {
          F(ne, t.onedgepointerleave);
        } : void 0,
        "aria-label": u(N) === null ? void 0 : u(N) ? u(N) : `Edge from ${u(r)} to ${u(o)}`,
        "aria-describedby": u(E) ? `${kl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (u(E) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(E) ? X : void 0,
        tabindex: u(E) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Mt]: {
          animated: u(h),
          selected: u(f),
          selectable: u(S)
        }
      }));
      var be = q(fe);
      qr(be, () => u(D), (ne, pe) => {
        pe(ne, {
          get id() {
            return u(n);
          },
          get source() {
            return u(r);
          },
          get target() {
            return u(o);
          },
          get sourceX() {
            return u(i);
          },
          get sourceY() {
            return u(s);
          },
          get targetX() {
            return u(a);
          },
          get targetY() {
            return u(l);
          },
          get sourcePosition() {
            return u(c);
          },
          get targetPosition() {
            return u(d);
          },
          get animated() {
            return u(h);
          },
          get selected() {
            return u(f);
          },
          get label() {
            return u(g);
          },
          get labelStyle() {
            return u(v);
          },
          get data() {
            return u(w);
          },
          get style() {
            return u(p);
          },
          get interactionWidth() {
            return u(_);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(B);
          },
          get type() {
            return u(k);
          },
          get sourceHandleId() {
            return u(C);
          },
          get targetHandleId() {
            return u(b);
          },
          get markerStart() {
            return u(R);
          },
          get markerEnd() {
            return u(z);
          }
        });
      }), rr(fe, (ne) => m = ne, () => m), ce(() => Q = Ke(G, "", Q, { "z-index": u(P) })), V(W, G);
    };
    ue(K, (W) => {
      u(Y) || W(J);
    });
  }
  V(e, Z), te();
}
rc();
var Ov = /* @__PURE__ */ me("<defs></defs>");
function Rv(e, t) {
  ee(t, !1);
  const n = Zt();
  eu();
  var r = Ov();
  tn(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Bv(o, At(() => u(i)));
  }), V(e, r), te();
}
var Hv = /* @__PURE__ */ me('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Lv = /* @__PURE__ */ me('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Vv = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Bv(e, t) {
  ee(t, !0);
  let n = H(t, "width", 3, 12.5), r = H(t, "height", 3, 12.5), o = H(t, "markerUnits", 3, "strokeWidth"), i = H(t, "orient", 3, "auto-start-reverse"), s = H(t, "color", 3, "none");
  var a = Vv(), l = q(a);
  {
    var c = (h) => {
      var f = Hv();
      let g;
      ce(() => {
        j(f, "stroke-width", t.strokeWidth), g = Ke(f, "", g, { stroke: s() });
      }), V(h, f);
    }, d = (h) => {
      var f = ye(), g = ae(f);
      {
        var v = (w) => {
          var p = Lv();
          let _;
          ce(() => {
            j(p, "stroke-width", t.strokeWidth), _ = Ke(p, "", _, { stroke: s(), fill: s() });
          }), V(w, p);
        };
        ue(
          g,
          (w) => {
            t.type === Rr.ArrowClosed && w(v);
          },
          !0
        );
      }
      V(h, f);
    };
    ue(l, (h) => {
      t.type === Rr.Arrow ? h(c) : h(d, !1);
    });
  }
  ce(() => {
    j(a, "id", t.id), j(a, "markerWidth", `${n()}`), j(a, "markerHeight", `${r()}`), j(a, "markerUnits", o()), j(a, "orient", i());
  }), V(e, a), te();
}
var Fv = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Kv(e, t) {
  ee(t, !0);
  let n = H(t, "store", 15);
  var r = Fv(), o = q(r), i = q(o);
  Rv(i, {});
  var s = $(o, 2);
  tn(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    zv(a, {
      get edge() {
        return u(l);
      },
      get onedgeclick() {
        return t.onedgeclick;
      },
      get onedgecontextmenu() {
        return t.onedgecontextmenu;
      },
      get onedgepointerenter() {
        return t.onedgepointerenter;
      },
      get onedgepointerleave() {
        return t.onedgepointerleave;
      },
      get store() {
        return n();
      },
      set store(c) {
        n(c);
      }
    });
  }), V(e, r), te();
}
var Yv = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function Cl(e, t) {
  ee(t, !0);
  let n = H(t, "x", 3, 0), r = H(t, "y", 3, 0), o = H(t, "width", 3, 0), i = H(t, "height", 3, 0), s = H(t, "isVisible", 3, !0);
  var a = ye(), l = ae(a);
  {
    var c = (d) => {
      var h = Yv();
      let f;
      ce((g) => f = Ke(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : dt(o()),
          height: typeof i() == "string" ? i() : dt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, h);
    };
    ue(l, (d) => {
      s() && d(c);
    });
  }
  V(e, a), te();
}
var Zv = /* @__PURE__ */ re("<div><!></div>");
function Xv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ se(void 0);
  qe(() => {
    t.store.disableKeyboardA11y || u(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ y(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = ar(t.store.nodeLookup, { filter: (h) => !!h.selected });
      if (d.width > 0 && d.height > 0)
        return d;
    }
    return null;
  });
  function o(d) {
    const h = t.store.nodes.filter((f) => f.selected);
    t.onselectioncontextmenu?.({ nodes: h, event: d });
  }
  function i(d) {
    const h = t.store.nodes.filter((f) => f.selected);
    t.onselectionclick?.({ nodes: h, event: d });
  }
  function s(d) {
    Object.prototype.hasOwnProperty.call(Vr, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(Vr[d.key], d.shiftKey ? 4 : 1));
  }
  var a = ye(), l = ae(a);
  {
    var c = (d) => {
      var h = Zv();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = q(h);
      Cl(g, { width: "100%", height: "100%", x: 0, y: 0 }), Ne(h, (v, w) => El?.(v, w), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, w, p, _) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: _ });
        },
        onDragStart: (v, w, p, _) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: _ });
        },
        onDragStop: (v, w, p, _) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: _ });
        }
      })), rr(h, (v) => O(n, v), () => u(n)), ce(
        (v) => {
          ze(h, 1, Bt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), j(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), j(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Ke(h, "", f, v);
        },
        [
          () => ({
            width: dt(u(r).width),
            height: dt(u(r).height),
            transform: `translate(${u(r).x ?? ""}px, ${u(r).y ?? ""}px)`
          })
        ]
      ), V(d, h);
    };
    ue(l, (d) => {
      t.store.selectionRectMode === "nodes" && u(r) && wt(u(r).x) && wt(u(r).y) && d(c);
    });
  }
  V(e, a), te();
}
$o(["contextmenu", "click", "keydown"]);
function Wv(e) {
  switch (e) {
    case "ctrl":
      return 8;
    case "shift":
      return 4;
    case "alt":
      return 2;
    case "meta":
      return 1;
  }
}
function nt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: v, preventDefault: w, enabled: p } = h;
      if (p) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const k = Array.isArray(f) ? f : [f];
          let C = !1;
          for (const b of k)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (T, I) => T | Wv(I),
              0
            ) === c) {
              C = !0;
              break;
            }
          if (!C) continue;
        }
        w && a.preventDefault();
        const _ = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), v?.(_);
      }
    }
  }
  let s;
  return n && (s = Eo(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = Eo(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Nl() {
  const e = /* @__PURE__ */ y(Zt), t = (i) => {
    const s = gs(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? eg(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Cn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = Ve(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && gs(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = Ve(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && rv(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  const o = (i) => u(e).nodeLookup.get(i);
  return {
    zoomIn: u(e).zoomIn,
    zoomOut: u(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(e).nodes : ws(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : ws(u(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = u(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => u(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = u(e).viewport;
      return u(e).panZoom ? (await u(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Is(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = fi(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
      return await u(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    /**
     * Partial is defined as "the 2 nodes/areas are intersecting partially".
     * If a is contained in b or b is contained in a, they are both
     * considered fully intersecting.
     */
    getIntersectingNodes: (i, s = !0, a) => {
      const l = ns(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Cn(h), g = Gn(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = ns(i) ? i : t(i);
      if (!c)
        return !1;
      const d = Gn(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await jh({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = Ve(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = Ve(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return cr(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = Lr(i, [s, a, l]);
      return { x: h.x + c, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(e).nodes],
      edges: [...u(e).edges],
      viewport: { ...u(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = u(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const c = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? c : { ...d.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => Wh(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ws(e, t) {
  const n = [];
  for (const r of t) {
    const o = e.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function qv(e, t) {
  ee(t, !0);
  let n = H(t, "store", 15), r = H(t, "selectionKey", 3, "Shift"), o = H(t, "multiSelectionKey", 19, () => Un() ? "Meta" : "Control"), i = H(t, "deleteKey", 3, "Backspace"), s = H(t, "panActivationKey", 3, " "), a = H(t, "zoomActivationKey", 19, () => Un() ? "Meta" : "Control"), { deleteElements: l } = Nl();
  function c(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return c(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : c(w) ? w.key : w;
  }
  function f(w, p) {
    return (Array.isArray(w) ? w : [w]).map((k) => {
      const C = h(k);
      return {
        key: C,
        modifier: d(k),
        enabled: C !== null,
        callback: p
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const w = n().nodes.filter((_) => _.selected), p = n().edges.filter((_) => _.selected);
    l({ nodes: w, edges: p });
  }
  $t("blur", Te, g), $t("contextmenu", Te, g), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !ol(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Te, (w, p) => nt?.(w, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), te();
}
var Gv = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), Uv = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function jv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => {
    if (!t.store.connection.inProgress)
      return "";
    const s = {
      sourceX: t.store.connection.from.x,
      sourceY: t.store.connection.from.y,
      sourcePosition: t.store.connection.fromPosition,
      targetX: t.store.connection.to.x,
      targetY: t.store.connection.to.y,
      targetPosition: t.store.connection.toPosition
    };
    switch (t.type) {
      case Tt.Bezier: {
        const [a] = sl(s);
        return a;
      }
      case Tt.Straight: {
        const [a] = ll(s);
        return a;
      }
      case Tt.Step:
      case Tt.SmoothStep: {
        const [a] = hi({
          ...s,
          borderRadius: t.type === Tt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = ye(), o = ae(r);
  {
    var i = (s) => {
      var a = Uv(), l = q(a), c = q(l);
      {
        var d = (f) => {
          var g = ye(), v = ae(g);
          qr(v, () => t.LineComponent, (w, p) => {
            p(w, {});
          }), V(f, g);
        }, h = (f) => {
          var g = Gv();
          ce(() => {
            j(g, "d", u(n)), Ke(g, t.style);
          }), V(f, g);
        };
        ue(c, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ce(
        (f) => {
          j(a, "width", t.store.width), j(a, "height", t.store.height), Ke(a, t.containerStyle), ze(l, 0, f);
        },
        [
          () => Bt([
            "svelte-flow__connection",
            Zh(t.store.connection.isValid)
          ])
        ]
      ), V(s, a);
    };
    ue(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  V(e, r), te();
}
var Jv = /* @__PURE__ */ re("<div><!></div>");
function wi(e, t) {
  ee(t, !0);
  let n = H(t, "position", 3, "top-right"), r = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ y(() => `${n()}`.split("-"));
  var i = Jv();
  Ft(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...u(o)
    ]
  ]);
  var s = q(i);
  Re(s, () => t.children ?? Lt), V(e, i), te();
}
var Qv = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function $v(e, t) {
  ee(t, !0);
  let n = H(t, "position", 3, "bottom-right");
  var r = ye(), o = ae(r);
  {
    var i = (s) => {
      wi(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var c = Qv();
          V(a, c);
        },
        $$slots: { default: !0 }
      });
    };
    ue(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  V(e, r), te();
}
var e0 = /* @__PURE__ */ re("<div><!></div>");
function t0(e, t) {
  ee(t, !0);
  let n = H(t, "domNode", 15), r = H(t, "clientWidth", 15), o = H(t, "clientHeight", 15), i = /* @__PURE__ */ y(() => t.rest.class), s = /* @__PURE__ */ y(() => Mc(t.rest, [
    "id",
    "class",
    "nodeTypes",
    "edgeTypes",
    "colorMode",
    "isValidConnection",
    "onmove",
    "onmovestart",
    "onmoveend",
    "onflowerror",
    "ondelete",
    "onbeforedelete",
    "onbeforeconnect",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforereconnect",
    "onreconnect",
    "onreconnectstart",
    "onreconnectend",
    "onclickconnectstart",
    "onclickconnectend",
    "oninit",
    "onselectionchange",
    "onselectiondragstart",
    "onselectiondrag",
    "onselectiondragstop",
    "onselectionstart",
    "onselectionend",
    "clickConnect",
    "fitView",
    "fitViewOptions",
    "nodeOrigin",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "connectionRadius",
    "connectionMode",
    "selectionMode",
    "selectNodesOnDrag",
    "snapGrid",
    "defaultMarkerColor",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "colorModeSSR",
    "defaultEdgeOptions",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "elementsSelectable",
    "nodesFocusable",
    "edgesFocusable",
    "disableKeyboardA11y",
    "noDragClass",
    "noPanClass",
    "noWheelClass",
    "ariaLabelConfig",
    "autoPanSpeed",
    "panOnScrollSpeed",
    "zIndexMode"
  ]));
  function a(d) {
    d.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), t.rest.onscroll && t.rest.onscroll(d);
  }
  var l = e0();
  Ft(
    l,
    (d) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        u(i),
        t.colorMode
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: a,
      ...u(s),
      [pt]: d
    }),
    [
      () => ({
        width: dt(t.width),
        height: dt(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var c = q(l);
  Re(c, () => t.children ?? Lt), rr(l, (d) => n(d), () => n()), Ii(l, "clientHeight", o), Ii(l, "clientWidth", r), V(e, l), te();
}
var n0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), r0 = /* @__PURE__ */ re("<!> <!>", 1), o0 = /* @__PURE__ */ re("<!> <!> <!> <!> <!>", 1);
function i0(e, t) {
  ee(t, !0);
  let n = H(t, "paneClickDistance", 3, 1), r = H(t, "nodeClickDistance", 3, 1), o = H(t, "panOnScrollMode", 19, () => yn.Free), i = H(t, "preventScrolling", 3, !0), s = H(t, "zoomOnScroll", 3, !0), a = H(t, "zoomOnDoubleClick", 3, !0), l = H(t, "zoomOnPinch", 3, !0), c = H(t, "panOnScroll", 3, !1), d = H(t, "panOnScrollSpeed", 3, 0.5), h = H(t, "panOnDrag", 3, !0), f = H(t, "selectionOnDrag", 3, !1), g = H(t, "connectionLineType", 19, () => Tt.Bezier), v = H(t, "nodes", 31, () => it([])), w = H(t, "edges", 31, () => it([])), p = H(t, "viewport", 15, void 0), _ = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "width",
    "height",
    "proOptions",
    "selectionKey",
    "deleteKey",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "paneClickDistance",
    "nodeClickDistance",
    "onmovestart",
    "onmoveend",
    "onmove",
    "oninit",
    "onnodeclick",
    "onnodecontextmenu",
    "onnodedrag",
    "onnodedragstart",
    "onnodedragstop",
    "onnodepointerenter",
    "onnodepointermove",
    "onnodepointerleave",
    "onselectionclick",
    "onselectioncontextmenu",
    "onselectionstart",
    "onselectionend",
    "onedgeclick",
    "onedgecontextmenu",
    "onedgepointerenter",
    "onedgepointerleave",
    "onpaneclick",
    "onpanecontextmenu",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnScrollSpeed",
    "panOnDrag",
    "selectionOnDrag",
    "connectionLineComponent",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "connectionLineType",
    "attributionPosition",
    "children",
    "nodes",
    "edges",
    "viewport"
  ]), k = xl({
    props: _,
    width: t.width,
    height: t.height,
    get nodes() {
      return v();
    },
    set nodes(b) {
      v(b);
    },
    get edges() {
      return w();
    },
    set edges(b) {
      w(b);
    },
    get viewport() {
      return p();
    },
    set viewport(b) {
      p(b);
    }
  });
  const C = Yo(Br);
  C && C.setStore && C.setStore(k), Zo(Br, {
    provider: !1,
    getStore() {
      return k;
    }
  }), qe(() => {
    const b = { nodes: k.selectedNodes, edges: k.selectedEdges };
    Ve(() => t.onselectionchange)?.(b);
    for (const A of k.selectionChangeHandlers.values())
      A(b);
  }), Gr(() => {
    k.reset();
  }), t0(e, {
    get colorMode() {
      return k.colorMode;
    },
    get width() {
      return t.width;
    },
    get height() {
      return t.height;
    },
    get rest() {
      return _;
    },
    get domNode() {
      return k.domNode;
    },
    set domNode(b) {
      k.domNode = b;
    },
    get clientWidth() {
      return k.width;
    },
    set clientWidth(b) {
      k.width = b;
    },
    get clientHeight() {
      return k.height;
    },
    set clientHeight(b) {
      k.height = b;
    },
    children: (b, A) => {
      var T = o0(), I = ae(T);
      qv(I, {
        get selectionKey() {
          return t.selectionKey;
        },
        get deleteKey() {
          return t.deleteKey;
        },
        get panActivationKey() {
          return t.panActivationKey;
        },
        get multiSelectionKey() {
          return t.multiSelectionKey;
        },
        get zoomActivationKey() {
          return t.zoomActivationKey;
        },
        get store() {
          return k;
        },
        set store(x) {
          k = x;
        }
      });
      var M = $(I, 2);
      _v(M, {
        get panOnScrollMode() {
          return o();
        },
        get preventScrolling() {
          return i();
        },
        get zoomOnScroll() {
          return s();
        },
        get zoomOnDoubleClick() {
          return a();
        },
        get zoomOnPinch() {
          return l();
        },
        get panOnScroll() {
          return c();
        },
        get panOnScrollSpeed() {
          return d();
        },
        get panOnDrag() {
          return h();
        },
        get paneClickDistance() {
          return n();
        },
        get selectionOnDrag() {
          return f();
        },
        get onmovestart() {
          return t.onmovestart;
        },
        get onmove() {
          return t.onmove;
        },
        get onmoveend() {
          return t.onmoveend;
        },
        get oninit() {
          return t.oninit;
        },
        get store() {
          return k;
        },
        set store(x) {
          k = x;
        },
        children: (x, N) => {
          xv(x, {
            get onpaneclick() {
              return t.onpaneclick;
            },
            get onpanecontextmenu() {
              return t.onpanecontextmenu;
            },
            get onselectionstart() {
              return t.onselectionstart;
            },
            get onselectionend() {
              return t.onselectionend;
            },
            get panOnDrag() {
              return h();
            },
            get paneClickDistance() {
              return n();
            },
            get selectionOnDrag() {
              return f();
            },
            get store() {
              return k;
            },
            set store(m) {
              k = m;
            },
            children: (m, S) => {
              var E = r0(), D = ae(E);
              Sv(D, {
                get store() {
                  return k;
                },
                set store(z) {
                  k = z;
                },
                children: (z, L) => {
                  var F = n0(), X = $(ae(F), 2);
                  Kv(X, {
                    get onedgeclick() {
                      return t.onedgeclick;
                    },
                    get onedgecontextmenu() {
                      return t.onedgecontextmenu;
                    },
                    get onedgepointerenter() {
                      return t.onedgepointerenter;
                    },
                    get onedgepointerleave() {
                      return t.onedgepointerleave;
                    },
                    get store() {
                      return k;
                    },
                    set store(W) {
                      k = W;
                    }
                  });
                  var Z = $(X, 4);
                  jv(Z, {
                    get type() {
                      return g();
                    },
                    get LineComponent() {
                      return t.connectionLineComponent;
                    },
                    get containerStyle() {
                      return t.connectionLineContainerStyle;
                    },
                    get style() {
                      return t.connectionLineStyle;
                    },
                    get store() {
                      return k;
                    },
                    set store(W) {
                      k = W;
                    }
                  });
                  var K = $(Z, 2);
                  Dv(K, {
                    get nodeClickDistance() {
                      return r();
                    },
                    get onnodeclick() {
                      return t.onnodeclick;
                    },
                    get onnodecontextmenu() {
                      return t.onnodecontextmenu;
                    },
                    get onnodepointerenter() {
                      return t.onnodepointerenter;
                    },
                    get onnodepointermove() {
                      return t.onnodepointermove;
                    },
                    get onnodepointerleave() {
                      return t.onnodepointerleave;
                    },
                    get onnodedrag() {
                      return t.onnodedrag;
                    },
                    get onnodedragstart() {
                      return t.onnodedragstart;
                    },
                    get onnodedragstop() {
                      return t.onnodedragstop;
                    },
                    get store() {
                      return k;
                    },
                    set store(W) {
                      k = W;
                    }
                  });
                  var J = $(K, 2);
                  Xv(J, {
                    get onselectionclick() {
                      return t.onselectionclick;
                    },
                    get onselectioncontextmenu() {
                      return t.onselectioncontextmenu;
                    },
                    get onnodedrag() {
                      return t.onnodedrag;
                    },
                    get onnodedragstart() {
                      return t.onnodedragstart;
                    },
                    get onnodedragstop() {
                      return t.onnodedragstop;
                    },
                    get store() {
                      return k;
                    },
                    set store(W) {
                      k = W;
                    }
                  }), V(z, F);
                },
                $$slots: { default: !0 }
              });
              var R = $(D, 2);
              {
                let z = /* @__PURE__ */ y(() => !!(k.selectionRect && k.selectionRectMode === "user")), L = /* @__PURE__ */ y(() => k.selectionRect?.width), F = /* @__PURE__ */ y(() => k.selectionRect?.height), X = /* @__PURE__ */ y(() => k.selectionRect?.x), Z = /* @__PURE__ */ y(() => k.selectionRect?.y);
                Cl(R, {
                  get isVisible() {
                    return u(z);
                  },
                  get width() {
                    return u(L);
                  },
                  get height() {
                    return u(F);
                  },
                  get x() {
                    return u(X);
                  },
                  get y() {
                    return u(Z);
                  }
                });
              }
              V(m, E);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var B = $(M, 2);
      $v(B, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Y = $(B, 2);
      Nv(Y, {
        get store() {
          return k;
        }
      });
      var P = $(Y, 2);
      Re(P, () => t.children ?? Lt), V(b, T);
    },
    $$slots: { default: !0 }
  }), te();
}
function s0(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ se(xl({ props: {}, nodes: [], edges: [] }));
  Zo(Br, {
    provider: !0,
    getStore() {
      return u(n);
    },
    setStore: (i) => {
      O(n, i);
    }
  }), Gr(() => {
    u(n).reset();
  });
  var r = ye(), o = ae(r);
  Re(o, () => t.children ?? Lt), V(e, r), te();
}
var a0 = /* @__PURE__ */ re("<button><!></button>");
function yr(e, t) {
  let n = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor",
    "onclick",
    "children"
  ]);
  var r = a0();
  Ft(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [pt]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = q(r);
  Re(o, () => t.children ?? Lt), V(e, r);
}
var l0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function c0(e) {
  var t = l0();
  V(e, t);
}
var u0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function d0(e) {
  var t = u0();
  V(e, t);
}
var f0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function h0(e) {
  var t = f0();
  V(e, t);
}
var g0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function v0(e) {
  var t = g0();
  V(e, t);
}
var p0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function m0(e) {
  var t = p0();
  V(e, t);
}
var y0 = /* @__PURE__ */ re("<!> <!>", 1), w0 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function _0(e, t) {
  ee(t, !0);
  let n = H(t, "position", 3, "bottom-left"), r = H(t, "orientation", 3, "vertical"), o = H(t, "showZoom", 3, !0), i = H(t, "showFitView", 3, !0), s = H(t, "showLock", 3, !0), a = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "orientation",
    "showZoom",
    "showFitView",
    "showLock",
    "style",
    "class",
    "buttonBgColor",
    "buttonBgColorHover",
    "buttonColor",
    "buttonColorHover",
    "buttonBorderColor",
    "fitViewOptions",
    "children",
    "before",
    "after"
  ]), l = /* @__PURE__ */ y(Zt);
  const c = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ y(() => u(l).nodesDraggable || u(l).nodesConnectable || u(l).elementsSelectable), h = /* @__PURE__ */ y(() => u(l).viewport.zoom <= u(l).minZoom), f = /* @__PURE__ */ y(() => u(l).viewport.zoom >= u(l).maxZoom), g = /* @__PURE__ */ y(() => u(l).ariaLabelConfig), v = /* @__PURE__ */ y(() => r() === "horizontal" ? "horizontal" : "vertical");
  const w = () => {
    u(l).zoomIn();
  }, p = () => {
    u(l).zoomOut();
  }, _ = () => {
    u(l).fitView(t.fitViewOptions);
  }, k = () => {
    let C = !u(d);
    u(l).nodesDraggable = C, u(l).nodesConnectable = C, u(l).elementsSelectable = C;
  };
  {
    let C = /* @__PURE__ */ y(() => [
      "svelte-flow__controls",
      u(v),
      t.class
    ]);
    wi(e, At(
      {
        get class() {
          return u(C);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(g)["controls.ariaLabel"];
        },
        get style() {
          return t.style;
        }
      },
      () => a,
      {
        children: (b, A) => {
          var T = w0(), I = ae(T);
          {
            var M = (z) => {
              var L = ye(), F = ae(L);
              Re(F, () => t.before), V(z, L);
            };
            ue(I, (z) => {
              t.before && z(M);
            });
          }
          var B = $(I, 2);
          {
            var Y = (z) => {
              var L = y0(), F = ae(L);
              yr(F, At(
                {
                  onclick: w,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(g)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(f);
                  }
                },
                () => c,
                {
                  children: (Z, K) => {
                    c0(Z);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = $(F, 2);
              yr(X, At(
                {
                  onclick: p,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(g)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(h);
                  }
                },
                () => c,
                {
                  children: (Z, K) => {
                    d0(Z);
                  },
                  $$slots: { default: !0 }
                }
              )), V(z, L);
            };
            ue(B, (z) => {
              o() && z(Y);
            });
          }
          var P = $(B, 2);
          {
            var x = (z) => {
              yr(z, At(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return u(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (L, F) => {
                    h0(L);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(P, (z) => {
              i() && z(x);
            });
          }
          var N = $(P, 2);
          {
            var m = (z) => {
              yr(z, At(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: k,
                  get title() {
                    return u(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (L, F) => {
                    var X = ye(), Z = ae(X);
                    {
                      var K = (W) => {
                        m0(W);
                      }, J = (W) => {
                        v0(W);
                      };
                      ue(Z, (W) => {
                        u(d) ? W(K) : W(J, !1);
                      });
                    }
                    V(L, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(N, (z) => {
              s() && z(m);
            });
          }
          var S = $(N, 2);
          {
            var E = (z) => {
              var L = ye(), F = ae(L);
              Re(F, () => t.children), V(z, L);
            };
            ue(S, (z) => {
              t.children && z(E);
            });
          }
          var D = $(S, 2);
          {
            var R = (z) => {
              var L = ye(), F = ae(L);
              Re(F, () => t.after), V(z, L);
            };
            ue(D, (z) => {
              t.after && z(R);
            });
          }
          V(b, T);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  te();
}
var Ot;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ot || (Ot = {}));
var b0 = /* @__PURE__ */ me("<circle></circle>");
function x0(e, t) {
  var n = b0();
  ce(() => {
    j(n, "cx", t.radius), j(n, "cy", t.radius), j(n, "r", t.radius), ze(n, 0, Bt(["svelte-flow__background-pattern", "dots", t.class]));
  }), V(e, n);
}
var E0 = /* @__PURE__ */ me("<path></path>");
function S0(e, t) {
  ee(t, !0);
  var n = E0();
  ce(() => {
    j(n, "stroke-width", t.lineWidth), j(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), ze(n, 0, Bt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), V(e, n), te();
}
const k0 = {
  [Ot.Dots]: 1,
  [Ot.Lines]: 1,
  [Ot.Cross]: 6
};
var C0 = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function N0(e, t) {
  ee(t, !0);
  let n = H(t, "variant", 19, () => Ot.Dots), r = H(t, "gap", 3, 20), o = H(t, "lineWidth", 3, 1), i = /* @__PURE__ */ y(Zt), s = /* @__PURE__ */ y(() => n() === Ot.Dots), a = /* @__PURE__ */ y(() => n() === Ot.Cross), l = /* @__PURE__ */ y(() => Array.isArray(r()) ? r() : [r(), r()]), c = /* @__PURE__ */ y(() => `background-pattern-${u(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ y(() => [
    u(l)[0] * u(i).viewport.zoom || 1,
    u(l)[1] * u(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ y(() => (t.size ?? k0[n()]) * u(i).viewport.zoom), f = /* @__PURE__ */ y(() => u(a) ? [u(h), u(h)] : u(d)), g = /* @__PURE__ */ y(() => u(s) ? [u(h) / 2, u(h) / 2] : [
    u(f)[0] / 2,
    u(f)[1] / 2
  ]);
  var v = C0();
  let w;
  var p = q(v), _ = q(p);
  {
    var k = (A) => {
      {
        let T = /* @__PURE__ */ y(() => u(h) / 2);
        x0(A, {
          get radius() {
            return u(T);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, C = (A) => {
      S0(A, {
        get dimensions() {
          return u(f);
        },
        get variant() {
          return n();
        },
        get lineWidth() {
          return o();
        },
        get class() {
          return t.patternClass;
        }
      });
    };
    ue(_, (A) => {
      u(s) ? A(k) : A(C, !1);
    });
  }
  var b = $(p);
  ce(() => {
    ze(v, 0, Bt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), w = Ke(v, "", w, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), j(p, "id", u(c)), j(p, "x", u(i).viewport.x % u(d)[0]), j(p, "y", u(i).viewport.y % u(d)[1]), j(p, "width", u(d)[0]), j(p, "height", u(d)[1]), j(p, "patternTransform", `translate(-${u(g)[0]},-${u(g)[1]})`), j(b, "fill", `url(#${u(c)})`);
  }), V(e, v), te();
}
var P0 = /* @__PURE__ */ me("<rect></rect>");
function M0(e, t) {
  let n = H(t, "borderRadius", 3, 5), r = H(t, "strokeWidth", 3, 2);
  var o = ye(), i = ae(o);
  {
    var s = (l) => {
      const c = /* @__PURE__ */ y(() => t.nodeComponent);
      var d = ye(), h = ae(d);
      qr(h, () => u(c), (f, g) => {
        g(f, {
          get id() {
            return t.id;
          },
          get x() {
            return t.x;
          },
          get y() {
            return t.y;
          },
          get width() {
            return t.width;
          },
          get height() {
            return t.height;
          },
          get borderRadius() {
            return n();
          },
          get class() {
            return t.class;
          },
          get color() {
            return t.color;
          },
          get shapeRendering() {
            return t.shapeRendering;
          },
          get strokeColor() {
            return t.strokeColor;
          },
          get strokeWidth() {
            return r();
          },
          get selected() {
            return t.selected;
          }
        });
      }), V(l, d);
    }, a = (l) => {
      var c = P0();
      let d, h;
      ce(() => {
        d = ze(c, 0, Bt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), j(c, "x", t.x), j(c, "y", t.y), j(c, "rx", n()), j(c, "ry", n()), j(c, "width", t.width), j(c, "height", t.height), j(c, "shape-rendering", t.shapeRendering), h = Ke(c, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), V(l, c);
    };
    ue(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  V(e, o);
}
function A0(e, t) {
  const n = Ig({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const { viewport: o } = t.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  n.update({
    translateExtent: t.translateExtent,
    width: t.width,
    height: t.height,
    inversePan: t.inversePan,
    zoomStep: t.zoomStep,
    pannable: t.pannable,
    zoomable: t.zoomable
  });
  function r(o) {
    n.update({
      translateExtent: o.translateExtent,
      width: o.width,
      height: o.height,
      inversePan: o.inversePan,
      zoomStep: o.zoomStep,
      pannable: o.pannable,
      zoomable: o.zoomable
    });
  }
  return {
    update: r,
    destroy() {
      n.destroy();
    }
  };
}
const po = (e) => e instanceof Function ? e : () => e;
var T0 = /* @__PURE__ */ me("<title> </title>"), D0 = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), I0 = /* @__PURE__ */ re('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function z0(e, t) {
  ee(t, !0);
  let n = H(t, "position", 3, "bottom-right"), r = H(t, "nodeStrokeColor", 3, "transparent"), o = H(t, "nodeClass", 3, ""), i = H(t, "nodeBorderRadius", 3, 5), s = H(t, "nodeStrokeWidth", 3, 2), a = H(t, "width", 3, 200), l = H(t, "height", 3, 150), c = H(t, "pannable", 3, !0), d = H(t, "zoomable", 3, !0), h = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "ariaLabel",
    "nodeStrokeColor",
    "nodeColor",
    "nodeClass",
    "nodeBorderRadius",
    "nodeStrokeWidth",
    "nodeComponent",
    "bgColor",
    "maskColor",
    "maskStrokeColor",
    "maskStrokeWidth",
    "width",
    "height",
    "pannable",
    "zoomable",
    "inversePan",
    "zoomStep",
    "class"
  ]), f = /* @__PURE__ */ y(Zt), g = /* @__PURE__ */ y(() => u(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : po(t.nodeColor), w = po(r()), p = po(o()), _ = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ y(() => `svelte-flow__minimap-desc-${u(f).flowId}`), C = /* @__PURE__ */ y(() => ({
    x: -u(f).viewport.x / u(f).viewport.zoom,
    y: -u(f).viewport.y / u(f).viewport.zoom,
    width: u(f).width / u(f).viewport.zoom,
    height: u(f).height / u(f).viewport.zoom
  })), b = /* @__PURE__ */ y(() => el(ar(u(f).nodeLookup, { filter: (R) => !R.hidden }), u(C))), A = /* @__PURE__ */ y(() => u(b).width / a()), T = /* @__PURE__ */ y(() => u(b).height / l()), I = /* @__PURE__ */ y(() => Math.max(u(A), u(T))), M = /* @__PURE__ */ y(() => u(I) * a()), B = /* @__PURE__ */ y(() => u(I) * l()), Y = /* @__PURE__ */ y(() => 5 * u(I)), P = /* @__PURE__ */ y(() => u(b).x - (u(M) - u(b).width) / 2 - u(Y)), x = /* @__PURE__ */ y(() => u(b).y - (u(B) - u(b).height) / 2 - u(Y)), N = /* @__PURE__ */ y(() => u(M) + u(Y) * 2), m = /* @__PURE__ */ y(() => u(B) + u(Y) * 2);
  const S = () => u(I);
  var E = I0(), D = ae(E);
  {
    let R = /* @__PURE__ */ y(() => ["svelte-flow__minimap", t.class]);
    Kc(D, () => ({ "--xy-minimap-background-color-props": t.bgColor })), wi(D.lastChild, At(
      {
        get position() {
          return n();
        },
        get class() {
          return u(R);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (z, L) => {
          var F = ye(), X = ae(F);
          {
            var Z = (K) => {
              var J = D0();
              let W;
              var G = q(J);
              {
                var Q = (ne) => {
                  var pe = T0(), oe = q(pe);
                  ce(() => {
                    j(pe, "id", u(k)), Me(oe, t.ariaLabel ?? u(g)["minimap.ariaLabel"]);
                  }), V(ne, pe);
                };
                ue(G, (ne) => {
                  (t.ariaLabel ?? u(g)["minimap.ariaLabel"]) && ne(Q);
                });
              }
              var fe = $(G);
              tn(fe, 17, () => u(f).nodes, (ne) => ne.id, (ne, pe) => {
                const oe = /* @__PURE__ */ y(() => u(f).nodeLookup.get(u(pe).id));
                var Ae = ye(), Ct = ae(Ae);
                {
                  var Nt = (ht) => {
                    const de = /* @__PURE__ */ y(() => Yt(u(oe)));
                    {
                      let we = /* @__PURE__ */ y(() => v?.(u(oe))), Ue = /* @__PURE__ */ y(() => w(u(oe))), ge = /* @__PURE__ */ y(() => p(u(oe)));
                      M0(ht, At(
                        {
                          get id() {
                            return u(oe).id;
                          },
                          get x() {
                            return u(oe).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(oe).internals.positionAbsolute.y;
                          }
                        },
                        () => u(de),
                        {
                          get selected() {
                            return u(oe).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return u(we);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return u(Ue);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return _;
                          },
                          get class() {
                            return u(ge);
                          }
                        }
                      ));
                    }
                  };
                  ue(Ct, (ht) => {
                    u(oe) && tl(u(oe)) && !u(oe).hidden && ht(Nt);
                  });
                }
                V(ne, Ae);
              });
              var be = $(fe);
              Ne(J, (ne, pe) => A0?.(ne, pe), () => ({
                store: u(f),
                panZoom: u(f).panZoom,
                getViewScale: S,
                translateExtent: u(f).translateExtent,
                width: u(f).width,
                height: u(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: c(),
                zoomable: d()
              })), ce(() => {
                j(J, "width", a()), j(J, "height", l()), j(J, "viewBox", `${u(P) ?? ""} ${u(x) ?? ""} ${u(N) ?? ""} ${u(m) ?? ""}`), j(J, "aria-labelledby", u(k)), W = Ke(J, "", W, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * u(I) : void 0
                }), j(be, "d", `M${u(P) - u(Y)},${u(x) - u(Y)}h${u(N) + u(Y) * 2}v${u(m) + u(Y) * 2}h${-u(N) - u(Y) * 2}z
      M${u(C).x ?? ""},${u(C).y ?? ""}h${u(C).width ?? ""}v${u(C).height ?? ""}h${-u(C).width}z`);
              }), V(K, J);
            };
            ue(X, (K) => {
              u(f).panZoom && K(Z);
            });
          }
          V(z, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  V(e, E), te();
}
var O0 = /* @__PURE__ */ re('<div class="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing" draggable="true" role="listitem" aria-roledescription="node blueprint"><div><!></div> <div><div class="text-xs font-bold text-slate-800 tracking-tight"> </div> <div class="text-[10px] text-slate-400 mt-0.5"> </div></div></div>'), R0 = /* @__PURE__ */ re('<div class="w-64 bg-slate-50 border-r border-slate-200 p-5 flex flex-col gap-5 overflow-y-auto"><div><h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Components</h3> <p class="text-[10px] text-slate-500 mt-1">Drag to build workflow</p></div> <div class="flex flex-col gap-3" role="list"></div> <div class="mt-auto p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl text-white shadow-xl shadow-blue-200/50"><div class="flex items-center gap-2 mb-2"><span class="text-sm">💡</span> <span class="text-[10px] font-bold uppercase tracking-wider">Pro Tip</span></div> <p class="text-[10px] leading-relaxed opacity-90">Connect nodes by clicking and dragging between handles. Use <kbd class="px-1 py-0.5 bg-white/20 rounded">CMD</kbd> to multi-select.</p></div></div>');
function H0(e, t) {
  ee(t, !0);
  let n = H(t, "availableComponents", 19, () => ({}));
  function r(l) {
    const c = (l.triggers || []).map((f) => ({
      type: "trigger",
      label: f.name,
      icon: f.icon || "<svg ...>",
      // Use default if null
      description: f.description,
      color: "bg-amber-500",
      data: {
        label: f.name,
        description: f.description,
        identifier: f.identifier
      }
    })), d = (l.actions || []).map((f) => ({
      type: "action",
      label: f.name,
      icon: f.icon || "<svg ...>",
      description: f.description,
      color: "bg-blue-600",
      data: {
        label: f.name,
        description: f.description,
        identifier: f.identifier
      }
    })), h = (l.conditions || []).map((f) => ({
      type: "condition",
      label: f.name,
      icon: f.icon || "<svg ...>",
      description: f.description,
      color: "bg-purple-600",
      data: {
        label: f.name,
        description: f.description,
        identifier: f.identifier
      }
    }));
    return [...c, ...d, ...h];
  }
  let o = /* @__PURE__ */ y(() => r(n()));
  function i(l, c, d) {
    l.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: c, data: d })), l.dataTransfer.effectAllowed = "move";
  }
  var s = R0(), a = $(q(s), 2);
  tn(a, 21, () => u(o), So, (l, c) => {
    var d = O0(), h = q(d), f = q(h);
    ga(f, () => u(c).icon || "<span>?</span>");
    var g = $(h, 2), v = q(g), w = q(v), p = $(v, 2), _ = q(p);
    ce(
      (k) => {
        ze(h, 1, `w-10 h-10 ${u(c).color ?? ""} rounded-lg flex items-center justify-center text-white shadow-lg shadow-${k ?? ""}-200/50 group-hover:scale-110 transition-transform`), Me(w, u(c).label), Me(_, u(c).description);
      },
      [() => u(c).color.split("-")[1]]
    ), $t("dragstart", d, (k) => i(k, u(c).type, u(c).data)), V(l, d);
  }), V(e, s), te();
}
var L0 = /* @__PURE__ */ re("<!> <!> <!>", 1), V0 = /* @__PURE__ */ re('<div class="flex h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"><!> <div class="flex-grow relative h-full" role="presentation"><!></div></div>');
function B0(e, t) {
  ee(t, !0);
  let n = H(t, "nodes", 31, () => it([])), r = H(t, "edges", 31, () => it([])), o = H(t, "availableComponents", 19, () => ({}));
  const { screenToFlowPosition: i } = Nl();
  function s(f) {
    f.preventDefault(), f.dataTransfer.dropEffect = "move";
  }
  function a(f) {
    f.preventDefault();
    const g = f.dataTransfer.getData("application/svelteflow");
    if (!g) return;
    const { type: v, data: w } = JSON.parse(g), p = i({ x: f.clientX, y: f.clientY }), _ = { id: `${v}-${Date.now()}`, type: v, position: p, data: w };
    n([...n(), _]);
  }
  var l = V0(), c = q(l);
  H0(c, {
    get availableComponents() {
      return o();
    }
  });
  var d = $(c, 2), h = q(d);
  i0(h, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    fitView: !0,
    onnodeclick: ({ event: f, node: g }) => {
      t.onNodeClick && t.onNodeClick(f, g);
    },
    get nodes() {
      return n();
    },
    set nodes(f) {
      n(f);
    },
    get edges() {
      return r();
    },
    set edges(f) {
      r(f);
    },
    children: (f, g) => {
      var v = L0(), w = ae(v);
      _0(w, {});
      var p = $(w, 2);
      N0(p, { variant: "lines", gap: 20, size: 1, color: "#f1f5f9" });
      var _ = $(p, 2);
      z0(_, {}), V(f, v);
    },
    $$slots: { default: !0 }
  }), $t("dragover", d, s), $t("drop", d, a), V(e, l), te();
}
var F0 = /* @__PURE__ */ re('<p class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"> </p>'), K0 = /* @__PURE__ */ re('<div class="relative w-3 h-3" role="presentation"><!></div>'), Y0 = /* @__PURE__ */ re('<div class="relative w-3 h-3" role="presentation"><!></div>'), Z0 = /* @__PURE__ */ re('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white"> </span></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function _i(e, t) {
  ee(t, !0);
  let n = H(t, "type", 3, "default"), r = H(t, "inputs", 19, () => []), o = H(t, "outputs", 19, () => []);
  const i = {
    trigger: {
      border: "border-amber-200",
      header: "bg-amber-500",
      bg: "bg-amber-50/50",
      text: "text-amber-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>'
    },
    action: {
      border: "border-blue-200",
      header: "bg-blue-600",
      bg: "bg-blue-50/50",
      text: "text-blue-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>'
    },
    condition: {
      border: "border-purple-200",
      header: "bg-purple-600",
      bg: "bg-purple-50/50",
      text: "text-purple-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
    },
    default: {
      border: "border-slate-200",
      header: "bg-slate-600",
      bg: "bg-slate-50/50",
      text: "text-slate-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>'
    }
  }, s = /* @__PURE__ */ y(() => i[n()] || i.default);
  var a = Z0(), l = q(a), c = q(l), d = q(c), h = q(d);
  ga(h, () => u(s).icon);
  var f = $(d, 2), g = q(f), v = $(c, 2), w = q(v);
  {
    var p = (A) => {
      var T = F0(), I = q(T);
      ce(() => Me(I, t.data.description)), V(A, T);
    };
    ue(w, (A) => {
      t.data.description && A(p);
    });
  }
  var _ = $(w, 2), k = q(_);
  Re(k, () => t.children ?? Lt);
  var C = $(l, 2);
  tn(C, 21, r, So, (A, T) => {
    var I = K0(), M = q(I);
    Ht(M, {
      type: "target",
      get position() {
        return U.Left;
      },
      get id() {
        return u(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(A, I);
  });
  var b = $(C, 2);
  tn(b, 21, o, So, (A, T) => {
    var I = Y0(), M = q(I);
    Ht(M, {
      type: "source",
      get position() {
        return U.Right;
      },
      get id() {
        return u(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(A, I);
  }), ce(() => {
    ze(l, 1, `min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border ${u(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2" : "hover:shadow-md"}`), ze(c, 1, `${u(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`), Me(g, t.data.label || "Node"), ze(v, 1, `p-3 ${u(s).bg ?? ""}`), ze(_, 1, `text-xs font-medium ${u(s).text ?? ""}`);
  }), V(e, a), te();
}
var X0 = /* @__PURE__ */ re('<div class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"> </div>');
function W0(e, t) {
  ee(t, !0);
  const n = [{ id: "output" }];
  _i(e, {
    get data() {
      return t.data;
    },
    get selected() {
      return t.selected;
    },
    type: "trigger",
    get outputs() {
      return n;
    },
    children: (r, o) => {
      var i = ye(), s = ae(i);
      {
        var a = (l) => {
          var c = X0(), d = q(c);
          ce((h) => Me(d, h), [() => t.data.event.split("\\").pop()]), V(l, c);
        };
        ue(s, (l) => {
          t.data.event && l(a);
        });
      }
      V(r, i);
    },
    $$slots: { default: !0 }
  }), te();
}
var q0 = /* @__PURE__ */ re('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded border border-blue-200 text-[10px] font-semibold"><span>⚡</span> </div>');
function G0(e, t) {
  ee(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  _i(e, {
    get data() {
      return t.data;
    },
    get selected() {
      return t.selected;
    },
    type: "action",
    get inputs() {
      return n;
    },
    get outputs() {
      return r;
    },
    children: (o, i) => {
      var s = ye(), a = ae(s);
      {
        var l = (c) => {
          var d = q0(), h = $(q(d));
          ce(() => Me(h, ` ${t.data.action ?? ""}`)), V(c, d);
        };
        ue(a, (c) => {
          t.data.action && c(l);
        });
      }
      V(o, s);
    },
    $$slots: { default: !0 }
  }), te();
}
var U0 = /* @__PURE__ */ re('<div class="px-2 py-1 bg-purple-100/50 rounded border border-purple-200 text-[10px] font-mono mb-6"> </div>'), j0 = /* @__PURE__ */ re('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 mr-2 uppercase">False</span> <!></div></div>', 1), J0 = /* @__PURE__ */ re('<div class="relative"><!></div>');
function Q0(e, t) {
  ee(t, !0);
  const n = [{ id: "input" }];
  var r = J0(), o = q(r);
  _i(o, {
    get data() {
      return t.data;
    },
    get selected() {
      return t.selected;
    },
    type: "condition",
    get inputs() {
      return n;
    },
    children: (i, s) => {
      var a = j0(), l = ae(a);
      {
        var c = (w) => {
          var p = U0(), _ = q(p);
          ce(() => Me(_, t.data.condition)), V(w, p);
        };
        ue(l, (w) => {
          t.data.condition && w(c);
        });
      }
      var d = $(l, 2), h = q(d), f = $(q(h), 2);
      Ht(f, {
        type: "source",
        get position() {
          return U.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
      });
      var g = $(h, 2), v = $(q(g), 2);
      Ht(v, {
        type: "source",
        get position() {
          return U.Right;
        },
        id: "false",
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white"
      }), V(i, a);
    },
    $$slots: { default: !0 }
  }), V(e, r), te();
}
var $0 = /* @__PURE__ */ re('<div class="flex h-full w-full overflow-hidden"><!></div>');
function ep(e, t) {
  ee(t, !0);
  const n = {
    trigger: W0,
    action: G0,
    condition: Q0
  }, r = [
    {
      id: "trigger-1",
      type: "trigger",
      position: { x: 50, y: 50 },
      data: {
        label: "User Registered",
        identifier: "Xlited\\LaravelFlow\\Nodes\\Triggers\\UserRegistered",
        description: "Triggers when a new user signs up."
      }
    },
    {
      id: "action-1",
      type: "action",
      position: { x: 350, y: 50 },
      data: {
        label: "Send Welcome Email",
        identifier: "Xlited\\LaravelFlow\\Nodes\\Actions\\SendWelcomeEmail",
        description: "Sends a welcome email to the user."
      }
    }
  ], o = [{ id: "edge-1", source: "trigger-1", target: "action-1" }];
  let i = H(t, "nodes", 7), s = H(t, "edges", 7), a = H(t, "availableComponents", 19, () => ({}));
  i().length === 0 && i(r), s().length === 0 && s(o), console.log(r, i(), s());
  let l = /* @__PURE__ */ se(i()), c = /* @__PURE__ */ se(s()), d = /* @__PURE__ */ se(null);
  function h(g, v) {
    O(d, v.id, !0), console.log(v), window.dispatchEvent(new CustomEvent("open-node-settings", {
      detail: {
        id: v.id,
        identifier: v.data.identifier,
        // Merge label/description with config for the form
        config: {
          label: v.data.label,
          description: v.data.description,
          ...v.data.config || {}
        }
      }
    }));
  }
  let f;
  qe(() => {
    const g = u(l), v = u(c);
    return t.updateState && (clearTimeout(f), f = setTimeout(
      () => {
        t.updateState({
          nodes: JSON.parse(JSON.stringify(g)),
          edges: JSON.parse(JSON.stringify(v))
        });
      },
      500
    )), () => clearTimeout(f);
  }), qe(() => {
    const g = (v) => {
      const { id: w, config: p } = v.detail, _ = u(l).findIndex((k) => k.id === w);
      if (_ !== -1) {
        const { label: k, description: C, ...b } = p, A = { ...u(l)[_] };
        A.data = { ...A.data, label: k, description: C, config: b };
        const T = [...u(l)];
        T[_] = A, O(l, T);
      }
    };
    return window.addEventListener("update-node-config", g), () => {
      window.removeEventListener("update-node-config", g);
    };
  }), s0(e, {
    children: (g, v) => {
      var w = $0(), p = q(w);
      B0(p, {
        get nodeTypes() {
          return n;
        },
        onNodeClick: h,
        get availableComponents() {
          return a();
        },
        get nodes() {
          return u(l);
        },
        set nodes(_) {
          O(l, _);
        },
        get edges() {
          return u(c);
        },
        set edges(_) {
          O(c, _);
        }
      }), V(g, w);
    },
    $$slots: { default: !0 }
  }), te();
}
const _s = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      Vc(ep, {
        target: this.$refs.canvas,
        props: {
          nodes: n,
          edges: r,
          availableComponents: this.components,
          updateState: (o) => {
            this.state = o;
          }
        }
      });
    }
  }));
};
window.Alpine ? _s() : document.addEventListener("alpine:init", _s);
