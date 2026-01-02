var wc = Object.defineProperty;
var il = (e) => {
  throw TypeError(e);
};
var bc = (e, t, n) => t in e ? wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Yt = (e, t, n) => bc(e, typeof t != "symbol" ? t + "" : t, n), Ao = (e, t, n) => t.has(e) || il("Cannot " + n);
var T = (e, t, n) => (Ao(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fe = (e, t, n) => t.has(e) ? il("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oe = (e, t, n, r) => (Ao(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Fe = (e, t, n) => (Ao(e, t, "access private method"), n);
var ai = Array.isArray, xc = Array.prototype.indexOf, fo = Array.from, sa = Object.defineProperty, On = Object.getOwnPropertyDescriptor, la = Object.getOwnPropertyDescriptors, Ec = Object.prototype, Sc = Array.prototype, Es = Object.getPrototypeOf, ol = Object.isExtensible;
function Yr(e) {
  return typeof e == "function";
}
const pn = () => {
};
function kc(e) {
  return e();
}
function Xi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function aa() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function zn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ct = 2, Ss = 4, ho = 8, ua = 1 << 24, Sn = 16, kn = 32, ir = 64, go = 128, Kt = 512, st = 1024, Tt = 2048, qt = 4096, At = 8192, mn = 16384, ks = 32768, jn = 65536, sl = 1 << 17, ca = 1 << 18, Hr = 1 << 19, fa = 1 << 20, gn = 1 << 25, Jn = 32768, Ko = 1 << 21, Cs = 1 << 22, In = 1 << 23, ln = Symbol("$state"), da = Symbol("legacy props"), Cc = Symbol(""), cr = new class extends Error {
  constructor() {
    super(...arguments);
    Yt(this, "name", "StaleReactionError");
    Yt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function vo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Mc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pc(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ac(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Oc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ic() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Dc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Rc = 1, Vc = 2, ha = 4, Lc = 8, Yc = 16, Xc = 1, Bc = 2, ga = 4, Fc = 8, Wc = 16, va = 1, Kc = 2, ot = Symbol(), qc = "http://www.w3.org/1999/xhtml", Uc = "@attach";
function Zc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Gc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ya(e) {
  return e === this.v;
}
function Ms(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pa(e) {
  return !Ms(e, this.v);
}
let Rr = !1;
function $c() {
  Rr = !0;
}
let Ce = null;
function Mr(e) {
  Ce = e;
}
function Bi(e) {
  return (
    /** @type {T} */
    Ps().get(e)
  );
}
function Fi(e, t) {
  return Ps().set(e, t), t;
}
function jc(e) {
  return Ps().has(e);
}
function de(e, t = !1, n) {
  Ce = {
    p: Ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Rr && !t ? { s: null, u: null, $: [] } : null
  };
}
function he(e) {
  var t = (
    /** @type {ComponentContext} */
    Ce
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Oa(r);
  }
  return t.i = !0, Ce = t.p, /** @type {T} */
  {};
}
function ui() {
  return !Rr || Ce !== null && Ce.l === null;
}
function Ps(e) {
  return Ce === null && vo(), Ce.c ?? (Ce.c = new Map(Jc(Ce) || void 0));
}
function Jc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let fr = [];
function Qc() {
  var e = fr;
  fr = [], Xi(e);
}
function or(e) {
  if (fr.length === 0) {
    var t = fr;
    queueMicrotask(() => {
      t === fr && Qc();
    });
  }
  fr.push(e);
}
function ma(e) {
  var t = xe;
  if (t === null)
    return ye.f |= In, e;
  if (t.f & ks)
    Pr(e, t);
  else {
    if (!(t.f & go))
      throw e;
    t.b.error(e);
  }
}
function Pr(e, t) {
  for (; t !== null; ) {
    if (t.f & go)
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
const Ci = /* @__PURE__ */ new Set();
let Ne = null, Ze = null, en = [], Ns = null, qo = !1;
var xr, Er, Xn, Bn, ii, Sr, kr, lt, Uo, Wr, Zo, _a, wa;
const so = class so {
  constructor() {
    fe(this, lt);
    Yt(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Yt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Yt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    fe(this, xr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    fe(this, Er, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    fe(this, Xn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    fe(this, Bn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    fe(this, ii, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    fe(this, Sr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    fe(this, kr, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Yt(this, "skipped_effects", /* @__PURE__ */ new Set());
    Yt(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || T(this, Bn) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var r;
    en = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const i of t)
      Fe(this, lt, Uo).call(this, i, n);
    this.is_fork || Fe(this, lt, _a).call(this), this.is_deferred() ? (Fe(this, lt, Wr).call(this, n.effects), Fe(this, lt, Wr).call(this, n.render_effects)) : (Ne = null, ll(n.render_effects), ll(n.effects), (r = T(this, ii)) == null || r.resolve()), Ze = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), t.f & In || (this.current.set(t, t.v), Ze == null || Ze.set(t, t.v));
  }
  activate() {
    Ne = this, this.apply();
  }
  deactivate() {
    Ne === this && (Ne = null, Ze = null);
  }
  flush() {
    if (this.activate(), en.length > 0) {
      if (ef(), Ne !== null && Ne !== this)
        return;
    } else T(this, Xn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of T(this, Er)) t(this);
    T(this, Er).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    oe(this, Xn, T(this, Xn) + 1), t && oe(this, Bn, T(this, Bn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    oe(this, Xn, T(this, Xn) - 1), t && oe(this, Bn, T(this, Bn) - 1), this.revive();
  }
  revive() {
    for (const t of T(this, Sr))
      T(this, kr).delete(t), ut(t, Tt), Qn(t);
    for (const t of T(this, kr))
      ut(t, qt), Qn(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    T(this, xr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    T(this, Er).add(t);
  }
  settled() {
    return (T(this, ii) ?? oe(this, ii, aa())).promise;
  }
  static ensure() {
    if (Ne === null) {
      const t = Ne = new so();
      Ci.add(Ne), so.enqueue(() => {
        Ne === t && t.flush();
      });
    }
    return Ne;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    or(t);
  }
  apply() {
  }
};
xr = new WeakMap(), Er = new WeakMap(), Xn = new WeakMap(), Bn = new WeakMap(), ii = new WeakMap(), Sr = new WeakMap(), kr = new WeakMap(), lt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Uo = function(t, n) {
  var c;
  t.f ^= st;
  for (var r = t.first; r !== null; ) {
    var i = r.f, o = (i & (kn | ir)) !== 0, s = o && (i & st) !== 0, l = s || (i & At) !== 0 || this.skipped_effects.has(r);
    if (r.f & go && ((c = r.b) != null && c.is_pending()) && (n = {
      parent: n,
      effect: r,
      effects: [],
      render_effects: []
    }), !l && r.fn !== null) {
      o ? r.f ^= st : i & Ss ? n.effects.push(r) : Vr(r) && (r.f & Sn && T(this, Sr).add(r), Ar(r));
      var a = r.first;
      if (a !== null) {
        r = a;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      u === n.effect && (Fe(this, lt, Wr).call(this, n.effects), Fe(this, lt, Wr).call(this, n.render_effects), n = /** @type {EffectTarget} */
      n.parent), r = u.next, u = u.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Wr = function(t) {
  for (const n of t)
    n.f & Tt ? T(this, Sr).add(n) : n.f & qt && T(this, kr).add(n), Fe(this, lt, Zo).call(this, n.deps), ut(n, st);
}, /**
 * @param {Value[] | null} deps
 */
Zo = function(t) {
  if (t !== null)
    for (const n of t)
      !(n.f & ct) || !(n.f & Jn) || (n.f ^= Jn, Fe(this, lt, Zo).call(
        this,
        /** @type {Derived} */
        n.deps
      ));
}, _a = function() {
  if (T(this, Bn) === 0) {
    for (const t of T(this, xr)) t();
    T(this, xr).clear();
  }
  T(this, Xn) === 0 && Fe(this, lt, wa).call(this);
}, wa = function() {
  var o;
  if (Ci.size > 1) {
    this.previous.clear();
    var t = Ze, n = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const s of Ci) {
      if (s === this) {
        n = !1;
        continue;
      }
      const l = [];
      for (const [u, c] of this.current) {
        if (s.current.has(u))
          if (n && c !== s.current.get(u))
            s.current.set(u, c);
          else
            continue;
        l.push(u);
      }
      if (l.length === 0)
        continue;
      const a = [...s.current.keys()].filter((u) => !this.current.has(u));
      if (a.length > 0) {
        var i = en;
        en = [];
        const u = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
        for (const h of l)
          ba(h, a, u, c);
        if (en.length > 0) {
          Ne = s, s.apply();
          for (const h of en)
            Fe(o = s, lt, Uo).call(o, h, r);
          s.deactivate();
        }
        en = i;
      }
    }
    Ne = null, Ze = t;
  }
  this.committed = !0, Ci.delete(this);
};
let vn = so;
function ef() {
  var e = Zn;
  qo = !0;
  var t = null;
  try {
    var n = 0;
    for (Ki(!0); en.length > 0; ) {
      var r = vn.ensure();
      if (n++ > 1e3) {
        var i, o;
        tf();
      }
      r.process(en), Dn.clear();
    }
  } finally {
    qo = !1, Ki(e), Ns = null;
  }
}
function tf() {
  try {
    Tc();
  } catch (e) {
    Pr(e, Ns);
  }
}
let Xt = null;
function ll(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (mn | At)) && Vr(r) && (Xt = /* @__PURE__ */ new Set(), Ar(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Ra(r) : r.fn = null), (Xt == null ? void 0 : Xt.size) > 0)) {
        Dn.clear();
        for (const i of Xt) {
          if (i.f & (mn | At)) continue;
          const o = [i];
          let s = i.parent;
          for (; s !== null; )
            Xt.has(s) && (Xt.delete(s), o.push(s)), s = s.parent;
          for (let l = o.length - 1; l >= 0; l--) {
            const a = o[l];
            a.f & (mn | At) || Ar(a);
          }
        }
        Xt.clear();
      }
    }
    Xt = null;
  }
}
function ba(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      o & ct ? ba(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : o & (Cs | Sn) && !(o & Tt) && xa(i, t, r) && (ut(i, Tt), Qn(
        /** @type {Effect} */
        i
      ));
    }
}
function xa(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if (i.f & ct && xa(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Qn(e) {
  for (var t = Ns = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (qo && t === xe && n & Sn && !(n & ca))
      return;
    if (n & (ir | kn)) {
      if (!(n & st)) return;
      t.f ^= st;
    }
  }
  en.push(t);
}
function nf(e) {
  let t = 0, n = Rn(0), r;
  return () => {
    $r() && (f(n), di(() => (t === 0 && (r = O(() => e(() => Gr(n)))), t += 1, () => {
      or(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Gr(n));
      });
    })));
  };
}
var rf = jn | Hr | go;
function of(e, t, n) {
  new sf(e, t, n);
}
var Dt, Ht, xs, tn, Fn, nn, Rt, _t, rn, dn, Pn, Wn, Nn, Kn, An, lo, tt, lf, af, Go, Di, Hi, $o;
class sf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    fe(this, tt);
    /** @type {Boundary | null} */
    Yt(this, "parent");
    fe(this, Dt, !1);
    /** @type {TemplateNode} */
    fe(this, Ht);
    /** @type {TemplateNode | null} */
    fe(this, xs, null);
    /** @type {BoundaryProps} */
    fe(this, tn);
    /** @type {((anchor: Node) => void)} */
    fe(this, Fn);
    /** @type {Effect} */
    fe(this, nn);
    /** @type {Effect | null} */
    fe(this, Rt, null);
    /** @type {Effect | null} */
    fe(this, _t, null);
    /** @type {Effect | null} */
    fe(this, rn, null);
    /** @type {DocumentFragment | null} */
    fe(this, dn, null);
    /** @type {TemplateNode | null} */
    fe(this, Pn, null);
    fe(this, Wn, 0);
    fe(this, Nn, 0);
    fe(this, Kn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    fe(this, An, null);
    fe(this, lo, nf(() => (oe(this, An, Rn(T(this, Wn))), () => {
      oe(this, An, null);
    })));
    oe(this, Ht, t), oe(this, tn, n), oe(this, Fn, r), this.parent = /** @type {Effect} */
    xe.b, oe(this, Dt, !!T(this, tn).pending), oe(this, nn, po(() => {
      xe.b = this;
      {
        var i = Fe(this, tt, Go).call(this);
        try {
          oe(this, Rt, wt(() => r(i)));
        } catch (o) {
          this.error(o);
        }
        T(this, Nn) > 0 ? Fe(this, tt, Hi).call(this) : oe(this, Dt, !1);
      }
      return () => {
        var o;
        (o = T(this, Pn)) == null || o.remove();
      };
    }, rf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return T(this, Dt) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!T(this, tn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Fe(this, tt, $o).call(this, t), oe(this, Wn, T(this, Wn) + t), T(this, An) && Nr(T(this, An), T(this, Wn));
  }
  get_effect_pending() {
    return T(this, lo).call(this), f(
      /** @type {Source<number>} */
      T(this, An)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = T(this, tn).onerror;
    let r = T(this, tn).failed;
    if (T(this, Kn) || !n && !r)
      throw t;
    T(this, Rt) && (at(T(this, Rt)), oe(this, Rt, null)), T(this, _t) && (at(T(this, _t)), oe(this, _t, null)), T(this, rn) && (at(T(this, rn)), oe(this, rn, null));
    var i = !1, o = !1;
    const s = () => {
      if (i) {
        Gc();
        return;
      }
      i = !0, o && Hc(), vn.ensure(), oe(this, Wn, 0), T(this, rn) !== null && Un(T(this, rn), () => {
        oe(this, rn, null);
      }), oe(this, Dt, this.has_pending_snippet()), oe(this, Rt, Fe(this, tt, Di).call(this, () => (oe(this, Kn, !1), wt(() => T(this, Fn).call(this, T(this, Ht)))))), T(this, Nn) > 0 ? Fe(this, tt, Hi).call(this) : oe(this, Dt, !1);
    };
    var l = ye;
    try {
      bt(null), o = !0, n == null || n(t, s), o = !1;
    } catch (a) {
      Pr(a, T(this, nn) && T(this, nn).parent);
    } finally {
      bt(l);
    }
    r && or(() => {
      oe(this, rn, Fe(this, tt, Di).call(this, () => {
        vn.ensure(), oe(this, Kn, !0);
        try {
          return wt(() => {
            r(
              T(this, Ht),
              () => t,
              () => s
            );
          });
        } catch (a) {
          return Pr(
            a,
            /** @type {Effect} */
            T(this, nn).parent
          ), null;
        } finally {
          oe(this, Kn, !1);
        }
      }));
    });
  }
}
Dt = new WeakMap(), Ht = new WeakMap(), xs = new WeakMap(), tn = new WeakMap(), Fn = new WeakMap(), nn = new WeakMap(), Rt = new WeakMap(), _t = new WeakMap(), rn = new WeakMap(), dn = new WeakMap(), Pn = new WeakMap(), Wn = new WeakMap(), Nn = new WeakMap(), Kn = new WeakMap(), An = new WeakMap(), lo = new WeakMap(), tt = new WeakSet(), lf = function() {
  try {
    oe(this, Rt, wt(() => T(this, Fn).call(this, T(this, Ht))));
  } catch (t) {
    this.error(t);
  }
  oe(this, Dt, !1);
}, af = function() {
  const t = T(this, tn).pending;
  t && (oe(this, _t, wt(() => t(T(this, Ht)))), vn.enqueue(() => {
    var n = Fe(this, tt, Go).call(this);
    oe(this, Rt, Fe(this, tt, Di).call(this, () => (vn.ensure(), wt(() => T(this, Fn).call(this, n))))), T(this, Nn) > 0 ? Fe(this, tt, Hi).call(this) : (Un(
      /** @type {Effect} */
      T(this, _t),
      () => {
        oe(this, _t, null);
      }
    ), oe(this, Dt, !1));
  }));
}, Go = function() {
  var t = T(this, Ht);
  return T(this, Dt) && (oe(this, Pn, _n()), T(this, Ht).before(T(this, Pn)), t = T(this, Pn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
Di = function(t) {
  var n = xe, r = ye, i = Ce;
  Lt(T(this, nn)), bt(T(this, nn)), Mr(T(this, nn).ctx);
  try {
    return t();
  } catch (o) {
    return ma(o), null;
  } finally {
    Lt(n), bt(r), Mr(i);
  }
}, Hi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    T(this, tn).pending
  );
  T(this, Rt) !== null && (oe(this, dn, document.createDocumentFragment()), T(this, dn).append(
    /** @type {TemplateNode} */
    T(this, Pn)
  ), Ya(T(this, Rt), T(this, dn))), T(this, _t) === null && oe(this, _t, wt(() => t(T(this, Ht))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
$o = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Fe(n = this.parent, tt, $o).call(n, t);
    return;
  }
  oe(this, Nn, T(this, Nn) + t), T(this, Nn) === 0 && (oe(this, Dt, !1), T(this, _t) && Un(T(this, _t), () => {
    oe(this, _t, null);
  }), T(this, dn) && (T(this, Ht).before(T(this, dn)), oe(this, dn, null)));
};
function Ea(e, t, n, r) {
  const i = ui() ? ci : ne;
  if (n.length === 0 && e.length === 0) {
    r(t.map(i));
    return;
  }
  var o = Ne, s = (
    /** @type {Effect} */
    xe
  ), l = uf();
  function a() {
    Promise.all(n.map((u) => /* @__PURE__ */ cf(u))).then((u) => {
      l();
      try {
        r([...t.map(i), ...u]);
      } catch (c) {
        s.f & mn || Pr(c, s);
      }
      o == null || o.deactivate(), Wi();
    }).catch((u) => {
      Pr(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return a();
    } finally {
      o == null || o.deactivate(), Wi();
    }
  }) : a();
}
function uf() {
  var e = xe, t = ye, n = Ce, r = Ne;
  return function(o = !0) {
    Lt(e), bt(t), Mr(n), o && (r == null || r.activate());
  };
}
function Wi() {
  Lt(null), bt(null), Mr(null);
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  var t = ct | Tt, n = ye !== null && ye.f & ct ? (
    /** @type {Derived} */
    ye
  ) : null;
  return xe !== null && (xe.f |= Hr), {
    ctx: Ce,
    deps: null,
    effects: null,
    equals: ya,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ot
    ),
    wv: 0,
    parent: n ?? xe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function cf(e, t) {
  let n = (
    /** @type {Effect | null} */
    xe
  );
  n === null && Mc();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Rn(
    /** @type {V} */
    ot
  ), s = !ye, l = /* @__PURE__ */ new Map();
  return wf(() => {
    var d;
    var a = aa();
    i = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        u === Ne && u.committed && u.deactivate(), Wi();
      });
    } catch (g) {
      a.reject(g), Wi();
    }
    var u = (
      /** @type {Batch} */
      Ne
    );
    if (s) {
      var c = !r.is_pending();
      r.update_pending_count(1), u.increment(c), (d = l.get(u)) == null || d.reject(cr), l.delete(u), l.set(u, a);
    }
    const h = (g, b = void 0) => {
      if (u.activate(), b)
        b !== cr && (o.f |= In, Nr(o, b));
      else {
        o.f & In && (o.f ^= In), Nr(o, g);
        for (const [S, w] of l) {
          if (l.delete(S), S === u) break;
          w.reject(cr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(c));
    };
    a.promise.then(h, (g) => h(null, g || "unknown"));
  }), yo(() => {
    for (const a of l.values())
      a.reject(cr);
  }), new Promise((a) => {
    function u(c) {
      function h() {
        c === i ? a(o) : u(i);
      }
      c.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = /* @__PURE__ */ ci(e);
  return Xa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  const t = /* @__PURE__ */ ci(e);
  return t.equals = pa, t;
}
function Sa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      at(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ff(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ct))
      return t.f & mn ? null : (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function As(e) {
  var t, n = xe;
  Lt(ff(e));
  try {
    e.f &= ~Jn, Sa(e), t = Ka(e);
  } finally {
    Lt(n);
  }
  return t;
}
function ka(e) {
  var t = As(e);
  if (e.equals(t) || (Ne != null && Ne.is_fork || (e.v = t), e.wv = Fa()), !sr)
    if (Ze !== null)
      ($r() || Ne != null && Ne.is_fork) && Ze.set(e, t);
    else {
      var n = e.f & Kt ? st : qt;
      ut(e, n);
    }
}
let jo = /* @__PURE__ */ new Set();
const Dn = /* @__PURE__ */ new Map();
let Ca = !1;
function Rn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ya,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Qt(e, t) {
  const n = Rn(e);
  return Xa(n), n;
}
// @__NO_SIDE_EFFECTS__
function W(e, t = !1, n = !0) {
  var i;
  const r = Rn(e);
  return t || (r.equals = pa), Rr && n && Ce !== null && Ce.l !== null && ((i = Ce.l).s ?? (i.s = [])).push(r), r;
}
function Y(e, t, n = !1) {
  ye !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!sn || ye.f & sl) && ui() && ye.f & (ct | Sn | Cs | sl) && !(yt != null && yt.includes(e)) && Dc();
  let r = n ? dr(t) : t;
  return Nr(e, r);
}
function Nr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    sr ? Dn.set(e, t) : Dn.set(e, n), e.v = t;
    var r = vn.ensure();
    r.capture(e, n), e.f & ct && (e.f & Tt && As(
      /** @type {Derived} */
      e
    ), ut(e, e.f & Kt ? st : qt)), e.wv = Fa(), Ma(e, Tt), ui() && xe !== null && xe.f & st && !(xe.f & (kn | ir)) && (It === null ? Ef([e]) : It.push(e)), !r.is_fork && jo.size > 0 && !Ca && df();
  }
  return t;
}
function df() {
  Ca = !1;
  var e = Zn;
  Ki(!0);
  const t = Array.from(jo);
  try {
    for (const n of t)
      n.f & st && ut(n, qt), Vr(n) && Ar(n);
  } finally {
    Ki(e);
  }
  jo.clear();
}
function ul(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return Y(e, n), r;
}
function Gr(e) {
  Y(e, e.v + 1);
}
function Ma(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ui(), i = n.length, o = 0; o < i; o++) {
      var s = n[o], l = s.f;
      if (!(!r && s === xe)) {
        var a = (l & Tt) === 0;
        if (a && ut(s, t), l & ct) {
          var u = (
            /** @type {Derived} */
            s
          );
          Ze == null || Ze.delete(u), l & Jn || (l & Kt && (s.f |= Jn), Ma(u, qt));
        } else a && (l & Sn && Xt !== null && Xt.add(
          /** @type {Effect} */
          s
        ), Qn(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function dr(e) {
  if (typeof e != "object" || e === null || ln in e)
    return e;
  const t = Es(e);
  if (t !== Ec && t !== Sc)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ai(e), i = /* @__PURE__ */ Qt(0), o = Gn, s = (l) => {
    if (Gn === o)
      return l();
    var a = ye, u = Gn;
    bt(null), dl(o);
    var c = l();
    return bt(a), dl(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ Qt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Oc();
        var c = n.get(a);
        return c === void 0 ? c = s(() => {
          var h = /* @__PURE__ */ Qt(u.value);
          return n.set(a, h), h;
        }) : Y(c, u.value, !0), !0;
      },
      deleteProperty(l, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in l) {
            const c = s(() => /* @__PURE__ */ Qt(ot));
            n.set(a, c), Gr(i);
          }
        } else
          Y(u, ot), Gr(i);
        return !0;
      },
      get(l, a, u) {
        var g;
        if (a === ln)
          return e;
        var c = n.get(a), h = a in l;
        if (c === void 0 && (!h || (g = On(l, a)) != null && g.writable) && (c = s(() => {
          var b = dr(h ? l[a] : ot), S = /* @__PURE__ */ Qt(b);
          return S;
        }), n.set(a, c)), c !== void 0) {
          var d = f(c);
          return d === ot ? void 0 : d;
        }
        return Reflect.get(l, a, u);
      },
      getOwnPropertyDescriptor(l, a) {
        var u = Reflect.getOwnPropertyDescriptor(l, a);
        if (u && "value" in u) {
          var c = n.get(a);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var h = n.get(a), d = h == null ? void 0 : h.v;
          if (h !== void 0 && d !== ot)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(l, a) {
        var d;
        if (a === ln)
          return !0;
        var u = n.get(a), c = u !== void 0 && u.v !== ot || Reflect.has(l, a);
        if (u !== void 0 || xe !== null && (!c || (d = On(l, a)) != null && d.writable)) {
          u === void 0 && (u = s(() => {
            var g = c ? dr(l[a]) : ot, b = /* @__PURE__ */ Qt(g);
            return b;
          }), n.set(a, u));
          var h = f(u);
          if (h === ot)
            return !1;
        }
        return c;
      },
      set(l, a, u, c) {
        var y;
        var h = n.get(a), d = a in l;
        if (r && a === "length")
          for (var g = u; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var b = n.get(g + "");
            b !== void 0 ? Y(b, ot) : g in l && (b = s(() => /* @__PURE__ */ Qt(ot)), n.set(g + "", b));
          }
        if (h === void 0)
          (!d || (y = On(l, a)) != null && y.writable) && (h = s(() => /* @__PURE__ */ Qt(void 0)), Y(h, dr(u)), n.set(a, h));
        else {
          d = h.v !== ot;
          var S = s(() => dr(u));
          Y(h, S);
        }
        var w = Reflect.getOwnPropertyDescriptor(l, a);
        if (w != null && w.set && w.set.call(c, u), !d) {
          if (r && typeof a == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), _ = Number(a);
            Number.isInteger(_) && _ >= x.v && Y(x, _ + 1);
          }
          Gr(i);
        }
        return !0;
      },
      ownKeys(l) {
        f(i);
        var a = Reflect.ownKeys(l).filter((h) => {
          var d = n.get(h);
          return d === void 0 || d.v !== ot;
        });
        for (var [u, c] of n)
          c.v !== ot && !(u in l) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Ic();
      }
    }
  );
}
function cl(e) {
  try {
    if (e !== null && typeof e == "object" && ln in e)
      return e[ln];
  } catch {
  }
  return e;
}
function hf(e, t) {
  return Object.is(cl(e), cl(t));
}
var mt, Pa, Na, Aa;
function gf() {
  if (mt === void 0) {
    mt = window, Pa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Na = On(t, "firstChild").get, Aa = On(t, "nextSibling").get, ol(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ol(n) && (n.__t = void 0);
  }
}
function _n(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return (
    /** @type {TemplateNode | null} */
    Na.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  return (
    /** @type {TemplateNode | null} */
    Aa.call(e)
  );
}
function Xe(e, t) {
  return /* @__PURE__ */ hn(e);
}
function $e(e, t = !1) {
  {
    var n = /* @__PURE__ */ hn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ fi(n) : n;
  }
}
function Oe(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ fi(r);
  return r;
}
function vf(e) {
  e.textContent = "";
}
function Ta() {
  return !1;
}
function yf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, or(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Ts(e) {
  var t = ye, n = xe;
  bt(null), Lt(null);
  try {
    return e();
  } finally {
    bt(t), Lt(n);
  }
}
function za(e) {
  xe === null && (ye === null && Ac(), Nc()), sr && Pc();
}
function pf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Zt(e, t, n) {
  var r = xe;
  r !== null && r.f & At && (e |= At);
  var i = {
    ctx: Ce,
    deps: null,
    nodes: null,
    f: e | Tt | Kt,
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
      Ar(i), i.f |= ks;
    } catch (l) {
      throw at(i), l;
    }
  else t !== null && Qn(i);
  var o = i;
  if (n && o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
  !(o.f & Hr) && (o = o.first, e & Sn && e & jn && o !== null && (o.f |= jn)), o !== null && (o.parent = r, r !== null && pf(o, r), ye !== null && ye.f & ct && !(e & ir))) {
    var s = (
      /** @type {Derived} */
      ye
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return i;
}
function $r() {
  return ye !== null && !sn;
}
function yo(e) {
  const t = Zt(ho, null, !1);
  return ut(t, st), t.teardown = e, t;
}
function Jo(e) {
  za();
  var t = (
    /** @type {Effect} */
    xe.f
  ), n = !ye && (t & kn) !== 0 && (t & ks) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ce
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Oa(e);
}
function Oa(e) {
  return Zt(Ss | fa, e, !1);
}
function mf(e) {
  return za(), Zt(ho | fa, e, !0);
}
function _f(e) {
  vn.ensure();
  const t = Zt(ir | Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Un(t, () => {
      at(t), r(void 0);
    }) : (at(t), r(void 0));
  });
}
function Nt(e) {
  return Zt(Ss, e, !1);
}
function $(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ce
  ), r = { effect: null, ran: !1, deps: e };
  n.l.$.push(r), r.effect = di(() => {
    e(), !r.ran && (r.ran = !0, O(t));
  });
}
function dt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ce
  );
  di(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      n.f & st && ut(n, qt), Vr(n) && Ar(n), t.ran = !1;
    }
  });
}
function wf(e) {
  return Zt(Cs | Hr, e, !0);
}
function di(e, t = 0) {
  return Zt(ho | t, e, !0);
}
function Ve(e, t = [], n = [], r = []) {
  Ea(r, t, n, (i) => {
    Zt(ho, () => e(...i.map(f)), !0);
  });
}
function po(e, t = 0) {
  var n = Zt(Sn | t, e, !0);
  return n;
}
function Ia(e, t = 0) {
  var n = Zt(ua | t, e, !0);
  return n;
}
function wt(e) {
  return Zt(kn | Hr, e, !0);
}
function Da(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = sr, r = ye;
    fl(!0), bt(null);
    try {
      t.call(null);
    } finally {
      fl(n), bt(r);
    }
  }
}
function Ha(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ts(() => {
      i.abort(cr);
    });
    var r = n.next;
    n.f & ir ? n.parent = null : at(n, t), n = r;
  }
}
function bf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & kn || at(t), t = n;
  }
}
function at(e, t = !0) {
  var n = !1;
  (t || e.f & ca) && e.nodes !== null && e.nodes.end !== null && (xf(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Ha(e, t && !n), qi(e, 0), ut(e, mn);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const o of r)
      o.stop();
  Da(e);
  var i = e.parent;
  i !== null && i.first !== null && Ra(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function xf(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ fi(e);
    e.remove(), e = n;
  }
}
function Ra(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Un(e, t, n = !0) {
  var r = [];
  Va(e, r, !0);
  var i = () => {
    n && at(e), t && t();
  }, o = r.length;
  if (o > 0) {
    var s = () => --o || i();
    for (var l of r)
      l.out(s);
  } else
    i();
}
function Va(e, t, n) {
  if (!(e.f & At)) {
    e.f ^= At;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var o = i.next, s = (i.f & jn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & kn) !== 0 && (e.f & Sn) !== 0;
      Va(i, t, s ? n : !1), i = o;
    }
  }
}
function zs(e) {
  La(e, !0);
}
function La(e, t) {
  if (e.f & At) {
    e.f ^= At, e.f & st || (ut(e, Tt), Qn(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & jn) !== 0 || (n.f & kn) !== 0;
      La(n, i ? t : !1), n = r;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const s of o)
        (s.is_global || t) && s.in();
  }
}
function Ya(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ fi(n);
      t.append(n), n = i;
    }
}
let Zn = !1;
function Ki(e) {
  Zn = e;
}
let sr = !1;
function fl(e) {
  sr = e;
}
let ye = null, sn = !1;
function bt(e) {
  ye = e;
}
let xe = null;
function Lt(e) {
  xe = e;
}
let yt = null;
function Xa(e) {
  ye !== null && (yt === null ? yt = [e] : yt.push(e));
}
let vt = null, Mt = 0, It = null;
function Ef(e) {
  It = e;
}
let Ba = 1, jr = 0, Gn = jr;
function dl(e) {
  Gn = e;
}
function Fa() {
  return ++Ba;
}
function Vr(e) {
  var t = e.f;
  if (t & Tt)
    return !0;
  if (t & ct && (e.f &= ~Jn), t & qt) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var o = n[i];
        if (Vr(
          /** @type {Derived} */
          o
        ) && ka(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
      }
    t & Kt && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ze === null && ut(e, st);
  }
  return !1;
}
function Wa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(yt != null && yt.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      o.f & ct ? Wa(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (n ? ut(o, Tt) : o.f & st && ut(o, qt), Qn(
        /** @type {Effect} */
        o
      ));
    }
}
function Ka(e) {
  var b;
  var t = vt, n = Mt, r = It, i = ye, o = yt, s = Ce, l = sn, a = Gn, u = e.f;
  vt = /** @type {null | Value[]} */
  null, Mt = 0, It = null, ye = u & (kn | ir) ? null : e, yt = null, Mr(e.ctx), sn = !1, Gn = ++jr, e.ac !== null && (Ts(() => {
    e.ac.abort(cr);
  }), e.ac = null);
  try {
    e.f |= Ko;
    var c = (
      /** @type {Function} */
      e.fn
    ), h = c(), d = e.deps;
    if (vt !== null) {
      var g;
      if (qi(e, Mt), d !== null && Mt > 0)
        for (d.length = Mt + vt.length, g = 0; g < vt.length; g++)
          d[Mt + g] = vt[g];
      else
        e.deps = d = vt;
      if ($r() && e.f & Kt)
        for (g = Mt; g < d.length; g++)
          ((b = d[g]).reactions ?? (b.reactions = [])).push(e);
    } else d !== null && Mt < d.length && (qi(e, Mt), d.length = Mt);
    if (ui() && It !== null && !sn && d !== null && !(e.f & (ct | qt | Tt)))
      for (g = 0; g < /** @type {Source[]} */
      It.length; g++)
        Wa(
          It[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (jr++, It !== null && (r === null ? r = It : r.push(.../** @type {Source[]} */
    It))), e.f & In && (e.f ^= In), h;
  } catch (S) {
    return ma(S);
  } finally {
    e.f ^= Ko, vt = t, Mt = n, It = r, ye = i, yt = o, Mr(s), sn = l, Gn = a;
  }
}
function Sf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = xc.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && t.f & ct && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (vt === null || !vt.includes(t)) && (ut(t, qt), t.f & Kt && (t.f ^= Kt, t.f &= ~Jn), Sa(
    /** @type {Derived} **/
    t
  ), qi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function qi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Sf(e, n[r]);
}
function Ar(e) {
  var t = e.f;
  if (!(t & mn)) {
    ut(e, st);
    var n = xe, r = Zn;
    xe = e, Zn = !0;
    try {
      t & (Sn | ua) ? bf(e) : Ha(e), Da(e);
      var i = Ka(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ba;
      var o;
    } finally {
      Zn = r, xe = n;
    }
  }
}
function f(e) {
  var t = e.f, n = (t & ct) !== 0;
  if (ye !== null && !sn) {
    var r = xe !== null && (xe.f & mn) !== 0;
    if (!r && !(yt != null && yt.includes(e))) {
      var i = ye.deps;
      if (ye.f & Ko)
        e.rv < jr && (e.rv = jr, vt === null && i !== null && i[Mt] === e ? Mt++ : vt === null ? vt = [e] : vt.includes(e) || vt.push(e));
      else {
        (ye.deps ?? (ye.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [ye] : o.includes(ye) || o.push(ye);
      }
    }
  }
  if (sr) {
    if (Dn.has(e))
      return Dn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), l = s.v;
      return (!(s.f & st) && s.reactions !== null || Ua(s)) && (l = As(s)), Dn.set(s, l), l;
    }
  } else n && (!(Ze != null && Ze.has(e)) || Ne != null && Ne.is_fork && !$r()) && (s = /** @type {Derived} */
  e, Vr(s) && ka(s), Zn && $r() && !(s.f & Kt) && qa(s));
  if (Ze != null && Ze.has(e))
    return Ze.get(e);
  if (e.f & In)
    throw e.v;
  return e.v;
}
function qa(e) {
  if (e.deps !== null) {
    e.f ^= Kt;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & ct && !(t.f & Kt) && qa(
        /** @type {Derived} */
        t
      );
  }
}
function Ua(e) {
  if (e.v === ot) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Dn.has(t) || t.f & ct && Ua(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function O(e) {
  var t = sn;
  try {
    return sn = !0, e();
  } finally {
    sn = t;
  }
}
const kf = -7169;
function ut(e, t) {
  e.f = e.f & kf | t;
}
function M(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ln in e)
      Qo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ln in n && Qo(n);
      }
  }
}
function Qo(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Qo(e[r], t);
      } catch {
      }
    const n = Es(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = la(n);
      for (let i in r) {
        const o = r[i].get;
        if (o)
          try {
            o.call(e);
          } catch {
          }
      }
    }
  }
}
function Cf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Mf = [
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
function Pf(e) {
  return Mf.includes(e);
}
const Nf = {
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
function Af(e) {
  return e = e.toLowerCase(), Nf[e] ?? e;
}
const Tf = ["touchstart", "touchmove"];
function zf(e) {
  return Tf.includes(e);
}
const Za = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ new Set();
function Ga(e, t, n, r = {}) {
  function i(o) {
    if (r.capture || Kr.call(t, o), !o.cancelBubble)
      return Ts(() => n == null ? void 0 : n.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? or(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function De(e, t, n, r, i) {
  var o = { capture: r, passive: i }, s = Ga(e, t, n, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && yo(() => {
    t.removeEventListener(e, s, o);
  });
}
function Of(e) {
  for (var t = 0; t < e.length; t++)
    Za.add(e[t]);
  for (var n of es)
    n(e);
}
let hl = null;
function Kr(e) {
  var w;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  hl = e;
  var s = 0, l = hl === e && e.__root;
  if (l) {
    var a = i.indexOf(l);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    a <= u && (s = a);
  }
  if (o = /** @type {Element} */
  i[s] || e.target, o !== t) {
    sa(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var c = ye, h = xe;
    bt(null), Lt(null);
    try {
      for (var d, g = []; o !== null; ) {
        var b = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var S = o["__" + r];
          S != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && S.call(o, e);
        } catch (x) {
          d ? g.push(x) : d = x;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        o = b;
      }
      if (d) {
        for (let x of g)
          queueMicrotask(() => {
            throw x;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, bt(c), Lt(h);
    }
  }
}
function $a(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Tr(e, t) {
  var n = (
    /** @type {Effect} */
    xe
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Ye(e, t) {
  var n = (t & va) !== 0, r = (t & Kc) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = $a(o ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ hn(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Pa ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ hn(s)
      ), a = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Tr(l, a);
    } else
      Tr(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function If(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = (t & va) !== 0, o = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        $a(o)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ hn(l)
      );
      if (i)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ hn(a); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ hn(a)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ hn(a);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (i) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ hn(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Tr(c, h);
    } else
      Tr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function je(e, t) {
  return /* @__PURE__ */ If(e, t, "svg");
}
function Df(e = "") {
  {
    var t = _n(e + "");
    return Tr(t, t), t;
  }
}
function Ut() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = _n();
  return e.append(t, n), Tr(t, n), e;
}
function J(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function hi(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Hf(e, t) {
  return Rf(e, t);
}
const lr = /* @__PURE__ */ new Map();
function Rf(e, { target: t, anchor: n, props: r = {}, events: i, context: o, intro: s = !0 }) {
  gf();
  var l = /* @__PURE__ */ new Set(), a = (h) => {
    for (var d = 0; d < h.length; d++) {
      var g = h[d];
      if (!l.has(g)) {
        l.add(g);
        var b = zf(g);
        t.addEventListener(g, Kr, { passive: b });
        var S = lr.get(g);
        S === void 0 ? (document.addEventListener(g, Kr, { passive: b }), lr.set(g, 1)) : lr.set(g, S + 1);
      }
    }
  };
  a(fo(Za)), es.add(a);
  var u = void 0, c = _f(() => {
    var h = n ?? t.appendChild(_n());
    return of(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        if (o) {
          de({});
          var g = (
            /** @type {ComponentContext} */
            Ce
          );
          g.c = o;
        }
        i && (r.$$events = i), u = e(d, r) || {}, o && he();
      }
    ), () => {
      var b;
      for (var d of l) {
        t.removeEventListener(d, Kr);
        var g = (
          /** @type {number} */
          lr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, Kr), lr.delete(d)) : lr.set(d, g);
      }
      es.delete(a), h !== n && ((b = h.parentNode) == null || b.removeChild(h));
    };
  });
  return Vf.set(u, c), u;
}
let Vf = /* @__PURE__ */ new WeakMap();
var Bt, on, Pt, qn, oi, si, ao;
class ja {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Yt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    fe(this, Bt, /* @__PURE__ */ new Map());
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
    fe(this, on, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    fe(this, Pt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    fe(this, qn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    fe(this, oi, !0);
    fe(this, si, () => {
      var t = (
        /** @type {Batch} */
        Ne
      );
      if (T(this, Bt).has(t)) {
        var n = (
          /** @type {Key} */
          T(this, Bt).get(t)
        ), r = T(this, on).get(n);
        if (r)
          zs(r), T(this, qn).delete(n);
        else {
          var i = T(this, Pt).get(n);
          i && (T(this, on).set(n, i.effect), T(this, Pt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [o, s] of T(this, Bt)) {
          if (T(this, Bt).delete(o), o === t)
            break;
          const l = T(this, Pt).get(s);
          l && (at(l.effect), T(this, Pt).delete(s));
        }
        for (const [o, s] of T(this, on)) {
          if (o === n || T(this, qn).has(o)) continue;
          const l = () => {
            if (Array.from(T(this, Bt).values()).includes(o)) {
              var u = document.createDocumentFragment();
              Ya(s, u), u.append(_n()), T(this, Pt).set(o, { effect: s, fragment: u });
            } else
              at(s);
            T(this, qn).delete(o), T(this, on).delete(o);
          };
          T(this, oi) || !r ? (T(this, qn).add(o), Un(s, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    fe(this, ao, (t) => {
      T(this, Bt).delete(t);
      const n = Array.from(T(this, Bt).values());
      for (const [r, i] of T(this, Pt))
        n.includes(r) || (at(i.effect), T(this, Pt).delete(r));
    });
    this.anchor = t, oe(this, oi, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Ne
    ), i = Ta();
    if (n && !T(this, on).has(t) && !T(this, Pt).has(t))
      if (i) {
        var o = document.createDocumentFragment(), s = _n();
        o.append(s), T(this, Pt).set(t, {
          effect: wt(() => n(s)),
          fragment: o
        });
      } else
        T(this, on).set(
          t,
          wt(() => n(this.anchor))
        );
    if (T(this, Bt).set(r, t), i) {
      for (const [l, a] of T(this, on))
        l === t ? r.skipped_effects.delete(a) : r.skipped_effects.add(a);
      for (const [l, a] of T(this, Pt))
        l === t ? r.skipped_effects.delete(a.effect) : r.skipped_effects.add(a.effect);
      r.oncommit(T(this, si)), r.ondiscard(T(this, ao));
    } else
      T(this, si).call(this);
  }
}
Bt = new WeakMap(), on = new WeakMap(), Pt = new WeakMap(), qn = new WeakMap(), oi = new WeakMap(), si = new WeakMap(), ao = new WeakMap();
function Ge(e, t, n = !1) {
  var r = new ja(e), i = n ? jn : 0;
  function o(s, l) {
    r.ensure(s, l);
  }
  po(() => {
    var s = !1;
    t((l, a = !0) => {
      s = !0, o(a, l);
    }), s || o(!1, null);
  }, i);
}
function Lf(e, t, n) {
  for (var r = [], i = t.length, o, s = t.length, l = 0; l < i; l++) {
    let h = t[l];
    Un(
      h,
      () => {
        if (o) {
          if (o.pending.delete(h), o.done.add(h), o.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ts(fo(o.done)), d.delete(o), d.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var a = r.length === 0 && n !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      vf(c), c.append(u), e.items.clear();
    }
    ts(t, !a);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function ts(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    at(e[n], t);
}
var gl;
function mo(e, t, n, r, i, o = null) {
  var s = e, l = /* @__PURE__ */ new Map(), a = (t & ha) !== 0;
  if (a) {
    var u = (
      /** @type {Element} */
      e
    );
    s = u.appendChild(_n());
  }
  var c = null, h = /* @__PURE__ */ ne(() => {
    var x = n();
    return ai(x) ? x : x == null ? [] : fo(x);
  }), d, g = !0;
  function b() {
    w.fallback = c, Yf(w, d, s, t, r), c !== null && (d.length === 0 ? c.f & gn ? (c.f ^= gn, qr(c, null, s)) : zs(c) : Un(c, () => {
      c = null;
    }));
  }
  var S = po(() => {
    d = /** @type {V[]} */
    f(h);
    for (var x = d.length, _ = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      Ne
    ), p = Ta(), C = 0; C < x; C += 1) {
      var z = d[C], P = r(z, C), D = g ? null : l.get(P);
      D ? (D.v && Nr(D.v, z), D.i && Nr(D.i, C), p && y.skipped_effects.delete(D.e)) : (D = Xf(
        l,
        g ? s : gl ?? (gl = _n()),
        z,
        P,
        C,
        i,
        t,
        n
      ), g || (D.e.f |= gn), l.set(P, D)), _.add(P);
    }
    if (x === 0 && o && !c && (g ? c = wt(() => o(s)) : (c = wt(() => o(gl ?? (gl = _n()))), c.f |= gn)), !g)
      if (p) {
        for (const [X, V] of l)
          _.has(X) || y.skipped_effects.add(V.e);
        y.oncommit(b), y.ondiscard(() => {
        });
      } else
        b();
    f(h);
  }), w = { effect: S, items: l, outrogroups: null, fallback: c };
  g = !1;
}
function Yf(e, t, n, r, i) {
  var V, F, H, L, m, k, E, N, A;
  var o = (r & Lc) !== 0, s = t.length, l = e.items, a = e.effect.first, u, c = null, h, d = [], g = [], b, S, w, x;
  if (o)
    for (x = 0; x < s; x += 1)
      b = t[x], S = i(b, x), w = /** @type {EachItem} */
      l.get(S).e, w.f & gn || ((F = (V = w.nodes) == null ? void 0 : V.a) == null || F.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(w));
  for (x = 0; x < s; x += 1) {
    if (b = t[x], S = i(b, x), w = /** @type {EachItem} */
    l.get(S).e, e.outrogroups !== null)
      for (const I of e.outrogroups)
        I.pending.delete(w), I.done.delete(w);
    if (w.f & gn)
      if (w.f ^= gn, w === a)
        qr(w, null, n);
      else {
        var _ = c ? c.next : a;
        w === e.effect.last && (e.effect.last = w.prev), w.prev && (w.prev.next = w.next), w.next && (w.next.prev = w.prev), Cn(e, c, w), Cn(e, w, _), qr(w, _, n), c = w, d = [], g = [], a = c.next;
        continue;
      }
    if (w.f & At && (zs(w), o && ((L = (H = w.nodes) == null ? void 0 : H.a) == null || L.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(w))), w !== a) {
      if (u !== void 0 && u.has(w)) {
        if (d.length < g.length) {
          var y = g[0], p;
          c = y.prev;
          var C = d[0], z = d[d.length - 1];
          for (p = 0; p < d.length; p += 1)
            qr(d[p], y, n);
          for (p = 0; p < g.length; p += 1)
            u.delete(g[p]);
          Cn(e, C.prev, z.next), Cn(e, c, C), Cn(e, z, y), a = y, c = z, x -= 1, d = [], g = [];
        } else
          u.delete(w), qr(w, a, n), Cn(e, w.prev, w.next), Cn(e, w, c === null ? e.effect.first : c.next), Cn(e, c, w), c = w;
        continue;
      }
      for (d = [], g = []; a !== null && a !== w; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(a), g.push(a), a = a.next;
      if (a === null)
        continue;
    }
    w.f & gn || d.push(w), c = w, a = w.next;
  }
  if (e.outrogroups !== null) {
    for (const I of e.outrogroups)
      I.pending.size === 0 && (ts(fo(I.done)), (m = e.outrogroups) == null || m.delete(I));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || u !== void 0) {
    var P = [];
    if (u !== void 0)
      for (w of u)
        w.f & At || P.push(w);
    for (; a !== null; )
      !(a.f & At) && a !== e.fallback && P.push(a), a = a.next;
    var D = P.length;
    if (D > 0) {
      var X = r & ha && s === 0 ? n : null;
      if (o) {
        for (x = 0; x < D; x += 1)
          (E = (k = P[x].nodes) == null ? void 0 : k.a) == null || E.measure();
        for (x = 0; x < D; x += 1)
          (A = (N = P[x].nodes) == null ? void 0 : N.a) == null || A.fix();
      }
      Lf(e, P, X);
    }
  }
  o && or(() => {
    var I, R;
    if (h !== void 0)
      for (w of h)
        (R = (I = w.nodes) == null ? void 0 : I.a) == null || R.apply();
  });
}
function Xf(e, t, n, r, i, o, s, l) {
  var a = s & Rc ? s & Yc ? Rn(n) : /* @__PURE__ */ W(n, !1, !1) : null, u = s & Vc ? Rn(i) : null;
  return {
    v: a,
    i: u,
    e: wt(() => (o(t, a ?? n, u ?? i, l), () => {
      e.delete(r);
    }))
  };
}
function qr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, o = t && !(t.f & gn) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fi(r)
      );
      if (o.before(r), r === i)
        return;
      r = s;
    }
}
function Cn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Et(e, t, n, r, i) {
  var l;
  var o = (l = t.$$slots) == null ? void 0 : l[n], s = !1;
  o === !0 && (o = t[n === "default" ? "children" : n], s = !0), o === void 0 || o(e, s ? () => r : r);
}
function Bf(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Ja(e, t, n) {
  var r = new ja(e);
  po(() => {
    var i = t() ?? null;
    r.ensure(i, i && ((o) => n(o, i)));
  }, jn);
}
function gt(e, t, n) {
  Nt(() => {
    var r = O(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, o = (
        /** @type {any} */
        {}
      );
      di(() => {
        var s = n();
        M(s), i && Ms(o, s) && (o = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ff(e, t) {
  var n = void 0, r;
  Ia(() => {
    n !== (n = t()) && (r && (at(r), r = null), n && (r = wt(() => {
      Nt(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Qa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Qa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Wf() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Qa(e)) && (r && (r += " "), r += t);
  return r;
}
function un(e) {
  return typeof e == "object" ? Wf(e) : e ?? "";
}
const vl = [...` 	
\r\f \v\uFEFF`];
function Kf(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var o = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var l = s + o;
          (s === 0 || vl.includes(r[s - 1])) && (l === r.length || vl.includes(r[l])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(l + 1) : s = l;
        }
  }
  return r === "" ? null : r;
}
function yl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var o = e[i];
    o != null && o !== "" && (r += " " + i + ": " + o + n);
  }
  return r;
}
function To(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function qf(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var o = !1, s = 0, l = !1, a = [];
      r && a.push(...Object.keys(r).map(To)), i && a.push(...Object.keys(i).map(To));
      var u = 0, c = -1;
      const S = e.length;
      for (var h = 0; h < S; h++) {
        var d = e[h];
        if (l ? d === "/" && e[h - 1] === "*" && (l = !1) : o ? o === d && (o = !1) : d === "/" && e[h + 1] === "*" ? l = !0 : d === '"' || d === "'" ? o = d : d === "(" ? s++ : d === ")" && s--, !l && o === !1 && s === 0) {
          if (d === ":" && c === -1)
            c = h;
          else if (d === ";" || h === S - 1) {
            if (c !== -1) {
              var g = To(e.substring(u, c).trim());
              if (!a.includes(g)) {
                d !== ";" && h++;
                var b = e.substring(u, h).trim();
                n += " " + b + ";";
              }
            }
            u = h + 1, c = -1;
          }
        }
      }
    }
    return r && (n += yl(r)), i && (n += yl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Gt(e, t, n, r, i, o) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var l = Kf(n, r, o);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e.__className = n;
  } else if (o && i !== o)
    for (var a in o) {
      var u = !!o[a];
      (i == null || u !== !!i[a]) && e.classList.toggle(a, u);
    }
  return o;
}
function zo(e, t = {}, n, r) {
  for (var i in n) {
    var o = n[i];
    t[i] !== o && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, r));
  }
}
function St(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var o = qf(t, r);
    o == null ? e.removeAttribute("style") : e.style.cssText = o, e.__style = t;
  } else r && (Array.isArray(r) ? (zo(e, n == null ? void 0 : n[0], r[0]), zo(e, n == null ? void 0 : n[1], r[1], "important")) : zo(e, n, r));
  return r;
}
function ns(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ai(t))
      return Zc();
    for (var r of e.options)
      r.selected = t.includes(pl(r));
    return;
  }
  for (r of e.options) {
    var i = pl(r);
    if (hf(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Uf(e) {
  var t = new MutationObserver(() => {
    ns(e, e.__value);
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
  }), yo(() => {
    t.disconnect();
  });
}
function pl(e) {
  return "__value" in e ? e.__value : e.value;
}
const Xr = Symbol("class"), Ln = Symbol("style"), eu = Symbol("is custom element"), tu = Symbol("is html");
function Zf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function te(e, t, n, r) {
  var i = nu(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Cc] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ru(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Gf(e, t, n, r, i = !1, o = !1) {
  var s = nu(e), l = s[eu], a = !s[tu], u = t || {}, c = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = un(n.class) : (r || n[Xr]) && (n.class = null), n[Ln] && (n.style ?? (n.style = null));
  var d = ru(e);
  for (const p in n) {
    let C = n[p];
    if (c && p === "value" && C == null) {
      e.value = e.__value = "", u[p] = C;
      continue;
    }
    if (p === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Gt(e, g, C, r, t == null ? void 0 : t[Xr], n[Xr]), u[p] = C, u[Xr] = n[Xr];
      continue;
    }
    if (p === "style") {
      St(e, C, t == null ? void 0 : t[Ln], n[Ln]), u[p] = C, u[Ln] = n[Ln];
      continue;
    }
    var b = u[p];
    if (!(C === b && !(C === void 0 && e.hasAttribute(p)))) {
      u[p] = C;
      var S = p[0] + p[1];
      if (S !== "$$")
        if (S === "on") {
          const z = {}, P = "$$" + p;
          let D = p.slice(2);
          var w = Pf(D);
          if (Cf(D) && (D = D.slice(0, -7), z.capture = !0), !w && b) {
            if (C != null) continue;
            e.removeEventListener(D, u[P], z), u[P] = null;
          }
          if (C != null)
            if (w)
              e[`__${D}`] = C, Of([D]);
            else {
              let X = function(V) {
                u[p].call(this, V);
              };
              var y = X;
              u[P] = Ga(D, e, X, z);
            }
          else w && (e[`__${D}`] = void 0);
        } else if (p === "style")
          te(e, p, C);
        else if (p === "autofocus")
          yf(
            /** @type {HTMLElement} */
            e,
            !!C
          );
        else if (!l && (p === "__value" || p === "value" && C != null))
          e.value = e.__value = C;
        else if (p === "selected" && c)
          Zf(
            /** @type {HTMLOptionElement} */
            e,
            C
          );
        else {
          var x = p;
          a || (x = Af(x));
          var _ = x === "defaultValue" || x === "defaultChecked";
          if (C == null && !l && !_)
            if (s[p] = null, x === "value" || x === "checked") {
              let z = (
                /** @type {HTMLInputElement} */
                e
              );
              const P = t === void 0;
              if (x === "value") {
                let D = z.defaultValue;
                z.removeAttribute(x), z.defaultValue = D, z.value = z.__value = P ? D : null;
              } else {
                let D = z.defaultChecked;
                z.removeAttribute(x), z.defaultChecked = D, z.checked = P ? D : !1;
              }
            } else
              e.removeAttribute(p);
          else _ || d.includes(x) && (l || typeof C != "string") ? (e[x] = C, x in s && (s[x] = ot)) : typeof C != "function" && te(e, x, C);
        }
    }
  }
  return u;
}
function Os(e, t, n = [], r = [], i = [], o, s = !1, l = !1) {
  Ea(i, n, r, (a) => {
    var u = void 0, c = {}, h = e.nodeName === "SELECT", d = !1;
    if (Ia(() => {
      var b = t(...a.map(f)), S = Gf(
        e,
        u,
        b,
        o,
        s,
        l
      );
      d && h && "value" in b && ns(
        /** @type {HTMLSelectElement} */
        e,
        b.value
      );
      for (let x of Object.getOwnPropertySymbols(c))
        b[x] || at(c[x]);
      for (let x of Object.getOwnPropertySymbols(b)) {
        var w = b[x];
        x.description === Uc && (!u || w !== u[x]) && (c[x] && at(c[x]), c[x] = wt(() => Ff(e, () => w))), S[x] = w;
      }
      u = S;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Nt(() => {
        ns(
          g,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Uf(g);
      });
    }
    d = !0;
  });
}
function nu(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [eu]: e.nodeName.includes("-"),
      [tu]: e.namespaceURI === qc
    })
  );
}
var ml = /* @__PURE__ */ new Map();
function ru(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ml.get(t);
  if (n) return n;
  ml.set(t, n = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = la(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = Es(i);
  }
  return n;
}
var Tn, Cr, li, uo, iu;
const co = class co {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    fe(this, uo);
    /** */
    fe(this, Tn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    fe(this, Cr);
    /** @type {ResizeObserverOptions} */
    fe(this, li);
    oe(this, li, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = T(this, Tn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), T(this, Tn).set(t, r), Fe(this, uo, iu).call(this).observe(t, T(this, li)), () => {
      var i = T(this, Tn).get(t);
      i.delete(n), i.size === 0 && (T(this, Tn).delete(t), T(this, Cr).unobserve(t));
    };
  }
};
Tn = new WeakMap(), Cr = new WeakMap(), li = new WeakMap(), uo = new WeakSet(), iu = function() {
  return T(this, Cr) ?? oe(this, Cr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        co.entries.set(n.target, n);
        for (var r of T(this, Tn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
Yt(co, "entries", /* @__PURE__ */ new WeakMap());
let rs = co;
var $f = /* @__PURE__ */ new rs({
  box: "border-box"
});
function _l(e, t, n) {
  var r = $f.observe(e, () => n(e[t]));
  Nt(() => (O(() => n(e[t])), r));
}
function wl(e, t) {
  return e === t || (e == null ? void 0 : e[ln]) === t;
}
function Is(e = {}, t, n, r) {
  return Nt(() => {
    var i, o;
    return di(() => {
      i = o, o = [], O(() => {
        e !== n(...o) && (t(e, ...o), i && wl(n(...i), e) && t(null, ...i));
      });
    }), () => {
      or(() => {
        o && wl(n(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function pe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ce
  ), n = t.l.u;
  if (!n) return;
  let r = () => M(t.s);
  if (e) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ci(() => {
      let l = !1;
      const a = t.s;
      for (const u in a)
        a[u] !== o[u] && (o[u] = a[u], l = !0);
      return l && i++, i;
    });
    r = () => f(s);
  }
  n.b.length && mf(() => {
    bl(t, r), Xi(n.b);
  }), Jo(() => {
    const i = O(() => n.m.map(kc));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), n.a.length && Jo(() => {
    bl(t, r), Xi(n.a);
  });
}
function bl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function me(e, t) {
  var o;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (o = e.$$events) == null ? void 0 : o[t.type]
  ), r = ai(n) ? n.slice() : n == null ? [] : [n];
  for (var i of r)
    i.call(this, t);
}
function Ds(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), pn;
  const r = O(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ar = [];
function Ot(e, t) {
  return {
    subscribe: ee(e, t).subscribe
  };
}
function ee(e, t = pn) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (Ms(e, l) && (e = l, n)) {
      const a = !ar.length;
      for (const u of r)
        u[1](), ar.push(u, e);
      if (a) {
        for (let u = 0; u < ar.length; u += 2)
          ar[u][0](ar[u + 1]);
        ar.length = 0;
      }
    }
  }
  function o(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function s(l, a = pn) {
    const u = [l, a];
    return r.add(u), r.size === 1 && (n = t(i, o) || pn), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function yr(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return Ot(n, (s, l) => {
    let a = !1;
    const u = [];
    let c = 0, h = pn;
    const d = () => {
      if (c)
        return;
      h();
      const b = t(r ? u[0] : u, s, l);
      o ? s(b) : h = typeof b == "function" ? b : pn;
    }, g = i.map(
      (b, S) => Ds(
        b,
        (w) => {
          u[S] = w, c &= ~(1 << S), a && d();
        },
        () => {
          c |= 1 << S;
        }
      )
    );
    return a = !0, d(), function() {
      Xi(g), h(), a = !1;
    };
  });
}
function U(e) {
  let t;
  return Ds(e, (n) => t = n)(), t;
}
let Mi = !1, is = Symbol();
function B(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ W(void 0),
    unsubscribe: pn
  });
  if (r.store !== e && !(is in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = pn;
    else {
      var i = !0;
      r.unsubscribe = Ds(e, (o) => {
        i ? r.source.v = o : Y(r.source, o);
      }), i = !1;
    }
  return e && is in n ? U(e) : f(r.source);
}
function jf(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = pn), e;
}
function Ui(e, t) {
  return e.set(t), t;
}
function nt() {
  const e = {};
  function t() {
    yo(() => {
      for (var n in e)
        e[n].unsubscribe();
      sa(e, is, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Jf(e) {
  var t = Mi;
  try {
    return Mi = !1, [e(), Mi];
  } finally {
    Mi = t;
  }
}
const Qf = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return f(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = xe;
      try {
        Lt(e.parent_effect), e.special[t] = v(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          ga
        );
      } finally {
        Lt(r);
      }
    }
    return e.special[t](n), ul(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), ul(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function We(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Rn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        xe
      )
    },
    Qf
  );
}
const ed = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Yr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      Yr(i) && (i = i());
      const o = On(i, t);
      if (o && o.set)
        return o.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Yr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = On(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === ln || t === da) return !1;
    for (let n of e.props)
      if (Yr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Yr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function hr(...e) {
  return new Proxy({ props: e }, ed);
}
function v(e, t, n, r) {
  var y;
  var i = !Rr || (n & Bc) !== 0, o = (n & Fc) !== 0, s = (n & Wc) !== 0, l = (
    /** @type {V} */
    r
  ), a = !0, u = () => (a && (a = !1, l = s ? O(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), c;
  if (o) {
    var h = ln in e || da in e;
    c = ((y = On(e, t)) == null ? void 0 : y.set) ?? (h && t in e ? (p) => e[t] = p : void 0);
  }
  var d, g = !1;
  o ? [d, g] = Jf(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && r !== void 0 && (d = u(), c && (i && zc(), c(d)));
  var b;
  if (i ? b = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p === void 0 ? u() : (a = !0, p);
  } : b = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p !== void 0 && (l = /** @type {V} */
    void 0), p === void 0 ? l : p;
  }, i && !(n & ga))
    return b;
  if (c) {
    var S = e.$$legacy;
    return (
      /** @type {() => V} */
      function(p, C) {
        return arguments.length > 0 ? ((!i || !C || S || g) && c(C ? b() : p), p) : b();
      }
    );
  }
  var w = !1, x = (n & Xc ? ci : ne)(() => (w = !1, b()));
  o && f(x);
  var _ = (
    /** @type {Effect} */
    xe
  );
  return (
    /** @type {() => V} */
    function(p, C) {
      if (arguments.length > 0) {
        const z = C ? f(x) : i && o ? dr(p) : p;
        return Y(x, z), w = !0, l !== void 0 && (l = z), p;
      }
      return sr && w || _.f & mn ? x.v : f(x);
    }
  );
}
function gi(e) {
  Ce === null && vo(), Rr && Ce.l !== null ? nd(Ce).m.push(e) : Jo(() => {
    const t = O(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ou(e) {
  Ce === null && vo(), gi(() => () => O(e));
}
function td(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function _o() {
  const e = Ce;
  return e === null && vo(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {string} */
        t
      ]
    );
    if (i) {
      const s = ai(i) ? i.slice() : [i], l = td(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const a of s)
        a.call(e.x, l);
      return !l.defaultPrevented;
    }
    return !0;
  };
}
function nd(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const rd = "5";
var oa;
typeof window < "u" && ((oa = window.__svelte ?? (window.__svelte = {})).v ?? (oa.v = /* @__PURE__ */ new Set())).add(rd);
$c();
function Ae(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Ae(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var id = { value: () => {
} };
function wo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ri(n);
}
function Ri(e) {
  this._ = e;
}
function od(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ri.prototype = wo.prototype = {
  constructor: Ri,
  on: function(e, t) {
    var n = this._, r = od(e + "", n), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (e = r[o]).type) && (i = sd(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < s; )
      if (i = (e = r[o]).type) n[i] = xl(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = xl(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ri(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, o = r.length; i < o; ++i) r[i].value.apply(t, n);
  }
};
function sd(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function xl(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = id, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var os = "http://www.w3.org/1999/xhtml";
const El = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: os,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function bo(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), El.hasOwnProperty(t) ? { space: El[t], local: e } : e;
}
function ld(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === os && t.documentElement.namespaceURI === os ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function ad(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function su(e) {
  var t = bo(e);
  return (t.local ? ad : ld)(t);
}
function ud() {
}
function Hs(e) {
  return e == null ? ud : function() {
    return this.querySelector(e);
  };
}
function cd(e) {
  typeof e != "function" && (e = Hs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], s = o.length, l = r[i] = new Array(s), a, u, c = 0; c < s; ++c)
      (a = o[c]) && (u = e.call(a, a.__data__, c, o)) && ("__data__" in a && (u.__data__ = a.__data__), l[c] = u);
  return new zt(r, this._parents);
}
function fd(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function dd() {
  return [];
}
function lu(e) {
  return e == null ? dd : function() {
    return this.querySelectorAll(e);
  };
}
function hd(e) {
  return function() {
    return fd(e.apply(this, arguments));
  };
}
function gd(e) {
  typeof e == "function" ? e = hd(e) : e = lu(e);
  for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
    for (var s = t[o], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && (r.push(e.call(a, a.__data__, u, s)), i.push(a));
  return new zt(r, i);
}
function au(e) {
  return function() {
    return this.matches(e);
  };
}
function uu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var vd = Array.prototype.find;
function yd(e) {
  return function() {
    return vd.call(this.children, e);
  };
}
function pd() {
  return this.firstElementChild;
}
function md(e) {
  return this.select(e == null ? pd : yd(typeof e == "function" ? e : uu(e)));
}
var _d = Array.prototype.filter;
function wd() {
  return Array.from(this.children);
}
function bd(e) {
  return function() {
    return _d.call(this.children, e);
  };
}
function xd(e) {
  return this.selectAll(e == null ? wd : bd(typeof e == "function" ? e : uu(e)));
}
function Ed(e) {
  typeof e != "function" && (e = au(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], s = o.length, l = r[i] = [], a, u = 0; u < s; ++u)
      (a = o[u]) && e.call(a, a.__data__, u, o) && l.push(a);
  return new zt(r, this._parents);
}
function cu(e) {
  return new Array(e.length);
}
function Sd() {
  return new zt(this._enter || this._groups.map(cu), this._parents);
}
function Zi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Zi.prototype = {
  constructor: Zi,
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
function kd(e) {
  return function() {
    return e;
  };
}
function Cd(e, t, n, r, i, o) {
  for (var s = 0, l, a = t.length, u = o.length; s < u; ++s)
    (l = t[s]) ? (l.__data__ = o[s], r[s] = l) : n[s] = new Zi(e, o[s]);
  for (; s < a; ++s)
    (l = t[s]) && (i[s] = l);
}
function Md(e, t, n, r, i, o, s) {
  var l, a, u = /* @__PURE__ */ new Map(), c = t.length, h = o.length, d = new Array(c), g;
  for (l = 0; l < c; ++l)
    (a = t[l]) && (d[l] = g = s.call(a, a.__data__, l, t) + "", u.has(g) ? i[l] = a : u.set(g, a));
  for (l = 0; l < h; ++l)
    g = s.call(e, o[l], l, o) + "", (a = u.get(g)) ? (r[l] = a, a.__data__ = o[l], u.delete(g)) : n[l] = new Zi(e, o[l]);
  for (l = 0; l < c; ++l)
    (a = t[l]) && u.get(d[l]) === a && (i[l] = a);
}
function Pd(e) {
  return e.__data__;
}
function Nd(e, t) {
  if (!arguments.length) return Array.from(this, Pd);
  var n = t ? Md : Cd, r = this._parents, i = this._groups;
  typeof e != "function" && (e = kd(e));
  for (var o = i.length, s = new Array(o), l = new Array(o), a = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], d = h.length, g = Ad(e.call(c, c && c.__data__, u, r)), b = g.length, S = l[u] = new Array(b), w = s[u] = new Array(b), x = a[u] = new Array(d);
    n(c, h, S, w, x, g, t);
    for (var _ = 0, y = 0, p, C; _ < b; ++_)
      if (p = S[_]) {
        for (_ >= y && (y = _ + 1); !(C = w[y]) && ++y < b; ) ;
        p._next = C || null;
      }
  }
  return s = new zt(s, r), s._enter = l, s._exit = a, s;
}
function Ad(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Td() {
  return new zt(this._exit || this._groups.map(cu), this._parents);
}
function zd(e, t, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Od(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, o = r.length, s = Math.min(i, o), l = new Array(i), a = 0; a < s; ++a)
    for (var u = n[a], c = r[a], h = u.length, d = l[a] = new Array(h), g, b = 0; b < h; ++b)
      (g = u[b] || c[b]) && (d[b] = g);
  for (; a < i; ++a)
    l[a] = n[a];
  return new zt(l, this._parents);
}
function Id() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Dd(e) {
  e || (e = Hd);
  function t(h, d) {
    return h && d ? e(h.__data__, d.__data__) : !h - !d;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = n[o], l = s.length, a = i[o] = new Array(l), u, c = 0; c < l; ++c)
      (u = s[c]) && (a[c] = u);
    a.sort(t);
  }
  return new zt(i, this._parents).order();
}
function Hd(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Rd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Vd() {
  return Array.from(this);
}
function Ld() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function Yd() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Xd() {
  return !this.node();
}
function Bd(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], o = 0, s = i.length, l; o < s; ++o)
      (l = i[o]) && e.call(l, l.__data__, o, i);
  return this;
}
function Fd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Wd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Kd(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function qd(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ud(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Zd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Gd(e, t) {
  var n = bo(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Wd : Fd : typeof t == "function" ? n.local ? Zd : Ud : n.local ? qd : Kd)(n, t));
}
function fu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function $d(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function jd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Jd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Qd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? $d : typeof t == "function" ? Jd : jd)(e, t, n ?? "")) : zr(this.node(), e);
}
function zr(e, t) {
  return e.style.getPropertyValue(t) || fu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function eh(e) {
  return function() {
    delete this[e];
  };
}
function th(e, t) {
  return function() {
    this[e] = t;
  };
}
function nh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function rh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? eh : typeof t == "function" ? nh : th)(e, t)) : this.node()[e];
}
function du(e) {
  return e.trim().split(/^|\s+/);
}
function Rs(e) {
  return e.classList || new hu(e);
}
function hu(e) {
  this._node = e, this._names = du(e.getAttribute("class") || "");
}
hu.prototype = {
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
function gu(e, t) {
  for (var n = Rs(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function vu(e, t) {
  for (var n = Rs(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function ih(e) {
  return function() {
    gu(this, e);
  };
}
function oh(e) {
  return function() {
    vu(this, e);
  };
}
function sh(e, t) {
  return function() {
    (t.apply(this, arguments) ? gu : vu)(this, e);
  };
}
function lh(e, t) {
  var n = du(e + "");
  if (arguments.length < 2) {
    for (var r = Rs(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? sh : t ? ih : oh)(n, t));
}
function ah() {
  this.textContent = "";
}
function uh(e) {
  return function() {
    this.textContent = e;
  };
}
function ch(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function fh(e) {
  return arguments.length ? this.each(e == null ? ah : (typeof e == "function" ? ch : uh)(e)) : this.node().textContent;
}
function dh() {
  this.innerHTML = "";
}
function hh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function gh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function vh(e) {
  return arguments.length ? this.each(e == null ? dh : (typeof e == "function" ? gh : hh)(e)) : this.node().innerHTML;
}
function yh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ph() {
  return this.each(yh);
}
function mh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _h() {
  return this.each(mh);
}
function wh(e) {
  var t = typeof e == "function" ? e : su(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function bh() {
  return null;
}
function xh(e, t) {
  var n = typeof e == "function" ? e : su(e), r = t == null ? bh : typeof t == "function" ? t : Hs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Sh() {
  return this.each(Eh);
}
function kh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ch() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mh(e) {
  return this.select(e ? Ch : kh);
}
function Ph(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Nh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Ah(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Th(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
        o = t[n], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function zh(e, t, n) {
  return function() {
    var r = this.__on, i, o = Nh(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((i = r[s]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, n), i = { type: e.type, name: e.name, value: t, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Oh(e, t, n) {
  var r = Ah(e + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var a = 0, u = l.length, c; a < u; ++a)
        for (i = 0, c = l[a]; i < o; ++i)
          if ((s = r[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (l = t ? zh : Th, i = 0; i < o; ++i) this.each(l(r[i], t, n));
  return this;
}
function yu(e, t, n) {
  var r = fu(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Ih(e, t) {
  return function() {
    return yu(this, e, t);
  };
}
function Dh(e, t) {
  return function() {
    return yu(this, e, t.apply(this, arguments));
  };
}
function Hh(e, t) {
  return this.each((typeof t == "function" ? Dh : Ih)(e, t));
}
function* Rh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var pu = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function vi() {
  return new zt([[document.documentElement]], pu);
}
function Vh() {
  return this;
}
zt.prototype = vi.prototype = {
  constructor: zt,
  select: cd,
  selectAll: gd,
  selectChild: md,
  selectChildren: xd,
  filter: Ed,
  data: Nd,
  enter: Sd,
  exit: Td,
  join: zd,
  merge: Od,
  selection: Vh,
  order: Id,
  sort: Dd,
  call: Rd,
  nodes: Vd,
  node: Ld,
  size: Yd,
  empty: Xd,
  each: Bd,
  attr: Gd,
  style: Qd,
  property: rh,
  classed: lh,
  text: fh,
  html: vh,
  raise: ph,
  lower: _h,
  append: wh,
  insert: xh,
  remove: Sh,
  clone: Mh,
  datum: Ph,
  on: Oh,
  dispatch: Hh,
  [Symbol.iterator]: Rh
};
function Vt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], pu);
}
function Lh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ft(e, t) {
  if (e = Lh(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Yh = { passive: !1 }, Jr = { capture: !0, passive: !1 };
function Oo(e) {
  e.stopImmediatePropagation();
}
function pr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function mu(e) {
  var t = e.document.documentElement, n = Vt(e).on("dragstart.drag", pr, Jr);
  "onselectstart" in t ? n.on("selectstart.drag", pr, Jr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function _u(e, t) {
  var n = e.document.documentElement, r = Vt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", pr, Jr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Pi = (e) => () => e;
function ss(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: s,
  y: l,
  dx: a,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: a, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
ss.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Xh(e) {
  return !e.ctrlKey && !e.button;
}
function Bh() {
  return this.parentNode;
}
function Fh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Wh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Kh() {
  var e = Xh, t = Bh, n = Fh, r = Wh, i = {}, o = wo("start", "drag", "end"), s = 0, l, a, u, c, h = 0;
  function d(p) {
    p.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", x, Yh).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(p, C) {
    if (!(c || !e.call(this, p, C))) {
      var z = y(this, t.call(this, p, C), p, C, "mouse");
      z && (Vt(p.view).on("mousemove.drag", b, Jr).on("mouseup.drag", S, Jr), mu(p.view), Oo(p), u = !1, l = p.clientX, a = p.clientY, z("start", p));
    }
  }
  function b(p) {
    if (pr(p), !u) {
      var C = p.clientX - l, z = p.clientY - a;
      u = C * C + z * z > h;
    }
    i.mouse("drag", p);
  }
  function S(p) {
    Vt(p.view).on("mousemove.drag mouseup.drag", null), _u(p.view, u), pr(p), i.mouse("end", p);
  }
  function w(p, C) {
    if (e.call(this, p, C)) {
      var z = p.changedTouches, P = t.call(this, p, C), D = z.length, X, V;
      for (X = 0; X < D; ++X)
        (V = y(this, P, p, C, z[X].identifier, z[X])) && (Oo(p), V("start", p, z[X]));
    }
  }
  function x(p) {
    var C = p.changedTouches, z = C.length, P, D;
    for (P = 0; P < z; ++P)
      (D = i[C[P].identifier]) && (pr(p), D("drag", p, C[P]));
  }
  function _(p) {
    var C = p.changedTouches, z = C.length, P, D;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < z; ++P)
      (D = i[C[P].identifier]) && (Oo(p), D("end", p, C[P]));
  }
  function y(p, C, z, P, D, X) {
    var V = o.copy(), F = Ft(X || z, C), H, L, m;
    if ((m = n.call(p, new ss("beforestart", {
      sourceEvent: z,
      target: d,
      identifier: D,
      active: s,
      x: F[0],
      y: F[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), P)) != null)
      return H = m.x - F[0] || 0, L = m.y - F[1] || 0, function k(E, N, A) {
        var I = F, R;
        switch (E) {
          case "start":
            i[D] = k, R = s++;
            break;
          case "end":
            delete i[D], --s;
          case "drag":
            F = Ft(A || N, C), R = s;
            break;
        }
        V.call(
          E,
          p,
          new ss(E, {
            sourceEvent: N,
            subject: m,
            target: d,
            identifier: D,
            active: R,
            x: F[0] + H,
            y: F[1] + L,
            dx: F[0] - I[0],
            dy: F[1] - I[1],
            dispatch: V
          }),
          P
        );
      };
  }
  return d.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Pi(!!p), d) : e;
  }, d.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Pi(p), d) : t;
  }, d.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Pi(p), d) : n;
  }, d.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : Pi(!!p), d) : r;
  }, d.on = function() {
    var p = o.on.apply(o, arguments);
    return p === o ? d : p;
  }, d.clickDistance = function(p) {
    return arguments.length ? (h = (p = +p) * p, d) : Math.sqrt(h);
  }, d;
}
function Vs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function wu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function yi() {
}
var Qr = 0.7, Gi = 1 / Qr, mr = "\\s*([+-]?\\d+)\\s*", ei = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", an = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", qh = /^#([0-9a-f]{3,8})$/, Uh = new RegExp(`^rgb\\(${mr},${mr},${mr}\\)$`), Zh = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Gh = new RegExp(`^rgba\\(${mr},${mr},${mr},${ei}\\)$`), $h = new RegExp(`^rgba\\(${an},${an},${an},${ei}\\)$`), jh = new RegExp(`^hsl\\(${ei},${an},${an}\\)$`), Jh = new RegExp(`^hsla\\(${ei},${an},${an},${ei}\\)$`), Sl = {
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
Vs(yi, ti, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: kl,
  // Deprecated! Use color.formatHex.
  formatHex: kl,
  formatHex8: Qh,
  formatHsl: eg,
  formatRgb: Cl,
  toString: Cl
});
function kl() {
  return this.rgb().formatHex();
}
function Qh() {
  return this.rgb().formatHex8();
}
function eg() {
  return bu(this).formatHsl();
}
function Cl() {
  return this.rgb().formatRgb();
}
function ti(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = qh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ml(t) : n === 3 ? new xt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ni(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ni(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Uh.exec(e)) ? new xt(t[1], t[2], t[3], 1) : (t = Zh.exec(e)) ? new xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Gh.exec(e)) ? Ni(t[1], t[2], t[3], t[4]) : (t = $h.exec(e)) ? Ni(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = jh.exec(e)) ? Al(t[1], t[2] / 100, t[3] / 100, 1) : (t = Jh.exec(e)) ? Al(t[1], t[2] / 100, t[3] / 100, t[4]) : Sl.hasOwnProperty(e) ? Ml(Sl[e]) : e === "transparent" ? new xt(NaN, NaN, NaN, 0) : null;
}
function Ml(e) {
  return new xt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ni(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new xt(e, t, n, r);
}
function tg(e) {
  return e instanceof yi || (e = ti(e)), e ? (e = e.rgb(), new xt(e.r, e.g, e.b, e.opacity)) : new xt();
}
function ls(e, t, n, r) {
  return arguments.length === 1 ? tg(e) : new xt(e, t, n, r ?? 1);
}
function xt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Vs(xt, ls, wu(yi, {
  brighter(e) {
    return e = e == null ? Gi : Math.pow(Gi, e), new xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qr : Math.pow(Qr, e), new xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new xt($n(this.r), $n(this.g), $n(this.b), $i(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pl,
  // Deprecated! Use color.formatHex.
  formatHex: Pl,
  formatHex8: ng,
  formatRgb: Nl,
  toString: Nl
}));
function Pl() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`;
}
function ng() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Nl() {
  const e = $i(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$n(this.r)}, ${$n(this.g)}, ${$n(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $i(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $n(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Yn(e) {
  return e = $n(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Al(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Wt(e, t, n, r);
}
function bu(e) {
  if (e instanceof Wt) return new Wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof yi || (e = ti(e)), !e) return new Wt();
  if (e instanceof Wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), o = Math.max(t, n, r), s = NaN, l = o - i, a = (o + i) / 2;
  return l ? (t === o ? s = (n - r) / l + (n < r) * 6 : n === o ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= a < 0.5 ? o + i : 2 - o - i, s *= 60) : l = a > 0 && a < 1 ? 0 : s, new Wt(s, l, a, e.opacity);
}
function rg(e, t, n, r) {
  return arguments.length === 1 ? bu(e) : new Wt(e, t, n, r ?? 1);
}
function Wt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Vs(Wt, rg, wu(yi, {
  brighter(e) {
    return e = e == null ? Gi : Math.pow(Gi, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qr : Math.pow(Qr, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new xt(
      Io(e >= 240 ? e - 240 : e + 120, i, r),
      Io(e, i, r),
      Io(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Wt(Tl(this.h), Ai(this.s), Ai(this.l), $i(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $i(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Tl(this.h)}, ${Ai(this.s) * 100}%, ${Ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Tl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Io(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xu = (e) => () => e;
function ig(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function og(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function sg(e) {
  return (e = +e) == 1 ? Eu : function(t, n) {
    return n - t ? og(t, n, e) : xu(isNaN(t) ? n : t);
  };
}
function Eu(e, t) {
  var n = t - e;
  return n ? ig(e, n) : xu(isNaN(e) ? t : e);
}
const zl = function e(t) {
  var n = sg(t);
  function r(i, o) {
    var s = n((i = ls(i)).r, (o = ls(o)).r), l = n(i.g, o.g), a = n(i.b, o.b), u = Eu(i.opacity, o.opacity);
    return function(c) {
      return i.r = s(c), i.g = l(c), i.b = a(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Mn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var as = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Do = new RegExp(as.source, "g");
function lg(e) {
  return function() {
    return e;
  };
}
function ag(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ug(e, t) {
  var n = as.lastIndex = Do.lastIndex = 0, r, i, o, s = -1, l = [], a = [];
  for (e = e + "", t = t + ""; (r = as.exec(e)) && (i = Do.exec(t)); )
    (o = i.index) > n && (o = t.slice(n, o), l[s] ? l[s] += o : l[++s] = o), (r = r[0]) === (i = i[0]) ? l[s] ? l[s] += i : l[++s] = i : (l[++s] = null, a.push({ i: s, x: Mn(r, i) })), n = Do.lastIndex;
  return n < t.length && (o = t.slice(n), l[s] ? l[s] += o : l[++s] = o), l.length < 2 ? a[0] ? ag(a[0].x) : lg(t) : (t = a.length, function(u) {
    for (var c = 0, h; c < t; ++c) l[(h = a[c]).i] = h.x(u);
    return l.join("");
  });
}
var Ol = 180 / Math.PI, us = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Su(e, t, n, r, i, o) {
  var s, l, a;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (a = e * n + t * r) && (n -= e * a, r -= t * a), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, a /= l), e * r < t * n && (e = -e, t = -t, a = -a, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, e) * Ol,
    skewX: Math.atan(a) * Ol,
    scaleX: s,
    scaleY: l
  };
}
var Ti;
function cg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? us : Su(t.a, t.b, t.c, t.d, t.e, t.f);
}
function fg(e) {
  return e == null || (Ti || (Ti = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ti.setAttribute("transform", e), !(e = Ti.transform.baseVal.consolidate())) ? us : (e = e.matrix, Su(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ku(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, d, g, b) {
    if (u !== h || c !== d) {
      var S = g.push("translate(", null, t, null, n);
      b.push({ i: S - 4, x: Mn(u, h) }, { i: S - 2, x: Mn(c, d) });
    } else (h || d) && g.push("translate(" + h + t + d + n);
  }
  function s(u, c, h, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Mn(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function l(u, c, h, d) {
    u !== c ? d.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Mn(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function a(u, c, h, d, g, b) {
    if (u !== h || c !== d) {
      var S = g.push(i(g) + "scale(", null, ",", null, ")");
      b.push({ i: S - 4, x: Mn(u, h) }, { i: S - 2, x: Mn(c, d) });
    } else (h !== 1 || d !== 1) && g.push(i(g) + "scale(" + h + "," + d + ")");
  }
  return function(u, c) {
    var h = [], d = [];
    return u = e(u), c = e(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, d), s(u.rotate, c.rotate, h, d), l(u.skewX, c.skewX, h, d), a(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, d), u = c = null, function(g) {
      for (var b = -1, S = d.length, w; ++b < S; ) h[(w = d[b]).i] = w.x(g);
      return h.join("");
    };
  };
}
var dg = ku(cg, "px, ", "px)", "deg)"), hg = ku(fg, ", ", ")", ")"), gg = 1e-12;
function Il(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function vg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function yg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const pg = function e(t, n, r) {
  function i(o, s) {
    var l = o[0], a = o[1], u = o[2], c = s[0], h = s[1], d = s[2], g = c - l, b = h - a, S = g * g + b * b, w, x;
    if (S < gg)
      x = Math.log(d / u) / t, w = function(P) {
        return [
          l + P * g,
          a + P * b,
          u * Math.exp(t * P * x)
        ];
      };
    else {
      var _ = Math.sqrt(S), y = (d * d - u * u + r * S) / (2 * u * n * _), p = (d * d - u * u - r * S) / (2 * d * n * _), C = Math.log(Math.sqrt(y * y + 1) - y), z = Math.log(Math.sqrt(p * p + 1) - p);
      x = (z - C) / t, w = function(P) {
        var D = P * x, X = Il(C), V = u / (n * _) * (X * yg(t * D + C) - vg(C));
        return [
          l + V * g,
          a + V * b,
          u * X / Il(t * D + C)
        ];
      };
    }
    return w.duration = x * 1e3 * t / Math.SQRT2, w;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), l = s * s, a = l * l;
    return e(s, l, a);
  }, i;
}(Math.SQRT2, 2, 4);
var Or = 0, Ur = 0, Br = 0, Cu = 1e3, ji, Zr, Ji = 0, er = 0, xo = 0, ni = typeof performance == "object" && performance.now ? performance : Date, Mu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ls() {
  return er || (Mu(mg), er = ni.now() + xo);
}
function mg() {
  er = 0;
}
function Qi() {
  this._call = this._time = this._next = null;
}
Qi.prototype = Pu.prototype = {
  constructor: Qi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ls() : +n) + (t == null ? 0 : +t), !this._next && Zr !== this && (Zr ? Zr._next = this : ji = this, Zr = this), this._call = e, this._time = n, cs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, cs());
  }
};
function Pu(e, t, n) {
  var r = new Qi();
  return r.restart(e, t, n), r;
}
function _g() {
  Ls(), ++Or;
  for (var e = ji, t; e; )
    (t = er - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function Dl() {
  er = (Ji = ni.now()) + xo, Or = Ur = 0;
  try {
    _g();
  } finally {
    Or = 0, bg(), er = 0;
  }
}
function wg() {
  var e = ni.now(), t = e - Ji;
  t > Cu && (xo -= t, Ji = e);
}
function bg() {
  for (var e, t = ji, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ji = n);
  Zr = e, cs(r);
}
function cs(e) {
  if (!Or) {
    Ur && (Ur = clearTimeout(Ur));
    var t = e - er;
    t > 24 ? (e < 1 / 0 && (Ur = setTimeout(Dl, e - ni.now() - xo)), Br && (Br = clearInterval(Br))) : (Br || (Ji = ni.now(), Br = setInterval(wg, Cu)), Or = 1, Mu(Dl));
  }
}
function Hl(e, t, n) {
  var r = new Qi();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var xg = wo("start", "end", "cancel", "interrupt"), Eg = [], Nu = 0, Rl = 1, fs = 2, Vi = 3, Vl = 4, ds = 5, Li = 6;
function Eo(e, t, n, r, i, o) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Sg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: xg,
    tween: Eg,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Nu
  });
}
function Ys(e, t) {
  var n = $t(e, t);
  if (n.state > Nu) throw new Error("too late; already scheduled");
  return n;
}
function cn(e, t) {
  var n = $t(e, t);
  if (n.state > Vi) throw new Error("too late; already running");
  return n;
}
function $t(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Sg(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = Pu(o, 0, n.time);
  function o(u) {
    n.state = Rl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, h, d, g;
    if (n.state !== Rl) return a();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Vi) return Hl(s);
        g.state === Vl ? (g.state = Li, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Li, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (Hl(function() {
      n.state === Vi && (n.state = Vl, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = fs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === fs) {
      for (n.state = Vi, i = new Array(d = n.tween.length), c = 0, h = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++h] = g);
      i.length = h + 1;
    }
  }
  function l(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(a), n.state = ds, 1), h = -1, d = i.length; ++h < d; )
      i[h].call(e, c);
    n.state === ds && (n.on.call("end", e, e.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = Li, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Yi(e, t) {
  var n = e.__transition, r, i, o = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > fs && r.state < ds, r.state = Li, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    o && delete e.__transition;
  }
}
function kg(e) {
  return this.each(function() {
    Yi(this, e);
  });
}
function Cg(e, t) {
  var n, r;
  return function() {
    var i = cn(this, e), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Mg(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = cn(this, e), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var l = { name: t, value: n }, a = 0, u = i.length; a < u; ++a)
        if (i[a].name === t) {
          i[a] = l;
          break;
        }
      a === u && i.push(l);
    }
    o.tween = i;
  };
}
function Pg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = $t(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Cg : Mg)(n, e, t));
}
function Xs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = cn(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return $t(i, r).value[t];
  };
}
function Au(e, t) {
  var n;
  return (typeof t == "number" ? Mn : t instanceof ti ? zl : (n = ti(t)) ? (t = n, zl) : ug)(e, t);
}
function Ng(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ag(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Tg(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttribute(e);
    return s === i ? null : s === r ? o : o = t(r = s, n);
  };
}
function zg(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === i ? null : s === r ? o : o = t(r = s, n);
  };
}
function Og(e, t, n) {
  var r, i, o;
  return function() {
    var s, l = n(this), a;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), a = l + "", s === a ? null : s === r && a === i ? o : (i = a, o = t(r = s, l)));
  };
}
function Ig(e, t, n) {
  var r, i, o;
  return function() {
    var s, l = n(this), a;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), a = l + "", s === a ? null : s === r && a === i ? o : (i = a, o = t(r = s, l)));
  };
}
function Dg(e, t) {
  var n = bo(e), r = n === "transform" ? hg : Au;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ig : Og)(n, r, Xs(this, "attr." + e, t)) : t == null ? (n.local ? Ag : Ng)(n) : (n.local ? zg : Tg)(n, r, t));
}
function Hg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Rg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Vg(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && Rg(e, o)), n;
  }
  return i._value = t, i;
}
function Lg(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && Hg(e, o)), n;
  }
  return i._value = t, i;
}
function Yg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = bo(e);
  return this.tween(n, (r.local ? Vg : Lg)(r, t));
}
function Xg(e, t) {
  return function() {
    Ys(this, e).delay = +t.apply(this, arguments);
  };
}
function Bg(e, t) {
  return t = +t, function() {
    Ys(this, e).delay = t;
  };
}
function Fg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xg : Bg)(t, e)) : $t(this.node(), t).delay;
}
function Wg(e, t) {
  return function() {
    cn(this, e).duration = +t.apply(this, arguments);
  };
}
function Kg(e, t) {
  return t = +t, function() {
    cn(this, e).duration = t;
  };
}
function qg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wg : Kg)(t, e)) : $t(this.node(), t).duration;
}
function Ug(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    cn(this, e).ease = t;
  };
}
function Zg(e) {
  var t = this._id;
  return arguments.length ? this.each(Ug(t, e)) : $t(this.node(), t).ease;
}
function Gg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    cn(this, e).ease = n;
  };
}
function $g(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Gg(this._id, e));
}
function jg(e) {
  typeof e != "function" && (e = au(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], s = o.length, l = r[i] = [], a, u = 0; u < s; ++u)
      (a = o[u]) && e.call(a, a.__data__, u, o) && l.push(a);
  return new xn(r, this._parents, this._name, this._id);
}
function Jg(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, o = Math.min(r, i), s = new Array(r), l = 0; l < o; ++l)
    for (var a = t[l], u = n[l], c = a.length, h = s[l] = new Array(c), d, g = 0; g < c; ++g)
      (d = a[g] || u[g]) && (h[g] = d);
  for (; l < r; ++l)
    s[l] = t[l];
  return new xn(s, this._parents, this._name, this._id);
}
function Qg(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function e0(e, t, n) {
  var r, i, o = Qg(t) ? Ys : cn;
  return function() {
    var s = o(this, e), l = s.on;
    l !== r && (i = (r = l).copy()).on(t, n), s.on = i;
  };
}
function t0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? $t(this.node(), n).on.on(e) : this.each(e0(n, e, t));
}
function n0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function r0() {
  return this.on("end.remove", n0(this._id));
}
function i0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Hs(e));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var l = r[s], a = l.length, u = o[s] = new Array(a), c, h, d = 0; d < a; ++d)
      (c = l[d]) && (h = e.call(c, c.__data__, d, l)) && ("__data__" in c && (h.__data__ = c.__data__), u[d] = h, Eo(u[d], t, n, d, u, $t(c, n)));
  return new xn(o, this._parents, t, n);
}
function o0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = lu(e));
  for (var r = this._groups, i = r.length, o = [], s = [], l = 0; l < i; ++l)
    for (var a = r[l], u = a.length, c, h = 0; h < u; ++h)
      if (c = a[h]) {
        for (var d = e.call(c, c.__data__, h, a), g, b = $t(c, n), S = 0, w = d.length; S < w; ++S)
          (g = d[S]) && Eo(g, t, n, S, d, b);
        o.push(d), s.push(c);
      }
  return new xn(o, s, t, n);
}
var s0 = vi.prototype.constructor;
function l0() {
  return new s0(this._groups, this._parents);
}
function a0(e, t) {
  var n, r, i;
  return function() {
    var o = zr(this, e), s = (this.style.removeProperty(e), zr(this, e));
    return o === s ? null : o === n && s === r ? i : i = t(n = o, r = s);
  };
}
function Tu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function u0(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var s = zr(this, e);
    return s === i ? null : s === r ? o : o = t(r = s, n);
  };
}
function c0(e, t, n) {
  var r, i, o;
  return function() {
    var s = zr(this, e), l = n(this), a = l + "";
    return l == null && (a = l = (this.style.removeProperty(e), zr(this, e))), s === a ? null : s === r && a === i ? o : (i = a, o = t(r = s, l));
  };
}
function f0(e, t) {
  var n, r, i, o = "style." + t, s = "end." + o, l;
  return function() {
    var a = cn(this, e), u = a.on, c = a.value[o] == null ? l || (l = Tu(t)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(s, i = c), a.on = r;
  };
}
function d0(e, t, n) {
  var r = (e += "") == "transform" ? dg : Au;
  return t == null ? this.styleTween(e, a0(e, r)).on("end.style." + e, Tu(e)) : typeof t == "function" ? this.styleTween(e, c0(e, r, Xs(this, "style." + e, t))).each(f0(this._id, e)) : this.styleTween(e, u0(e, r, t), n).on("end.style." + e, null);
}
function h0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function g0(e, t, n) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && h0(e, s, n)), r;
  }
  return o._value = t, o;
}
function v0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, g0(e, t, n ?? ""));
}
function y0(e) {
  return function() {
    this.textContent = e;
  };
}
function p0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function m0(e) {
  return this.tween("text", typeof e == "function" ? p0(Xs(this, "text", e)) : y0(e == null ? "" : e + ""));
}
function _0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function w0(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && _0(i)), t;
  }
  return r._value = e, r;
}
function b0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, w0(e));
}
function x0() {
  for (var e = this._name, t = this._id, n = zu(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, a, u = 0; u < l; ++u)
      if (a = s[u]) {
        var c = $t(a, t);
        Eo(a, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new xn(r, this._parents, e, n);
}
function E0() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(o, s) {
    var l = { value: s }, a = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = cn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(a)), u.on = t;
    }), i === 0 && o();
  });
}
var S0 = 0;
function xn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function zu() {
  return ++S0;
}
var fn = vi.prototype;
xn.prototype = {
  constructor: xn,
  select: i0,
  selectAll: o0,
  selectChild: fn.selectChild,
  selectChildren: fn.selectChildren,
  filter: jg,
  merge: Jg,
  selection: l0,
  transition: x0,
  call: fn.call,
  nodes: fn.nodes,
  node: fn.node,
  size: fn.size,
  empty: fn.empty,
  each: fn.each,
  on: t0,
  attr: Dg,
  attrTween: Yg,
  style: d0,
  styleTween: v0,
  text: m0,
  textTween: b0,
  remove: r0,
  tween: Pg,
  delay: Fg,
  duration: qg,
  ease: Zg,
  easeVarying: $g,
  end: E0,
  [Symbol.iterator]: fn[Symbol.iterator]
};
function k0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var C0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: k0
};
function M0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function P0(e) {
  var t, n;
  e instanceof xn ? (t = e._id, e = e._name) : (t = zu(), (n = C0).time = Ls(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && Eo(a, e, t, u, s, n || M0(a, t));
  return new xn(r, this._parents, e, t);
}
vi.prototype.interrupt = kg;
vi.prototype.transition = P0;
const zi = (e) => () => e;
function N0(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function yn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
yn.prototype = {
  constructor: yn,
  scale: function(e) {
    return e === 1 ? this : new yn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new yn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var So = new yn(1, 0, 0);
Ou.prototype = yn.prototype;
function Ou(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return So;
  return e.__zoom;
}
function Ho(e) {
  e.stopImmediatePropagation();
}
function Fr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function A0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function T0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ll() {
  return this.__zoom || So;
}
function z0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function O0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function I0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], o = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function Iu() {
  var e = A0, t = T0, n = I0, r = z0, i = O0, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, a = pg, u = wo("start", "zoom", "end"), c, h, d, g = 500, b = 150, S = 0, w = 10;
  function x(m) {
    m.property("__zoom", Ll).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", X).on("dblclick.zoom", V).filter(i).on("touchstart.zoom", F).on("touchmove.zoom", H).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(m, k, E, N) {
    var A = m.selection ? m.selection() : m;
    A.property("__zoom", Ll), m !== A ? C(m, k, E, N) : A.interrupt().each(function() {
      z(this, arguments).event(N).start().zoom(null, typeof k == "function" ? k.apply(this, arguments) : k).end();
    });
  }, x.scaleBy = function(m, k, E, N) {
    x.scaleTo(m, function() {
      var A = this.__zoom.k, I = typeof k == "function" ? k.apply(this, arguments) : k;
      return A * I;
    }, E, N);
  }, x.scaleTo = function(m, k, E, N) {
    x.transform(m, function() {
      var A = t.apply(this, arguments), I = this.__zoom, R = E == null ? p(A) : typeof E == "function" ? E.apply(this, arguments) : E, K = I.invert(R), q = typeof k == "function" ? k.apply(this, arguments) : k;
      return n(y(_(I, q), R, K), A, s);
    }, E, N);
  }, x.translateBy = function(m, k, E, N) {
    x.transform(m, function() {
      return n(this.__zoom.translate(
        typeof k == "function" ? k.apply(this, arguments) : k,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, N);
  }, x.translateTo = function(m, k, E, N, A) {
    x.transform(m, function() {
      var I = t.apply(this, arguments), R = this.__zoom, K = N == null ? p(I) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(So.translate(K[0], K[1]).scale(R.k).translate(
        typeof k == "function" ? -k.apply(this, arguments) : -k,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), I, s);
    }, N, A);
  };
  function _(m, k) {
    return k = Math.max(o[0], Math.min(o[1], k)), k === m.k ? m : new yn(k, m.x, m.y);
  }
  function y(m, k, E) {
    var N = k[0] - E[0] * m.k, A = k[1] - E[1] * m.k;
    return N === m.x && A === m.y ? m : new yn(m.k, N, A);
  }
  function p(m) {
    return [(+m[0][0] + +m[1][0]) / 2, (+m[0][1] + +m[1][1]) / 2];
  }
  function C(m, k, E, N) {
    m.on("start.zoom", function() {
      z(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      z(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var A = this, I = arguments, R = z(A, I).event(N), K = t.apply(A, I), q = E == null ? p(K) : typeof E == "function" ? E.apply(A, I) : E, j = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Z = A.__zoom, Q = typeof k == "function" ? k.apply(A, I) : k, ie = a(Z.invert(q).concat(j / Z.k), Q.invert(q).concat(j / Q.k));
      return function(le) {
        if (le === 1) le = Q;
        else {
          var ue = ie(le), Ee = j / ue[2];
          le = new yn(Ee, q[0] - ue[0] * Ee, q[1] - ue[1] * Ee);
        }
        R.zoom(null, le);
      };
    });
  }
  function z(m, k, E) {
    return !E && m.__zooming || new P(m, k);
  }
  function P(m, k) {
    this.that = m, this.args = k, this.active = 0, this.sourceEvent = null, this.extent = t.apply(m, k), this.taps = 0;
  }
  P.prototype = {
    event: function(m) {
      return m && (this.sourceEvent = m), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(m, k) {
      return this.mouse && m !== "mouse" && (this.mouse[1] = k.invert(this.mouse[0])), this.touch0 && m !== "touch" && (this.touch0[1] = k.invert(this.touch0[0])), this.touch1 && m !== "touch" && (this.touch1[1] = k.invert(this.touch1[0])), this.that.__zoom = k, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(m) {
      var k = Vt(this.that).datum();
      u.call(
        m,
        this.that,
        new N0(m, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: u
        }),
        k
      );
    }
  };
  function D(m, ...k) {
    if (!e.apply(this, arguments)) return;
    var E = z(this, k).event(m), N = this.__zoom, A = Math.max(o[0], Math.min(o[1], N.k * Math.pow(2, r.apply(this, arguments)))), I = Ft(m);
    if (E.wheel)
      (E.mouse[0][0] !== I[0] || E.mouse[0][1] !== I[1]) && (E.mouse[1] = N.invert(E.mouse[0] = I)), clearTimeout(E.wheel);
    else {
      if (N.k === A) return;
      E.mouse = [I, N.invert(I)], Yi(this), E.start();
    }
    Fr(m), E.wheel = setTimeout(R, b), E.zoom("mouse", n(y(_(N, A), E.mouse[0], E.mouse[1]), E.extent, s));
    function R() {
      E.wheel = null, E.end();
    }
  }
  function X(m, ...k) {
    if (d || !e.apply(this, arguments)) return;
    var E = m.currentTarget, N = z(this, k, !0).event(m), A = Vt(m.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", j, !0), I = Ft(m, E), R = m.clientX, K = m.clientY;
    mu(m.view), Ho(m), N.mouse = [I, this.__zoom.invert(I)], Yi(this), N.start();
    function q(Z) {
      if (Fr(Z), !N.moved) {
        var Q = Z.clientX - R, ie = Z.clientY - K;
        N.moved = Q * Q + ie * ie > S;
      }
      N.event(Z).zoom("mouse", n(y(N.that.__zoom, N.mouse[0] = Ft(Z, E), N.mouse[1]), N.extent, s));
    }
    function j(Z) {
      A.on("mousemove.zoom mouseup.zoom", null), _u(Z.view, N.moved), Fr(Z), N.event(Z).end();
    }
  }
  function V(m, ...k) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, N = Ft(m.changedTouches ? m.changedTouches[0] : m, this), A = E.invert(N), I = E.k * (m.shiftKey ? 0.5 : 2), R = n(y(_(E, I), N, A), t.apply(this, k), s);
      Fr(m), l > 0 ? Vt(this).transition().duration(l).call(C, R, N, m) : Vt(this).call(x.transform, R, N, m);
    }
  }
  function F(m, ...k) {
    if (e.apply(this, arguments)) {
      var E = m.touches, N = E.length, A = z(this, k, m.changedTouches.length === N).event(m), I, R, K, q;
      for (Ho(m), R = 0; R < N; ++R)
        K = E[R], q = Ft(K, this), q = [q, this.__zoom.invert(q), K.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== q[2] && (A.touch1 = q, A.taps = 0) : (A.touch0 = q, I = !0, A.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (A.taps < 2 && (h = q[0], c = setTimeout(function() {
        c = null;
      }, g)), Yi(this), A.start());
    }
  }
  function H(m, ...k) {
    if (this.__zooming) {
      var E = z(this, k).event(m), N = m.changedTouches, A = N.length, I, R, K, q;
      for (Fr(m), I = 0; I < A; ++I)
        R = N[I], K = Ft(R, this), E.touch0 && E.touch0[2] === R.identifier ? E.touch0[0] = K : E.touch1 && E.touch1[2] === R.identifier && (E.touch1[0] = K);
      if (R = E.that.__zoom, E.touch1) {
        var j = E.touch0[0], Z = E.touch0[1], Q = E.touch1[0], ie = E.touch1[1], le = (le = Q[0] - j[0]) * le + (le = Q[1] - j[1]) * le, ue = (ue = ie[0] - Z[0]) * ue + (ue = ie[1] - Z[1]) * ue;
        R = _(R, Math.sqrt(le / ue)), K = [(j[0] + Q[0]) / 2, (j[1] + Q[1]) / 2], q = [(Z[0] + ie[0]) / 2, (Z[1] + ie[1]) / 2];
      } else if (E.touch0) K = E.touch0[0], q = E.touch0[1];
      else return;
      E.zoom("touch", n(y(R, K, q), E.extent, s));
    }
  }
  function L(m, ...k) {
    if (this.__zooming) {
      var E = z(this, k).event(m), N = m.changedTouches, A = N.length, I, R;
      for (Ho(m), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), I = 0; I < A; ++I)
        R = N[I], E.touch0 && E.touch0[2] === R.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === R.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (R = Ft(R, this), Math.hypot(h[0] - R[0], h[1] - R[1]) < w)) {
        var K = Vt(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : zi(+m), x) : r;
  }, x.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : zi(!!m), x) : e;
  }, x.touchable = function(m) {
    return arguments.length ? (i = typeof m == "function" ? m : zi(!!m), x) : i;
  }, x.extent = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : zi([[+m[0][0], +m[0][1]], [+m[1][0], +m[1][1]]]), x) : t;
  }, x.scaleExtent = function(m) {
    return arguments.length ? (o[0] = +m[0], o[1] = +m[1], x) : [o[0], o[1]];
  }, x.translateExtent = function(m) {
    return arguments.length ? (s[0][0] = +m[0][0], s[1][0] = +m[1][0], s[0][1] = +m[0][1], s[1][1] = +m[1][1], x) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, x.constrain = function(m) {
    return arguments.length ? (n = m, x) : n;
  }, x.duration = function(m) {
    return arguments.length ? (l = +m, x) : l;
  }, x.interpolate = function(m) {
    return arguments.length ? (a = m, x) : a;
  }, x.on = function() {
    var m = u.on.apply(u, arguments);
    return m === u ? x : m;
  }, x.clickDistance = function(m) {
    return arguments.length ? (S = (m = +m) * m, x) : Math.sqrt(S);
  }, x.tapDistance = function(m) {
    return arguments.length ? (w = +m, x) : w;
  }, x;
}
const tr = {
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
}, eo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var nr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(nr || (nr = {}));
var wn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(wn || (wn = {}));
var to;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(to || (to = {}));
const hs = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var _r;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(_r || (_r = {}));
var gr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(gr || (gr = {}));
var se;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(se || (se = {}));
const Yl = {
  [se.Left]: se.Right,
  [se.Right]: se.Left,
  [se.Top]: se.Bottom,
  [se.Bottom]: se.Top
};
function D0(e, t) {
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
function Xl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((i, o) => {
    t != null && t.has(o) || r.push(i);
  }), r.length && n(r);
}
function Bl(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const H0 = (e) => "id" in e && "source" in e && "target" in e, Du = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), pi = (e, t = [0, 0]) => {
  const { width: n, height: r } = En(e), i = e.origin ?? t, o = n * i[0], s = r * i[1];
  return {
    x: e.position.x - o,
    y: e.position.y - s
  };
}, mi = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const i = ys(r);
      n = Bs(n, i);
    }
  }), Fs(n);
}, Hu = (e, t, [n, r, i] = [0, 0, 1], o = !1, s = !1) => {
  const l = {
    ...Co(t, [n, r, i]),
    width: t.width / i,
    height: t.height / i
  }, a = [];
  for (const u of e.values()) {
    const { measured: c, selectable: h = !0, hidden: d = !1 } = u;
    if (s && !h || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, b = c.height ?? u.height ?? u.initialHeight ?? null, S = Ws(l, ko(u)), w = (g ?? 0) * (b ?? 0), x = o && S > 0;
    (!u.internals.handleBounds || x || S >= w || u.dragging) && a.push(u);
  }
  return a;
}, gs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function R0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!r || r.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function V0({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: o }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = R0(e, s), a = mi(l), u = Xu(a, t, n, (s == null ? void 0 : s.minZoom) ?? i, (s == null ? void 0 : s.maxZoom) ?? o, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(u, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function L0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: o }) {
  const s = n.get(e), l = s.parentId ? n.get(s.parentId) : void 0, { x: a, y: u } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let h = i;
  if (s.extent === "parent" && !s.expandParent)
    if (!l)
      o == null || o("005", tr.error005());
    else {
      const g = l.measured.width, b = l.measured.height;
      g && b && (h = [
        [a, u],
        [a + g, u + b]
      ]);
    }
  else l && Dr(s.extent) && (h = [
    [s.extent[0][0] + a, s.extent[0][1] + u],
    [s.extent[1][0] + a, s.extent[1][1] + u]
  ]);
  const d = Dr(h) ? rr(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (o == null || o("015", tr.error015())), {
    position: {
      x: d.x - a + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function Y0({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
  const o = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = o.has(d.id), b = !g && d.parentId && s.find((S) => S.id === d.parentId);
    (g || b) && s.push(d);
  }
  const l = new Set(t.map((d) => d.id)), a = r.filter((d) => d.deletable !== !1), c = gs(s, a);
  for (const d of a)
    l.has(d.id) && !c.find((b) => b.id === d.id) && c.push(d);
  if (!i)
    return {
      edges: c,
      nodes: s
    };
  const h = await i({
    nodes: s,
    edges: c
  });
  return typeof h == "boolean" ? h ? { edges: c, nodes: s } : { edges: [], nodes: [] } : h;
}
const Ir = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), rr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ir(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ir(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Ru(e, t, n) {
  const { width: r, height: i } = En(n), { x: o, y: s } = n.internals.positionAbsolute;
  return rr(e, [
    [o, s],
    [o + r, s + i]
  ], t);
}
const Fl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, Vu = (e, t, n = 15, r = 40) => {
  const i = Fl(e.x, r, t.width - r) * n, o = Fl(e.y, r, t.height - r) * n;
  return [i, o];
}, Bs = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), vs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Fs = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), ko = (e, t = [0, 0]) => {
  var i, o;
  const { x: n, y: r } = Du(e) ? e.internals.positionAbsolute : pi(e, t);
  return {
    x: n,
    y: r,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((o = e.measured) == null ? void 0 : o.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ys = (e, t = [0, 0]) => {
  var i, o;
  const { x: n, y: r } = Du(e) ? e.internals.positionAbsolute : pi(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((o = e.measured) == null ? void 0 : o.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Lu = (e, t) => Fs(Bs(vs(e), vs(t))), Ws = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wr = (e) => !isNaN(e) && isFinite(e), Yu = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, Ks = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Co = ({ x: e, y: t }, [n, r, i], o = !1, s = [1, 1]) => {
  const l = {
    x: (e - n) / i,
    y: (t - r) / i
  };
  return o ? Ks(l, s) : l;
}, ps = ({ x: e, y: t }, [n, r, i]) => ({
  x: e * i + n,
  y: t * i + r
});
function ur(e, t) {
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
function X0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = ur(e, n), i = ur(e, t);
    return {
      top: r,
      right: i,
      bottom: r,
      left: i,
      x: i * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = ur(e.top ?? e.y ?? 0, n), i = ur(e.bottom ?? e.y ?? 0, n), o = ur(e.left ?? e.x ?? 0, t), s = ur(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: i, left: o, x: o + s, y: r + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function B0(e, t, n, r, i, o) {
  const { x: s, y: l } = ps(e, [t, n, r]), { x: a, y: u } = ps({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = i - a, h = o - u;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(c),
    bottom: Math.floor(h)
  };
}
const Xu = (e, t, n, r, i, o) => {
  const s = X0(o, t, n), l = (t - s.x) / e.width, a = (n - s.y) / e.height, u = Math.min(l, a), c = Ir(u, r, i), h = e.x + e.width / 2, d = e.y + e.height / 2, g = t / 2 - h * c, b = n / 2 - d * c, S = B0(e, g, b, c, t, n), w = {
    left: Math.min(S.left - s.left, 0),
    top: Math.min(S.top - s.top, 0),
    right: Math.min(S.right - s.right, 0),
    bottom: Math.min(S.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: b - w.top + w.bottom,
    zoom: c
  };
}, no = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Dr(e) {
  return e !== void 0 && e !== "parent";
}
function En(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function ro(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function F0() {
  let e, t;
  return { promise: new Promise((r, i) => {
    e = r, t = i;
  }), resolve: e, reject: t };
}
function Ro(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
  const { x: o, y: s } = bn(e), l = Co({ x: o - ((i == null ? void 0 : i.left) ?? 0), y: s - ((i == null ? void 0 : i.top) ?? 0) }, r), { x: a, y: u } = n ? Ks(l, t) : l;
  return {
    xSnapped: a,
    ySnapped: u,
    ...l
  };
}
const Bu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), W0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, K0 = ["INPUT", "SELECT", "TEXTAREA"];
function q0(e) {
  var r, i;
  const t = ((i = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : K0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Fu = (e) => "clientX" in e, bn = (e, t) => {
  var o, s;
  const n = Fu(e), r = n ? e.clientX : (o = e.touches) == null ? void 0 : o[0].clientX, i = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Wl = (e, t, n, r, i) => {
  const o = t.querySelectorAll(`.${e}`);
  return !o || !o.length ? null : Array.from(o).map((s) => {
    const l = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: i,
      position: s.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...Bu(s)
    };
  });
};
function U0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: o, targetControlX: s, targetControlY: l }) {
  const a = e * 0.125 + i * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + o * 0.375 + l * 0.375 + r * 0.125, c = Math.abs(a - e), h = Math.abs(u - t);
  return [a, u, c, h];
}
function Oi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Kl({ pos: e, x1: t, y1: n, x2: r, y2: i, c: o }) {
  switch (e) {
    case se.Left:
      return [t - Oi(t - r, o), n];
    case se.Right:
      return [t + Oi(r - t, o), n];
    case se.Top:
      return [t, n - Oi(n - i, o)];
    case se.Bottom:
      return [t, n + Oi(i - n, o)];
  }
}
function Wu({ sourceX: e, sourceY: t, sourcePosition: n = se.Bottom, targetX: r, targetY: i, targetPosition: o = se.Top, curvature: s = 0.25 }) {
  const [l, a] = Kl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i,
    c: s
  }), [u, c] = Kl({
    pos: o,
    x1: r,
    y1: i,
    x2: e,
    y2: t,
    c: s
  }), [h, d, g, b] = U0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: i,
    sourceControlX: l,
    sourceControlY: a,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${l},${a} ${u},${c} ${r},${i}`,
    h,
    d,
    g,
    b
  ];
}
function Ku({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const i = Math.abs(n - e) / 2, o = n < e ? n + i : n - i, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [o, l, i, s];
}
function Z0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1 }) {
  if (!i)
    return r;
  const o = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (o ? s : 0);
}
function G0({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
  const o = Bs(ys(e), ys(t));
  o.x === o.x2 && (o.x2 += 1), o.y === o.y2 && (o.y2 += 1);
  const s = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: r / i[2]
  };
  return Ws(s, Fs(o)) > 0;
}
const $0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, j0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), J0 = (e, t) => {
  if (!e.source || !e.target)
    return Yu("006", tr.error006()), t;
  let n;
  return H0(e) ? n = { ...e } : n = {
    ...e,
    id: $0(e)
  }, j0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function ms({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [i, o, s, l] = Ku({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, i, o, s, l];
}
const ql = {
  [se.Left]: { x: -1, y: 0 },
  [se.Right]: { x: 1, y: 0 },
  [se.Top]: { x: 0, y: -1 },
  [se.Bottom]: { x: 0, y: 1 }
}, Q0 = ({ source: e, sourcePosition: t = se.Bottom, target: n }) => t === se.Left || t === se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ul = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function ev({ source: e, sourcePosition: t = se.Bottom, target: n, targetPosition: r = se.Top, center: i, offset: o }) {
  const s = ql[t], l = ql[r], a = { x: e.x + s.x * o, y: e.y + s.y * o }, u = { x: n.x + l.x * o, y: n.y + l.y * o }, c = Q0({
    source: a,
    sourcePosition: t,
    target: u
  }), h = c.x !== 0 ? "x" : "y", d = c[h];
  let g = [], b, S;
  const w = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [_, y, p, C] = Ku({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[h] * l[h] === -1) {
    b = i.x ?? _, S = i.y ?? y;
    const P = [
      { x: b, y: a.y },
      { x: b, y: u.y }
    ], D = [
      { x: a.x, y: S },
      { x: u.x, y: S }
    ];
    s[h] === d ? g = h === "x" ? P : D : g = h === "x" ? D : P;
  } else {
    const P = [{ x: a.x, y: u.y }], D = [{ x: u.x, y: a.y }];
    if (h === "x" ? g = s.x === d ? D : P : g = s.y === d ? P : D, t === r) {
      const L = Math.abs(e[h] - n[h]);
      if (L <= o) {
        const m = Math.min(o - 1, o - L);
        s[h] === d ? w[h] = (a[h] > e[h] ? -1 : 1) * m : x[h] = (u[h] > n[h] ? -1 : 1) * m;
      }
    }
    if (t !== r) {
      const L = h === "x" ? "y" : "x", m = s[h] === l[L], k = a[L] > u[L], E = a[L] < u[L];
      (s[h] === 1 && (!m && k || m && E) || s[h] !== 1 && (!m && E || m && k)) && (g = h === "x" ? P : D);
    }
    const X = { x: a.x + w.x, y: a.y + w.y }, V = { x: u.x + x.x, y: u.y + x.y }, F = Math.max(Math.abs(X.x - g[0].x), Math.abs(V.x - g[0].x)), H = Math.max(Math.abs(X.y - g[0].y), Math.abs(V.y - g[0].y));
    F >= H ? (b = (X.x + V.x) / 2, S = g[0].y) : (b = g[0].x, S = (X.y + V.y) / 2);
  }
  return [[
    e,
    { x: a.x + w.x, y: a.y + w.y },
    ...g,
    { x: u.x + x.x, y: u.y + x.y },
    n
  ], b, S, p, C];
}
function tv(e, t, n, r) {
  const i = Math.min(Ul(e, t) / 2, Ul(t, n) / 2, r), { x: o, y: s } = t;
  if (e.x === o && o === n.x || e.y === s && s === n.y)
    return `L${o} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${o + i * u},${s}Q ${o},${s} ${o},${s + i * c}`;
  }
  const l = e.x < n.x ? 1 : -1, a = e.y < n.y ? -1 : 1;
  return `L ${o},${s + i * a}Q ${o},${s} ${o + i * l},${s}`;
}
function io({ sourceX: e, sourceY: t, sourcePosition: n = se.Bottom, targetX: r, targetY: i, targetPosition: o = se.Top, borderRadius: s = 5, centerX: l, centerY: a, offset: u = 20 }) {
  const [c, h, d, g, b] = ev({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: i },
    targetPosition: o,
    center: { x: l, y: a },
    offset: u
  });
  return [c.reduce((w, x, _) => {
    let y = "";
    return _ > 0 && _ < c.length - 1 ? y = tv(c[_ - 1], x, c[_ + 1], s) : y = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, w += y, w;
  }, ""), h, d, g, b];
}
function Zl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function nv(e) {
  var h;
  const { sourceNode: t, targetNode: n } = e;
  if (!Zl(t) || !Zl(n))
    return null;
  const r = t.internals.handleBounds || Gl(t.handles), i = n.internals.handleBounds || Gl(n.handles), o = $l((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = $l(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === nr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!o || !s)
    return (h = e.onError) == null || h.call(e, "008", tr.error008(o ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (o == null ? void 0 : o.position) || se.Bottom, a = (s == null ? void 0 : s.position) || se.Top, u = ri(t, o, l), c = ri(n, s, a);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: l,
    targetPosition: a
  };
}
function Gl(e) {
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
function ri(e, t, n = se.Left, r = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, o = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: l } = t ?? En(e);
  if (r)
    return { x: i + s / 2, y: o + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case se.Top:
      return { x: i + s / 2, y: o };
    case se.Right:
      return { x: i + s, y: o + l / 2 };
    case se.Bottom:
      return { x: i + s / 2, y: o + l };
    case se.Left:
      return { x: i, y: o + l / 2 };
  }
}
function $l(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _s(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function rv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
  const o = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || i].forEach((a) => {
    if (a && typeof a == "object") {
      const u = _s(a, t);
      o.has(u) || (s.push({ id: u, color: a.color || n, ...a }), o.add(u));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const qs = {
  nodeOrigin: [0, 0],
  nodeExtent: eo,
  elevateNodesOnSelect: !0,
  defaults: {}
}, iv = {
  ...qs,
  checkEquality: !0
};
function Us(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function ov(e, t, n) {
  const r = Us(qs, n);
  for (const i of e.values())
    if (i.parentId)
      Zs(i, e, t, r);
    else {
      const o = pi(i, r.nodeOrigin), s = Dr(i.extent) ? i.extent : r.nodeExtent, l = rr(o, s, En(i));
      i.internals.positionAbsolute = l;
    }
}
function qu(e, t, n, r) {
  var a, u;
  const i = Us(iv, r);
  let o = e.length > 0;
  const s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let h = s.get(c.id);
    if (i.checkEquality && c === (h == null ? void 0 : h.internals.userNode))
      t.set(c.id, h);
    else {
      const d = pi(c, i.nodeOrigin), g = Dr(c.extent) ? c.extent : i.nodeExtent, b = rr(d, g, En(c));
      h = {
        ...i.defaults,
        ...c,
        measured: {
          width: (a = c.measured) == null ? void 0 : a.width,
          height: (u = c.measured) == null ? void 0 : u.height
        },
        internals: {
          positionAbsolute: b,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? h == null ? void 0 : h.internals.handleBounds : void 0,
          z: Uu(c, l),
          userNode: c
        }
      }, t.set(c.id, h);
    }
    (h.measured === void 0 || h.measured.width === void 0 || h.measured.height === void 0) && !h.hidden && (o = !1), c.parentId && Zs(h, t, n, r);
  }
  return o;
}
function sv(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Zs(e, t, n, r) {
  const { elevateNodesOnSelect: i, nodeOrigin: o, nodeExtent: s } = Us(qs, r), l = e.parentId, a = t.get(l);
  if (!a) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  sv(e, n);
  const u = i ? 1e3 : 0, { x: c, y: h, z: d } = lv(e, a, o, s, u), { positionAbsolute: g } = e.internals, b = c !== g.x || h !== g.y;
  (b || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: b ? { x: c, y: h } : g,
      z: d
    }
  });
}
function Uu(e, t) {
  return (wr(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function lv(e, t, n, r, i) {
  const { x: o, y: s } = t.internals.positionAbsolute, l = En(e), a = pi(e, n), u = Dr(e.extent) ? rr(a, e.extent, l) : a;
  let c = rr({ x: o + u.x, y: s + u.y }, r, l);
  e.extent === "parent" && (c = Ru(c, l, t));
  const h = Uu(e, i), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > h ? d : h
  };
}
function av(e, t, n, r = [0, 0]) {
  var s;
  const i = [], o = /* @__PURE__ */ new Map();
  for (const l of e) {
    const a = t.get(l.parentId);
    if (!a)
      continue;
    const u = ((s = o.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? ko(a), c = Lu(u, l.rect);
    o.set(l.parentId, { expandedRect: c, parent: a });
  }
  return o.size > 0 && o.forEach(({ expandedRect: l, parent: a }, u) => {
    var y;
    const c = a.internals.positionAbsolute, h = En(a), d = a.origin ?? r, g = l.x < c.x ? Math.round(Math.abs(c.x - l.x)) : 0, b = l.y < c.y ? Math.round(Math.abs(c.y - l.y)) : 0, S = Math.max(h.width, Math.round(l.width)), w = Math.max(h.height, Math.round(l.height)), x = (S - h.width) * d[0], _ = (w - h.height) * d[1];
    (g > 0 || b > 0 || x || _) && (i.push({
      id: u,
      type: "position",
      position: {
        x: a.position.x - g + x,
        y: a.position.y - b + _
      }
    }), (y = n.get(u)) == null || y.forEach((p) => {
      e.some((C) => C.id === p.id) || i.push({
        id: p.id,
        type: "position",
        position: {
          x: p.position.x + g,
          y: p.position.y + b
        }
      });
    })), (h.width < l.width || h.height < l.height || g || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: S + (g ? d[0] * g - x : 0),
        height: w + (b ? d[1] * b - _ : 0)
      }
    });
  }), i;
}
function uv(e, t, n, r, i, o) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let l = !1;
  if (!s)
    return { changes: [], updatedInternals: l };
  const a = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), h = [];
  for (const d of e.values()) {
    const g = t.get(d.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), l = !0;
      continue;
    }
    const b = Bu(d.nodeElement), S = g.measured.width !== b.width || g.measured.height !== b.height;
    if (!!(b.width && b.height && (S || !g.internals.handleBounds || d.force))) {
      const x = d.nodeElement.getBoundingClientRect(), _ = Dr(g.extent) ? g.extent : o;
      let { positionAbsolute: y } = g.internals;
      g.parentId && g.extent === "parent" ? y = Ru(y, b, t.get(g.parentId)) : _ && (y = rr(y, _, b));
      const p = {
        ...g,
        measured: b,
        internals: {
          ...g.internals,
          positionAbsolute: y,
          handleBounds: {
            source: Wl("source", d.nodeElement, x, c, g.id),
            target: Wl("target", d.nodeElement, x, c, g.id)
          }
        }
      };
      t.set(g.id, p), g.parentId && Zs(p, t, n, { nodeOrigin: i }), l = !0, S && (a.push({
        id: g.id,
        type: "dimensions",
        dimensions: b
      }), g.expandParent && g.parentId && h.push({
        id: g.id,
        parentId: g.parentId,
        rect: ko(p, i)
      }));
    }
  }
  if (h.length > 0) {
    const d = av(h, t, n, i);
    a.push(...d);
  }
  return { changes: a, updatedInternals: l };
}
async function cv({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: o }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [i, o]
  ], r), l = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(l);
}
function jl(e, t, n, r, i, o) {
  let s = i;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, l.set(n, t)), s = `${i}-${e}`;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, a.set(n, t)), o) {
    s = `${i}-${e}-${o}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Zu(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: i, target: o, sourceHandle: s = null, targetHandle: l = null } = r, a = { edgeId: r.id, source: i, target: o, sourceHandle: s, targetHandle: l }, u = `${i}-${s}--${o}-${l}`, c = `${o}-${l}--${i}-${s}`;
    jl("source", a, c, e, i, s), jl("target", a, u, e, o, l), t.set(r.id, r);
  }
}
function Gu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Gu(n, t) : !1;
}
function Jl(e, t, n) {
  var i;
  let r = e;
  do {
    if ((i = r == null ? void 0 : r.matches) != null && i.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function fv(e, t, n, r) {
  const i = /* @__PURE__ */ new Map();
  for (const [o, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Gu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const l = e.get(o);
      l && i.set(o, {
        id: o,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - l.internals.positionAbsolute.x,
          y: n.y - l.internals.positionAbsolute.y
        },
        extent: l.extent,
        parentId: l.parentId,
        origin: l.origin,
        expandParent: l.expandParent,
        internals: {
          positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: l.measured.width ?? 0,
          height: l.measured.height ?? 0
        }
      });
    }
  return i;
}
function Vo({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, a;
  const i = [];
  for (const [u, c] of t) {
    const h = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    h && i.push({
      ...h,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [i[0], i];
  const o = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    o ? {
      ...o,
      position: ((a = t.get(e)) == null ? void 0 : a.position) || o.position,
      dragging: r
    } : i[0],
    i
  ];
}
function dv({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
  let o = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), a = !1, u = { x: 0, y: 0 }, c = null, h = !1, d = null, g = !1;
  function b({ noDragClassName: w, handleSelector: x, domNode: _, isSelectable: y, nodeId: p, nodeClickDistance: C = 0 }) {
    d = Vt(_);
    function z({ x: V, y: F }, H) {
      const { nodeLookup: L, nodeExtent: m, snapGrid: k, snapToGrid: E, nodeOrigin: N, onNodeDrag: A, onSelectionDrag: I, onError: R, updateNodePositions: K } = t();
      o = { x: V, y: F };
      let q = !1, j = { x: 0, y: 0, x2: 0, y2: 0 };
      if (l.size > 1 && m) {
        const Z = mi(l);
        j = vs(Z);
      }
      for (const [Z, Q] of l) {
        if (!L.has(Z))
          continue;
        let ie = { x: V - Q.distance.x, y: F - Q.distance.y };
        E && (ie = Ks(ie, k));
        let le = [
          [m[0][0], m[0][1]],
          [m[1][0], m[1][1]]
        ];
        if (l.size > 1 && m && !Q.extent) {
          const { positionAbsolute: Se } = Q.internals, we = Se.x - j.x + m[0][0], G = Se.x + Q.measured.width - j.x2 + m[1][0], re = Se.y - j.y + m[0][1], _e = Se.y + Q.measured.height - j.y2 + m[1][1];
          le = [
            [we, re],
            [G, _e]
          ];
        }
        const { position: ue, positionAbsolute: Ee } = L0({
          nodeId: Z,
          nextPosition: ie,
          nodeLookup: L,
          nodeExtent: le,
          nodeOrigin: N,
          onError: R
        });
        q = q || Q.position.x !== ue.x || Q.position.y !== ue.y, Q.position = ue, Q.internals.positionAbsolute = Ee;
      }
      if (q && (K(l, !0), H && (r || A || !p && I))) {
        const [Z, Q] = Vo({
          nodeId: p,
          dragItems: l,
          nodeLookup: L
        });
        r == null || r(H, l, Z, Q), A == null || A(H, Z, Q), p || I == null || I(H, Q);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: V, panBy: F, autoPanSpeed: H, autoPanOnNodeDrag: L } = t();
      if (!L) {
        a = !1, cancelAnimationFrame(s);
        return;
      }
      const [m, k] = Vu(u, c, H);
      (m !== 0 || k !== 0) && (o.x = (o.x ?? 0) - m / V[2], o.y = (o.y ?? 0) - k / V[2], await F({ x: m, y: k }) && z(o, null)), s = requestAnimationFrame(P);
    }
    function D(V) {
      var q;
      const { nodeLookup: F, multiSelectionActive: H, nodesDraggable: L, transform: m, snapGrid: k, snapToGrid: E, selectNodesOnDrag: N, onNodeDragStart: A, onSelectionDragStart: I, unselectNodesAndEdges: R } = t();
      h = !0, (!N || !y) && !H && p && ((q = F.get(p)) != null && q.selected || R()), y && N && p && (e == null || e(p));
      const K = Ro(V.sourceEvent, { transform: m, snapGrid: k, snapToGrid: E, containerBounds: c });
      if (o = K, l = fv(F, L, K, p), l.size > 0 && (n || A || !p && I)) {
        const [j, Z] = Vo({
          nodeId: p,
          dragItems: l,
          nodeLookup: F
        });
        n == null || n(V.sourceEvent, l, j, Z), A == null || A(V.sourceEvent, j, Z), p || I == null || I(V.sourceEvent, Z);
      }
    }
    const X = Kh().clickDistance(C).on("start", (V) => {
      const { domNode: F, nodeDragThreshold: H, transform: L, snapGrid: m, snapToGrid: k } = t();
      c = (F == null ? void 0 : F.getBoundingClientRect()) || null, g = !1, H === 0 && D(V), o = Ro(V.sourceEvent, { transform: L, snapGrid: m, snapToGrid: k, containerBounds: c }), u = bn(V.sourceEvent, c);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: F, transform: H, snapGrid: L, snapToGrid: m, nodeDragThreshold: k, nodeLookup: E } = t(), N = Ro(V.sourceEvent, { transform: H, snapGrid: L, snapToGrid: m, containerBounds: c });
      if ((V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !E.has(p)) && (g = !0), !g) {
        if (!a && F && h && (a = !0, P()), !h) {
          const A = N.xSnapped - (o.x ?? 0), I = N.ySnapped - (o.y ?? 0);
          Math.sqrt(A * A + I * I) > k && D(V);
        }
        (o.x !== N.xSnapped || o.y !== N.ySnapped) && l && h && (u = bn(V.sourceEvent, c), z(N, V.sourceEvent));
      }
    }).on("end", (V) => {
      if (!(!h || g) && (a = !1, h = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: F, updateNodePositions: H, onNodeDragStop: L, onSelectionDragStop: m } = t();
        if (H(l, !1), i || L || !p && m) {
          const [k, E] = Vo({
            nodeId: p,
            dragItems: l,
            nodeLookup: F,
            dragging: !1
          });
          i == null || i(V.sourceEvent, l, k, E), L == null || L(V.sourceEvent, k, E), p || m == null || m(V.sourceEvent, E);
        }
      }
    }).filter((V) => {
      const F = V.target;
      return !V.button && (!w || !Jl(F, `.${w}`, _)) && (!x || Jl(F, x, _));
    });
    d.call(X);
  }
  function S() {
    d == null || d.on(".drag", null);
  }
  return {
    update: b,
    destroy: S
  };
}
function hv(e, t, n) {
  const r = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const o of t.values())
    Ws(i, ko(o)) > 0 && r.push(o);
  return r;
}
const gv = 250;
function vv(e, t, n, r) {
  var l, a;
  let i = [], o = 1 / 0;
  const s = hv(e, n, t + gv);
  for (const u of s) {
    const c = [...((l = u.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const h of c) {
      if (r.nodeId === h.nodeId && r.type === h.type && r.id === h.id)
        continue;
      const { x: d, y: g } = ri(u, h, h.position, !0), b = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      b > t || (b < o ? (i = [{ ...h, x: d, y: g }], o = b) : b === o && i.push({ ...h, x: d, y: g }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return i.find((c) => c.type === u) ?? i[0];
  }
  return i[0];
}
function $u(e, t, n, r, i, o = !1) {
  var u, c, h;
  const s = r.get(e);
  if (!s)
    return null;
  const l = i === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((h = s.internals.handleBounds) == null ? void 0 : h.target) ?? []], a = (n ? l == null ? void 0 : l.find((d) => d.id === n) : l == null ? void 0 : l[0]) ?? null;
  return a && o ? { ...a, ...ri(s, a, a.position, !0) } : a;
}
function ju(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function yv(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ju = () => !0;
function pv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: o, isTarget: s, domNode: l, nodeLookup: a, lib: u, autoPanOnConnect: c, flowId: h, panBy: d, cancelConnection: g, onConnectStart: b, onConnect: S, onConnectEnd: w, isValidConnection: x = Ju, onReconnectEnd: _, updateConnection: y, getTransform: p, getFromHandle: C, autoPanSpeed: z }) {
  const P = W0(e.target);
  let D = 0, X;
  const { x: V, y: F } = bn(e), H = P == null ? void 0 : P.elementFromPoint(V, F), L = ju(o, H), m = l == null ? void 0 : l.getBoundingClientRect();
  if (!m || !L)
    return;
  const k = $u(i, L, r, a, t);
  if (!k)
    return;
  let E = bn(e, m), N = !1, A = null, I = !1, R = null;
  function K() {
    if (!c || !m)
      return;
    const [Ee, Se] = Vu(E, m, z);
    d({ x: Ee, y: Se }), D = requestAnimationFrame(K);
  }
  const q = {
    ...k,
    nodeId: i,
    type: L,
    position: k.position
  }, j = a.get(i), Q = {
    inProgress: !0,
    isValid: null,
    from: ri(j, q, se.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: j,
    to: E,
    toHandle: null,
    toPosition: Yl[q.position],
    toNode: null
  };
  y(Q);
  let ie = Q;
  b == null || b(e, { nodeId: i, handleId: r, handleType: L });
  function le(Ee) {
    if (!C() || !q) {
      ue(Ee);
      return;
    }
    const Se = p();
    E = bn(Ee, m), X = vv(Co(E, Se, !1, [1, 1]), n, a, q), N || (K(), N = !0);
    const we = Qu(Ee, {
      handle: X,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: x,
      doc: P,
      lib: u,
      flowId: h,
      nodeLookup: a
    });
    R = we.handleDomNode, A = we.connection, I = yv(!!X, we.isValid);
    const G = {
      // from stays the same
      ...ie,
      isValid: I,
      to: X && I ? ps({ x: X.x, y: X.y }, Se) : E,
      toHandle: we.toHandle,
      toPosition: I && we.toHandle ? we.toHandle.position : Yl[q.position],
      toNode: we.toHandle ? a.get(we.toHandle.nodeId) : null
    };
    I && X && ie.toHandle && G.toHandle && ie.toHandle.type === G.toHandle.type && ie.toHandle.nodeId === G.toHandle.nodeId && ie.toHandle.id === G.toHandle.id && ie.to.x === G.to.x && ie.to.y === G.to.y || (y(G), ie = G);
  }
  function ue(Ee) {
    (X || R) && A && I && (S == null || S(A));
    const { inProgress: Se, ...we } = ie, G = {
      ...we,
      toPosition: ie.toHandle ? ie.toPosition : null
    };
    w == null || w(Ee, G), o && (_ == null || _(Ee, G)), g(), cancelAnimationFrame(D), N = !1, I = !1, A = null, R = null, P.removeEventListener("mousemove", le), P.removeEventListener("mouseup", ue), P.removeEventListener("touchmove", le), P.removeEventListener("touchend", ue);
  }
  P.addEventListener("mousemove", le), P.addEventListener("mouseup", ue), P.addEventListener("touchmove", le), P.addEventListener("touchend", ue);
}
function Qu(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: o, doc: s, lib: l, flowId: a, isValidConnection: u = Ju, nodeLookup: c }) {
  const h = o === "target", d = t ? s.querySelector(`.${l}-flow__handle[data-id="${a}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: b } = bn(e), S = s.elementFromPoint(g, b), w = S != null && S.classList.contains(`${l}-flow__handle`) ? S : d, x = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const _ = ju(void 0, w), y = w.getAttribute("data-nodeid"), p = w.getAttribute("data-handleid"), C = w.classList.contains("connectable"), z = w.classList.contains("connectableend");
    if (!y || !_)
      return x;
    const P = {
      source: h ? y : r,
      sourceHandle: h ? p : i,
      target: h ? r : y,
      targetHandle: h ? i : p
    };
    x.connection = P;
    const X = C && z && (n === nr.Strict ? h && _ === "source" || !h && _ === "target" : y !== r || p !== i);
    x.isValid = X && u(P), x.toHandle = $u(y, _, p, c, n, !1);
  }
  return x;
}
const mv = {
  onPointerDown: pv,
  isValid: Qu
};
function _v({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const i = Vt(e);
  function o({ translateExtent: l, width: a, height: u, zoomStep: c = 10, pannable: h = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const b = (y) => {
      const p = n();
      if (y.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -y.sourceEvent.deltaY * (y.sourceEvent.deltaMode === 1 ? 0.05 : y.sourceEvent.deltaMode ? 1 : 2e-3) * c, z = p[2] * Math.pow(2, C);
      t.scaleTo(z);
    };
    let S = [0, 0];
    const w = (y) => {
      (y.sourceEvent.type === "mousedown" || y.sourceEvent.type === "touchstart") && (S = [
        y.sourceEvent.clientX ?? y.sourceEvent.touches[0].clientX,
        y.sourceEvent.clientY ?? y.sourceEvent.touches[0].clientY
      ]);
    }, x = (y) => {
      const p = n();
      if (y.sourceEvent.type !== "mousemove" && y.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        y.sourceEvent.clientX ?? y.sourceEvent.touches[0].clientX,
        y.sourceEvent.clientY ?? y.sourceEvent.touches[0].clientY
      ], z = [C[0] - S[0], C[1] - S[1]];
      S = C;
      const P = r() * Math.max(p[2], Math.log(p[2])) * (g ? -1 : 1), D = {
        x: p[0] - z[0] * P,
        y: p[1] - z[1] * P
      }, X = [
        [0, 0],
        [a, u]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: p[2]
      }, X, l);
    }, _ = Iu().on("start", w).on("zoom", h ? x : null).on("zoom.wheel", d ? b : null);
    i.call(_, {});
  }
  function s() {
    i.on("zoom", null);
  }
  return {
    update: o,
    destroy: s,
    pointer: Ft
  };
}
const wv = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Mo = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Lo = ({ x: e, y: t, zoom: n }) => So.translate(e, t).scale(n), vr = (e, t) => e.target.closest(`.${t}`), ec = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Yo = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, tc = (e) => {
  const t = e.ctrlKey && no() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function bv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: o, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: a, onPanZoomEnd: u }) {
  return (c) => {
    if (vr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const w = Ft(c), x = tc(c), _ = h * Math.pow(2, x);
      r.scaleTo(n, _, w, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = i === wn.Vertical ? 0 : c.deltaX * d, b = i === wn.Horizontal ? 0 : c.deltaY * d;
    !no() && c.shiftKey && i !== wn.Vertical && (g = c.deltaY * d, b = 0), r.translateBy(
      n,
      -(g / h) * o,
      -(b / h) * o,
      // @ts-ignore
      { internal: !0 }
    );
    const S = Mo(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, l == null || l(c, S)), e.isPanScrolling && (a == null || a(c, S), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, S), e.isPanScrolling = !1;
    }, 150));
  };
}
function xv({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, i) {
    const o = r.type === "wheel", s = !t && o && !r.ctrlKey, l = vr(r, e);
    if (r.ctrlKey && o && l && r.preventDefault(), s || l)
      return null;
    r.preventDefault(), n.call(this, r, i);
  };
}
function Ev({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, s, l;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const i = Mo(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, i));
  };
}
function Sv({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
  return (o) => {
    var s, l;
    e.usedRightMouseButton = !!(n && ec(t, e.mouseButton ?? 0)), (s = o.sourceEvent) != null && s.sync || r([o.transform.x, o.transform.y, o.transform.k]), i && !((l = o.sourceEvent) != null && l.internal) && (i == null || i(o.sourceEvent, Mo(o.transform)));
  };
}
function kv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: o }) {
  return (s) => {
    var l;
    if (!((l = s.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, o && ec(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && o(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), i && wv(e.prevViewport, s.transform))) {
      const a = Mo(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          i == null || i(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Cv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: o, userSelectionActive: s, noWheelClassName: l, noPanClassName: a, lib: u }) {
  return (c) => {
    var b;
    const h = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (vr(c, `${u}-flow__node`) || vr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !h && !i && !o && !n || s || vr(c, l) && c.type === "wheel" || vr(c, a) && (c.type !== "wheel" || i && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((b = c.touches) == null ? void 0 : b.length) > 1)
      return c.preventDefault(), !1;
    if (!h && !i && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function Mv({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: i, viewport: o, onPanZoom: s, onPanZoomStart: l, onPanZoomEnd: a, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), d = Iu().clickDistance(!wr(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(i), g = Vt(e).call(d);
  y({
    x: o.x,
    y: o.y,
    zoom: Ir(o.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], i);
  const b = g.on("wheel.zoom"), S = g.on("dblclick.zoom");
  d.wheelDelta(tc);
  function w(H, L) {
    return g ? new Promise((m) => {
      d == null || d.transform(Yo(g, L == null ? void 0 : L.duration, () => m(!0)), H);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: H, noPanClassName: L, onPaneContextMenu: m, userSelectionActive: k, panOnScroll: E, panOnDrag: N, panOnScrollMode: A, panOnScrollSpeed: I, preventScrolling: R, zoomOnPinch: K, zoomOnScroll: q, zoomOnDoubleClick: j, zoomActivationKeyPressed: Z, lib: Q, onTransformChange: ie }) {
    k && !c.isZoomingOrPanning && _();
    const ue = E && !Z && !k ? bv({
      zoomPanValues: c,
      noWheelClassName: H,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: A,
      panOnScrollSpeed: I,
      zoomOnPinch: K,
      onPanZoomStart: l,
      onPanZoom: s,
      onPanZoomEnd: a
    }) : xv({
      noWheelClassName: H,
      preventScrolling: R,
      d3ZoomHandler: b
    });
    if (g.on("wheel.zoom", ue, { passive: !1 }), !k) {
      const Se = Ev({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: l
      });
      d.on("start", Se);
      const we = Sv({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!m,
        onPanZoom: s,
        onTransformChange: ie
      });
      d.on("zoom", we);
      const G = kv({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: E,
        onPaneContextMenu: m,
        onPanZoomEnd: a,
        onDraggingChange: u
      });
      d.on("end", G);
    }
    const Ee = Cv({
      zoomActivationKeyPressed: Z,
      panOnDrag: N,
      zoomOnScroll: q,
      panOnScroll: E,
      zoomOnDoubleClick: j,
      zoomOnPinch: K,
      userSelectionActive: k,
      noPanClassName: L,
      noWheelClassName: H,
      lib: Q
    });
    d.filter(Ee), j ? g.on("dblclick.zoom", S) : g.on("dblclick.zoom", null);
  }
  function _() {
    d.on("zoom", null);
  }
  async function y(H, L, m) {
    const k = Lo(H), E = d == null ? void 0 : d.constrain()(k, L, m);
    return E && await w(E), new Promise((N) => N(E));
  }
  async function p(H, L) {
    const m = Lo(H);
    return await w(m, L), new Promise((k) => k(m));
  }
  function C(H) {
    if (g) {
      const L = Lo(H), m = g.property("__zoom");
      (m.k !== H.zoom || m.x !== H.x || m.y !== H.y) && (d == null || d.transform(g, L, null, { sync: !0 }));
    }
  }
  function z() {
    const H = g ? Ou(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: H.x, y: H.y, zoom: H.k };
  }
  function P(H, L) {
    return g ? new Promise((m) => {
      d == null || d.scaleTo(Yo(g, L == null ? void 0 : L.duration, () => m(!0)), H);
    }) : Promise.resolve(!1);
  }
  function D(H, L) {
    return g ? new Promise((m) => {
      d == null || d.scaleBy(Yo(g, L == null ? void 0 : L.duration, () => m(!0)), H);
    }) : Promise.resolve(!1);
  }
  function X(H) {
    d == null || d.scaleExtent(H);
  }
  function V(H) {
    d == null || d.translateExtent(H);
  }
  function F(H) {
    const L = !wr(H) || H < 0 ? 0 : H;
    d == null || d.clickDistance(L);
  }
  return {
    update: x,
    destroy: _,
    setViewport: p,
    setViewportConstrained: y,
    getViewport: z,
    scaleTo: P,
    scaleBy: D,
    setScaleExtent: X,
    setTranslateExtent: V,
    syncViewport: C,
    setClickDistance: F
  };
}
var Ql;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ql || (Ql = {}));
var Pv = /* @__PURE__ */ Ye('<div role="button" tabindex="-1"><!></div>');
function oo(e, t) {
  de(t, !1);
  const n = () => B(j, "$connectable", y), r = () => B(ue, "$connectionRadius", y), i = () => B(ie, "$domNode", y), o = () => B(le, "$nodeLookup", y), s = () => B(Q, "$connectionMode", y), l = () => B(we, "$lib", y), a = () => B(Ke, "$autoPanOnConnect", y), u = () => B(Le, "$flowId", y), c = () => B(Se, "$isValidConnectionStore", y), h = () => B(re, "$onedgecreate", y), d = () => B(Me, "$onConnectAction", y), g = () => B(ae, "$onConnectStartAction", y), b = () => B(ft, "$onConnectEndAction", y), S = () => B(Ee, "$viewport", y), w = () => B(kt, "$connection", y), x = () => B(Te, "$edges", y), _ = () => B(qe, "$connectionLookup", y), [y, p] = nt(), C = /* @__PURE__ */ W(), z = /* @__PURE__ */ W(), P = /* @__PURE__ */ W(), D = /* @__PURE__ */ W(), X = /* @__PURE__ */ W(), V = /* @__PURE__ */ W(), F = /* @__PURE__ */ W(), H = /* @__PURE__ */ W();
  let L = v(t, "id", 8, void 0), m = v(t, "type", 8, "source"), k = v(t, "position", 24, () => se.Top), E = v(t, "style", 8, void 0), N = v(t, "isValidConnection", 8, void 0), A = v(t, "onconnect", 8, void 0), I = v(t, "ondisconnect", 8, void 0), R = v(t, "isConnectable", 8, void 0), K = v(t, "class", 8, void 0);
  const q = Bi("svelteflow__node_id"), j = Bi("svelteflow__node_connectable"), Z = Je(), {
    connectionMode: Q,
    domNode: ie,
    nodeLookup: le,
    connectionRadius: ue,
    viewport: Ee,
    isValidConnection: Se,
    lib: we,
    addEdge: G,
    onedgecreate: re,
    panBy: _e,
    cancelConnection: ge,
    updateConnection: be,
    autoPanOnConnect: Ke,
    edges: Te,
    connectionLookup: qe,
    onconnect: Me,
    onconnectstart: ae,
    onconnectend: ft,
    flowId: Le,
    connection: kt
  } = Z;
  function Be(Pe) {
    const Ie = Fu(Pe);
    (Ie && Pe.button === 0 || !Ie) && mv.onPointerDown(Pe, {
      handleId: f(P),
      nodeId: q,
      isTarget: f(C),
      connectionRadius: r(),
      domNode: i(),
      nodeLookup: o(),
      connectionMode: s(),
      lib: l(),
      autoPanOnConnect: a(),
      flowId: u(),
      isValidConnection: N() ?? c(),
      updateConnection: be,
      cancelConnection: ge,
      panBy: _e,
      onConnect: (ce) => {
        var ht;
        const Qe = h() ? h()(ce) : ce;
        Qe && (G(Qe), (ht = d()) == null || ht(ce));
      },
      onConnectStart: (ce, Qe) => {
        var ht;
        (ht = g()) == null || ht(ce, {
          nodeId: Qe.nodeId,
          handleId: Qe.handleId,
          handleType: Qe.handleType
        });
      },
      onConnectEnd: (ce, Qe) => {
        var ht;
        (ht = b()) == null || ht(ce, Qe);
      },
      getTransform: () => [S().x, S().y, S().zoom],
      getFromHandle: () => w().fromHandle
    });
  }
  let He = /* @__PURE__ */ W(null), Ue = /* @__PURE__ */ W();
  $(() => M(m()), () => {
    Y(C, m() === "target");
  }), $(() => (M(R()), n()), () => {
    Y(z, R() !== void 0 ? R() : n());
  }), $(() => M(L()), () => {
    Y(P, L() || null);
  }), $(
    () => (M(A()), M(I()), x(), _(), M(m()), M(L())),
    () => {
      (A() || I()) && (x(), Y(Ue, _().get(`${q}-${m()}${L() ? `-${L()}` : ""}`)));
    }
  ), $(
    () => (f(He), f(Ue), M(I()), M(A())),
    () => {
      if (f(He) && !D0(f(Ue), f(He))) {
        const Pe = f(Ue) ?? /* @__PURE__ */ new Map();
        Xl(f(He), Pe, I()), Xl(Pe, f(He), A());
      }
      Y(He, f(Ue) ?? /* @__PURE__ */ new Map());
    }
  ), $(() => w(), () => {
    Y(D, !!w().fromHandle);
  }), $(() => (w(), M(m()), f(P)), () => {
    var Pe, Ie, ce;
    Y(X, ((Pe = w().fromHandle) == null ? void 0 : Pe.nodeId) === q && ((Ie = w().fromHandle) == null ? void 0 : Ie.type) === m() && ((ce = w().fromHandle) == null ? void 0 : ce.id) === f(P));
  }), $(() => (w(), M(m()), f(P)), () => {
    var Pe, Ie, ce;
    Y(V, ((Pe = w().toHandle) == null ? void 0 : Pe.nodeId) === q && ((Ie = w().toHandle) == null ? void 0 : Ie.type) === m() && ((ce = w().toHandle) == null ? void 0 : ce.id) === f(P));
  }), $(
    () => (s(), w(), M(m()), f(P)),
    () => {
      var Pe, Ie, ce;
      Y(F, s() === nr.Strict ? ((Pe = w().fromHandle) == null ? void 0 : Pe.type) !== m() : q !== ((Ie = w().fromHandle) == null ? void 0 : Ie.nodeId) || f(P) !== ((ce = w().fromHandle) == null ? void 0 : ce.id));
    }
  ), $(() => (f(V), w()), () => {
    Y(H, f(V) && w().isValid);
  }), dt(), pe();
  var rt = Pv();
  let jt;
  var ze = Xe(rt);
  Et(ze, t, "default", {}), Ve(
    (Pe) => {
      te(rt, "data-handleid", f(P)), te(rt, "data-nodeid", q), te(rt, "data-handlepos", k()), te(rt, "data-id", `${u() ?? ""}-${q ?? ""}-${(L() || "") ?? ""}-${m() ?? ""}`), jt = Gt(rt, 1, Pe, null, jt, {
        valid: f(H),
        connectingto: f(V),
        connectingfrom: f(X),
        source: !f(C),
        target: f(C),
        connectablestart: f(z),
        connectableend: f(z),
        connectable: f(z),
        connectionindicator: f(z) && (!f(D) || f(F))
      }), St(rt, E());
    },
    [
      () => un((M(Ae), M(k()), M(K()), O(() => Ae([
        "svelte-flow__handle",
        `svelte-flow__handle-${k()}`,
        "nodrag",
        "nopan",
        k(),
        K()
      ]))))
    ]
  ), De("mousedown", rt, Be), De("touchstart", rt, Be), J(e, rt), he(), p();
}
var Nv = /* @__PURE__ */ Ye("<!> <!>", 1);
function ws(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = v(t, "data", 24, () => ({ label: "Node" })), i = v(t, "targetPosition", 8, void 0), o = v(t, "sourcePosition", 8, void 0);
  pe();
  var s = Nv(), l = $e(s);
  {
    let c = /* @__PURE__ */ ne(() => (M(i()), M(se), O(() => i() ?? se.Top)));
    oo(l, {
      type: "target",
      get position() {
        return f(c);
      }
    });
  }
  var a = Oe(l), u = Oe(a);
  {
    let c = /* @__PURE__ */ ne(() => (M(o()), M(se), O(() => o() ?? se.Bottom)));
    oo(u, {
      type: "source",
      get position() {
        return f(c);
      }
    });
  }
  Ve(() => hi(a, ` ${M(r()), O(() => {
    var c;
    return (c = r()) == null ? void 0 : c.label;
  }) ?? ""} `)), J(e, s), he();
}
var Av = /* @__PURE__ */ Ye(" <!>", 1);
function Tv(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, ["data", "sourcePosition"]), de(t, !1);
  let r = v(t, "data", 24, () => ({ label: "Node" })), i = v(t, "sourcePosition", 8, void 0);
  pe();
  var o = Av(), s = $e(o), l = Oe(s);
  {
    let a = /* @__PURE__ */ ne(() => (M(i()), M(se), O(() => i() ?? se.Bottom)));
    oo(l, {
      type: "source",
      get position() {
        return f(a);
      }
    });
  }
  Ve(() => hi(s, `${M(r()), O(() => {
    var a;
    return (a = r()) == null ? void 0 : a.label;
  }) ?? ""} `)), J(e, o), he();
}
var zv = /* @__PURE__ */ Ye(" <!>", 1);
function Ov(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, ["data", "targetPosition"]), de(t, !1);
  let r = v(t, "data", 24, () => ({ label: "Node" })), i = v(t, "targetPosition", 8, void 0);
  pe();
  var o = zv(), s = $e(o), l = Oe(s);
  {
    let a = /* @__PURE__ */ ne(() => (M(i()), M(se), O(() => i() ?? se.Top)));
    oo(l, {
      type: "target",
      get position() {
        return f(a);
      }
    });
  }
  Ve(() => hi(s, `${M(r()), O(() => {
    var a;
    return (a = r()) == null ? void 0 : a.label;
  }) ?? ""} `)), J(e, o), he();
}
function Iv(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, []);
}
function ea(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Xo(e, { target: t, domNode: n }) {
  return ea(e, n, t), {
    async update({ target: r, domNode: i }) {
      ea(e, i, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Dv = /* @__PURE__ */ Ye("<div><!></div>");
function Hv(e, t) {
  de(t, !1);
  const n = () => B(o, "$domNode", r), [r, i] = nt(), { domNode: o } = Je();
  pe();
  var s = Dv(), l = Xe(s);
  Et(l, t, "default", {}), gt(s, (a, u) => Xo == null ? void 0 : Xo(a, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: n()
  })), J(e, s), he(), i();
}
function nc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: i, unselectNodesAndEdges: o, elementsSelectable: s } = Je();
  return (l) => {
    const a = U(e).get(l);
    if (!a) {
      console.warn("012", tr.error012(l));
      return;
    }
    (a.selectable || U(s) && typeof a.selectable > "u") && (t.set(null), n.set(null), a.selected ? a.selected && U(r) && o({ nodes: [], edges: [a] }) : i([l]));
  };
}
var Rv = /* @__PURE__ */ Ye('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Vv(e, t) {
  de(t, !1);
  let n = v(t, "style", 8, void 0), r = v(t, "x", 8, void 0), i = v(t, "y", 8, void 0);
  const o = nc(), s = Bi("svelteflow__edge_id");
  pe(), Hv(e, {
    children: (l, a) => {
      var u = Rv();
      let c;
      var h = Xe(u);
      Et(h, t, "default", {}), Ve(() => c = St(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${i() ?? ""}px)`
      })), De("keyup", u, () => {
      }), De("click", u, () => {
        s && o(s);
      }), J(l, u);
    },
    $$slots: { default: !0 }
  }), he();
}
var Lv = /* @__PURE__ */ je('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Yv = /* @__PURE__ */ je('<path fill="none"></path><!><!>', 1);
function Po(e, t) {
  de(t, !1);
  let n = v(t, "id", 8, void 0), r = v(t, "path", 8), i = v(t, "label", 8, void 0), o = v(t, "labelX", 8, void 0), s = v(t, "labelY", 8, void 0), l = v(t, "labelStyle", 8, void 0), a = v(t, "markerStart", 8, void 0), u = v(t, "markerEnd", 8, void 0), c = v(t, "style", 8, void 0), h = v(t, "interactionWidth", 8, 20), d = v(t, "class", 8, void 0), g = h() === void 0 ? 20 : h();
  pe();
  var b = Yv(), S = $e(b), w = Oe(S);
  {
    var x = (p) => {
      var C = Lv();
      te(C, "stroke-opacity", 0), Ve(() => {
        te(C, "d", r()), te(C, "stroke-width", g);
      }), J(p, C);
    };
    Ge(w, (p) => {
      g && p(x);
    });
  }
  var _ = Oe(w);
  {
    var y = (p) => {
      Vv(p, {
        get x() {
          return o();
        },
        get y() {
          return s();
        },
        get style() {
          return l();
        },
        children: (C, z) => {
          var P = Df();
          Ve(() => hi(P, i())), J(C, P);
        },
        $$slots: { default: !0 }
      });
    };
    Ge(_, (p) => {
      i() && p(y);
    });
  }
  Ve(
    (p) => {
      te(S, "id", n()), te(S, "d", r()), Gt(S, 0, p), te(S, "marker-start", a()), te(S, "marker-end", u()), St(S, c());
    },
    [
      () => un((M(Ae), M(d()), O(() => Ae(["svelte-flow__edge-path", d()]))))
    ]
  ), J(e, b), he();
}
function bs(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ W(), i = /* @__PURE__ */ W(), o = /* @__PURE__ */ W();
  let s = v(t, "label", 8, void 0), l = v(t, "labelStyle", 8, void 0), a = v(t, "style", 8, void 0), u = v(t, "markerStart", 8, void 0), c = v(t, "markerEnd", 8, void 0), h = v(t, "interactionWidth", 8, void 0), d = v(t, "sourceX", 8), g = v(t, "sourceY", 8), b = v(t, "sourcePosition", 8), S = v(t, "targetX", 8), w = v(t, "targetY", 8), x = v(t, "targetPosition", 8);
  $(
    () => (f(r), f(i), f(o), M(d()), M(g()), M(S()), M(w()), M(b()), M(x())),
    () => {
      ((_) => {
        var y = zn(_, 3);
        Y(r, y[0]), Y(i, y[1]), Y(o, y[2]);
      })(Wu({
        sourceX: d(),
        sourceY: g(),
        targetX: S(),
        targetY: w(),
        sourcePosition: b(),
        targetPosition: x()
      }));
    }
  ), dt(), pe(), Po(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(i);
    },
    get labelY() {
      return f(o);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return h();
    },
    get style() {
      return a();
    }
  }), he();
}
function Xv(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ W(), i = /* @__PURE__ */ W(), o = /* @__PURE__ */ W();
  let s = v(t, "label", 8, void 0), l = v(t, "labelStyle", 8, void 0), a = v(t, "style", 8, void 0), u = v(t, "markerStart", 8, void 0), c = v(t, "markerEnd", 8, void 0), h = v(t, "interactionWidth", 8, void 0), d = v(t, "sourceX", 8), g = v(t, "sourceY", 8), b = v(t, "sourcePosition", 8), S = v(t, "targetX", 8), w = v(t, "targetY", 8), x = v(t, "targetPosition", 8);
  $(
    () => (f(r), f(i), f(o), M(d()), M(g()), M(S()), M(w()), M(b()), M(x())),
    () => {
      ((_) => {
        var y = zn(_, 3);
        Y(r, y[0]), Y(i, y[1]), Y(o, y[2]);
      })(io({
        sourceX: d(),
        sourceY: g(),
        targetX: S(),
        targetY: w(),
        sourcePosition: b(),
        targetPosition: x()
      }));
    }
  ), dt(), pe(), Po(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(i);
    },
    get labelY() {
      return f(o);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return h();
    },
    get style() {
      return a();
    }
  }), he();
}
function Bv(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "targetX",
    "targetY"
  ]), de(t, !1);
  const r = /* @__PURE__ */ W(), i = /* @__PURE__ */ W(), o = /* @__PURE__ */ W();
  let s = v(t, "label", 8, void 0), l = v(t, "labelStyle", 8, void 0), a = v(t, "style", 8, void 0), u = v(t, "markerStart", 8, void 0), c = v(t, "markerEnd", 8, void 0), h = v(t, "interactionWidth", 8, void 0), d = v(t, "sourceX", 8), g = v(t, "sourceY", 8), b = v(t, "targetX", 8), S = v(t, "targetY", 8);
  $(
    () => (f(r), f(i), f(o), M(d()), M(g()), M(b()), M(S())),
    () => {
      ((w) => {
        var x = zn(w, 3);
        Y(r, x[0]), Y(i, x[1]), Y(o, x[2]);
      })(ms({
        sourceX: d(),
        sourceY: g(),
        targetX: b(),
        targetY: S()
      }));
    }
  ), dt(), pe(), Po(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(i);
    },
    get labelY() {
      return f(o);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return h();
    },
    get style() {
      return a();
    }
  }), he();
}
function Fv(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]);
  We(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ W(), i = /* @__PURE__ */ W(), o = /* @__PURE__ */ W();
  let s = v(t, "label", 8, void 0), l = v(t, "labelStyle", 8, void 0), a = v(t, "style", 8, void 0), u = v(t, "markerStart", 8, void 0), c = v(t, "markerEnd", 8, void 0), h = v(t, "interactionWidth", 8, void 0), d = v(t, "sourceX", 8), g = v(t, "sourceY", 8), b = v(t, "sourcePosition", 8), S = v(t, "targetX", 8), w = v(t, "targetY", 8), x = v(t, "targetPosition", 8);
  $(
    () => (f(r), f(i), f(o), M(d()), M(g()), M(S()), M(w()), M(b()), M(x())),
    () => {
      ((_) => {
        var y = zn(_, 3);
        Y(r, y[0]), Y(i, y[1]), Y(o, y[2]);
      })(io({
        sourceX: d(),
        sourceY: g(),
        targetX: S(),
        targetY: w(),
        sourcePosition: b(),
        targetPosition: x(),
        borderRadius: 0
      }));
    }
  ), dt(), pe(), Po(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(i);
    },
    get labelY() {
      return f(o);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return h();
    },
    get style() {
      return a();
    }
  }), he();
}
function Wv(e, t) {
  const n = e.set, r = t.set, i = U(e), o = U(t);
  let l = i.length === 0 && o.length > 0 ? o : i;
  e.set(l);
  const a = (u) => {
    const c = n(u);
    return l = c, r(l), c;
  };
  e.set = t.set = a, e.update = t.update = (u) => a(u(l));
}
function Kv(e, t) {
  const n = e.set, r = t.set;
  let i = U(t);
  e.set(i);
  const o = (s) => {
    n(s), r(s), i = s;
  };
  e.set = t.set = o, e.update = t.update = (s) => o(s(i));
}
const qv = (e, t, n) => {
  if (!n)
    return;
  const r = U(e), i = t.set, o = n.set;
  let s = n ? U(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (l) => (i(l), o(l), s = l, l), n.set = (l) => (r == null || r.syncViewport(l), i(l), o(l), s = l, l), t.update = (l) => {
    t.set(l(s));
  }, n.update = (l) => {
    n.set(l(s));
  };
}, Uv = (e, t, n, r = [0, 0], i = eo, o, s, l, a, u, c, h, d) => {
  const { subscribe: g, set: b, update: S } = ee([]);
  let w = e, x = {}, _ = !0;
  const y = (P) => {
    const D = qu(P, t, n, {
      elevateNodesOnSelect: _,
      nodeOrigin: r,
      nodeExtent: i,
      defaults: x,
      checkEquality: !1
    });
    return U(o) && D && U(a) && (V0({
      nodes: t,
      width: U(u),
      height: U(c),
      panZoom: U(a),
      minZoom: U(h),
      maxZoom: U(d)
    }, U(s)).then((V) => {
      var F;
      (F = U(l)) == null || F.resolve(V), l.set(null);
    }), o.set(!1), s.set(void 0)), w = P, b(w), w;
  }, p = (P) => y(P(w)), C = (P) => {
    x = P;
  }, z = (P) => {
    _ = P.elevateNodesOnSelect ?? _;
  };
  return y(w), {
    subscribe: g,
    set: y,
    update: p,
    setDefaultOptions: C,
    setOptions: z
  };
}, Zv = (e, t, n, r) => {
  const { subscribe: i, set: o, update: s } = ee([]);
  let l = e, a = {};
  const u = (d) => {
    const g = a ? d.map((b) => ({ ...a, ...b })) : d;
    Zu(t, n, g), l = g, o(l);
  }, c = (d) => u(d(l)), h = (d) => {
    a = d;
  };
  return u(l), {
    subscribe: i,
    set: u,
    update: c,
    setDefaultOptions: h
  };
}, rc = {
  input: Tv,
  output: Ov,
  default: ws,
  group: Iv
}, ic = {
  straight: Bv,
  smoothstep: Xv,
  default: bs,
  step: Fv
}, Gv = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: i, nodeOrigin: o, nodeExtent: s }) => {
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), h = o ?? [0, 0], d = s ?? eo;
  qu(e, l, a, {
    nodeExtent: d,
    nodeOrigin: h,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Zu(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (i && n && r) {
    const z = mi(l, {
      filter: (P) => !!((P.width || P.initialWidth) && (P.height || P.initialHeight))
    });
    g = Xu(z, n, r, 0.5, 2, 0.1);
  }
  const b = ee(!1), S = ee(void 0), w = ee(null), x = ee(null), _ = ee(500), y = ee(500), p = ee(0.5), C = ee(2);
  return {
    flowId: ee(null),
    nodes: Uv(e, l, a, h, d, b, S, w, x, _, y, p, C),
    nodeLookup: Ot(l),
    parentLookup: Ot(a),
    edgeLookup: Ot(c),
    visibleNodes: Ot([]),
    edges: Zv(t, u, c),
    visibleEdges: Ot([]),
    connectionLookup: Ot(u),
    width: _,
    height: y,
    minZoom: p,
    maxZoom: C,
    nodeOrigin: ee(h),
    nodeDragThreshold: ee(1),
    nodeExtent: ee(d),
    translateExtent: ee(eo),
    autoPanOnNodeDrag: ee(!0),
    autoPanOnConnect: ee(!0),
    fitViewQueued: b,
    fitViewOptions: S,
    fitViewResolver: w,
    panZoom: x,
    snapGrid: ee(null),
    dragging: ee(!1),
    selectionRect: ee(null),
    selectionKeyPressed: ee(!1),
    multiselectionKeyPressed: ee(!1),
    deleteKeyPressed: ee(!1),
    panActivationKeyPressed: ee(!1),
    zoomActivationKeyPressed: ee(!1),
    selectionRectMode: ee(null),
    selectionMode: ee(to.Partial),
    nodeTypes: ee(rc),
    edgeTypes: ee(ic),
    viewport: ee(g),
    connectionMode: ee(nr.Strict),
    domNode: ee(null),
    connection: Ot(hs),
    connectionLineType: ee(_r.Bezier),
    connectionRadius: ee(20),
    isValidConnection: ee(() => !0),
    nodesDraggable: ee(!0),
    nodesConnectable: ee(!0),
    elementsSelectable: ee(!0),
    selectNodesOnDrag: ee(!0),
    markers: Ot([]),
    defaultMarkerColor: ee("#b1b1b7"),
    lib: Ot("svelte"),
    onlyRenderVisibleElements: ee(!1),
    onerror: ee(Yu),
    ondelete: ee(void 0),
    onedgecreate: ee(void 0),
    onconnect: ee(void 0),
    onconnectstart: ee(void 0),
    onconnectend: ee(void 0),
    onbeforedelete: ee(void 0),
    nodesInitialized: ee(!1),
    edgesInitialized: ee(!1),
    viewportInitialized: ee(!1),
    initialized: Ot(!1)
  };
};
function $v(e) {
  const t = yr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, i, o, s, l]) => i && s && l ? n.filter((u) => {
    const c = r.get(u.source), h = r.get(u.target);
    return c && h && G0({
      sourceNode: c,
      targetNode: h,
      width: s,
      height: l,
      transform: [o.x, o.y, o.zoom]
    });
  }) : n);
  return yr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, i, o]) => n.reduce((l, a) => {
    const u = r.get(a.source), c = r.get(a.target);
    if (!u || !c)
      return l;
    const h = nv({
      id: a.id,
      sourceNode: u,
      targetNode: c,
      sourceHandle: a.sourceHandle || null,
      targetHandle: a.targetHandle || null,
      connectionMode: i,
      onError: o
    });
    return h && l.push({
      ...a,
      zIndex: Z0({
        selected: a.selected,
        zIndex: a.zIndex,
        sourceNode: u,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...h
    }), l;
  }, []));
}
function jv(e) {
  return yr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, i, o]) => {
    const s = [o.x, o.y, o.zoom];
    return n ? Hu(t, { x: 0, y: 0, width: r, height: i }, s, !0) : Array.from(t.values());
  });
}
const Gs = Symbol();
function Jv({ nodes: e, edges: t, width: n, height: r, fitView: i, nodeOrigin: o, nodeExtent: s }) {
  const l = Gv({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: i,
    nodeOrigin: o,
    nodeExtent: s
  });
  function a(k) {
    l.nodeTypes.set({
      ...rc,
      ...k
    });
  }
  function u(k) {
    l.edgeTypes.set({
      ...ic,
      ...k
    });
  }
  function c(k) {
    const E = U(l.edges);
    l.edges.set(J0(k, E));
  }
  const h = (k, E = !1) => {
    var A;
    const N = U(l.nodeLookup);
    for (const [I, R] of k) {
      const K = (A = N.get(I)) == null ? void 0 : A.internals.userNode;
      K && (K.position = R.position, K.dragging = E);
    }
    l.nodes.update((I) => I);
  };
  function d(k) {
    var R, K, q;
    const E = U(l.nodeLookup), N = U(l.parentLookup), { changes: A, updatedInternals: I } = uv(k, E, U(l.parentLookup), U(l.domNode), U(l.nodeOrigin));
    if (I) {
      ov(E, N, { nodeOrigin: o, nodeExtent: s });
      for (const j of A) {
        const Z = (R = E.get(j.id)) == null ? void 0 : R.internals.userNode;
        if (Z)
          switch (j.type) {
            case "dimensions": {
              const Q = { ...Z.measured, ...j.dimensions };
              j.setAttributes && (Z.width = ((K = j.dimensions) == null ? void 0 : K.width) ?? Z.width, Z.height = ((q = j.dimensions) == null ? void 0 : q.height) ?? Z.height), Z.measured = Q;
              break;
            }
            case "position":
              Z.position = j.position ?? Z.position;
              break;
          }
      }
      l.nodes.update((j) => j), U(l.nodesInitialized) || l.nodesInitialized.set(!0);
    }
  }
  function g(k) {
    const E = U(l.fitViewResolver) ?? F0();
    return l.fitViewQueued.set(!0), l.fitViewOptions.set(k), l.fitViewResolver.set(E), l.nodes.set(U(l.nodes)), E.promise;
  }
  function b(k, E) {
    const N = U(l.panZoom);
    return N ? N.scaleBy(k, E) : Promise.resolve(!1);
  }
  function S(k) {
    return b(1.2, k);
  }
  function w(k) {
    return b(1 / 1.2, k);
  }
  function x(k) {
    const E = U(l.panZoom);
    E && (E.setScaleExtent([k, U(l.maxZoom)]), l.minZoom.set(k));
  }
  function _(k) {
    const E = U(l.panZoom);
    E && (E.setScaleExtent([U(l.minZoom), k]), l.maxZoom.set(k));
  }
  function y(k) {
    const E = U(l.panZoom);
    E && (E.setTranslateExtent(k), l.translateExtent.set(k));
  }
  function p(k) {
    let E = !1;
    return k.forEach((N) => {
      N.selected && (N.selected = !1, E = !0);
    }), E;
  }
  function C(k) {
    var E;
    (E = U(l.panZoom)) == null || E.setClickDistance(k);
  }
  function z(k) {
    p((k == null ? void 0 : k.nodes) || U(l.nodes)) && l.nodes.set(U(l.nodes)), p((k == null ? void 0 : k.edges) || U(l.edges)) && l.edges.set(U(l.edges));
  }
  l.deleteKeyPressed.subscribe(async (k) => {
    var E;
    if (k) {
      const N = U(l.nodes), A = U(l.edges), I = N.filter((j) => j.selected), R = A.filter((j) => j.selected), { nodes: K, edges: q } = await Y0({
        nodesToRemove: I,
        edgesToRemove: R,
        nodes: N,
        edges: A,
        onBeforeDelete: U(l.onbeforedelete)
      });
      (K.length || q.length) && (l.nodes.update((j) => j.filter((Z) => !K.some((Q) => Q.id === Z.id))), l.edges.update((j) => j.filter((Z) => !q.some((Q) => Q.id === Z.id))), (E = U(l.ondelete)) == null || E({
        nodes: K,
        edges: q
      }));
    }
  });
  function P(k) {
    const E = U(l.multiselectionKeyPressed);
    l.nodes.update((N) => N.map((A) => {
      const I = k.includes(A.id), R = E && A.selected || I;
      return A.selected = R, A;
    })), E || l.edges.update((N) => N.map((A) => (A.selected = !1, A)));
  }
  function D(k) {
    const E = U(l.multiselectionKeyPressed);
    l.edges.update((N) => N.map((A) => {
      const I = k.includes(A.id), R = E && A.selected || I;
      return A.selected = R, A;
    })), E || l.nodes.update((N) => N.map((A) => (A.selected = !1, A)));
  }
  function X(k) {
    var N;
    const E = (N = U(l.nodes)) == null ? void 0 : N.find((A) => A.id === k);
    if (!E) {
      console.warn("012", tr.error012(k));
      return;
    }
    l.selectionRect.set(null), l.selectionRectMode.set(null), E.selected ? E.selected && U(l.multiselectionKeyPressed) && z({ nodes: [E], edges: [] }) : P([k]);
  }
  function V(k) {
    const E = U(l.viewport);
    return cv({
      delta: k,
      panZoom: U(l.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: U(l.translateExtent),
      width: U(l.width),
      height: U(l.height)
    });
  }
  const F = ee(hs), H = (k) => {
    F.set({ ...k });
  };
  function L() {
    F.set(hs);
  }
  function m() {
    l.selectionRect.set(null), l.selectionRectMode.set(null), l.snapGrid.set(null), l.isValidConnection.set(() => !0), z(), L();
  }
  return {
    // state
    ...l,
    // derived state
    visibleEdges: $v(l),
    visibleNodes: jv(l),
    connection: yr([F, l.viewport], ([k, E]) => k.inProgress ? {
      ...k,
      to: Co(k.to, [E.x, E.y, E.zoom])
    } : { ...k }),
    markers: yr([l.edges, l.defaultMarkerColor, l.flowId], ([k, E, N]) => rv(k, { defaultColor: E, id: N })),
    initialized: (() => {
      let k = !1;
      const E = U(l.nodes).length, N = U(l.edges).length;
      return yr([l.nodesInitialized, l.edgesInitialized, l.viewportInitialized], ([A, I, R]) => k || (E === 0 ? k = R : N === 0 ? k = R && A : k = R && A && I, k));
    })(),
    // actions
    syncNodeStores: (k) => Wv(l.nodes, k),
    syncEdgeStores: (k) => Kv(l.edges, k),
    syncViewport: (k) => qv(l.panZoom, l.viewport, k),
    setNodeTypes: a,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: h,
    updateNodeInternals: d,
    zoomIn: S,
    zoomOut: w,
    fitView: (k) => g(k),
    setMinZoom: x,
    setMaxZoom: _,
    setTranslateExtent: y,
    setPaneClickDistance: C,
    unselectNodesAndEdges: z,
    addSelectedNodes: P,
    addSelectedEdges: D,
    handleNodeSelection: X,
    panBy: V,
    updateConnection: H,
    cancelConnection: L,
    reset: m
  };
}
function Je() {
  const e = Bi(Gs);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Qv({ nodes: e, edges: t, width: n, height: r, fitView: i, nodeOrigin: o, nodeExtent: s }) {
  const l = Jv({ nodes: e, edges: t, width: n, height: r, fitView: i, nodeOrigin: o, nodeExtent: s });
  return Fi(Gs, {
    getStore: () => l
  }), l;
}
function Bo(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: i, initialViewport: o, viewport: s, dragging: l, translateExtent: a, paneClickDistance: u } = t, c = Mv({
    domNode: e,
    minZoom: r,
    maxZoom: i,
    translateExtent: a,
    viewport: o,
    paneClickDistance: u,
    onDraggingChange: l.set
  }), h = c.getViewport();
  return s.set(h), n.set(c), c.update(t), {
    update(d) {
      c.update(d);
    }
  };
}
var ey = /* @__PURE__ */ Ye('<div class="svelte-flow__zoom svelte-1vl0uat"><!></div>');
function ty(e, t) {
  de(t, !1);
  const n = () => B(A, "$panActivationKeyPressed", u), r = () => B(L, "$minZoom", u), i = () => B(m, "$maxZoom", u), o = () => B(I, "$zoomActivationKeyPressed", u), s = () => B(H, "$selectionRect", u), l = () => B(E, "$translateExtent", u), a = () => B(N, "$lib", u), [u, c] = nt(), h = /* @__PURE__ */ W(), d = /* @__PURE__ */ W(), g = /* @__PURE__ */ W();
  let b = v(t, "initialViewport", 8, void 0), S = v(t, "onMoveStart", 8, void 0), w = v(t, "onMove", 8, void 0), x = v(t, "onMoveEnd", 8, void 0), _ = v(t, "panOnScrollMode", 8), y = v(t, "preventScrolling", 8), p = v(t, "zoomOnScroll", 8), C = v(t, "zoomOnDoubleClick", 8), z = v(t, "zoomOnPinch", 8), P = v(t, "panOnDrag", 8), D = v(t, "panOnScroll", 8), X = v(t, "paneClickDistance", 8);
  const {
    viewport: V,
    panZoom: F,
    selectionRect: H,
    minZoom: L,
    maxZoom: m,
    dragging: k,
    translateExtent: E,
    lib: N,
    panActivationKeyPressed: A,
    zoomActivationKeyPressed: I,
    viewportInitialized: R
  } = Je(), K = (Z) => V.set({ x: Z[0], y: Z[1], zoom: Z[2] });
  gi(() => {
    Ui(R, !0);
  }), $(() => M(b()), () => {
    Y(h, b() || { x: 0, y: 0, zoom: 1 });
  }), $(() => (n(), M(P())), () => {
    Y(d, n() || P());
  }), $(() => (n(), M(D())), () => {
    Y(g, n() || D());
  }), dt(), pe();
  var q = ey(), j = Xe(q);
  Et(j, t, "default", {}), gt(q, (Z, Q) => Bo == null ? void 0 : Bo(Z, Q), () => ({
    viewport: V,
    minZoom: r(),
    maxZoom: i(),
    initialViewport: f(h),
    dragging: k,
    panZoom: F,
    onPanZoomStart: S(),
    onPanZoom: w(),
    onPanZoomEnd: x(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: z(),
    panOnScroll: f(g),
    panOnDrag: f(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: _() || wn.Free,
    zoomActivationKeyPressed: o(),
    preventScrolling: typeof y() == "boolean" ? y() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!s(),
    translateExtent: l(),
    lib: a(),
    paneClickDistance: X(),
    onTransformChange: K
  })), J(e, q), he(), c();
}
function ta(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function na(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var ny = /* @__PURE__ */ Ye("<div><!></div>");
function ry(e, t) {
  de(t, !1);
  const n = () => B(k, "$panActivationKeyPressed", g), r = () => B(L, "$selectionKeyPressed", g), i = () => B(F, "$selectionRect", g), o = () => B(V, "$elementsSelectable", g), s = () => B(H, "$selectionRectMode", g), l = () => B(N, "$connection", g), a = () => B(P, "$edges", g), u = () => B(z, "$nodeLookup", g), c = () => B(D, "$viewport", g), h = () => B(m, "$selectionMode", g), d = () => B(X, "$dragging", g), [g, b] = nt(), S = /* @__PURE__ */ W(), w = /* @__PURE__ */ W(), x = /* @__PURE__ */ W();
  let _ = v(t, "panOnDrag", 8, void 0), y = v(t, "selectionOnDrag", 8, void 0);
  const p = _o(), {
    nodes: C,
    nodeLookup: z,
    edges: P,
    viewport: D,
    dragging: X,
    elementsSelectable: V,
    selectionRect: F,
    selectionRectMode: H,
    selectionKeyPressed: L,
    selectionMode: m,
    panActivationKeyPressed: k,
    unselectNodesAndEdges: E,
    connection: N
  } = Je();
  let A = /* @__PURE__ */ W(), I = null, R = [], K = !1;
  function q(G) {
    if (K || l().inProgress) {
      K = !1;
      return;
    }
    p("paneclick", { event: G }), E(), H.set(null);
  }
  function j(G) {
    var ge, be;
    if (I = f(A).getBoundingClientRect(), !V || !f(w) || G.button !== 0 || G.target !== f(A) || !I)
      return;
    (be = (ge = G.target) == null ? void 0 : ge.setPointerCapture) == null || be.call(ge, G.pointerId);
    const { x: re, y: _e } = bn(G, I);
    E(), F.set({ width: 0, height: 0, startX: re, startY: _e, x: re, y: _e });
  }
  function Z(G) {
    if (!f(w) || !I || !i())
      return;
    K = !0;
    const re = bn(G, I), _e = i().startX ?? 0, ge = i().startY ?? 0, be = {
      ...i(),
      x: re.x < _e ? re.x : _e,
      y: re.y < ge ? re.y : ge,
      width: Math.abs(re.x - _e),
      height: Math.abs(re.y - ge)
    }, Ke = R.map((ae) => ae.id), Te = gs(R, a()).map((ae) => ae.id);
    R = Hu(u(), be, [c().x, c().y, c().zoom], h() === to.Partial, !0);
    const qe = gs(R, a()).map((ae) => ae.id), Me = R.map((ae) => ae.id);
    (Ke.length !== Me.length || Me.some((ae) => !Ke.includes(ae))) && C.update((ae) => ae.map(na(Me))), (Te.length !== qe.length || qe.some((ae) => !Te.includes(ae))) && P.update((ae) => ae.map(na(qe))), H.set("user"), F.set(be);
  }
  function Q(G) {
    var re, _e;
    G.button === 0 && ((_e = (re = G.target) == null ? void 0 : re.releasePointerCapture) == null || _e.call(re, G.pointerId), !f(w) && s() === "user" && G.target === f(A) && (q == null || q(G)), F.set(null), R.length > 0 && Ui(H, "nodes"), r() && (K = !1));
  }
  const ie = (G) => {
    var re;
    if (Array.isArray(f(S)) && ((re = f(S)) != null && re.includes(2))) {
      G.preventDefault();
      return;
    }
    p("panecontextmenu", { event: G });
  };
  $(() => (n(), M(_())), () => {
    Y(S, n() || _());
  }), $(
    () => (r(), i(), M(y()), f(S)),
    () => {
      Y(w, r() || i() || y() && f(S) !== !0);
    }
  ), $(
    () => (o(), f(w), s()),
    () => {
      Y(x, o() && (f(w) || s() === "user"));
    }
  ), dt(), pe();
  var le = ny(), ue = /* @__PURE__ */ al(() => f(x) ? void 0 : ta(q, f(A))), Ee = /* @__PURE__ */ al(() => ta(ie, f(A)));
  let Se;
  var we = Xe(le);
  Et(we, t, "default", {}), Is(le, (G) => Y(A, G), () => f(A)), Ve((G) => Se = Gt(le, 1, "svelte-flow__pane svelte-j55c5z", null, Se, G), [
    () => ({
      draggable: _() === !0 || Array.isArray(_()) && _().includes(0),
      dragging: d(),
      selection: f(w)
    })
  ]), De("click", le, function(...G) {
    var re;
    (re = f(ue)) == null || re.apply(this, G);
  }), De("pointerdown", le, function(...G) {
    var re;
    (re = f(x) ? j : void 0) == null || re.apply(this, G);
  }), De("pointermove", le, function(...G) {
    var re;
    (re = f(x) ? Z : void 0) == null || re.apply(this, G);
  }), De("pointerup", le, function(...G) {
    var re;
    (re = f(x) ? Q : void 0) == null || re.apply(this, G);
  }), De("contextmenu", le, function(...G) {
    var re;
    (re = f(Ee)) == null || re.apply(this, G);
  }), J(e, le), he(), b();
}
var iy = /* @__PURE__ */ Ye('<div class="svelte-flow__viewport xyflow__viewport svelte-tjeeg3"><!></div>');
function oy(e, t) {
  de(t, !1);
  const n = () => B(o, "$viewport", r), [r, i] = nt(), { viewport: o } = Je();
  pe();
  var s = iy(), l = Xe(s);
  Et(l, t, "default", {}), Ve(() => St(s, `transform: translate(${n().x ?? ""}px, ${n().y ?? ""}px) scale(${n().zoom ?? ""})`)), J(e, s), he(), i();
}
function br(e, t) {
  const { store: n, onDrag: r, onDragStart: i, onDragStop: o, onNodeMouseDown: s } = t, l = dv({
    onDrag: r,
    onDragStart: i,
    onDragStop: o,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = U(n.snapGrid), c = U(n.viewport);
      return {
        nodes: U(n.nodes),
        nodeLookup: U(n.nodeLookup),
        edges: U(n.edges),
        nodeExtent: U(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: U(n.nodeOrigin),
        multiSelectionActive: U(n.multiselectionKeyPressed),
        domNode: U(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: U(n.autoPanOnNodeDrag),
        nodesDraggable: U(n.nodesDraggable),
        selectNodesOnDrag: U(n.selectNodesOnDrag),
        nodeDragThreshold: U(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function a(u, c) {
    if (c.disabled) {
      l.destroy();
      return;
    }
    l.update({
      domNode: u,
      noDragClassName: c.noDragClass,
      handleSelector: c.handleSelector,
      nodeId: c.nodeId,
      isSelectable: c.isSelectable,
      nodeClickDistance: c.nodeClickDistance
    });
  }
  return a(e, t), {
    update(u) {
      a(e, u);
    },
    destroy() {
      l.destroy();
    }
  };
}
function sy({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: i, measuredHeight: o }) {
  if (i === void 0 && o === void 0) {
    const s = e ?? n, l = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: l ? `height:${l}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var ly = /* @__PURE__ */ Ye("<div><!></div>");
function ay(e, t) {
  de(t, !1);
  const n = () => B(le, "$nodeTypes", s), r = () => B(G, "$elementsSelectable", s), i = () => B(re, "$nodesDraggable", s), o = () => B(Ke, "$connectableStore", s), [s, l] = nt(), a = /* @__PURE__ */ W(void 0, !0), u = /* @__PURE__ */ W(void 0, !0), c = /* @__PURE__ */ W(void 0, !0), h = /* @__PURE__ */ W(void 0, !0);
  let d = v(t, "node", 9), g = v(t, "id", 9), b = v(t, "data", 25, () => ({})), S = v(t, "selected", 9, !1), w = v(t, "draggable", 9, void 0), x = v(t, "selectable", 9, void 0), _ = v(t, "connectable", 9, !0), y = v(t, "deletable", 9, !0), p = v(t, "hidden", 9, !1), C = v(t, "dragging", 9, !1), z = v(t, "resizeObserver", 9, null), P = v(t, "style", 9, void 0), D = v(t, "type", 9, "default"), X = v(t, "isParent", 9, !1), V = v(t, "positionX", 9), F = v(t, "positionY", 9), H = v(t, "sourcePosition", 9, void 0), L = v(t, "targetPosition", 9, void 0), m = v(t, "zIndex", 9), k = v(t, "measuredWidth", 9, void 0), E = v(t, "measuredHeight", 9, void 0), N = v(t, "initialWidth", 9, void 0), A = v(t, "initialHeight", 9, void 0), I = v(t, "width", 9, void 0), R = v(t, "height", 9, void 0), K = v(t, "dragHandle", 9, void 0), q = v(t, "initialized", 9, !1), j = v(t, "parentId", 9, void 0), Z = v(t, "nodeClickDistance", 9, void 0), Q = v(t, "class", 9, "");
  const ie = Je(), {
    nodeTypes: le,
    nodeDragThreshold: ue,
    selectNodesOnDrag: Ee,
    handleNodeSelection: Se,
    updateNodeInternals: we,
    elementsSelectable: G,
    nodesDraggable: re
  } = ie;
  let _e = /* @__PURE__ */ W(void 0, !0), ge = /* @__PURE__ */ W(null, !0);
  const be = _o(), Ke = ee(_());
  let Te = /* @__PURE__ */ W(void 0, !0), qe = /* @__PURE__ */ W(void 0, !0), Me = /* @__PURE__ */ W(void 0, !0);
  Fi("svelteflow__node_id", g()), Fi("svelteflow__node_connectable", Ke), ou(() => {
    var Be;
    f(ge) && ((Be = z()) == null || Be.unobserve(f(ge)));
  });
  function ae(Be) {
    x() && (!U(Ee) || !w() || U(ue) > 0) && Se(g()), be("nodeclick", { node: d().internals.userNode, event: Be });
  }
  $(() => M(D()), () => {
    Y(a, D() || "default");
  }), $(() => (n(), f(a)), () => {
    Y(u, !!n()[f(a)]);
  }), $(() => (n(), f(a), ws), () => {
    Y(c, n()[f(a)] || ws);
  }), $(
    () => (f(u), M(D())),
    () => {
      f(u) || console.warn("003", tr.error003(D()));
    }
  ), $(
    () => (M(I()), M(R()), M(N()), M(A()), M(k()), M(E())),
    () => {
      Y(h, sy({
        width: I(),
        height: R(),
        initialWidth: N(),
        initialHeight: A(),
        measuredWidth: k(),
        measuredHeight: E()
      }));
    }
  ), $(() => M(_()), () => {
    Ke.set(!!_());
  }), $(
    () => (f(Te), f(a), f(qe), M(H()), f(Me), M(L()), M(g()), f(_e)),
    () => {
      (f(Te) && f(a) !== f(Te) || f(qe) && H() !== f(qe) || f(Me) && L() !== f(Me)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [g(), { id: g(), nodeElement: f(_e), force: !0 }]
      ]))), Y(Te, f(a)), Y(qe, H()), Y(Me, L());
    }
  ), $(
    () => (M(z()), f(_e), f(ge), M(q())),
    () => {
      z() && (f(_e) !== f(ge) || !q()) && (f(ge) && z().unobserve(f(ge)), f(_e) && z().observe(f(_e)), Y(ge, f(_e)));
    }
  ), dt(), pe(!0);
  var ft = Ut(), Le = $e(ft);
  {
    var kt = (Be) => {
      var He = ly();
      let Ue, rt;
      var jt = Xe(He);
      {
        let ze = /* @__PURE__ */ ne(() => S() ?? !1), Pe = /* @__PURE__ */ ne(() => x() ?? r() ?? !0), Ie = /* @__PURE__ */ ne(() => y() ?? !0), ce = /* @__PURE__ */ ne(() => w() ?? i() ?? !0);
        Ja(jt, () => f(c), (Qe, ht) => {
          ht(Qe, {
            get data() {
              return b();
            },
            get id() {
              return g();
            },
            get selected() {
              return f(ze);
            },
            get selectable() {
              return f(Pe);
            },
            get deletable() {
              return f(Ie);
            },
            get sourcePosition() {
              return H();
            },
            get targetPosition() {
              return L();
            },
            get zIndex() {
              return m();
            },
            get dragging() {
              return C();
            },
            get draggable() {
              return f(ce);
            },
            get dragHandle() {
              return K();
            },
            get parentId() {
              return j();
            },
            get type() {
              return f(a);
            },
            get isConnectable() {
              return o();
            },
            get positionAbsoluteX() {
              return V();
            },
            get positionAbsoluteY() {
              return F();
            },
            get width() {
              return I();
            },
            get height() {
              return R();
            }
          });
        });
      }
      gt(He, (ze, Pe) => br == null ? void 0 : br(ze, Pe), () => ({
        nodeId: g(),
        isSelectable: x(),
        disabled: !1,
        handleSelector: K(),
        noDragClass: "nodrag",
        nodeClickDistance: Z(),
        onNodeMouseDown: Se,
        onDrag: (ze, Pe, Ie, ce) => {
          be("nodedrag", { event: ze, targetNode: Ie, nodes: ce });
        },
        onDragStart: (ze, Pe, Ie, ce) => {
          be("nodedragstart", { event: ze, targetNode: Ie, nodes: ce });
        },
        onDragStop: (ze, Pe, Ie, ce) => {
          be("nodedragstop", { event: ze, targetNode: Ie, nodes: ce });
        },
        store: ie
      })), Is(He, (ze) => Y(_e, ze), () => f(_e)), Nt(() => De("click", He, ae)), Nt(() => De("mouseenter", He, (ze) => be("nodemouseenter", { node: d(), event: ze }))), Nt(() => De("mouseleave", He, (ze) => be("nodemouseleave", { node: d(), event: ze }))), Nt(() => De("mousemove", He, (ze) => be("nodemousemove", { node: d(), event: ze }))), Nt(() => De("contextmenu", He, (ze) => be("nodecontextmenu", { node: d(), event: ze }))), Ve(
        (ze) => {
          te(He, "data-id", g()), Ue = Gt(He, 1, ze, null, Ue, {
            dragging: C(),
            selected: S(),
            draggable: w(),
            connectable: _(),
            selectable: x(),
            nopan: w(),
            parent: X()
          }), rt = St(
            He,
            `${P() ?? "" ?? ""};${f(h), O(() => f(h).width) ?? ""}${f(h), O(() => f(h).height) ?? ""}`,
            rt,
            {
              "z-index": m(),
              transform: `translate(${V() ?? ""}px, ${F() ?? ""}px)`,
              visibility: q() ? "visible" : "hidden"
            }
          );
        },
        [
          () => un((M(Ae), f(a), M(Q()), O(() => Ae([
            "svelte-flow__node",
            `svelte-flow__node-${f(a)}`,
            Q()
          ]))))
        ]
      ), J(Be, He);
    };
    Ge(Le, (Be) => {
      p() || Be(kt);
    });
  }
  J(e, ft), he(), l();
}
var uy = /* @__PURE__ */ Ye('<div class="svelte-flow__nodes svelte-v0zrhd"></div>');
function cy(e, t) {
  de(t, !1);
  const n = () => B(c, "$visibleNodes", l), r = () => B(h, "$nodesDraggable", l), i = () => B(g, "$elementsSelectable", l), o = () => B(d, "$nodesConnectable", l), s = () => B(S, "$parentLookup", l), [l, a] = nt();
  let u = v(t, "nodeClickDistance", 8, 0);
  const {
    visibleNodes: c,
    nodesDraggable: h,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: b,
    parentLookup: S
  } = Je(), w = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const y = /* @__PURE__ */ new Map();
    _.forEach((p) => {
      const C = p.target.getAttribute("data-id");
      y.set(C, { id: C, nodeElement: p.target, force: !0 });
    }), b(y);
  });
  ou(() => {
    w == null || w.disconnect();
  }), pe();
  var x = uy();
  mo(x, 5, n, (_) => _.id, (_, y) => {
    {
      let p = /* @__PURE__ */ ne(() => (f(y), O(() => !!f(y).selected))), C = /* @__PURE__ */ ne(() => (f(y), O(() => !!f(y).hidden))), z = /* @__PURE__ */ ne(() => (f(y), r(), O(() => !!(f(y).draggable || r() && typeof f(y).draggable > "u")))), P = /* @__PURE__ */ ne(() => (f(y), i(), O(() => !!(f(y).selectable || i() && typeof f(y).selectable > "u")))), D = /* @__PURE__ */ ne(() => (f(y), o(), O(() => !!(f(y).connectable || o() && typeof f(y).connectable > "u")))), X = /* @__PURE__ */ ne(() => (f(y), O(() => f(y).deletable ?? !0))), V = /* @__PURE__ */ ne(() => (s(), f(y), O(() => s().has(f(y).id)))), F = /* @__PURE__ */ ne(() => (f(y), O(() => f(y).type ?? "default"))), H = /* @__PURE__ */ ne(() => (f(y), O(() => f(y).internals.z ?? 0))), L = /* @__PURE__ */ ne(() => (M(ro), f(y), O(() => ro(f(y)))));
      ay(_, {
        get node() {
          return f(y);
        },
        get id() {
          return f(y), O(() => f(y).id);
        },
        get data() {
          return f(y), O(() => f(y).data);
        },
        get selected() {
          return f(p);
        },
        get hidden() {
          return f(C);
        },
        get draggable() {
          return f(z);
        },
        get selectable() {
          return f(P);
        },
        get connectable() {
          return f(D);
        },
        get deletable() {
          return f(X);
        },
        get positionX() {
          return f(y), O(() => f(y).internals.positionAbsolute.x);
        },
        get positionY() {
          return f(y), O(() => f(y).internals.positionAbsolute.y);
        },
        get isParent() {
          return f(V);
        },
        get style() {
          return f(y), O(() => f(y).style);
        },
        get class() {
          return f(y), O(() => f(y).class);
        },
        get type() {
          return f(F);
        },
        get sourcePosition() {
          return f(y), O(() => f(y).sourcePosition);
        },
        get targetPosition() {
          return f(y), O(() => f(y).targetPosition);
        },
        get dragging() {
          return f(y), O(() => f(y).dragging);
        },
        get zIndex() {
          return f(H);
        },
        get dragHandle() {
          return f(y), O(() => f(y).dragHandle);
        },
        get initialized() {
          return f(L);
        },
        get width() {
          return f(y), O(() => f(y).width);
        },
        get height() {
          return f(y), O(() => f(y).height);
        },
        get initialWidth() {
          return f(y), O(() => f(y).initialWidth);
        },
        get initialHeight() {
          return f(y), O(() => f(y).initialHeight);
        },
        get measuredWidth() {
          return f(y), O(() => f(y).measured.width);
        },
        get measuredHeight() {
          return f(y), O(() => f(y).measured.height);
        },
        get parentId() {
          return f(y), O(() => f(y).parentId);
        },
        get resizeObserver() {
          return w;
        },
        get nodeClickDistance() {
          return u();
        },
        $$events: {
          nodeclick(m) {
            me.call(this, t, m);
          },
          nodemouseenter(m) {
            me.call(this, t, m);
          },
          nodemousemove(m) {
            me.call(this, t, m);
          },
          nodemouseleave(m) {
            me.call(this, t, m);
          },
          nodedrag(m) {
            me.call(this, t, m);
          },
          nodedragstart(m) {
            me.call(this, t, m);
          },
          nodedragstop(m) {
            me.call(this, t, m);
          },
          nodecontextmenu(m) {
            me.call(this, t, m);
          }
        }
      });
    }
  }), J(e, x), he(), a();
}
var fy = /* @__PURE__ */ je('<svg><g role="img"><!></g></svg>');
function dy(e, t) {
  de(t, !1);
  const n = () => B(Q, "$edgeTypes", s), r = () => B(ie, "$flowId", s), i = () => B(le, "$elementsSelectable", s), o = () => B(Z, "$edgeLookup", s), [s, l] = nt(), a = /* @__PURE__ */ W(void 0, !0), u = /* @__PURE__ */ W(void 0, !0), c = /* @__PURE__ */ W(void 0, !0), h = /* @__PURE__ */ W(void 0, !0), d = /* @__PURE__ */ W(void 0, !0);
  let g = v(t, "id", 9), b = v(t, "type", 9, "default"), S = v(t, "source", 9, ""), w = v(t, "target", 9, ""), x = v(t, "data", 25, () => ({})), _ = v(t, "style", 9, void 0), y = v(t, "zIndex", 9, void 0), p = v(t, "animated", 9, !1), C = v(t, "selected", 9, !1), z = v(t, "selectable", 9, void 0), P = v(t, "deletable", 9, void 0), D = v(t, "hidden", 9, !1), X = v(t, "label", 9, void 0), V = v(t, "labelStyle", 9, void 0), F = v(t, "markerStart", 9, void 0), H = v(t, "markerEnd", 9, void 0), L = v(t, "sourceHandle", 9, void 0), m = v(t, "targetHandle", 9, void 0), k = v(t, "sourceX", 9), E = v(t, "sourceY", 9), N = v(t, "targetX", 9), A = v(t, "targetY", 9), I = v(t, "sourcePosition", 9), R = v(t, "targetPosition", 9), K = v(t, "ariaLabel", 9, void 0), q = v(t, "interactionWidth", 9, void 0), j = v(t, "class", 9, "");
  Fi("svelteflow__edge_id", g());
  const { edgeLookup: Z, edgeTypes: Q, flowId: ie, elementsSelectable: le } = Je(), ue = _o(), Ee = nc();
  function Se(ge) {
    const be = o().get(g());
    be && (Ee(g()), ue("edgeclick", { event: ge, edge: be }));
  }
  function we(ge, be) {
    const Ke = o().get(g());
    Ke && ue(be, { event: ge, edge: Ke });
  }
  $(() => M(b()), () => {
    Y(a, b() || "default");
  }), $(() => (n(), f(a), bs), () => {
    Y(u, n()[f(a)] || bs);
  }), $(() => (M(F()), r()), () => {
    Y(c, F() ? `url('#${_s(F(), r())}')` : void 0);
  }), $(() => (M(H()), r()), () => {
    Y(h, H() ? `url('#${_s(H(), r())}')` : void 0);
  }), $(() => (M(z()), i()), () => {
    Y(d, z() ?? i());
  }), dt(), pe(!0);
  var G = Ut(), re = $e(G);
  {
    var _e = (ge) => {
      var be = fy();
      let Ke;
      var Te = Xe(be);
      let qe;
      var Me = Xe(Te);
      {
        let ae = /* @__PURE__ */ ne(() => P() ?? !0);
        Ja(Me, () => f(u), (ft, Le) => {
          Le(ft, {
            get id() {
              return g();
            },
            get source() {
              return S();
            },
            get target() {
              return w();
            },
            get sourceX() {
              return k();
            },
            get sourceY() {
              return E();
            },
            get targetX() {
              return N();
            },
            get targetY() {
              return A();
            },
            get sourcePosition() {
              return I();
            },
            get targetPosition() {
              return R();
            },
            get animated() {
              return p();
            },
            get selected() {
              return C();
            },
            get label() {
              return X();
            },
            get labelStyle() {
              return V();
            },
            get data() {
              return x();
            },
            get style() {
              return _();
            },
            get interactionWidth() {
              return q();
            },
            get selectable() {
              return f(d);
            },
            get deletable() {
              return f(ae);
            },
            get type() {
              return f(a);
            },
            get sourceHandleId() {
              return L();
            },
            get targetHandleId() {
              return m();
            },
            get markerStart() {
              return f(c);
            },
            get markerEnd() {
              return f(h);
            }
          });
        });
      }
      Ve(
        (ae) => {
          Ke = St(be, "", Ke, { "z-index": y() }), qe = Gt(Te, 0, ae, null, qe, {
            animated: p(),
            selected: C(),
            selectable: f(d)
          }), te(Te, "data-id", g()), te(Te, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${S()} to ${w()}`);
        },
        [
          () => un((M(Ae), M(j()), O(() => Ae(["svelte-flow__edge", j()]))))
        ]
      ), De("click", Te, Se), De("contextmenu", Te, (ae) => {
        we(ae, "edgecontextmenu");
      }), De("mouseenter", Te, (ae) => {
        we(ae, "edgemouseenter");
      }), De("mouseleave", Te, (ae) => {
        we(ae, "edgemouseleave");
      }), J(ge, be);
    };
    Ge(re, (ge) => {
      D() || ge(_e);
    });
  }
  J(e, G), he(), l();
}
function hy(e, t) {
  de(t, !1);
  let n = v(t, "onMount", 8, void 0), r = v(t, "onDestroy", 8, void 0);
  gi(() => {
    var i;
    return (i = n()) == null || i(), r();
  }), pe(), he();
}
var gy = /* @__PURE__ */ je("<defs></defs>");
function vy(e, t) {
  de(t, !1);
  const n = () => B(o, "$markers", r), [r, i] = nt(), { markers: o } = Je();
  pe();
  var s = gy();
  mo(s, 5, n, (l) => l.id, (l, a) => {
    _y(l, hr(() => f(a)));
  }), J(e, s), he(), i();
}
var yy = /* @__PURE__ */ je('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), py = /* @__PURE__ */ je('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), my = /* @__PURE__ */ je('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function _y(e, t) {
  de(t, !1);
  let n = v(t, "id", 8), r = v(t, "type", 8), i = v(t, "width", 8, 12.5), o = v(t, "height", 8, 12.5), s = v(t, "markerUnits", 8, "strokeWidth"), l = v(t, "orient", 8, "auto-start-reverse"), a = v(t, "color", 8, void 0), u = v(t, "strokeWidth", 8, void 0);
  pe();
  var c = my(), h = Xe(c);
  {
    var d = (b) => {
      var S = yy();
      Ve(() => {
        te(S, "stroke", a()), te(S, "stroke-width", u());
      }), J(b, S);
    }, g = (b) => {
      var S = Ut(), w = $e(S);
      {
        var x = (_) => {
          var y = py();
          Ve(() => {
            te(y, "stroke", a()), te(y, "stroke-width", u()), te(y, "fill", a());
          }), J(_, y);
        };
        Ge(
          w,
          (_) => {
            M(r()), M(gr), O(() => r() === gr.ArrowClosed) && _(x);
          },
          !0
        );
      }
      J(b, S);
    };
    Ge(h, (b) => {
      M(r()), M(gr), O(() => r() === gr.Arrow) ? b(d) : b(g, !1);
    });
  }
  Ve(() => {
    te(c, "id", n()), te(c, "markerWidth", `${i()}`), te(c, "markerHeight", `${o()}`), te(c, "markerUnits", s()), te(c, "orient", l());
  }), J(e, c), he();
}
var wy = /* @__PURE__ */ Ye('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function by(e, t) {
  de(t, !1);
  const n = () => B(l, "$visibleEdges", i), r = () => B(c, "$elementsSelectable", i), [i, o] = nt();
  let s = v(t, "defaultEdgeOptions", 8);
  const {
    visibleEdges: l,
    edgesInitialized: a,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Je();
  gi(() => {
    s() && u(s());
  }), pe();
  var h = wy(), d = Xe(h), g = Xe(d);
  vy(g, {});
  var b = Oe(d, 2);
  mo(b, 1, n, (x) => x.id, (x, _) => {
    {
      let y = /* @__PURE__ */ ne(() => (f(_), r(), O(() => f(_).selectable ?? r()))), p = /* @__PURE__ */ ne(() => (f(_), O(() => f(_).type || "default")));
      dy(x, {
        get id() {
          return f(_), O(() => f(_).id);
        },
        get source() {
          return f(_), O(() => f(_).source);
        },
        get target() {
          return f(_), O(() => f(_).target);
        },
        get data() {
          return f(_), O(() => f(_).data);
        },
        get style() {
          return f(_), O(() => f(_).style);
        },
        get animated() {
          return f(_), O(() => f(_).animated);
        },
        get selected() {
          return f(_), O(() => f(_).selected);
        },
        get selectable() {
          return f(y);
        },
        get deletable() {
          return f(_), O(() => f(_).deletable);
        },
        get hidden() {
          return f(_), O(() => f(_).hidden);
        },
        get label() {
          return f(_), O(() => f(_).label);
        },
        get labelStyle() {
          return f(_), O(() => f(_).labelStyle);
        },
        get markerStart() {
          return f(_), O(() => f(_).markerStart);
        },
        get markerEnd() {
          return f(_), O(() => f(_).markerEnd);
        },
        get sourceHandle() {
          return f(_), O(() => f(_).sourceHandle);
        },
        get targetHandle() {
          return f(_), O(() => f(_).targetHandle);
        },
        get sourceX() {
          return f(_), O(() => f(_).sourceX);
        },
        get sourceY() {
          return f(_), O(() => f(_).sourceY);
        },
        get targetX() {
          return f(_), O(() => f(_).targetX);
        },
        get targetY() {
          return f(_), O(() => f(_).targetY);
        },
        get sourcePosition() {
          return f(_), O(() => f(_).sourcePosition);
        },
        get targetPosition() {
          return f(_), O(() => f(_).targetPosition);
        },
        get ariaLabel() {
          return f(_), O(() => f(_).ariaLabel);
        },
        get interactionWidth() {
          return f(_), O(() => f(_).interactionWidth);
        },
        get class() {
          return f(_), O(() => f(_).class);
        },
        get type() {
          return f(p);
        },
        get zIndex() {
          return f(_), O(() => f(_).zIndex);
        },
        $$events: {
          edgeclick(C) {
            me.call(this, t, C);
          },
          edgecontextmenu(C) {
            me.call(this, t, C);
          },
          edgemouseenter(C) {
            me.call(this, t, C);
          },
          edgemouseleave(C) {
            me.call(this, t, C);
          }
        }
      });
    }
  });
  var S = Oe(b, 2);
  {
    var w = (x) => {
      hy(x, {
        onMount: () => {
          Ui(a, !0);
        },
        onDestroy: () => {
          Ui(a, !1);
        }
      });
    };
    Ge(S, (x) => {
      n(), O(() => n().length > 0) && x(w);
    });
  }
  J(e, h), he(), o();
}
var xy = /* @__PURE__ */ Ye('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function oc(e, t) {
  let n = v(t, "x", 8, 0), r = v(t, "y", 8, 0), i = v(t, "width", 8, 0), o = v(t, "height", 8, 0), s = v(t, "isVisible", 8, !0);
  var l = Ut(), a = $e(l);
  {
    var u = (c) => {
      var h = xy();
      let d;
      Ve(() => d = St(h, "", d, {
        width: typeof i() == "string" ? i() : `${i()}px`,
        height: typeof o() == "string" ? o() : `${o()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), J(c, h);
    };
    Ge(a, (c) => {
      s() && c(u);
    });
  }
  J(e, l);
}
function Ey(e, t) {
  de(t, !1);
  const n = () => B(s, "$selectionRect", i), r = () => B(l, "$selectionRectMode", i), [i, o] = nt(), { selectionRect: s, selectionRectMode: l } = Je();
  pe();
  {
    let a = /* @__PURE__ */ ne(() => !!(n() && r() === "user")), u = /* @__PURE__ */ ne(() => {
      var g;
      return (g = n()) == null ? void 0 : g.width;
    }), c = /* @__PURE__ */ ne(() => {
      var g;
      return (g = n()) == null ? void 0 : g.height;
    }), h = /* @__PURE__ */ ne(() => {
      var g;
      return (g = n()) == null ? void 0 : g.x;
    }), d = /* @__PURE__ */ ne(() => {
      var g;
      return (g = n()) == null ? void 0 : g.y;
    });
    oc(e, {
      get isVisible() {
        return f(a);
      },
      get width() {
        return f(u);
      },
      get height() {
        return f(c);
      },
      get x() {
        return f(h);
      },
      get y() {
        return f(d);
      }
    });
  }
  he(), o();
}
var Sy = /* @__PURE__ */ Ye('<div class="selection-wrapper nopan svelte-sf2y5e" role="button" tabindex="-1"><!></div>');
function ky(e, t) {
  de(t, !1);
  const n = () => B(a, "$selectionRectMode", o), r = () => B(c, "$nodeLookup", o), i = () => B(u, "$nodes", o), [o, s] = nt(), l = Je(), { selectionRectMode: a, nodes: u, nodeLookup: c } = l, h = _o();
  let d = /* @__PURE__ */ W(null);
  function g(_) {
    const y = i().filter((p) => p.selected);
    h("selectioncontextmenu", { nodes: y, event: _ });
  }
  function b(_) {
    const y = i().filter((p) => p.selected);
    h("selectionclick", { nodes: y, event: _ });
  }
  $(
    () => (n(), r(), i()),
    () => {
      n() === "nodes" && (Y(d, mi(r(), { filter: (_) => !!_.selected })), i());
    }
  ), dt(), pe();
  var S = Ut(), w = $e(S);
  {
    var x = (_) => {
      var y = Sy(), p = Xe(y);
      oc(p, { width: "100%", height: "100%", x: 0, y: 0 }), gt(y, (C, z) => br == null ? void 0 : br(C, z), () => ({
        disabled: !1,
        store: l,
        onDrag: (C, z, P, D) => {
          h("nodedrag", { event: C, targetNode: null, nodes: D });
        },
        onDragStart: (C, z, P, D) => {
          h("nodedragstart", { event: C, targetNode: null, nodes: D });
        },
        onDragStop: (C, z, P, D) => {
          h("nodedragstop", { event: C, targetNode: null, nodes: D });
        }
      })), Nt(() => De("contextmenu", y, g)), Nt(() => De("click", y, b)), Nt(() => De("keyup", y, () => {
      })), Ve(() => St(y, `width: ${f(d), O(() => f(d).width) ?? ""}px; height: ${f(d), O(() => f(d).height) ?? ""}px; transform: translate(${f(d), O(() => f(d).x) ?? ""}px, ${f(d), O(() => f(d).y) ?? ""}px)`)), J(_, y);
    };
    Ge(w, (_) => {
      n(), f(d), M(wr), O(() => n() === "nodes" && f(d) && wr(f(d).x) && wr(f(d).y)) && _(x);
    });
  }
  J(e, S), he(), s();
}
function ke(e, t) {
  let { enabled: n = !0, trigger: r, type: i = "keydown" } = t;
  function o(s) {
    const l = Array.isArray(r) ? r : [r], a = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const u of l) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: h, key: d, callback: g, preventDefault: b, enabled: S } = c;
      if (S) {
        if (h.length && !(Array.isArray(h) ? h : [h]).map(
          (_) => typeof _ == "string" ? [_] : _
        ).some(
          (_) => _.every((y) => a[y])
        ))
          continue;
        if (s.key === d) {
          b && s.preventDefault();
          const w = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), g == null || g(w);
        }
      }
    }
  }
  return n && e.addEventListener(i, o), {
    update: (s) => {
      const { enabled: l = !0, type: a = "keydown" } = s;
      n && (!l || i !== a) ? e.removeEventListener(i, o) : !n && l && e.addEventListener(a, o), n = l, i = a, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(i, o);
    }
  };
}
function Cy(e, t) {
  de(t, !1);
  let n = v(t, "selectionKey", 8, "Shift"), r = v(t, "multiSelectionKey", 24, () => no() ? "Meta" : "Control"), i = v(t, "deleteKey", 8, "Backspace"), o = v(t, "panActivationKey", 8, " "), s = v(t, "zoomActivationKey", 24, () => no() ? "Meta" : "Control");
  const {
    selectionKeyPressed: l,
    multiselectionKeyPressed: a,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: h,
    selectionRect: d
  } = Je();
  function g(_) {
    return _ !== null && typeof _ == "object";
  }
  function b(_) {
    return g(_) ? _.modifier || [] : [];
  }
  function S(_) {
    return _ == null ? "" : g(_) ? _.key : _;
  }
  function w(_, y) {
    return (Array.isArray(_) ? _ : [_]).map((C) => {
      const z = S(C);
      return {
        key: z,
        modifier: b(C),
        enabled: z !== null,
        callback: y
      };
    });
  }
  function x() {
    d.set(null), l.set(!1), a.set(!1), u.set(!1), c.set(!1), h.set(!1);
  }
  pe(), De("blur", mt, x), De("contextmenu", mt, x), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(n(), () => l.set(!0)),
    type: "keydown"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(n(), () => l.set(!1)),
    type: "keyup"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(r(), () => a.set(!0)),
    type: "keydown"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(r(), () => a.set(!1)),
    type: "keyup"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(i(), (_) => {
      !(_.originalEvent.ctrlKey || _.originalEvent.metaKey || _.originalEvent.shiftKey) && !q0(_.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(i(), () => u.set(!1)),
    type: "keyup"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(o(), () => c.set(!0)),
    type: "keydown"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(o(), () => c.set(!1)),
    type: "keyup"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(s(), () => h.set(!0)),
    type: "keydown"
  })), gt(mt, (_, y) => ke == null ? void 0 : ke(_, y), () => ({
    trigger: w(s(), () => h.set(!1)),
    type: "keyup"
  })), he();
}
var My = /* @__PURE__ */ je('<path fill="none" class="svelte-flow__connection-path"></path>'), Py = /* @__PURE__ */ je('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Ny(e, t) {
  de(t, !1);
  const n = () => B(g, "$connection", s), r = () => B(b, "$connectionLineType", s), i = () => B(h, "$width", s), o = () => B(d, "$height", s), [s, l] = nt();
  let a = v(t, "containerStyle", 8, ""), u = v(t, "style", 8, ""), c = v(t, "isCustomComponent", 8, !1);
  const { width: h, height: d, connection: g, connectionLineType: b } = Je();
  let S = /* @__PURE__ */ W(null);
  $(
    () => (n(), M(c()), r(), f(S), ms),
    () => {
      if (n().inProgress && !c()) {
        const { from: y, to: p, fromPosition: C, toPosition: z } = n(), P = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: C,
          targetX: p.x,
          targetY: p.y,
          targetPosition: z
        };
        switch (r()) {
          case _r.Bezier:
            ((D) => {
              var X = zn(D, 1);
              Y(S, X[0]);
            })(Wu(P));
            break;
          case _r.Step:
            ((D) => {
              var X = zn(D, 1);
              Y(S, X[0]);
            })(io({ ...P, borderRadius: 0 }));
            break;
          case _r.SmoothStep:
            ((D) => {
              var X = zn(D, 1);
              Y(S, X[0]);
            })(io(P));
            break;
          default:
            ((D) => {
              var X = zn(D, 1);
              Y(S, X[0]);
            })(ms(P));
        }
      }
    }
  ), dt(), pe();
  var w = Ut(), x = $e(w);
  {
    var _ = (y) => {
      var p = Py(), C = Xe(p), z = Xe(C);
      Et(z, t, "connectionLine", {});
      var P = Oe(z);
      {
        var D = (X) => {
          var V = My();
          Ve(() => {
            te(V, "d", f(S)), St(V, u());
          }), J(X, V);
        };
        Ge(P, (X) => {
          c() || X(D);
        });
      }
      Ve(
        (X) => {
          te(p, "width", i()), te(p, "height", o()), St(p, a()), Gt(C, 0, X);
        },
        [
          () => un((M(Ae), M(Bl), n(), O(() => Ae([
            "svelte-flow__connection",
            Bl(n().isValid)
          ]))))
        ]
      ), J(y, p);
    };
    Ge(x, (y) => {
      n(), O(() => n().inProgress) && y(_);
    });
  }
  J(e, w), he(), l();
}
var Ay = /* @__PURE__ */ Ye("<div><!></div>");
function $s(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]), r = We(n, ["position", "style", "class"]);
  de(t, !1);
  const i = () => B(h, "$selectionRectMode", o), [o, s] = nt(), l = /* @__PURE__ */ W();
  let a = v(t, "position", 8, "top-right"), u = v(t, "style", 8, void 0), c = v(t, "class", 8, void 0);
  const { selectionRectMode: h } = Je();
  $(() => M(a()), () => {
    Y(l, `${a()}`.split("-"));
  }), dt(), pe();
  var d = Ay();
  Os(
    d,
    (b) => ({
      class: b,
      style: u(),
      ...r,
      [Ln]: { "pointer-events": i() ? "none" : "" }
    }),
    [
      () => (M(Ae), M(c()), f(l), O(() => Ae(["svelte-flow__panel", c(), ...f(l)])))
    ]
  );
  var g = Xe(d);
  Et(g, t, "default", {}), J(e, d), he(), s();
}
var Ty = /* @__PURE__ */ Ye('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function zy(e, t) {
  de(t, !1);
  let n = v(t, "proOptions", 8, void 0), r = v(t, "position", 8, "bottom-right");
  pe();
  var i = Ut(), o = $e(i);
  {
    var s = (l) => {
      $s(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, u) => {
          var c = Ty();
          J(a, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ge(o, (l) => {
      M(n()), O(() => {
        var a;
        return !((a = n()) != null && a.hideAttribution);
      }) && l(s);
    });
  }
  J(e, i), he();
}
function ra(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: i, translateExtent: o, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), i !== void 0 && e.setMaxZoom(i), o !== void 0 && e.setTranslateExtent(o), s !== void 0 && e.setPaneClickDistance(s);
}
const Oy = (e) => Object.keys(e);
function ia(e, t) {
  Oy(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Iy() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Dy(e = "light") {
  return Ot("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = Iy(), i = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", i), () => {
      r == null || r.removeEventListener("change", i);
    };
  });
}
var Hy = /* @__PURE__ */ Ye('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Ry = /* @__PURE__ */ Ye("<!> <!>", 1), Vy = /* @__PURE__ */ Ye("<div><!> <!> <!> <!></div>");
function Ly(e, t) {
  const n = Bf(t), r = We(t, ["children", "$$slots", "$$events", "$$legacy"]), i = We(r, [
    "id",
    "nodes",
    "edges",
    "fitView",
    "fitViewOptions",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "viewport",
    "nodeTypes",
    "edgeTypes",
    "selectionKey",
    "selectionMode",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "nodesDraggable",
    "nodesConnectable",
    "nodeDragThreshold",
    "elementsSelectable",
    "snapGrid",
    "deleteKey",
    "connectionRadius",
    "connectionLineType",
    "connectionMode",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "isValidConnection",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onerror",
    "ondelete",
    "onedgecreate",
    "attributionPosition",
    "proOptions",
    "defaultEdgeOptions",
    "width",
    "height",
    "colorMode",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforedelete",
    "oninit",
    "nodeOrigin",
    "paneClickDistance",
    "nodeClickDistance",
    "defaultMarkerColor",
    "style",
    "class"
  ]);
  de(t, !1);
  const o = () => B(y(), "$viewport", a), s = () => B(No, "$initialized", a), l = () => B(f(c), "$colorModeClass", a), [a, u] = nt(), c = /* @__PURE__ */ W();
  let h = v(t, "id", 8, "1"), d = v(t, "nodes", 8), g = v(t, "edges", 8), b = v(t, "fitView", 8, void 0), S = v(t, "fitViewOptions", 8, void 0), w = v(t, "minZoom", 8, void 0), x = v(t, "maxZoom", 8, void 0), _ = v(t, "initialViewport", 8, void 0), y = v(t, "viewport", 8, void 0), p = v(t, "nodeTypes", 8, void 0), C = v(t, "edgeTypes", 8, void 0), z = v(t, "selectionKey", 8, void 0), P = v(t, "selectionMode", 8, void 0), D = v(t, "panActivationKey", 8, void 0), X = v(t, "multiSelectionKey", 8, void 0), V = v(t, "zoomActivationKey", 8, void 0), F = v(t, "nodesDraggable", 8, void 0), H = v(t, "nodesConnectable", 8, void 0), L = v(t, "nodeDragThreshold", 8, void 0), m = v(t, "elementsSelectable", 8, void 0), k = v(t, "snapGrid", 8, void 0), E = v(t, "deleteKey", 8, void 0), N = v(t, "connectionRadius", 8, void 0), A = v(t, "connectionLineType", 8, void 0), I = v(t, "connectionMode", 24, () => nr.Strict), R = v(t, "connectionLineStyle", 8, ""), K = v(t, "connectionLineContainerStyle", 8, ""), q = v(t, "onMoveStart", 8, void 0), j = v(t, "onMove", 8, void 0), Z = v(t, "onMoveEnd", 8, void 0), Q = v(t, "isValidConnection", 8, void 0), ie = v(t, "translateExtent", 8, void 0), le = v(t, "nodeExtent", 8, void 0), ue = v(t, "onlyRenderVisibleElements", 8, void 0), Ee = v(t, "panOnScrollMode", 24, () => wn.Free), Se = v(t, "preventScrolling", 8, !0), we = v(t, "zoomOnScroll", 8, !0), G = v(t, "zoomOnDoubleClick", 8, !0), re = v(t, "zoomOnPinch", 8, !0), _e = v(t, "panOnScroll", 8, !1), ge = v(t, "panOnDrag", 8, !0), be = v(t, "selectionOnDrag", 8, void 0), Ke = v(t, "autoPanOnConnect", 8, !0), Te = v(t, "autoPanOnNodeDrag", 8, !0), qe = v(t, "onerror", 8, void 0), Me = v(t, "ondelete", 8, void 0), ae = v(t, "onedgecreate", 8, void 0), ft = v(t, "attributionPosition", 8, void 0), Le = v(t, "proOptions", 8, void 0), kt = v(t, "defaultEdgeOptions", 8, void 0), Be = v(t, "width", 8, void 0), He = v(t, "height", 8, void 0), Ue = v(t, "colorMode", 8, "light"), rt = v(t, "onconnect", 8, void 0), jt = v(t, "onconnectstart", 8, void 0), ze = v(t, "onconnectend", 8, void 0), Pe = v(t, "onbeforedelete", 8, void 0), Ie = v(t, "oninit", 8, void 0), ce = v(t, "nodeOrigin", 8, void 0), Qe = v(t, "paneClickDistance", 8, 0), ht = v(t, "nodeClickDistance", 8, 0), _i = v(t, "defaultMarkerColor", 8, "#b1b1b7"), wi = v(t, "style", 8, void 0), bi = v(t, "class", 8, void 0), Ct = /* @__PURE__ */ W(), pt = /* @__PURE__ */ W(), Re = /* @__PURE__ */ W();
  const xi = o() || _(), it = jc(Gs) ? Je() : Qv({
    nodes: U(d()),
    edges: U(g()),
    width: Be(),
    height: He(),
    fitView: b(),
    nodeOrigin: ce(),
    nodeExtent: le()
  });
  gi(() => (it.width.set(f(pt)), it.height.set(f(Re)), it.domNode.set(f(Ct)), it.syncNodeStores(d()), it.syncEdgeStores(g()), it.syncViewport(y()), b() !== void 0 && it.fitViewQueued.set(b()), S() && it.fitViewOptions.set(S()), ra(it, {
    nodeTypes: p(),
    edgeTypes: C(),
    minZoom: w(),
    maxZoom: x(),
    translateExtent: ie(),
    paneClickDistance: Qe()
  }), () => {
    it.reset();
  }));
  const { initialized: No } = it;
  let Vn = /* @__PURE__ */ W(!1);
  $(() => (f(pt), f(Re)), () => {
    f(pt) !== void 0 && f(Re) !== void 0 && (it.width.set(f(pt)), it.height.set(f(Re)));
  }), $(
    () => (f(Vn), s(), M(Ie())),
    () => {
      var et;
      !f(Vn) && s() && ((et = Ie()) == null || et(), Y(Vn, !0));
    }
  ), $(
    () => (M(h()), M(A()), M(N()), M(P()), M(k()), M(_i()), M(F()), M(H()), M(m()), M(ue()), M(Q()), M(Ke()), M(Te()), M(qe()), M(Me()), M(ae()), M(I()), M(L()), M(rt()), M(jt()), M(ze()), M(Pe()), M(ce()), ia),
    () => {
      const et = {
        flowId: h(),
        connectionLineType: A(),
        connectionRadius: N(),
        selectionMode: P(),
        snapGrid: k(),
        defaultMarkerColor: _i(),
        nodesDraggable: F(),
        nodesConnectable: H(),
        elementsSelectable: m(),
        onlyRenderVisibleElements: ue(),
        isValidConnection: Q(),
        autoPanOnConnect: Ke(),
        autoPanOnNodeDrag: Te(),
        onerror: qe(),
        ondelete: Me(),
        onedgecreate: ae(),
        connectionMode: I(),
        nodeDragThreshold: L(),
        onconnect: rt(),
        onconnectstart: jt(),
        onconnectend: ze(),
        onbeforedelete: Pe(),
        nodeOrigin: ce()
      };
      ia(it, et);
    }
  ), $(
    () => (M(p()), M(C()), M(w()), M(x()), M(ie()), M(Qe())),
    () => {
      ra(it, {
        nodeTypes: p(),
        edgeTypes: C(),
        minZoom: w(),
        maxZoom: x(),
        translateExtent: ie(),
        paneClickDistance: Qe()
      });
    }
  ), $(() => M(Ue()), () => {
    jf(Y(c, Dy(Ue())), "$colorModeClass", a);
  }), dt(), pe();
  var Jt = Vy();
  Os(
    Jt,
    (et) => ({
      style: wi(),
      class: et,
      "data-testid": "svelte-flow__wrapper",
      ...i,
      role: "application"
    }),
    [
      () => (M(Ae), M(bi()), l(), O(() => Ae(["svelte-flow", bi(), l()])))
    ],
    void 0,
    void 0,
    "svelte-4xqsnx"
  );
  var Ei = Xe(Jt);
  Cy(Ei, {
    get selectionKey() {
      return z();
    },
    get deleteKey() {
      return E();
    },
    get panActivationKey() {
      return D();
    },
    get multiSelectionKey() {
      return X();
    },
    get zoomActivationKey() {
      return V();
    }
  });
  var Si = Oe(Ei, 2);
  {
    let et = /* @__PURE__ */ ne(() => (M(Ee()), M(wn), O(() => Ee() === void 0 ? wn.Free : Ee()))), lc = /* @__PURE__ */ ne(() => Se() === void 0 ? !0 : Se()), ac = /* @__PURE__ */ ne(() => we() === void 0 ? !0 : we()), uc = /* @__PURE__ */ ne(() => G() === void 0 ? !0 : G()), cc = /* @__PURE__ */ ne(() => re() === void 0 ? !0 : re()), fc = /* @__PURE__ */ ne(() => _e() === void 0 ? !1 : _e()), dc = /* @__PURE__ */ ne(() => ge() === void 0 ? !0 : ge()), hc = /* @__PURE__ */ ne(() => Qe() === void 0 ? 0 : Qe());
    ty(Si, {
      get initialViewport() {
        return xi;
      },
      get onMoveStart() {
        return q();
      },
      get onMove() {
        return j();
      },
      get onMoveEnd() {
        return Z();
      },
      get panOnScrollMode() {
        return f(et);
      },
      get preventScrolling() {
        return f(lc);
      },
      get zoomOnScroll() {
        return f(ac);
      },
      get zoomOnDoubleClick() {
        return f(uc);
      },
      get zoomOnPinch() {
        return f(cc);
      },
      get panOnScroll() {
        return f(fc);
      },
      get panOnDrag() {
        return f(dc);
      },
      get paneClickDistance() {
        return f(hc);
      },
      children: (gc, vp) => {
        {
          let vc = /* @__PURE__ */ ne(() => ge() === void 0 ? !0 : ge());
          ry(gc, {
            get panOnDrag() {
              return f(vc);
            },
            get selectionOnDrag() {
              return be();
            },
            $$events: {
              paneclick(Lr) {
                me.call(this, t, Lr);
              },
              panecontextmenu(Lr) {
                me.call(this, t, Lr);
              }
            },
            children: (Lr, yp) => {
              var js = Ry(), Js = $e(js);
              oy(Js, {
                children: (pc, pp) => {
                  var Qs = Hy(), el = $e(Qs);
                  by(el, {
                    get defaultEdgeOptions() {
                      return kt();
                    },
                    $$events: {
                      edgeclick(ve) {
                        me.call(this, t, ve);
                      },
                      edgecontextmenu(ve) {
                        me.call(this, t, ve);
                      },
                      edgemouseenter(ve) {
                        me.call(this, t, ve);
                      },
                      edgemouseleave(ve) {
                        me.call(this, t, ve);
                      }
                    }
                  });
                  var tl = Oe(el, 2);
                  Ny(tl, {
                    get containerStyle() {
                      return K();
                    },
                    get style() {
                      return R();
                    },
                    isCustomComponent: O(() => n.connectionLine),
                    $$slots: {
                      connectionLine: (ve, mp) => {
                        var rl = Ut(), _c = $e(rl);
                        Et(_c, t, "connectionLine", {}), J(ve, rl);
                      }
                    }
                  });
                  var nl = Oe(tl, 6);
                  cy(nl, {
                    get nodeClickDistance() {
                      return ht();
                    },
                    $$events: {
                      nodeclick(ve) {
                        me.call(this, t, ve);
                      },
                      nodemouseenter(ve) {
                        me.call(this, t, ve);
                      },
                      nodemousemove(ve) {
                        me.call(this, t, ve);
                      },
                      nodemouseleave(ve) {
                        me.call(this, t, ve);
                      },
                      nodedragstart(ve) {
                        me.call(this, t, ve);
                      },
                      nodedrag(ve) {
                        me.call(this, t, ve);
                      },
                      nodedragstop(ve) {
                        me.call(this, t, ve);
                      },
                      nodecontextmenu(ve) {
                        me.call(this, t, ve);
                      }
                    }
                  });
                  var mc = Oe(nl, 2);
                  ky(mc, {
                    $$events: {
                      selectionclick(ve) {
                        me.call(this, t, ve);
                      },
                      selectioncontextmenu(ve) {
                        me.call(this, t, ve);
                      },
                      nodedragstart(ve) {
                        me.call(this, t, ve);
                      },
                      nodedrag(ve) {
                        me.call(this, t, ve);
                      },
                      nodedragstop(ve) {
                        me.call(this, t, ve);
                      }
                    }
                  }), J(pc, Qs);
                },
                $$slots: { default: !0 }
              });
              var yc = Oe(Js, 2);
              Ey(yc, {}), J(Lr, js);
            },
            $$slots: { default: !0 }
          });
        }
      },
      $$slots: { default: !0 }
    });
  }
  var ki = Oe(Si, 2);
  zy(ki, {
    get proOptions() {
      return Le();
    },
    get position() {
      return ft();
    }
  });
  var sc = Oe(ki, 2);
  Et(sc, t, "default", {}), Is(Jt, (et) => Y(Ct, et), () => f(Ct)), _l(Jt, "clientWidth", (et) => Y(pt, et)), _l(Jt, "clientHeight", (et) => Y(Re, et)), De("dragover", Jt, function(et) {
    me.call(this, t, et);
  }), De("drop", Jt, function(et) {
    me.call(this, t, et);
  }), J(e, Jt), he(), u();
}
var Yy = /* @__PURE__ */ Ye("<button><!></button>");
function Ii(e, t) {
  const n = We(t, ["children", "$$slots", "$$events", "$$legacy"]), r = We(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  de(t, !1);
  let i = v(t, "class", 8, void 0), o = v(t, "bgColor", 8, void 0), s = v(t, "bgColorHover", 8, void 0), l = v(t, "color", 8, void 0), a = v(t, "colorHover", 8, void 0), u = v(t, "borderColor", 8, void 0);
  pe();
  var c = Yy();
  Os(
    c,
    (d) => ({
      type: "button",
      class: d,
      ...r,
      [Ln]: {
        "--xy-controls-button-background-color-props": o(),
        "--xy-controls-button-background-color-hover-props": s(),
        "--xy-controls-button-color-props": l(),
        "--xy-controls-button-color-hover-props": a(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => (M(Ae), M(i()), O(() => Ae(["svelte-flow__controls-button", i()])))
    ]
  );
  var h = Xe(c);
  Et(h, t, "default", { class: "button-svg" }), De("click", c, function(d) {
    me.call(this, t, d);
  }), J(e, c), he();
}
var Xy = /* @__PURE__ */ je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function By(e) {
  var t = Xy();
  J(e, t);
}
var Fy = /* @__PURE__ */ je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Wy(e) {
  var t = Fy();
  J(e, t);
}
var Ky = /* @__PURE__ */ je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function qy(e) {
  var t = Ky();
  J(e, t);
}
var Uy = /* @__PURE__ */ je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Zy(e) {
  var t = Uy();
  J(e, t);
}
var Gy = /* @__PURE__ */ je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function $y(e) {
  var t = Gy();
  J(e, t);
}
var jy = /* @__PURE__ */ Ye("<!> <!>", 1), Jy = /* @__PURE__ */ Ye("<!> <!> <!> <!> <!> <!>", 1);
function Qy(e, t) {
  de(t, !1);
  const n = () => B(A, "$nodesDraggable", a), r = () => B(I, "$nodesConnectable", a), i = () => B(R, "$elementsSelectable", a), o = () => B(k, "$viewport", a), s = () => B(E, "$minZoom", a), l = () => B(N, "$maxZoom", a), [a, u] = nt(), c = /* @__PURE__ */ W(), h = /* @__PURE__ */ W(), d = /* @__PURE__ */ W(), g = /* @__PURE__ */ W();
  let b = v(t, "position", 8, "bottom-left"), S = v(t, "showZoom", 8, !0), w = v(t, "showFitView", 8, !0), x = v(t, "showLock", 8, !0), _ = v(t, "buttonBgColor", 8, void 0), y = v(t, "buttonBgColorHover", 8, void 0), p = v(t, "buttonColor", 8, void 0), C = v(t, "buttonColorHover", 8, void 0), z = v(t, "buttonBorderColor", 8, void 0), P = v(t, "ariaLabel", 8, void 0), D = v(t, "style", 8, void 0), X = v(t, "orientation", 8, "vertical"), V = v(t, "fitViewOptions", 8, void 0), F = v(t, "class", 8, "");
  const {
    zoomIn: H,
    zoomOut: L,
    fitView: m,
    viewport: k,
    minZoom: E,
    maxZoom: N,
    nodesDraggable: A,
    nodesConnectable: I,
    elementsSelectable: R
  } = Je(), K = {
    bgColor: _(),
    bgColorHover: y(),
    color: p(),
    colorHover: C(),
    borderColor: z()
  }, q = () => {
    H();
  }, j = () => {
    L();
  }, Z = () => {
    m(V());
  }, Q = () => {
    Y(c, !f(c)), A.set(f(c)), I.set(f(c)), R.set(f(c));
  };
  $(
    () => (n(), r(), i()),
    () => {
      Y(c, n() || r() || i());
    }
  ), $(() => (o(), s()), () => {
    Y(h, o().zoom <= s());
  }), $(() => (o(), l()), () => {
    Y(d, o().zoom >= l());
  }), $(() => M(X()), () => {
    Y(g, X() === "horizontal" ? "horizontal" : "vertical");
  }), dt(), pe();
  {
    let ie = /* @__PURE__ */ ne(() => (M(Ae), f(g), M(F()), O(() => Ae([
      "svelte-flow__controls",
      f(g),
      F()
    ])))), le = /* @__PURE__ */ ne(() => P() ?? "Svelte Flow controls");
    $s(e, {
      get class() {
        return f(ie);
      },
      get position() {
        return b();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return f(le);
      },
      get style() {
        return D();
      },
      children: (ue, Ee) => {
        var Se = Jy(), we = $e(Se);
        Et(we, t, "before", {});
        var G = Oe(we, 2);
        {
          var re = (Me) => {
            var ae = jy(), ft = $e(ae);
            Ii(ft, hr(
              {
                class: "svelte-flow__controls-zoomin",
                title: "zoom in",
                "aria-label": "zoom in",
                get disabled() {
                  return f(d);
                }
              },
              () => K,
              {
                $$events: { click: q },
                children: (kt, Be) => {
                  By(kt);
                },
                $$slots: { default: !0 }
              }
            ));
            var Le = Oe(ft, 2);
            Ii(Le, hr(
              {
                class: "svelte-flow__controls-zoomout",
                title: "zoom out",
                "aria-label": "zoom out",
                get disabled() {
                  return f(h);
                }
              },
              () => K,
              {
                $$events: { click: j },
                children: (kt, Be) => {
                  Wy(kt);
                },
                $$slots: { default: !0 }
              }
            )), J(Me, ae);
          };
          Ge(G, (Me) => {
            S() && Me(re);
          });
        }
        var _e = Oe(G, 2);
        {
          var ge = (Me) => {
            Ii(Me, hr(
              {
                class: "svelte-flow__controls-fitview",
                title: "fit view",
                "aria-label": "fit view"
              },
              () => K,
              {
                $$events: { click: Z },
                children: (ae, ft) => {
                  qy(ae);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          Ge(_e, (Me) => {
            w() && Me(ge);
          });
        }
        var be = Oe(_e, 2);
        {
          var Ke = (Me) => {
            Ii(Me, hr(
              {
                class: "svelte-flow__controls-interactive",
                title: "toggle interactivity",
                "aria-label": "toggle interactivity"
              },
              () => K,
              {
                $$events: { click: Q },
                children: (ae, ft) => {
                  var Le = Ut(), kt = $e(Le);
                  {
                    var Be = (Ue) => {
                      $y(Ue);
                    }, He = (Ue) => {
                      Zy(Ue);
                    };
                    Ge(kt, (Ue) => {
                      f(c) ? Ue(Be) : Ue(He, !1);
                    });
                  }
                  J(ae, Le);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          Ge(be, (Me) => {
            x() && Me(Ke);
          });
        }
        var Te = Oe(be, 2);
        Et(Te, t, "default", {});
        var qe = Oe(Te, 2);
        Et(qe, t, "after", {}), J(ue, Se);
      },
      $$slots: { default: !0 }
    });
  }
  he(), u();
}
var Hn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Hn || (Hn = {}));
var ep = /* @__PURE__ */ je("<circle></circle>");
function tp(e, t) {
  de(t, !1);
  let n = v(t, "radius", 8, 5), r = v(t, "class", 8, "");
  pe();
  var i = ep();
  Ve(
    (o) => {
      te(i, "cx", n()), te(i, "cy", n()), te(i, "r", n()), Gt(i, 0, o);
    },
    [
      () => un((M(Ae), M(r()), O(() => Ae(["svelte-flow__background-pattern", "dots", r()]))))
    ]
  ), J(e, i), he();
}
var np = /* @__PURE__ */ je("<path></path>");
function rp(e, t) {
  de(t, !1);
  let n = v(t, "lineWidth", 8, 1), r = v(t, "dimensions", 8), i = v(t, "variant", 8, void 0), o = v(t, "class", 8, "");
  pe();
  var s = np();
  Ve(
    (l) => {
      te(s, "stroke-width", n()), te(s, "d", (M(r()), O(() => `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`))), Gt(s, 0, l);
    },
    [
      () => un((M(Ae), M(i()), M(o()), O(() => Ae(["svelte-flow__background-pattern", i(), o()]))))
    ]
  ), J(e, s), he();
}
const ip = {
  [Hn.Dots]: 1,
  [Hn.Lines]: 1,
  [Hn.Cross]: 6
};
var op = /* @__PURE__ */ je('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function sp(e, t) {
  de(t, !1);
  const n = () => B(C, "$flowId", i), r = () => B(p, "$viewport", i), [i, o] = nt(), s = /* @__PURE__ */ W(), l = /* @__PURE__ */ W(), a = /* @__PURE__ */ W(), u = /* @__PURE__ */ W(), c = /* @__PURE__ */ W();
  let h = v(t, "id", 8, void 0), d = v(t, "variant", 24, () => Hn.Dots), g = v(t, "gap", 8, 20), b = v(t, "size", 8, 1), S = v(t, "lineWidth", 8, 1), w = v(t, "bgColor", 8, void 0), x = v(t, "patternColor", 8, void 0), _ = v(t, "patternClass", 8, void 0), y = v(t, "class", 8, "");
  const { viewport: p, flowId: C } = Je(), z = b() || ip[d()], P = d() === Hn.Dots, D = d() === Hn.Cross, X = Array.isArray(g()) ? g() : [g(), g()];
  $(() => (n(), M(h())), () => {
    Y(s, `background-pattern-${n()}-${h() ? h() : ""}`);
  }), $(() => r(), () => {
    Y(l, [
      X[0] * r().zoom || 1,
      X[1] * r().zoom || 1
    ]);
  }), $(() => r(), () => {
    Y(a, z * r().zoom);
  }), $(() => (f(a), f(l)), () => {
    Y(u, D ? [f(a), f(a)] : f(l));
  }), $(() => (f(a), f(u)), () => {
    Y(c, P ? [f(a) / 2, f(a) / 2] : [
      f(u)[0] / 2,
      f(u)[1] / 2
    ]);
  }), dt(), pe();
  var V = op();
  let F;
  var H = Xe(V), L = Xe(H);
  {
    var m = (N) => {
      {
        let A = /* @__PURE__ */ ne(() => f(a) / 2);
        tp(N, {
          get radius() {
            return f(A);
          },
          get class() {
            return _();
          }
        });
      }
    }, k = (N) => {
      rp(N, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return d();
        },
        get lineWidth() {
          return S();
        },
        get class() {
          return _();
        }
      });
    };
    Ge(L, (N) => {
      P ? N(m) : N(k, !1);
    });
  }
  var E = Oe(H);
  Ve(
    (N) => {
      Gt(V, 0, N, "svelte-11j66u4"), F = St(V, "", F, {
        "--xy-background-color-props": w(),
        "--xy-background-pattern-color-props": x()
      }), te(H, "id", f(s)), te(H, "x", (r(), f(l), O(() => r().x % f(l)[0]))), te(H, "y", (r(), f(l), O(() => r().y % f(l)[1]))), te(H, "width", (f(l), O(() => f(l)[0]))), te(H, "height", (f(l), O(() => f(l)[1]))), te(H, "patternTransform", (f(c), O(() => `translate(-${f(c)[0]},-${f(c)[1]})`))), te(E, "fill", `url(#${f(s)})`);
    },
    [
      () => un((M(Ae), M(y()), O(() => Ae(["svelte-flow__background", y()]))))
    ]
  ), J(e, V), he(), o();
}
var lp = /* @__PURE__ */ je("<rect></rect>");
function ap(e, t) {
  de(t, !1);
  let n = v(t, "x", 8), r = v(t, "y", 8), i = v(t, "width", 8, 0), o = v(t, "height", 8, 0), s = v(t, "borderRadius", 8, 5), l = v(t, "color", 8, void 0), a = v(t, "shapeRendering", 8), u = v(t, "strokeColor", 8, void 0), c = v(t, "strokeWidth", 8, 2), h = v(t, "selected", 8, !1), d = v(t, "class", 8, "");
  pe();
  var g = lp();
  let b;
  Ve(
    (S) => {
      b = Gt(g, 0, S, null, b, { selected: h() }), te(g, "x", n()), te(g, "y", r()), te(g, "rx", s()), te(g, "ry", s()), te(g, "width", i()), te(g, "height", o()), St(g, `${l() ? `fill: ${l()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), te(g, "shape-rendering", a());
    },
    [
      () => un((M(Ae), M(d()), O(() => Ae(["svelte-flow__minimap-node", d()]))))
    ]
  ), J(e, g), he();
}
function Fo(e, t) {
  const n = _v({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const i = U(t.viewport);
      return [i.x, i.y, i.zoom];
    },
    getViewScale: t.getViewScale
  });
  function r(i) {
    n.update({
      translateExtent: i.translateExtent,
      width: i.width,
      height: i.height,
      inversePan: i.inversePan,
      zoomStep: i.zoomStep,
      pannable: i.pannable,
      zoomable: i.zoomable
    });
  }
  return {
    update: r,
    destroy() {
      n.destroy();
    }
  };
}
const Wo = (e) => e instanceof Function ? e : () => e;
var up = /* @__PURE__ */ je("<title> </title>"), cp = /* @__PURE__ */ je('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function fp(e, t) {
  de(t, !1);
  const n = () => B(ge, "$flowId", c), r = () => B(G, "$viewport", c), i = () => B(re, "$containerWidth", c), o = () => B(_e, "$containerHeight", c), s = () => B(we, "$nodeLookup", c), l = () => B(Se, "$nodes", c), a = () => B(be, "$panZoom", c), u = () => B(Ke, "$translateExtent", c), [c, h] = nt(), d = /* @__PURE__ */ W(), g = /* @__PURE__ */ W(), b = /* @__PURE__ */ W(), S = /* @__PURE__ */ W(), w = /* @__PURE__ */ W(), x = /* @__PURE__ */ W(), _ = /* @__PURE__ */ W(), y = /* @__PURE__ */ W(), p = /* @__PURE__ */ W(), C = /* @__PURE__ */ W(), z = /* @__PURE__ */ W(), P = /* @__PURE__ */ W(), D = /* @__PURE__ */ W();
  let X = v(t, "position", 8, "bottom-right"), V = v(t, "ariaLabel", 8, "Mini map"), F = v(t, "nodeStrokeColor", 8, "transparent"), H = v(t, "nodeColor", 8, void 0), L = v(t, "nodeClass", 8, ""), m = v(t, "nodeBorderRadius", 8, 5), k = v(t, "nodeStrokeWidth", 8, 2), E = v(t, "bgColor", 8, void 0), N = v(t, "maskColor", 8, void 0), A = v(t, "maskStrokeColor", 8, void 0), I = v(t, "maskStrokeWidth", 8, void 0), R = v(t, "width", 8, void 0), K = v(t, "height", 8, void 0), q = v(t, "pannable", 8, !0), j = v(t, "zoomable", 8, !0), Z = v(t, "inversePan", 8, void 0), Q = v(t, "zoomStep", 8, void 0), ie = v(t, "style", 8, ""), le = v(t, "class", 8, "");
  const ue = 200, Ee = 150, {
    nodes: Se,
    nodeLookup: we,
    viewport: G,
    width: re,
    height: _e,
    flowId: ge,
    panZoom: be,
    translateExtent: Ke
  } = Je(), Te = H() === void 0 ? void 0 : Wo(H()), qe = Wo(F()), Me = Wo(L()), ae = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), ft = `svelte-flow__minimap-desc-${n()}`;
  let Le = /* @__PURE__ */ W(f(d));
  const kt = () => f(x);
  $(() => (r(), i(), o()), () => {
    Y(d, {
      x: -r().x / r().zoom,
      y: -r().y / r().zoom,
      width: i() / r().zoom,
      height: o() / r().zoom
    });
  }), $(
    () => (s(), f(d), l()),
    () => {
      Y(Le, s().size > 0 ? Lu(mi(s(), { filter: (Be) => !Be.hidden }), f(d)) : f(d)), l();
    }
  ), $(() => M(R()), () => {
    Y(g, R() ?? ue);
  }), $(() => M(K()), () => {
    Y(b, K() ?? Ee);
  }), $(() => (f(Le), f(g)), () => {
    Y(S, f(Le).width / f(g));
  }), $(() => (f(Le), f(b)), () => {
    Y(w, f(Le).height / f(b));
  }), $(() => (f(S), f(w)), () => {
    Y(x, Math.max(f(S), f(w)));
  }), $(() => (f(x), f(g)), () => {
    Y(_, f(x) * f(g));
  }), $(() => (f(x), f(b)), () => {
    Y(y, f(x) * f(b));
  }), $(() => f(x), () => {
    Y(p, 5 * f(x));
  }), $(() => (f(Le), f(_), f(p)), () => {
    Y(C, f(Le).x - (f(_) - f(Le).width) / 2 - f(p));
  }), $(() => (f(Le), f(y), f(p)), () => {
    Y(z, f(Le).y - (f(y) - f(Le).height) / 2 - f(p));
  }), $(() => (f(_), f(p)), () => {
    Y(P, f(_) + f(p) * 2);
  }), $(() => (f(y), f(p)), () => {
    Y(D, f(y) + f(p) * 2);
  }), dt(), pe();
  {
    let Be = /* @__PURE__ */ ne(() => ie() + (E() ? `;--xy-minimap-background-color-props:${E()}` : "")), He = /* @__PURE__ */ ne(() => (M(Ae), M(le()), O(() => Ae(["svelte-flow__minimap", le()]))));
    $s(e, {
      get position() {
        return X();
      },
      get style() {
        return f(Be);
      },
      get class() {
        return f(He);
      },
      "data-testid": "svelte-flow__minimap",
      children: (Ue, rt) => {
        var jt = Ut(), ze = $e(jt);
        {
          var Pe = (Ie) => {
            var ce = cp();
            let Qe;
            var ht = Xe(ce);
            {
              var _i = (Ct) => {
                var pt = up(), Re = Xe(pt);
                Ve(() => {
                  te(pt, "id", ft), hi(Re, V());
                }), J(Ct, pt);
              };
              Ge(ht, (Ct) => {
                V() && Ct(_i);
              });
            }
            var wi = Oe(ht);
            mo(wi, 1, l, (Ct) => Ct.id, (Ct, pt) => {
              const Re = /* @__PURE__ */ ne(() => (s(), f(pt), O(() => s().get(f(pt).id))));
              var xi = Ut(), it = $e(xi);
              {
                var No = (Vn) => {
                  const Jt = /* @__PURE__ */ ne(() => (M(En), M(f(Re)), O(() => En(f(Re)))));
                  {
                    let Ei = /* @__PURE__ */ ne(() => (M(f(Re)), O(() => Te == null ? void 0 : Te(f(Re))))), Si = /* @__PURE__ */ ne(() => (M(f(Re)), O(() => qe(f(Re))))), ki = /* @__PURE__ */ ne(() => (M(f(Re)), O(() => Me(f(Re)))));
                    ap(Vn, hr(
                      {
                        get x() {
                          return M(f(Re)), O(() => f(Re).internals.positionAbsolute.x);
                        },
                        get y() {
                          return M(f(Re)), O(() => f(Re).internals.positionAbsolute.y);
                        }
                      },
                      () => f(Jt),
                      {
                        get selected() {
                          return M(f(Re)), O(() => f(Re).selected);
                        },
                        get color() {
                          return f(Ei);
                        },
                        get borderRadius() {
                          return m();
                        },
                        get strokeColor() {
                          return f(Si);
                        },
                        get strokeWidth() {
                          return k();
                        },
                        get shapeRendering() {
                          return ae;
                        },
                        get class() {
                          return f(ki);
                        }
                      }
                    ));
                  }
                };
                Ge(it, (Vn) => {
                  M(f(Re)), M(ro), O(() => f(Re) && ro(f(Re))) && Vn(No);
                });
              }
              J(Ct, xi);
            });
            var bi = Oe(wi);
            gt(ce, (Ct, pt) => Fo == null ? void 0 : Fo(Ct, pt), () => ({
              panZoom: a(),
              viewport: G,
              getViewScale: kt,
              translateExtent: u(),
              width: i(),
              height: o(),
              inversePan: Z(),
              zoomStep: Q(),
              pannable: q(),
              zoomable: j()
            })), Ve(() => {
              te(ce, "width", f(g)), te(ce, "height", f(b)), te(ce, "viewBox", `${f(C) ?? ""} ${f(z) ?? ""} ${f(P) ?? ""} ${f(D) ?? ""}`), te(ce, "aria-labelledby", ft), Qe = St(ce, "", Qe, {
                "--xy-minimap-mask-background-color-props": N(),
                "--xy-minimap-mask-stroke-color-props": A(),
                "--xy-minimap-mask-stroke-width-props": I() ? I() * f(x) : void 0
              }), te(bi, "d", `M${f(C) - f(p)},${f(z) - f(p)}h${f(P) + f(p) * 2}v${f(D) + f(p) * 2}h${-f(P) - f(p) * 2}z
      M${f(d), O(() => f(d).x) ?? ""},${f(d), O(() => f(d).y) ?? ""}h${f(d), O(() => f(d).width) ?? ""}v${f(d), O(() => f(d).height) ?? ""}h${f(d), O(() => -f(d).width) ?? ""}z`);
            }), J(Ie, ce);
          };
          Ge(ze, (Ie) => {
            a() && Ie(Pe);
          });
        }
        J(Ue, jt);
      },
      $$slots: { default: !0 }
    });
  }
  he(), h();
}
var dp = /* @__PURE__ */ Ye("<!> <!> <!>", 1), hp = /* @__PURE__ */ Ye('<div style="width: 100%; height: 500px; border: 1px solid #ccc;"><!></div>');
function gp(e, t) {
  de(t, !0);
  let n = v(t, "nodes", 19, () => []), r = v(t, "edges", 19, () => []), i = /* @__PURE__ */ Qt(n().length > 0 ? n() : [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } }
  ]), o = /* @__PURE__ */ Qt(r().length > 0 ? r() : [{ id: "e1-2", source: "1", target: "2" }]);
  var s = hp(), l = Xe(s);
  Ly(l, {
    fitView: !0,
    get nodes() {
      return f(i);
    },
    set nodes(a) {
      Y(i, a);
    },
    get edges() {
      return f(o);
    },
    set edges(a) {
      Y(o, a);
    },
    children: (a, u) => {
      var c = dp(), h = $e(c);
      Qy(h, {});
      var d = Oe(h, 2);
      sp(d, {});
      var g = Oe(d, 2);
      fp(g, {}), J(a, c);
    },
    $$slots: { default: !0 }
  }), J(e, s), he();
}
document.addEventListener("alpine:init", () => {
  window.Alpine.data("flowBuilder", ({ state: e }) => ({
    state: e,
    init() {
      var t, n;
      Hf(gp, {
        target: this.$refs.canvas,
        props: {
          nodes: ((t = this.state) == null ? void 0 : t.nodes) || [],
          edges: ((n = this.state) == null ? void 0 : n.edges) || []
        }
      });
    }
  }));
});
