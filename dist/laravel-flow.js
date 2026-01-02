var Br = Array.isArray, Sl = Array.prototype.indexOf, Fr = Array.from, kl = Object.defineProperty, It = Object.getOwnPropertyDescriptor, ws = Object.getOwnPropertyDescriptors, bs = Object.prototype, Cl = Array.prototype, Kr = Object.getPrototypeOf, _i = Object.isExtensible;
function An(e) {
  return typeof e == "function";
}
const nn = () => {
};
function Nl(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xs() {
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
function Un(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ee = 2, Ho = 4, Yr = 8, Es = 1 << 24, Et = 16, St = 32, Lt = 64, Zr = 128, je = 512, Se = 1024, Ve = 2048, st = 4096, Re = 8192, _t = 16384, Lo = 32768, Rt = 65536, wi = 1 << 17, Ss = 1 << 18, rn = 1 << 19, ks = 1 << 20, pt = 1 << 25, Ut = 32768, po = 1 << 21, Vo = 1 << 22, Dt = 1 << 23, ot = /* @__PURE__ */ Symbol("$state"), Cs = /* @__PURE__ */ Symbol("legacy props"), Pl = /* @__PURE__ */ Symbol(""), un = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Bo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ml() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Al(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Il(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Rl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ll() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Vl = 1, Bl = 2, Ns = 4, Fl = 8, Kl = 16, Yl = 1, Zl = 2, Xl = 4, Wl = 8, ql = 16, Ps = 1, Gl = 2, xe = /* @__PURE__ */ Symbol(), Ul = "http://www.w3.org/1999/xhtml", Ql = "@attach";
function jl() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Jl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ms(e) {
  return e === this.v;
}
function As(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ts(e) {
  return !As(e, this.v);
}
let Nn = !1;
function $l() {
  Nn = !0;
}
const ec = [];
function Is(e, t = !1, n = !1) {
  return yr(e, /* @__PURE__ */ new Map(), "", ec, null, n);
}
function yr(e, t, n, r, o = null, i = !1) {
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
    if (Br(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = yr(c, t, n, r, null, i));
      }
      return a;
    }
    if (Kr(e) === bs) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = yr(
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
      return yr(
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
function pn(e) {
  he = e;
}
function Fo(e) {
  return (
    /** @type {T} */
    Ko().get(e)
  );
}
function Ds(e, t) {
  return Ko().set(e, t), t;
}
function tc(e) {
  return Ko().has(e);
}
function ee(e, t = !1, n) {
  he = {
    p: he,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Nn && !t ? { s: null, u: null, $: [] } : null
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
function Qn() {
  return !Nn || he !== null && he.l === null;
}
function Ko(e) {
  return he === null && Bo(), he.c ??= new Map(nc(he) || void 0);
}
function nc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let dn = [];
function rc() {
  var e = dn;
  dn = [], vo(e);
}
function on(e) {
  if (dn.length === 0) {
    var t = dn;
    queueMicrotask(() => {
      t === dn && rc();
    });
  }
  dn.push(e);
}
function zs(e) {
  var t = le;
  if (t === null)
    return ie.f |= Dt, e;
  if ((t.f & Lo) === 0) {
    if ((t.f & Zr) === 0)
      throw e;
    t.b.error(e);
  } else
    mn(e, t);
}
function mn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zr) !== 0)
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
const cr = /* @__PURE__ */ new Set();
let ve = null, Ye = null, tt = [], Yo = null, mo = !1;
class Ue {
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
    tt = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (ve = null, bi(n.render_effects), bi(n.effects), this.#l?.resolve()), Ye = null;
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
      var o = r.f, i = (o & (St | Lt)) !== 0, s = i && (o & Se) !== 0, a = s || (o & Re) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Zr) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Se : (o & Ho) !== 0 ? n.effects.push(r) : tr(r) && ((r.f & Et) !== 0 && this.#i.add(r), Fn(r));
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
      (n.f & Ve) !== 0 ? this.#i.add(n) : (n.f & st) !== 0 && this.#o.add(n), this.#c(n.deps), ke(n, Se);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Ee) === 0 || (n.f & Ut) === 0 || (n.f ^= Ut, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Dt) === 0 && (this.current.set(t, t.v), Ye?.set(t, t.v));
  }
  activate() {
    ve = this, this.apply();
  }
  deactivate() {
    ve === this && (ve = null, Ye = null);
  }
  flush() {
    if (this.activate(), tt.length > 0) {
      if (oc(), ve !== null && ve !== this)
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
    if (cr.size > 1) {
      this.previous.clear();
      var t = Ye, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of cr) {
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
          var o = tt;
          tt = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Os(d, a, l, c);
          if (tt.length > 0) {
            ve = i, i.apply();
            for (const d of tt)
              i.#s(d, r);
            i.deactivate();
          }
          tt = o;
        }
      }
      ve = null, Ye = t;
    }
    this.committed = !0, cr.delete(this);
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
      this.#o.delete(t), ke(t, Ve), Qt(t);
    for (const t of this.#o)
      ke(t, st), Qt(t);
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
    return (this.#l ??= xs()).promise;
  }
  static ensure() {
    if (ve === null) {
      const t = ve = new Ue();
      cr.add(ve), Ue.enqueue(() => {
        ve === t && t.flush();
      });
    }
    return ve;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    on(t);
  }
  apply() {
  }
}
function oc() {
  var e = Wt;
  mo = !0;
  var t = null;
  try {
    var n = 0;
    for (kr(!0); tt.length > 0; ) {
      var r = Ue.ensure();
      if (n++ > 1e3) {
        var o, i;
        ic();
      }
      r.process(tt), zt.clear();
    }
  } finally {
    mo = !1, kr(e), Yo = null;
  }
}
function ic() {
  try {
    Dl();
  } catch (e) {
    mn(e, Yo);
  }
}
let ht = null;
function bi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (_t | Re)) === 0 && tr(r) && (ht = /* @__PURE__ */ new Set(), Fn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? $s(r) : r.fn = null), ht?.size > 0)) {
        zt.clear();
        for (const o of ht) {
          if ((o.f & (_t | Re)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            ht.has(s) && (ht.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (_t | Re)) === 0 && Fn(l);
          }
        }
        ht.clear();
      }
    }
    ht = null;
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
      ) : (i & (Vo | Et)) !== 0 && (i & Ve) === 0 && Rs(o, t, r) && (ke(o, Ve), Qt(
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
function Qt(e) {
  for (var t = Yo = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (mo && t === le && (n & Et) !== 0 && (n & Ss) === 0)
      return;
    if ((n & (Lt | St)) !== 0) {
      if ((n & Se) === 0) return;
      t.f ^= Se;
    }
  }
  tt.push(t);
}
function Hs(e) {
  let t = 0, n = jt(0), r;
  return () => {
    Vn() && (u(n), Xr(() => (t === 0 && (r = Oe(() => e(() => Hn(n)))), t += 1, () => {
      on(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Hn(n));
      });
    })));
  };
}
var sc = Rt | rn | Zr;
function ac(e, t, n) {
  new lc(e, t, n);
}
class lc {
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
  #_ = Hs(() => (this.#h = jt(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    le.b, this.#e = !!this.#r.pending, this.#i = er(() => {
      le.b = this;
      {
        var o = this.#m();
        try {
          this.#o = Te(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, sc);
  }
  #w() {
    try {
      this.#o = Te(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = Te(() => t(this.#t)), Ue.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (Ue.ensure(), Te(() => this.#l(n)))), this.#f > 0 ? this.#p() : (Xt(
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
    return this.#e && (this.#u = wt(), this.#t.before(this.#u), t = this.#u), t;
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
    lt(this.#i), Ie(this.#i), pn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return zs(i), null;
    } finally {
      lt(n), Ie(r), pn(o);
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
    ), na(this.#o, this.#c)), this.#s === null && (this.#s = Te(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && Xt(this.#s, () => {
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
    this.#y(t), this.#d += t, this.#h && yn(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#_(), u(
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
    this.#o && (we(this.#o), this.#o = null), this.#s && (we(this.#s), this.#s = null), this.#a && (we(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Jl();
        return;
      }
      o = !0, i && Ll(), Ue.ensure(), this.#d = 0, this.#a !== null && Xt(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Te(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = ie;
    try {
      Ie(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      mn(l, this.#i && this.#i.parent);
    } finally {
      Ie(a);
    }
    r && on(() => {
      this.#a = this.#v(() => {
        Ue.ensure(), this.#g = !0;
        try {
          return Te(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return mn(
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
  const o = Qn() ? jn : Zo;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ve, s = (
    /** @type {Effect} */
    le
  ), a = cc();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ uc(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & _t) === 0 && mn(d, s);
      }
      i?.deactivate(), Sr();
    }).catch((c) => {
      mn(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Sr();
    }
  }) : l();
}
function cc() {
  var e = le, t = ie, n = he, r = ve;
  return function(i = !0) {
    lt(e), Ie(t), pn(n), i && r?.activate();
  };
}
function Sr() {
  lt(null), Ie(null), pn(null);
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  var t = Ee | Ve, n = ie !== null && (ie.f & Ee) !== 0 ? (
    /** @type {Derived} */
    ie
  ) : null;
  return le !== null && (le.f |= rn), {
    ctx: he,
    deps: null,
    effects: null,
    equals: Ms,
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
function uc(e, t) {
  let n = (
    /** @type {Effect | null} */
    le
  );
  n === null && Ml();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = jt(
    /** @type {V} */
    xe
  ), s = !ie, a = /* @__PURE__ */ new Map();
  return wc(() => {
    var l = xs();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === ve && c.committed && c.deactivate(), Sr();
      });
    } catch (f) {
      l.reject(f), Sr();
    }
    var c = (
      /** @type {Batch} */
      ve
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(un), a.delete(c), a.set(c, l);
    }
    const h = (f, g = void 0) => {
      if (c.activate(), g)
        g !== un && (i.f |= Dt, yn(i, g));
      else {
        (i.f & Dt) !== 0 && (i.f ^= Dt), yn(i, f);
        for (const [v, _] of a) {
          if (a.delete(v), v === c) break;
          _.reject(un);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), qo(() => {
    for (const l of a.values())
      l.reject(un);
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
  const t = /* @__PURE__ */ jn(e);
  return ra(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zo(e) {
  const t = /* @__PURE__ */ jn(e);
  return t.equals = Ts, t;
}
function Vs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      we(
        /** @type {Effect} */
        t[n]
      );
  }
}
function dc(e) {
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
function Xo(e) {
  var t, n = le;
  lt(dc(e));
  try {
    e.f &= ~Ut, Vs(e), t = aa(e);
  } finally {
    lt(n);
  }
  return t;
}
function Bs(e) {
  var t = Xo(e);
  if (e.equals(t) || (ve?.is_fork || (e.v = t), e.wv = ia()), !sn)
    if (Ye !== null)
      (Vn() || ve?.is_fork) && Ye.set(e, t);
    else {
      var n = (e.f & je) === 0 ? st : Se;
      ke(e, n);
    }
}
let yo = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let Fs = !1;
function jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ms,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  const n = jt(e);
  return ra(n), n;
}
// @__NO_SIDE_EFFECTS__
function fc(e, t = !1, n = !0) {
  const r = jt(e);
  return t || (r.equals = Ts), Nn && n && he !== null && he.l !== null && (he.l.s ??= []).push(r), r;
}
function O(e, t, n = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!rt || (ie.f & wi) !== 0) && Qn() && (ie.f & (Ee | Et | Vo | wi)) !== 0 && !bt?.includes(e) && Hl();
  let r = n ? Tt(t) : t;
  return yn(e, r);
}
function yn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    sn ? zt.set(e, t) : zt.set(e, n), e.v = t;
    var r = Ue.ensure();
    r.capture(e, n), (e.f & Ee) !== 0 && ((e.f & Ve) !== 0 && Xo(
      /** @type {Derived} */
      e
    ), ke(e, (e.f & je) !== 0 ? Se : st)), e.wv = ia(), Ks(e, Ve), Qn() && le !== null && (le.f & Se) !== 0 && (le.f & (St | Lt)) === 0 && (Ke === null ? Ec([e]) : Ke.push(e)), !r.is_fork && yo.size > 0 && !Fs && hc();
  }
  return t;
}
function hc() {
  Fs = !1;
  var e = Wt;
  kr(!0);
  const t = Array.from(yo);
  try {
    for (const n of t)
      (n.f & Se) !== 0 && ke(n, st), tr(n) && Fn(n);
  } finally {
    kr(e);
  }
  yo.clear();
}
function Hn(e) {
  O(e, e.v + 1);
}
function Ks(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Qn(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === le)) {
        var l = (a & Ve) === 0;
        if (l && ke(s, t), (a & Ee) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Ye?.delete(c), (a & Ut) === 0 && (a & je && (s.f |= Ut), Ks(c, st));
        } else l && ((a & Et) !== 0 && ht !== null && ht.add(
          /** @type {Effect} */
          s
        ), Qt(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Tt(e) {
  if (typeof e != "object" || e === null || ot in e)
    return e;
  const t = Kr(e);
  if (t !== bs && t !== Cl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Br(e), o = /* @__PURE__ */ ae(0), i = qt, s = (a) => {
    if (qt === i)
      return a();
    var l = ie, c = qt;
    Ie(null), Si(i);
    var d = a();
    return Ie(l), Si(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ae(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ol();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ ae(c.value);
          return n.set(l, h), h;
        }) : O(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ ae(xe));
            n.set(l, d), Hn(o);
          }
        } else
          O(c, xe), Hn(o);
        return !0;
      },
      get(a, l, c) {
        if (l === ot)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || It(a, l)?.writable) && (d = s(() => {
          var g = Tt(h ? a[l] : xe), v = /* @__PURE__ */ ae(g);
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
        if (l === ot)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== xe || Reflect.has(a, l);
        if (c !== void 0 || le !== null && (!d || It(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Tt(a[l]) : xe, g = /* @__PURE__ */ ae(f);
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
            v !== void 0 ? O(v, xe) : g in a && (v = s(() => /* @__PURE__ */ ae(xe)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || It(a, l)?.writable) && (h = s(() => /* @__PURE__ */ ae(void 0)), O(h, Tt(c)), n.set(l, h));
        else {
          f = h.v !== xe;
          var _ = s(() => Tt(c));
          O(h, _);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, l);
        if (p?.set && p.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= w.v && O(w, C + 1);
          }
          Hn(o);
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
        Rl();
      }
    }
  );
}
function xi(e) {
  try {
    if (e !== null && typeof e == "object" && ot in e)
      return e[ot];
  } catch {
  }
  return e;
}
function gc(e, t) {
  return Object.is(xi(e), xi(t));
}
var Ae, Ys, Zs, Xs;
function vc() {
  if (Ae === void 0) {
    Ae = window, Ys = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Zs = It(t, "firstChild").get, Xs = It(t, "nextSibling").get, _i(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _i(n) && (n.__t = void 0);
  }
}
function wt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return (
    /** @type {TemplateNode | null} */
    Zs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  return (
    /** @type {TemplateNode | null} */
    Xs.call(e)
  );
}
function re(e, t) {
  return /* @__PURE__ */ gt(e);
}
function se(e, t = !1) {
  {
    var n = /* @__PURE__ */ gt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Jn(n) : n;
  }
}
function J(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Jn(r);
  return r;
}
function pc(e) {
  e.textContent = "";
}
function Ws() {
  return !1;
}
function mc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, on(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Wo(e) {
  var t = ie, n = le;
  Ie(null), lt(null);
  try {
    return e();
  } finally {
    Ie(t), lt(n);
  }
}
function qs(e) {
  le === null && (ie === null && Il(), Tl()), sn && Al();
}
function yc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Xe(e, t, n) {
  var r = le;
  r !== null && (r.f & Re) !== 0 && (e |= Re);
  var o = {
    ctx: he,
    deps: null,
    nodes: null,
    f: e | Ve | je,
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
      Fn(o), o.f |= Lo;
    } catch (a) {
      throw we(o), a;
    }
  else t !== null && Qt(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & rn) === 0 && (i = i.first, (e & Et) !== 0 && (e & Rt) !== 0 && i !== null && (i.f |= Rt)), i !== null && (i.parent = r, r !== null && yc(i, r), ie !== null && (ie.f & Ee) !== 0 && (e & Lt) === 0)) {
    var s = (
      /** @type {Derived} */
      ie
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Vn() {
  return ie !== null && !rt;
}
function qo(e) {
  const t = Xe(Yr, null, !1);
  return ke(t, Se), t.teardown = e, t;
}
function at(e) {
  qs();
  var t = (
    /** @type {Effect} */
    le.f
  ), n = !ie && (t & St) !== 0 && (t & Lo) === 0;
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
  return Xe(Ho | ks, e, !1);
}
function Go(e) {
  return qs(), Xe(Yr | ks, e, !0);
}
function Us(e) {
  Ue.ensure();
  const t = Xe(Lt | rn, e, !0);
  return () => {
    we(t);
  };
}
function _c(e) {
  Ue.ensure();
  const t = Xe(Lt | rn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Xt(t, () => {
      we(t), r(void 0);
    }) : (we(t), r(void 0));
  });
}
function $n(e) {
  return Xe(Ho, e, !1);
}
function wc(e) {
  return Xe(Vo | rn, e, !0);
}
function Xr(e, t = 0) {
  return Xe(Yr | t, e, !0);
}
function ue(e, t = [], n = [], r = []) {
  Ls(r, t, n, (o) => {
    Xe(Yr, () => e(...o.map(u)), !0);
  });
}
function er(e, t = 0) {
  var n = Xe(Et | t, e, !0);
  return n;
}
function Qs(e, t = 0) {
  var n = Xe(Es | t, e, !0);
  return n;
}
function Te(e) {
  return Xe(St | rn, e, !0);
}
function js(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = sn, r = ie;
    Ei(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      Ei(n), Ie(r);
    }
  }
}
function Js(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Wo(() => {
      o.abort(un);
    });
    var r = n.next;
    (n.f & Lt) !== 0 ? n.parent = null : we(n, t), n = r;
  }
}
function bc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & St) === 0 && we(t), t = n;
  }
}
function we(e, t = !0) {
  var n = !1;
  (t || (e.f & Ss) !== 0) && e.nodes !== null && e.nodes.end !== null && (xc(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Js(e, t && !n), Cr(e, 0), ke(e, _t);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  js(e);
  var o = e.parent;
  o !== null && o.first !== null && $s(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function xc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Jn(e);
    e.remove(), e = n;
  }
}
function $s(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Xt(e, t, n = !0) {
  var r = [];
  ea(e, r, !0);
  var o = () => {
    n && we(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function ea(e, t, n) {
  if ((e.f & Re) === 0) {
    e.f ^= Re;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Rt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & St) !== 0 && (e.f & Et) !== 0;
      ea(o, t, s ? n : !1), o = i;
    }
  }
}
function Uo(e) {
  ta(e, !0);
}
function ta(e, t) {
  if ((e.f & Re) !== 0) {
    e.f ^= Re, (e.f & Se) === 0 && (ke(e, Ve), Qt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rt) !== 0 || (n.f & St) !== 0;
      ta(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function na(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ Jn(n);
      t.append(n), n = o;
    }
}
let Wt = !1;
function kr(e) {
  Wt = e;
}
let sn = !1;
function Ei(e) {
  sn = e;
}
let ie = null, rt = !1;
function Ie(e) {
  ie = e;
}
let le = null;
function lt(e) {
  le = e;
}
let bt = null;
function ra(e) {
  ie !== null && (bt === null ? bt = [e] : bt.push(e));
}
let Pe = null, ze = 0, Ke = null;
function Ec(e) {
  Ke = e;
}
let oa = 1, Bn = 0, qt = Bn;
function Si(e) {
  qt = e;
}
function ia() {
  return ++oa;
}
function tr(e) {
  var t = e.f;
  if ((t & Ve) !== 0)
    return !0;
  if (t & Ee && (e.f &= ~Ut), (t & st) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (tr(
          /** @type {Derived} */
          i
        ) && Bs(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & je) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ye === null && ke(e, Se);
  }
  return !1;
}
function sa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !bt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ee) !== 0 ? sa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ke(i, Ve) : (i.f & Se) !== 0 && ke(i, st), Qt(
        /** @type {Effect} */
        i
      ));
    }
}
function aa(e) {
  var t = Pe, n = ze, r = Ke, o = ie, i = bt, s = he, a = rt, l = qt, c = e.f;
  Pe = /** @type {null | Value[]} */
  null, ze = 0, Ke = null, ie = (c & (St | Lt)) === 0 ? e : null, bt = null, pn(e.ctx), rt = !1, qt = ++Bn, e.ac !== null && (Wo(() => {
    e.ac.abort(un);
  }), e.ac = null);
  try {
    e.f |= po;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Pe !== null) {
      var g;
      if (Cr(e, ze), f !== null && ze > 0)
        for (f.length = ze + Pe.length, g = 0; g < Pe.length; g++)
          f[ze + g] = Pe[g];
      else
        e.deps = f = Pe;
      if (Vn() && (e.f & je) !== 0)
        for (g = ze; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && ze < f.length && (Cr(e, ze), f.length = ze);
    if (Qn() && Ke !== null && !rt && f !== null && (e.f & (Ee | st | Ve)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ke.length; g++)
        sa(
          Ke[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Bn++, Ke !== null && (r === null ? r = Ke : r.push(.../** @type {Source[]} */
    Ke))), (e.f & Dt) !== 0 && (e.f ^= Dt), h;
  } catch (v) {
    return zs(v);
  } finally {
    e.f ^= po, Pe = t, ze = n, Ke = r, ie = o, bt = i, pn(s), rt = a, qt = l;
  }
}
function Sc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Sl.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ee) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pe === null || !Pe.includes(t)) && (ke(t, st), (t.f & je) !== 0 && (t.f ^= je, t.f &= ~Ut), Vs(
    /** @type {Derived} **/
    t
  ), Cr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Cr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Sc(e, n[r]);
}
function Fn(e) {
  var t = e.f;
  if ((t & _t) === 0) {
    ke(e, Se);
    var n = le, r = Wt;
    le = e, Wt = !0;
    try {
      (t & (Et | Es)) !== 0 ? bc(e) : Js(e), js(e);
      var o = aa(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = oa;
      var i;
    } finally {
      Wt = r, le = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & Ee) !== 0;
  if (ie !== null && !rt) {
    var r = le !== null && (le.f & _t) !== 0;
    if (!r && !bt?.includes(e)) {
      var o = ie.deps;
      if ((ie.f & po) !== 0)
        e.rv < Bn && (e.rv = Bn, Pe === null && o !== null && o[ze] === e ? ze++ : Pe === null ? Pe = [e] : Pe.includes(e) || Pe.push(e));
      else {
        (ie.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ie] : i.includes(ie) || i.push(ie);
      }
    }
  }
  if (sn) {
    if (zt.has(e))
      return zt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Se) === 0 && s.reactions !== null || ca(s)) && (a = Xo(s)), zt.set(s, a), a;
    }
  } else n && (!Ye?.has(e) || ve?.is_fork && !Vn()) && (s = /** @type {Derived} */
  e, tr(s) && Bs(s), Wt && Vn() && (s.f & je) === 0 && la(s));
  if (Ye?.has(e))
    return Ye.get(e);
  if ((e.f & Dt) !== 0)
    throw e.v;
  return e.v;
}
function la(e) {
  if (e.deps !== null) {
    e.f ^= je;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Ee) !== 0 && (t.f & je) === 0 && la(
        /** @type {Derived} */
        t
      );
  }
}
function ca(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & Ee) !== 0 && ca(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Oe(e) {
  var t = rt;
  try {
    return rt = !0, e();
  } finally {
    rt = t;
  }
}
const kc = -7169;
function ke(e, t) {
  e.f = e.f & kc | t;
}
function Cc(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function ua(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ot in e)
      _o(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ot in n && _o(n);
      }
  }
}
function _o(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        _o(e[r], t);
      } catch {
      }
    const n = Kr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ws(n);
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
function Nc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Pc = [
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
function Mc(e) {
  return Pc.includes(e);
}
const Ac = {
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
function Tc(e) {
  return e = e.toLowerCase(), Ac[e] ?? e;
}
const Ic = ["touchstart", "touchmove"];
function Dc(e) {
  return Ic.includes(e);
}
const da = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set();
function Qo(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Dn.call(t, i), !i.cancelBubble)
      return Wo(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? on(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function bo(e, t, n, r = {}) {
  var o = Qo(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Nr(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Qo(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && qo(() => {
    t.removeEventListener(e, s, i);
  });
}
function jo(e) {
  for (var t = 0; t < e.length; t++)
    da.add(e[t]);
  for (var n of wo)
    n(e);
}
let ki = null;
function Dn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  ki = e;
  var s = 0, a = ki === e && e.__root;
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
    kl(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ie, h = le;
    Ie(null), lt(null);
    try {
      for (var f, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          _ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && _.call(i, e);
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
      e.__root = t, delete e.currentTarget, Ie(d), lt(h);
    }
  }
}
function fa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function _n(e, t) {
  var n = (
    /** @type {Effect} */
    le
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & Ps) !== 0, r = (t & Gl) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = fa(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ gt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ys ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      _n(a, l);
    } else
      _n(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function zc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ps) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        fa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ gt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ gt(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ gt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ gt(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      _n(d, h);
    } else
      _n(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ zc(e, t, "svg");
}
function Oc(e = "") {
  {
    var t = wt(e + "");
    return _n(t, t), t;
  }
}
function _e() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = wt();
  return e.append(t, n), _n(t, n), e;
}
function F(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function He(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Rc(e, t) {
  return Hc(e, t);
}
const ln = /* @__PURE__ */ new Map();
function Hc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  vc();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = Dc(g);
        t.addEventListener(g, Dn, { passive: v });
        var _ = ln.get(g);
        _ === void 0 ? (document.addEventListener(g, Dn, { passive: v }), ln.set(g, 1)) : ln.set(g, _ + 1);
      }
    }
  };
  l(Fr(da)), wo.add(l);
  var c = void 0, d = _c(() => {
    var h = n ?? t.appendChild(wt());
    return ac(
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
        t.removeEventListener(f, Dn);
        var g = (
          /** @type {number} */
          ln.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Dn), ln.delete(f)) : ln.set(f, g);
      }
      wo.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Lc.set(c, d), c;
}
let Lc = /* @__PURE__ */ new WeakMap();
class Jo {
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
        Uo(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (we(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var c = document.createDocumentFragment();
            na(s, c), c.append(wt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            we(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Xt(s, a, !1)) : a();
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
      n.includes(r) || (we(o.effect), this.#n.delete(r));
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
        var i = document.createDocumentFragment(), s = wt();
        i.append(s), this.#n.set(t, {
          effect: Te(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          Te(() => n(this.anchor))
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
function ce(e, t, n = !1) {
  var r = new Jo(e), o = n ? Rt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  er(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Vc(e, t) {
  Xr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Ci(e, t) {
  return t;
}
function Bc(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    Xt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            xo(Fr(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
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
      pc(d), d.append(c), e.items.clear();
    }
    xo(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function xo(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    we(e[n], t);
}
var Ni;
function wn(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & Ns) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(wt());
  }
  var d = null, h = /* @__PURE__ */ Zo(() => {
    var w = n();
    return Br(w) ? w : w == null ? [] : Fr(w);
  }), f, g = !0;
  function v() {
    p.fallback = d, Fc(p, f, s, t, r), d !== null && (f.length === 0 ? (d.f & pt) === 0 ? Uo(d) : (d.f ^= pt, zn(d, null, s)) : Xt(d, () => {
      d = null;
    }));
  }
  var _ = er(() => {
    f = /** @type {V[]} */
    u(h);
    for (var w = f.length, C = /* @__PURE__ */ new Set(), k = (
      /** @type {Batch} */
      ve
    ), b = Ws(), A = 0; A < w; A += 1) {
      var I = f[A], z = r(I, A), M = g ? null : a.get(z);
      M ? (M.v && yn(M.v, I), M.i && yn(M.i, A), b && k.skipped_effects.delete(M.e)) : (M = Kc(
        a,
        g ? s : Ni ??= wt(),
        I,
        z,
        A,
        o,
        t,
        n
      ), g || (M.e.f |= pt), a.set(z, M)), C.add(z);
    }
    if (w === 0 && i && !d && (g ? d = Te(() => i(s)) : (d = Te(() => i(Ni ??= wt())), d.f |= pt)), !g)
      if (b) {
        for (const [V, Y] of a)
          C.has(V) || k.skipped_effects.add(Y.e);
        k.oncommit(v), k.ondiscard(() => {
        });
      } else
        v();
    u(h);
  }), p = { effect: _, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function Fc(e, t, n, r, o) {
  var i = (r & Fl) !== 0, s = t.length, a = e.items, l = e.effect.first, c, d = null, h, f = [], g = [], v, _, p, w;
  if (i)
    for (w = 0; w < s; w += 1)
      v = t[w], _ = o(v, w), p = /** @type {EachItem} */
      a.get(_).e, (p.f & pt) === 0 && (p.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(p));
  for (w = 0; w < s; w += 1) {
    if (v = t[w], _ = o(v, w), p = /** @type {EachItem} */
    a.get(_).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(p), Y.done.delete(p);
    if ((p.f & pt) !== 0)
      if (p.f ^= pt, p === l)
        zn(p, null, n);
      else {
        var C = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Nt(e, d, p), Nt(e, p, C), zn(p, C, n), d = p, f = [], g = [], l = d.next;
        continue;
      }
    if ((p.f & Re) !== 0 && (Uo(p), i && (p.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (f.length < g.length) {
          var k = g[0], b;
          d = k.prev;
          var A = f[0], I = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            zn(f[b], k, n);
          for (b = 0; b < g.length; b += 1)
            c.delete(g[b]);
          Nt(e, A.prev, I.next), Nt(e, d, A), Nt(e, I, k), l = k, d = I, w -= 1, f = [], g = [];
        } else
          c.delete(p), zn(p, l, n), Nt(e, p.prev, p.next), Nt(e, p, d === null ? e.effect.first : d.next), Nt(e, d, p), d = p;
        continue;
      }
      for (f = [], g = []; l !== null && l !== p; )
        (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (p.f & pt) === 0 && f.push(p), d = p, l = p.next;
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (xo(Fr(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var z = [];
    if (c !== void 0)
      for (p of c)
        (p.f & Re) === 0 && z.push(p);
    for (; l !== null; )
      (l.f & Re) === 0 && l !== e.fallback && z.push(l), l = l.next;
    var M = z.length;
    if (M > 0) {
      var V = (r & Ns) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < M; w += 1)
          z[w].nodes?.a?.measure();
        for (w = 0; w < M; w += 1)
          z[w].nodes?.a?.fix();
      }
      Bc(e, z, V);
    }
  }
  i && on(() => {
    if (h !== void 0)
      for (p of h)
        p.nodes?.a?.apply();
  });
}
function Kc(e, t, n, r, o, i, s, a) {
  var l = (s & Vl) !== 0 ? (s & Kl) === 0 ? /* @__PURE__ */ fc(n, !1, !1) : jt(n) : null, c = (s & Bl) !== 0 ? jt(o) : null;
  return {
    v: l,
    i: c,
    e: Te(() => (i(t, l ?? n, c ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function zn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & pt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Jn(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Nt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Le(e, t, ...n) {
  var r = new Jo(e);
  er(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Rt);
}
function Wr(e, t, n) {
  var r = new Jo(e);
  er(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Rt);
}
function Ne(e, t, n) {
  $n(() => {
    var r = Oe(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Xr(() => {
        var s = n();
        ua(s), o && As(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Yc(e, t) {
  var n = void 0, r;
  Qs(() => {
    n !== (n = t()) && (r && (we(r), r = null), n && (r = Te(() => {
      $n(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ha(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ha(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Zc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ha(e)) && (r && (r += " "), r += t);
  return r;
}
function Vt(e) {
  return typeof e == "object" ? Zc(e) : e ?? "";
}
const Pi = [...` 	
\r\f \v\uFEFF`];
function Xc(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Pi.includes(r[s - 1])) && (a === r.length || Pi.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Mi(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function no(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Wc(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(no)), o && l.push(...Object.keys(o).map(no));
      var c = 0, d = -1;
      const _ = e.length;
      for (var h = 0; h < _; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === _ - 1) {
            if (d !== -1) {
              var g = no(e.substring(c, d).trim());
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
    return r && (n += Mi(r)), o && (n += Mi(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Je(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = Xc(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function ro(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Be(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = Wc(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (ro(e, n?.[0], r[0]), ro(e, n?.[1], r[1], "important")) : ro(e, n, r));
  return r;
}
function Eo(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Br(t))
      return jl();
    for (var r of e.options)
      r.selected = t.includes(Ai(r));
    return;
  }
  for (r of e.options) {
    var o = Ai(r);
    if (gc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function qc(e) {
  var t = new MutationObserver(() => {
    Eo(e, e.__value);
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
  }), qo(() => {
    t.disconnect();
  });
}
function Ai(e) {
  return "__value" in e ? e.__value : e.value;
}
const Pt = /* @__PURE__ */ Symbol("class"), vt = /* @__PURE__ */ Symbol("style"), ga = /* @__PURE__ */ Symbol("is custom element"), va = /* @__PURE__ */ Symbol("is html");
function Gc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function U(e, t, n, r) {
  var o = pa(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Pl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ma(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Uc(e, t, n, r, o = !1, i = !1) {
  var s = pa(e), a = s[ga], l = !s[va], c = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Vt(n.class) : (r || n[Pt]) && (n.class = null), n[vt] && (n.style ??= null);
  var f = ma(e);
  for (const b in n) {
    let A = n[b];
    if (d && b === "value" && A == null) {
      e.value = e.__value = "", c[b] = A;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Je(e, g, A, r, t?.[Pt], n[Pt]), c[b] = A, c[Pt] = n[Pt];
      continue;
    }
    if (b === "style") {
      Be(e, A, t?.[vt], n[vt]), c[b] = A, c[vt] = n[vt];
      continue;
    }
    var v = c[b];
    if (!(A === v && !(A === void 0 && e.hasAttribute(b)))) {
      c[b] = A;
      var _ = b[0] + b[1];
      if (_ !== "$$")
        if (_ === "on") {
          const I = {}, z = "$$" + b;
          let M = b.slice(2);
          var p = Mc(M);
          if (Nc(M) && (M = M.slice(0, -7), I.capture = !0), !p && v) {
            if (A != null) continue;
            e.removeEventListener(M, c[z], I), c[z] = null;
          }
          if (A != null)
            if (p)
              e[`__${M}`] = A, jo([M]);
            else {
              let V = function(Y) {
                c[b].call(this, Y);
              };
              var k = V;
              c[z] = Qo(M, e, V, I);
            }
          else p && (e[`__${M}`] = void 0);
        } else if (b === "style")
          U(e, b, A);
        else if (b === "autofocus")
          mc(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!a && (b === "__value" || b === "value" && A != null))
          e.value = e.__value = A;
        else if (b === "selected" && d)
          Gc(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var w = b;
          l || (w = Tc(w));
          var C = w === "defaultValue" || w === "defaultChecked";
          if (A == null && !a && !C)
            if (s[b] = null, w === "value" || w === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                e
              );
              const z = t === void 0;
              if (w === "value") {
                let M = I.defaultValue;
                I.removeAttribute(w), I.defaultValue = M, I.value = I.__value = z ? M : null;
              } else {
                let M = I.defaultChecked;
                I.removeAttribute(w), I.defaultChecked = M, I.checked = z ? M : !1;
              }
            } else
              e.removeAttribute(b);
          else C || f.includes(w) && (a || typeof A != "string") ? (e[w] = A, w in s && (s[w] = xe)) : typeof A != "function" && U(e, w, A);
        }
    }
  }
  return c;
}
function Bt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Ls(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (Qs(() => {
      var v = t(...l.map(u)), _ = Uc(
        e,
        c,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Eo(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        v[w] || we(d[w]);
      for (let w of Object.getOwnPropertySymbols(v)) {
        var p = v[w];
        w.description === Ql && (!c || p !== c[w]) && (d[w] && we(d[w]), d[w] = Te(() => Yc(e, () => p))), _[w] = p;
      }
      c = _;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      $n(() => {
        Eo(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), qc(g);
      });
    }
    f = !0;
  });
}
function pa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [ga]: e.nodeName.includes("-"),
      [va]: e.namespaceURI === Ul
    }
  );
}
var Ti = /* @__PURE__ */ new Map();
function ma(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ti.get(t);
  if (n) return n;
  Ti.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = ws(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Kr(o);
  }
  return n;
}
class $o {
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
          $o.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Qc = /* @__PURE__ */ new $o({
  box: "border-box"
});
function Ii(e, t, n) {
  var r = Qc.observe(e, () => n(e[t]));
  $n(() => (Oe(() => n(e[t])), r));
}
function Di(e, t) {
  return e === t || e?.[ot] === t;
}
function nr(e = {}, t, n, r) {
  return $n(() => {
    var o, i;
    return Xr(() => {
      o = i, i = [], Oe(() => {
        e !== n(...i) && (t(e, ...i), o && Di(n(...o), e) && t(null, ...o));
      });
    }), () => {
      on(() => {
        i && Di(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function jc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    he
  ), n = t.l.u;
  if (!n) return;
  let r = () => ua(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ jn(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Go(() => {
    zi(t, r), vo(n.b);
  }), at(() => {
    const o = Oe(() => n.m.map(Nl));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && at(() => {
    zi(t, r), vo(n.a);
  });
}
function zi(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let ur = !1;
function Jc(e) {
  var t = ur;
  try {
    return ur = !1, [e(), ur];
  } finally {
    ur = t;
  }
}
const $c = {
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
function Ft(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    $c
  );
}
const eu = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (An(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      An(o) && (o = o());
      const i = It(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (An(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = It(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === ot || t === Cs) return !1;
    for (let n of e.props)
      if (An(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (An(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Mt(...e) {
  return new Proxy({ props: e }, eu);
}
function L(e, t, n, r) {
  var o = !Nn || (n & Zl) !== 0, i = (n & Wl) !== 0, s = (n & ql) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? Oe(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = ot in e || Cs in e;
    d = It(e, t)?.set ?? (h && t in e ? (k) => e[t] = k : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Jc(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && zl(), d(f)));
  var v;
  if (o ? v = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k === void 0 ? c() : (l = !0, k);
  } : v = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k !== void 0 && (a = /** @type {V} */
    void 0), k === void 0 ? a : k;
  }, o && (n & Xl) === 0)
    return v;
  if (d) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, b) {
        return arguments.length > 0 ? ((!o || !b || _ || g) && d(b ? v() : k), k) : v();
      })
    );
  }
  var p = !1, w = ((n & Yl) !== 0 ? jn : Zo)(() => (p = !1, v()));
  i && u(w);
  var C = (
    /** @type {Effect} */
    le
  );
  return (
    /** @type {() => V} */
    (function(k, b) {
      if (arguments.length > 0) {
        const A = b ? u(w) : o && i ? Tt(k) : k;
        return O(w, A), p = !0, a !== void 0 && (a = A), k;
      }
      return sn && p || (C.f & _t) !== 0 ? w.v : u(w);
    })
  );
}
function tu(e) {
  he === null && Bo(), Nn && he.l !== null ? nu(he).m.push(e) : at(() => {
    const t = Oe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ei(e) {
  he === null && Bo(), tu(() => () => Oe(e));
}
function nu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const ru = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ru);
var ou = { value: () => {
} };
function qr() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new _r(n);
}
function _r(e) {
  this._ = e;
}
function iu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
_r.prototype = qr.prototype = {
  constructor: _r,
  on: function(e, t) {
    var n = this._, r = iu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = su(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Oi(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Oi(n[o], e.name, null);
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
function su(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Oi(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = ou, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var So = "http://www.w3.org/1999/xhtml";
const Ri = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: So,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Gr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ri.hasOwnProperty(t) ? { space: Ri[t], local: e } : e;
}
function au(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === So && t.documentElement.namespaceURI === So ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function lu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ya(e) {
  var t = Gr(e);
  return (t.local ? lu : au)(t);
}
function cu() {
}
function ti(e) {
  return e == null ? cu : function() {
    return this.querySelector(e);
  };
}
function uu(e) {
  typeof e != "function" && (e = ti(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Fe(r, this._parents);
}
function du(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function fu() {
  return [];
}
function _a(e) {
  return e == null ? fu : function() {
    return this.querySelectorAll(e);
  };
}
function hu(e) {
  return function() {
    return du(e.apply(this, arguments));
  };
}
function gu(e) {
  typeof e == "function" ? e = hu(e) : e = _a(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Fe(r, o);
}
function wa(e) {
  return function() {
    return this.matches(e);
  };
}
function ba(e) {
  return function(t) {
    return t.matches(e);
  };
}
var vu = Array.prototype.find;
function pu(e) {
  return function() {
    return vu.call(this.children, e);
  };
}
function mu() {
  return this.firstElementChild;
}
function yu(e) {
  return this.select(e == null ? mu : pu(typeof e == "function" ? e : ba(e)));
}
var _u = Array.prototype.filter;
function wu() {
  return Array.from(this.children);
}
function bu(e) {
  return function() {
    return _u.call(this.children, e);
  };
}
function xu(e) {
  return this.selectAll(e == null ? wu : bu(typeof e == "function" ? e : ba(e)));
}
function Eu(e) {
  typeof e != "function" && (e = wa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Fe(r, this._parents);
}
function xa(e) {
  return new Array(e.length);
}
function Su() {
  return new Fe(this._enter || this._groups.map(xa), this._parents);
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
function ku(e) {
  return function() {
    return e;
  };
}
function Cu(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Pr(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Nu(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Pr(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Pu(e) {
  return e.__data__;
}
function Mu(e, t) {
  if (!arguments.length) return Array.from(this, Pu);
  var n = t ? Nu : Cu, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ku(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = Au(e.call(d, d && d.__data__, c, r)), v = g.length, _ = a[c] = new Array(v), p = s[c] = new Array(v), w = l[c] = new Array(f);
    n(d, h, _, p, w, g, t);
    for (var C = 0, k = 0, b, A; C < v; ++C)
      if (b = _[C]) {
        for (C >= k && (k = C + 1); !(A = p[k]) && ++k < v; ) ;
        b._next = A || null;
      }
  }
  return s = new Fe(s, r), s._enter = a, s._exit = l, s;
}
function Au(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Tu() {
  return new Fe(this._exit || this._groups.map(xa), this._parents);
}
function Iu(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Du(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Fe(a, this._parents);
}
function zu() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Ou(e) {
  e || (e = Ru);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new Fe(o, this._parents).order();
}
function Ru(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hu() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Lu() {
  return Array.from(this);
}
function Vu() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Bu() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Fu() {
  return !this.node();
}
function Ku(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Yu(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Zu(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Xu(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Wu(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function qu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Gu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Uu(e, t) {
  var n = Gr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Zu : Yu : typeof t == "function" ? n.local ? Gu : qu : n.local ? Wu : Xu)(n, t));
}
function Ea(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Qu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ju(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ju(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function $u(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Qu : typeof t == "function" ? Ju : ju)(e, t, n ?? "")) : bn(this.node(), e);
}
function bn(e, t) {
  return e.style.getPropertyValue(t) || Ea(e).getComputedStyle(e, null).getPropertyValue(t);
}
function ed(e) {
  return function() {
    delete this[e];
  };
}
function td(e, t) {
  return function() {
    this[e] = t;
  };
}
function nd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function rd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? ed : typeof t == "function" ? nd : td)(e, t)) : this.node()[e];
}
function Sa(e) {
  return e.trim().split(/^|\s+/);
}
function ni(e) {
  return e.classList || new ka(e);
}
function ka(e) {
  this._node = e, this._names = Sa(e.getAttribute("class") || "");
}
ka.prototype = {
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
function Ca(e, t) {
  for (var n = ni(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Na(e, t) {
  for (var n = ni(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function od(e) {
  return function() {
    Ca(this, e);
  };
}
function id(e) {
  return function() {
    Na(this, e);
  };
}
function sd(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ca : Na)(this, e);
  };
}
function ad(e, t) {
  var n = Sa(e + "");
  if (arguments.length < 2) {
    for (var r = ni(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? sd : t ? od : id)(n, t));
}
function ld() {
  this.textContent = "";
}
function cd(e) {
  return function() {
    this.textContent = e;
  };
}
function ud(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function dd(e) {
  return arguments.length ? this.each(e == null ? ld : (typeof e == "function" ? ud : cd)(e)) : this.node().textContent;
}
function fd() {
  this.innerHTML = "";
}
function hd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function gd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function vd(e) {
  return arguments.length ? this.each(e == null ? fd : (typeof e == "function" ? gd : hd)(e)) : this.node().innerHTML;
}
function pd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function md() {
  return this.each(pd);
}
function yd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _d() {
  return this.each(yd);
}
function wd(e) {
  var t = typeof e == "function" ? e : ya(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function bd() {
  return null;
}
function xd(e, t) {
  var n = typeof e == "function" ? e : ya(e), r = t == null ? bd : typeof t == "function" ? t : ti(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ed() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Sd() {
  return this.each(Ed);
}
function kd() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cd() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Nd(e) {
  return this.select(e ? Cd : kd);
}
function Pd(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Md(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Ad(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Td(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Id(e, t, n) {
  return function() {
    var r = this.__on, o, i = Md(t);
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
function Dd(e, t, n) {
  var r = Ad(e + ""), o, i = r.length, s;
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
  for (a = t ? Id : Td, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Pa(e, t, n) {
  var r = Ea(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function zd(e, t) {
  return function() {
    return Pa(this, e, t);
  };
}
function Od(e, t) {
  return function() {
    return Pa(this, e, t.apply(this, arguments));
  };
}
function Rd(e, t) {
  return this.each((typeof t == "function" ? Od : zd)(e, t));
}
function* Hd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ma = [null];
function Fe(e, t) {
  this._groups = e, this._parents = t;
}
function rr() {
  return new Fe([[document.documentElement]], Ma);
}
function Ld() {
  return this;
}
Fe.prototype = rr.prototype = {
  constructor: Fe,
  select: uu,
  selectAll: gu,
  selectChild: yu,
  selectChildren: xu,
  filter: Eu,
  data: Mu,
  enter: Su,
  exit: Tu,
  join: Iu,
  merge: Du,
  selection: Ld,
  order: zu,
  sort: Ou,
  call: Hu,
  nodes: Lu,
  node: Vu,
  size: Bu,
  empty: Fu,
  each: Ku,
  attr: Uu,
  style: $u,
  property: rd,
  classed: ad,
  text: dd,
  html: vd,
  raise: md,
  lower: _d,
  append: wd,
  insert: xd,
  remove: Sd,
  clone: Nd,
  datum: Pd,
  on: Dd,
  dispatch: Rd,
  [Symbol.iterator]: Hd
};
function Ze(e) {
  return typeof e == "string" ? new Fe([[document.querySelector(e)]], [document.documentElement]) : new Fe([[e]], Ma);
}
function Vd(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function qe(e, t) {
  if (e = Vd(e), t === void 0 && (t = e.currentTarget), t) {
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
const Bd = { passive: !1 }, Kn = { capture: !0, passive: !1 };
function oo(e) {
  e.stopImmediatePropagation();
}
function hn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Aa(e) {
  var t = e.document.documentElement, n = Ze(e).on("dragstart.drag", hn, Kn);
  "onselectstart" in t ? n.on("selectstart.drag", hn, Kn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ta(e, t) {
  var n = e.document.documentElement, r = Ze(e).on("dragstart.drag", null);
  t && (r.on("click.drag", hn, Kn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const dr = (e) => () => e;
function ko(e, {
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
ko.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Fd(e) {
  return !e.ctrlKey && !e.button;
}
function Kd() {
  return this.parentNode;
}
function Yd(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Zd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xd() {
  var e = Fd, t = Kd, n = Yd, r = Zd, o = {}, i = qr("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", p).on("touchmove.drag", w, Bd).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, A) {
    if (!(d || !e.call(this, b, A))) {
      var I = k(this, t.call(this, b, A), b, A, "mouse");
      I && (Ze(b.view).on("mousemove.drag", v, Kn).on("mouseup.drag", _, Kn), Aa(b.view), oo(b), c = !1, a = b.clientX, l = b.clientY, I("start", b));
    }
  }
  function v(b) {
    if (hn(b), !c) {
      var A = b.clientX - a, I = b.clientY - l;
      c = A * A + I * I > h;
    }
    o.mouse("drag", b);
  }
  function _(b) {
    Ze(b.view).on("mousemove.drag mouseup.drag", null), Ta(b.view, c), hn(b), o.mouse("end", b);
  }
  function p(b, A) {
    if (e.call(this, b, A)) {
      var I = b.changedTouches, z = t.call(this, b, A), M = I.length, V, Y;
      for (V = 0; V < M; ++V)
        (Y = k(this, z, b, A, I[V].identifier, I[V])) && (oo(b), Y("start", b, I[V]));
    }
  }
  function w(b) {
    var A = b.changedTouches, I = A.length, z, M;
    for (z = 0; z < I; ++z)
      (M = o[A[z].identifier]) && (hn(b), M("drag", b, A[z]));
  }
  function C(b) {
    var A = b.changedTouches, I = A.length, z, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < I; ++z)
      (M = o[A[z].identifier]) && (oo(b), M("end", b, A[z]));
  }
  function k(b, A, I, z, M, V) {
    var Y = i.copy(), P = qe(V || I, A), x, N, m;
    if ((m = n.call(b, new ko("beforestart", {
      sourceEvent: I,
      target: f,
      identifier: M,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), z)) != null)
      return x = m.x - P[0] || 0, N = m.y - P[1] || 0, function S(E, T, R) {
        var D = P, H;
        switch (E) {
          case "start":
            o[M] = S, H = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            P = qe(R || T, A), H = s;
            break;
        }
        Y.call(
          E,
          b,
          new ko(E, {
            sourceEvent: T,
            subject: m,
            target: f,
            identifier: M,
            active: H,
            x: P[0] + x,
            y: P[1] + N,
            dx: P[0] - D[0],
            dy: P[1] - D[1],
            dispatch: Y
          }),
          z
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : dr(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : dr(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : dr(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : dr(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function ri(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ia(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function or() {
}
var Yn = 0.7, Mr = 1 / Yn, gn = "\\s*([+-]?\\d+)\\s*", Zn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Wd = /^#([0-9a-f]{3,8})$/, qd = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), Gd = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), Ud = new RegExp(`^rgba\\(${gn},${gn},${gn},${Zn}\\)$`), Qd = new RegExp(`^rgba\\(${it},${it},${it},${Zn}\\)$`), jd = new RegExp(`^hsl\\(${Zn},${it},${it}\\)$`), Jd = new RegExp(`^hsla\\(${Zn},${it},${it},${Zn}\\)$`), Hi = {
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
ri(or, Jt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Li,
  // Deprecated! Use color.formatHex.
  formatHex: Li,
  formatHex8: $d,
  formatHsl: ef,
  formatRgb: Vi,
  toString: Vi
});
function Li() {
  return this.rgb().formatHex();
}
function $d() {
  return this.rgb().formatHex8();
}
function ef() {
  return Da(this).formatHsl();
}
function Vi() {
  return this.rgb().formatRgb();
}
function Jt(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Wd.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Bi(t) : n === 3 ? new De(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = qd.exec(e)) ? new De(t[1], t[2], t[3], 1) : (t = Gd.exec(e)) ? new De(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ud.exec(e)) ? fr(t[1], t[2], t[3], t[4]) : (t = Qd.exec(e)) ? fr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = jd.exec(e)) ? Yi(t[1], t[2] / 100, t[3] / 100, 1) : (t = Jd.exec(e)) ? Yi(t[1], t[2] / 100, t[3] / 100, t[4]) : Hi.hasOwnProperty(e) ? Bi(Hi[e]) : e === "transparent" ? new De(NaN, NaN, NaN, 0) : null;
}
function Bi(e) {
  return new De(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new De(e, t, n, r);
}
function tf(e) {
  return e instanceof or || (e = Jt(e)), e ? (e = e.rgb(), new De(e.r, e.g, e.b, e.opacity)) : new De();
}
function Co(e, t, n, r) {
  return arguments.length === 1 ? tf(e) : new De(e, t, n, r ?? 1);
}
function De(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ri(De, Co, Ia(or, {
  brighter(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yn : Math.pow(Yn, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new De(Gt(this.r), Gt(this.g), Gt(this.b), Ar(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Fi,
  // Deprecated! Use color.formatHex.
  formatHex: Fi,
  formatHex8: nf,
  formatRgb: Ki,
  toString: Ki
}));
function Fi() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`;
}
function nf() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ki() {
  const e = Ar(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Gt(this.r)}, ${Gt(this.g)}, ${Gt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ar(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Gt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zt(e) {
  return e = Gt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Yi(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ge(e, t, n, r);
}
function Da(e) {
  if (e instanceof Ge) return new Ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof or || (e = Jt(e)), !e) return new Ge();
  if (e instanceof Ge) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ge(s, a, l, e.opacity);
}
function rf(e, t, n, r) {
  return arguments.length === 1 ? Da(e) : new Ge(e, t, n, r ?? 1);
}
function Ge(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ri(Ge, rf, Ia(or, {
  brighter(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yn : Math.pow(Yn, e), new Ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new De(
      io(e >= 240 ? e - 240 : e + 120, o, r),
      io(e, o, r),
      io(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ge(Zi(this.h), hr(this.s), hr(this.l), Ar(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ar(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Zi(this.h)}, ${hr(this.s) * 100}%, ${hr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Zi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function hr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function io(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const oi = (e) => () => e;
function of(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function sf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function af(e) {
  return (e = +e) == 1 ? za : function(t, n) {
    return n - t ? sf(t, n, e) : oi(isNaN(t) ? n : t);
  };
}
function za(e, t) {
  var n = t - e;
  return n ? of(e, n) : oi(isNaN(e) ? t : e);
}
const Tr = (function e(t) {
  var n = af(t);
  function r(o, i) {
    var s = n((o = Co(o)).r, (i = Co(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = za(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function lf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function cf(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function uf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Ln(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function df(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function nt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function ff(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ln(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var No = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, so = new RegExp(No.source, "g");
function hf(e) {
  return function() {
    return e;
  };
}
function gf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Oa(e, t) {
  var n = No.lastIndex = so.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = No.exec(e)) && (o = so.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: nt(r, o) })), n = so.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? gf(l[0].x) : hf(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Ln(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? oi(t) : (n === "number" ? nt : n === "string" ? (r = Jt(t)) ? (t = r, Tr) : Oa : t instanceof Jt ? Tr : t instanceof Date ? df : cf(t) ? lf : Array.isArray(t) ? uf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ff : nt)(e, t);
}
var Xi = 180 / Math.PI, Po = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ra(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Xi,
    skewX: Math.atan(l) * Xi,
    scaleX: s,
    scaleY: a
  };
}
var gr;
function vf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Po : Ra(t.a, t.b, t.c, t.d, t.e, t.f);
}
function pf(e) {
  return e == null || (gr || (gr = document.createElementNS("http://www.w3.org/2000/svg", "g")), gr.setAttribute("transform", e), !(e = gr.transform.baseVal.consolidate())) ? Po : (e = e.matrix, Ra(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ha(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var _ = g.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: nt(c, h) }, { i: _ - 2, x: nt(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: nt(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: nt(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var _ = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: nt(c, h) }, { i: _ - 2, x: nt(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var v = -1, _ = f.length, p; ++v < _; ) h[(p = f[v]).i] = p.x(g);
      return h.join("");
    };
  };
}
var mf = Ha(vf, "px, ", "px)", "deg)"), yf = Ha(pf, ", ", ")", ")"), _f = 1e-12;
function Wi(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wf(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bf(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const wr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, _ = g * g + v * v, p, w;
    if (_ < _f)
      w = Math.log(f / c) / t, p = function(z) {
        return [
          a + z * g,
          l + z * v,
          c * Math.exp(t * z * w)
        ];
      };
    else {
      var C = Math.sqrt(_), k = (f * f - c * c + r * _) / (2 * c * n * C), b = (f * f - c * c - r * _) / (2 * f * n * C), A = Math.log(Math.sqrt(k * k + 1) - k), I = Math.log(Math.sqrt(b * b + 1) - b);
      w = (I - A) / t, p = function(z) {
        var M = z * w, V = Wi(A), Y = c / (n * C) * (V * bf(t * M + A) - wf(A));
        return [
          a + Y * g,
          l + Y * v,
          c * V / Wi(t * M + A)
        ];
      };
    }
    return p.duration = w * 1e3 * t / Math.SQRT2, p;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var xn = 0, On = 0, Tn = 0, La = 1e3, Ir, Rn, Dr = 0, $t = 0, Ur = 0, Xn = typeof performance == "object" && performance.now ? performance : Date, Va = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ii() {
  return $t || (Va(xf), $t = Xn.now() + Ur);
}
function xf() {
  $t = 0;
}
function zr() {
  this._call = this._time = this._next = null;
}
zr.prototype = Ba.prototype = {
  constructor: zr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ii() : +n) + (t == null ? 0 : +t), !this._next && Rn !== this && (Rn ? Rn._next = this : Ir = this, Rn = this), this._call = e, this._time = n, Mo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Mo());
  }
};
function Ba(e, t, n) {
  var r = new zr();
  return r.restart(e, t, n), r;
}
function Ef() {
  ii(), ++xn;
  for (var e = Ir, t; e; )
    (t = $t - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --xn;
}
function qi() {
  $t = (Dr = Xn.now()) + Ur, xn = On = 0;
  try {
    Ef();
  } finally {
    xn = 0, kf(), $t = 0;
  }
}
function Sf() {
  var e = Xn.now(), t = e - Dr;
  t > La && (Ur -= t, Dr = e);
}
function kf() {
  for (var e, t = Ir, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ir = n);
  Rn = e, Mo(r);
}
function Mo(e) {
  if (!xn) {
    On && (On = clearTimeout(On));
    var t = e - $t;
    t > 24 ? (e < 1 / 0 && (On = setTimeout(qi, e - Xn.now() - Ur)), Tn && (Tn = clearInterval(Tn))) : (Tn || (Dr = Xn.now(), Tn = setInterval(Sf, La)), xn = 1, Va(qi));
  }
}
function Gi(e, t, n) {
  var r = new zr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Cf = qr("start", "end", "cancel", "interrupt"), Nf = [], Fa = 0, Ui = 1, Ao = 2, br = 3, Qi = 4, To = 5, xr = 6;
function Qr(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Pf(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Cf,
    tween: Nf,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Fa
  });
}
function si(e, t) {
  var n = $e(e, t);
  if (n.state > Fa) throw new Error("too late; already scheduled");
  return n;
}
function ut(e, t) {
  var n = $e(e, t);
  if (n.state > br) throw new Error("too late; already running");
  return n;
}
function $e(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Pf(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ba(i, 0, n.time);
  function i(c) {
    n.state = Ui, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== Ui) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === br) return Gi(s);
        g.state === Qi ? (g.state = xr, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = xr, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Gi(function() {
      n.state === br && (n.state = Qi, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Ao, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ao) {
      for (n.state = br, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = To, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === To && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = xr, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Er(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ao && r.state < To, r.state = xr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Mf(e) {
  return this.each(function() {
    Er(this, e);
  });
}
function Af(e, t) {
  var n, r;
  return function() {
    var o = ut(this, e), i = o.tween;
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
function Tf(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ut(this, e), s = i.tween;
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
function If(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = $e(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Af : Tf)(n, e, t));
}
function ai(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = ut(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return $e(o, r).value[t];
  };
}
function Ka(e, t) {
  var n;
  return (typeof t == "number" ? nt : t instanceof Jt ? Tr : (n = Jt(t)) ? (t = n, Tr) : Oa)(e, t);
}
function Df(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function zf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Of(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Rf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Hf(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Lf(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Vf(e, t) {
  var n = Gr(e), r = n === "transform" ? yf : Ka;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Lf : Hf)(n, r, ai(this, "attr." + e, t)) : t == null ? (n.local ? zf : Df)(n) : (n.local ? Rf : Of)(n, r, t));
}
function Bf(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Ff(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Kf(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ff(e, i)), n;
  }
  return o._value = t, o;
}
function Yf(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Bf(e, i)), n;
  }
  return o._value = t, o;
}
function Zf(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Gr(e);
  return this.tween(n, (r.local ? Kf : Yf)(r, t));
}
function Xf(e, t) {
  return function() {
    si(this, e).delay = +t.apply(this, arguments);
  };
}
function Wf(e, t) {
  return t = +t, function() {
    si(this, e).delay = t;
  };
}
function qf(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xf : Wf)(t, e)) : $e(this.node(), t).delay;
}
function Gf(e, t) {
  return function() {
    ut(this, e).duration = +t.apply(this, arguments);
  };
}
function Uf(e, t) {
  return t = +t, function() {
    ut(this, e).duration = t;
  };
}
function Qf(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Gf : Uf)(t, e)) : $e(this.node(), t).duration;
}
function jf(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ut(this, e).ease = t;
  };
}
function Jf(e) {
  var t = this._id;
  return arguments.length ? this.each(jf(t, e)) : $e(this.node(), t).ease;
}
function $f(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ut(this, e).ease = n;
  };
}
function eh(e) {
  if (typeof e != "function") throw new Error();
  return this.each($f(this._id, e));
}
function th(e) {
  typeof e != "function" && (e = wa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new xt(r, this._parents, this._name, this._id);
}
function nh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new xt(s, this._parents, this._name, this._id);
}
function rh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function oh(e, t, n) {
  var r, o, i = rh(t) ? si : ut;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function ih(e, t) {
  var n = this._id;
  return arguments.length < 2 ? $e(this.node(), n).on.on(e) : this.each(oh(n, e, t));
}
function sh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function ah() {
  return this.on("end.remove", sh(this._id));
}
function lh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ti(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Qr(c[f], t, n, f, c, $e(d, n)));
  return new xt(i, this._parents, t, n);
}
function ch(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = _a(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = $e(d, n), _ = 0, p = f.length; _ < p; ++_)
          (g = f[_]) && Qr(g, t, n, _, f, v);
        i.push(f), s.push(d);
      }
  return new xt(i, s, t, n);
}
var uh = rr.prototype.constructor;
function dh() {
  return new uh(this._groups, this._parents);
}
function fh(e, t) {
  var n, r, o;
  return function() {
    var i = bn(this, e), s = (this.style.removeProperty(e), bn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ya(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = bn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function gh(e, t, n) {
  var r, o, i;
  return function() {
    var s = bn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), bn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function vh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = ut(this, e), c = l.on, d = l.value[i] == null ? a || (a = Ya(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function ph(e, t, n) {
  var r = (e += "") == "transform" ? mf : Ka;
  return t == null ? this.styleTween(e, fh(e, r)).on("end.style." + e, Ya(e)) : typeof t == "function" ? this.styleTween(e, gh(e, r, ai(this, "style." + e, t))).each(vh(this._id, e)) : this.styleTween(e, hh(e, r, t), n).on("end.style." + e, null);
}
function mh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function yh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && mh(e, s, n)), r;
  }
  return i._value = t, i;
}
function _h(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, yh(e, t, n ?? ""));
}
function wh(e) {
  return function() {
    this.textContent = e;
  };
}
function bh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function xh(e) {
  return this.tween("text", typeof e == "function" ? bh(ai(this, "text", e)) : wh(e == null ? "" : e + ""));
}
function Eh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Sh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Eh(o)), t;
  }
  return r._value = e, r;
}
function kh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Sh(e));
}
function Ch() {
  for (var e = this._name, t = this._id, n = Za(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = $e(l, t);
        Qr(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new xt(r, this._parents, e, n);
}
function Nh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = ut(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Ph = 0;
function xt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Za() {
  return ++Ph;
}
var ft = rr.prototype;
xt.prototype = {
  constructor: xt,
  select: lh,
  selectAll: ch,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: th,
  merge: nh,
  selection: dh,
  transition: Ch,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: ih,
  attr: Vf,
  attrTween: Zf,
  style: ph,
  styleTween: _h,
  text: xh,
  textTween: kh,
  remove: ah,
  tween: If,
  delay: qf,
  duration: Qf,
  ease: Jf,
  easeVarying: eh,
  end: Nh,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Mh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ah = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mh
};
function Th(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ih(e) {
  var t, n;
  e instanceof xt ? (t = e._id, e = e._name) : (t = Za(), (n = Ah).time = ii(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Qr(l, e, t, c, s, n || Th(l, t));
  return new xt(r, this._parents, e, t);
}
rr.prototype.interrupt = Mf;
rr.prototype.transition = Ih;
const vr = (e) => () => e;
function Dh(e, {
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
function mt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
mt.prototype = {
  constructor: mt,
  scale: function(e) {
    return e === 1 ? this : new mt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new mt(this.k, this.x + this.k * e, this.y + this.k * t);
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
var jr = new mt(1, 0, 0);
Xa.prototype = mt.prototype;
function Xa(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return jr;
  return e.__zoom;
}
function ao(e) {
  e.stopImmediatePropagation();
}
function In(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Oh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ji() {
  return this.__zoom || jr;
}
function Rh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Hh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Wa() {
  var e = zh, t = Oh, n = Lh, r = Rh, o = Hh, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = wr, c = qr("start", "zoom", "end"), d, h, f, g = 500, v = 150, _ = 0, p = 10;
  function w(m) {
    m.property("__zoom", ji).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", x).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(m, S, E, T) {
    var R = m.selection ? m.selection() : m;
    R.property("__zoom", ji), m !== R ? A(m, S, E, T) : R.interrupt().each(function() {
      I(this, arguments).event(T).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, w.scaleBy = function(m, S, E, T) {
    w.scaleTo(m, function() {
      var R = this.__zoom.k, D = typeof S == "function" ? S.apply(this, arguments) : S;
      return R * D;
    }, E, T);
  }, w.scaleTo = function(m, S, E, T) {
    w.transform(m, function() {
      var R = t.apply(this, arguments), D = this.__zoom, H = E == null ? b(R) : typeof E == "function" ? E.apply(this, arguments) : E, B = D.invert(H), X = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(k(C(D, X), H, B), R, s);
    }, E, T);
  }, w.translateBy = function(m, S, E, T) {
    w.transform(m, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, T);
  }, w.translateTo = function(m, S, E, T, R) {
    w.transform(m, function() {
      var D = t.apply(this, arguments), H = this.__zoom, B = T == null ? b(D) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(jr.translate(B[0], B[1]).scale(H.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), D, s);
    }, T, R);
  };
  function C(m, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === m.k ? m : new mt(S, m.x, m.y);
  }
  function k(m, S, E) {
    var T = S[0] - E[0] * m.k, R = S[1] - E[1] * m.k;
    return T === m.x && R === m.y ? m : new mt(m.k, T, R);
  }
  function b(m) {
    return [(+m[0][0] + +m[1][0]) / 2, (+m[0][1] + +m[1][1]) / 2];
  }
  function A(m, S, E, T) {
    m.on("start.zoom", function() {
      I(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      I(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var R = this, D = arguments, H = I(R, D).event(T), B = t.apply(R, D), X = E == null ? b(B) : typeof E == "function" ? E.apply(R, D) : E, Z = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), K = R.__zoom, Q = typeof S == "function" ? S.apply(R, D) : S, W = l(K.invert(X).concat(Z / K.k), Q.invert(X).concat(Z / Q.k));
      return function(q) {
        if (q === 1) q = Q;
        else {
          var j = W(q), fe = Z / j[2];
          q = new mt(fe, X[0] - j[0] * fe, X[1] - j[1] * fe);
        }
        H.zoom(null, q);
      };
    });
  }
  function I(m, S, E) {
    return !E && m.__zooming || new z(m, S);
  }
  function z(m, S) {
    this.that = m, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(m, S), this.taps = 0;
  }
  z.prototype = {
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
      var S = Ze(this.that).datum();
      c.call(
        m,
        this.that,
        new Dh(m, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        S
      );
    }
  };
  function M(m, ...S) {
    if (!e.apply(this, arguments)) return;
    var E = I(this, S).event(m), T = this.__zoom, R = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), D = qe(m);
    if (E.wheel)
      (E.mouse[0][0] !== D[0] || E.mouse[0][1] !== D[1]) && (E.mouse[1] = T.invert(E.mouse[0] = D)), clearTimeout(E.wheel);
    else {
      if (T.k === R) return;
      E.mouse = [D, T.invert(D)], Er(this), E.start();
    }
    In(m), E.wheel = setTimeout(H, v), E.zoom("mouse", n(k(C(T, R), E.mouse[0], E.mouse[1]), E.extent, s));
    function H() {
      E.wheel = null, E.end();
    }
  }
  function V(m, ...S) {
    if (f || !e.apply(this, arguments)) return;
    var E = m.currentTarget, T = I(this, S, !0).event(m), R = Ze(m.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), D = qe(m, E), H = m.clientX, B = m.clientY;
    Aa(m.view), ao(m), T.mouse = [D, this.__zoom.invert(D)], Er(this), T.start();
    function X(K) {
      if (In(K), !T.moved) {
        var Q = K.clientX - H, W = K.clientY - B;
        T.moved = Q * Q + W * W > _;
      }
      T.event(K).zoom("mouse", n(k(T.that.__zoom, T.mouse[0] = qe(K, E), T.mouse[1]), T.extent, s));
    }
    function Z(K) {
      R.on("mousemove.zoom mouseup.zoom", null), Ta(K.view, T.moved), In(K), T.event(K).end();
    }
  }
  function Y(m, ...S) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, T = qe(m.changedTouches ? m.changedTouches[0] : m, this), R = E.invert(T), D = E.k * (m.shiftKey ? 0.5 : 2), H = n(k(C(E, D), T, R), t.apply(this, S), s);
      In(m), a > 0 ? Ze(this).transition().duration(a).call(A, H, T, m) : Ze(this).call(w.transform, H, T, m);
    }
  }
  function P(m, ...S) {
    if (e.apply(this, arguments)) {
      var E = m.touches, T = E.length, R = I(this, S, m.changedTouches.length === T).event(m), D, H, B, X;
      for (ao(m), H = 0; H < T; ++H)
        B = E[H], X = qe(B, this), X = [X, this.__zoom.invert(X), B.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== X[2] && (R.touch1 = X, R.taps = 0) : (R.touch0 = X, D = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), D && (R.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Er(this), R.start());
    }
  }
  function x(m, ...S) {
    if (this.__zooming) {
      var E = I(this, S).event(m), T = m.changedTouches, R = T.length, D, H, B, X;
      for (In(m), D = 0; D < R; ++D)
        H = T[D], B = qe(H, this), E.touch0 && E.touch0[2] === H.identifier ? E.touch0[0] = B : E.touch1 && E.touch1[2] === H.identifier && (E.touch1[0] = B);
      if (H = E.that.__zoom, E.touch1) {
        var Z = E.touch0[0], K = E.touch0[1], Q = E.touch1[0], W = E.touch1[1], q = (q = Q[0] - Z[0]) * q + (q = Q[1] - Z[1]) * q, j = (j = W[0] - K[0]) * j + (j = W[1] - K[1]) * j;
        H = C(H, Math.sqrt(q / j)), B = [(Z[0] + Q[0]) / 2, (Z[1] + Q[1]) / 2], X = [(K[0] + W[0]) / 2, (K[1] + W[1]) / 2];
      } else if (E.touch0) B = E.touch0[0], X = E.touch0[1];
      else return;
      E.zoom("touch", n(k(H, B, X), E.extent, s));
    }
  }
  function N(m, ...S) {
    if (this.__zooming) {
      var E = I(this, S).event(m), T = m.changedTouches, R = T.length, D, H;
      for (ao(m), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), D = 0; D < R; ++D)
        H = T[D], E.touch0 && E.touch0[2] === H.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === H.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (H = qe(H, this), Math.hypot(h[0] - H[0], h[1] - H[1]) < p)) {
        var B = Ze(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : vr(+m), w) : r;
  }, w.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : vr(!!m), w) : e;
  }, w.touchable = function(m) {
    return arguments.length ? (o = typeof m == "function" ? m : vr(!!m), w) : o;
  }, w.extent = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : vr([[+m[0][0], +m[0][1]], [+m[1][0], +m[1][1]]]), w) : t;
  }, w.scaleExtent = function(m) {
    return arguments.length ? (i[0] = +m[0], i[1] = +m[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(m) {
    return arguments.length ? (s[0][0] = +m[0][0], s[1][0] = +m[1][0], s[0][1] = +m[0][1], s[1][1] = +m[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(m) {
    return arguments.length ? (n = m, w) : n;
  }, w.duration = function(m) {
    return arguments.length ? (a = +m, w) : a;
  }, w.interpolate = function(m) {
    return arguments.length ? (l = m, w) : l;
  }, w.on = function() {
    var m = c.on.apply(c, arguments);
    return m === c ? w : m;
  }, w.clickDistance = function(m) {
    return arguments.length ? (_ = (m = +m) * m, w) : Math.sqrt(_);
  }, w.tapDistance = function(m) {
    return arguments.length ? (p = +m, w) : p;
  }, w;
}
const Wn = {
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
}, Io = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], qa = ["Enter", " ", "Escape"], Vh = {
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
var En;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(En || (En = {}));
var vn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(vn || (vn = {}));
var Or;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Or || (Or = {}));
const Do = {
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
var At;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(At || (At = {}));
var Rr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Rr || (Rr = {}));
var G;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(G || (G = {}));
const Ji = {
  [G.Left]: G.Right,
  [G.Right]: G.Left,
  [G.Top]: G.Bottom,
  [G.Bottom]: G.Top
};
function Bh(e, t) {
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
function $i(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Fh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Ga = (e) => "id" in e && "source" in e && "target" in e, Kh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), li = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ir = (e, t = [0, 0]) => {
  const { width: n, height: r } = Kt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Yh = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : li(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Hr(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Jr(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return $r(n);
}, sr = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Jr(n, Hr(o)), r = !0);
  }), r ? $r(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ci = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...lr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, _ = qn(a, kn(c)), p = (g ?? 0) * (v ?? 0), w = i && _ > 0;
    (!c.internals.handleBounds || w || _ >= p || c.dragging) && l.push(c);
  }
  return l;
}, Zh = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Xh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Wh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Xh(e, s), l = sr(a), c = ui(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Ua({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Wn.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, c],
        [l + g, c + v]
      ]);
    }
  else a && Cn(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = Cn(h) ? en(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Wn.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function qh({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((_) => _.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Zh(s, l);
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
const Sn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), en = (e = { x: 0, y: 0 }, t, n) => ({
  x: Sn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Sn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Qa(e, t, n) {
  const { width: r, height: o } = Kt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return en(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const es = (e, t, n) => e < t ? Sn(Math.abs(e - t), 1, t) / t : e > n ? -Sn(Math.abs(e - n), 1, t) / t : 0, ja = (e, t, n = 15, r = 40) => {
  const o = es(e.x, r, t.width - r) * n, i = es(e.y, r, t.height - r) * n;
  return [o, i];
}, Jr = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), zo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), $r = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), kn = (e, t = [0, 0]) => {
  const { x: n, y: r } = li(e) ? e.internals.positionAbsolute : ir(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Hr = (e, t = [0, 0]) => {
  const { x: n, y: r } = li(e) ? e.internals.positionAbsolute : ir(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Ja = (e, t) => $r(Jr(zo(e), zo(t))), qn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ts = (e) => yt(e.width) && yt(e.height) && yt(e.x) && yt(e.y), yt = (e) => !isNaN(e) && isFinite(e), Gh = (e, t) => {
}, ar = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), lr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ar(a, s) : a;
}, Lr = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function cn(e, t) {
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
function Uh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = cn(e, n), o = cn(e, t);
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
    const r = cn(e.top ?? e.y ?? 0, n), o = cn(e.bottom ?? e.y ?? 0, n), i = cn(e.left ?? e.x ?? 0, t), s = cn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Qh(e, t, n, r, o, i) {
  const { x: s, y: a } = Lr(e, [t, n, r]), { x: l, y: c } = Lr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const ui = (e, t, n, r, o, i) => {
  const s = Uh(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Sn(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, _ = Qh(e, g, v, d, t, n), p = {
    left: Math.min(_.left - s.left, 0),
    top: Math.min(_.top - s.top, 0),
    right: Math.min(_.right - s.right, 0),
    bottom: Math.min(_.bottom - s.bottom, 0)
  };
  return {
    x: g - p.left + p.right,
    y: v - p.top + p.bottom,
    zoom: d
  };
}, Gn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Cn(e) {
  return e != null && e !== "parent";
}
function Kt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function $a(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function jh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Jh(e) {
  return { ...Vh, ...e || {} };
}
function lo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Qe(e), a = lr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? ar(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const el = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), tl = (e) => e?.getRootNode?.() || window?.document, $h = ["INPUT", "SELECT", "TEXTAREA"];
function nl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : $h.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const rl = (e) => "clientX" in e, Qe = (e, t) => {
  const n = rl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ns = (e, t, n, r, o) => {
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
      ...el(s)
    };
  });
};
function eg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function pr(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function rs({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case G.Left:
      return [t - pr(t - r, i), n];
    case G.Right:
      return [t + pr(r - t, i), n];
    case G.Top:
      return [t, n - pr(n - o, i)];
    case G.Bottom:
      return [t, n + pr(o - n, i)];
  }
}
function ol({ sourceX: e, sourceY: t, sourcePosition: n = G.Bottom, targetX: r, targetY: o, targetPosition: i = G.Top, curvature: s = 0.25 }) {
  const [a, l] = rs({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = rs({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = eg({
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
function il({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function tg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function ng({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Jr(Hr(e), Hr(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return qn(s, $r(i)) > 0;
}
const rg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, og = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), ig = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || rg;
  let o;
  return Ga(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, og(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function sl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = il({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const os = {
  [G.Left]: { x: -1, y: 0 },
  [G.Right]: { x: 1, y: 0 },
  [G.Top]: { x: 0, y: -1 },
  [G.Bottom]: { x: 0, y: 1 }
}, sg = ({ source: e, sourcePosition: t = G.Bottom, target: n }) => t === G.Left || t === G.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, is = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function ag({ source: e, sourcePosition: t = G.Bottom, target: n, targetPosition: r = G.Top, center: o, offset: i, stepPosition: s }) {
  const a = os[t], l = os[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = sg({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], _, p;
  const w = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , k, b] = il({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (_ = o.x ?? c.x + (d.x - c.x) * s, p = o.y ?? (c.y + d.y) / 2) : (_ = o.x ?? (c.x + d.x) / 2, p = o.y ?? c.y + (d.y - c.y) * s);
    const I = [
      { x: _, y: c.y },
      { x: _, y: d.y }
    ], z = [
      { x: c.x, y: p },
      { x: d.x, y: p }
    ];
    a[f] === g ? v = f === "x" ? I : z : v = f === "x" ? z : I;
  } else {
    const I = [{ x: c.x, y: d.y }], z = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === g ? z : I : v = a.y === g ? I : z, t === r) {
      const x = Math.abs(e[f] - n[f]);
      if (x <= i) {
        const N = Math.min(i - 1, i - x);
        a[f] === g ? w[f] = (c[f] > e[f] ? -1 : 1) * N : C[f] = (d[f] > n[f] ? -1 : 1) * N;
      }
    }
    if (t !== r) {
      const x = f === "x" ? "y" : "x", N = a[f] === l[x], m = c[x] > d[x], S = c[x] < d[x];
      (a[f] === 1 && (!N && m || N && S) || a[f] !== 1 && (!N && S || N && m)) && (v = f === "x" ? I : z);
    }
    const M = { x: c.x + w.x, y: c.y + w.y }, V = { x: d.x + C.x, y: d.y + C.y }, Y = Math.max(Math.abs(M.x - v[0].x), Math.abs(V.x - v[0].x)), P = Math.max(Math.abs(M.y - v[0].y), Math.abs(V.y - v[0].y));
    Y >= P ? (_ = (M.x + V.x) / 2, p = v[0].y) : (_ = v[0].x, p = (M.y + V.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...v,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], _, p, k, b];
}
function lg(e, t, n, r) {
  const o = Math.min(is(e, t) / 2, is(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function di({ sourceX: e, sourceY: t, sourcePosition: n = G.Bottom, targetX: r, targetY: o, targetPosition: i = G.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, _] = ag({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((w, C, k) => {
    let b = "";
    return k > 0 && k < h.length - 1 ? b = lg(h[k - 1], C, h[k + 1], s) : b = `${k === 0 ? "M" : "L"}${C.x} ${C.y}`, w += b, w;
  }, ""), f, g, v, _];
}
function ss(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function cg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ss(t) || !ss(n))
    return null;
  const r = t.internals.handleBounds || as(t.handles), o = n.internals.handleBounds || as(n.handles), i = ls(r?.source ?? [], e.sourceHandle), s = ls(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === En.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Wn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || G.Bottom, l = s?.position || G.Top, c = tn(t, i, a), d = tn(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function as(e) {
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
function tn(e, t, n = G.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Kt(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case G.Top:
      return { x: o + s / 2, y: i };
    case G.Right:
      return { x: o + s, y: i + a / 2 };
    case G.Bottom:
      return { x: o + s / 2, y: i + a };
    case G.Left:
      return { x: o, y: i + a / 2 };
  }
}
function ls(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Oo(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function ug(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Oo(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const al = 1e3, dg = 10, fi = {
  nodeOrigin: [0, 0],
  nodeExtent: Io,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, fg = {
  ...fi,
  checkEquality: !0
};
function hi(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function hg(e, t, n) {
  const r = hi(fi, n);
  for (const o of e.values())
    if (o.parentId)
      vi(o, e, t, r);
    else {
      const i = ir(o, r.nodeOrigin), s = Cn(o.extent) ? o.extent : r.nodeExtent, a = en(i, s, Kt(o));
      o.internals.positionAbsolute = a;
    }
}
function gg(e, t) {
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
function gi(e) {
  return e === "manual";
}
function vg(e, t, n, r = {}) {
  const o = hi(fg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !gi(o.zIndexMode) ? al : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = ir(c, o.nodeOrigin), f = Cn(c.extent) ? c.extent : o.nodeExtent, g = en(h, f, Kt(c));
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
          handleBounds: gg(c, d),
          z: ll(c, a, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), c.parentId && vi(d, t, n, r, i);
  }
  return l;
}
function pg(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function vi(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = hi(fi, r), c = e.parentId, d = t.get(c);
  if (!d) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  pg(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && l === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * dg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !gi(l) ? al : 0, { x: f, y: g, z: v } = mg(e, d, s, a, h, l), { positionAbsolute: _ } = e.internals, p = f !== _.x || g !== _.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: f, y: g } : _,
      z: v
    }
  });
}
function ll(e, t, n) {
  const r = yt(e.zIndex) ? e.zIndex : 0;
  return gi(n) ? r : r + (e.selected ? t : 0);
}
function mg(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Kt(e), c = ir(e, n), d = Cn(e.extent) ? en(c, e.extent, l) : c;
  let h = en({ x: s + d.x, y: a + d.y }, r, l);
  e.extent === "parent" && (h = Qa(h, l, t));
  const f = ll(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function yg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? kn(a), c = Ja(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Kt(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), _ = Math.max(d.height, Math.round(s.height)), p = (v - d.width) * h[0], w = (_ - d.height) * h[1];
    (f > 0 || g > 0 || p || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + p,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((C) => {
      e.some((k) => k.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + f,
          y: C.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - p : 0),
        height: _ + (g ? h[1] * g - w : 0)
      }
    });
  }), o;
}
function _g(e, t, n, r, o, i, s) {
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
    const _ = el(g.nodeElement), p = v.measured.width !== _.width || v.measured.height !== _.height;
    if (!!(_.width && _.height && (p || !v.internals.handleBounds || g.force))) {
      const C = g.nodeElement.getBoundingClientRect(), k = Cn(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = Qa(b, _, t.get(v.parentId)) : k && (b = en(b, k, _));
      const A = {
        ...v,
        measured: _,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: ns("source", g.nodeElement, C, h, v.id),
            target: ns("target", g.nodeElement, C, h, v.id)
          }
        }
      };
      t.set(v.id, A), v.parentId && vi(A, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, p && (c.push({
        id: v.id,
        type: "dimensions",
        dimensions: _
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: kn(A, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = yg(f, t, n, o);
    c.push(...g);
  }
  return { changes: c, updatedInternals: l };
}
async function wg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function cs(e, t, n, r, o, i) {
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
function bg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    cs("source", l, d, e, o, s), cs("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function cl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : cl(n, t) : !1;
}
function us(e, t, n) {
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
function xg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !cl(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function co({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function Eg({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ar(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Sg({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, _ = null;
  function p({ noDragClassName: C, handleSelector: k, domNode: b, isSelectable: A, nodeId: I, nodeClickDistance: z = 0 }) {
    f = Ze(b);
    function M({ x, y: N }) {
      const { nodeLookup: m, nodeExtent: S, snapGrid: E, snapToGrid: T, nodeOrigin: R, onNodeDrag: D, onSelectionDrag: H, onError: B, updateNodePositions: X } = t();
      i = { x, y: N };
      let Z = !1;
      const K = a.size > 1, Q = K && S ? zo(sr(a)) : null, W = K && T ? Eg({
        dragItems: a,
        snapGrid: E,
        x,
        y: N
      }) : null;
      for (const [q, j] of a) {
        if (!m.has(q))
          continue;
        let fe = { x: x - j.distance.x, y: N - j.distance.y };
        T && (fe = W ? {
          x: Math.round(fe.x + W.x),
          y: Math.round(fe.y + W.y)
        } : ar(fe, E));
        let be = null;
        if (K && S && !j.extent && Q) {
          const { positionAbsolute: ne } = j.internals, Me = ne.x - Q.x + S[0][0], kt = ne.x + j.measured.width - Q.x2 + S[1][0], Ct = ne.y - Q.y + S[0][1], dt = ne.y + j.measured.height - Q.y2 + S[1][1];
          be = [
            [Me, Ct],
            [kt, dt]
          ];
        }
        const { position: $, positionAbsolute: pe } = Ua({
          nodeId: q,
          nextPosition: fe,
          nodeLookup: m,
          nodeExtent: be || S,
          nodeOrigin: R,
          onError: B
        });
        Z = Z || j.position.x !== $.x || j.position.y !== $.y, j.position = $, j.internals.positionAbsolute = pe;
      }
      if (v = v || Z, !!Z && (X(a, !0), _ && (r || D || !I && H))) {
        const [q, j] = co({
          nodeId: I,
          dragItems: a,
          nodeLookup: m
        });
        r?.(_, a, q, j), D?.(_, q, j), I || H?.(_, j);
      }
    }
    async function V() {
      if (!d)
        return;
      const { transform: x, panBy: N, autoPanSpeed: m, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, T] = ja(c, d, m);
      (E !== 0 || T !== 0) && (i.x = (i.x ?? 0) - E / x[2], i.y = (i.y ?? 0) - T / x[2], await N({ x: E, y: T }) && M(i)), s = requestAnimationFrame(V);
    }
    function Y(x) {
      const { nodeLookup: N, multiSelectionActive: m, nodesDraggable: S, transform: E, snapGrid: T, snapToGrid: R, selectNodesOnDrag: D, onNodeDragStart: H, onSelectionDragStart: B, unselectNodesAndEdges: X } = t();
      h = !0, (!D || !A) && !m && I && (N.get(I)?.selected || X()), A && D && I && e?.(I);
      const Z = lo(x.sourceEvent, { transform: E, snapGrid: T, snapToGrid: R, containerBounds: d });
      if (i = Z, a = xg(N, S, Z, I), a.size > 0 && (n || H || !I && B)) {
        const [K, Q] = co({
          nodeId: I,
          dragItems: a,
          nodeLookup: N
        });
        n?.(x.sourceEvent, a, K, Q), H?.(x.sourceEvent, K, Q), I || B?.(x.sourceEvent, Q);
      }
    }
    const P = Xd().clickDistance(z).on("start", (x) => {
      const { domNode: N, nodeDragThreshold: m, transform: S, snapGrid: E, snapToGrid: T } = t();
      d = N?.getBoundingClientRect() || null, g = !1, v = !1, _ = x.sourceEvent, m === 0 && Y(x), i = lo(x.sourceEvent, { transform: S, snapGrid: E, snapToGrid: T, containerBounds: d }), c = Qe(x.sourceEvent, d);
    }).on("drag", (x) => {
      const { autoPanOnNodeDrag: N, transform: m, snapGrid: S, snapToGrid: E, nodeDragThreshold: T, nodeLookup: R } = t(), D = lo(x.sourceEvent, { transform: m, snapGrid: S, snapToGrid: E, containerBounds: d });
      if (_ = x.sourceEvent, (x.sourceEvent.type === "touchmove" && x.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      I && !R.has(I)) && (g = !0), !g) {
        if (!l && N && h && (l = !0, V()), !h) {
          const H = Qe(x.sourceEvent, d), B = H.x - c.x, X = H.y - c.y;
          Math.sqrt(B * B + X * X) > T && Y(x);
        }
        (i.x !== D.xSnapped || i.y !== D.ySnapped) && a && h && (c = Qe(x.sourceEvent, d), M(D));
      }
    }).on("end", (x) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: m, onNodeDragStop: S, onSelectionDragStop: E } = t();
        if (v && (m(a, !1), v = !1), o || S || !I && E) {
          const [T, R] = co({
            nodeId: I,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(x.sourceEvent, a, T, R), S?.(x.sourceEvent, T, R), I || E?.(x.sourceEvent, R);
        }
      }
    }).filter((x) => {
      const N = x.target;
      return !x.button && (!C || !us(N, `.${C}`, b)) && (!k || us(N, k, b));
    });
    f.call(P);
  }
  function w() {
    f?.on(".drag", null);
  }
  return {
    update: p,
    destroy: w
  };
}
function kg(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    qn(o, kn(i)) > 0 && r.push(i);
  return r;
}
const Cg = 250;
function Ng(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = kg(e, n, t + Cg);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: h } = tn(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
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
function ul(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...tn(s, l, l.position, !0) } : l;
}
function dl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Pg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const fl = () => !0;
function Mg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: _, onConnectEnd: p, isValidConnection: w = fl, onReconnectEnd: C, updateConnection: k, getTransform: b, getFromHandle: A, autoPanSpeed: I, dragThreshold: z = 1, handleDomNode: M }) {
  const V = tl(e.target);
  let Y = 0, P;
  const { x, y: N } = Qe(e), m = dl(i, M), S = a?.getBoundingClientRect();
  let E = !1;
  if (!S || !m)
    return;
  const T = ul(o, m, r, l, t);
  if (!T)
    return;
  let R = Qe(e, S), D = !1, H = null, B = !1, X = null;
  function Z() {
    if (!d || !S)
      return;
    const [$, pe] = ja(R, S, I);
    f({ x: $, y: pe }), Y = requestAnimationFrame(Z);
  }
  const K = {
    ...T,
    nodeId: o,
    type: m,
    position: T.position
  }, Q = l.get(o);
  let q = {
    inProgress: !0,
    isValid: null,
    from: tn(Q, K, G.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: Q,
    to: R,
    toHandle: null,
    toPosition: Ji[K.position],
    toNode: null,
    pointer: R
  };
  function j() {
    E = !0, k(q), v?.(e, { nodeId: o, handleId: r, handleType: m });
  }
  z === 0 && j();
  function fe($) {
    if (!E) {
      const { x: dt, y: de } = Qe($), ye = dt - x, We = de - N;
      if (!(ye * ye + We * We > z * z))
        return;
      j();
    }
    if (!A() || !K) {
      be($);
      return;
    }
    const pe = b();
    R = Qe($, S), P = Ng(lr(R, pe, !1, [1, 1]), n, l, K), D || (Z(), D = !0);
    const ne = hl($, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: V,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    X = ne.handleDomNode, H = ne.connection, B = Pg(!!P, ne.isValid);
    const Me = l.get(o), kt = Me ? tn(Me, K, G.Left, !0) : q.from, Ct = {
      ...q,
      from: kt,
      isValid: B,
      to: ne.toHandle && B ? Lr({ x: ne.toHandle.x, y: ne.toHandle.y }, pe) : R,
      toHandle: ne.toHandle,
      toPosition: B && ne.toHandle ? ne.toHandle.position : Ji[K.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null,
      pointer: R
    };
    k(Ct), q = Ct;
  }
  function be($) {
    if (!("touches" in $ && $.touches.length > 0)) {
      if (E) {
        (P || X) && H && B && _?.(H);
        const { inProgress: pe, ...ne } = q, Me = {
          ...ne,
          toPosition: q.toHandle ? q.toPosition : null
        };
        p?.($, Me), i && C?.($, Me);
      }
      g(), cancelAnimationFrame(Y), D = !1, B = !1, H = null, X = null, V.removeEventListener("mousemove", fe), V.removeEventListener("mouseup", be), V.removeEventListener("touchmove", fe), V.removeEventListener("touchend", be);
    }
  }
  V.addEventListener("mousemove", fe), V.addEventListener("mouseup", be), V.addEventListener("touchmove", fe), V.addEventListener("touchend", be);
}
function hl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = fl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = Qe(e), _ = s.elementFromPoint(g, v), p = _?.classList.contains(`${a}-flow__handle`) ? _ : f, w = {
    handleDomNode: p,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (p) {
    const C = dl(void 0, p), k = p.getAttribute("data-nodeid"), b = p.getAttribute("data-handleid"), A = p.classList.contains("connectable"), I = p.classList.contains("connectableend");
    if (!k || !C)
      return w;
    const z = {
      source: h ? k : r,
      sourceHandle: h ? b : o,
      target: h ? r : k,
      targetHandle: h ? o : b
    };
    w.connection = z;
    const V = A && I && (n === En.Strict ? h && C === "source" || !h && C === "target" : k !== r || b !== o);
    w.isValid = V && c(z), w.toHandle = ul(k, C, b, d, n, !0);
  }
  return w;
}
const ds = {
  onPointerDown: Mg,
  isValid: hl
};
function Ag({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ze(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (k) => {
      if (k.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), A = k.sourceEvent.ctrlKey && Gn() ? 10 : 1, I = -k.sourceEvent.deltaY * (k.sourceEvent.deltaMode === 1 ? 0.05 : k.sourceEvent.deltaMode ? 1 : 2e-3) * d, z = b[2] * Math.pow(2, I * A);
      t.scaleTo(z);
    };
    let _ = [0, 0];
    const p = (k) => {
      (k.sourceEvent.type === "mousedown" || k.sourceEvent.type === "touchstart") && (_ = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ]);
    }, w = (k) => {
      const b = n();
      if (k.sourceEvent.type !== "mousemove" && k.sourceEvent.type !== "touchmove" || !t)
        return;
      const A = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ], I = [A[0] - _[0], A[1] - _[1]];
      _ = A;
      const z = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), M = {
        x: b[0] - I[0] * z,
        y: b[1] - I[1] * z
      }, V = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: b[2]
      }, V, a);
    }, C = Wa().on("start", p).on("zoom", h ? w : null).on("zoom.wheel", f ? v : null);
    o.call(C, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: qe
  };
}
const eo = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), uo = ({ x: e, y: t, zoom: n }) => jr.translate(e, t).scale(n), fn = (e, t) => e.target.closest(`.${t}`), gl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Tg = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, fo = (e, t = 0, n = Tg, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, vl = (e) => {
  const t = e.ctrlKey && Gn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Ig({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (fn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const p = qe(d), w = vl(d), C = h * Math.pow(2, w);
      r.scaleTo(n, C, p, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === vn.Vertical ? 0 : d.deltaX * f, v = o === vn.Horizontal ? 0 : d.deltaY * f;
    !Gn() && d.shiftKey && o !== vn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = eo(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, _), e.panScrollTimeout = setTimeout(() => {
      c?.(d, _), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, _));
  };
}
function Dg({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = fn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function zg({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = eo(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Og({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && gl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, eo(i.transform));
  };
}
function Rg({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && gl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = eo(s.transform);
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
function Hg({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (fn(h, `${c}-flow__node`) || fn(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || fn(h, a) && v || fn(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const _ = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && _;
  };
}
function Lg({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = Wa().scaleExtent([t, n]).translateExtent(r), f = Ze(e).call(h);
  C({
    x: o.x,
    y: o.y,
    zoom: Sn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(vl);
  function _(P, x) {
    return f ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Ln : wr).transform(fo(f, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function p({ noWheelClassName: P, noPanClassName: x, onPaneContextMenu: N, userSelectionActive: m, panOnScroll: S, panOnDrag: E, panOnScrollMode: T, panOnScrollSpeed: R, preventScrolling: D, zoomOnPinch: H, zoomOnScroll: B, zoomOnDoubleClick: X, zoomActivationKeyPressed: Z, lib: K, onTransformChange: Q, connectionInProgress: W, paneClickDistance: q, selectionOnDrag: j }) {
    m && !c.isZoomingOrPanning && w();
    const fe = S && !Z && !m;
    h.clickDistance(j ? 1 / 0 : !yt(q) || q < 0 ? 0 : q);
    const be = fe ? Ig({
      zoomPanValues: c,
      noWheelClassName: P,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: T,
      panOnScrollSpeed: R,
      zoomOnPinch: H,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Dg({
      noWheelClassName: P,
      preventScrolling: D,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", be, { passive: !1 }), !m) {
      const pe = zg({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const ne = Og({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: Q
      });
      h.on("zoom", ne);
      const Me = Rg({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: S,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", Me);
    }
    const $ = Hg({
      zoomActivationKeyPressed: Z,
      panOnDrag: E,
      zoomOnScroll: B,
      panOnScroll: S,
      zoomOnDoubleClick: X,
      zoomOnPinch: H,
      userSelectionActive: m,
      noPanClassName: x,
      noWheelClassName: P,
      lib: K,
      connectionInProgress: W
    });
    h.filter($), X ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function w() {
    h.on("zoom", null);
  }
  async function C(P, x, N) {
    const m = uo(P), S = h?.constrain()(m, x, N);
    return S && await _(S), new Promise((E) => E(S));
  }
  async function k(P, x) {
    const N = uo(P);
    return await _(N, x), new Promise((m) => m(N));
  }
  function b(P) {
    if (f) {
      const x = uo(P), N = f.property("__zoom");
      (N.k !== P.zoom || N.x !== P.x || N.y !== P.y) && h?.transform(f, x, null, { sync: !0 });
    }
  }
  function A() {
    const P = f ? Xa(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function I(P, x) {
    return f ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Ln : wr).scaleTo(fo(f, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function z(P, x) {
    return f ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Ln : wr).scaleBy(fo(f, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function M(P) {
    h?.scaleExtent(P);
  }
  function V(P) {
    h?.translateExtent(P);
  }
  function Y(P) {
    const x = !yt(P) || P < 0 ? 0 : P;
    h?.clickDistance(x);
  }
  return {
    update: p,
    destroy: w,
    setViewport: k,
    setViewportConstrained: C,
    getViewport: A,
    scaleTo: I,
    scaleBy: z,
    setScaleExtent: M,
    setTranslateExtent: V,
    syncViewport: b,
    setClickDistance: Y
  };
}
var fs;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(fs || (fs = {}));
function pi() {
  const e = {};
  return [
    (t) => {
      if (t && !tc(e))
        throw new Error(t);
      return Fo(e);
    },
    (t) => Ds(e, t)
  ];
}
const [Vg, Bg] = pi(), [Fg, Kg] = pi(), [Yg, Zg] = pi();
var Xg = /* @__PURE__ */ oe("<div><!></div>");
function Ht(e, t) {
  ee(t, !0);
  let n = L(t, "id", 3, null), r = L(t, "type", 3, "source"), o = L(t, "position", 19, () => G.Top), i = L(t, "isConnectableStart", 3, !0), s = L(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Ft(t, [
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
  const l = Vg("Handle must be used within a Custom Node component"), c = Fg("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ y(() => r() === "target"), h = /* @__PURE__ */ y(() => t.isConnectable !== void 0 ? t.isConnectable : c.value), f = Yt(), g = /* @__PURE__ */ y(() => f.ariaLabelConfig), v = null;
  Go(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let x = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !Bh(x, v)) {
        const N = x ?? /* @__PURE__ */ new Map();
        $i(v, N, t.ondisconnect), $i(N, v, t.onconnect);
      }
      v = new Map(x);
    }
  });
  let _ = /* @__PURE__ */ y(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: x, toHandle: N, isValid: m } = f.connection, S = x && x.nodeId === l && x.type === r() && x.id === n(), E = N && N.nodeId === l && N.type === r() && N.id === n(), T = f.connectionMode === En.Strict ? x?.type !== r() : l !== x?.nodeId || n() !== x?.id;
    return [
      !0,
      S,
      E,
      T,
      E && m
    ];
  }), p = /* @__PURE__ */ y(() => Un(u(_), 5)), w = /* @__PURE__ */ y(() => u(p)[0]), C = /* @__PURE__ */ y(() => u(p)[1]), k = /* @__PURE__ */ y(() => u(p)[2]), b = /* @__PURE__ */ y(() => u(p)[3]), A = /* @__PURE__ */ y(() => u(p)[4]);
  function I(x) {
    const N = f.onbeforeconnect ? f.onbeforeconnect(x) : x;
    N && (f.addEdge(N), f.onconnect?.(x));
  }
  function z(x) {
    const N = rl(x);
    x.currentTarget && (N && x.button === 0 || !N) && ds.onPointerDown(x, {
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
      onConnect: I,
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
    const N = tl(x.target), m = t.isValidConnection ?? f.isValidConnection, { connectionMode: S, clickConnectStartHandle: E, flowId: T, nodeLookup: R } = f, { connection: D, isValid: H } = ds.isValid(x, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: S,
      fromNodeId: E.nodeId,
      fromHandleId: E.id ?? null,
      fromType: E.type,
      isValidConnection: m,
      flowId: T,
      doc: N,
      lib: "svelte",
      nodeLookup: R
    });
    H && D && I(D);
    const B = structuredClone(Is(f.connection));
    delete B.inProgress, B.toPosition = B.toHandle ? B.toHandle.position : null, f.onclickconnectend?.(x, B), f.clickConnectStartHandle = null;
  }
  var V = Xg(), Y = () => {
  };
  Bt(V, () => ({
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
    onmousedown: z,
    ontouchstart: z,
    onclick: f.clickConnect ? M : void 0,
    onkeypress: Y,
    style: t.style,
    role: "button",
    "aria-label": u(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Pt]: {
      valid: u(A),
      connectingto: u(k),
      connectingfrom: u(C),
      source: !u(d),
      target: u(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: u(h),
      connectionindicator: u(h) && (!u(w) || u(b)) && (u(w) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var P = re(V);
  Le(P, () => t.children ?? nn), F(e, V), te();
}
var Wg = /* @__PURE__ */ oe("<!> <!>", 1);
function pl(e, t) {
  ee(t, !0);
  let n = L(t, "targetPosition", 19, () => G.Top), r = L(t, "sourcePosition", 19, () => G.Bottom);
  var o = Wg(), i = se(o);
  Ht(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = J(i), a = J(s);
  Ht(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ue(() => He(s, ` ${t.data?.label ?? ""} `)), F(e, o), te();
}
var qg = /* @__PURE__ */ oe(" <!>", 1);
function Gg(e, t) {
  ee(t, !0);
  let n = L(t, "data", 19, () => ({ label: "Node" })), r = L(t, "sourcePosition", 19, () => G.Bottom);
  var o = qg(), i = se(o), s = J(i);
  Ht(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ue(() => He(i, `${n()?.label ?? ""} `)), F(e, o), te();
}
var Ug = /* @__PURE__ */ oe(" <!>", 1);
function Qg(e, t) {
  ee(t, !0);
  let n = L(t, "data", 19, () => ({ label: "Node" })), r = L(t, "targetPosition", 19, () => G.Top);
  var o = Ug(), i = se(o), s = J(i);
  Ht(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ue(() => He(i, `${n()?.label ?? ""} `)), F(e, o), te();
}
function jg(e, t) {
}
function ho(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Jg(e, t) {
  const n = /* @__PURE__ */ y(Yt), r = /* @__PURE__ */ y(() => u(n).domNode);
  let o;
  return u(r) ? ho(e, u(r), t) : o = Us(() => {
    at(() => {
      ho(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      ho(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function $g() {
  let e = /* @__PURE__ */ ae(typeof window > "u");
  if (u(e)) {
    const t = Us(() => {
      at(() => {
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
const hs = (e) => Kh(e), ev = (e) => Ga(e);
function ct(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Vr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var tv = /* @__PURE__ */ oe("<div><!></div>");
function nv(e, t) {
  ee(t, !0);
  let n = L(t, "x", 3, 0), r = L(t, "y", 3, 0), o = L(t, "selectEdgeOnClick", 3, !1), i = L(t, "transparent", 3, !1), s = /* @__PURE__ */ Ft(t, [
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
  const a = Yt(), l = Yg("EdgeLabel must be used within a Custom Edge component");
  let c = /* @__PURE__ */ y(() => a.visible.edges.get(l)?.zIndex);
  var d = tv(), h = () => {
    o() && l && a.handleEdgeSelection(l);
  };
  Bt(
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
      [vt]: g
    }),
    [
      () => ({
        display: $g().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: ct(t.width),
        height: ct(t.height),
        "z-index": u(c)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = re(d);
  Le(f, () => t.children ?? nn), Ne(d, (g, v) => Jg?.(g, v), () => "edge-labels"), F(e, d), te();
}
var rv = /* @__PURE__ */ me("<path></path>"), ov = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function to(e, t) {
  let n = L(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Ft(t, [
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
  var o = ov(), i = se(o), s = J(i);
  {
    var a = (d) => {
      var h = rv();
      Bt(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), F(d, h);
    };
    ce(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var l = J(s);
  {
    var c = (d) => {
      nv(d, {
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
          var g = Oc();
          ue(() => He(g, t.label)), F(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    ce(l, (d) => {
      t.label && d(c);
    });
  }
  ue(() => {
    U(i, "id", t.id), U(i, "d", t.path), Je(i, 0, Vt(["svelte-flow__edge-path", t.class])), U(i, "marker-start", t.markerStart), U(i, "marker-end", t.markerEnd), Be(i, t.style);
  }), F(e, o);
}
function ml(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => ol({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ y(() => Un(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  to(e, {
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
function iv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => di({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ y(() => Un(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  to(e, {
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
function sv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => sl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ y(() => Un(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  to(e, {
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
function av(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => di({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ y(() => Un(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  to(e, {
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
class lv {
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
const cv = /\(.+\)/, uv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class dv extends lv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = cv.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => uv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => bo(o, "change", i)
    );
  }
}
function fv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ci(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function gs(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: c } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: p, transform: w, width: C, height: k } = e;
      if (ng({
        sourceNode: f,
        targetNode: g,
        width: C,
        height: k,
        transform: w
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
    const _ = cg({
      id: h.id,
      sourceNode: f,
      targetNode: g,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    _ && d.set(h.id, {
      ...n,
      ...h,
      ..._,
      zIndex: tg({
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
const yl = {
  input: Gg,
  output: Qg,
  default: pl,
  group: jg
}, _l = {
  straight: sv,
  smoothstep: iv,
  default: ml,
  step: av
};
function hv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = sr(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ui(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function gv(e) {
  class t {
    #e = /* @__PURE__ */ y(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      O(this.#e, r);
    }
    #t = /* @__PURE__ */ ae(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      O(this.#t, r);
    }
    #n = /* @__PURE__ */ ae(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      O(this.#n, r);
    }
    #r = /* @__PURE__ */ ae(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      O(this.#r, r);
    }
    #l = /* @__PURE__ */ ae(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      O(this.#l, r);
    }
    #i = /* @__PURE__ */ ae(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return u(this.#i);
    }
    set zIndexMode(r) {
      O(this.#i, r);
    }
    #o = /* @__PURE__ */ y(() => {
      const r = vg(e.nodes, this.nodeLookup, this.parentLookup, {
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
    #a = /* @__PURE__ */ y(() => (bg(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
        const { viewport: _, width: p, height: w } = this, C = [_.x, _.y, _.zoom];
        f = fv(s, C, p, w), g = gs({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: C,
          width: p,
          height: w
        });
      } else
        f = this.nodeLookup, g = gs(v);
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
    #_ = /* @__PURE__ */ y(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#_);
    }
    set nodesFocusable(r) {
      O(this.#_, r);
    }
    #w = /* @__PURE__ */ y(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      O(this.#w, r);
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
    #y = /* @__PURE__ */ y(() => e.props.nodeExtent ?? Io);
    get nodeExtent() {
      return u(this.#y);
    }
    set nodeExtent(r) {
      O(this.#y, r);
    }
    #x = /* @__PURE__ */ y(() => e.props.translateExtent ?? Io);
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
    #T = /* @__PURE__ */ ae(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      O(this.#T, r);
    }
    #I = /* @__PURE__ */ ae(null);
    get selectionRect() {
      return u(this.#I);
    }
    set selectionRect(r) {
      O(this.#I, r);
    }
    #D = /* @__PURE__ */ ae(!1);
    get selectionKeyPressed() {
      return u(this.#D);
    }
    set selectionKeyPressed(r) {
      O(this.#D, r);
    }
    #z = /* @__PURE__ */ ae(!1);
    get multiselectionKeyPressed() {
      return u(this.#z);
    }
    set multiselectionKeyPressed(r) {
      O(this.#z, r);
    }
    #O = /* @__PURE__ */ ae(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      O(this.#O, r);
    }
    #R = /* @__PURE__ */ ae(!1);
    get panActivationKeyPressed() {
      return u(this.#R);
    }
    set panActivationKeyPressed(r) {
      O(this.#R, r);
    }
    #H = /* @__PURE__ */ ae(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      O(this.#H, r);
    }
    #L = /* @__PURE__ */ ae(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      O(this.#L, r);
    }
    #V = /* @__PURE__ */ ae("");
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
    #F = /* @__PURE__ */ y(() => ({ ...yl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      O(this.#F, r);
    }
    #K = /* @__PURE__ */ y(() => ({ ..._l, ...e.props.edgeTypes }));
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
    #W = /* @__PURE__ */ y(() => Jh(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      O(this.#W, r);
    }
    #q = /* @__PURE__ */ ae(hv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
      /* @__PURE__ */ ae(Do)
    );
    get _connection() {
      return u(this.#G);
    }
    set _connection(r) {
      O(this.#G, r);
    }
    #U = /* @__PURE__ */ y(() => this._connection.inProgress ? {
      ...this._connection,
      to: lr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#U);
    }
    set connection(r) {
      O(this.#U, r);
    }
    #Q = /* @__PURE__ */ y(() => e.props.connectionMode ?? En.Strict);
    get connectionMode() {
      return u(this.#Q);
    }
    set connectionMode(r) {
      O(this.#Q, r);
    }
    #j = /* @__PURE__ */ y(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#j);
    }
    set connectionRadius(r) {
      O(this.#j, r);
    }
    #J = /* @__PURE__ */ y(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#J);
    }
    set isValidConnection(r) {
      O(this.#J, r);
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
    #te = /* @__PURE__ */ y(() => ug(e.edges, {
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
    #re = /* @__PURE__ */ y(() => e.props.onflowerror ?? Gh);
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
    #me = /* @__PURE__ */ ae(null);
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
    #_e = /* @__PURE__ */ y(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#_e);
    }
    set onselectiondragstart(r) {
      O(this.#_e, r);
    }
    #we = /* @__PURE__ */ y(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      O(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Wh(
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
    _prefersDark = new dv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
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
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Do, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Yt() {
  const e = Fo(Ro);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ro = /* @__PURE__ */ Symbol();
function vv(e) {
  const t = gv(e);
  function n(P) {
    t.nodeTypes = {
      ...yl,
      ...P
    };
  }
  function r(P) {
    t.edgeTypes = {
      ..._l,
      ...P
    };
  }
  function o(P) {
    t.edges = ig(P, t.edges);
  }
  const i = (P, x = !1) => {
    t.nodes = t.nodes.map((N) => {
      if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
        const S = t.nodeLookup.get(N.id);
        S && (t.connection = {
          ...t.connection,
          from: tn(S, t.connection.fromHandle, G.Left, !0)
        });
      }
      const m = P.get(N.id);
      return m ? { ...N, position: m.position, dragging: x } : N;
    });
  };
  function s(P) {
    const { changes: x, updatedInternals: N } = _g(P, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!N)
      return;
    hg(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const m = /* @__PURE__ */ new Map();
    for (const S of x) {
      const E = t.nodeLookup.get(S.id)?.internals.userNode;
      if (!E)
        continue;
      const T = { ...E };
      switch (S.type) {
        case "dimensions": {
          const R = { ...T.measured, ...S.dimensions };
          S.setAttributes && (T.width = S.dimensions?.width ?? T.width, T.height = S.dimensions?.height ?? T.height), T.measured = R;
          break;
        }
        case "position":
          T.position = S.position ?? T.position;
          break;
      }
      m.set(S.id, T);
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
  function _(P, x = null) {
    let N = !1;
    const m = P.map((S) => (x ? x.has(S.id) : !0) && S.selected ? (N = !0, { ...S, selected: !1 }) : S);
    return [N, m];
  }
  function p(P) {
    const x = P?.nodes ? new Set(P.nodes.map((R) => R.id)) : null, [N, m] = _(t.nodes, x);
    N && (t.nodes = m);
    const S = P?.edges ? new Set(P.edges.map((R) => R.id)) : null, [E, T] = _(t.edges, S);
    E && (t.edges = T);
  }
  function w(P) {
    const x = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((N) => {
      const m = P.includes(N.id), S = x && N.selected || m;
      return !!N.selected !== S ? { ...N, selected: S } : N;
    }), x || p({ nodes: [] });
  }
  function C(P) {
    const x = t.multiselectionKeyPressed;
    t.edges = t.edges.map((N) => {
      const m = P.includes(N.id), S = x && N.selected || m;
      return !!N.selected !== S ? { ...N, selected: S } : N;
    }), x || p({ edges: [] });
  }
  function k(P, x, N) {
    const m = t.nodeLookup.get(P);
    if (!m) {
      console.warn("012", Wn.error012(P));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, m.selected ? (x || m.selected && t.multiselectionKeyPressed) && (p({ nodes: [m], edges: [] }), requestAnimationFrame(() => N?.blur())) : w([P]);
  }
  function b(P) {
    const x = t.edgeLookup.get(P);
    if (!x) {
      console.warn("012", Wn.error012(P));
      return;
    }
    (x.selectable || t.elementsSelectable && typeof x.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, x.selected ? x.selected && t.multiselectionKeyPressed && p({ nodes: [], edges: [x] }) : C([P]));
  }
  function A(P, x) {
    const { nodeExtent: N, snapGrid: m, nodeOrigin: S, nodeLookup: E, nodesDraggable: T, onerror: R } = t, D = /* @__PURE__ */ new Map(), H = m?.[0] ?? 5, B = m?.[1] ?? 5, X = P.x * H * x, Z = P.y * B * x;
    for (const K of E.values()) {
      if (!(K.selected && (K.draggable || T && typeof K.draggable > "u")))
        continue;
      let W = {
        x: K.internals.positionAbsolute.x + X,
        y: K.internals.positionAbsolute.y + Z
      };
      m && (W = ar(W, m));
      const { position: q, positionAbsolute: j } = Ua({
        nodeId: K.id,
        nextPosition: W,
        nodeLookup: E,
        nodeExtent: N,
        nodeOrigin: S,
        onError: R
      });
      K.position = q, K.internals.positionAbsolute = j, D.set(K.id, K);
    }
    i(D);
  }
  function I(P) {
    return wg({
      delta: P,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const z = (P) => {
    t._connection = { ...P };
  };
  function M() {
    t._connection = Do;
  }
  function V() {
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
    addSelectedNodes: w,
    addSelectedEdges: C,
    handleNodeSelection: k,
    handleEdgeSelection: b,
    moveSelectedNodes: A,
    panBy: I,
    updateConnection: z,
    cancelConnection: M,
    reset: V
  });
}
function pv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: h } = t, f = Lg({
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
var mv = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function yv(e, t) {
  ee(t, !0);
  let n = L(t, "store", 15), r = /* @__PURE__ */ y(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ y(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  at(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = mv(), l = re(a);
  Le(l, () => t.children), Ne(a, (c, d) => pv?.(c, d), () => ({
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
  })), F(e, a), te();
}
function vs(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function ps(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function ms(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var _v = /* @__PURE__ */ oe("<div><!></div>");
function wv(e, t) {
  ee(t, !0);
  let n = L(t, "store", 15), r = L(t, "panOnDrag", 3, !0), o = L(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ y(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ y(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && u(c) !== !0), h = /* @__PURE__ */ y(() => n().elementsSelectable && (u(d) || n().selectionRectMode === "user")), f = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const V = M.target === i, Y = !V && !!M.target.closest(".nokey"), P = t.selectionOnDrag && V || n().selectionKeyPressed;
    if (Y || !u(d) || !P || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), f = !1;
    const { x, y: N } = Qe(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: x, startY: N, x, y: N }, !0), V || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!u(d) || !s || !n().selectionRect)
      return;
    const V = Qe(M, s), { startX: Y = 0, startY: P = 0 } = n().selectionRect;
    if (!f) {
      const E = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(V.x - Y, V.y - P) <= E)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    f = !0;
    const x = {
      ...n().selectionRect,
      x: V.x < Y ? V.x : Y,
      y: V.y < P ? V.y : P,
      width: Math.abs(V.x - Y),
      height: Math.abs(V.y - P)
    }, N = a, m = l;
    a = new Set(ci(
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
      const T = n().connectionLookup.get(E);
      if (T)
        for (const { edgeId: R } of T.values()) {
          const D = n().edgeLookup.get(R);
          D && (D.selectable ?? S) && l.add(R);
        }
    }
    ms(N, a) || n(n().nodes = n().nodes.map(ps(a)), !0), ms(m, l) || n(n().edges = n().edges.map(ps(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = x, !0);
  }
  function _(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !f && M.target === i && C?.(M), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(M));
  }
  const p = (M) => {
    if (Array.isArray(u(c)) && u(c).includes(2)) {
      M.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: M });
  }, w = (M) => {
    f && (M.stopPropagation(), f = !1);
  };
  function C(M) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: M }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var k = _v();
  let b;
  var A = /* @__PURE__ */ y(() => u(h) ? void 0 : vs(C, i));
  k.__click = function(...M) {
    u(A)?.apply(this, M);
  }, k.__pointermove = function(...M) {
    (u(h) ? v : void 0)?.apply(this, M);
  }, k.__pointerup = function(...M) {
    (u(h) ? _ : void 0)?.apply(this, M);
  };
  var I = /* @__PURE__ */ y(() => vs(p, i));
  k.__contextmenu = function(...M) {
    u(I)?.apply(this, M);
  };
  var z = re(k);
  Le(z, () => t.children), nr(k, (M) => i = M, () => i), ue((M) => b = Je(k, 1, "svelte-flow__pane svelte-flow__container", null, b, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(d)
    })
  ]), Nr(
    "pointerdown",
    k,
    function(...M) {
      (u(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), Nr(
    "click",
    k,
    function(...M) {
      (u(h) ? w : void 0)?.apply(this, M);
    },
    !0
  ), F(e, k), te();
}
jo(["click", "pointermove", "pointerup", "contextmenu"]);
var bv = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function xv(e, t) {
  ee(t, !0);
  var n = bv();
  let r;
  var o = re(n);
  Le(o, () => t.children), ue(() => r = Be(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), F(e, n), te();
}
function wl(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Sg({
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
var Ev = /* @__PURE__ */ oe('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), Sv = /* @__PURE__ */ oe('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function kv(e, t) {
  ee(t, !0);
  var n = Sv(), r = se(n), o = re(r), i = J(r, 2), s = re(i), a = J(i, 2);
  {
    var l = (c) => {
      var d = Ev(), h = re(d);
      ue(() => {
        U(d, "id", `${Cv}-${t.store.flowId}`), He(h, t.store.ariaLiveMessage);
      }), F(c, d);
    };
    ce(a, (c) => {
      t.store.disableKeyboardA11y || c(l);
    });
  }
  ue(() => {
    U(r, "id", `${bl}-${t.store.flowId}`), He(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), U(i, "id", `${xl}-${t.store.flowId}`), He(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), F(e, n), te();
}
const bl = "svelte-flow__node-desc", xl = "svelte-flow__edge-desc", Cv = "svelte-flow__aria-live";
var Nv = /* @__PURE__ */ oe("<div><!></div>");
function Pv(e, t) {
  ee(t, !0);
  let n = L(t, "store", 15), r = /* @__PURE__ */ y(() => Ce(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ y(() => Ce(t.node.selected, !1)), i = /* @__PURE__ */ y(() => t.node.draggable), s = /* @__PURE__ */ y(() => t.node.selectable), a = /* @__PURE__ */ y(() => Ce(t.node.deletable, !0)), l = /* @__PURE__ */ y(() => t.node.connectable), c = /* @__PURE__ */ y(() => t.node.focusable), d = /* @__PURE__ */ y(() => Ce(t.node.hidden, !1)), h = /* @__PURE__ */ y(() => Ce(t.node.dragging, !1)), f = /* @__PURE__ */ y(() => Ce(t.node.style, "")), g = /* @__PURE__ */ y(() => t.node.class), v = /* @__PURE__ */ y(() => Ce(t.node.type, "default")), _ = /* @__PURE__ */ y(() => t.node.parentId), p = /* @__PURE__ */ y(() => t.node.sourcePosition), w = /* @__PURE__ */ y(() => t.node.targetPosition), C = /* @__PURE__ */ y(() => Ce(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), k = /* @__PURE__ */ y(() => Ce(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ y(() => t.node.initialWidth), A = /* @__PURE__ */ y(() => t.node.initialHeight), I = /* @__PURE__ */ y(() => t.node.width), z = /* @__PURE__ */ y(() => t.node.height), M = /* @__PURE__ */ y(() => t.node.dragHandle), V = /* @__PURE__ */ y(() => Ce(t.node.internals.z, 0)), Y = /* @__PURE__ */ y(() => t.node.internals.positionAbsolute.x), P = /* @__PURE__ */ y(() => t.node.internals.positionAbsolute.y), x = /* @__PURE__ */ y(() => t.node.internals.userNode), { id: N } = t.node, m = /* @__PURE__ */ y(() => u(i) ?? n().nodesDraggable), S = /* @__PURE__ */ y(() => u(s) ?? n().elementsSelectable), E = /* @__PURE__ */ y(() => u(l) ?? n().nodesConnectable), T = /* @__PURE__ */ y(() => $a(t.node)), R = /* @__PURE__ */ y(() => !!t.node.internals.handleBounds), D = /* @__PURE__ */ y(() => u(T) && u(R)), H = /* @__PURE__ */ y(() => u(c) ?? n().nodesFocusable);
  function B(de) {
    return n().parentLookup.has(de);
  }
  let X = /* @__PURE__ */ y(() => B(N)), Z = /* @__PURE__ */ ae(null), K = null, Q = u(v), W = u(p), q = u(w), j = /* @__PURE__ */ y(() => n().nodeTypes[u(v)] ?? pl), fe = /* @__PURE__ */ y(() => n().ariaLabelConfig), be = {
    get value() {
      return u(E);
    }
  };
  Bg(N), Kg(be);
  let $ = /* @__PURE__ */ y(() => {
    const de = u(C) === void 0 ? u(I) ?? u(b) : u(I), ye = u(k) === void 0 ? u(z) ?? u(A) : u(z);
    if (!(de === void 0 && ye === void 0 && u(f) === void 0))
      return `${u(f)};${de ? `width:${ct(de)};` : ""}${ye ? `height:${ct(ye)};` : ""}`;
  });
  at(() => {
    (u(v) !== Q || u(p) !== W || u(w) !== q) && u(Z) !== null && requestAnimationFrame(() => {
      u(Z) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[N, { id: N, nodeElement: u(Z), force: !0 }]]));
    }), Q = u(v), W = u(p), q = u(w);
  }), at(() => {
    t.resizeObserver && (!u(D) || u(Z) !== K) && (K && t.resizeObserver.unobserve(K), u(Z) && t.resizeObserver.observe(u(Z)), K = u(Z));
  }), ei(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function pe(de) {
    u(S) && (!n().selectNodesOnDrag || !u(m) || n().nodeDragThreshold > 0) && n().handleNodeSelection(N), t.onnodeclick?.({ node: u(x), event: de });
  }
  function ne(de) {
    if (!(nl(de) || n().disableKeyboardA11y))
      if (qa.includes(de.key) && u(S)) {
        const ye = de.key === "Escape";
        n().handleNodeSelection(N, ye, u(Z));
      } else u(m) && t.node.selected && Object.prototype.hasOwnProperty.call(Vr, de.key) && (de.preventDefault(), n(
        n().ariaLiveMessage = u(fe)["node.a11yDescription.ariaLiveMessage"]({
          direction: de.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Vr[de.key], de.shiftKey ? 4 : 1));
  }
  const Me = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(Z)?.matches(":focus-visible"))
      return;
    const { width: de, height: ye, viewport: We } = n();
    ci(/* @__PURE__ */ new Map([[N, t.node]]), { x: 0, y: 0, width: de, height: ye }, [We.x, We.y, We.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: We.zoom });
  };
  var kt = _e(), Ct = se(kt);
  {
    var dt = (de) => {
      var ye = Nv();
      Bt(ye, () => ({
        "data-id": N,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(v)}`,
          u(g)
        ],
        style: u($),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (ge) => t.onnodepointerenter({ node: u(x), event: ge }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ge) => t.onnodepointerleave({ node: u(x), event: ge }) : void 0,
        onpointermove: t.onnodepointermove ? (ge) => t.onnodepointermove({ node: u(x), event: ge }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ge) => t.onnodecontextmenu({ node: u(x), event: ge }) : void 0,
        onkeydown: u(H) ? ne : void 0,
        onfocus: u(H) ? Me : void 0,
        tabIndex: u(H) ? 0 : void 0,
        role: t.node.ariaRole ?? (u(H) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${bl}-${n().flowId}`,
        ...t.node.domAttributes,
        [Pt]: {
          dragging: u(h),
          selected: u(o),
          draggable: u(m),
          connectable: u(E),
          selectable: u(S),
          nopan: u(m),
          parent: u(X)
        },
        [vt]: {
          "z-index": u(V),
          transform: `translate(${u(Y) ?? ""}px, ${u(P) ?? ""}px)`,
          visibility: u(T) ? "visible" : "hidden"
        }
      }));
      var We = re(ye);
      Wr(We, () => u(j), (ge, an) => {
        an(ge, {
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
            return u(w);
          },
          get zIndex() {
            return u(V);
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
            return u(_);
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
            return u(I);
          },
          get height() {
            return u(z);
          }
        });
      }), Ne(ye, (ge, an) => wl?.(ge, an), () => ({
        nodeId: N,
        isSelectable: u(S),
        disabled: !u(m),
        handleSelector: u(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ge, an, Pn, Mn) => {
          t.onnodedrag?.({ event: ge, targetNode: Pn, nodes: Mn });
        },
        onDragStart: (ge, an, Pn, Mn) => {
          t.onnodedragstart?.({ event: ge, targetNode: Pn, nodes: Mn });
        },
        onDragStop: (ge, an, Pn, Mn) => {
          t.onnodedragstop?.({ event: ge, targetNode: Pn, nodes: Mn });
        },
        store: n()
      })), nr(ye, (ge) => O(Z, ge), () => u(Z)), F(de, ye);
    };
    ce(Ct, (de) => {
      u(d) || de(dt);
    });
  }
  F(e, kt), te();
}
var Mv = /* @__PURE__ */ oe('<div class="svelte-flow__nodes"></div>');
function Av(e, t) {
  ee(t, !0);
  let n = L(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  ei(() => {
    r?.disconnect();
  });
  var o = Mv();
  wn(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    Pv(i, {
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
  }), F(e, o), te();
}
var Tv = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Iv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ y(() => t.edge.id), r = /* @__PURE__ */ y(() => t.edge.source), o = /* @__PURE__ */ y(() => t.edge.target), i = /* @__PURE__ */ y(() => t.edge.sourceX), s = /* @__PURE__ */ y(() => t.edge.sourceY), a = /* @__PURE__ */ y(() => t.edge.targetX), l = /* @__PURE__ */ y(() => t.edge.targetY), c = /* @__PURE__ */ y(() => t.edge.sourcePosition), d = /* @__PURE__ */ y(() => t.edge.targetPosition), h = /* @__PURE__ */ y(() => Ce(t.edge.animated, !1)), f = /* @__PURE__ */ y(() => Ce(t.edge.selected, !1)), g = /* @__PURE__ */ y(() => t.edge.label), v = /* @__PURE__ */ y(() => t.edge.labelStyle), _ = /* @__PURE__ */ y(() => Ce(t.edge.data, () => ({}), !0)), p = /* @__PURE__ */ y(() => t.edge.style), w = /* @__PURE__ */ y(() => t.edge.interactionWidth), C = /* @__PURE__ */ y(() => Ce(t.edge.type, "default")), k = /* @__PURE__ */ y(() => t.edge.sourceHandle), b = /* @__PURE__ */ y(() => t.edge.targetHandle), A = /* @__PURE__ */ y(() => t.edge.markerStart), I = /* @__PURE__ */ y(() => t.edge.markerEnd), z = /* @__PURE__ */ y(() => t.edge.selectable), M = /* @__PURE__ */ y(() => t.edge.focusable), V = /* @__PURE__ */ y(() => Ce(t.edge.deletable, !0)), Y = /* @__PURE__ */ y(() => t.edge.hidden), P = /* @__PURE__ */ y(() => t.edge.zIndex), x = /* @__PURE__ */ y(() => t.edge.class), N = /* @__PURE__ */ y(() => t.edge.ariaLabel);
  Zg(u(n));
  let m = null, S = /* @__PURE__ */ y(() => u(z) ?? t.store.elementsSelectable), E = /* @__PURE__ */ y(() => u(M) ?? t.store.edgesFocusable), T = /* @__PURE__ */ y(() => t.store.edgeTypes[u(C)] ?? ml), R = /* @__PURE__ */ y(() => u(A) ? `url('#${Oo(u(A), t.store.flowId)}')` : void 0), D = /* @__PURE__ */ y(() => u(I) ? `url('#${Oo(u(I), t.store.flowId)}')` : void 0);
  function H(W) {
    const q = t.store.edgeLookup.get(u(n));
    q && (u(S) && t.store.handleEdgeSelection(u(n)), t.onedgeclick?.({ event: W, edge: q }));
  }
  function B(W, q) {
    const j = t.store.edgeLookup.get(u(n));
    j && q({ event: W, edge: j });
  }
  function X(W) {
    if (!t.store.disableKeyboardA11y && qa.includes(W.key) && u(S)) {
      const { unselectNodesAndEdges: q, addSelectedEdges: j } = t.store;
      W.key === "Escape" ? (m?.blur(), q({ edges: [t.edge] })) : j([u(n)]);
    }
  }
  var Z = _e(), K = se(Z);
  {
    var Q = (W) => {
      var q = Tv();
      let j;
      var fe = re(q);
      Bt(fe, () => ({
        class: ["svelte-flow__edge", u(x)],
        "data-id": u(n),
        onclick: H,
        oncontextmenu: t.onedgecontextmenu ? ($) => {
          B($, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? ($) => {
          B($, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? ($) => {
          B($, t.onedgepointerleave);
        } : void 0,
        "aria-label": u(N) === null ? void 0 : u(N) ? u(N) : `Edge from ${u(r)} to ${u(o)}`,
        "aria-describedby": u(E) ? `${xl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (u(E) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(E) ? X : void 0,
        tabindex: u(E) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Pt]: {
          animated: u(h),
          selected: u(f),
          selectable: u(S)
        }
      }));
      var be = re(fe);
      Wr(be, () => u(T), ($, pe) => {
        pe($, {
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
            return u(_);
          },
          get style() {
            return u(p);
          },
          get interactionWidth() {
            return u(w);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(V);
          },
          get type() {
            return u(C);
          },
          get sourceHandleId() {
            return u(k);
          },
          get targetHandleId() {
            return u(b);
          },
          get markerStart() {
            return u(R);
          },
          get markerEnd() {
            return u(D);
          }
        });
      }), nr(fe, ($) => m = $, () => m), ue(() => j = Be(q, "", j, { "z-index": u(P) })), F(W, q);
    };
    ce(K, (W) => {
      u(Y) || W(Q);
    });
  }
  F(e, Z), te();
}
$l();
var Dv = /* @__PURE__ */ me("<defs></defs>");
function zv(e, t) {
  ee(t, !1);
  const n = Yt();
  jc();
  var r = Dv();
  wn(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Lv(o, Mt(() => u(i)));
  }), F(e, r), te();
}
var Ov = /* @__PURE__ */ me('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Rv = /* @__PURE__ */ me('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Hv = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Lv(e, t) {
  ee(t, !0);
  let n = L(t, "width", 3, 12.5), r = L(t, "height", 3, 12.5), o = L(t, "markerUnits", 3, "strokeWidth"), i = L(t, "orient", 3, "auto-start-reverse"), s = L(t, "color", 3, "none");
  var a = Hv(), l = re(a);
  {
    var c = (h) => {
      var f = Ov();
      let g;
      ue(() => {
        U(f, "stroke-width", t.strokeWidth), g = Be(f, "", g, { stroke: s() });
      }), F(h, f);
    }, d = (h) => {
      var f = _e(), g = se(f);
      {
        var v = (_) => {
          var p = Rv();
          let w;
          ue(() => {
            U(p, "stroke-width", t.strokeWidth), w = Be(p, "", w, { stroke: s(), fill: s() });
          }), F(_, p);
        };
        ce(
          g,
          (_) => {
            t.type === Rr.ArrowClosed && _(v);
          },
          !0
        );
      }
      F(h, f);
    };
    ce(l, (h) => {
      t.type === Rr.Arrow ? h(c) : h(d, !1);
    });
  }
  ue(() => {
    U(a, "id", t.id), U(a, "markerWidth", `${n()}`), U(a, "markerHeight", `${r()}`), U(a, "markerUnits", o()), U(a, "orient", i());
  }), F(e, a), te();
}
var Vv = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Bv(e, t) {
  ee(t, !0);
  let n = L(t, "store", 15);
  var r = Vv(), o = re(r), i = re(o);
  zv(i, {});
  var s = J(o, 2);
  wn(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    Iv(a, {
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
  }), F(e, r), te();
}
var Fv = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function El(e, t) {
  ee(t, !0);
  let n = L(t, "x", 3, 0), r = L(t, "y", 3, 0), o = L(t, "width", 3, 0), i = L(t, "height", 3, 0), s = L(t, "isVisible", 3, !0);
  var a = _e(), l = se(a);
  {
    var c = (d) => {
      var h = Fv();
      let f;
      ue((g) => f = Be(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : ct(o()),
          height: typeof i() == "string" ? i() : ct(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), F(d, h);
    };
    ce(l, (d) => {
      s() && d(c);
    });
  }
  F(e, a), te();
}
var Kv = /* @__PURE__ */ oe("<div><!></div>");
function Yv(e, t) {
  ee(t, !0);
  let n = /* @__PURE__ */ ae(void 0);
  at(() => {
    t.store.disableKeyboardA11y || u(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ y(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = sr(t.store.nodeLookup, { filter: (h) => !!h.selected });
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
  var a = _e(), l = se(a);
  {
    var c = (d) => {
      var h = Kv();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = re(h);
      El(g, { width: "100%", height: "100%", x: 0, y: 0 }), Ne(h, (v, _) => wl?.(v, _), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, _, p, w) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: w });
        },
        onDragStart: (v, _, p, w) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: w });
        },
        onDragStop: (v, _, p, w) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: w });
        }
      })), nr(h, (v) => O(n, v), () => u(n)), ue(
        (v) => {
          Je(h, 1, Vt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), U(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), U(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Be(h, "", f, v);
        },
        [
          () => ({
            width: ct(u(r).width),
            height: ct(u(r).height),
            transform: `translate(${u(r).x ?? ""}px, ${u(r).y ?? ""}px)`
          })
        ]
      ), F(d, h);
    };
    ce(l, (d) => {
      t.store.selectionRectMode === "nodes" && u(r) && yt(u(r).x) && yt(u(r).y) && d(c);
    });
  }
  F(e, a), te();
}
jo(["contextmenu", "click", "keydown"]);
function Zv(e) {
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
function et(e, t) {
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
      }, { modifier: f, key: g, callback: v, preventDefault: _, enabled: p } = h;
      if (p) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const C = Array.isArray(f) ? f : [f];
          let k = !1;
          for (const b of C)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (I, z) => I | Zv(z),
              0
            ) === c) {
              k = !0;
              break;
            }
          if (!k) continue;
        }
        _ && a.preventDefault();
        const w = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), v?.(w);
      }
    }
  }
  let s;
  return n && (s = bo(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = bo(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Xv() {
  const e = /* @__PURE__ */ y(Yt), t = (i) => {
    const s = hs(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? jh(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return kn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = Oe(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && hs(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = Oe(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && ev(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : ys(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : ys(u(e).edgeLookup, i),
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
      const a = ui(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = ts(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = kn(h), g = qn(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = ts(i) ? i : t(i);
      if (!c)
        return !1;
      const d = qn(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await qh({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = Oe(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = Oe(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return lr(g, [l, c, d], a !== null, a || [1, 1]);
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
    getNodesBounds: (i) => Yh(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ys(e, t) {
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
function Wv(e, t) {
  ee(t, !0);
  let n = L(t, "store", 15), r = L(t, "selectionKey", 3, "Shift"), o = L(t, "multiSelectionKey", 19, () => Gn() ? "Meta" : "Control"), i = L(t, "deleteKey", 3, "Backspace"), s = L(t, "panActivationKey", 3, " "), a = L(t, "zoomActivationKey", 19, () => Gn() ? "Meta" : "Control"), { deleteElements: l } = Xv();
  function c(_) {
    return _ !== null && typeof _ == "object";
  }
  function d(_) {
    return c(_) ? _.modifier || [] : [];
  }
  function h(_) {
    return _ == null ? "" : c(_) ? _.key : _;
  }
  function f(_, p) {
    return (Array.isArray(_) ? _ : [_]).map((C) => {
      const k = h(C);
      return {
        key: k,
        modifier: d(C),
        enabled: k !== null,
        callback: p
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const _ = n().nodes.filter((w) => w.selected), p = n().edges.filter((w) => w.selected);
    l({ nodes: _, edges: p });
  }
  Nr("blur", Ae, g), Nr("contextmenu", Ae, g), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(i(), (_) => {
      !(_.originalEvent.ctrlKey || _.originalEvent.metaKey || _.originalEvent.shiftKey) && !nl(_.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Ae, (_, p) => et?.(_, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), te();
}
var qv = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), Gv = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Uv(e, t) {
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
      case At.Bezier: {
        const [a] = ol(s);
        return a;
      }
      case At.Straight: {
        const [a] = sl(s);
        return a;
      }
      case At.Step:
      case At.SmoothStep: {
        const [a] = di({
          ...s,
          borderRadius: t.type === At.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = _e(), o = se(r);
  {
    var i = (s) => {
      var a = Gv(), l = re(a), c = re(l);
      {
        var d = (f) => {
          var g = _e(), v = se(g);
          Wr(v, () => t.LineComponent, (_, p) => {
            p(_, {});
          }), F(f, g);
        }, h = (f) => {
          var g = qv();
          ue(() => {
            U(g, "d", u(n)), Be(g, t.style);
          }), F(f, g);
        };
        ce(c, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ue(
        (f) => {
          U(a, "width", t.store.width), U(a, "height", t.store.height), Be(a, t.containerStyle), Je(l, 0, f);
        },
        [
          () => Vt([
            "svelte-flow__connection",
            Fh(t.store.connection.isValid)
          ])
        ]
      ), F(s, a);
    };
    ce(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  F(e, r), te();
}
var Qv = /* @__PURE__ */ oe("<div><!></div>");
function mi(e, t) {
  ee(t, !0);
  let n = L(t, "position", 3, "top-right"), r = /* @__PURE__ */ Ft(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ y(() => `${n()}`.split("-"));
  var i = Qv();
  Bt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...u(o)
    ]
  ]);
  var s = re(i);
  Le(s, () => t.children ?? nn), F(e, i), te();
}
var jv = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Jv(e, t) {
  ee(t, !0);
  let n = L(t, "position", 3, "bottom-right");
  var r = _e(), o = se(r);
  {
    var i = (s) => {
      mi(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var c = jv();
          F(a, c);
        },
        $$slots: { default: !0 }
      });
    };
    ce(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  F(e, r), te();
}
var $v = /* @__PURE__ */ oe("<div><!></div>");
function e0(e, t) {
  ee(t, !0);
  let n = L(t, "domNode", 15), r = L(t, "clientWidth", 15), o = L(t, "clientHeight", 15), i = /* @__PURE__ */ y(() => t.rest.class), s = /* @__PURE__ */ y(() => Cc(t.rest, [
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
  var l = $v();
  Bt(
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
      [vt]: d
    }),
    [
      () => ({
        width: ct(t.width),
        height: ct(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var c = re(l);
  Le(c, () => t.children ?? nn), nr(l, (d) => n(d), () => n()), Ii(l, "clientHeight", o), Ii(l, "clientWidth", r), F(e, l), te();
}
var t0 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), n0 = /* @__PURE__ */ oe("<!> <!>", 1), r0 = /* @__PURE__ */ oe("<!> <!> <!> <!> <!>", 1);
function o0(e, t) {
  ee(t, !0);
  let n = L(t, "paneClickDistance", 3, 1), r = L(t, "nodeClickDistance", 3, 1), o = L(t, "panOnScrollMode", 19, () => vn.Free), i = L(t, "preventScrolling", 3, !0), s = L(t, "zoomOnScroll", 3, !0), a = L(t, "zoomOnDoubleClick", 3, !0), l = L(t, "zoomOnPinch", 3, !0), c = L(t, "panOnScroll", 3, !1), d = L(t, "panOnScrollSpeed", 3, 0.5), h = L(t, "panOnDrag", 3, !0), f = L(t, "selectionOnDrag", 3, !1), g = L(t, "connectionLineType", 19, () => At.Bezier), v = L(t, "nodes", 31, () => Tt([])), _ = L(t, "edges", 31, () => Tt([])), p = L(t, "viewport", 15, void 0), w = /* @__PURE__ */ Ft(t, [
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
  ]), C = vv({
    props: w,
    width: t.width,
    height: t.height,
    get nodes() {
      return v();
    },
    set nodes(b) {
      v(b);
    },
    get edges() {
      return _();
    },
    set edges(b) {
      _(b);
    },
    get viewport() {
      return p();
    },
    set viewport(b) {
      p(b);
    }
  });
  const k = Fo(Ro);
  k && k.setStore && k.setStore(C), Ds(Ro, {
    provider: !1,
    getStore() {
      return C;
    }
  }), at(() => {
    const b = { nodes: C.selectedNodes, edges: C.selectedEdges };
    Oe(() => t.onselectionchange)?.(b);
    for (const A of C.selectionChangeHandlers.values())
      A(b);
  }), ei(() => {
    C.reset();
  }), e0(e, {
    get colorMode() {
      return C.colorMode;
    },
    get width() {
      return t.width;
    },
    get height() {
      return t.height;
    },
    get rest() {
      return w;
    },
    get domNode() {
      return C.domNode;
    },
    set domNode(b) {
      C.domNode = b;
    },
    get clientWidth() {
      return C.width;
    },
    set clientWidth(b) {
      C.width = b;
    },
    get clientHeight() {
      return C.height;
    },
    set clientHeight(b) {
      C.height = b;
    },
    children: (b, A) => {
      var I = r0(), z = se(I);
      Wv(z, {
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
          return C;
        },
        set store(x) {
          C = x;
        }
      });
      var M = J(z, 2);
      yv(M, {
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
          return C;
        },
        set store(x) {
          C = x;
        },
        children: (x, N) => {
          wv(x, {
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
              return C;
            },
            set store(m) {
              C = m;
            },
            children: (m, S) => {
              var E = n0(), T = se(E);
              xv(T, {
                get store() {
                  return C;
                },
                set store(D) {
                  C = D;
                },
                children: (D, H) => {
                  var B = t0(), X = J(se(B), 2);
                  Bv(X, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  });
                  var Z = J(X, 4);
                  Uv(Z, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  });
                  var K = J(Z, 2);
                  Av(K, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  });
                  var Q = J(K, 2);
                  Yv(Q, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  }), F(D, B);
                },
                $$slots: { default: !0 }
              });
              var R = J(T, 2);
              {
                let D = /* @__PURE__ */ y(() => !!(C.selectionRect && C.selectionRectMode === "user")), H = /* @__PURE__ */ y(() => C.selectionRect?.width), B = /* @__PURE__ */ y(() => C.selectionRect?.height), X = /* @__PURE__ */ y(() => C.selectionRect?.x), Z = /* @__PURE__ */ y(() => C.selectionRect?.y);
                El(R, {
                  get isVisible() {
                    return u(D);
                  },
                  get width() {
                    return u(H);
                  },
                  get height() {
                    return u(B);
                  },
                  get x() {
                    return u(X);
                  },
                  get y() {
                    return u(Z);
                  }
                });
              }
              F(m, E);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var V = J(M, 2);
      Jv(V, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Y = J(V, 2);
      kv(Y, {
        get store() {
          return C;
        }
      });
      var P = J(Y, 2);
      Le(P, () => t.children ?? nn), F(b, I);
    },
    $$slots: { default: !0 }
  }), te();
}
var i0 = /* @__PURE__ */ oe("<button><!></button>");
function mr(e, t) {
  let n = /* @__PURE__ */ Ft(t, [
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
  var r = i0();
  Bt(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [vt]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = re(r);
  Le(o, () => t.children ?? nn), F(e, r);
}
var s0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function a0(e) {
  var t = s0();
  F(e, t);
}
var l0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function c0(e) {
  var t = l0();
  F(e, t);
}
var u0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function d0(e) {
  var t = u0();
  F(e, t);
}
var f0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function h0(e) {
  var t = f0();
  F(e, t);
}
var g0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function v0(e) {
  var t = g0();
  F(e, t);
}
var p0 = /* @__PURE__ */ oe("<!> <!>", 1), m0 = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function y0(e, t) {
  ee(t, !0);
  let n = L(t, "position", 3, "bottom-left"), r = L(t, "orientation", 3, "vertical"), o = L(t, "showZoom", 3, !0), i = L(t, "showFitView", 3, !0), s = L(t, "showLock", 3, !0), a = /* @__PURE__ */ Ft(t, [
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
  ]), l = /* @__PURE__ */ y(Yt);
  const c = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ y(() => u(l).nodesDraggable || u(l).nodesConnectable || u(l).elementsSelectable), h = /* @__PURE__ */ y(() => u(l).viewport.zoom <= u(l).minZoom), f = /* @__PURE__ */ y(() => u(l).viewport.zoom >= u(l).maxZoom), g = /* @__PURE__ */ y(() => u(l).ariaLabelConfig), v = /* @__PURE__ */ y(() => r() === "horizontal" ? "horizontal" : "vertical");
  const _ = () => {
    u(l).zoomIn();
  }, p = () => {
    u(l).zoomOut();
  }, w = () => {
    u(l).fitView(t.fitViewOptions);
  }, C = () => {
    let k = !u(d);
    u(l).nodesDraggable = k, u(l).nodesConnectable = k, u(l).elementsSelectable = k;
  };
  {
    let k = /* @__PURE__ */ y(() => [
      "svelte-flow__controls",
      u(v),
      t.class
    ]);
    mi(e, Mt(
      {
        get class() {
          return u(k);
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
          var I = m0(), z = se(I);
          {
            var M = (D) => {
              var H = _e(), B = se(H);
              Le(B, () => t.before), F(D, H);
            };
            ce(z, (D) => {
              t.before && D(M);
            });
          }
          var V = J(z, 2);
          {
            var Y = (D) => {
              var H = p0(), B = se(H);
              mr(B, Mt(
                {
                  onclick: _,
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
                    a0(Z);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = J(B, 2);
              mr(X, Mt(
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
                    c0(Z);
                  },
                  $$slots: { default: !0 }
                }
              )), F(D, H);
            };
            ce(V, (D) => {
              o() && D(Y);
            });
          }
          var P = J(V, 2);
          {
            var x = (D) => {
              mr(D, Mt(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: w,
                  get title() {
                    return u(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (H, B) => {
                    d0(H);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ce(P, (D) => {
              i() && D(x);
            });
          }
          var N = J(P, 2);
          {
            var m = (D) => {
              mr(D, Mt(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: C,
                  get title() {
                    return u(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (H, B) => {
                    var X = _e(), Z = se(X);
                    {
                      var K = (W) => {
                        v0(W);
                      }, Q = (W) => {
                        h0(W);
                      };
                      ce(Z, (W) => {
                        u(d) ? W(K) : W(Q, !1);
                      });
                    }
                    F(H, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ce(N, (D) => {
              s() && D(m);
            });
          }
          var S = J(N, 2);
          {
            var E = (D) => {
              var H = _e(), B = se(H);
              Le(B, () => t.children), F(D, H);
            };
            ce(S, (D) => {
              t.children && D(E);
            });
          }
          var T = J(S, 2);
          {
            var R = (D) => {
              var H = _e(), B = se(H);
              Le(B, () => t.after), F(D, H);
            };
            ce(T, (D) => {
              t.after && D(R);
            });
          }
          F(b, I);
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
var _0 = /* @__PURE__ */ me("<circle></circle>");
function w0(e, t) {
  var n = _0();
  ue(() => {
    U(n, "cx", t.radius), U(n, "cy", t.radius), U(n, "r", t.radius), Je(n, 0, Vt(["svelte-flow__background-pattern", "dots", t.class]));
  }), F(e, n);
}
var b0 = /* @__PURE__ */ me("<path></path>");
function x0(e, t) {
  ee(t, !0);
  var n = b0();
  ue(() => {
    U(n, "stroke-width", t.lineWidth), U(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), Je(n, 0, Vt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), F(e, n), te();
}
const E0 = {
  [Ot.Dots]: 1,
  [Ot.Lines]: 1,
  [Ot.Cross]: 6
};
var S0 = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function k0(e, t) {
  ee(t, !0);
  let n = L(t, "variant", 19, () => Ot.Dots), r = L(t, "gap", 3, 20), o = L(t, "lineWidth", 3, 1), i = /* @__PURE__ */ y(Yt), s = /* @__PURE__ */ y(() => n() === Ot.Dots), a = /* @__PURE__ */ y(() => n() === Ot.Cross), l = /* @__PURE__ */ y(() => Array.isArray(r()) ? r() : [r(), r()]), c = /* @__PURE__ */ y(() => `background-pattern-${u(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ y(() => [
    u(l)[0] * u(i).viewport.zoom || 1,
    u(l)[1] * u(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ y(() => (t.size ?? E0[n()]) * u(i).viewport.zoom), f = /* @__PURE__ */ y(() => u(a) ? [u(h), u(h)] : u(d)), g = /* @__PURE__ */ y(() => u(s) ? [u(h) / 2, u(h) / 2] : [
    u(f)[0] / 2,
    u(f)[1] / 2
  ]);
  var v = S0();
  let _;
  var p = re(v), w = re(p);
  {
    var C = (A) => {
      {
        let I = /* @__PURE__ */ y(() => u(h) / 2);
        w0(A, {
          get radius() {
            return u(I);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, k = (A) => {
      x0(A, {
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
    ce(w, (A) => {
      u(s) ? A(C) : A(k, !1);
    });
  }
  var b = J(p);
  ue(() => {
    Je(v, 0, Vt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), _ = Be(v, "", _, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), U(p, "id", u(c)), U(p, "x", u(i).viewport.x % u(d)[0]), U(p, "y", u(i).viewport.y % u(d)[1]), U(p, "width", u(d)[0]), U(p, "height", u(d)[1]), U(p, "patternTransform", `translate(-${u(g)[0]},-${u(g)[1]})`), U(b, "fill", `url(#${u(c)})`);
  }), F(e, v), te();
}
var C0 = /* @__PURE__ */ me("<rect></rect>");
function N0(e, t) {
  let n = L(t, "borderRadius", 3, 5), r = L(t, "strokeWidth", 3, 2);
  var o = _e(), i = se(o);
  {
    var s = (l) => {
      const c = /* @__PURE__ */ y(() => t.nodeComponent);
      var d = _e(), h = se(d);
      Wr(h, () => u(c), (f, g) => {
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
      }), F(l, d);
    }, a = (l) => {
      var c = C0();
      let d, h;
      ue(() => {
        d = Je(c, 0, Vt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), U(c, "x", t.x), U(c, "y", t.y), U(c, "rx", n()), U(c, "ry", n()), U(c, "width", t.width), U(c, "height", t.height), U(c, "shape-rendering", t.shapeRendering), h = Be(c, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), F(l, c);
    };
    ce(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  F(e, o);
}
function P0(e, t) {
  const n = Ag({
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
const go = (e) => e instanceof Function ? e : () => e;
var M0 = /* @__PURE__ */ me("<title> </title>"), A0 = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), T0 = /* @__PURE__ */ oe('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function I0(e, t) {
  ee(t, !0);
  let n = L(t, "position", 3, "bottom-right"), r = L(t, "nodeStrokeColor", 3, "transparent"), o = L(t, "nodeClass", 3, ""), i = L(t, "nodeBorderRadius", 3, 5), s = L(t, "nodeStrokeWidth", 3, 2), a = L(t, "width", 3, 200), l = L(t, "height", 3, 150), c = L(t, "pannable", 3, !0), d = L(t, "zoomable", 3, !0), h = /* @__PURE__ */ Ft(t, [
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
  ]), f = /* @__PURE__ */ y(Yt), g = /* @__PURE__ */ y(() => u(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : go(t.nodeColor), _ = go(r()), p = go(o()), w = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let C = /* @__PURE__ */ y(() => `svelte-flow__minimap-desc-${u(f).flowId}`), k = /* @__PURE__ */ y(() => ({
    x: -u(f).viewport.x / u(f).viewport.zoom,
    y: -u(f).viewport.y / u(f).viewport.zoom,
    width: u(f).width / u(f).viewport.zoom,
    height: u(f).height / u(f).viewport.zoom
  })), b = /* @__PURE__ */ y(() => Ja(sr(u(f).nodeLookup, { filter: (R) => !R.hidden }), u(k))), A = /* @__PURE__ */ y(() => u(b).width / a()), I = /* @__PURE__ */ y(() => u(b).height / l()), z = /* @__PURE__ */ y(() => Math.max(u(A), u(I))), M = /* @__PURE__ */ y(() => u(z) * a()), V = /* @__PURE__ */ y(() => u(z) * l()), Y = /* @__PURE__ */ y(() => 5 * u(z)), P = /* @__PURE__ */ y(() => u(b).x - (u(M) - u(b).width) / 2 - u(Y)), x = /* @__PURE__ */ y(() => u(b).y - (u(V) - u(b).height) / 2 - u(Y)), N = /* @__PURE__ */ y(() => u(M) + u(Y) * 2), m = /* @__PURE__ */ y(() => u(V) + u(Y) * 2);
  const S = () => u(z);
  var E = T0(), T = se(E);
  {
    let R = /* @__PURE__ */ y(() => ["svelte-flow__minimap", t.class]);
    Vc(T, () => ({ "--xy-minimap-background-color-props": t.bgColor })), mi(T.lastChild, Mt(
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
        children: (D, H) => {
          var B = _e(), X = se(B);
          {
            var Z = (K) => {
              var Q = A0();
              let W;
              var q = re(Q);
              {
                var j = ($) => {
                  var pe = M0(), ne = re(pe);
                  ue(() => {
                    U(pe, "id", u(C)), He(ne, t.ariaLabel ?? u(g)["minimap.ariaLabel"]);
                  }), F($, pe);
                };
                ce(q, ($) => {
                  (t.ariaLabel ?? u(g)["minimap.ariaLabel"]) && $(j);
                });
              }
              var fe = J(q);
              wn(fe, 17, () => u(f).nodes, ($) => $.id, ($, pe) => {
                const ne = /* @__PURE__ */ y(() => u(f).nodeLookup.get(u(pe).id));
                var Me = _e(), kt = se(Me);
                {
                  var Ct = (dt) => {
                    const de = /* @__PURE__ */ y(() => Kt(u(ne)));
                    {
                      let ye = /* @__PURE__ */ y(() => v?.(u(ne))), We = /* @__PURE__ */ y(() => _(u(ne))), ge = /* @__PURE__ */ y(() => p(u(ne)));
                      N0(dt, Mt(
                        {
                          get id() {
                            return u(ne).id;
                          },
                          get x() {
                            return u(ne).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(ne).internals.positionAbsolute.y;
                          }
                        },
                        () => u(de),
                        {
                          get selected() {
                            return u(ne).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return u(ye);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return u(We);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return w;
                          },
                          get class() {
                            return u(ge);
                          }
                        }
                      ));
                    }
                  };
                  ce(kt, (dt) => {
                    u(ne) && $a(u(ne)) && !u(ne).hidden && dt(Ct);
                  });
                }
                F($, Me);
              });
              var be = J(fe);
              Ne(Q, ($, pe) => P0?.($, pe), () => ({
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
              })), ue(() => {
                U(Q, "width", a()), U(Q, "height", l()), U(Q, "viewBox", `${u(P) ?? ""} ${u(x) ?? ""} ${u(N) ?? ""} ${u(m) ?? ""}`), U(Q, "aria-labelledby", u(C)), W = Be(Q, "", W, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * u(z) : void 0
                }), U(be, "d", `M${u(P) - u(Y)},${u(x) - u(Y)}h${u(N) + u(Y) * 2}v${u(m) + u(Y) * 2}h${-u(N) - u(Y) * 2}z
      M${u(k).x ?? ""},${u(k).y ?? ""}h${u(k).width ?? ""}v${u(k).height ?? ""}h${-u(k).width}z`);
              }), F(K, Q);
            };
            ce(X, (K) => {
              u(f).panZoom && K(Z);
            });
          }
          F(D, B);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  F(e, E), te();
}
var D0 = /* @__PURE__ */ oe('<p class="text-gray-600 mb-2"> </p>'), z0 = /* @__PURE__ */ oe('<div><!> <div> </div> <div class="p-3 bg-white text-sm"><!> <!></div> <!></div>');
function yi(e, t) {
  ee(t, !0);
  let n = L(t, "type", 3, "default"), r = L(t, "inputs", 19, () => []), o = L(t, "outputs", 19, () => []);
  const i = {
    trigger: "border-orange-500 bg-orange-50",
    action: "border-blue-500 bg-blue-50",
    condition: "border-purple-500 bg-purple-50",
    default: "border-gray-500 bg-gray-50"
  }, s = {
    trigger: "bg-orange-500 text-white",
    action: "bg-blue-500 text-white",
    condition: "bg-purple-500 text-white",
    default: "bg-gray-500 text-white"
  };
  var a = z0(), l = re(a);
  wn(l, 17, r, Ci, (p, w) => {
    Ht(p, {
      type: "target",
      get position() {
        return G.Left;
      },
      get id() {
        return u(w).id;
      },
      style: "width: 10px; height: 10px; background: #666;"
    });
  });
  var c = J(l, 2), d = re(c), h = J(c, 2), f = re(h);
  {
    var g = (p) => {
      var w = D0(), C = re(w);
      ue(() => He(C, t.data.description)), F(p, w);
    };
    ce(f, (p) => {
      t.data.description && p(g);
    });
  }
  var v = J(f, 2);
  Le(v, () => t.children ?? nn);
  var _ = J(h, 2);
  wn(_, 17, o, Ci, (p, w) => {
    Ht(p, {
      type: "source",
      get position() {
        return G.Right;
      },
      get id() {
        return u(w).id;
      },
      style: "width: 10px; height: 10px; background: #666;"
    });
  }), ue(() => {
    Je(a, 1, `shadow-lg rounded-lg border-2 ${i[n()] ?? ""} ${t.selected ? "ring-2 ring-offset-2 ring-blue-400" : ""} min-w-[150px] overflow-hidden`), Je(c, 1, `px-3 py-1 font-bold text-xs uppercase ${s[n()] ?? ""}`), He(d, t.data.label || "Node");
  }), F(e, a), te();
}
var O0 = /* @__PURE__ */ oe('<div class="mt-2 p-2 bg-orange-100 rounded text-xs border border-orange-200"><strong>Event:</strong> </div>');
function R0(e, t) {
  ee(t, !0);
  const n = [{ id: "output" }];
  yi(e, {
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
      var i = _e(), s = se(i);
      {
        var a = (l) => {
          var c = O0(), d = J(re(c));
          ue(() => He(d, ` ${t.data.event ?? ""}`)), F(l, c);
        };
        ce(s, (l) => {
          t.data.event && l(a);
        });
      }
      F(r, i);
    },
    $$slots: { default: !0 }
  }), te();
}
var H0 = /* @__PURE__ */ oe('<div class="mt-2 p-2 bg-blue-100 rounded text-xs border border-blue-200"><strong>Action:</strong> </div>');
function L0(e, t) {
  ee(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  yi(e, {
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
      var s = _e(), a = se(s);
      {
        var l = (c) => {
          var d = H0(), h = J(re(d));
          ue(() => He(h, ` ${t.data.action ?? ""}`)), F(c, d);
        };
        ce(a, (c) => {
          t.data.action && c(l);
        });
      }
      F(o, s);
    },
    $$slots: { default: !0 }
  }), te();
}
var V0 = /* @__PURE__ */ oe('<div class="mt-2 p-2 bg-purple-100 rounded text-xs border border-purple-200"><strong>If:</strong> </div>'), B0 = /* @__PURE__ */ oe('<!> <div class="flex flex-col gap-4 mt-2"><div class="relative flex items-center justify-end h-6"><span class="text-[10px] font-bold text-green-600 mr-2">TRUE</span> <!></div> <div class="relative flex items-center justify-end h-6"><span class="text-[10px] font-bold text-red-600 mr-2">FALSE</span> <!></div></div>', 1), F0 = /* @__PURE__ */ oe('<div class="relative"><!></div>');
function K0(e, t) {
  ee(t, !0);
  const n = [{ id: "input" }];
  var r = F0(), o = re(r);
  yi(o, {
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
      var a = B0(), l = se(a);
      {
        var c = (_) => {
          var p = V0(), w = J(re(p));
          ue(() => He(w, ` ${t.data.condition ?? ""}`)), F(_, p);
        };
        ce(l, (_) => {
          t.data.condition && _(c);
        });
      }
      var d = J(l, 2), h = re(d), f = J(re(h), 2);
      Ht(f, {
        type: "source",
        get position() {
          return G.Right;
        },
        id: "true",
        style: "top: 50%; right: -21px; width: 10px; height: 10px; background: #10b981;"
      });
      var g = J(h, 2), v = J(re(g), 2);
      Ht(v, {
        type: "source",
        get position() {
          return G.Right;
        },
        id: "false",
        style: "top: 50%; right: -21px; width: 10px; height: 10px; background: #ef4444;"
      }), F(i, a);
    },
    $$slots: { default: !0 }
  }), F(e, r), te();
}
var Y0 = /* @__PURE__ */ oe("<!> <!> <!>", 1), Z0 = /* @__PURE__ */ oe('<div style="width: 100%; height: 500px; border: 1px solid #ccc;"><!></div>');
function X0(e, t) {
  ee(t, !0);
  const n = {
    trigger: R0,
    action: L0,
    condition: K0
  };
  let r = L(t, "nodes", 19, () => []), o = L(t, "edges", 19, () => []), i = /* @__PURE__ */ ae([]), s = /* @__PURE__ */ ae([]);
  Go(() => {
    u(i).length === 0 && O(i, r().length > 0 ? r() : [
      {
        id: "trigger-1",
        type: "trigger",
        position: { x: 50, y: 50 },
        data: {
          label: "User Registered",
          event: "App\\Events\\UserRegistered",
          description: "Triggers when a new user signs up."
        }
      },
      {
        id: "condition-1",
        type: "condition",
        position: { x: 300, y: 50 },
        data: {
          label: "Check Email",
          condition: "user.email_verified_at != null",
          description: "Check if email is verified."
        }
      },
      {
        id: "action-1",
        type: "action",
        position: { x: 550, y: 0 },
        data: {
          label: "Send Welcome Email",
          action: "SendMail",
          description: "Send the official welcome package."
        }
      },
      {
        id: "action-2",
        type: "action",
        position: { x: 550, y: 150 },
        data: {
          label: "Log Unverified",
          action: "LogMessage",
          description: "Log a warning about unverified user."
        }
      }
    ]), u(s).length === 0 && O(s, o().length > 0 ? o() : [{ id: "e1-2", source: "1", target: "2" }]);
  });
  var a = Z0(), l = re(a);
  o0(l, {
    get nodeTypes() {
      return n;
    },
    fitView: !0,
    get nodes() {
      return u(i);
    },
    set nodes(c) {
      O(i, c);
    },
    get edges() {
      return u(s);
    },
    set edges(c) {
      O(s, c);
    },
    children: (c, d) => {
      var h = Y0(), f = se(h);
      y0(f, {});
      var g = J(f, 2);
      k0(g, {});
      var v = J(g, 2);
      I0(v, {}), F(c, h);
    },
    $$slots: { default: !0 }
  }), F(e, a), te();
}
const _s = () => {
  window.Alpine.data("flowBuilder", ({ state: e }) => ({
    state: e,
    init() {
      const t = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], n = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      Rc(X0, {
        target: this.$refs.canvas,
        props: {
          nodes: t,
          edges: n
        }
      });
    }
  }));
};
window.Alpine ? _s() : document.addEventListener("alpine:init", _s);
